# Mpyahjälpen

## About

Track Mpyas donation progress in Musikhjälpen

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sticker Raffle
The sticker raffle thingy is dependant on
* PlanetScale
* Prisma

Go into your .env file and update your DATABASE_URL variable with the following:
```
DATABASE_URL="mysql://root@127.0.0.1:3309/mpyahjalpen"
```

Run locally
```
pscale connect mpyahjalpen dev --port 3309
```

Run prisma studio
```
npx prisma studio
```

Push schema changes
```
npx prisma db push
```
