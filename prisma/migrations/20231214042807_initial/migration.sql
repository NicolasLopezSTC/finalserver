-- CreateTable
CREATE TABLE "Monster" (
    "monsterId" TEXT NOT NULL,
    "monsterName" TEXT NOT NULL,
    "monsterDesc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Monster_pkey" PRIMARY KEY ("monsterId")
);
