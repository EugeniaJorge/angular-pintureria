import { PintureriaProductsComponent } from './pintureria-products/pintureria-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PintureriaAboutComponent } from './pintureria-about/pintureria-about.component';
import { PintureriaHomeComponent } from './pintureria-home/pintureria-home.component';

const routes: Routes = [
 { path: '',redirectTo: 'home',pathMatch: 'full' },
 { path: 'products', component: PintureriaProductsComponent },
 { path: 'about', component: PintureriaAboutComponent },
 { path: 'home', component: PintureriaHomeComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
