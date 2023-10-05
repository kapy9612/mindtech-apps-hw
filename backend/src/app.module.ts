import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { BlacklistService } from './blacklist/blacklist.service';
import { BlacklistModule } from './blacklist/blacklist.module';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, PrismaModule, BlacklistModule, PokemonModule],
  controllers: [AppController, PokemonController],
  providers: [AppService, PrismaService, BlacklistService],
})
export class AppModule {}
