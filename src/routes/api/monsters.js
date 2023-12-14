import { Router } from 'express'

import {
  getMonster,
  getMonsters,
  addMonster,
  deleteMonster,
} from '../../models/monsters'

const router = Router()

router.get('/', async (req, res) => {
  const size = Number(req.query.size) || 10 
  const page = Number(req.query.page) || 1
  const skip = size * (page - 1)
  const take = size
  const {count, monsters} = await getMonsters(skip, take)
  res.set({
    'X-Total-Count': count,
    'X-Total-Pages': Math.ceil(count / size),
  })
  res.send(monsters)
})

router.get('/:id', async (req, res) => {
  const monsters = await getMonster(req.params.id)
  if (monsters) {
    res.send(monsters)
  } else {
    res.status(404).send({ msg: 'Monster not found' })
  }
})

router.post('/', async (req, res) => {
  const monsters = await addMonster(req.body)
  res.send(monsters)
})

router.get('/:id', async (req, res) => {
  const monster = await updateMonster(req.params.id, req.body)
  if (monster) {
    res.send(monster)
  } else {
    res.status(404).send({ msg: 'Monster not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const monster = await deleteMonster(req.params.id)
  if (monster) {
    res.send(monster)
  } else {
    res.status(404).send({ msg: 'Monster not found' })
  }
})

export default router
