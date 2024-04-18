import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matura',
  templateUrl: './matura.component.html',
  styleUrls: ['./matura.component.sass']
})
export class MaturaComponent {
  constructor(private router: Router) { }

  onBackClick() {
    this.router.navigate(['tiles'])
  }

}
