import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DislogExampleChatboxComponent } from '../../components/dislog-example-chatbox/dislog-example-chatbox.component';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.scss']
})
export class PqrComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

 openDialog() {
   this.dialog.open(DislogExampleChatboxComponent, {  
   });

 }
  ngOnInit(): void { }
}
