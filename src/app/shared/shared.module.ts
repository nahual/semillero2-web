import { NgModule } from '@angular/core';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
  imports: [
    PaginationModule
  ],
  exports: [
    PaginationModule
  ],
  declarations: []
})
export class SharedModule { }
