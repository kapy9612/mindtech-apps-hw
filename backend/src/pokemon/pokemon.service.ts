import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  async catch(email: string, pokemon: string): Promise<User> {
    return this.prisma.user.update({
      where: {
        email: email,
      },
      data: {
        pokemons: {
          create: { name: pokemon },
        },
      },
    });
  }

  async release(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
}
