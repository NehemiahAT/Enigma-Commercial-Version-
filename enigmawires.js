/* Note: if this code is being used in inline JavaScript or in a <script> tag, use the CDATA block */
(function () {
 "use strict";
 
var userInput;
 
var rawOutput;
 
var output;
 
var rotorOneSetting = document.getElementById("rotorOne").value; 
 
var rotorTwoSetting = document.getElementById("rotorTwo").value; 

var rotorThreeSetting = document.getElementById("rotorThree").value;
 
document.getElementById("qKey").onclick = function() {PressedQKey();};
 
document.getElementById("wKey").onclick = function() {PressedWKey();};
 
document.getElementById("eKey").onclick = function() {PressedEKey();};
 
document.getElementById("rKey").onclick = function() {PressedRKey();};

document.getElementById("tKey").onclick = function() {PressedTKey();};
 
document.getElementById("yKey").onclick = function() {PressedYKey();};
 
document.getElementById("uKey").onclick = function() {PressedUKey();};
 
document.getElementById("iKey").onclick = function() {PressedIKey();};
 
document.getElementById("oKey").onclick = function() {PressedOKey();};
 
document.getElementById("pKey").onclick = function() {PressedPKey();};
 
document.getElementById("aKey").onclick = function() {PressedAKey();};
 
document.getElementById("sKey").onclick = function() {PressedSKey();};
 
document.getElementById("dKey").onclick = function() {PressedDKey();};
 
document.getElementById("fKey").onclick = function() {PressedFKey();};
 
document.getElementById("gKey").onclick = function() {PressedGKey();};
 
document.getElementById("hKey").onclick = function() {PressedHKey();};
 
document.getElementById("jKey").onclick = function() {PressedJKey();};
 
document.getElementById("kKey").onclick = function() {PressedKKey();};
 
document.getElementById("lKey").onclick = function() {PressedLKey();};
 
document.getElementById("zKey").onclick = function() {PressedZKey();};
 
document.getElementById("xKey").onclick = function() {PressedXKey();};
 
document.getElementById("cKey").onclick = function() {PressedCKey();};

document.getElementById("vKey").onclick = function() {PressedVKey();};
 
document.getElementById("bKey").onclick = function() {PressedBKey();};
 
document.getElementById("nKey").onclick = function() {PressedNKey();};
 
document.getElementById("mKey").onclick = function() {PressedMKey();};
 
document.getElementsByClassName("key").onclick = function() {PressedSomeKey();};
 
 
/* Change letters to numbers. */
 
 function PressedQKey() {

 userInput = "17";
  
}
 
function PressedWKey() {

 userInput = "23";
 
}
 
 function PressedEKey() {

 userInput = "5";
 
}
 
 function PressedRKey() {

 userInput = "18";
 
}
 
 function PressedTKey() {

 userInput = "20";
 
}
 
 function PressedYKey() {

 userInput = "25";
 
}
 
 function PressedUKey() {

 userInput = "21";
 
}
 
 function PressedIKey() {

 userInput = "9";
 
}
 
 function PressedOKey() {

 userInput = "15";
 
}
 
 function PressedPKey() {

 userInput = "16";
 
}
 
 function PressedAKey() {
 userInput = "1";
 
}
 
 function PressedSKey() {

 userInput = "19";
 
}
 
 function PressedDKey() {

 userInput = "4";
 
}
 
 function PressedFKey() {

 userInput = "6";
 
}
 
 function PressedGKey() {

 userInput = "7";
 
}
 
 function PressedHKey() {

 userInput = "8";
 
}
 
 function PressedJKey() {

 userInput = "10";
 
}
 
 function PressedKKey() {

 userInput = "11";
 
}
 
 function PressedLKey() {

 userInput = "12";
 
}
 
 function PressedZKey() {

 userInput = "26";
 
}
 
 function PressedXKey() {

 userInput = "24";
 
}
 
 function PressedCKey() {

 userInput = "3";
 
}
 
 function PressedVKey() {

 userInput = "22";
 
}
 
 function PressedBKey() {

 userInput = "2";
 
}
 
 function PressedNKey() {

 userInput = "14";
 
}
 
 function PressedMKey() {

 userInput = "13";
 
}
 
/* This function will encrypt the messages. */
 
 function PressedSomeKey() {
 
 userInput;
 
 rotorOneSetting;
 
 rotorTwoSetting;
 
 rotorThreeSetting;
 
 /* Add more code in this function. Feed userInput into rotorOneSetting, changing it according to the setting. 
 * Then change that result by feeding it into rotorTwoSetting, then feed that result into rotorThreeSetting;
 * repeat the process backwords. The final result will then change the color of the corresponding key to the 
 * result on the crypt keyboard to #ffff00. */ 
}
 
/* Debug mode code. This was not part of the original Enigma Machine. */
 
var debugModeOn;
 
document.getElementById("debug-mode-on").onclick = function() {turnDebugModeOn();};
 
function turnDebugModeOn() {
 
debugModeOn = true;
 
}
 
/* Date and time finder */
 
var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
 
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
var dateTime = date + " " + time;
 
/* End of date and time finder */ 

 
if (debugModeOn = true && userInput != "") {
   console.log("User Input: " + userInput + "; Rotor One Setting: " + rotorOneSetting + "; Rotor Two Setting: " + rotorTwoSetting + "; Rotor Three Setting: " + rotorThreeSetting + "; Date and Time: " + dateTime);  
    }
 
 /* End of debug mode code */

 }());
