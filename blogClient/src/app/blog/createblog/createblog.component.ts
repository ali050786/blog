import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/common/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.scss']
})
export class CreateblogComponent implements OnInit {
  modelBoolean = false;

  modelbox: any



  blog: any;

  constructor(private helper: HelperService, private router: Router) {
    //console.log(this.blog.time);
    this.blog = {
      body: '',
      title: ''
    }
  }

  ngOnInit() {

  }


  receiveMessage(e) {
    if (e == this.modelbox.buttons.first) {
      this.router.navigate(['/blogs'])
      this.modelBoolean = false
    }
  }

  formSubmit() {
    this.blog.time = Date();
    this.helper.postData('posts', this.blog).subscribe(data => {
      
      this.modelbox = {
        message: 'A article has been created, it would be soon published',
        buttons: {
          first: 'Okay'
        }
      }
      this.modelBoolean = true;
      this.clearForm()
    }, error => {
      this.modelbox = {
        message: 'Something went wrong, please try after sometime',
        buttons: {
          first: 'Okay'
        }
      }
      this.modelBoolean = true

    })



  }

  clearForm(){
    (<HTMLFormElement>document.getElementById("create")).reset();
   }
   

}
