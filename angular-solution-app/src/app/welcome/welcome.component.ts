import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <div class="m-3">
      <h3>Welcome Component</h3>
    </div>
  `
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
