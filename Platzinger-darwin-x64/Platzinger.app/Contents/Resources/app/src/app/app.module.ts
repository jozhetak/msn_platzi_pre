import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import {AuthenticationGuard} from './authentication.guard';
import { SettingsComponent } from './settings/settings.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import {SearchPipe} from './pipes/search';
import { ContactComponent } from './contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {FriendRequestModalComponent} from './modals/friend-request/friend-request.modal';
const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthenticationGuard]},
  {path: 'conversation/:user_id', component: ConversationComponent, canActivate: [AuthenticationGuard]}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversationComponent,
    MenuComponent,
    LoginComponent,
    SettingsComponent,
    SearchPipe,
    ContactComponent,
    FriendRequestModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    ImageCropperModule,
    NgbModule.forRoot(),
    BootstrapModalModule.forRoot({container: document.body})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FriendRequestModalComponent]
})
export class AppModule { }
