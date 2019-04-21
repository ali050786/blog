import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { HelperService } from 'src/app/common/helper.service';

@Component({
  selector: 'blog-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  modelBoolean = false;

  modelbox: any

  user: User

  constructor(private helper:HelperService) {
    this.user = {
      email: '',
      username: '',
      password: '',
      passwordv: ''
    }


  }

  ngOnInit() {
  }

  formSubmit(){
    this.helper.postData('users', this.user).subscribe(data =>{
      this.modelbox = {
        message: 'User has been registered',
        buttons: {
          first: 'Okay'
        }
      }
      this.modelBoolean = true;
     
    }, error => {
      this.modelBoolean = true;
      if(error.error.error.name == 'ValidationError'){
        this.modelbox = {
          message: 'User already exits',
          buttons: {
            second: 'Okay'
          }
        }
      }else{
        this.modelbox = {
          message: 'Somthing went wrong',
          buttons: {
            second: 'Okay'
          }
        }
      }
    })
  }


  receiveMessage(e) {
    if (e == this.modelbox.buttons.first) {
      this.clearForm();
      this.modelBoolean = false
    }else if (e == this.modelbox.buttons.second) {
      this.clearForm();
      this.modelBoolean = false
    }
  }

  
  clearForm(){
    (<HTMLFormElement>document.getElementById("create")).reset();
   }
   
}
