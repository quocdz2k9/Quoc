-- CreateTable
CREATE TABLE "SavedAccount" (
    "id" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "serverID" TEXT NOT NULL DEFAULT '101',
    "roleName" TEXT NOT NULL DEFAULT 'Unknown',
    "level" TEXT NOT NULL DEFAULT '0',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavedAccount_roleId_key" ON "SavedAccount"("roleId");
