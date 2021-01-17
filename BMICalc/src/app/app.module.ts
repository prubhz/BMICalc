import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BmiComponent } from './form/bmi/bmi.component';
import { InfoComponent } from './info/info.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import {bmiItemService} from './bmiItem.service'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BmiComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [bmiItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
