import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.create({
        data: {
            email: "nlp@gmail.com",
            name: "nlp",
            password: "password"
        }
    })
}

main()