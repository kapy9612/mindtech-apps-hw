import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Mindtech Apps homework Nest.js + Prisma v1.0.0';
  }
}
