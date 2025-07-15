import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    username = '';
    email = '';

    login(user: string, pass: string){
        return this.username, this.email
    }
}