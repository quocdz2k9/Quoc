"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Sai mật khẩu rồi cưng!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <form onSubmit={handleLogin} className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Admin Login</h2>
        <input
          type="password"
          className="w-full p-3 mb-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent"
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-xl font-bold">
          Đăng nhập
        </button>
        {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}
