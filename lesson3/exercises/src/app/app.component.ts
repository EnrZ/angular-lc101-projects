import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  newBottomLocation = 0;

  takeOff(){
    let result = confirm("Confirm that the shuttle is ready for takeoff.");
   
    if(result === true){
		  this.message = "Shuttle in flight.";
		  this.color = "blue";
		  this.height += 10000;
		}
  }

  landShip(){
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
  }

  abortMission(){
    let result = confirm("Confirm that you want to abort the mission.");
  
    if(result === true){
	    this.message = "Mission aborted.";
	    this.color = "green";
	    this.height = 0;
    }
  }

  moveUp(rocketImg){
    const moveByThisAmountOfPixels = 10;
    this.newBottomLocation = this.newBottomLocation += moveByThisAmountOfPixels;
    rocketImg.style.bottom = this.newBottomLocation + "px";
    this.height += 10000;
  }


  moveDown(rocketImg){
    const moveByThisAmountOfPixels = 10;
    this.newBottomLocation = this.newBottomLocation -= moveByThisAmountOfPixels;
    rocketImg.style.bottom = this.newBottomLocation + "px";
    this.height -= 10000;
  }


  resetRocketPos(rocketImg){
    rocketImg.style.bottom = "0px";
    rocketImg.style.left = "0px";
  }
}


