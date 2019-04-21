import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogServicesService } from './blog/blog-services.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateblogComponent } from './blog/createblog/createblog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { HelperService } from './common/helper.service';
import { PopupComponent } from './common/popup/popup.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    BlogDetailsComponent,
    PageNotFoundComponent,
    CreateblogComponent,
    EditBlogComponent,
    PopupComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BlogServicesService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
