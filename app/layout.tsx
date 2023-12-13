import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Teacher",
  description: "An AI teacher that helps everything with English writing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <nav
          className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="ml-2">
              <Link
                className="text-xl text-neutral-800 dark:text-neutral-200"
                href="/"
              >
                AI Teacher
              </Link>
            </div>
            <div
              className="!visible mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
              id="navbarSupportedContent3"
              data-te-collapse-item
            >
              <div
                className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                data-te-navbar-nav-ref
              >
                <div
                  className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                  data-te-nav-item-ref
                >
                  <Link
                    className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    aria-current="page"
                    href="/summarize"
                    data-te-nav-link-ref
                  >
                    Summarize
                  </Link>
                </div>

                <div
                  className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                  data-te-nav-item-ref
                >
                  <Link
                    className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/paraphrase"
                    data-te-nav-link-ref
                  >
                    Paraphrase
                  </Link>
                </div>

                <div
                  className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                  data-te-nav-item-ref
                >
                  <Link
                    className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/grammar-check"
                    data-te-nav-link-ref
                  >
                    Grammar check
                  </Link>
                </div>

                <div
                  className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                  data-te-nav-item-ref
                >
                  <Link
                    className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="/spell-check"
                    data-te-nav-link-ref
                  >
                    Spell check
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="min-h-screen">
          {children}
        </div>
        <footer className="bg-[#525252] text-center w-full bottom-0 left-0 text-white">
          Group 6 - Comp318{" "}
        </footer>
      </body>
    </html>
  );
}
