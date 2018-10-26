import { Order } from './documents';
import { Quote} from './documents';
import { Invoice} from './documents';

export const Orders: Order[] = [
  { id: 11, name: 'Amazon',  date: '15-feb-17', items: "Descripcion xxx", NetTotal: 60},
  { id: 12, name: 'GNC', date: '15-mar-18', items: "Descripcion xxx", NetTotal: 60},
  { id: 13, name: 'Amazon', date: '15-abr-18', items: "Descripcion xxx", NetTotal: 60},
  { id: 14, name: 'Farmacia', date: '15-ene-18', items: "Descripcion xxx", NetTotal: 60},
  { id: 15, name: 'Similares', date: '23-feb-17', items: "Descripcion xxx", NetTotal: 60},
  { id: 16, name: 'Similares', date: '07-mar-17', items: "Descripcion xxx", NetTotal: 60},
  { id: 17, name: 'Farmacia', date: '14-nov-17', items: "Descripcion xxx", NetTotal: 60},
  { id: 18, name: 'GNC', date: '05-dic-17', items: "Descripcion xxx", NetTotal: 60},
  { id: 19, name: 'GNC', date: '13-abr-17', items: "Descripcion xxx", NetTotal: 60},
  { id: 20, name: 'GNC', date: '15-ago-17', items: "Descripcion xxx", NetTotal: 60}
];

export const Quotes: Quote[] = [
  {id: 101, name: 'Amazon', date: '01-ene-2018', description: 'Products...', nitems: 8, netTotal: 400},
  {id: 105, name: 'Amazon', date: '27-ene-2018', description: 'Products...', nitems: 6, netTotal: 700},
  {id: 106, name: 'GNC', date: '01-feb-2018', description: 'Products...', nitems: 5, netTotal: 390},
  {id: 107, name: 'GNC', date: '11-feb-2018', description: 'Products...', nitems: 8, netTotal: 400}
];

export const Invoices: Invoice[] = [
  {id: 1001, name: 'Amazon', date: '01-ene-2018', methodPayment: "Visa", status: 'Paid', description: 'Products...', nitems: 8, netTotal: 400},
  {id: 1005, name: 'Amazon', date: '27-ene-2018', methodPayment: "Visa", status: 'Paid', description: 'Products...', nitems: 6, netTotal: 700},
  {id: 1006, name: 'GNC', date: '01-feb-2018', methodPayment: "Visa", status: 'Paid', description: 'Products...', nitems: 5, netTotal: 390},
  {id: 1007, name: 'GNC', date: '11-feb-2018', methodPayment: "Visa", status: 'Paid', description: 'Products...', nitems: 8, netTotal: 400}
];