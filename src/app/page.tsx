import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsLIst';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
          />
        </Link>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          molestiae, illum magnam reprehenderit, dolorum, et impedit rem est
          odit veniam sint amet eum facilis temporibus labore. Incidunt
          voluptatem accusantium perferendis?
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
