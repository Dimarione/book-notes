# book-notes

## Instal

```sh
yarn install
cp env.example .env
vim .env # replace *username* in DATABASE_URL to real database username
npx prisma generate
```

## Run

```sh
yarn start
```

And open [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Structure

Repo contains api route for **authors** (see: `/api/authors.js`)
