const { contextBridge, ipcRenderer } = require('electron');

// Expose APIs to the renderer process
contextBridge.exposeInMainWorld('electron', {
  getAirtableData: () => {
    return ipcRenderer.invoke('getAirtableData');
  }
});
