import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "127.0.0.1";
}

export async function GET(req: Request) {
  try {
    const timeThreshold = new Date(Date.now() - 15 * 1000);
    await prisma.activeSession.deleteMany({
      where: { updatedAt: { lt: timeThreshold } }
    });

    const activeUsers = await prisma.activeSession.count();
    const totalSavedAccounts = await prisma.savedAccount.count();      
    const redeemStat = await prisma.redeemStatistic.upsert({
      where: { id: "global_stats" },
      update: {},
      create: { id: "global_stats", count: 0 }
    });
    const totalRedeemed = redeemStat.count;

    return NextResponse.json({
      activeUsers,
      totalSavedAccounts,
      totalRedeemed
    });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi hệ thống khi lấy thống kê" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, accountCount, roleId, serverID, roleName, level } = body;
    const ip = getClientIp(req);

    if (action === "ping") {
      await prisma.activeSession.upsert({
        where: { ip },
        update: { updatedAt: new Date() },
        create: { ip }
      });
      return NextResponse.json({ success: true });
    }

    if (action === "sync-accounts") {
      await prisma.savedAccountCount.upsert({
        where: { ip },
        update: { count: Number(accountCount) || 0 },
        create: { ip, count: Number(accountCount) || 0 }
      });
      return NextResponse.json({ success: true });
    }

    if (action === "increment-redeem") {
      await prisma.redeemStatistic.upsert({
        where: { id: "global_stats" },
        update: { count: { increment: 1 } },
        create: { id: "global_stats", count: 1 }
      });
      return NextResponse.json({ success: true });
    }

    if (action === "save-db-account") {
      if (!roleId) return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
      await prisma.savedAccount.upsert({
        where: { roleId },
        update: { serverID, roleName, level },
        create: { roleId, serverID, roleName, level }
      });
      return NextResponse.json({ success: true });
    }

    if (action === "delete-db-account") {
      if (!roleId) return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
      await prisma.savedAccount.deleteMany({
        where: { roleId }
      });
      return NextResponse.json({ success: true });
    }

    if (action === "get-db-accounts") {
      return NextResponse.json({ accounts: [] });
    }

    if (action === "increment-visitor") {
      const todayStr = new Date().toISOString().split("T")[0];

      await prisma.redeemStatistic.upsert({
        where: { id: "total_visitors" },
        update: { count: { increment: 1 } },
        create: { id: "total_visitors", count: 1 }
      });

      await prisma.redeemStatistic.upsert({
        where: { id: `visitors_${todayStr}` },
        update: { count: { increment: 1 } },
        create: { id: `visitors_${todayStr}`, count: 1 }
      });
      return NextResponse.json({ success: true });
    }

    if (action === "get-preset-codes") {
      const codesData = await prisma.giftcode.findMany({
        orderBy: { createdAt: "asc" }
      });
      const codeList = codesData.map(c => c.code);
      return NextResponse.json({ codes: codeList });
    }

    return NextResponse.json({ error: "Hành động không hợp lệ" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi xử lý dữ liệu thống kê" }, { status: 500 });
  }
}
