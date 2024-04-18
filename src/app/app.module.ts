import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TilesComponent } from './tiles/tiles.component';
import { MaturaComponent } from './tiles/matura/matura.component';
import { OsmaComponent } from './tiles/osma/osma.component';
import { OtherComponent } from './tiles/other/other.component';
import { TeacherComponent } from './tiles/teacher/teacher.component';
import { ContactComponent } from './tiles/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TilesComponent,
    MaturaComponent,
    OsmaComponent,
    OtherComponent,
    TeacherComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
