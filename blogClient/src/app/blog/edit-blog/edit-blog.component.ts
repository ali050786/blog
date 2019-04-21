import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HelperService } from 'src/app/common/helper.service';

@Component({
  selector: 'blog-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  modelBoolean = false;

  modelbox: any;
  id: any;
  post: any;
  constructor(private route: ActivatedRoute, private helper: HelperService, private router: Router) {
    this.post = {
      body: '',
      image: '',
      title: ''
    }
    this.id = this.route.snapshot.paramMap.get("id");

    this.helper.getDataById('posts', this.id).subscribe(data => {
      this.post = data
    })
  }

  ngOnInit() {
  }

  receiveMessage(e) {
    if (e == this.modelbox.buttons.first) {
      this.modelBoolean = false
      this.helper.putData('posts', this.id, this.post).subscribe(data => {
        this.modelBoolean = true;
        this.modelbox = {
          message: 'This article would be changed',
          buttons: {
            third: 'OK'
          }
        }
      }
        , error => {
          this.modelBoolean = true;
          this.modelbox = {
            message: 'Something went wrong, please try later',
            buttons: {
              third: 'OK'
            }
          }
        }
      );
    }

    else if(e == this.modelbox.buttons.second){
      this.modelBoolean = false;
      
    }

    else if (e == this.modelbox.buttons.third) {
      this.modelBoolean = false;
      this.router.navigateByUrl('/blogs')

    }
  }

  formSubmit() {
    this.post.time = Date();

    this.modelbox = {
      message: 'Are you sure, this article would be revamped',
      buttons: {
        first: 'Yeah!',
        second: 'No!'
      }
    }
    this.modelBoolean = true;
    //this.helper.putData('posts',this.id,this.post ).subscribe(data => console.log(data));
  }

}
