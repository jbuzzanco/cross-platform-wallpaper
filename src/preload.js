const { ipcRenderer } = require('electron');

// Expose the IPC renderer to the window object
window.electron = {
  ipcRenderer: ipcRenderer
};
