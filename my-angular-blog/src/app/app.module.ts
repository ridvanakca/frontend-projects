import { PostsModule } from './posts/posts.module';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
