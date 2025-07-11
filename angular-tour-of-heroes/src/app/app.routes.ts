import { Routes } from '@angular/router';

import { User } from './user/user';
import { Home } from './home/home';
import { About } from './about/about';
import { Reactive } from './about/reactive';

export const routes: Routes = [
    { path: '', title: 'App Home Page', component: Home, },
    { path: 'user', title: 'App User Page', component: User, },
    { path: 'about', title: 'Template Form', component: About },
    { path: 'reactive', title: 'Reactive Form', component: Reactive },
];
