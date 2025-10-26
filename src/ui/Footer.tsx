export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 w-full">
      <a
        className="text-text-primary text-xs uppercase font-bold group"
        href="https://github.com/ouwargui"
      >
        Made with ❤️ by @<span className="group-hover:underline">ouwargui</span>
      </a>
      <div className="h-px w-full bg-primary-tint" />
      <div className="flex gap-2 text-text-primary text-xs">
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
