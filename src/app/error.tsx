'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Desculpe, ocorreu um erro inesperado no servidor. Tente novamente mais tarde.'
      // content={ deixado comentado só para saber que pode ser criado uma rotina para tentar novamente
      //   <button onClick={() => reset()}>Clique para tentar novamente</button>
      // }
    />
  );
}
