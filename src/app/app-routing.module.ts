import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarbarianComponent } from './barbarian/barbarian.component';
import { CommonComponent } from './common/common.component';
import { CrusaderComponent } from './crusader/crusader.component';
import { DemonHunterComponent } from './demon-hunter/demon-hunter.component';
import { MonkComponent } from './monk/monk.component';
import { NecromancerComponent } from './necromancer/necromancer.component';
import { WitchDoctorComponent } from './witch-doctor/witch-doctor.component';
import { WizardComponent } from './wizard/wizard.component';

const routes: Routes = [
  { path: 'barbarian', component: BarbarianComponent },
  { path: 'common', component: CommonComponent},
  { path: 'crusader', component: CrusaderComponent},
  { path: 'demon-hunter', component: DemonHunterComponent},
  { path: 'monk', component: MonkComponent},
  { path: 'necromancer', component: NecromancerComponent},
  { path: 'witch-doctor', component: WitchDoctorComponent},
  { path: 'wizard', component: WizardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
