import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { CoreModule } from '@angular/flex-layout';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    CoreModule,
    AutocompleteModule
  ],
  exports: [
    FeatureRoutingModule,
    
  ]
})
export class FeatureModule { }
