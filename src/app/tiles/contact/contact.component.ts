import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  constructor(private router: Router) { }

  onBackClick() {
    this.router.navigate(['tiles'])
  }
}
