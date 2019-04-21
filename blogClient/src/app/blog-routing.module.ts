import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';


//const BlogsChildren: Routes = 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'blogs', component:BlogComponent, children:[
    {path: 'details', component: BlogDetailsComponent}
  ]},
  {path: 'blogs/:id', component:BlogDetailsComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
