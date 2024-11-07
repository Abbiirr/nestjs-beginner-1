import {Module } from '@nestjs/common';
import { AuthControlller } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers: [AuthControlller],
    providers: [AuthService]
  })
export class AuthModule {}