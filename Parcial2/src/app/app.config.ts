import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withFetch, provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { loginInterceptorInterceptor } from './interceptor/login-interceptor.interceptor';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(), withInterceptors([loginInterceptorInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes),
     provideClientHydration(),   {provide: FormsModule }]
};
