/* Note: if this code is being used in inline JavaScript or in a <script> tag, use the CDATA block */
(function () {
 "use strict";
 
var userInput;
  
var output;
 
var keyPressed;
 
var rotorOneSetting = document.getElementById("rotorOne").value; 
 
var rotorTwoSetting = document.getElementById("rotorTwo").value; 

var rotorThreeSetting = document.getElementById("rotorThree").value;
 
var rotorOneResult;
 
var rotorTwoResult;
 
var rotorThreeResult;
 
var rotorOneResultBackwards;
 
var rotorTwoResultBackwards;
 
var rotorThreeResultBackwards;
 
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
 
document.getElementsByClassName("key").childNodes.onclick = function() {pressedSomeKey();};
 
 
/* Change letters from input to the numbers they are in the alphabet. */
 
 function PressedQKey() {

 userInput = 17;
 
 keyPressed = true; 
  
}
 
function PressedWKey() {

 userInput = 23;
 
 keyPressed = true;
 
}
 
 function PressedEKey() {

 userInput = 5;
 
 keyPressed = true;
  
}
 
 function PressedRKey() {

 userInput = 18;
  
 keyPressed = true;
 
}
 
 function PressedTKey() {

userInput = 20;
 
keyPressed = true;
 
}
 
 function PressedYKey() {

 userInput = 25;
  
 keyPressed = true;
 
}
 
 function PressedUKey() {

 userInput = 21;
  
 keyPressed = true;
 
}
 
 function PressedIKey() {

 userInput = 9;
  
 keyPressed = true;
 
}
 
 function PressedOKey() {

 userInput = 15;
  
 keyPressed = true;
 
}
 
 function PressedPKey() {

 userInput = 16;
  
 keyPressed = true;
 
}
 
 function PressedAKey() {
 
 userInput = 1;
  
 keyPressed = true;
 
}
 
 function PressedSKey() {

 userInput = 19;
  
 keyPressed = true;
 
}
 
 function PressedDKey() {

 userInput = 4;
  
 keyPressed = true;
 
}
 
 function PressedFKey() {

 userInput = 6;
 
 keyPressed = true;
  
}
 
 function PressedGKey() {

 userInput = 7;
 
 keyPressed = true;
  
}
 
 function PressedHKey() {

 userInput = 8;
  
 keyPressed = true;
 
}
 
 function PressedJKey() {

 userInput = 10;
  
 keyPressed = true;
 
}
 
 function PressedKKey() {

 userInput = 11;
  
 keyPressed = true;
 
}
 
 function PressedLKey() {

 userInput = 12;
  
 keyPressed = true;
 
}
 
 function PressedZKey() {

 userInput = 26;
  
 keyPressed = true;
 
}
 
 function PressedXKey() {

 userInput = 24;
  
 keyPressed = true;
 
}
 
 function PressedCKey() {

 userInput = 3;
  
 keyPressed = true;
 
}
 
 function PressedVKey() {

 userInput = 22;
  
 keyPressed = true;
 
}
 
 function PressedBKey() {

 userInput = 2;
  
 keyPressed = true;
 
}
 
 function PressedNKey() {

 userInput = 14;
  
 keyPressed = true;
 
}
 
 function PressedMKey() {

 userInput = 13;
  
 keyPressed = true;
 
}
 
/* This function will encrypt the input letter. */
 
 function pressedSomeKey() {
 
 rotorOneResult = userInput + rotorOneSetting;
  
 r1sPlusPlus();
  
 rotorTwoResult = rotorOneResult + rotorTwoSetting;
  
 r2sPlusPlus();
  
 rotorThreeResult = rotorTwoResult + rotorThreeSetting;
  
 r3sPlusPlus();
  
 rotorThreeResultBackwards = rotorTwoResultBackwards + rotorThreeSetting;
  
 r3sPlusPlus();
  
 rotorTwoResultBackwards = rotorOneResultBackwards + rotorTwoSetting;
  
 r2sPlusPlus();
  
 rotorOneResultBackwards = rotorThreeResult + rotorOneSetting;
  
 r1sPlusPlus();
  
 output = rotorOneResultBackwards;
  
 keyPressed = false;
 
}
 
 function r1sPlusPlus() {rotorOneSetting++; 
                         
  document.getElementById("rotorOne").value = rotorOneSetting;}
 
 function r2sPlusPlus() {rotorTwoSetting++; 
                         
  document.getElementById("rotorTwo").value = rotorTwoSetting;}
 
 function r3sPlusPlus() {rotorThreeSetting++; 
                         
  document.getElementById("rotorThree").value = rotorThreeSetting;}
 
/* Debug mode code. This was obviously not part of the original Enigma Machine. */
 
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

 
if (debugModeOn === true && userInput !== null) {
   console.log("User Input: " + userInput + "; Rotor One Setting: " + rotorOneSetting + "; Rotor Two Setting: " + rotorTwoSetting + "; Rotor Three Setting: " + rotorThreeSetting + "; Date and Time: " + dateTime);  
    }
 
 /* End of debug mode code */

 }());
