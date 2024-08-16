import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  description: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'assets/data'; // Chemin vers le dossier contenant les fichiers JSON

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/transactions.json`);
  }

  getTransactionById(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/${id}.json`);
  }
}
