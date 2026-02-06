import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

// Use a valid Google font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Interior Designer',
  description: 'Your personal AI assistant for room design and furniture suggestions',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        {/* Main container */}
        <div className="flex flex-col items-center justify-start p-6">
          <header className="w-full max-w-5xl mb-6">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              AI Interior Designer
            </h1>
          </header>

          {/* Page content */}
          <main className="w-full max-w-5xl">{children}</main>

          <footer className="mt-10 text-center text-gray-500">
            &copy; {new Date().getFullYear()} AI Interior Designer
          </footer>
        </div>
      </body>
    </html>
  );
}
