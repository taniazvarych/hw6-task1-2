import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameFormComponent } from './name-form/name-form.component';
import { ColorComponent } from './color/color.component';
import {ColorPipe} from './color/color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NameFormComponent,
    ColorComponent,
    ColorPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
