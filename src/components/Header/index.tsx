'use client';
import clsx from 'clsx';

export function Header() {
  console.log('Header component rendered');
  return (
    <h1
      className={clsx(
        'text-xl',
        'font-bold',
        'text-blue-500',
        'hover:text-blue-50',
        'hover:bg-blue-500',
        'transition',
        'duration-1000',
      )}
      onClick={() => alert('Clicou no título')}
    >
      Text do menu h1
    </h1>
  );
}
