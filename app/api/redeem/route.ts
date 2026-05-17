import { NextResponse } from "next/server";
import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";

let currentRotatingProxyIp = "";
let lastRotateTime = 0;
const ROTATE_INTERVAL = 50 * 1000;

async function getRotatingProxy(): Promise<string | null> {
  const now = Date.now();
  if (currentRotatingProxyIp && now - lastRotateTime < ROTATE_INTERVAL) {
    return currentRotatingProxyIp;
  }
  try {
    const res = await axios.get("https://proxy.mkvn.net/sp07v2/37442-EHYNGRXFLC", { timeout: 5000 });
    if (res.data && res.data.ipreal) {
      currentRotatingProxyIp = res.data.ipreal;
      lastRotateTime = now;
      return currentRotatingProxyIp;
    }
  } catch (e) {
    console.error("-> Lỗi khi gọi API lấy IP xoay MKVN:", e instanceof Error ? e.message : e);
  }
  return currentRotatingProxyIp || null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, roleId, code, serverId, roleName } = body;

    if (action === "check-info") {
      const params = new URLSearchParams();
      params.append("platform", "mobile");
      params.append("clientKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiMTAxMDQ5IiwiYSI6IjEwMTA0OSIsInMiOjF9.gRZXpz23XDuCB_Px8INGXldSlaGiCCsuIvw5dfjuXEY");
      params.append("loginType", "9");
      params.append("lang", "VI");
      params.append("roleID", roleId);
      params.append("roleName", roleId);
      params.append("getVgaId", "0");

      let response;
      try {
        response = await axios.post(
          "https://billing.vnggames.com/fe/api/auth/quick",
          params.toString(),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Origin": "https://shop.vnggames.com",
              "Referer": "https://shop.vnggames.com/",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            timeout: 10000
          }
        );
      } catch (err) {
        console.warn("-> [Check-Info] IP Hệ thống lỗi, chuyển sang Proxy tĩnh IPv4...");
        try {
          const staticAgent = new HttpsProxyAgent("http://Proxy_ifxawsni:52YRbtdprH@163.223.15.120:40290");
          response = await axios.post(
            "https://billing.vnggames.com/fe/api/auth/quick",
            params.toString(),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "https://shop.vnggames.com",
                "Referer": "https://shop.vnggames.com/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              },
              httpsAgent: staticAgent,
              proxy: false,
              timeout: 10000
            }
          );
        } catch (err2) {
          console.warn("-> [Check-Info] Proxy tĩnh lỗi, chuyển sang Proxy xoay MKVN...");
          const rotatingIp = await getRotatingProxy();
          if (!rotatingIp) throw err2;
          const rotateUrl = rotatingIp.includes(":") ? `http://${rotatingIp}` : `http://${rotatingIp}:80`;
          const rotateAgent = new HttpsProxyAgent(rotateUrl);
          response = await axios.post(
            "https://billing.vnggames.com/fe/api/auth/quick",
            params.toString(),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "https://shop.vnggames.com",
                "Referer": "https://shop.vnggames.com/",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              },
              httpsAgent: rotateAgent,
              proxy: false,
              timeout: 10000
            }
          );
        }
      }
      return NextResponse.json(response.data);
    }

    let response;
    const redeemPayload = {
      _targetServerId: parseInt(serverId) || parseInt(roleId) || 0,
      serverId: serverId || "101",
      gameCode: "A49",
      roleId: roleId,
      roleName: roleName || roleId,
      code: code,
    };

    const redeemHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Origin": "https://giftcode.vnggames.com",
      "Referer": "https://giftcode.vnggames.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "X-Client-Region": "VN",
    };

    try {
      response = await axios.post(
        "https://vgrapi-sea.vnggames.com/coordinator/api/v1/code/redeem",
        redeemPayload,
        { headers: redeemHeaders, timeout: 10000 }
      );
    } catch (err) {
      console.warn("-> [Redeem] IP Hệ thống lỗi, chuyển sang Proxy tĩnh IPv4...");
      try {
        const staticAgent = new HttpsProxyAgent("http://Proxy_ifxawsni:52YRbtdprH@163.223.15.120:40290");
        response = await axios.post(
          "https://vgrapi-sea.vnggames.com/coordinator/api/v1/code/redeem",
          redeemPayload,
          { headers: redeemHeaders, httpsAgent: staticAgent, proxy: false, timeout: 10000 }
        );
      } catch (err2) {
        console.warn("-> [Redeem] Proxy tĩnh lỗi, chuyển sang Proxy xoay MKVN...");
        const rotatingIp = await getRotatingProxy();
        if (!rotatingIp) throw err2;
        const rotateUrl = rotatingIp.includes(":") ? `http://${rotatingIp}` : `http://${rotatingIp}:80`;
        const rotateAgent = new HttpsProxyAgent(rotateUrl);
        response = await axios.post(
          "https://vgrapi-sea.vnggames.com/coordinator/api/v1/code/redeem",
          redeemPayload,
          { headers: redeemHeaders, httpsAgent: rotateAgent, proxy: false, timeout: 10000 }
        );
      }
    }
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("-> [Fatal Error] Tất cả các tầng kết nối đều thất bại:");
    if (error.response) {
      console.error(`   Status: ${error.response.status} | Data:`, error.response.data);
    } else {
      console.error(`   Message: ${error.message}`);
    }
    const status = error.response?.status || 500;
    const data = error.response?.data || { message: "Lỗi kết nối API" };
    return NextResponse.json(data, { status });
  }
}

