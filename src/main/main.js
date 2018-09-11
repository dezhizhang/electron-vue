
let  { ipcMain,BrowserWindow } = require('electron');

let window = BrowserWindow.getFocusedWindow();


//执行窗口最小化
ipcMain.on('window-min',() => {
    window.minimize();

});

//执行窗口最大化
ipcMain.on('window-max',() => {
  if(window.isMaximized()){
      window.restore();

  } else {
    window.maximize();
  }
  
});

//执行窗口关闭
ipcMain.on('window-close',() => {
    window.close();

})

