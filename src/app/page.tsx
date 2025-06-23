import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

export default async function HomePage() {
  console.log('HomePage component rendered');
  return (
    <div>
      <SpinLoader containerClasses={clsx('min-h-[500px]', 'bg-amber-500')} />
    </div>
  );
}
