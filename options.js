// options.js
// Load settings
function loadSettings() {
  chrome.storage.sync.get({
    fontSize: 14,
    textColor: '#ffffff',
    bgColor: '#444444'
  }, function(items) {
    document.getElementById('fontSize').value = items.fontSize;
    document.getElementById('textColor').value = items.textColor;
    document.getElementById('bgColor').value = items.bgColor;
  });
}
document.addEventListener('DOMContentLoaded', loadSettings);
// Save settings
if (document.getElementById('settingsForm')) {
  document.getElementById('settingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fontSize = parseInt(document.getElementById('fontSize').value, 10);
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;
    chrome.storage.sync.set({ fontSize, textColor, bgColor }, function() {
      document.getElementById('status').textContent = 'Saved!';
      setTimeout(() => document.getElementById('status').textContent = '', 1200);
      loadSettings();
    });
  });
}
