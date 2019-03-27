import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";


// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time & date

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",];
let months = ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug",  "Sept",  "Oct",  "Nov", "Dec"];

clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  
  myDate.text  =  days[evt.date.getDay()] + ", "
                    + months[evt.date.getMonth()] 
                    + " " + evt.date.getDate();
  
}
                                     
                                       

//HR sensor
import { HeartRateSensor } from "heart-rate";
//Activity
import { today } from 'user-activity';
//Styles
import document from "document";
//Clock
import clock from "clock";
//Battery
import { battery } from "power";
import { charger } from "power";
//Time and Date
import * as util from "../common/utils";
import { preferences } from "user-settings";
import * as battery from "battery"


//Text Elements
let myHR = document.getElementById("myHR");
let mySteps = document.getElementById("mySteps");
let myCalories = document.getElementById("myCalories");
let myActiveminutes = document.getElementById("myActiveminutes")
let myFloors = document.getElementById("myFloors")
let myTime = document.getElementById("myTime")
let myDate = document.getElementById("myDate")



//--- Add step monitor. --------------------------------------------------------------------
function refresh_mySteps() {
mySteps.text = "" + today.adjusted.steps
  
};

setInterval(refresh_mySteps, 100); 

// Add calories --------------------------------------------------------------------------------
function refresh_myCalories() {
  myCalories.text = today.adjusted.calories 
}; 

setInterval(refresh_myCalories, 100);
// Add Active Mins -------------------------------------------------------------------------------------

function refresh_myactiveMinutes() {
  myActiveminutes.text = today.adjusted.activeMinutes 
};
  setInterval(refresh_myactiveMinutes, 1000);

//Add floors
function refresh_myelevationGain() {
   
  
};
setInterval(refresh_myelevationGain, 20)
//Add HR-------------------
var hrm = new HeartRateSensor();

hrm.start();

function refresh_myHR() {
    myHR.text = hrm.heartRate ? hrm.heartRate : "--" ;
  
  
  
};

setInterval(refresh_myHR, 50);

