import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { MakeOfferComponent } from './components/views/make-offer/make-offer.component';
import { AskToSpecialistComponent } from './components/views/ask-to-specialist/ask-to-specialist.component';
import { FormComponent } from './components/controls/form/form.component';
import { TableComponent } from './components/controls/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    MakeOfferComponent,
    AskToSpecialistComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
