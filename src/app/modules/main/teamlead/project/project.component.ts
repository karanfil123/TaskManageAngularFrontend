import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Project } from 'src/core/models/project.model';
import { User, UserType } from 'src/core/models/user.model';
import { Room } from 'src/core/models/room.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { Router } from '@angular/router';
import { ProjectRequest } from 'src/core/models/request/project-request.model';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class TeamLeadProjectComponent implements OnInit{

  constructor(private apiService: ApiService,private messageService: MessageService) {}

  projects: Project[] = [];
  public projectRequest: ProjectRequest = <ProjectRequest>{};
  projectToEdit: Project | null = null;

  users: User[] = [];
  rooms: Room[] = [];

  usersProjectRole: User[] = [];
  roomsProjectRole: Room[] =[];

  ngOnInit() {
    // Projeleri, kullanıcıları ve odaları getir
    this.apiService.getAllEntities(Project).subscribe((projectResult) => {
      this.projects = projectResult.data;
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

  private showSuccessMessage(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: message });
  }
  private showInfoMessage(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Bilgi', detail: message });
  }

  // Yeni proje oluşturma
  onCreate(entity: ProjectRequest) {
    this.apiService.createEntity<ProjectRequest>(entity, 'Project').then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.showSuccessMessage('Eklemeniz işleminiz başarıyla tamamlandı.');
        this.refresh();
        entity.userId = 0;
        entity.roomId = 0;
        entity.project_Title = "";
        entity.project_Status = "";
        entity.project_Description = "";
      }
    });
  }

  private showErrorMessage(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Hata', detail: message });
  }
    // Entity oluşturma
    createEntity<TEntity>(entity: TEntity, entityType: string) {
      return this.apiService.createEntity<TEntity>(entity, entityType);
    }


  // Proje silme
  deleteProjectId(id: number) {
    this.apiService.deleteEntity(id, Project).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        this.showInfoMessage('Silme işlemi tamamlandı.');
      }
    })
  }

  // Sayfayı yenileme
  refresh() {
    this.apiService.getAllEntities(Project).subscribe((response) => {
      this.projects = response.data;
      console.log(this.projects);
    });
  }

  // Proje düzenleme modalını açma
  openEditDialog(id: number) {
    this.apiService.getEntityById<Project>(id, Project).then((response) => {
      if (response && response.data) {
        this.projectToEdit = response.data;
      } else {
        console.error('Proje bulunamadı veya alınırken bir hata oluştu.');
      }
    }).catch((error) => {
      console.error('Proje alınırken bir hata oluştu:', error);
    });
  }

    // Proje güncelleme işlemi
    onUpdate(id: number, updatedProject: Project) {
      this.update(id, updatedProject).then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.refresh();
          console.log(response.message);
          this.showSuccessMessage('Güncellemeniz başarıyla tamamlandı.');
        }
      }).catch((error) => {
        console.error('Proje güncellenirken bir hata oluştu:', error);
      });
    }
        // Proje güncelleme
        update(id: number, updatedProject: Project) {
          return this.apiService.updateEntity(id, updatedProject, Project);
        }
}
