/**
 * Created by andromeda on 18/08/2016.
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './root/app.module';
import {AuthGuard} from './services/auth.guard';

platformBrowserDynamic().bootstrapModule(AppModule);