import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './default-welcome-page/home-page/home-page.component';
import { AboutusPageComponent } from './default-welcome-page/aboutus-page/aboutus-page.component';
import { ContactPageComponent } from './default-welcome-page/contact-page/contact-page.component';
import { LoginPageComponent } from './default-welcome-page/login-page/login-page.component';
import { AdminDashboardComponent } from './modules/main/admin/dashboard/dashboard.component';
import { AdminProjectComponent } from './modules/main/admin/project/project.component';
import { AdminRoomComponent } from './modules/main/admin/room/room.component';
import { AdminTaskComponent } from './modules/main/admin/task/task.component';
import { AdminTicketComponent } from './modules/main/admin/ticket/ticket.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { TeamPageComponent } from './default-welcome-page/team-page/team-page.component';
import { DefaultUserProfilePageComponent } from './containers/default-user-profile-page/default-user-profile-page.component';
import { TeamLeadDashboardComponent } from './modules/main/teamlead/dashboard/dashboard.component';
import { TeamLeadProjectComponent } from './modules/main/teamlead/project/project.component';
import { TeamLeadRoomComponent } from './modules/main/teamlead/room/room.component';
import { TeamLeadTaskComponent } from './modules/main/teamlead/task/task.component';
import { TeamLeadTicketComponent } from './modules/main/teamlead/ticket/ticket.component';
import { DeveloperDashboardComponent } from './modules/main/developer/dashboard/dashboard.component';
import { DeveloperProjectComponent } from './modules/main/developer/project/project.component';
import { DeveloperRoomComponent } from './modules/main/developer/room/room.component';
import { DeveloperTaskComponent } from './modules/main/developer/task/task.component';
import { DeveloperTicketComponent } from './modules/main/developer/ticket/ticket.component';
import { NavbarComponent } from './default-welcome-page/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/HomePage', pathMatch: 'full' },
  { path: 'HomePage', component: HomePageComponent },
  { path: 'AboutUsPage', component: AboutusPageComponent },
  { path: 'ContactPage', component: ContactPageComponent },
  { path: 'TeamPage', component: TeamPageComponent },
  { path: 'LoginPage', component: LoginPageComponent },
  {
    path: 'DefaultLayout',
    component: DefaultLayoutComponent,
    children: [
      { path: 'ProfilePage', component: DefaultUserProfilePageComponent },
      { path: 'admin/dashboard', component: AdminDashboardComponent },
      { path: 'admin/project', component: AdminProjectComponent },
      { path: 'admin/room', component: AdminRoomComponent },
      { path: 'admin/task', component: AdminTaskComponent },
      { path: 'admin/ticket', component: AdminTicketComponent },
    ],
  },
  {
    path: 'DefaultLayout',
    component: DefaultLayoutComponent,
    children: [
      { path: 'ProfilePage', component: DefaultUserProfilePageComponent },
      { path: 'teamlead/dashboard', component: TeamLeadDashboardComponent },
      { path: 'teamlead/project', component: TeamLeadProjectComponent },
      { path: 'teamlead/room', component: TeamLeadRoomComponent },
      { path: 'teamlead/task', component: TeamLeadTaskComponent },
      { path: 'teamlead/ticket', component: TeamLeadTicketComponent },
    ],
  },
  {
    path: 'DefaultLayout',
    component: DefaultLayoutComponent,
    children: [
      { path: 'ProfilePage', component: DefaultUserProfilePageComponent },
      { path: 'developer/dashboard', component: DeveloperDashboardComponent },
      { path: 'developer/project', component: DeveloperProjectComponent },
      { path: 'developer/room', component: DeveloperRoomComponent },
      { path: 'developer/task', component: DeveloperTaskComponent },
      { path: 'developer/ticket', component: DeveloperTicketComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
