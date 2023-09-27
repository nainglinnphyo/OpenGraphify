import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.organization.upsert({
        where: {
            name: "Xsphere"
        },
        create: {
            name: "Xsphere"
        },
        update: {
            name: "Xsphere"
        }
    })
        .then(async (org) => {
            await prisma.user.create({
                data: {
                    organizationId: org.id,
                    email: "nlp@gmail.com",
                    name: "nlp",
                    password: "password"
                }
            })
        })

}

main()