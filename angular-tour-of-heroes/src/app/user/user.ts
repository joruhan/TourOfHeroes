import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/firstService.service';

@Component({
  selector: 'user-login',
  standalone: true, 
  template: `
    <form #f="ngForm" (ngSubmit)="save()">

      <Label>
        Name: 
        <input [(ngModel)]="model.name" name="name" type="text" required>
      </Label>
      

      <label>
        Email:
        <input [(ngModel)]="model.email" name="email" type="email" required> 
      </label>

      <button type="submit" [disabled]="f.invalid">Submit</button>
    </form>

    <p *ngIf="submitted">
      Hello, {{ model.name }}, your email is '{{ model.email }}'
    </p>
  `,
  imports: [FormsModule, CommonModule],
})
export class User {
  model = {name: '', email: ''};
  submitted = false; 

  constructor(private auth: AuthService){}

  save(){
    this.submitted = true; 
    this.auth.login(this.model.name, this.model.email)
  }
}