import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait(): Promise<void> {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonConetent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonConetent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.id === id);
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.slug === slug);
    if (!post) {
      throw new Error(`Post with slug ${slug} not found`);
    }
    return post;
  }
}
