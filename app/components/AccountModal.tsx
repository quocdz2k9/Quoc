import React from "react";
import { X, Loader2, CheckCircle2, ClipboardCopy, Trash2 } from "lucide-react";
import { SavedAccount } from "../types/redeem";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedAccounts: SavedAccount[];
  modalInputId: string;
  setModalInputId: (val: string) => void;
  modalLoading: boolean;
  modalError: string;
  modalSuccess: string;
  onAddAccount: (e: React.FormEvent) => Promise<void>;
  onDeleteAccount: (id: string) => void;
  onPasteId: (id: string) => void;
}

export default function AccountModal({
  isOpen,
  onClose,
  savedAccounts,
  modalInputId,
  setModalInputId,
  modalLoading,
  modalError,
  modalSuccess,
  onAddAccount,
  onDeleteAccount,
  onPasteId,
}: AccountModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-zinc-100 dark:bg-zinc-950 dark:border-zinc-900">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-900">
          <h2 className="text-base font-semibold">Danh Sách Tài Khoản</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-zinc-200 text-zinc-400 outline-none transition-colors hover:bg-zinc-50 hover:text-zinc-600 dark:border-zinc-800 dark:text-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        <form onSubmit={onAddAccount} className="mt-4 flex gap-2">
          <input
            type="text"
            required
            disabled={modalLoading}
            value={modalInputId}
            onChange={(e) => setModalInputId(e.target.value)}
            placeholder="Nhập ID để thêm..."
            className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none placeholder-zinc-400 dark:placeholder-zinc-500 dark:border-zinc-800 dark:bg-zinc-900"
          />
          <button
            type="submit"
            disabled={modalLoading || !modalInputId.trim()}
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-black flex items-center gap-1.5 shrink-0"
          >
            {modalLoading ? (
              <>
                <Loader2 size={16} className="animate-spin text-zinc-400 shrink-0" />
                Đang thêm...
              </>
            ) : (
              "Thêm"
            )}
          </button>
        </form>

        {modalSuccess && (
          <div className="mt-2 rounded-xl bg-emerald-50 border border-emerald-100 p-2.5 text-xs text-emerald-600 font-medium transition-all dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 size={14} className="shrink-0" />
            {modalSuccess}
          </div>
        )}

        {modalError && <div className="mt-2 text-xs text-red-500 font-medium">{modalError}</div>}

        <div className="mt-4 max-h-64 overflow-y-auto space-y-2 font-sans text-sm">
          {savedAccounts.length === 0 ? (
            <p className="text-center text-xs text-zinc-400 py-6">Chưa có ID nào được lưu.</p>
          ) : (
            savedAccounts.map((acc) => (
              <div key={acc.roleId} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900">
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold truncate text-zinc-800 dark:text-zinc-200">{acc.roleName}</span>
                  <span className="text-xs text-zinc-400 font-mono">
                    ID: {acc.roleId} • Sv: {acc.serverID} • Lv: {acc.level}
                  </span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => onPasteId(acc.roleId)}
                    className="p-1.5 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 outline-none"
                    title="Sử dụng ID này"
                  >
                    <ClipboardCopy size={16} />
                  </button>
                  <button
                    onClick={() => onDeleteAccount(acc.roleId)}
                    className="p-1.5 text-red-500 hover:text-red-700 outline-none"
                    title="Xóa"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

