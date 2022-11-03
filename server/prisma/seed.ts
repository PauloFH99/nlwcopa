import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@gamil.com',
            avatarUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faminoapps.com%2Fc%2Fundertale-brasil%2Fpage%2Fitem%2Fjohn-doe-game%2Fv02m_b3CWIwK361RMBJ0BwJdY0Z218bvMo&psig=AOvVaw3unEFIVdrDO2b4FJJ_bgQu&ust=1667490745039000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJj975_tj_sCFQAAAAAdAAAAABAD',
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: 'Example Pool',
            code: 'BOL123',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-02T12:58:34.673Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR',
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-03T12:58:34.673Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',

            guesses:{
                create:{
                    firstTeamPoints:2,
                    secondTeamPoints:1,

                    participant:{
                        connect:{
                            userId_poolId:{
                                userId:user.id,
                                poolId:pool.id,
                            }
                        }
                    }
                }
            }
        }
    })
}

main()