import "~/styles.css";

import { DM_Sans, Roboto_Slab } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Hill & Valley Club",
  description: "The official website for the Hill & Valley Club.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`font-sans ${dmSans.variable} ${robotoSlab.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
