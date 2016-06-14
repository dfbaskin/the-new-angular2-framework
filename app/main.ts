
import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import {PlatformLocation} from '@angular/common';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
    Location,
    provide(PlatformLocation, { useClass: BrowserPlatformLocation }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
