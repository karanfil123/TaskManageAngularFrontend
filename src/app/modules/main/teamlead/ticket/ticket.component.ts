import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Ticket } from 'src/core/models/ticket.model';
import { User, UserType } from 'src/core/models/user.model';
import { Room } from 'src/core/models/room.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Router } from '@angular/router';
import { TicketRequest } from 'src/core/models/request/ticket-request.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TeamLeadTicketComponent implements OnInit{

  constructor(private apiService: ApiService, private messageService: MessageService) { }

  tickets: Ticket[] = [];
  public ticketRequest: TicketRequest = <TicketRequest>{}
  ticketToEdit: Ticket | null = null;
  users: User[] = [];
  rooms: Room[] = [];
  usersTicketRol: User[] = [];
  roomsTicketRol: Room[] = [];


  ngOnInit() {
    this.apiService.getAllEntities(Ticket).subscribe((ticketResult) => {
      this.tickets = ticketResult.data;
    });
    this.apiService.getAllEntities(User).subscribe((userResult) => {
      this.users = userResult.data;
      this.usersTicketRol = userResult.data;
    });
    this.apiService.getAllEntities(Room).subscribe((roomResult) => {
      this.rooms = roomResult.data;
      this.roomsTicketRol = roomResult.data;
    })
  }

  findUserName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.fullName : ''; // Kullanıcı adını göster veya boş bir dize döndür
  }
  findRoomName(roomId: number): string {
    const room = this.rooms.find((room) => room.id === roomId);
    return room ? room.room_Name : ''; // Kullanıcı adını göster veya boş bir dize döndür
  }
  getStatusStringForTask(task: Ticket): string {
    switch (task.ticket_Status) {
      case 0:
        return 'Opened';
      case 1:
        return 'Closed';
      default:
        return 'Unknown';
    }
  }
  private showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: message });
  }
  private showInfoMessage(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Bilgi', detail: message });
  }

  deleteTicketId(id: number) {
    this.apiService.deleteEntity(id, Ticket).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.showInfoMessage('Silme işlemi tamamlandı.');
        this.refresh();
      }
    })
  }
  refresh() {
    this.apiService.getAllEntities(Ticket).subscribe((response) => {
      this.tickets = response.data;
      console.log(this.tickets)
    });
  }
  getDeveloperTeamLeadUsers() {
    return this.usersTicketRol.filter((users) => users.userType === UserType.Developer || users.userType === UserType.TeamLead);
  }

  //EKLEME İŞLEMLERİ
  onCreate(entity: TicketRequest) {
    this.apiService.createEntity<TicketRequest>(entity, 'Ticket').then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.showSuccessMessage('Eklemeniz işleminiz başarıyla tamamlandı.');
        this.refresh();
        entity.ticket_Status = 0;
        entity.userId = 0;
        entity.roomId = 0;
        entity.ticket_Content = "";

      }
    });
  }

  //GÜNCELLEME İŞLEMLERİ

  openEditDialog(id: number) {
    this.apiService.getEntityById<Ticket>(id, Ticket).then((response) => {
      if (response && response.data) {
        this.ticketToEdit = response.data; // API'den alınan  değişkenine atıyoruz
      } else {
        console.error('Ticket bulunamadı veya alınırken bir hata oluştu.');
      }
    }).catch((error) => {
      console.error('Ticket alınırken bir hata oluştu:', error);
    });
  }

  onUpdate(id: number, updatedTicket: Ticket) {
    this.update(id, updatedTicket).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        console.log(response.message);

        this.showSuccessMessage('Güncellemeniz başarıyla tamamlandı.');

      }
    }).catch((error) => {
      console.error('Ticket güncellenirken bir hata oluştu:', error);
    });
  }

  //Update işlemini gerçekleştiren kod
  update(id: number, updatedTicket: Ticket) {
    return this.apiService.updateEntity(id, updatedTicket, Ticket);
  }
}
