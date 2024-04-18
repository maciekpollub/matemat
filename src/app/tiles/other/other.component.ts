import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.sass']
})
export class OtherComponent {
  constructor(private router: Router) { }

  onBackClick() {
    this.router.navigate(['tiles'])
  }
}
