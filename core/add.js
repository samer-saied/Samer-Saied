import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function addMsg(name, phone, body) {
    await prisma.$connect();

    const result = prisma.messages.create({
        data: {
            name: name,
            phone: phone,
            body: body,
        },
    }).catch(async (error) => {
        // console.log(error)
        return "Error, Not added"
    })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return result
}