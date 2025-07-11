import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
    selector: 'reactive',
    template: `
        <h1>Reactive Form </h1>

        <form  [formGroup]="profileForm" (ngSubmit)="handleSubmit()">

            <input type="text" formControlName="name" placeholder="Enter Name:" />
            <input type="email" formControlName="email" placeholder="Enter Email" />
            <input type="password" formControlName="password" placeholder="Enter password:" />
            <button type="submit" [disabled]="!profileForm.valid">Submit</button>
        </form>

        <h2>Profile Form</h2>
        <p>Name: {{ profileForm.value.name }}</p>
        <p>Email: {{ profileForm.value.email }}</p>
    `,
    imports: [ReactiveFormsModule]
})

export class Reactive{
    profileForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

    handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email + ' | ' + this.profileForm.value.password);
    }
}