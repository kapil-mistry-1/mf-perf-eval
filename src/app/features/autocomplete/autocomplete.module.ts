import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from 'src/app/core/material.module';
import { AutoCompleteModalComponent } from './autocompleteModal.component';

@NgModule({
  imports: [CommonModule,FormsModule,
    ReactiveFormsModule,MaterialModule],
   exports: [AutoCompleteModalComponent],
   declarations: [AutoCompleteModalComponent]
})
export class AutocompleteModule {
}
