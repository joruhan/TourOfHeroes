import {Component} from '@angular/core';
import {User} from './user';
import { Child } from "./child";
import { Comments } from "./comments";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `

<!-- _____________________________________JUST SOME OF THE BASICS______________________________________________ -->
    @if(isServerRunning)
      {
        <section>Yes, the service is running</section>
      }
    @else
    {
      <section>No, the service is not running</section>
    }

    @for (os of operatingSystems; track os.id){
      <section>{{ os.name}} </section>
    }

    @for (ls of shoppingList; track ls)
      {
        <section> <ul><li> {{ ls }}</li></ul></section>
      }

    @for(user of users; track user.id)
      {
        <section><p> {{ user.name }}</p></section>
      }

      <section>
        <div [contentEditable]="isEditable"></div>

        <button (click)="greet()">Button</button>
      </section>

      <section (mouseover)="onMouseOver()" (mouseleave)="onMouseLeave()">
      There's a secret message for you, hover to reveal:
      {{ message }}

      <app-user />
    </section>

    <section>
      @defer () {
        <app-child (addItemEvent)="addItem($event)" />
      <p>You have clicked {{items.length}} times</p>
      }@loading (minimum 1s) {<p>Busy Loading Component</p>}
    </section>


    <div>
      <h1> How I feel about Angular </h1>
        @defer(on viewport)
        {
          @if(items.length > 3)
            {
              <comments />
            }
          
        }@placeholder { <p> Future commnets </p>
        }@loading (minimum 1s){
          <p>Loading Comments...</p>
        }
    </div>

<!-- ___________HREF NAVIGATINO- This refreshes the entire page which is not ideal for performance______________ -->
    <nav>
      <p>Href Navigation</p>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
      |
      <a href="/about">About</a>
    </nav>
    
    <router-outlet />

      <!-- Between these 2 navigation you can cleary see href reloads the entire page 
                                                                      where routelink reloads only the component -->
<!-- ______________________________ROUTERLINK NAVIGATION. For optimal performacne______________________________ -->

    <p>RouteLink Navigation</p>
    <a routerLink="/"> Home Page </a>
    |
    <a routerLink="/user"> User Page </a>
    |
    <a routerLink="/about"> Template Form </a>
    |
    <a routerLink="/reactive"> Reactive Form </a>
<router-outlet />

  `,
  imports: [User, Child, Comments, RouterOutlet, RouterLink],
})


export class App {
   isServerRunning = true; 
   operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Lunix'}];
   shoppingList = ['bananas', 'tomatoes', 'eggs', 'bacon'];
   users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
   isEditable = true;
   message = '';

   items = new Array();
   addItem(item: string){
    this.items.push(item);
   }

   greet()
   {
    console.log("Hello There!");
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