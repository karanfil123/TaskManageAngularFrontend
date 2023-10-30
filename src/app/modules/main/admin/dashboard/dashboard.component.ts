import { Component } from '@angular/core';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ApiService } from 'src/core/services/api/api.service';
import { Room } from 'src/core/models/room.model';
import { MyTask } from 'src/core/models/mytask.model';
import { Project } from 'src/core/models/project.model';
import { Ticket } from 'src/core/models/ticket.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class AdminDashboardComponent {

  constructor(private authService: AuthService, private apiService: ApiService,private messageService: MessageService) { }

  registrationSuccess: boolean = false;
  formData: any = { };
  options: string[] = ["Team Lead", "Developer"];

  totalTaskCount:number = 0;
  totalRoomCount:number = 0;
  totalProjectCount:number = 0;
  totalTicketCount:number = 0;

  requestModel:RegisterRequest={
    tc_no:  this.formData.tc_no,
    fullName: this.formData.fullName,
    userName: this.formData.userName,
    email: this.formData.email,
    phone: this.formData.phone,
    password: this.formData.password,
  }

  ngOnInit(): void {
    this.getTaskCount();
    this.getRoomCount();
    this.getProjectCount();
    this.getTicketCount();
  }

  registerUser() {
    const registerRequestModel: RegisterRequest = {
      tc_no: this.formData.tc_no,
      fullName: this.formData.fullName,
      userName: this.formData.userName,
      email: this.formData.email,
      phone: this.formData.phone,
      password: this.formData.password,
    };

  console.log(registerRequestModel);
    this.authService.register(registerRequestModel).then((responseStatus) => {
      if (responseStatus === ResponseStatus.Ok) {
        this.showSuccessMessage("Başarıyla kayıt gerçekleştirildi.")
        console.log('Kullanıcı kaydedildi.');
        this.registrationSuccess = true;
        this.resetForm();
        setTimeout(() => {
          this.registrationSuccess = false;
        }, 5000);
      } else {
        console.error('Kullanıcı kaydedilemedi.');
      }
    })
    .catch((error) => {
      console.error('Bir hata oluştu: ' + error);
    });
  }

  resetForm() {
    this.formData = {};
  }

  async getTaskCount() {
    try {
      const entityType = MyTask;
      const response = await this.apiService.getAllEntities(entityType).toPromise();
      if (response?.status === ResponseStatus.Ok) {
        this.totalTaskCount = response.data.length;
      } else {
        console.error('Veri sayısı alınamadı:', ResponseStatus.Error);
      }
    } catch (error) {
      console.error('Veri sayısı alınamadı:', error);
    }
  }

  async getRoomCount() {
    try {
      const entityType = Room;
      const response = await this.apiService.getAllEntities(entityType).toPromise();
      if (response?.status === ResponseStatus.Ok) {
        this.totalRoomCount = response.data.length;
      } else {
        console.error('Veri sayısı alınamadı:', ResponseStatus.Error);
      }
    } catch (error) {
      console.error('Veri sayısı alınamadı:', error);
    }
  }

  async getProjectCount() {
    try {
      const entityType = Project;
      const response = await this.apiService.getAllEntities(entityType).toPromise();
      if (response?.status === ResponseStatus.Ok) {
        this.totalProjectCount = response.data.length;
      } else {
        console.error('Veri sayısı alınamadı:', ResponseStatus.Error);
      }
    } catch (error) {
      console.error('Veri sayısı alınamadı:', error);
    }
  }

  async getTicketCount() {
    try {
      const entityType = Ticket;
      const response = await this.apiService.getAllEntities(entityType).toPromise();
      if (response?.status === ResponseStatus.Ok) {
        this.totalTicketCount = response.data.length;
      } else {
        console.error('Veri sayısı alınamadı:', ResponseStatus.Error);
      }
    } catch (error) {
      console.error('Veri sayısı alınamadı:', error);
    }
  }

  private showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: message });
  }

}
