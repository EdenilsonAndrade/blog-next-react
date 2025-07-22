import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  try {
    const post = await postRepository.findBySlug(slug);

    return post;
  } catch (error) {
    console.error('Error finding post by slug:', error);
    notFound();
  }
});

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findBySlug(id),
);
