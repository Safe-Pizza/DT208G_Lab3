import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Calculate } from './pages/calculate/calculate';
import { About } from './pages/about/about';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "calculate", component: Calculate },
    { path: "about", component: About }
];
