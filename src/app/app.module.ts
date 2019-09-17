import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';

import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Page404Component } from './components/page404/page404.component';
import { MenuComponent } from './components/menu/menu.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';
import { NewWorkOrderComponent } from './components/workOrder/new-work-order/new-work-order.component';
import { MyWorkOrdersComponent } from './components/workOrder/my-work-orders/my-work-orders.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { environment } from '../environments/environment';


 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    Page404Component,
    MenuComponent,
    KnowledgeBaseComponent,
    NewWorkOrderComponent,
    MyWorkOrdersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatCardModule,MatFormFieldModule,MatIconModule,
    MatInputModule,MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
