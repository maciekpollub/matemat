import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corrective-matura',
  templateUrl: './corrective-matura.component.html',
  styleUrls: ['./corrective-matura.component.sass']
})
export class CorrectiveMaturaComponent {
  constructor(private router: Router) { }

  onBackClick() {
    this.router.navigate(['tiles'])
  }

  onContactClick() {
    this.router.navigate(['contact'])
  }
}
