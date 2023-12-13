import db from '../utils/db'

export const getMonsters = async (skip, take) => {
const count = await db.employee.count()
const monsters=  await db.monster.findMany({
  skip,
  take,
})
return { count, monsters }
}

export const getMonster = async (id) =>
  db.monster.findUnique({ where: { monsterId: id } })

export const addMonster = async (monsterData) =>
  db.monster.create({ data: { ...monsterData } })

export const updateMonster = async (id, monsterData) => {
const monster = await getMonster(id)
if (monster) {

return db.monster.update({
    where: { monsterId: id },
    data: { ...monster, ...monsterData, updatedAt: new Date() },
  })
}

return null
}

export const deleteEmployee = async (id) =>
  db.employee.delete({ where: { employeeId: id } })
