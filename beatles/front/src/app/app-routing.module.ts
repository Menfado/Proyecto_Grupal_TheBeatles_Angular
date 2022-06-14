import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { BandComponent } from './pages/band/band.component';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{path: "", pathMatch: "full", component: HomeComponent},
{ path: "Band", component: BandComponent},
{ path: "Albums", component: AlbumsComponent },
{ path: "Form", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
