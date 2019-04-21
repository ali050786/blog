import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HelperService } from 'src/app/common/helper.service';

@Component({
  selector: 'blog-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  modelBoolean = false;
  
  modelbox: any

  id: any;

  post: any;

  constructor(private route: ActivatedRoute, private helper: HelperService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    
    this.helper.getDataById('posts', this.id).subscribe(data => this.post = data)    
  }

  delete(){
    this.modelbox = {
      message : 'Current article would be deleted permanently',
      buttons:{
        first: 'Yeah! Delete',
        second: 'Please Dont delete'
      }
    }
    this.modelBoolean = true;
    //this.helper.deleteData('posts', this.id).subscribe(data => {}) 
  }


  receiveMessage(e){
    if(e == this.modelbox.buttons.first){
      this.helper.deleteData('posts', this.id).subscribe(data => {
        this.modelBoolean = false;
        this.router.navigateByUrl('/blogs')
      }) 
    } else if (e == this.modelbox.buttons.second){
      this.modelBoolean = false;
    }
  }


}
