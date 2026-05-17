"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Sun, Moon, Loader2, CheckCircle2, XCircle, Users, Award, ChevronDown, ChevronUp, Plus, Heart, Copy, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { register } from "swiper/element/bundle";
import { translations } from "@/utils/translations";
import { LogResult, SavedAccount, SystemStats } from "./types/redeem";
import SystemStatsBar from "./components/SystemStatsBar";
import AccountModal from "./components/AccountModal";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        ref?: React.RefObject<any>;
        init?: string;
        class?: string;
      }, HTMLElement>;
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

register();

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [roleIds, setRoleIds] = useState<string[]>([""]);
  const [codes, setCodes] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<LogResult[]>([]);
  const [savedAccounts, setSavedAccounts] = useState<SavedAccount[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInputId, setModalInputId] = useState("");
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState("");
  const [modalSuccess, setModalSuccess] = useState("");
  const [isCodesExpanded, setIsCodesExpanded] = useState(false);
  const [isLogsExpanded, setIsLogsExpanded] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState<SystemStats | null>(null);
  
  const [banner1Loaded, setBanner1Loaded] = useState(false);
  const [banner2Loaded, setBanner2Loaded] = useState(false);

  const swiperRef = useRef<any>(null);

  const syncAccountsToDatabase = async (count: number) => {
    try {
      await axios.post("/api/stats", { action: "sync-accounts", accountCount: count });
    } catch (e) {}
  };

  const fetchSystemStats = async () => {
    try {
      const response = await axios.get("/api/stats");
      if (response.data) {
        setStats({
          activeUsers: response.data.activeUsers || 0,
          totalSavedAccounts: response.data.totalSavedAccounts || 0,
          totalRedeemed: response.data.totalRedeemed || 0
        });
      }
    } catch (e) {}
  };

  const trackVisitor = async () => {
    try {
      await axios.post("/api/stats", { action: "increment-visitor" });
    } catch (e) {}
  };

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const initAccounts = () => {
      const accounts = localStorage.getItem("saved_accounts");
      if (accounts) {
        const localParsed = JSON.parse(accounts);
        setSavedAccounts(localParsed);
        syncAccountsToDatabase(localParsed.length);
      } else {
        setSavedAccounts([]);
        syncAccountsToDatabase(0);
      }
      fetchSystemStats();
    };

    const sendPing = async () => {
      try {
        await axios.post("/api/stats", { action: "ping" });
      } catch (e) {}
    };

    trackVisitor();
    sendPing();
    initAccounts();

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      injectStyles: [
        `
        .swiper-pagination-bullet {
          background: #d4d4d8;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #18181b !important;
          opacity: 1;
        }
        .dark .swiper-pagination-bullet {
          background: #27272a;
        }
        .dark .swiper-pagination-bullet-active {
          background: #f4f4f5 !important;
        }
        `,
      ],
    };

    if (swiperRef.current) {
      Object.assign(swiperRef.current, swiperParams);
      swiperRef.current.initialize();
    }

    const pingInterval = setInterval(sendPing, 25000);
    const statsInterval = setInterval(fetchSystemStats, 30000);

    return () => {
      clearInterval(pingInterval);
      clearInterval(statsInterval);
    };
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().split(" ")[0];
  };

  const handleAddAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalInputId.trim() || modalLoading) return;

    setModalLoading(true);
    setModalError("");
    setModalSuccess("");

    try {
      const response = await axios.post("/api/redeem", {
        action: "check-info",
        roleId: modalInputId.trim()
      });

      if (response.data?.returnCode === 1 && response.data?.data) {
        const resData = response.data.data;
        const newAcc: SavedAccount = {
          roleId: modalInputId.trim(),
          serverID: resData.serverID || "101",
          roleName: resData.roleName || "Unknown",
          level: resData.info?.level || "0"
        };

        await axios.post("/api/stats", {
          action: "save-db-account",
          ...newAcc
        });

        const updated = [...savedAccounts.filter(a => a.roleId !== newAcc.roleId), newAcc];
        setSavedAccounts(updated);
        localStorage.setItem("saved_accounts", JSON.stringify(updated));
        syncAccountsToDatabase(updated.length);
        fetchSystemStats();

        setModalInputId("");
        setModalSuccess(`Đã lưu tài khoản: ${newAcc.roleName}`);
        setTimeout(() => {
          setModalSuccess("");
        }, 2000);
      } else {
        setModalError(response.data?.returnMessage || "Không tìm thấy thông tin tài khoản");
      }
    } catch (error) {
      setModalError("Lỗi kết nối hệ thống khi check thông tin");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteAccount = async (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa tài khoản này khỏi danh sách?")) {
      try {
        await axios.post("/api/stats", { action: "delete-db-account", roleId: id });
      } catch (e) {}

      const updated = savedAccounts.filter(a => a.roleId !== id);
      setSavedAccounts(updated);
      localStorage.setItem("saved_accounts", JSON.stringify(updated));
      syncAccountsToDatabase(updated.length);
      fetchSystemStats();
    }
  };

  const handlePasteId = (id: string) => {
    const trimmedId = id.trim();
    if (roleIds.includes(trimmedId)) {
      alert("ID nhân vật này đã có trong ô nhập rồi!");
      setIsModalOpen(false);
      return;
    }

    const emptyIndex = roleIds.findIndex(val => val.trim() === "");
    if (emptyIndex !== -1) {
      const updated = [...roleIds];
      updated[emptyIndex] = trimmedId;
      setRoleIds(updated);
    } else {
      setRoleIds([...roleIds, trimmedId]);
    }
    setIsModalOpen(false);
  };

  const handleInsertPresetCodes = async () => {
    try {
      const response = await axios.post("/api/stats", { action: "get-preset-codes" });
      if (response.data?.codes) {
        setCodes(response.data.codes.join("\n"));
      }
    } catch (e) {
      alert("Không thể tải danh sách code từ hệ thống");
    }
  };

  const handleAddIdInput = () => {
    setRoleIds([...roleIds, ""]);
  };

  const handleIdInputChange = (index: number, value: string) => {
    const updated = [...roleIds];
    updated[index] = value;
    setRoleIds(updated);
  };

  const handleRemoveIdInput = (index: number) => {
    if (roleIds.length === 1) {
      setRoleIds([""]);
      return;
    }
    setRoleIds(roleIds.filter((_, i) => i !== index));
  };

  const handleCopySTK = () => {
    navigator.clipboard.writeText("2006080909999");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validRoleIds = roleIds.map((id) => id.trim()).filter((id) => id !== "");
    if (validRoleIds.length === 0 || !codes.trim()) return;

    setLoading(true);
    setResults([]);

    try {
      await axios.post("/api/stats", { action: "increment-redeem" });
      fetchSystemStats();
    } catch (err) {}

    const listCodes = codes
      .split("\n")
      .map((c) => c.trim())
      .filter((c) => c !== "");

    const maxThreads = 10;
    const activeWorkers = Math.min(maxThreads, validRoleIds.length);
    const idQueue = [...validRoleIds];

    const executeUserTasks = async (currentRoleId: string) => {
      const activeRole = savedAccounts.find((a) => a.roleId === currentRoleId);
      const displayName = activeRole?.roleName || currentRoleId;

      for (let i = 0; i < listCodes.length; i++) {
        const code = listCodes[i];
        const logKey = `${currentRoleId}_${code}`;
        const timeStr = getCurrentTime();

        setResults((prev) => {
          const exist = prev.some((item) => item.code === logKey);
          if (exist) {
            return prev.map((item) =>
              item.code === logKey ? { ...item, time: timeStr, status: "pending", message: `[${displayName}] Đang nhập...` } : item
            );
          }
          return [...prev, { time: timeStr, code: logKey, status: "pending", message: `[${displayName}] Đang nhập...` }];
        });

        let retry = true;
        while (retry) {
          retry = false;
          try {
            const response = await axios.post("/api/redeem", {
              roleId: currentRoleId,
              code,
              serverId: activeRole?.serverID || "101",
              roleName: displayName,
            });

            const rawContentType = response.headers["content-type"];
            const contentType = typeof rawContentType === "string" ? rawContentType : "";

            if (typeof response.data !== "object" || (contentType && !contentType.includes("application/json"))) {
              setResults((prev) =>
                prev.map((item) =>
                  item.code === logKey ? { ...item, status: "pending", message: `[${displayName}] Server lỗi, đang thử lại...` } : item
                )
              );
              await new Promise((r) => setTimeout(r, 3000));
              retry = true;
              continue;
            }

            const rawMsg = response.data?.message || response.data?.msg || "Success";
            const msg = translations[rawMsg] || rawMsg;

            setResults((prev) =>
              prev.map((item) =>
                item.code === logKey ? { ...item, status: "success", message: `[${displayName}] ${msg}` } : item
              )
            );
          } catch (error: any) {
            const response = error.response;
            const rawContentType = response?.headers?.["content-type"];
            const contentType = typeof rawContentType === "string" ? rawContentType : "";

            if (response && (!contentType.includes("application/json") || typeof response.data !== "object")) {
              setResults((prev) =>
                prev.map((item) =>
                  item.code === logKey ? { ...item, status: "pending", message: `[${displayName}] Server lỗi, đang thử lại...` } : item
                )
              );
              await new Promise((r) => setTimeout(r, 3000));
              retry = true;
              continue;
            }

            const rawErrMsg = response?.data?.message || response?.data?.msg || "Lỗi xử lý hoặc mã không hợp lệ";
            const errMsg = translations[rawErrMsg] || rawErrMsg;
            setResults((prev) =>
              prev.map((item) =>
                item.code === logKey ? { ...item, status: "error", message: `[${displayName}] ${errMsg}` } : item
              )
            );
          }
        }

        if (i < listCodes.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 2500));
        }
      }
    };

    const worker = async () => {
      while (idQueue.length > 0) {
        const nextId = idQueue.shift();
        if (!nextId) break;
        await executeUserTasks(nextId);
      }
    };

    const workers = [];
    for (let t = 0; t < activeWorkers; t++) {
      workers.push(worker());
    }
    await Promise.all(workers);
    setLoading(false);
  };

  const totalLines = codes.split("\n").filter(line => line.trim() !== "").length;
  const shouldShowToggle = totalLines > 8;
  const currentTotal = results.length;
  const currentSuccess = results.filter((r) => r.status === "success").length;
  const currentError = results.filter((r) => r.status === "error").length;

  const shouldShowLogsToggle = currentTotal > 6;
  const visibleResults = isLogsExpanded ? results : results.slice(0, 6);

  const handlePrevBanner = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextBanner = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 transition-colors duration-200 dark:bg-black dark:text-zinc-100">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6 border-b border-zinc-100 dark:border-zinc-900/60">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold tracking-wider uppercase opacity-80">
            CFL Tool
          </span>
          <SystemStatsBar stats={stats} />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsDonateOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-zinc-200 bg-white shadow-sm outline-none transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-rose-500 dark:text-rose-400"
          >
            <Heart size={14} className="fill-current" />
            Donate
          </button>
          <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2 text-zinc-600 border border-zinc-200 bg-white shadow-sm rounded-xl outline-none dark:text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </nav>
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="group relative mb-6 overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-100 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900 aspect-[686/294]">
          <swiper-container ref={swiperRef} init="false" className="w-full h-full">
            <swiper-slide className="relative w-full h-full">
              {!banner1Loaded && (
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-zinc-400 dark:text-zinc-500" />
                </div>
              )}
              <img
                src="https://cdn.omnirise.com/cms/CFL_top_banner_686x294_c980473d19.png?w=750&q=75"
                alt="CFL Top Banner"
                className={`h-full w-full object-cover select-none transition-opacity duration-300 ${banner1Loaded ? "opacity-100" : "opacity-0"}`}
                loading="eager"
                onLoad={() => setBanner1Loaded(true)}
              />
            </swiper-slide>
            <swiper-slide className="relative w-full h-full">
              {!banner2Loaded && (
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-zinc-400 dark:text-zinc-500" />
                </div>
              )}
              <img
                src="https://cdn.omnirise.com/cms/CFL_bottom_banner_686x294_178521dbca.png?w=750&q=75"
                alt="CFL Bottom Banner"
                className={`h-full w-full object-cover select-none transition-opacity duration-300 ${banner2Loaded ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
                onLoad={() => setBanner2Loaded(true)}
              />
            </swiper-slide>
          </swiper-container>

          <button
            type="button"
            onClick={handlePrevBanner}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/90 text-zinc-700 backdrop-blur-sm shadow-sm outline-none transition-all opacity-0 group-hover:opacity-100 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={handleNextBanner}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-200/80 bg-white/90 text-zinc-700 backdrop-blur-sm shadow-sm outline-none transition-all opacity-0 group-hover:opacity-100 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Next slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                ID Nhân vật
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAddIdInput}
                  className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded-lg px-2 py-1 bg-white dark:bg-zinc-900 outline-none hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Plus size={12} />
                  Thêm ô nhập ID
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setModalError("");
                    setModalSuccess("");
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded-lg px-2.5 py-1 bg-white dark:bg-zinc-900 outline-none"
                >
                  <Users size={12} />
                  Danh Sách ID ({savedAccounts.length} ID)
                </button>
              </div>
            </div>
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {roleIds.map((id, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    required
                    disabled={loading}
                    value={id}
                    onChange={(e) => handleIdInputChange(index, e.target.value)}
                    placeholder={`Nhập ID nhân vật thứ ${index + 1}...`}
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-base outline-none transition-all placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:focus:border-zinc-700"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => handleRemoveIdInput(index)}
                      className="p-3 text-xs font-medium text-red-500 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 outline-none hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shrink-0 disabled:opacity-40"
                    >
                      Xóa
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="codes" className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Danh sách Giftcode (Mỗi dòng 1 code)
              </label>
              <button
                type="button"
                disabled={loading}
                onClick={handleInsertPresetCodes}
                className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded-lg px-2.5 py-1 bg-white dark:bg-zinc-900 outline-none disabled:opacity-40"
              >
                <Award size={12} />
                Sử dụng Code Sẵn
              </button>
            </div>
            <div className="relative">
              <textarea
                id="codes"
                required
                rows={isCodesExpanded ? 16 : 6}
                disabled={loading}
                value={codes}
                onChange={(e) => setCodes(e.target.value)}
                placeholder="Mã CODE 1&#10;Mã CODE 2&#10;Mã CODE 3..."
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 font-mono text-base outline-none transition-all placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:focus:border-zinc-700 resize-none overflow-y-auto"
              />
              {shouldShowToggle && (
                <div className="absolute bottom-3 right-3 flex items-center z-10">
                  <button
                    type="button"
                    onClick={() => setIsCodesExpanded(!isCodesExpanded)}
                    className="flex items-center gap-1 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1.5 rounded-xl border border-zinc-200/80 bg-white/90 text-zinc-600 backdrop-blur-sm shadow-sm outline-none transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  >
                    {isCodesExpanded ? (
                      <>
                        Thu gọn <ChevronUp size={12} />
                      </>
                    ) : (
                      <>
                        Xem thêm ({totalLines} dòng) <ChevronDown size={12} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading || roleIds.filter(id => id.trim() !== "").length === 0 || !codes.trim()}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-4 text-sm font-medium text-white transition-opacity disabled:opacity-40 dark:bg-zinc-100 dark:text-black"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Đang tiến hành nhập code...
              </>
            ) : (
              "Bắt đầu kích hoạt"
            )}
          </button>
        </form>
        {results.length > 0 && (
          <div className="mt-12 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-2 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Tiến trình thực hiện
                </h3>
                <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 animate-pulse select-none">
                  (Vuốt ngang để xem hết)
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] font-mono font-bold uppercase tracking-wide">
                <span className="text-zinc-500 dark:text-zinc-400">Tổng: {currentTotal}</span>
                <span className="text-emerald-600 dark:text-emerald-400">Thành công: {currentSuccess}</span>
                <span className="text-red-500 dark:text-red-400">Thất bại: {currentError}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 shadow-sm overflow-x-auto scrollbar-thin">
              <div className="space-y-2 font-mono text-xs relative min-w-[500px]">
                {visibleResults.map((res, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-x-4 border-b border-zinc-100 py-2.5 last:border-0 dark:border-zinc-800/50"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <span className="text-zinc-500 dark:text-zinc-400 shrink-0">[{res.time}]</span>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100 shrink-0">{res.code.split("_")[1] || res.code}</span>
                      <span className="text-zinc-400 dark:text-zinc-500 shrink-0">-</span>
                      <span className="text-zinc-600 dark:text-zinc-400 break-all">{res.message}</span>
                    </div>
                    <div className="flex items-center shrink-0 pl-2">
                      {res.status === "success" && (
                        <CheckCircle2 size={14} className="text-green-500" />
                      )}
                      {res.status === "error" && (
                        <XCircle size={14} className="text-red-500" />
                      )}
                      {res.status === "pending" && (
                        <Loader2 size={14} className="animate-spin text-zinc-400" />
                      )}
                    </div>
                  </div>
                ))}
                {shouldShowLogsToggle && (
                  <div className="pt-3 flex justify-center border-t border-zinc-100 dark:border-zinc-800/50 mt-2 sticky left-0 right-0">
                    <button
                      type="button"
                      onClick={() => setIsLogsExpanded(!isLogsExpanded)}
                      className="flex items-center gap-1 text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-xl border border-zinc-200 bg-white text-zinc-600 shadow-sm outline-none transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    >
                      {isLogsExpanded ? (
                        <>
                          Thu gọn dòng log <ChevronUp size={12} />
                        </>
                      ) : (
                        <>
                          Xem thêm ({currentTotal - 6} dòng log) <ChevronDown size={12} />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      {isDonateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 shadow-xl transition-all">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 text-center mb-1">
              Ủng hộ tác giả
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center mb-5">
              Nếu thấy tool hữu ích hãy donate bằng
            </p>
            <div className="flex justify-center mb-5">
              <div className="p-2 bg-white rounded-2xl border border-zinc-100 dark:border-zinc-800">
                <img
                  src="https://img.vietqr.io/image/MB-2006080909999-compact.png"
                  alt="QR Donate"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
            <div className="space-y-2.5 text-xs font-mono bg-zinc-50 dark:bg-zinc-950 p-3.5 rounded-2xl border border-zinc-100 dark:border-zinc-800/60">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Ngân hàng:</span>
                <span className="font-bold text-zinc-800 dark:text-zinc-200">MBBANK</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Tên TK:</span>
                <span className="font-bold text-zinc-800 dark:text-zinc-200">TRAN NGUYEN KHA</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-zinc-200/40 dark:border-zinc-800/40">
                <span className="text-zinc-400">Số TK:</span>
                <button
                  type="button"
                  onClick={handleCopySTK}
                  className="flex items-center gap-1 font-bold text-zinc-900 dark:text-white hover:opacity-80 transition-opacity outline-none"
                >
                  <span>2006080909999</span>
                  {copied ? (
                    <Check size={12} className="text-green-500" />
                  ) : (
                    <Copy size={12} className="text-zinc-400" />
                  )}
                </button>
              </div>
            </div>
            {copied && (
              <p className="text-center text-[11px] font-medium text-green-500 mt-2.5 animate-fade-in">
                Đã sao chép số tài khoản thành công!
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                setCopied(false);
                setIsDonateOpen(false);
              }}
              className="mt-5 w-full rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white dark:bg-zinc-100 dark:text-black outline-none"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
      <AccountModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalInputId("");
          setModalError("");
          setModalSuccess("");
          setIsModalOpen(false);
        }}
        savedAccounts={savedAccounts}
        modalInputId={modalInputId}
        setModalInputId={setModalInputId}
        modalLoading={modalLoading}
        modalError={modalError}
        modalSuccess={modalSuccess}
        onAddAccount={handleAddAccount}
        onDeleteAccount={handleDeleteAccount}
        onPasteId={handlePasteId}
      />
    </div>
  );
}
