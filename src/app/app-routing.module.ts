import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ActivateGuard } from './Guards/activate.guard';
import { DeActivateGuard } from './Guards/de-activate.guard';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'product',
    component:ProductComponent,
    // canActivate:[ActivateGuard],
    canActivateChild:[ActivateGuard],
    children:[
      {path:':id/:name/:price',component:EditProductComponent,canDeactivate:[DeActivateGuard]},
      {path:':id',component:ProductListComponent},
    ]
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contacts',
    component:ContactUsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
