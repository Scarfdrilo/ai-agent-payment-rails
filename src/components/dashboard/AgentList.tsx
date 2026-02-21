'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bot, Cpu, Database, TrendingUp, Palette, Brain, Settings, Plus } from 'lucide-react';
import { mockAgents } from '@/lib/mock-data';
import { Agent } from '@/lib/types';

const typeIcons = {
  compute: Cpu,
  data: Database,
  trading: TrendingUp,
  creative: Palette,
  research: Brain,
};

const typeColors = {
  compute: 'bg-blue-500/20 text-blue-400',
  data: 'bg-green-500/20 text-green-400',
  trading: 'bg-purple-500/20 text-purple-400',
  creative: 'bg-pink-500/20 text-pink-400',
  research: 'bg-orange-500/20 text-orange-400',
};

const statusColors = {
  active: 'bg-green-500/20 text-green-400 border-green-500/50',
  inactive: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
  suspended: 'bg-red-500/20 text-red-400 border-red-500/50',
};

function AgentCard({ agent }: { agent: Agent }) {
  const Icon = typeIcons[agent.type];
  
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className={`h-10 w-10 ${typeColors[agent.type]}`}>
              <AvatarFallback className="bg-transparent">
                <Icon className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-white">{agent.name}</h3>
              <p className="text-xs text-slate-400 font-mono">{agent.walletAddress}</p>
            </div>
          </div>
          <Badge variant="outline" className={statusColors[agent.status]}>
            {agent.status}
          </Badge>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-400">Balance</p>
            <p className="text-white font-medium">${agent.balance.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-slate-400">Reputation</p>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400" 
                  style={{ width: `${agent.reputation}%` }}
                />
              </div>
              <span className="text-white font-medium text-xs">{agent.reputation}%</span>
            </div>
          </div>
          <div>
            <p className="text-slate-400">Transactions</p>
            <p className="text-white font-medium">{agent.totalTransactions.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-slate-400">Volume</p>
            <p className="text-white font-medium">${(agent.totalVolume / 1000).toFixed(1)}K</p>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
            <Settings className="h-4 w-4 mr-1" />
            Configure
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function AgentList() {
  return (
    <Card className="bg-slate-900/50 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white flex items-center gap-2">
          <Bot className="h-5 w-5 text-blue-400" />
          My Agents
        </CardTitle>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-1" />
          New Agent
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
