import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/app/types/transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  
  // Data o transakcii
  id : number;
  transactionData ?: Transaction;

  // Formular  
  transactionDataForm = new FormGroup({
    fullName: new FormControl(),
    accountNumber: new FormControl(),
    amount: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private service: TransactionsService
  ) { 
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  getData() {
    this.service.getTransaction(this.id).subscribe((data:any) => {

      this.transactionDataForm.patchValue({
        fullName: data.data.fullName,
        accountNumber: data.data.accountNumber,
        amount: data.data.amount
      });

    });
  }

  ngOnInit(): void {
    this.getData();
  }

}