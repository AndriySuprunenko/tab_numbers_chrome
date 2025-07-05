// content.js
// Додає номер вкладки на favicon сторінки

(function() {
  // Отримати номер вкладки через chrome API
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
      // Намалювати кружечок з номером
      ctx.beginPath();
      ctx.arc(size-10, size-10, 9, 0, 2*Math.PI);
      ctx.fillStyle = '#444';
      ctx.fill();
      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#fff';
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
})();
