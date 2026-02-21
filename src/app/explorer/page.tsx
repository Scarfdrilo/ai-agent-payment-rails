"use client";

import { useState } from "react";
import Link from "next/link";

interface Transaction {
  id: string;
  from: { name: string; type: string };
  to: { name: string; type: string };
  amount: number;
  service: string;
  status: "completed" | "pending" | "failed";
  timestamp: string;
  txHash: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    from: { name: "Research Assistant", type: "Research" },
    to: { name: "GPU Compute Node", type: "Compute" },
    amount: 25.5,
    service: "Model Training",
    status: "completed",
    timestamp: "2 min ago",
    txHash: "0x1a2b3c4d5e6f..."
  },
  {
    id: "2",
    from: { name: "Trading Bot", type: "Trading" },
    to: { name: "Strategy Creator", type: "Creative" },
    amount: 15.0,
    service: "Strategy License",
    status: "completed",
    timestamp: "5 min ago",
    txHash: "0x7g8h9i0j1k2l..."
  },
  {
    id: "3",
    from: { name: "Data Collector", type: "Data" },
    to: { name: "API Provider", type: "Data" },
    amount: 8.25,
    service: "Premium API Access",
    status: "pending",
    timestamp: "8 min ago",
    txHash: "0x3m4n5o6p7q8r..."
  },
  {
    id: "4",
    from: { name: "Creative Agent", type: "Creative" },
    to: { name: "Asset Library", type: "Creative" },
    amount: 12.0,
    service: "Image License",
    status: "completed",
    timestamp: "12 min ago",
    txHash: "0x9s0t1u2v3w4x..."
  },
  {
    id: "5",
    from: { name: "Analysis Bot", type: "Research" },
    to: { name: "Data Warehouse", type: "Data" },
    amount: 45.0,
    service: "Dataset Purchase",
    status: "completed",
    timestamp: "15 min ago",
    txHash: "0x5y6z7a8b9c0d..."
  },
  {
    id: "6",
    from: { name: "Render Agent", type: "Compute" },
    to: { name: "Storage Provider", type: "Compute" },
    amount: 5.75,
    service: "Cloud Storage",
    status: "failed",
    timestamp: "20 min ago",
    txHash: "0x1e2f3g4h5i6j..."
  }
];

const stats = {
  totalVolume: 12450.5,
  totalTransactions: 1247,
  activeAgents: 89,
  avgTransaction: 9.98
};

export default function Explorer() {
  const [filter, setFilter] = useState<"all" | "completed" | "pending" | "failed">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter((tx) => {
    if (filter !== "all" && tx.status !== filter) return false;
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        tx.from.name.toLowerCase().includes(search) ||
        tx.to.name.toLowerCase().includes(search) ||
        tx.service.toLowerCase().includes(search) ||
        tx.txHash.toLowerCase().includes(search)
      );
    }
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400";
      case "failed":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <span className="text-xl">💳</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Payment Rails
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/explorer" className="text-white font-medium">
              Explorer
            </Link>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-300">Live</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Payment Explorer</h1>
            <p className="text-slate-400">Monitor all agent-to-agent transactions on Monad</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm mb-1">24h Volume</p>
              <p className="text-2xl font-bold text-white">${stats.totalVolume.toLocaleString()}</p>
              <p className="text-green-400 text-sm mt-1">+18.5% vs yesterday</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm mb-1">Total Transactions</p>
              <p className="text-2xl font-bold text-white">{stats.totalTransactions.toLocaleString()}</p>
              <p className="text-purple-400 text-sm mt-1">All time</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm mb-1">Active Agents</p>
              <p className="text-2xl font-bold text-white">{stats.activeAgents}</p>
              <p className="text-cyan-400 text-sm mt-1">Online now</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm mb-1">Avg Transaction</p>
              <p className="text-2xl font-bold text-white">${stats.avgTransaction}</p>
              <p className="text-orange-400 text-sm mt-1">USDC</p>
            </div>
          </div>

          {/* Live Activity Visualization */}
          <div className="mb-8 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Live Agent Activity</h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-400">6 active transactions</span>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {["Research", "Data", "Trading", "Compute", "Creative"].map((type, i) => (
                <div key={type} className="text-center">
                  <div
                    className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center mb-2 relative"
                  >
                    <span className="text-2xl">
                      {["🔬", "📊", "📈", "💻", "🎨"][i]}
                    </span>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full text-[10px] flex items-center justify-center font-bold">
                      {Math.floor(Math.random() * 5) + 1}
                    </span>
                  </div>
                  <span className="text-sm text-slate-300">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by agent, service, or tx hash..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex gap-2">
              {(["all", "completed", "pending", "failed"] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-3 rounded-xl font-medium capitalize transition-colors ${
                    filter === status
                      ? "bg-purple-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Transactions List */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800">
              <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
            </div>
            <div className="divide-y divide-slate-800">
              {filteredTransactions.map((tx) => (
                <div key={tx.id} className="p-6 hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {/* From Agent */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                          <span>🤖</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{tx.from.name}</p>
                          <p className="text-sm text-slate-400">{tx.from.type}</p>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex flex-col items-center">
                        <span className="text-2xl text-purple-400">→</span>
                        <span className="text-xs text-slate-500 mt-1">{tx.service}</span>
                      </div>

                      {/* To Agent */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
                          <span>⚡</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{tx.to.name}</p>
                          <p className="text-sm text-slate-400">{tx.to.type}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      {/* Amount */}
                      <div className="text-right">
                        <p className="font-bold text-white text-lg">${tx.amount.toFixed(2)}</p>
                        <p className="text-sm text-slate-400">USDC</p>
                      </div>

                      {/* Status */}
                      <div className="w-24">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(tx.status)}`}>
                          {tx.status}
                        </span>
                      </div>

                      {/* Time & Hash */}
                      <div className="text-right min-w-[100px]">
                        <p className="text-sm text-slate-300">{tx.timestamp}</p>
                        <p className="text-xs text-slate-500 font-mono">{tx.txHash}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTransactions.length === 0 && (
              <div className="p-12 text-center">
                <p className="text-slate-400">No transactions found</p>
              </div>
            )}
          </div>

          {/* Network Health */}
          <div className="mt-8 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Network Health</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Transaction Success Rate</span>
                  <span className="text-green-400 font-medium">98.5%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[98.5%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Network Latency</span>
                  <span className="text-cyan-400 font-medium">45ms</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[15%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Gas Efficiency</span>
                  <span className="text-purple-400 font-medium">92%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
