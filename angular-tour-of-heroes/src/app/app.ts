import {Component, inject} from '@angular/core';
import { LowerCasePipe, UpperCasePipe, DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';
import { User} from './user';
import { Child } from "./child";
import { Comments } from "./comments";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarService } from './cars/car.service';
import { Reverse } from './pipes/reverse.pipe';

@Component({
  selector: 'app-root',
  styles: `
    .border {border: 1px solid black; border-radius: 10px; padding: 10px}
  `,
  template: `

<!-- _____________________________________ C O N D I T I O N S ______________________________________________ -->
    <h1>Conditions</h1>
    @if(isServerRunning)
    {
      <section>Yes, the service is running</section>
    }
    @else
    {
      <section>No, the service is not running</section>
    }

<!-- __________________________________________ L O O P S ___________________________________________________ -->
    <h1>Loops</h1>
    <p>Foreach loop tracking only the key</p>
    @for (ls of shoppingList; track ls)
    {
      <section> <ul><li> {{ ls }}</li></ul></section>
    }
    <p>Foreach loop tracking value of a key</p>
    @for (os of operatingSystems; track os.id)
    {
      <section> <ul><li> {{ os.name}} </li></ul> </section>
    }

<!-- _____________________________________E V E N T    H A N D L I N G_______________________________________ -->
    <h1>Event Handling</h1>
    
    <h3><li>Button Clicked</li></h3>
    <button (click)="greet()">Click me</button>

    <h3><li>Hover Effect</li></h3>
    <section (mouseover)="onMouseOver()" (mouseleave)="onMouseLeave()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>

<!-- _____________________________________R E F E R E N C E   C O M P O N E N T______________________________________ -->
  <h1>Reference Component: </h1>    
  <app-user />

<!-- _____________________________________ D E F E R    C O M P O N E N T ______________________________________________ -->
  <h1>Defer Component</h1>
  <section>
    @defer () {
      <app-child (addItemEvent)="addItem($event)" />
    <p>You have clicked {{items.length}} times</p>
    }@loading (minimum 1s) {<p>Busy Loading Component</p>}
  </section>

<!-- ______________________________________H R E F    N A V I G A T I O N ___________________________________ -->
    <h1>Navigation</h1>
    <h3>Href Navigation - reloads entire page</h3>
    <div class="border">
      <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
      |
      <a href="/about">About</a>
    </nav>
    <router-outlet />
    </div>

<!-- ______________________________R O U T E R L I N K    N A V I G A T I O N______________________________ -->

    <h3>RouteLink Navigation -reloads only components</h3>
    <div class="border">
      <a routerLink="/"> Home Page </a>
      |
      <a routerLink="/user"> User Page </a>
      |
      <a routerLink="/about"> Template Form </a>
      |
      <a routerLink="/reactive"> Reactive Form </a>
      <router-outlet />
    </div>

    <!-- ___________________________________________D E P E N D E N C Y   I N J E C T I O N _________________________________________________-->
    <h1>Dependency Injection</h1>
    <section>
      <p>Dependency Injection</p> 
      <p> {{ carService.getCars() }} </p>
      <p> {{ carService.getCar(2) }} </p>
      <p> {{ display }} </p>
    </section>

<!-- ___________________________________________P I P E S _________________________________________________-->
  <h1> Pipes And Custom Pipes</h1>  
  <section>
    <p>Using Pipes in Angular</p>
    <li>Lowercase Pipe: {{ pipeMessage | lowercase}} </li>
    <li>Uppercase Pipe: {{ pipeMessage | uppercase}} </li>
    <li> Date with "date" {{ birthday | date: 'medium' }} </li>
    <li> Currency with "currency" {{ num | currency: 'R' }} </li>
    <li>Decimal with "decimal" {{ num | number: '3.2-2' }} </li>
    <p></p>
    <p> Implementing Custom Pipes:</p>
    <li> Normal Message: {{ customerPipeMessage }} </li>
    <li> Reverse Message: {{ customerPipeMessage | customPipe}}</li>
    <li>Forward Message: {{ reversedMessage | customPipe}} </li>
    </section>

  `,
  imports: [User, Child, RouterOutlet, RouterLink, LowerCasePipe, Reverse, UpperCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
})


export class App {
   isServerRunning = true; 
   operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Lunix'}];
   shoppingList = ['bananas', 'tomatoes', 'eggs', 'bacon'];
   users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
   isEditable = true;
   message = '';
   pipeMessage = 'This is a Message using Pipes in Angular';
   birthday = '2002/01/05';
   num = 103.1234;
   customerPipeMessage = 'You are a champion';
   reversedMessage = 'noipmahc a era uoY';

   carService = inject(CarService);
   display = this.carService.getCars().join(' ⭐️ ');

   items = new Array();
   addItem(item: string){
    this.items.push(item);
   }

   greet()
   {
    console.log("Hello There!");
    alert('You have clicked a button');
   }
   onMouseOver()
   {
    this.message = "Way to go"; 
   }
   onMouseLeave()
   {
    this.message = "";    
   }
}