import { NextResponse } from "next/server";
import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, roleId, code, serverId, roleName } = body;

    const staticAgent = new HttpsProxyAgent("http://Proxy_ifxawsni:52YRbtdprH@163.223.15.120:40290");
    const rotateAgent = new HttpsProxyAgent("http://sp07v2-37442:GTNTI@sp07v2-03.proxy.mkvn.net:37442");
    const fallbackStatuses = [402, 403, 407, 429, 502];

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
      let useStatic = false;
      let useRotate = false;

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
      } catch (err: any) {
        const status = err.response?.status;
        if (status && !fallbackStatuses.includes(status)) {
          throw err;
        }
        useStatic = true;
      }

      if (useStatic) {
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
              httpsAgent: staticAgent,
              proxy: false,
              timeout: 10000
            }
          );
        } catch (err2: any) {
          const status2 = err2.response?.status;
          if (status2 && !fallbackStatuses.includes(status2)) {
            throw err2;
          }
          useRotate = true;
        }
      }

      if (useRotate) {
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

      return NextResponse.json(response.data);
    }

    let response;
    let useStatic = false;
    let useRotate = false;

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
    } catch (err: any) {
      const status = err.response?.status;
      if (status && !fallbackStatuses.includes(status)) {
        throw err;
      }
      useStatic = true;
    }

    if (useStatic) {
      try {
        response = await axios.post(
          "https://vgrapi-sea.vnggames.com/coordinator/api/v1/code/redeem",
          redeemPayload,
          { headers: redeemHeaders, httpsAgent: staticAgent, proxy: false, timeout: 10000 }
        );
      } catch (err2: any) {
        const status2 = err2.response?.status;
        if (status2 && !fallbackStatuses.includes(status2)) {
          throw err2;
        }
        useRotate = true;
      }
    }

    if (useRotate) {
      response = await axios.post(
        "https://vgrapi-sea.vnggames.com/coordinator/api/v1/code/redeem",
        redeemPayload,
        { headers: redeemHeaders, httpsAgent: rotateAgent, proxy: false, timeout: 10000 }
      );
    }

    return NextResponse.json(response.data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const data = error.response?.data || { message: "Lỗi kết nối API" };
    return NextResponse.json(data, { status });
  }
}
