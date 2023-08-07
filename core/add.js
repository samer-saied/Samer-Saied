import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function addMsg(name, phone, body) {
    await prisma.$connect();
    console.log(name + phone + body)
    const result = prisma.messages.create({
        data: {
            name: name.toString(),
            phone: phone.toString(),
            body: body.toString(),
        },
    }).catch(async (error) => {
        return "Error, Not added"
    })
        .finally(async () => {
            await prisma.$disconnect()
        })
    return result
}