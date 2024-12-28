import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('posts')
  async getPosts(): Promise<PostModel[]> {
    return this.postService.getPosts({});
  }

  @Get('posts/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.getPostByUnique({ id: Number(id) });
  }
  @Post('posts')
  async createPost(@Body() post: CreatePostDto): Promise<PostModel> {
    return this.postService.createPost(post);
  }

  @Delete('posts/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
