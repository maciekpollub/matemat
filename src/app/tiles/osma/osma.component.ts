import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-osma',
  templateUrl: './osma.component.html',
  styleUrls: ['./osma.component.sass']
})
export class OsmaComponent {
  constructor(private router: Router) { }

  onBackClick() {
    this.router.navigate(['tiles'])
  }
}
