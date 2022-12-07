import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { MaterialModule } from 'src/app/materials/materials.module';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailComponent
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BasicAccountsModule { }
