import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {AppModule} from './app.module'

let bootstrap = platformBrowserDynamic();
bootstrap.bootstrapModule(AppModule);