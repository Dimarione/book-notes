# book-notes

## Instal

### Application setup

```sh
yarn install
cp env.example .env
vim .env # replace *username* in DATABASE_URL to real database username (or see in docker-compose.yml)
npx prisma generate
```

### DB setup (optional)

```sh
docker compose up
npx prisma db push # run only if you don't have db structure yet
```

## Run

```sh
yarn start
```

And open [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Structure

Repo contains api route for **authors** (see: `/app/api/authors.js`)
