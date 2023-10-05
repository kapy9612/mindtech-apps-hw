import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { User as UserModel } from '@prisma/client';
import { AuthGuard } from './auth.guard';
import { Request } from 'express';
import { Public } from './public.decorator';
import { BlacklistService } from '../blacklist/blacklist.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private blacklistService: BlacklistService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('register')
  async signupUser(
    @Body() userData: { name?: string; email: string; password: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: { email: string; password: string }) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('logout')
  @HttpCode(200)
  async logout(@Req() req): Promise<{ message: string }> {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return { message: 'No token provided' };
    }

    // Here we assume the token is still valid (not expired).
    await this.blacklistService.blacklistToken(token);

    return { message: 'Logged out successfully' };
  }

  @Get('profile')
  getProfile() {
    return 'Works';
  }
}
