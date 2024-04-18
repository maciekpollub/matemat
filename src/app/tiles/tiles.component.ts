import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.sass']
})
export class TilesComponent {

  constructor(private router: Router) { }

  onBackClick() {
    this.router.navigate([''])
  }

  onAboutTeacherClick() {
    this.router.navigate(['teacher'])
  }

  onContactClick() {
    this.router.navigate(['contact'])
  }

  onMaturaClick() {
    this.router.navigate(['matura'])
  }

  onOsmaClick() {
    this.router.navigate(['osma'])
  }

  onOtherClick() {
    this.router.navigate(['other'])
  }

}
