import { Oswald, Cairo  } from 'next/font/google'
import "./globals.css";

const cairo = Cairo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Samer Saied | Portfolio",
  description: "Senior Mobile Developer | Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${cairo.className} antialiased bg-darknight text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
