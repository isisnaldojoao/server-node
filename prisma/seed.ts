import { prisma } from "../src/lib/prisma";

async function seed() {
    const newEventSlug = 'unite-sumite'; 

    const existingEvent = await prisma.event.findUnique({
        where: {
            slug: newEventSlug
        }
    });

    if (existingEvent) {
        console.log('Já existe um evento com o mesmo slug. Modifique o slug ou tome outra ação apropriada.');
        return;
    }

    await prisma.event.create({
        data: {
            title: 'Unite Sumite',
            slug: newEventSlug,
            details: 'Um evento p/ devs apaixonados(as) por código!',
            maximumAttendees: 120,
        }
    });

    console.log('Novo evento criado com sucesso!');
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
});
