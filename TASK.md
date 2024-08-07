# Тестовое задание

## Дан JSON файл

```json
[
  { "email": "jim@gmail.com", "number": "221122" },
  { "email": "jam@gmail.com", "number": "830347" },
  { "email": "john@gmail.com", "number": "221122" },
  { "email": "jams@gmail.com", "number": "349425" },
  { "email": "jams@gmail.com", "number": "141424" },
  { "email": "jill@gmail.com", "number": "822287" },
  { "email": "jill@gmail.com", "number": "822286" }
]
```

## Нужно сделать

Напишите SPA приложение, на котором находится форма с двумя полями `email` (обязательное) и `number` (опциональное) и кнопка `submit`.

При нажатии на `submit` запрос уходит на бек где нужно в `JSON` найти подходящих под поисковый запрос пользователей.

Затем отобразить найденные данные на клиенте под _формой_.

## Условия

Нужно на беке добавить задержку обработки запроса в **5 секунд** (имитация долгой обработки ответа).

При повторном запросе с фронта, отменять предыдущий запрос.

Обязательная валидация полей `email` и `number`. Можно сделать либо на фронте, либо на беке. Будьте готовы объяснить выбранный подход.

На фронте на поле `number` нужно добавить маску, чтобы номер отображался с дефисами каждые два знака. Например: 22-11-22, 83-03-47.

## Технические требования

Фронт `react` или `vue` (типизация на выбор).

Бек `nodejs` (типизация обязательна).

Библиотеки на ваше усмотрение.
