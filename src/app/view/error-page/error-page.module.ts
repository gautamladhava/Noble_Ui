import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SeverErrorComponent } from './sever-error/sever-error.component';

@NgModule({
  declarations: [PageNotFoundComponent, SeverErrorComponent],
  imports: [CommonModule, ErrorPageRoutingModule],
})
export class ErrorPageModule {}
