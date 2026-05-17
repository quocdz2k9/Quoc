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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Sai mật khẩu rồi cưng!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
      >
        <h2 className="text-xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 text-center">
          Admin Login
        </h2>
        <input
          type="password"
          required
          className="w-full p-3 mb-4 rounded-xl border border-zinc-200 bg-transparent text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 outline-none transition-all dark:border-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-700"
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-3 bg-zinc-900 hover:opacity-90 active:scale-[0.98] dark:bg-zinc-100 text-white dark:text-black rounded-xl font-bold transition-all"
        >
          Đăng nhập
        </button>
        {error && (
          <p className="mt-4 text-red-500 text-sm font-medium text-center animate-pulse">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

