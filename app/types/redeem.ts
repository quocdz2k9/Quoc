export interface LogResult {
  time: string;
  code: string;
  status: "success" | "error" | "pending";
  message: string;
}

export interface SavedAccount {
  roleId: string;
  serverID: string;
  roleName: string;
  level: string;
}

export interface SystemStats {
  activeUsers: number;
  totalSavedAccounts: number;
  totalRedeemed: number;
}

