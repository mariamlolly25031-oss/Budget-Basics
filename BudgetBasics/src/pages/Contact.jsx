import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Get in touch
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Have a question about BudgetBasics? Send us a message and we'll be happy to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              We'd love to hear from you
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Whether you have a question, suggestion, or need help navigating the platform, you can reach out through the contact form.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Email</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">hello@budgetbasics.com</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Response time</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">We aim to respond to messages as soon as possible.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
            {sent ? (
              <div className="py-12 text-center">
                <div className="text-5xl text-blue-600 dark:text-blue-400">✓</div>
                <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">Message sent</h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Thanks for contacting BudgetBasics.</p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="What is your message about?"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="7"
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}