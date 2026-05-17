-- AlterTable
ALTER TABLE "RedeemStatistic" ALTER COLUMN "id" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Giftcode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Giftcode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Giftcode_code_key" ON "Giftcode"("code");
