'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, AlertTriangle } from 'lucide-react';
import { mockAgents } from '@/lib/mock-data';

export function SpendingLimits() {
  // Simulated spending limits
  const limits = [
    { agent: mockAgents[0], daily: 500, weekly: 2000, monthly: 5000, spent: { daily: 125, weekly: 890, monthly: 2450 } },
    { agent: mockAgents[1], daily: 1000, weekly: 5000, monthly: 10000, spent: { daily: 850, weekly: 3200, monthly: 7500 } },
    { agent: mockAgents[3], daily: 5000, weekly: 25000, monthly: 50000, spent: { daily: 2500, weekly: 15000, monthly: 35000 } },
  ];

  return (
    <Card className="bg-slate-900/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Shield className="h-5 w-5 text-yellow-400" />
          Spending Limits
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {limits.map(({ agent, daily, weekly, monthly, spent }) => {
            const dailyPct = (spent.daily / daily) * 100;
            const isNearLimit = dailyPct > 80;
            
            return (
              <div key={agent.id} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-white">{agent.name}</h4>
                    <p className="text-xs text-slate-400 font-mono">{agent.walletAddress}</p>
                  </div>
                  {isNearLimit && (
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <AlertTriangle className="h-4 w-4" />
                      Near daily limit
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Daily</span>
                      <span className="text-white">
                        ${spent.daily.toLocaleString()} / ${daily.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all ${
                          dailyPct > 90 ? 'bg-red-500' : 
                          dailyPct > 70 ? 'bg-yellow-500' : 
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(dailyPct, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Weekly</span>
                      <span className="text-white">
                        ${spent.weekly.toLocaleString()} / ${weekly.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500"
                        style={{ width: `${(spent.weekly / weekly) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Monthly</span>
                      <span className="text-white">
                        ${spent.monthly.toLocaleString()} / ${monthly.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500"
                        style={{ width: `${(spent.monthly / monthly) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="space-y-1">
                    <Label className="text-xs text-slate-400">Daily Limit</Label>
                    <Input 
                      type="number"
                      defaultValue={daily}
                      className="h-8 bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-slate-400">Weekly Limit</Label>
                    <Input 
                      type="number"
                      defaultValue={weekly}
                      className="h-8 bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-slate-400">Monthly Limit</Label>
                    <Input 
                      type="number"
                      defaultValue={monthly}
                      className="h-8 bg-slate-700 border-slate-600 text-sm"
                    />
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="mt-3 w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Update Limits
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
