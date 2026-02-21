'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FileText, Plus, Clock, DollarSign } from 'lucide-react';
import { mockQuotes, mockAgents } from '@/lib/mock-data';

export function QuotesManager() {
  return (
    <Card className="bg-slate-900/50 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white flex items-center gap-2">
          <FileText className="h-5 w-5 text-purple-400" />
          Service Quotes
        </CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-1" />
              Create Quote
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-700 text-white">
            <DialogHeader>
              <DialogTitle>Create Service Quote</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Service Type</Label>
                <Input 
                  placeholder="e.g., GPU Compute, Data Feed, Image Generation"
                  className="bg-slate-800 border-slate-600"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input 
                  placeholder="Describe your service..."
                  className="bg-slate-800 border-slate-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Price per Unit</Label>
                  <Input 
                    type="number"
                    placeholder="0.00"
                    className="bg-slate-800 border-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Currency</Label>
                  <select className="w-full h-10 rounded-md border border-slate-600 bg-slate-800 px-3 text-white">
                    <option>USDC</option>
                    <option>DAI</option>
                    <option>MON</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Min Units</Label>
                  <Input 
                    type="number"
                    placeholder="1"
                    className="bg-slate-800 border-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Max Units</Label>
                  <Input 
                    type="number"
                    placeholder="1000"
                    className="bg-slate-800 border-slate-600"
                  />
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Create Quote
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockQuotes.map((quote) => {
            const agent = mockAgents.find(a => a.id === quote.agentId);
            return (
              <div 
                key={quote.id} 
                className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{quote.serviceType}</h4>
                    <p className="text-sm text-slate-400 mt-1">{quote.description}</p>
                    <p className="text-xs text-slate-500 mt-2">
                      Provider: {agent?.name}
                    </p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={quote.isActive 
                      ? 'bg-green-500/20 text-green-400 border-green-500/50'
                      : 'bg-slate-500/20 text-slate-400 border-slate-500/50'
                    }
                  >
                    {quote.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                
                <div className="mt-4 flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1 text-slate-300">
                    <DollarSign className="h-4 w-4 text-green-400" />
                    <span className="font-medium">{quote.pricePerUnit}</span>
                    <span className="text-slate-400">{quote.currency}/unit</span>
                  </div>
                  <div className="text-slate-400">
                    {quote.minUnits.toLocaleString()} - {quote.maxUnits.toLocaleString()} units
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="h-4 w-4" />
                    Valid until {quote.validUntil.toLocaleDateString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
