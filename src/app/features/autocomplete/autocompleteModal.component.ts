import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './autocompleteModal.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutoCompleteModalComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AutoCompleteModalComponent>) { }
  
    control = new FormControl();
  funds: string[] = ['Aditya Birla Sun Life Low Duration Fund Direct Growth', 'Aditya Birla Sun Life Equity Fund Direct Growth', 'C Fund', 'D fund'];
  filteredfunds: Observable<string[]>;

  ngOnInit() {
    this.filteredfunds = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.funds.filter(fund => this._normalizeValue(fund).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
    // When the user clicks the action button a.k.a. the logout button in the\
    // modal, show an alert and followed by the closing of the modal
    actionFunction() {
        this.closeModal();
    }
    closeModal() {
        this.dialogRef.close();
      }
    
}