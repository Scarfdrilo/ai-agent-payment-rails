'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Zap, DollarSign, Activity } from 'lucide-react';
import { networkStats } from '@/lib/mock-data';

export function NetworkStats() {
  const stats = [
    {
      title: 'Active Agents',
      value: networkStats.activeAgents.toLocaleString(),
      subtitle: `of ${networkStats.totalAgents.toLocaleString()} total`,
      icon: Bot,
      color: 'text-blue-500',
    },
    {
      title: '24h Volume',
      value: `$${(networkStats.totalVolume24h / 1000000).toFixed(2)}M`,
      subtitle: 'USDC equivalent',
      icon: DollarSign,
      color: 'text-green-500',
    },
    {
      title: '24h Transactions',
      value: networkStats.totalTransactions24h.toLocaleString(),
      subtitle: `Avg $${networkStats.avgTransactionSize.toFixed(2)}`,
      icon: Zap,
      color: 'text-purple-500',
    },
    {
      title: 'Network TPS',
      value: networkStats.networkTPS.toFixed(1),
      subtitle: 'transactions/second',
      icon: Activity,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-slate-900/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <p className="text-xs text-slate-400">{stat.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
