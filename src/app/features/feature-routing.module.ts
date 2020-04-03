import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ComparefundsComponent } from './comparefunds/comparefunds.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//routing entry

const featureroutes: Routes = [
  {
    'path': '',
    component: DashboardComponent
  },
  {
    'path': 'Comparefunds',
     component: ComparefundsComponent
   
  }
];

@NgModule({
  declarations: [
   DashboardComponent,
   ComparefundsComponent,
   CommonHeaderComponent
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule.forChild(featureroutes)
  ],
  exports: [RouterModule,
    
  
  ]
})
export class FeatureRoutingModule { }
