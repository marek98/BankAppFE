import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TransactionsList } from "src/app/types/transactions-list";
import { Transaction } from '../types/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  allTransactionsEndpoint:string;
  transactionEndpoint:string;

  constructor(private http: HttpClient) { 
    this.allTransactionsEndpoint = "api/transactions";
    this.transactionEndpoint = "api/transactions/";
  }

  getTransactions() {
    return this.http.get<TransactionsList>(this.allTransactionsEndpoint, {
      observe: "body",
      responseType: "json"
    });
  }

  getTransaction(id:number) {
    return this.http.get<Transaction>(this.transactionEndpoint + id.toString(), {
      observe: "body",
      responseType: "json",
      params: new HttpParams().set("id", id)
    });
  }
}