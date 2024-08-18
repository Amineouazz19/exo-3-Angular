import { Component, OnInit } from "@angular/core";
import { TransactionService } from "../transaction.service";
import { Transaction } from "../transaction.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,RouterOutlet],
  templateUrl: './transaction-list.component.html',
  styles: []
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  sortDirection: boolean = true; // true pour ascendant, false pour descendant
  sortColumn: string = '';

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  selectTransaction(transaction: Transaction) {
    console.log('Transaction sélectionnée:', transaction);
  }
  sortTransactions(column: string) {
    // Vérifier si on trie la même colonne pour inverser la direction du tri
    if (this.sortColumn === column) {
      this.sortDirection = !this.sortDirection;
    } else {
      this.sortColumn = column;
      this.sortDirection = true;
    }

    this.transactions.sort((a, b) => {
      const valueA = a[column as keyof Transaction];
      const valueB = b[column as keyof Transaction];

      if (valueA < valueB) return this.sortDirection ? -1 : 1;
      if (valueA > valueB) return this.sortDirection ? 1 : -1;
      return 0;
    });
  }

}
