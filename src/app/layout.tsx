import type { Metadata } from "next";
import { GlobalContextProvider } from "./context/StoreProvider";
import QueryProvider from "./context/QueryProvider";
import "./globals.css";



export const metadata: Metadata = {
  title: "World timezone app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-blue-500 via-blue-800 to-blue-900">
        <QueryProvider>
          <GlobalContextProvider>
            {children}
            </GlobalContextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
