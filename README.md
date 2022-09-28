### Postgres

```shell
docker run --name clinic_db -e POSTGRES_USER=user -e POSTGRES_PASSWORD=welcome1 -e POSTGRES_DB=clinic_db -p 5432:5432 -d postgres
```