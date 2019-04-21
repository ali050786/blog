import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { CreateblogComponent } from './blog/createblog/createblog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';


//const BlogsChildren: Routes = 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'create', component:CreateblogComponent},
  {path: 'blogs', component: BlogComponent, children:[
    //{path: ':id', component: BlogDetailsComponent}
  ]},
  {path: 'blogs/:id', component:BlogDetailsComponent},
  {path: 'blogs/:id/edit', component:EditBlogComponent},
  //Auth route goes here
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
