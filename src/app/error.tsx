'use client';
// cuidar com use client, pois ao importar algum arquivo server ele se transforma em client, ele e seus filhos.
// neste caso o ErrorMessage não é um problema pois não tem informação restrita ao servidor,
// se o conteúdo do ErrorMessage fosse algo que não pode ser visto pelo cliente,
// então poderia passar o mesmo como propriedade para o componente RootErrorPage,
// com isso o ErrorMessage continuaria sendo um componente server

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
