import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { OrdersComponent } from './orders/orders.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderDashComponent } from './order-dash/order-dash.component';
import { QuoteDashComponent } from './quote-dash/quote-dash.component';
import { InvoiceDashComponent } from './invoice-dash/invoice-dash.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavBarComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'orders', component: OrderDashComponent },
  {path: 'quotes', component: QuoteDashComponent },
  {path: 'invoices', component: InvoiceDashComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    OrdersComponent,
    InvoicesComponent,
    NavBarComponent,
    DashboardComponent,
    HomeComponent,
    OrderDashComponent,
    QuoteDashComponent,
    InvoiceDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
