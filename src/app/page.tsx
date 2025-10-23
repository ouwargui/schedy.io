/* eslint-disable @next/next/no-img-element */
import { CTA } from "@/ui/Cta";
import { Details } from "@/ui/Details";
import { Header } from "@/ui/Header";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-14 md:gap-20 mt-14 md:mt-28 pb-14 max-w-[1440px] mx-auto">
      <Header />
      <section className="flex justify-center w-full">
        <div className="w-3/4 h-48 md:h-64 lg:h-96 rounded-t-3xl block border-b border-b-text-primary bg-small_schedy md:bg-schedy bg-cover" />
      </section>
      <Details />
      <CTA />
      <footer className="flex flex-col items-center justify-center gap-4">
        <div className="flex gap-2">
          <a href="https://github.com/ouwargui/schedy">
            <GitHubLogoIcon className="w-6 h-6 text-white" />
          </a>
        </div>
        <p className="text-text-primary text-sm">
          &copy; Schedy Team - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
