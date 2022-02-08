import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error: string = '';
  constructor(private authService: AuthService){}
  title = 'angular-auth';
  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password).subscribe(resData => {
      console.log(resData);
    }, error =>{
      this.error = ' we have an issue in the backend';
      console.log(error);
    });
    //console.log(form.value);
    form.reset;
  }
}
