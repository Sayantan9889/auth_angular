import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpSreviceService } from 'src/app/Service/http-srevice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData!: FormGroup;
  formDetails!:any;


  constructor(private httpSer: HttpSreviceService) {}

  ngOnInit():void {
    this.formData = new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  login_user() {
    this.formDetails = this.formData.value;
    // console.log(this.formDetails);
    
    this.httpSer.login(this.formDetails).subscribe((res:any) => {
      // console.log(res);
      
    })
  }
}
