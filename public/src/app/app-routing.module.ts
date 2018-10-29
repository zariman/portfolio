import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './About_Me/about-me/about-me.component';
import { AboutMe2Component } from './About_Me/about-me2/about-me2.component';
import { Skills1Component } from './skills/skills1/skills1.component';
import { Skills2Component } from './skills/skills2/skills2.component';
import { Skills3Component } from './skills/skills3/skills3.component';
import { Skills4Component } from './skills/skills4/skills4.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent, outlet: 'first' },
  { path: 'aboutMe', component: AboutMe2Component, outlet: 'first' },
  { path: '', component: Skills1Component, outlet: 'second'},
  { path: 'skills2', component: Skills2Component, outlet: 'second' },
  { path: 'skills3', component: Skills3Component, outlet: 'second' },
  { path: 'skills4', component: Skills4Component, outlet: 'second' },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
