import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';
import { findPublicPostBySlugCached } from '@/lib/post/queries/public';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPublicPostBySlugCached(slug);
  return {
    title: post.excerpt,
  };
}

// export async function generateStaticParams() { necessário se for exportar o site como estático, contém algumas alterações ver aula 143 da seção 3: Next.js 15,....
//   const posts = await findAllPublicPostsCached();
//   const params = posts.map(post => {
//     return {
//       slug: post.slug,
//     };
//   });

//   return params;
// }

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className='min-h-20 mb-16' />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
