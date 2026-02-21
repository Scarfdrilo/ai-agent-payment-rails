'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { ArrowRight, ExternalLink, Clock, CheckCircle, AlertCircle, Lock } from 'lucide-react';
import { mockTransactions } from '@/lib/mock-data';
import { Transaction } from '@/lib/types';

const statusConfig = {
  completed: { 
    icon: CheckCircle, 
    color: 'bg-green-500/20 text-green-400 border-green-500/50',
    label: 'Completed'
  },
  pending: { 
    icon: Clock, 
    color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    label: 'Pending'
  },
  failed: { 
    icon: AlertCircle, 
    color: 'bg-red-500/20 text-red-400 border-red-500/50',
    label: 'Failed'
  },
  escrowed: { 
    icon: Lock, 
    color: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
    label: 'Escrowed'
  },
};

function formatTimeAgo(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

function TransactionRow({ tx }: { tx: Transaction }) {
  const status = statusConfig[tx.status];
  const StatusIcon = status.icon;
  
  return (
    <TableRow className="border-slate-700 hover:bg-slate-800/50">
      <TableCell className="font-mono text-xs text-slate-400">
        {tx.id}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="text-white text-sm">{tx.fromAgentName}</span>
          <ArrowRight className="h-4 w-4 text-slate-500" />
          <span className="text-white text-sm">{tx.toAgentName}</span>
        </div>
      </TableCell>
      <TableCell>
        <span className="text-white font-medium">
          ${tx.amount.toLocaleString()}
        </span>
        <span className="text-slate-400 ml-1 text-xs">{tx.currency}</span>
      </TableCell>
      <TableCell>
        <span className="text-slate-300 text-sm">{tx.serviceType}</span>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className={status.color}>
          <StatusIcon className="h-3 w-3 mr-1" />
          {status.label}
        </Badge>
      </TableCell>
      <TableCell className="text-slate-400 text-sm">
        {formatTimeAgo(tx.timestamp)}
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export function TransactionExplorer() {
  return (
    <Card className="bg-slate-900/50 border-slate-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Recent Transactions</CardTitle>
        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700">
              <TableHead className="text-slate-400">TX ID</TableHead>
              <TableHead className="text-slate-400">From → To</TableHead>
              <TableHead className="text-slate-400">Amount</TableHead>
              <TableHead className="text-slate-400">Service</TableHead>
              <TableHead className="text-slate-400">Status</TableHead>
              <TableHead className="text-slate-400">Time</TableHead>
              <TableHead className="text-slate-400 w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((tx) => (
              <TransactionRow key={tx.id} tx={tx} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
