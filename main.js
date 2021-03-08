var electron = require("electron");
var mainWindow = null;
electron.app.on("ready", ()=>{
    mainWindow = new electron.BrowserWindow({width: 1280, height: 720});
    mainWindow.loadFile("index.html");
    mainWindow.on("closed", ()=>{
        mainWindow = null;
    });
});