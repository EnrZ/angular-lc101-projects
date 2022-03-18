import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   goldActive: boolean = true;
   silverActive: boolean = true; 
   copperActive: boolean = true;

   constructor() { }

   ngOnInit() { }

   activateButtons() {
      this.goldActive = true;
      this.silverActive = true; 
      this.copperActive = true;

   }

}
