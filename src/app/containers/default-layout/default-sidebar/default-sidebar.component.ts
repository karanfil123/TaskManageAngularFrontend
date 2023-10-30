import { AuthService } from './../../../../core/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-sidebar',
  templateUrl: './default-sidebar.component.html',
  styleUrls: ['./default-sidebar.component.scss']
})
export class DefaultSidebarComponent {
  userType: number | undefined; 

  constructor(private authService: AuthService) {
    this.userType = this.authService.getUserType(); // Kullanıcı türünü alın
  }
}
