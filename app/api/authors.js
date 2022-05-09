const express = require('express');
const PrismaClient = require('@prisma/client').PrismaClient;

const router = express.Router();
const prisma = new PrismaClient();

router.get('/all', async (_, res) => {
  res.json(await all(prisma));
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  
  if (isNaN(id)) {
    res.statusCode = 404;
    return res.send(null);
  } 

  res.json(await get(prisma, id));
});

router.post('/add', async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const result = await add(prisma, { firstName, lastName });

    res.redirect('/');
  } catch(e) {
    res.statusCode = 500;
    res.send(e);
  }
});

module.exports = router;

async function all(prisma) {
  return await prisma.author.findMany();
}

async function get(prisma, id) {
  return await prisma.author.findUnique({ where: { id } });
}

async function add(prisma, authorData) {
  const { firstName, lastName } = authorData;

  const author = {};
  author['first_name'] = firstName;
  author['last_name'] = lastName;

  return await prisma.author.create({ data: author });
}
