import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TeamLeadDashboardComponent } from './dashboard/dashboard.component';
import { TeamLeadProjectComponent } from './project/project.component';
import { TeamLeadRoomComponent } from './room/room.component';
import { TeamLeadTaskComponent } from './task/task.component';
import { TeamLeadTicketComponent } from './ticket/ticket.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    TeamLeadDashboardComponent,
    TeamLeadProjectComponent,
    TeamLeadRoomComponent,
    TeamLeadTaskComponent,
    TeamLeadTicketComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ToastModule
  ]
})
export class TeamleadModule { }
