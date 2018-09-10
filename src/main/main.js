let { ipcMain } = require('electron');

//接怍渲染进程的数据
ipcMain.on('message',(event,data)=> {
    console.log('1122');

    console.log(data);

})




