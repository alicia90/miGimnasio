import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocioCreateComponent } from './socio-create/socio-create.component';
import { SocioEditComponent } from './socio-edit/socio-edit.component';
import { SocioListComponent } from './socio-list/socio-list.component';

const routes: Routes = [
  {
    path: 'socio/create',
    component: SocioCreateComponent,
  },
  {
    path: 'socio/edit/:num_socio',
    component: SocioEditComponent,
  },
  {
    path: 'socios',
    component: SocioListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
