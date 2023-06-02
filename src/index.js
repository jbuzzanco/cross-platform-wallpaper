const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');

  // Register an IPC handler to fetch the Airtable data
  ipcMain.handle('getAirtableData', async () => {
    try {
      const airtableData = await fetchDataFromAirtable();
      return airtableData;
    } catch (error) {
      console.error('Error fetching data from Airtable:', error);
      throw error;
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
