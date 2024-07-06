import "~/styles.css";

import { DM_Sans, Roboto_Slab } from "next/font/google";
import { Footer, Navigation } from "~/features/navigation";
import { Provider } from "jotai";
import { SECTIONS } from "~/constants";

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
      className={`bg-white font-sans ${dmSans.variable} ${robotoSlab.variable}`}
    >
      <body>
        <Provider>
          <main className="pt-navOffset container">{children}</main>
          <Navigation
            sections={Object.keys(SECTIONS).map((key) => {
              return SECTIONS[key as keyof typeof SECTIONS];
            })}
          />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
