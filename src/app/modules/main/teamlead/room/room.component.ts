import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Room } from 'src/core/models/room.model';
import { Project } from 'src/core/models/project.model';
import { Ticket } from 'src/core/models/ticket.model';
import { User, UserType } from 'src/core/models/user.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { RoomRequest } from 'src/core/models/request/room-request.model';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class TeamLeadRoomComponent implements OnInit{

  constructor(private apiService: ApiService, private authService: AuthService, private messageService: MessageService) {

  }
  rooms: Room[] = [];
  public roomRequest: RoomRequest = <RoomRequest>{}
  roomToEdit: Room | null = null;
  tickets: Ticket[] = [];
  projects: Project[] = [];
  users: User[] = [];
  usersRoomRol: User[] = [];

  ngOnInit() {

    const currentUserId = this.authService.getCurrentUserId();

    this.apiService.getAllEntities(Room).subscribe((roomResult) => {
      this.rooms = roomResult.data.filter((room) =>
      room.userId === currentUserId);
    });
    this.apiService.getAllEntities(Project).subscribe((projectResult) => {
      this.projects = projectResult.data;
      console.log(projectResult.data)
    })
    this.apiService.getAllEntities(User).subscribe((userResult) => {
      this.users = userResult.data;
      this.usersRoomRol=userResult.data;
      console.log(userResult.data)
    })
  }

  findUserName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.fullName : '';
  }
  deleteRoomId(id: number) {
    this.apiService.deleteEntity(id, Room).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.showInfoMessage('Silme işlemi tamamlandı.');
        this.refresh();
      }
    })
  }
  refresh() {
    const currentUserId = this.authService.getCurrentUserId();
    this.apiService.getAllEntities(Room).subscribe((roomResult) => {
      this.rooms = roomResult.data.filter((room) =>
      room.userId === currentUserId);
    });
  }
  getDeveloperTeamLeadUsers() {
    return this.usersRoomRol.filter((users) => users.userType === UserType.Developer || users.userType === UserType.TeamLead);
    }

//EKLEME İŞLEMLERİ
  onCreate(entity: RoomRequest) {
    this.apiService.createEntity<RoomRequest>(entity, 'Room').then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        console.log(response.message);
        entity.userId = 0;
        entity.room_Name = "";
        this.showSuccessMessage('Eklemeniz başarıyla tamamlandı.');
      }
    });
  }
  private showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: message });
  }
  private showInfoMessage(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Bilgi', detail: message });
  }

//GÜNCELLEME İŞLEMLERİ
  openEditDialog(id: number) {
    this.apiService.getEntityById<Room>(id, Room).then((response) => {
      if (response && response.data) {
        this.roomToEdit = response.data; // API'den alınan aracı carToEdit değişkenine atıyoruz
      } else {
        console.error('Room bulunamadı veya alınırken bir hata oluştu.');
      }
    }).catch((error) => {
      console.error('Room alınırken bir hata oluştu:', error);
    });
  }

  onUpdate(id: number, updatedRoom: Room) {
    this.update(id, updatedRoom).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        console.log(response.message);
         this.showSuccessMessage('Güncellemeniz başarıyla tamamlandı.');
      }
    }).catch((error) => {
      console.error('Room güncellenirken bir hata oluştu:', error);
    });
  }

  //Update işlemini gerçekleştiren kod
  update(id: number, updatedRoom: Room) {
    return this.apiService.updateEntity(id, updatedRoom, Room);
  }
}
