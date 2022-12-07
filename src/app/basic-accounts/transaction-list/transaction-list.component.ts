import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/app/types/transaction';
import { TransactionsList } from 'src/app/types/transactions-list';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  data : Transaction[] = [];

  displayedColumns : string[] = ["transactionId", "fullName", "transactionType", "accountNumber", "issueDate", "amount"];


  constructor(
    private service: TransactionsService
  ) {}

  getData() {
    this.service.getTransactions().subscribe((data:TransactionsList) => this.data = data.data );
  }


  ngOnInit(): void {
    this.getData();
  }
}
