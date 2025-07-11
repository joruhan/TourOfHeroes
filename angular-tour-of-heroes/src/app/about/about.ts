import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'about',
    template: `
        <h1>Template Form </h1>

        <label for="framework">
            Full Name: 
            <input id="username" type="text" [(ngModel)]="bindUsername" />

            Surname: 
            <input id="surname" type="text" [(ngModel)]="bindSurname" />

            Password: 
            <input id="password" type="password" [(ngModel)]="bindPassword" />
        </label>
        <button id="btnSubmit" type="submit" (click)="btnFrmSubmit()">Submit</button>
    `,
    imports: [FormsModule]
})

export class About{
    bindUsername = '';
    bindSurname='';
    bindPassword='';

    btnFrmSubmit()
    {
        if(this.bindUsername != '' && this.bindSurname != '' && this.bindPassword != '')
        {
            console.log(this.bindUsername, this.bindSurname, this.bindPassword);
        }
        else
        {
            alert("Please fill in all fields")
        }
    }
}