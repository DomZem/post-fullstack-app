import { Module } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PrismaService, PostService],
})
export class PostModule {}
