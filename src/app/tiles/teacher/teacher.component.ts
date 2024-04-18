import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.sass']
})
export class TeacherComponent {
  constructor(private router: Router) { }

  onBackClick() {
    this.router.navigate(['tiles'])
  }

}
