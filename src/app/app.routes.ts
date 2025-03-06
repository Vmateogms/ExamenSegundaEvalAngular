import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

export const routes: Routes = [

    { path: 'home', component: ProductListComponent},
    { path: 'producto/:_id', component: ProductViewComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
        //page404 aqui



];
