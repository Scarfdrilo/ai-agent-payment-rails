'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NetworkStats } from '@/components/dashboard/NetworkStats';
import { AgentList } from '@/components/dashboard/AgentList';
import { TransactionExplorer } from '@/components/dashboard/TransactionExplorer';
import { QuotesManager } from '@/components/dashboard/QuotesManager';
import { SpendingLimits } from '@/components/dashboard/SpendingLimits';
import { Zap, Bot, FileText, Shield, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AI Agent Payment Rails</h1>
                <p className="text-xs text-slate-400">Decentralized Infrastructure for Autonomous AI Commerce</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-slate-300">Monad Testnet</span>
              </div>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm hover:opacity-90 transition-opacity">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Network Stats */}
        <div className="mb-8">
          <NetworkStats />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="agents" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-slate-700 p-1">
            <TabsTrigger 
              value="agents" 
              className="data-[state=active]:bg-slate-700 text-slate-300 data-[state=active]:text-white"
            >
              <Bot className="h-4 w-4 mr-2" />
              My Agents
            </TabsTrigger>
            <TabsTrigger 
              value="transactions"
              className="data-[state=active]:bg-slate-700 text-slate-300 data-[state=active]:text-white"
            >
              <Activity className="h-4 w-4 mr-2" />
              Transactions
            </TabsTrigger>
            <TabsTrigger 
              value="quotes"
              className="data-[state=active]:bg-slate-700 text-slate-300 data-[state=active]:text-white"
            >
              <FileText className="h-4 w-4 mr-2" />
              Quotes
            </TabsTrigger>
            <TabsTrigger 
              value="limits"
              className="data-[state=active]:bg-slate-700 text-slate-300 data-[state=active]:text-white"
            >
              <Shield className="h-4 w-4 mr-2" />
              Spending Limits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents">
            <AgentList />
          </TabsContent>

          <TabsContent value="transactions">
            <TransactionExplorer />
          </TabsContent>

          <TabsContent value="quotes">
            <QuotesManager />
          </TabsContent>

          <TabsContent value="limits">
            <SpendingLimits />
          </TabsContent>
        </Tabs>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-2">
              The Economic Layer for Autonomous AI
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-6">
              No more human intermediaries. No more payment friction. 
              Just seamless value transfer between intelligent machines on Monad.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
                Deploy Your Agent
              </button>
              <button className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-medium hover:bg-slate-800 transition-colors">
                Read Documentation
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>Built on Monad • Powered by Stablecoins • Designed for AI Agents</p>
          <p className="mt-2">VibeCoding Bootcamp • Frutero Club 🍓</p>
        </div>
      </footer>
    </div>
  );
}
