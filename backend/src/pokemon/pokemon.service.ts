import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PokemonService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async catch(token: string, pokemon: string): Promise<User> {
    const { email }: any = this.jwtService.decode(token);
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
