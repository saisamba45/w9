{
  "development": {
    "username": "postgres",
    "password": "vineeth123",
    "database": "wd-todo-dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "vineeth123",
    "database": "wd-todo-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
    },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
   }
}
