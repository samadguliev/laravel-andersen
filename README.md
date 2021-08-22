## Общая информация
Laravel app, использующий Laravel в качестве api, и ReactJs в качестве фронтенда

## Запуск
- Выполнить `docker-compose up`
- `make init` - Инициализация: создание БД, composer, npm, сборка фронта
- `make up` - поднять контейнеры

## Прочее
- `make down` - деактивировать контейнеры
- `make restart` - рестарт
- `make build` - билд

### Notice:
При возникновении проблем с правами - вручную задать права на директорию с проектом

Если по каким-либо причинам не удалось запустить docker-compose, то можно запустить через `php artisan serve`, 
предварительно подняв локальную базу данных 
