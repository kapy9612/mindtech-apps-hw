import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { User as UserModel } from '.prisma/client';
import { UserService } from '../user/user.service';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(
    private userService: UserService,
    private pokemonService: PokemonService,
  ) {}
  @HttpCode(HttpStatus.OK)
  @Get('catch')
  async catchPokemon(@Req() req): Promise<any> {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return { message: 'No token provided' };
    }
    return this.pokemonService.catch(token, 'poke');
  }
}
