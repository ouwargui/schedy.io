import { Footer } from "@/ui/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-14 md:gap-20 p-8 pb-14 max-w-[1440px] mx-auto">
      <section className="flex flex-col flex-1 items-start justify-center w-full max-w-3xl text-text-primary gap-8">
        <div className="flex flex-col self-center">
          <h1 className="text-4xl font-bold self-center">Privacy Policy</h1>
          <p className="text-xs">Last updated: October 26, 2025</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">1. Information We Access</h2>
            <p>
              <span className="font-bold">Schedy</span> requests permission to
              access read-only data from your Google Calendar via the Google
              Calendar API. The data accessed includes:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Your Google account name and email address (used for
                identification within the app)
              </li>
              <li>
                Calendar event details such as title, time, location, and
                attached Google Meet link
              </li>
            </ul>
            <p>
              <span className="font-bold">Schedy</span> cannot modify, delete,
              or create calendar events.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">2. Data Storage</h2>
            <p>
              All data fetched from Google is stored locally on your device
              within the macOS Keychain and is never transmitted to external
              servers controlled by <span className="font-bold">Schedy</span> or
              its developer.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">3. Data Sharing</h2>
            <p>
              <span className="font-bold">Schedy</span> does not share, sell, or
              send any user data to third parties. Your information remains on
              your device at all times.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">4. Authentication</h2>
            <p>
              <span className="font-bold">Schedy</span> uses Google Sign-In for
              authentication. Authentication tokens are stored securely in your
              local Keychain and are used solely for connecting to your Google
              account through official APIs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">5. Open Source Transparency</h2>
            <p>
              The full source code of <span className="font-bold">Schedy</span>{" "}
              is available publicly. Users and developers can inspect or compile
              the app to verify its behavior:{" "}
              <a
                href="https://github.com/ouwargui/schedy"
                className="font-bold underline"
              >
                https://github.com/ouwargui/schedy
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">5. Contact</h2>
            <p>
              If you have any privacy concerns or questions, please
              contact:&nbsp;
              <a href="mailto:me@guisantos.dev" className="font-bold underline">
                me@guisantos.dev
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
