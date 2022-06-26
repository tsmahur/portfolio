
//<button onclick="openSettingsWindow()">Open Theme Settings</button>

let settingWindow;
function openSettingsWindow(){
    settingWindow=window.open("setting.html", "", "left=300, top=150, width=600, height=400")
}

// function closeSettingWindow(){
//     settingWindow.close();
// }

// make this method async
// if(settingWindow && settingWindow.closed){
//     syncThemeModeAndCheckBoxStatus();
// }
