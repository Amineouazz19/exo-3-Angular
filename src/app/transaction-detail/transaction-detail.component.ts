import { Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Transaction,TransactionService } from "../transaction.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [CommonModule, TransactionDetailComponent],
  template: `
    <h1>Détails de la Transaction</h1>
    <div *ngIf="transaction">
      <p>Date: {{ transaction.date | date }}</p>
      <p>Description: {{ transaction.description }}</p>
      <p>Montant: {{ transaction.amount | currency }}</p>
      <p>Solde: {{ transaction.balance | currency }}</p>
    </div>
  `,
  styles: []
})
export class TransactionDetailComponent implements OnInit {
  transaction: Transaction | undefined;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.transactionService.getTransactionById(id).subscribe(data => {
      this.transaction = data;
    });
  }
}
