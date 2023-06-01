const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
  
  // Add your code to interact with Airtable and set wallpapers here
  import('./airtable.cjs');

  // Register an IPC handler to fetch the Airtable data
  ipcMain.on('fetch-airtable-data', async (event) => {
    try {
      const airtableData = await fetchDataFromAirtable();

      // Send the data back to the renderer process
      event.reply('airtable-data', airtableData);
    } catch (error) {
      console.error('Error fetching data from Airtable:', error);
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
