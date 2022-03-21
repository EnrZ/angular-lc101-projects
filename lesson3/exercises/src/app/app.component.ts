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
  newLocation = 0;
  moveByThisAmountOfPixels = 10;

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
	    this.color = "red";
	    this.height = 0;
    }
  }

  moveUp(rocketImage){
    //this is the image pixel count where the rocket is touching the edge of the top of square
    if(this.newBottomLocation < 330){
      this.newBottomLocation = this.newBottomLocation += this.moveByThisAmountOfPixels;
      rocketImage.style.bottom = this.newBottomLocation + "px";
      this.height += 10000;
    }
  }


  moveDown(rocketImage){
    if(this.newBottomLocation > 0){
      this.newBottomLocation = this.newBottomLocation -= this.moveByThisAmountOfPixels;
      rocketImage.style.bottom = this.newBottomLocation + "px";
      this.height -= 10000;
    }
  }

  moveLeft(rocketImage){
    //-20 pixel location is edge of left
    if(this.newLocation > -20){
      this.newLocation = this.newLocation -= this.moveByThisAmountOfPixels;
      rocketImage.style.left = this.newLocation + "px";
    }
  }

  moveRight(rocketImage){
    if(this.newLocation < 260){
    this.newLocation = this.newLocation += this.moveByThisAmountOfPixels;
    rocketImage.style.left = this.newLocation + "px";
    }
  }
  resetRocketPos(rocketImage){
    rocketImage.style.bottom = "0px";
    rocketImage.style.left = "0px";
  }
}


