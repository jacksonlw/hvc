import "~/styles.css";

import { DM_Sans, Roboto_Slab } from "next/font/google";
import { Navigation } from "~/components/organisms/Navigation";
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
      className={`font-sans ${dmSans.variable} ${robotoSlab.variable}`}
    >
      <body>
        <Provider>
          <main className="px-40">{children}</main>
          <div className="fixed right-0 top-0 flex h-dvh w-40 justify-center">
            <Navigation
              className="h-full"
              sections={Object.keys(SECTIONS).map((key) => {
                return SECTIONS[key as keyof typeof SECTIONS];
              })}
            />
          </div>
        </Provider>
      </body>
    </html>
  );
}
