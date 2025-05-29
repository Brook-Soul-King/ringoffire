import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ 
    "projectId": "ring-of-fire-6d109", 
    "appId": "1:448109509424:web:053aced8366bb91d44a6f5", 
    "storageBucket": "ring-of-fire-6d109.firebasestorage.app", 
    "apiKey": "AIzaSyB3gx6CeWJDw87DmcGtwmwccz5zBJiiCwA", 
    "authDomain": "ring-of-fire-6d109.firebaseapp.com", 
    "messagingSenderId": "448109509424" })
  ), provideFirestore(() => getFirestore())]
};
