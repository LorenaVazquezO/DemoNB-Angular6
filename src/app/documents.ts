export class Order{
    id: number;
    name: string;
    date: string;
    items: string;
    NetTotal: number;
  }

  export class Quote{
    id: number;
    name: string;
    date: string;
    description: string;
    nitems: number;
    netTotal:number;
  }

  export class Invoice{
    id: number;
    name: string;
    date: string;
    methodPayment: string;
    status: string;
    description: string;
    nitems: number;
    netTotal:number;
  }