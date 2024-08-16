import { Component, OnInit } from "@angular/core";
import { TransactionService } from "../transaction.service";
import { Transaction } from "../transaction.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  template: `
    <h1>Liste des Transactions</h1>
    <table>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Montant</th>
        <th>Solde</th>
        <th>Détails</th>
      </tr>
      <tr *ngFor="let transaction of transactions" (click)="selectTransaction(transaction)">
        <td>{{ transaction.date | date }}</td>
        <td>{{ transaction.label }}</td>
        <td>{{ transaction.amount | currency }}</td>
        <td>{{ transaction.balance | currency }}</td>
        <td><a [routerLink]="['/transaction', transaction.id]">Voir Détails</a></td>
      </tr>
    </table>
  `,
  styles: []
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  selectTransaction(transaction: Transaction) {
    console.log('Transaction sélectionnée:', transaction);
  }
}
