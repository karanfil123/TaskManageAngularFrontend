import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { DeveloperModule } from './developer/developer.module';
import { TeamleadModule } from './teamlead/teamlead.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModule,
    DeveloperModule,
    TeamleadModule,
  ]
})
export class MainModule { }
