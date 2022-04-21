import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
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

import { NoSanitizePipe } from './pipes/no-sanitize-pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonComponent } from './common/common.component';
import { ColorPipe } from './pipes/color.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    BarbarianComponent,
    CrusaderComponent,
    DemonHunterComponent,
    MonkComponent,
    NecromancerComponent,
    WitchDoctorComponent,
    WizardComponent,

    NoSanitizePipe,

    CommonComponent,

    ColorPipe,
    HighlightPipe,

    InspectorComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
