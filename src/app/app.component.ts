import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    TransactionListComponent,
    TransactionDetailComponent,
    HeaderComponent
  ],
  template: `
    <app-root></app-root>
  `,
  styles: []
})
export class AppComponent {
  currentDate: Date = new Date();

  constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
