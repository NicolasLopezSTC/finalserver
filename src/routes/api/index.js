import { Router } from 'express'
import basicAuth from 'express-basic-auth'


import monsters from './monsters'

const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
  )




router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})



router.use('/monsters', monsters)

export default router