
# 🧩 Thodle MiniApp

**Thodle MiniApp** — это клиентская часть Telegram WebApp, которая открывается пользователем через Telegram-бота **Thodle**.

Приложение предоставляет удобный интерфейс для студентов: просмотр расписания, профиля и другой персонализированной информации.

---

## ✨ Возможности

* 📅 Просмотр расписания
* 👤 Профиль студента
* 💬 Открытие прямо в Telegram через кнопку “Открыть” или inline-кнопки
* ⚡ Быстрая и лёгкая загрузка благодаря SvelteKit
* 🧭 Полностью адаптированный интерфейс под Telegram WebApp API

---

## 🧠 Используемые технологии

| Компонент  | Технология                                                         |
| ---------- | ------------------------------------------------------------------ |
| Фреймворк  | [SvelteKit](https://kit.svelte.dev/)                               |
| Рантайм    | [Bun](https://bun.sh/)                                             |
| UI         | [UnoCSS](https://unocss.dev/) + [Iconify](https://iconify.design/) |
| Интеграция | [Telegram WebApp API](https://core.telegram.org/bots/webapps)      |

---

## ⚙️ Установка и запуск

> Требуется установленный **Bun** ([https://bun.sh](https://bun.sh))

```bash
# Клонируем репозиторий
git clone https://github.com/Thodle/thodle-miniapp.git
cd thodle-miniapp

# Устанавливаем зависимости
bun install

# Запускаем локальный сервер
bun run dev
```

Приложение будет доступно по адресу:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧩 Структура проекта

```
thodle-miniapp/
│
├── src/
│   ├── routes/            # Страницы приложения
│   ├── lib/               # Вспомогательные функции и Telegram WebApp utils
│   ├── components/        # UI-компоненты
│   ├── sections/          # Секции приложения
│   └── app.d.ts           # Типы и интерфейсы
│
├── static/                # Публичные файлы (иконки, манифест и т.п.)
├── .env.example           # Пример переменных окружения
└── README.md
```

---

## 🔐 Переменные окружения

Создай `.env` файл на основе `.env.example`:

```bash

```

---

## 🧭 Telegram WebApp интеграция

MiniApp открывается внутри Telegram:

* через **inline кнопку** в сообщении (с параметром `web_app`);
* через кнопку **“Открыть”** в профиле бота;
* через **прямую ссылку**:

```bash
https://t.me/thodle_bot/app?startapp=schedule # Открытие странички с полным расписанием
```

Приложение автоматически инициализируется через `Telegram.WebApp.initData`
и подстраивает тему под интерфейс Telegram (светлая / тёмная).

---

## 🧱 Сборка

```bash
# Создание сборки
bun run build

# Просмотр продакшн-версии локально
bun run preview
```
---

## 📖 Лицензия

![License: TSVL](https://img.shields.io/badge/license-TSVL-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALFSURBVHgB7ZdfSFNRHMe/V6/zz2aaaJkKGm7CDDVF8iEyCV/Ul0ioh3oI6q0oXyoKHxJ6DYLwrQUFgQX5EKhBL1oQGJWUODMHumo6nHNjblP3597O7yyHc2zdO4W97AOH3XPub+f3Pb/z+/3GhMNHj8lII1lIMxkBGQEZASJSpKDkCCobT0HML0QOG2X6Fnx58QBu209V+6QkoKKxHa0X+7njneg7zuMzE6GGlK6gtrkpzjmx9P091KJKgCjKaDBuwhgegM79GvuBYgG5Ghk1VUEUFYax4hShmbsHrXs4xqapt4/nhhqydQcP3VdiKMsCJIl9RlcEFPreIS9Xxqa2DX7n8vYyVi1TUIriJCTnbk82JKZAlgQ+aK1MGsSPyTBsM1MoNbSgoqEdszAp3VZdFcjMuWc9m0eDniX2af2jwYz5FX/vW1tGfdcVXpIOy1dFeyq+gp0EAgKCocj4xQSEwwJfl0IBZOXkorqtG0vTH/j8fyRNwlJ9c8xc33GB1z/lgdeXBfuKiK2AEGNjGR9CcZUBnbefQQkJBZQZmqFhtU4OCWPXVTSd6wPPMkSSkSKwG+oPwQ0vbNPKekLCHHDMT3Hn1W09KKqqQ3GlAd7FcXbCl0jG6RuDvCFp8nXYkwByWFRZBz9LLHoOuhcQ/v0Gd/u1eDggYsUeivsORYlC8234EZSS8ApaL/Xzu8zJ08E6OQKXzQLjmbMoKD+O67dq4+wp8WpOdGPi8TWoIWEE6PSE+a0pGnZXZw8OXD6J0goXm81Fban71bPTm0dNPGL7IiC4sc4TihqLYz5S0yXGLth95VhzLcbY0r1TlKyfRqCWhAJmR5+isfcmq4YWdN55Hl33bElY+LganVPoKQI0titmN9SgZsdM6gTMTwwhwKJADrT/fmBoI+vkaMxJ/U47zGNPkIyQ35vwnZD5Z4Q0kxGQdgF/AX9+9ll/z5Y6AAAAAElFTkSuQmCC)

Этот репозиторий распространяется в соответствии с [Thodle Source-View License (TSVL)](https://github.com/Thodle/thodle/blob/main/LICENSE)
