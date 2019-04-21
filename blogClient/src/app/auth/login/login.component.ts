import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { HelperService } from 'src/app/common/helper.service';
import { Router } from '@angular/router';


@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modelBoolean = false;

  modelbox: any;
  user: User;
  token: any
  constructor(private helper: HelperService, private router:Router) { 
    this.user = {
      email: '',
      password: ''
    }
  }

  ngOnInit() {

    
  }

  formSubmit(){
    
  }

  receiveMessage(e){
        this.router
  }

}
