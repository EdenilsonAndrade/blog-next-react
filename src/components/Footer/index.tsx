import Link from 'next/link';

export function Footer() {
  return (
    <footer className='pb-16 text-center'>
      <Link
        href='https://www.linkedin.com/in/edenilson-de-andrade-276881110/'
        target='_blank'
        rel='noopener noreferrer'
      >
        The Blog &copy; {new Date().getFullYear()} - Desenvolvido por Edenilson
        de Andrade
      </Link>
    </footer>
  );
}
