-- CreateTable
CREATE TABLE "ActiveSession" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActiveSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedAccountCount" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedAccountCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedeemStatistic" (
    "id" TEXT NOT NULL DEFAULT 'global_stats',
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "RedeemStatistic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActiveSession_ip_key" ON "ActiveSession"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "SavedAccountCount_ip_key" ON "SavedAccountCount"("ip");
