// root colors
var crimsonn= "crimson";
var white="#ffffff";
var black="#0d0d0d";
var grey="#aaa";
var grey_fade="#1a1a1a";
var purple="#6058c9";
var puprle_fade="#dddbf4";

// button for mode
// var btn=document.getElementById('color-mode');
// btn.addEventListener("click", switchMode);

var checkbox = document.getElementById('color-mode');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    setMode('light');
  } else {
    setMode('dark');
  }
});

var r = document.querySelector(':root');

//enable mode on all page by default on load
// window.onload.apply(syncMode);
syncMode();//----sycning mode every time when page is load i.e, script is executed


function syncMode(){
    var currentMode = localStorage.getItem('mode-portfolio-current');
    var modeToSet=currentMode!=null?currentMode:'dark'; //deciding the default mode
    // console.log("mode synced <<onload>>: currentMode from storage= "+currentMode)
    // console.log("modeToSet = "+modeToSet)
    setMode(modeToSet);

    //also set the status of check box based on mode
    checkbox.checked=modeToSet==='light'?true:false;
}

//enable using toogle button
function switchMode(){
    var currentMode = localStorage.getItem('mode-portfolio-current');
    var modeToSet=currentMode==='dark'?'light':'dark';
    // console.log("mode switch using <<button>> : currentMode from storage= "+currentMode)
    // console.log("modeToSet = "+modeToSet)
    setMode(modeToSet);
}

function setMode(currentMode) {
    if (currentMode && currentMode === 'dark') {
        localStorage.setItem('mode-portfolio-current', 'dark');
        enableDarkMode();
    }
    else if (currentMode && currentMode === 'light') {
        localStorage.setItem('mode-portfolio-current', 'light');
        enableLightMode();
    } else {
        console.log(currentMode + ' Mode not supported!!');
    }
}

function enableLightMode(){
    // console.log("light mode enabling...")
    var lightColorMap={
        "--base-theme-color":purple,//
        "--base-theme2-color":black,//
        "--base-theme3-color":puprle_fade,//
        "--base-backround-color":white,//
        "--hover-color":black,//
        "--text-hover-color":white,//
        "--text-heading-color":black,//
        "--text-content-color":grey
    }
    applyColorMap(lightColorMap);
}

function enableDarkMode(){
    // console.log("dark mode enabling...")
    var darkColorMap={
        "--base-theme-color":crimsonn,
        "--base-theme2-color":white,
        "--base-theme3-color":grey_fade,
        "--base-backround-color":black,
        "--hover-color":white,
        "--text-hover-color":black,
        "--text-heading-color":white,
        "--text-content-color":grey
    }
    applyColorMap(darkColorMap);
}

function applyColorMap(colorMap){
    for (const key in colorMap) {
        // console.log("key = "+key+" value = "+colorMap[key]);
        setRootVariable(key,colorMap[key]);
    }
}


function setRootVariable(key,value) {
  r.style.setProperty(key, value);
}
//function for getting a variable value
// function myFunction_get() {
//   var rs = getComputedStyle(r);
//   console.log(rs);
// }