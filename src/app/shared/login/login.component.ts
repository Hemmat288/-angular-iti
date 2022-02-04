import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../_sevices/auth.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(private AuthService:AuthService) {}

  ngOnInit(): void {}
  onclick(form:NgForm) {
    this.AuthService.login(form.value).subscribe(
      (res) => {
        sessionStorage.setItem('value','res.token')
      },
      (err)=>{},
      ()=>{}
    )
  }
}
