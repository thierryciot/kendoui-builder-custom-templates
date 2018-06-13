import {Component, Input, OnInit} from '@angular/core';

/*
We will use font awesome to render rating icon.

See https://stackoverflow.com/questions/38796541/how-to-add-font-awesome-to-angular-2-cli-project
 */
@Component({
  selector: 'custom-ratingV2',
  templateUrl: './ratingV2.component.html',
  styleUrls: ['./ratingV2.component.css']
})
export class RatingComponentV2 implements OnInit {
  @Input() rating: number;
  @Input() spacing: string;
  @Input() height: string;
  @Input() icon: string;
  @Input() color: string;

  // Set it to true to output debug data in the component itself.
  debugComp = false;

  constructor() { }

  // ngFor only works on iteratable (does not accept a simple number) so we need to create
  // a dummy array of a specific length.
  loopCounter: Array<number>;

  static createEmptyArrayWithSpecificLengthForNgFor(length): Array<number> {
    return new Array<number>(length);
  }

  ngOnInit() {
    // debugger;
    if ( this.icon === undefined ) {
      this.icon = 'fa fa-star';
    }

    if ( this.color === undefined ) {
      this.color = 'blue';
    }

    this.spacing += 'px';
    this.height += 'px';
  }

  // Need to recompute the size of the array when the data changes.
  ngOnChanges() {
      console.log( `RatingComponentV2: rating value: ${this.rating}` );
      let x;
      if ( this.rating !== undefined ) {
          x = Number(this.rating);
          if ( isNaN(x)) {
              x = 0;
          }
      }
      else {  // no data is selected in combo-box so model is not initialized with any data
        x = 0;
      }

      this.loopCounter = RatingComponentV2.createEmptyArrayWithSpecificLengthForNgFor(x);
  }
}
