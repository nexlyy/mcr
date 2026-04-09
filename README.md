# MCR Planet — корпоративный сайт

## Структура проекта

```
mcr-planet-test/
├── index.html        ← главная страница (~335 строк)
├── assets/
│   ├── styles.css    ← все стили (~1000 строк)
│   └── app.js        ← вся логика (~2100 строк)
├── content/          ← .txt файлы для ручного редактирования (не используются кодом)
├── media/
│   └── hero-bg.jpg   ← фон главного экрана
└── README.md
```

Каталог работает как **overlay** внутри `index.html` (`#catalog-overlay`). Отдельного файла `catalog.html` больше нет.

## Локальное открытие

**Двойной клик по `index.html` НЕ работает** — браузер блокирует загрузку `assets/app.js` через `file://` из-за CORS. Нужен локальный сервер:

```bash
cd mcr-planet-test
python3 -m http.server 8000
```

Открой http://localhost:8000 — всё работает.

Альтернатива: расширение **Live Server** в VS Code → правый клик по `index.html` → Go Live.

## Деплой на GitHub Pages

### Через веб-интерфейс:
1. Создай репозиторий (например `mcr`) → Public
2. Add file → Upload files → перетащи **содержимое** папки `mcr-planet-test/` (файл `index.html`, папки `assets/`, `media/`, `content/`, `README.md`) — НЕ саму папку `mcr-planet-test/`, а то что внутри!
3. Commit
4. Settings → Pages → Source → Deploy from branch → `main` / `(root)` → Save
5. Через 1-2 минуты ссылка появится сверху Pages-секции

### Через git:
```bash
cd mcr-planet-test
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<login>/<repo>.git
git push -u origin main
```

**Важно:** после любого обновления жми **Ctrl+F5** (или Cmd+Shift+R) в браузере — GitHub Pages и браузер кэшируют файлы.

## EmailJS — настройка формы

1. Регистрация: https://www.emailjs.com/ (Free = 200 писем/мес)
2. **Email Services** → Add → подключи Gmail → скопируй `SERVICE_ID`
3. **Email Templates** → Create → переменные: `{{from_name}}`, `{{from_email}}`, `{{direction}}`, `{{message}}`. В поле **«To Email»** = `info@mcrgroup.biz`. Скопируй `TEMPLATE_ID`
4. **Account → General** → скопируй `PUBLIC KEY`
5. Открой `index.html`, в `<head>` найди блок «EMAILJS» и вставь значения:
   ```js
   window.EMAILJS_PUBLIC_KEY  = "...";
   window.EMAILJS_SERVICE_ID  = "...";
   window.EMAILJS_TEMPLATE_ID = "...";
   ```

Без ключей кнопка покажет «⚠ EmailJS not configured».

## Fluid typography (масштаб под размер экрана)

В `assets/styles.css` у корневого `html` задан `font-size: clamp(15px, 1.05vw, 22px)`.
- На маленьких экранах (phone ~400px) → ~15px
- На обычных лаптопах (~1440px) → ~15px
- На больших мониторах (~1920px) → ~20px
- На 4K/33" → упирается в 22px максимум

Всё что в CSS в единицах `rem` (большинство шрифтов) масштабируется пропорционально. На мобильном включён отдельный диапазон: `clamp(15px, 4vw, 17px)`.

## Редактирование текстов

Тексты лежат в `assets/app.js` в объекте `CONTENT`. Открой в VS Code, Ctrl+F → найди нужную фразу → измени → сохрани.

Каталог наполняется через объект `CATALOGUE` в том же файле.
