import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-content-topbar',
  templateUrl: './content-topbar.component.html',
  styleUrls: ['./content-topbar.component.scss']
})
export class ContentTopbarComponent {
  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false; // Oturum durumunu takip eden değişken
  currentUser: User | null = null; // Mevcut kullanıcı bilgilerini tutan değişken
  openPanel: boolean = false;


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser?.userType === 0) {
        this.openPanel = true;
      }
      this.isLoggedIn = user !== null; // Kullanıcı oturumlu ise isLoggedIn değerini true olarak ayarla
    });
  }
  logout() {
    this.authService.logOut();
    this.openPanel = false;
    this.router.navigate(['/HomePage']);
  }
}