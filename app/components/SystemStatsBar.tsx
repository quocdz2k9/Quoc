import { Radio, Database, Zap } from "lucide-react";
import { SystemStats } from "../types/redeem";

interface SystemStatsBarProps {
  stats: SystemStats;
}

export default function SystemStatsBar({ stats }: SystemStatsBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-1">
      <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
        <Radio size={10} className="animate-pulse" />
        {stats.activeUsers} đang truy cập
      </span>
      <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
        <Database size={10} />
        {stats.totalSavedAccounts} ID sử dụng
      </span>
      <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400">
        <Zap size={10} />
        {stats.totalRedeemed} đã sử dụng
      </span>
    </div>
  );
}

