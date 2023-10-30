import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Project } from 'src/core/models/project.model';
import { User, UserType } from 'src/core/models/user.model';
import { Room } from 'src/core/models/room.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Router } from '@angular/router';
import { ProjectRequest } from 'src/core/models/request/project-request.model';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class DeveloperProjectComponent implements OnInit {

  constructor(private apiService: ApiService,private authService: AuthService, private messageService: MessageService) { }

  projects: Project[] = [];
  public projectRequest: ProjectRequest = <ProjectRequest>{};
  projectToEdit: Project | null = null;

  users: User[] = [];
  rooms: Room[] = [];

  usersProjectRole: User[] = [];
  roomsProjectRole: Room[] = [];

  ngOnInit() {
    // Projeleri, kullanıcıları ve odaları getir
    const currentUserId = this.authService.getCurrentUserId();
    this.apiService.getAllEntities(Project).subscribe((projectResult) => {
      this.projects = projectResult.data.filter((project) => project.userId === currentUserId);
     
    });
    this.apiService.getAllEntities(Room).subscribe((roomResult) => {
      this.rooms = roomResult.data;
      this.roomsProjectRole = roomResult.data;
    });
    this.apiService.getAllEntities(User).subscribe((userResult) => {
      this.users = userResult.data;
      this.usersProjectRole = userResult.data;
    });

    this.refresh();
  }
  // Sayfayı yenileme
  refresh() {
    const currentUserId = this.authService.getCurrentUserId();
    this.apiService.getAllEntities(Project).subscribe((projectResult) => {
      this.projects = projectResult.data.filter((project) => project.userId === currentUserId);
     
    });
  }
  // Kullanıcı adını kullanıcı kimliğiyle bulma
  findUserName(userId: number): string {
    const user = this.users.find((user) => user.id === userId);
    return user ? user.fullName : '';
  }

  // Oda adını oda kimliğiyle bulma
  findRoomName(roomId: number): string {
    const room = this.rooms.find((room) => room.id === roomId);
    return room ? room.room_Name : '';
  }

  // Developer kullanıcılarını getirme
  getAllRoles() {
    return this.usersProjectRole.filter((user) => {
      return this.usersProjectRole.filter((users) => users.userType === UserType.Developer || users.userType === UserType.TeamLead);
    });
  }

  getStatusStringForProject(project: Project): string {
    switch (project.project_Status) {
      case 0:
        return 'Not Started';
      case 1:
        return 'In Progress';
      case 2:
        return 'Completed';
      default:
        return 'Unknown';
    }
  }

}



