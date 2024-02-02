import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SeverErrorComponent } from './sever-error/sever-error.component';

const routes: Routes = [
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'sever-error', component: SeverErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPageRoutingModule {}
