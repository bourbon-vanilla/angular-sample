import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-solution-app';

  constructor(private router: Router) { }

  navigateToHome(){
    this.router.navigateByUrl('/');
  }

  navigateToDevices(){
    this.router.navigateByUrl('/devices');
  }
}
