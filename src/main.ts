// zone和reflect-metadata都是必须引入的
import 'zone.js';
import 'reflect-metadata';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppBar } from './appBar';
import { AppPie } from './appPie';
import { AppLine } from './appLine';
import { AppKLine } from './appKLine';

@Component({
    selector: 'ng2-d3',
    template: `
        <ng-bar></ng-bar>
        <ng-pie></ng-pie>
        <ng-line></ng-line>
        <ng-k></ng-k>
    `
})
class AppComponent { }

@NgModule({
  declarations: [
    AppComponent,
    AppBar,
    AppPie,
    AppLine,
    AppKLine
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
class App { }

platformBrowserDynamic()
    .bootstrapModule(App)
    .catch((err: any) => console.error(err));
