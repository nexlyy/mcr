# MCR Planet — корпоративный сайт

## Структура проекта

```
mcr-planet-test/
├── index.html              ← главная страница (тонкая, ~315 строк)
├── catalog.html            ← старый отдельный каталог (можно удалить, не используется)
├── assets/
│   ├── styles.css          ← все стили
│   └── app.js              ← вся логика: контент, рендер, тема, язык, форма, каталог
├── content/                ← редактируемые .txt файлы (для людей, не используется кодом)
├── media/
│   ├── hero-bg.jpg         ← фон главного экрана
│   └── cursor.png          ← кастомный курсор
└── README.md
```

Каталог открывается **внутри** index.html как overlay (`#catalog-overlay`). Файл `catalog.html` остался от старой версии и больше не нужен — можно смело удалить.

## Как залить на GitHub Pages

### Вариант 1: через веб-интерфейс GitHub (для тех, кто не дружит с git)

1. Зайди на https://github.com → New repository → имя `mcr` (или любое) → Public → Create.
2. На странице репозитория жми **uploading an existing file**.
3. Перетащи **всё содержимое** папки `mcr-planet-test/` (но НЕ саму папку — а файлы и подпапки внутри неё: `index.html`, `assets/`, `media/`, `content/`).
4. Commit changes.
5. Settings → Pages → Source → Deploy from a branch → Branch: `main` / `(root)` → Save.
6. Через 1-2 минуты ссылка появится наверху: `https://<твой-логин>.github.io/<имя-репо>/`.

### Вариант 2: через git (если умеешь)

```bash
cd mcr-planet-test
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<твой-логин>/mcr.git
git push -u origin main
```

Потом так же Settings → Pages → main → root → Save.

## Локальное открытие

**ВАЖНО:** просто двойной клик по `index.html` НЕ сработает — браузер заблокирует загрузку `assets/app.js` из-за CORS на `file://` протоколе. Нужен локальный сервер. Самый простой вариант:

```bash
# В папке mcr-planet-test/
python3 -m http.server 8000
```

Открой http://localhost:8000

Или установи расширение **Live Server** в VS Code и кликни «Go Live».

## EmailJS — настройка отправки формы

1. Регистрация: https://www.emailjs.com/ (Free план = 200 писем/мес).
2. **Email Services** → Add → подключи Gmail (или другой почтовый сервис) → запомни **SERVICE_ID**.
3. **Email Templates** → Create → используй переменные `{{from_name}}`, `{{from_email}}`, `{{direction}}`, `{{message}}`. В поле **«To Email»** поставь `info@mcrgroup.biz`. Сохрани → запомни **TEMPLATE_ID**.
4. **Account → General** → скопируй **PUBLIC KEY**.
5. Открой `index.html`, найди в `<head>` блок «EMAILJS НАСТРОЙКИ» и вставь три значения:
   ```js
   window.EMAILJS_PUBLIC_KEY  = "твой_public_key";
   window.EMAILJS_SERVICE_ID  = "твой_service_id";
   window.EMAILJS_TEMPLATE_ID = "твой_template_id";
   ```
6. Закоммить → залей на GitHub Pages → попробуй отправить форму.

Если ключи не вставлены — кнопка покажет «⚠ EmailJS not configured» в консоли (F12) будет понятная подсказка.

## Как редактировать тексты

Все тексты сайта находятся в `assets/app.js` в объекте `CONTENT` (примерно строки 10–1200). Открой в любом редакторе кода (VS Code, Sublime, Notepad++), найди нужный текст через Ctrl+F, измени и сохрани. Для каталога — `var CATALOGUE = {...}` ниже в том же файле.
