import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TilesComponent } from './tiles/tiles.component';
import { TeacherComponent } from './tiles/teacher/teacher.component';
import { ContactComponent } from './tiles/contact/contact.component';
import { MaturaComponent } from './tiles/matura/matura.component';
import { OsmaComponent } from './tiles/osma/osma.component';
import { OtherComponent } from './tiles/other/other.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'tiles', component: TilesComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'matura', component: MaturaComponent },
  { path: 'osma', component: OsmaComponent },
  { path: 'other', component: OtherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
