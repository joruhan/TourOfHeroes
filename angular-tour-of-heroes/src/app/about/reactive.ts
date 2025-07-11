import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'reactive',
    template: `
        <h1>Reactive Form </h1>

        <form  [formGroup]="profileForm" (ngSubmit)="handleSubmit()">

            <input type="text" formControlName="name" placeholder="Enter Name:" />
            <input type="email" formControlName="email" placeholder="Enter Email" />
            <button type="submit">Submit</button>
        </form>

        <h2>Profile Form</h2>
        <p>Name: {{ profileForm.value.name }}</p>
        <p>Email: {{ profileForm.value.email }}</p>
    `,
    imports: [ReactiveFormsModule]
})

export class Reactive{
    profileForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
    });

    handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
    }
}