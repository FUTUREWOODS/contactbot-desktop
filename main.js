const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.openDevTools();

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
