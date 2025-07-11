import {Component} from '@angular/core';

@Component({
  selector: 'user-login',
  standalone: true, 
  template: `
    <h1> Welcome to the user login page</h1>

    <form>
      <input type="input"> Username: 
      <input type="password"> Password: 
      <button type="button"> Submit </button>
    </form>
  `,
})
export class User {
  username = 'youngTech';
}