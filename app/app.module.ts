import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';
import { RecapComponent } from './recap/recap.component';
import {FormsModule} from "@angular/forms";

import { EqualValidator } from './_modules/equal-validator.directive';  // import validator
import { PipeTelephone } from "./_modules/telephone.pipe";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TetiereComponent,
    FormulaireClientComponent,
    RecapComponent,
    EqualValidator,
    PipeTelephone
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
