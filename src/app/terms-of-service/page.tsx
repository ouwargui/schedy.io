import { Footer } from "@/ui/Footer";

export default function TermsOfService() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-14 md:gap-20 p-8 pb-14 max-w-[1440px] mx-auto">
      <section className="flex flex-col flex-1 items-start justify-center w-full max-w-3xl text-text-primary gap-8">
        <div className="flex flex-col self-center">
          <h1 className="text-4xl font-bold self-center">Terms of Service</h1>
          <p className="text-xs">Last updated: October 26, 2025</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
            <p>
              By using <span className="font-bold">Schedy</span>, you agree to
              these Terms of Service and the companion Privacy Policy. If you do
              not agree, please do not use the app.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">2. Use of the Service</h2>
            <p>
              You may use <span className="font-bold">Schedy</span> solely for
              personal or educational purposes, in compliance with all
              applicable laws and Google's API Terms of Service.{" "}
              <span className="font-bold">Schedy</span> is provided “as is”
              without warranty of any kind.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">3. Disclaimer</h2>
            <p>
              <span className="font-bold">Schedy</span>'s developer is not
              responsible for any data loss, missed events, or other issues that
              may occur during use. <span className="font-bold">Schedy</span>{" "}
              relies on Google Calendar's API and availability.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">4. License</h2>
            <p>
              <span className="font-bold">Schedy</span> is open source and
              distributed under the{" "}
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                className="font-bold underline"
              >
                GNU General Public License v3.0
              </a>
              . By contributing or using{" "}
              <span className="font-bold">Schedy</span>, you agree to the terms
              of this license.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">5. Termination</h2>
            <p>
              You may stop using <span className="font-bold">Schedy</span> at
              any time. To remove all data, sign out through the app and remove
              any stored Keychain items related to{" "}
              <span className="font-bold">Schedy</span>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
