# Tab Numbers Chrome Extension

Відображає номер вкладки прямо на favicon у кожній вкладці Chrome, як це робить браузер при натисканні Cmd/Ctrl+цифра. Працює коректно з групами вкладок: номер показує позицію вкладки у групі або серед не-групових вкладок.

## Можливості
- Додає номер вкладки поверх favicon (у самій вкладці, поряд із заголовком і favicon)
- Враховує групи вкладок (нумерація як у Chrome)
- Працює на всіх сторінках
- Можна змінювати розмір цифри, колір тексту та фону через сторінку налаштувань

## Встановлення
1. Скачайте або склонуйте цей репозиторій.
2. Відкрийте chrome://extensions у Chrome.
3. Увімкніть "Режим розробника" (Developer mode).
4. Натисніть "Завантажити розпаковане розширення" (Load unpacked) і виберіть цю папку.

## Як це працює
- Контент-скрипт отримує номер вкладки через background.js
- Малює номер поверх favicon за допомогою canvas, використовуючи ваші налаштування
- Підміняє favicon на сторінці

## Налаштування
Відкрийте сторінку налаштувань розширення (Options) і виберіть бажаний розмір цифри, колір тексту та фону. Зміни застосовуються автоматично для всіх вкладок.

## Файли
- `manifest.json` — опис розширення
- `background.js` — логіка визначення номера вкладки з урахуванням груп
- `content.js` — малює номер на favicon з урахуванням налаштувань
- `styles.css` — не використовується для favicon, але може знадобитись для майбутніх UI
- `options.html` — сторінка налаштувань
- `options.js` — логіка збереження/завантаження налаштувань

## TODO
- Додати вибір форми бейджа (круг, квадрат тощо)
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
- You can change the number size, text color, and background color via the options page

## Installation
1. Download or clone this repository.
2. Open chrome://extensions in Chrome.
3. Enable "Developer mode".
4. Click "Load unpacked" and select this folder.

## How it works
- The content script gets the tab number from background.js
- Draws the number on top of the favicon using canvas, applying your settings
- Replaces the favicon on the page

## Settings
Open the extension's options page and choose the desired number size, text color, and background color. Changes are applied automatically to all tabs.

## Files
- `manifest.json` — extension manifest
- `background.js` — logic for determining tab number with group support
- `content.js` — draws the number on the favicon using settings
- `styles.css` — not used for favicon, but may be useful for future UI
- `options.html` — options/settings page
- `options.js` — logic for saving/loading settings

## TODO
- Add badge shape selection (circle, square, etc.)
- Add dark/light theme support

---

Author: andriisuprunenko
