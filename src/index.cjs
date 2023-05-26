const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile('index.html');

  // Add your code to interact with Airtable and set wallpapers here

  // Example usage: Set wallpaper to unicorn.jpg when the window is ready
  mainWindow.webContents.on('dom-ready', async () => {
    const { setWallpaper } = await import('wallpaper');
    const path = require('path');
    const imagePath = path.join(__dirname, 'unicorn.jpg');
    try {
      await setWallpaper(imagePath);
      console.log('Wallpaper set successfully!');
    } catch (error) {
      console.error('Failed to set wallpaper:', error);
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
