import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Calculate } from './pages/calculate/calculate';
import { About } from './pages/about/about';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "calculate", component: Calculate },
    { path: "about", component: About },
    { path: "/home", redirectTo: "home", pathMatch: "full" },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: PageNotFound }
];
