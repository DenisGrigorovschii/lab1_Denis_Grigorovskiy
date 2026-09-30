# lab1_Denis_Grigorovskiy

Лабораторная работа 1 — HTTP-сервер на Node.js (маршрутизация, JSON API, логирование запросов).

**Студент:** Denis Grigorovskiy  
**Группа:** IA2302

## Требования

- [Node.js](https://nodejs.org/) LTS (проверка: `node -v`, `npm -v`)

## Установка и запуск

```bash
npm install
npm start
```

или:

```bash
node app.js
```

Сервер: [http://localhost:3000](http://localhost:3000)

## Маршруты

| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/` | Приветствие |
| GET | `/about` | О приложении |
| GET | `/student` | Имя и группа студента |
| GET | `/api/student` | Данные студента (JSON) |
| GET | `/time` | Текущие дата и время |
| GET | `/api/courses` | Список дисциплин (JSON) |
| GET | `/api/status` | Статус сервера (JSON) |
| * | другие URL | `404 - Page not found` (HTTP 404) |

Каждый запрос логируется в консоль: `МЕТОД URL | ДД.ММ.ГГГГ ЧЧ:ММ`.

## Структура

- `app.js` — сервер
- `package.json` — метаданные проекта
