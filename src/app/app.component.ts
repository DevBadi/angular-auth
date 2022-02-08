import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

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
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.login(email, password)
    authObs.subscribe(resData => {
      console.log(resData);
    }, error =>{
      this.error = 'This is the Isse : ' + error.error.msg;
      console.log(error);
      console.log(error.error.msg);
    });
    //console.log(form.value);
    form.reset;
  }
}
