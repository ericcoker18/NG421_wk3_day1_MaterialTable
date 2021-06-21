import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Route[] = [
  {path: '', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
