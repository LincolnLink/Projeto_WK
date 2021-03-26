import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoFormComponent } from "../produto-form/produto-form.component";
import { ProdutoComponent } from "../produto.component";

const routes: Routes = [

  { path: '', component: ProdutoComponent },
  { path: 'novo', component: ProdutoFormComponent },
  {
    path: 'editar', //path: 'editar/:id',
    component: ProdutoFormComponent,

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
