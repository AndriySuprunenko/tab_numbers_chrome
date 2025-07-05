# Tab Numbers Chrome Extension

Відображає номер вкладки прямо на favicon у кожній вкладці Chrome, як це робить браузер при натисканні Cmd/Ctrl+цифра. Працює коректно з групами вкладок: номер показує позицію вкладки у групі або серед не-групових вкладок.

## Можливості
- Додає номер вкладки поверх favicon (у самій вкладці, поряд із заголовком і favicon)
- Враховує групи вкладок (нумерація як у Chrome)
- Працює на всіх сторінках
- Підтримка майбутніх налаштувань (колір, розмір, форма тощо)

## Встановлення
1. Скачайте або склонуйте цей репозиторій.
2. Відкрийте chrome://extensions у Chrome.
3. Увімкніть "Режим розробника" (Developer mode).
4. Натисніть "Завантажити розпаковане розширення" (Load unpacked) і виберіть цю папку.

## Як це працює
- Контент-скрипт отримує номер вкладки через background.js
- Малює номер поверх favicon за допомогою canvas
- Підміняє favicon на сторінці

## Файли
- `manifest.json` — опис розширення
- `background.js` — логіка визначення номера вкладки з урахуванням груп
- `content.js` — малює номер на favicon
- `styles.css` — не використовується для favicon, але може знадобитись для майбутніх UI
- `options.html` — сторінка налаштувань (можна розширити)

## TODO
- Додати налаштування (колір, розмір, форма номера)
- Додати підтримку темної/світлої теми

---

Автор: andriisuprunenko

---

# Tab Numbers Chrome Extension (English)

Displays the tab number directly on the favicon in each Chrome tab, just like Chrome does when you press Cmd/Ctrl+number. Works correctly with tab groups: the number shows the position within the group or among ungrouped tabs.

## Features
- Adds the tab number on top of the favicon (in the tab, next to the title and favicon)
- Takes tab groups into account (numbering matches Chrome's behavior)
- Works on all pages
- Future support for customization (color, size, shape, etc.)

## Installation
1. Download or clone this repository.
2. Open chrome://extensions in Chrome.
3. Enable "Developer mode".
4. Click "Load unpacked" and select this folder.

## How it works
- The content script gets the tab number from background.js
- Draws the number on top of the favicon using canvas
- Replaces the favicon on the page

## Files
- `manifest.json` — extension manifest
- `background.js` — logic for determining tab number with group support
- `content.js` — draws the number on the favicon
- `styles.css` — not used for favicon, but may be useful for future UI
- `options.html` — options/settings page (can be extended)

## TODO
- Add customization (color, size, shape of the number)
- Add dark/light theme support

---

Author: andriisuprunenko
