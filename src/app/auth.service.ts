import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
export interface AuthResponseData{
    AccessJWT: string,
    RefreshJWT: string,
    FirstName: string,
    LastName: string,
    Position: string,
    SiteLan: string

}
@Injectable({providedIn: "root"})
export class AuthService{
    constructor(private http: HttpClient){}
    
    signIn(email: string, password: string){
        return this.http.post<AuthResponseData>('https://la.pilinux.me/api/v0.1.0/register',
        {
            email: email,
            password: password
        }
        );
    }
    login(email: string, password: string){
        return this.http.post<AuthResponseData>('https://la.pilinux.me/api/v0.1.0/login',
        {
            email: email,
            password: password
        }
        );
    }
}