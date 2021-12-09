import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedIn$: BehaviorSubject<boolean| null>;

  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$;
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
    // setTimeout(() => {
    //   this.authService.signout().subscribe(() => {});
    // }, 5000);
  }
}
