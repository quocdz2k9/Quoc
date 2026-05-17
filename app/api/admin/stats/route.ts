import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const PRESET_CODES = [
  "CFLGAMEOFTHEYEAR", "CFLCAMXUC03", "CFLALLSTAR", "MUNGLE3004", "CFLSHOOTFORWIN", "MELOWINNER",
  "CFL500VOTE", "TOIYEUCFL", "1000CFLVOTE", "LIKE500KCFL", "CFLTOP1APP", "CFLTOP1GG",
  "TOP1APPLECFL", "BAOLAOBLABLA", "SMILEGGCOLEN", "VOTAYSMILEGG", "SMILEGGWIN", "SMILEGGCFL",
  "SMILEGG500VIEW", "SMILEGGSMILE", "BAOLAOCFL4", "BAOLAOLIVESTR", "BAOLAO10DIEM", "ZOZOMAIDINH",
  "SIEUNHANZOZO", "ZOZOCFL20", "XATHUZOZO", "ZOZOREACH500", "ZOZOVODICH", "TOANDANF11",
  "2026CFLKHAIHOA", "HUYENTHOAICF", "LIKE1KOBCFL", "HANOI1KXCAUVS", "HANOI2KX5AUVS", "HANOI3KXCPMMN",
  "DANANG1KMX92WK", "HCM1KASPO29S", "HCM3KASMCSS", "HCM4KAS99DNS", "APRIL1500FOOL", "APRILFOOL1000",
  "HAPPYAPRILFOOL", "BAOLAOFOOL", "BAOLAOSPY", "BAOLAOMASOI", "BAOLAOC4BL", "BAOLAOGRC4",
  "BAOLAOVUIVE", "CFLGAMEVERSE", "CFLFORYOURDAY", "CFLVOTINGTIME", "MEEEELOOO", "VUYPWAMELO",
  "HELLOMELO", "MELOTOP1CFL", "500MELO500", "HCM2KASP929S", "CFLPLAYNOW", "CFLMAIDINH02",
  "THANTOCCFL01"
];

export async function GET() {
  try {
    const todayStr = new Date().toISOString().split("T")[0];

    const todayStat = await prisma.redeemStatistic.findUnique({
      where: { id: `visitors_${todayStr}` }
    });
    const todayVisitors = todayStat?.count || 0;

    const totalStat = await prisma.redeemStatistic.findUnique({
      where: { id: "total_visitors" }
    });
    const totalVisitors = totalStat?.count || 0;

    let giftcodes = await prisma.giftcode.findMany({
      orderBy: { createdAt: "desc" }
    });

    if (giftcodes.length === 0) {
      const dataToInsert = PRESET_CODES.map(code => ({ code }));
      await prisma.giftcode.createMany({
        data: dataToInsert,
        skipDuplicates: true
      });
      giftcodes = await prisma.giftcode.findMany({
        orderBy: { createdAt: "desc" }
      });
    }

    return NextResponse.json({
      todayVisitors,
      totalVisitors,
      giftcodes
    });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi hệ thống khi lấy dữ liệu admin" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, code, id } = body;

    if (action === "add-code") {
      if (!code || !code.trim()) {
        return NextResponse.json({ error: "Mã code không hợp lệ" }, { status: 400 });
      }
      const formattedCode = code.trim().toUpperCase();
      const existing = await prisma.giftcode.findUnique({
        where: { code: formattedCode }
      });
      if (existing) {
        return NextResponse.json({ error: "Mã code này đã tồn tại" }, { status: 400 });
      }
      const newCode = await prisma.giftcode.create({
        data: { code: formattedCode }
      });
      return NextResponse.json({ success: true, giftcode: newCode });
    }

    if (action === "delete-code") {
      if (!id) {
        return NextResponse.json({ error: "Thiếu thông tin ID" }, { status: 400 });
      }
      await prisma.giftcode.delete({
        where: { id }
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Hành động không hợp lệ" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi xử lý dữ liệu code" }, { status: 500 });
  }
}

