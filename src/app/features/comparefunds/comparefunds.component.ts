import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AutoCompleteModalComponent } from '../autocomplete/autocompleteModal.component';

@Component({
  selector: 'app-comparefunds',
  templateUrl: './comparefunds.component.html',
  styleUrls: ['./comparefunds.component.scss']
})
export class ComparefundsComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(AutoCompleteModalComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
