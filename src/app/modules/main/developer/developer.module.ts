import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperDashboardComponent } from './dashboard/dashboard.component';
import { DeveloperProjectComponent } from './project/project.component';
import { DeveloperRoomComponent } from './room/room.component';
import { DeveloperTaskComponent } from './task/task.component';
import { DeveloperTicketComponent } from './ticket/ticket.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DeveloperDashboardComponent,
    DeveloperProjectComponent,
    DeveloperRoomComponent,
    DeveloperTaskComponent,
    DeveloperTicketComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ToastModule
  ]
})
export class DeveloperModule { }  
