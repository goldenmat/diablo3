import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BarbarianComponent } from './barbarian/barbarian.component';
import { CrusaderComponent } from './crusader/crusader.component';
import { DemonHunterComponent } from './demon-hunter/demon-hunter.component';
import { MonkComponent } from './monk/monk.component';
import { NecromancerComponent } from './necromancer/necromancer.component';
import { WitchDoctorComponent } from './witch-doctor/witch-doctor.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    BarbarianComponent,
    CrusaderComponent,
    DemonHunterComponent,
    MonkComponent,
    NecromancerComponent,
    WitchDoctorComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
