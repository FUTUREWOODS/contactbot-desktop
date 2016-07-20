"use strict";

const electron = require("electron");
const path = require("path");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Electron初期化完了後に実行
app.on('ready', function() {
  // メイン画面の表示
  let mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));

  // ウィンドウが閉じたら終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
