// content.js
// Додає номер вкладки на favicon сторінки

(function() {
  // Отримати налаштування з chrome.storage
  chrome.storage.sync.get({
    fontSize: 14,
    textColor: '#ffffff',
    bgColor: '#444444'
  }, function(settings) {
    chrome.runtime.sendMessage({action: "getTabNumber"}, function(response) {
      if (!response || !response.tabNumber) return;
      // Знайти favicon
      let favicon = document.querySelector('link[rel~="icon"]');
      if (!favicon) return;
      let img = document.createElement('img');
      img.crossOrigin = 'anonymous';
      img.src = favicon.href;
      img.onload = function() {
        // Створити canvas
        let size = 32;
        let canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        // Намалювати кружечок з номером з урахуванням налаштувань
        ctx.beginPath();
        ctx.arc(size-10, size-10, 9, 0, 2*Math.PI);
        ctx.fillStyle = settings.bgColor;
        ctx.fill();
        ctx.font = 'bold ' + settings.fontSize + 'px sans-serif';
        ctx.fillStyle = settings.textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(response.tabNumber, size-10, size-10);
        // Створити новий favicon
        let newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.type = 'image/png';
        newFavicon.href = canvas.toDataURL('image/png');
        // Видалити старі favicons
        document.querySelectorAll('link[rel~="icon"]').forEach(e => e.remove());
        document.head.appendChild(newFavicon);
      };
    });
  });
})();
