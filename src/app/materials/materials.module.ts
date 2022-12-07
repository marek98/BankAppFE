import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TransactionTypePipe } from '../transaction-type.pipe';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    TransactionTypePipe
  ],
  imports: [
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    TransactionTypePipe
  ]
})
export class MaterialModule {}
