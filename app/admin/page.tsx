"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Users, BarChart3, Loader2, Plus, Trash2, Megaphone, Save } from "lucide-react";

interface Giftcode {
  id: string;
  code: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [adminStats, setAdminStats] = useState({ todayVisitors: 0, totalVisitors: 0 });
  const [giftcodes, setGiftcodes] = useState<Giftcode[]>([]);
  const [newCodeInput, setNewCodeInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const [noticeContent, setNoticeContent] = useState("");
  const [isNoticeActive, setIsNoticeActive] = useState(false);
  const [noticeSaveLoading, setNoticeSaveLoading] = useState(false);

  const fetchAdminStats = async () => {
    try {
      const res = await axios.get("/api/admin/stats");
      if (res.data) {
        setAdminStats({
          todayVisitors: res.data.todayVisitors || 0,
          totalVisitors: res.data.totalVisitors || 0
        });
        setGiftcodes(res.data.giftcodes || []);
        setNoticeContent(res.data.notice?.content || "");
        setIsNoticeActive(res.data.notice?.isActive || false);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminStats();
    const interval = setInterval(fetchAdminStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleAddCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCodeInput.trim() || actionLoading) return;

    setActionLoading(true);
    try {
      const res = await axios.post("/api/admin/stats", {
        action: "add-code",
        code: newCodeInput
      });
      if (res.data?.success) {
        setNewCodeInput("");
        await fetchAdminStats();
      }
    } catch (err: any) {
      alert(err.response?.data?.error || "Lỗi khi thêm mã code");
    } finaly {
      setActionLoading(false);
    }
  };

  const handleDeleteCode = async (id: string, currentCode: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa code [ ${currentCode} ] không?`)) return;

    setActionLoading(true);
    try {
      const res = await axios.post("/api/admin/stats", {
        action: "delete-code",
        id
      });
      if (res.data?.success) {
        await fetchAdminStats();
      }
    } catch (err: any) {
      alert(err.response?.data?.error || "Lỗi khi xóa mã code");
    } finaly {
      setActionLoading(false);
    }
  };

  const handleSaveNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    setNoticeSaveLoading(true);
    try {
      const res = await axios.post("/api/admin/stats", {
        action: "update-notice",
        content: noticeContent,
        isActive: isNoticeActive
      });
      if (res.data?.success) {
        alert("Cập nhật thông báo hệ thống thành công!");
        await fetchAdminStats();
      }
    } catch (err: any) {
      alert(err.response?.data?.error || "Lỗi khi cập nhật thông báo");
    } finaly {
      setNoticeSaveLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100 font-sans">
      <nav className="mx-auto max-w-4xl px-6 py-6 border-b border-zinc-100 dark:border-zinc-900/60 flex items-center justify-between">
        <h1 className="text-base font-bold tracking-wider uppercase opacity-90">
          Hệ Thống Quản Trị
        </h1>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
          <span className="text-xs font-medium text-zinc-500">Đang hoạt động</span>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-12 space-y-8">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="animate-spin text-zinc-400" size={24} />
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Lượt truy cập hôm nay
                  </span>
                  <Users className="text-zinc-400" size={20} />
                </div>
                <div className="text-3xl font-bold font-mono">
                  {adminStats.todayVisitors.toLocaleString()}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Tổng lượt truy cập
                  </span>
                  <BarChart3 className="text-zinc-400" size={20} />
                </div>
                <div className="text-3xl font-bold font-mono">
                  {adminStats.totalVisitors.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/60 pb-3">
                <Megaphone size={18} className="text-zinc-500" />
                <h2 className="text-sm font-bold uppercase tracking-wider">Cấu Hình Thông Báo Toàn Sàn</h2>
              </div>
              <form onSubmit={handleSaveNotice} className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="notice-toggle" className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    Trạng thái hiển thị modal người dùng:
                  </label>
                  <button
                    type="button"
                    id="notice-toggle"
                    onClick={() => setIsNoticeActive(!isNoticeActive)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ${isNoticeActive ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-zinc-200 dark:bg-zinc-800'}`}
                  >
                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-zinc-950 shadow ring-0 transition duration-200 ease-in-out ${isNoticeActive ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="notice-text" className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    Nội dung thông báo:
                  </label>
                  <textarea
                    id="notice-text"
                    rows={3}
                    value={noticeContent}
                    onChange={(e) => setNoticeContent(e.target.value)}
                    placeholder="Nhập văn bản thông báo xuất hiện ở màn hình chính..."
                    className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition-all placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-700 resize-none"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={noticeSaveLoading}
                    className="flex items-center gap-1.5 rounded-xl bg-zinc-900 px-4 py-2 text-xs font-bold text-white transition-opacity disabled:opacity-40 dark:bg-zinc-100 dark:text-black"
                  >
                    <Save size={14} /> Lưu Cấu Hình
                  </button>
                </div>
              </form>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800/60 pb-4">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider">Quản Lý Danh Sách Giftcode</h2>
                  <p className="text-xs text-zinc-400 mt-1">Tổng cộng: {giftcodes.length} mã khả dụng</p>
                </div>

                <form onSubmit={handleAddCode} className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="text"
                    required
                    disabled={actionLoading}
                    value={newCodeInput}
                    onChange={(e) => setNewCodeInput(e.target.value)}
                    placeholder="Nhập mã code mới..."
                    className="w-full sm:w-64 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition-all placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-700"
                  />
                  <button
                    type="submit"
                    disabled={actionLoading || !newCodeInput.trim()}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-40 dark:bg-zinc-100 dark:text-black shrink-0"
                  >
                    <Plus size={16} /> Thêm
                  </button>
                </form>
              </div>

              <div className="max-h-96 overflow-y-auto pr-1">
                {giftcodes.length === 0 ? (
                  <p className="text-center text-xs text-zinc-400 py-6">Chưa có mã Giftcode nào trong cơ sở dữ liệu.</p>
                ) : (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {giftcodes.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40 p-3 rounded-xl"
                      >
                        <span className="font-mono text-sm font-bold tracking-wide">{item.code}</span>
                        <button
                          type="button"
                          disabled={actionLoading}
                          onClick={() => handleDeleteCode(item.id, item.code)}
                          className="p-1.5 text-zinc-400 hover:text-red-500 rounded-lg border border-zinc-200/60 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors disabled:opacity-40"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

