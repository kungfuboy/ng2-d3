// zone和reflect-metadata都是必须引入的
import 'zone.js';
import 'reflect-metadata';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

// import { appBar } from './appBar';
// import { appPie } from './appPie';
// import { appLine } from './appLine';
import { appKLine } from './appKLine';

// 编译启动AppMoule模块
// platformBrowserDynamic()
//     .bootstrapModule(appBar)
//     .catch((err: any) => console.error(err));
//
// platformBrowserDynamic()
//     .bootstrapModule(appPie)
//     .catch((err: any) => console.error(err));
//
// platformBrowserDynamic()
//     .bootstrapModule(appLine)
//     .catch((err: any) => console.error(err));

platformBrowserDynamic()
    .bootstrapModule(appKLine)
    .catch((err: any) => console.error(err));
