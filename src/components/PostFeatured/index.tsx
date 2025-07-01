import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/bryen_9.png',
          alt: 'Título do post',
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2025-06-30'
        >
          30/06/2025 10:00
        </time>

        <PostHeading as='h1' url={postLink}>
          Incidunt voluptatem accusantium perferendis?
        </PostHeading>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          molestiae, illum magnam reprehenderit, dolorum, et impedit rem est
          odit veniam sint amet eum facilis temporibus labore. Incidunt
          voluptatem accusantium perferendis?
        </p>
      </div>
    </section>
  );
}
