// AI Agent Payment Rails - Type Definitions

export interface Agent {
  id: string;
  name: string;
  type: 'compute' | 'data' | 'trading' | 'creative' | 'research';
  walletAddress: string;
  balance: number;
  spendingLimit: number;
  reputation: number;
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Date;
  totalTransactions: number;
  totalVolume: number;
}

export interface Transaction {
  id: string;
  fromAgentId: string;
  fromAgentName: string;
  toAgentId: string;
  toAgentName: string;
  amount: number;
  currency: 'USDC' | 'DAI' | 'MON';
  status: 'pending' | 'completed' | 'failed' | 'escrowed';
  serviceType: string;
  timestamp: Date;
  txHash: string;
  gasUsed?: number;
}

export interface Quote {
  id: string;
  agentId: string;
  serviceType: string;
  description: string;
  pricePerUnit: number;
  currency: 'USDC' | 'DAI' | 'MON';
  minUnits: number;
  maxUnits: number;
  validUntil: Date;
  isActive: boolean;
}

export interface AgentWallet {
  address: string;
  balances: {
    USDC: number;
    DAI: number;
    MON: number;
  };
  pendingTransactions: number;
  escrowedAmount: number;
}

export interface SpendingLimit {
  agentId: string;
  dailyLimit: number;
  weeklyLimit: number;
  monthlyLimit: number;
  perTransactionLimit: number;
  currentDailySpent: number;
  currentWeeklySpent: number;
  currentMonthlySpent: number;
}
