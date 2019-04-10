/* Note: if this code is being used in inline JavaScript or in a <script> tag, use the CDATA block */
(function () {
 "use strict";
 
var userInput; 
 
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

 userInput = "Q";
 
}
 
function PressedWKey() {

 userInput = "W";
 
}
 
 function PressedEKey() {

 userInput = "E";
 
}
 
 function PressedRKey() {

 userInput = "R";
 
}
 
 function PressedTKey() {

 userInput = "T";
 
}
 
 function PressedYKey() {

 userInput = "Y";
 
}
 
 function PressedUKey() {

 userInput = "U";
 
}
 
 function PressedIKey() {

 userInput = "I";
 
}
 
 function PressedOKey() {

 userInput = "O";
 
}
 
 function PressedPKey() {

 userInput = "P";
 
}
 
 function PressedAKey() {
 userInput = "A";
 
}
 
 function PressedSKey() {

 userInput = "S";
 
}
 
 function PressedDKey() {

 userInput = "D";
 
}
 
 function PressedFKey() {

 userInput = "F";
 
}
 
 function PressedGKey() {

 userInput = "G";
 
}
 
 function PressedHKey() {

 userInput = "H";
 
}
 
 function PressedJKey() {

 userInput = "J";
 
}
 
 function PressedKKey() {

 userInput = "K";
 
}
 
 function PressedLKey() {

 userInput = "L";
 
}
 
 function PressedZKey() {

 userInput = "Z";
 
}
 
 function PressedXKey() {

 userInput = "X";
 
}
 
 function PressedCKey() {

 userInput = "C";
 
}
 
 function PressedVKey() {

 userInput = "V";
 
}
 
 function PressedBKey() {

 userInput = "B";
 
}
 
 function PressedNKey() {

 userInput = "N";
 
}
 
 function PressedMKey() {

 userInput = "M";
 
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
