import { Component, OnInit} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Transaction,TransactionService } from "../transaction.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
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
