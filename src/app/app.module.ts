import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { DefaultSidebarComponent } from './containers/default-layout/default-sidebar/default-sidebar.component';
import { ContentTopbarComponent } from './containers/default-layout/content-topbar/content-topbar.component';
import { ContentFooterComponent } from './containers/default-layout/content-footer/content-footer.component';
import { HomePageComponent } from './default-welcome-page/home-page/home-page.component';
import { AboutusPageComponent } from './default-welcome-page/aboutus-page/aboutus-page.component';
import { LoginPageComponent } from './default-welcome-page/login-page/login-page.component';
import { ContactPageComponent } from './default-welcome-page/contact-page/contact-page.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AuthModule } from './modules/auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TeamPageComponent } from './default-welcome-page/team-page/team-page.component';
import { MainModule } from './modules/main/main.module';
import { DefaultUserProfilePageComponent } from './containers/default-user-profile-page/default-user-profile-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from 'src/core/services/interceptor/jwt.interceptor';
import { FooterComponent } from './default-welcome-page/footer/footer.component';
import { NavbarComponent } from './default-welcome-page/navbar/navbar.component';
import { HeroComponent } from './default-welcome-page/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    DefaultSidebarComponent,
    ContentTopbarComponent,
    ContentFooterComponent,
    HomePageComponent,
    AboutusPageComponent,
    LoginPageComponent,
    ContactPageComponent,
    TeamPageComponent,
    DefaultUserProfilePageComponent,
    FooterComponent,
    NavbarComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    SplitterModule,
    DividerModule,
    ScrollPanelModule,
    CardModule,
    MainModule,
    InputTextModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
