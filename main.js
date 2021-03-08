var electron = require("electron");

var app = electron.app;
var mainWindow = null;
var tray = null;
var isQuiting = false;

app.on("ready", ()=>{
    mainWindow = new electron.BrowserWindow({
        width: 1280, 
        height: 720,
        icon: "icon.png"
    });
    tray = new electron.Tray("icon.png");
    var menu = electron.Menu.buildFromTemplate([
        {label: "打开疯子音乐", click: ()=>{mainWindow.show()}},
        {label: "退出", click: ()=>{
            isQuiting = true;
            app.quit();
        }}
    ]);
    tray.setToolTip("疯子音乐主进程");
    tray.setContextMenu(menu);
    tray.setIgnoreDoubleClickEvents(true);
    tray.on("click", ()=>{
        if(mainWindow.isVisible()){
            mainWindow.hide();
        }else{
            mainWindow.show();
        }
    });
    mainWindow.setMenu(null);
    mainWindow.loadFile("index.html");
    mainWindow.on("close", (e)=>{
        if(!isQuiting){
            e.preventDefault();
            mainWindow.hide();
        }
    });
});
app.on("before-quit", function(){
    isQuiting = true;
});