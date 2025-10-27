import { Footer } from "@/ui/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-14 md:gap-20 p-8 pb-14 max-w-[1440px] mx-auto">
      <section className="flex flex-col flex-1 items-start justify-center w-full max-w-3xl text-text-primary gap-8">
        <div className="flex flex-col self-center">
          <h1 className="text-4xl font-bold self-center">Privacy Policy</h1>
          <p className="text-xs">Last updated: October 27, 2025</p>
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
              All information retrieved from Google is stored locally on your
              device. Specifically:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-bold">OAuth tokens</span> are stored
                securely in the macOS Keychain to manage your Google sign-in
                session.
              </li>
              <li>
                <span className="font-bold">User and calendar data</span> (such
                as your name, email address, and event details) are stored
                locally using Apple's SwiftData framework.
              </li>
            </ul>
            <p>
              No data is transmitted to or stored on external servers controlled
              by <span className="font-bold">Schedy</span> or its developer.
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
              authentication. Tokens are stored securely in your Keychain and
              never exposed outside your device. They are used exclusively for
              maintaining your Google session and communicating with the Google
              Calendar API.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">
              5. Data Retention and Deletion
            </h2>
            <p>
              <span className="font-bold">Schedy</span> retains user data only
              locally and only as long as it is needed for the app to function
              on your device.
            </p>
            <p>
              All stored information can be deleted by the user at any time in
              one of the following ways:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Use the <span className="font-bold">"Clear App Data"</span>{" "}
                option in Schedy's settings to erase all locally stored data,
                including SwiftData and Keychain entries related to the app.
              </li>
              <li>
                Sign out of a specific Google account within{" "}
                <span className="font-bold">Schedy</span> to remove data
                associated only with that account.
              </li>
            </ul>
            <p>
              When either of these actions is performed, the corresponding
              information is permanently removed from your device.{" "}
              <span className="font-bold">Schedy</span> does not keep any copies
              or backups on remote servers.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">6. Open Source Transparency</h2>
            <p>
              The full source code of <span className="font-bold">Schedy</span>{" "}
              is publicly available. Anyone can review or compile it to verify
              its behavior:{" "}
              <a
                href="https://github.com/ouwargui/schedy"
                className="font-bold underline"
              >
                https://github.com/ouwargui/schedy
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">7. Contact</h2>
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
