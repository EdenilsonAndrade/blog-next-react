import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{ href: '#' }}
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

          <PostHeading as='h1' url='#'>
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

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6x1 font-bold text-center py-8'>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
