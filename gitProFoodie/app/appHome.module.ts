import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppHomeComponent } from './component.appHome';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppHomeComponent
    ],
    bootstrap:[
        AppHomeComponent
    ]
})

export class AppHomeModule {};