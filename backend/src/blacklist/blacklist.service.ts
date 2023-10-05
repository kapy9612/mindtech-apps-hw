import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { BlacklistedToken } from '@prisma/client';

@Injectable()
export class BlacklistService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async blacklistToken(token: string): Promise<BlacklistedToken> {
    const { exp }: any = this.jwtService.decode(token);

    return this.prisma.blacklistedToken.create({
      data: {
        token,
        expiry: new Date(exp),
      },
    });
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    const foundToken = await this.prisma.blacklistedToken.findUnique({
      where: { token },
    });
    console.log(foundToken);
    if (!foundToken) {
      return false;
    }

    // // Check if the token is expired
    // if (new Date(foundToken.expiry) < new Date()) {
    //   // Token is expired, remove it from the blacklist and consider it as not blacklisted
    //   await this.prisma.blacklistedToken.delete({
    //     where: { token: foundToken.token },
    //   });
    //   return false;
    // }

    return true;
  }
}
