import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../common/helper.service';

@Component({
  selector: 'blog-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: any;

  constructor( private http: HttpClient, private helperService: HelperService) { 
    
  }

  ngOnInit() {
    //this.http.get('http://localhost:3000/api/posts').subscribe(data=>{this.posts = data
    //console.table(this.posts)})
    this.helperService.getData('posts').subscribe(data => this.posts = data)
    
    
     }


    
  

}
