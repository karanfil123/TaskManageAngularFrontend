import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AdminProjectComponent } from './project/project.component';
import { AdminRoomComponent } from './room/room.component';
import { AdminTicketComponent } from './ticket/ticket.component';
import { AdminTaskComponent } from './task/task.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AdminProjectComponent,
    AdminRoomComponent,
    AdminTicketComponent,
    AdminTaskComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class AdminModule { }
