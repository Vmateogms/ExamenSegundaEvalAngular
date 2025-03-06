import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { Page404Component } from './pages/page404/page404.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: ProductListComponent},
    { path: 'producto/:_id', component: ProductViewComponent},
    { path: '**', component: Page404Component},



];
