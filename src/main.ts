import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import smoothscroll from 'smoothscroll-polyfill';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

smoothscroll.polyfill();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
