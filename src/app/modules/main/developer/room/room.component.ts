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
export class DeveloperRoomComponent implements OnInit {

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
      this.rooms = roomResult.data.filter((room) => room.userId === currentUserId);

    });
    this.apiService.getAllEntities(Project).subscribe((projectResult) => {
      this.projects = projectResult.data;
      console.log(projectResult.data)
    })
    this.apiService.getAllEntities(User).subscribe((userResult) => {
      this.users = userResult.data;
      this.usersRoomRol = userResult.data;
      console.log(userResult.data)
    })
  }
  // Sayfayı yenileme
  refresh() {
    const currentUserId = this.authService.getCurrentUserId();
    this.apiService.getAllEntities(Room).subscribe((roomResult) => {
      this.rooms = roomResult.data.filter((room) => room.userId === currentUserId);

    });
  }
  findUserName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.fullName : '';
  }


  getDeveloperTeamLeadUsers() {
    return this.usersRoomRol.filter((users) => users.userType === UserType.Developer || users.userType === UserType.TeamLead);
  }

}

