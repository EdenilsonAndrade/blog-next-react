export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <>
      <h1>Aqui vem o layout da about</h1>
      {children}
    </>
  );
}
