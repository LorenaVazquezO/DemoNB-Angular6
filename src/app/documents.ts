export class Order{
    id: number;
    name: string;
    date: string;
    items: [{num: number; qty: number; description: string; total: number}];
    NetTotal: number;
  }