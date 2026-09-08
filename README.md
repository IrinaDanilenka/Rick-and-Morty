# Rick and Morty

SPA-приложение — каталог персонажей мультсериала «Рик и Морти», с использование публичного апи (https://rickandmortyapi.com/).

Приложение показывает список персонажей с фильтрами и бесконечной подгрузкой, позволяет открыть карточку конкретного персонажа и отредактировать данные прямо в списке.

## Стек

- **React 19** + **TypeScript**
- **Vite** — сборка и dev-сервер
- **React Router** — маршрутизация
- **React Hook Form** — формы редактирования карточки
- **Axios** — запросы к API
- **SCSS** — стили (БЭМ-нейминг классов)
- **react-hot-toast** — уведомления об ошибках
- **ESLint / Prettier / Stylelint** — линтеры и форматирование

## Реализованный функционал

- Список персонажей с фильтрацией и бесконечной подгрузкой
- Страница персонажа (`/character/:id`)
- Обработка ошибок

## Где посмотреть

- **Демо (GitHub Pages): https://irinadanilenka.github.io/Rick-and-Morty/**
- Репозиторий: https://github.com/IrinaDanilenka/Rick-and-Morty
- Локально после `npm run dev`: http://localhost:5173

## Запуск

Нужен Node.js 20+ и npm.

```bash
# установить зависимости
npm install

# запустить дев-сервер с hot reload (http://localhost:5173)
npm run dev
```

### Сборка

```bash
# проверка типов (tsc -b) + продакшен-сборка в папку dist/
npm run build

# локальный просмотр собранной версии
npm run preview
```

### Проверки кода

```bash
# eslint + stylelint
npm run lint

# только стили
npm run lint:styles
npm run lint:styles:fix

# форматирование исходников через prettier
npm run pretty
```

## Структура проекта

```
src/
├── api/         — клиент axios и запросы к Rick and Morty API
├── assets/      — изображения и svg-иконки
├── components/  — переиспользуемые UI-компоненты (Input, Select, Loader, тосты и др.)
├── helpers/     — вспомогательные функции
├── hooks/       — загрузка персонажа и списка персонажей
├── pages/       — страницы: список, карточка персонажа, 404
├── shared/      — общие типы и enum'ы
└── widgets/     — составные блоки страниц (карточка персонажа, фильтры)
```

Описание используемого API лежит в [docs/R_and_M_API.md](docs/R_and_M_API.md) и [docs/swagger.yaml](docs/swagger.yaml).
