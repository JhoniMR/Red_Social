import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-dislog-example-posts',
  templateUrl: './dislog-example-posts.component.html',
  styleUrls: ['./dislog-example-posts.component.scss']
})
export class DislogExamplePostsComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<DislogExamplePostsComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
