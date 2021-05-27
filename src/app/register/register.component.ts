import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public authToken:type[] = [];

  form = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    agree: new FormControl('', [Validators.required])
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.http.get<any>("assets/auth.json").subscribe(data =>{
      console.log(data);
      this.authToken = data;
       console.log(this.authToken);	
      this.route.navigate(['/success']);
    })
  }

  constructor(private http: HttpClient, private route:Router) { }

  ngOnInit(): void {
        
  }


}

export interface type{
    authtoken:string;
} 
