"use client";

import { useEffect, useState } from "react";
import { X, Bell } from "lucide-react";
import axios from "axios";

export default function NoticeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const checkNotice = async () => {
      try {
        const response = await axios.post("/api/stats", { action: "get-notice" });
        if (response.data?.isActive && response.data?.content) {
          const contentHash = response.data.content;
          const lastHiddenTime = localStorage.getItem("notice_hidden_time");
          const lastHiddenHash = localStorage.getItem("notice_hidden_hash");

          if (lastHiddenTime && lastHiddenHash === contentHash) {
            const passedTime = Date.now() - parseInt(lastHiddenTime, 10);
            const sixHours = 6 * 60 * 60 * 1000;
            if (passedTime < sixHours) {
              return;
            }
          }
          setContent(response.data.content);
          setIsOpen(true);
        }
      } catch (e) {}
    };

    checkNotice();
  }, []);

  const handleClose = () => {
    localStorage.setItem("notice_hidden_time", Date.now().toString());
    localStorage.setItem("notice_hidden_hash", content);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
        
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 transition-colors outline-none"
          aria-label="Close Notice"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 text-amber-500 dark:text-amber-400">
            <Bell size={18} className="animate-bounce" />
          </div>
          <h3 className="text-base font-bold tracking-wide text-zinc-900 dark:text-zinc-100">
            Thông Báo Hệ Thống
          </h3>
        </div>

        <div className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/60 max-h-60 overflow-y-auto whitespace-pre-line">
          {content}
        </div>

        <button
          type="button"
          onClick={handleClose}
          className="mt-5 w-full rounded-xl bg-zinc-900 hover:opacity-90 active:scale-[0.99] px-4 py-2.5 text-xs font-bold text-white dark:bg-zinc-100 dark:text-black shadow-sm transition-all outline-none"
        >
          Tôi đã hiểu
        </button>
      </div>
    </div>
  );
}

