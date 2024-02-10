import { Injectable, Req } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { msg: 'I have signed up' };
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
