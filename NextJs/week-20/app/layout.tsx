export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>hi there</div>
        {children}
        <div>bye</div>
      </body>
    </html>
  );
}
