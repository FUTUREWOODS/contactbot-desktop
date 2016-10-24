const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;
const mail = require('./mail');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('http://sbmail.futurewoods.net:5000/');
  //mainWindow.loadURL('http://localhost:5000/');

  // ウィンドウが閉じたら終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

// Electron初期化完了後に実行
app.on('ready', createWindow);

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('send-mail', (event, mailOptions, mailtos) => { // asynchronous
  mail.send(mailOptions, mailtos);
  event.sender.send('send-mail-result');
});
