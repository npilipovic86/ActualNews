
import { MainPageComponent } from './page/main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MeniComponentComponent } from './meni-component/meni-component.component';
import { JwtUtilsService } from 'app/service/jwt-utils.service';
import { CanActivateAuthGuard } from './service/can-activate-auth.guard';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'app/login/login.component';

import { PageNotFoundComponent } from 'app/page/page-not-found/page-not-found.component';
import { VestService } from 'app/meni-component/vest.service';
import { KategorijaService } from 'app/meni-component/kategorija.service';
import { EditSaveComponent } from './edit-save/edit-save.component';
import { PreviewComponent } from './preview/preview.component';
import { MessagesComponent } from './messages/messages.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MeniComponentComponent },
  { path: 'vest/:id', component: PreviewComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainPageComponent,
    MeniComponentComponent,
    EditSaveComponent,
    PreviewComponent,
    MessagesComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    VestService,
    CanActivateAuthGuard,
    JwtUtilsService,
    KategorijaService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
