export function HelpCenterArticleDetailSection() {
  return (
    <div className="w-full bg-white flex justify-center overflow-hidden">
      <div className="w-full max-w-[1280px] px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-black text-4xl sm:text-5xl font-bold font-sans leading-[1.1]">
              Configuring AI Meeting Summaries and<br className="hidden md:block" />Action Items
            </h2>
          </div>

          <div className="w-full py-4 border-t border-b border-neutral-300/30 flex flex-wrap justify-start items-center gap-6">
            <div className="flex justify-start items-center gap-2">
              <div className="w-3.5 h-3.5 bg-zinc-700 rounded-sm"></div>
              <span className="text-zinc-700 text-sm sm:text-base font-normal font-sans leading-6">
                Updated July 13, 2026
              </span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
              <span className="text-zinc-700 text-sm sm:text-base font-normal font-sans leading-6">
                By Product Success Team
              </span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="w-4 h-3 bg-zinc-700"></div>
              <span className="text-zinc-700 text-sm sm:text-base font-normal font-sans leading-6">
                1.2k Views
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-8">
            <div className="w-full p-6 bg-gray-100 rounded-xl border-l-4 border-sky-700 flex flex-col justify-start items-start gap-2">
              <span className="text-sky-700 text-sm sm:text-base font-bold font-sans uppercase leading-6">
                BEFORE YOU BEGIN
              </span>
              <p className="text-zinc-700 text-sm sm:text-base font-normal font-sans leading-6">
                Ensure you have Workspace Admin privileges and that the 'Enterprise AI' module is active in your<br className="hidden md:block" />subscription plan.
              </p>
            </div>

            <h3 className="text-zinc-900 text-2xl font-semibold font-sans leading-8">
              Step-by-Step Guide
            </h3>

            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="w-full flex justify-start items-start gap-4">
                <div className="w-8 h-8 shrink-0 bg-black rounded-full flex justify-center items-center mt-0.5">
                  <span className="text-white text-base font-bold font-sans leading-6">1</span>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <h4 className="text-zinc-900 text-base font-semibold font-sans leading-6">
                    Navigate to the Admin Console
                  </h4>
                  <p className="text-zinc-700 text-base font-normal font-sans leading-6">
                    Log in to your Zoiko Sema workspace and select the gear icon in the bottom left sidebar.
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-start items-start gap-4">
                <div className="w-8 h-8 shrink-0 bg-black rounded-full flex justify-center items-center mt-0.5">
                  <span className="text-white text-base font-bold font-sans leading-6">2</span>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <h4 className="text-zinc-900 text-base font-semibold font-sans leading-6">
                    Enable 'Sema AI' for Meetings
                  </h4>
                  <p className="text-zinc-700 text-base font-normal font-sans leading-6">
                    Under the "Feature Management" tab, toggle the switch for Meeting Summaries to "Active".
                  </p>

                  <div className="w-full mt-2 rounded-xl border border-neutral-300 shadow-sm overflow-hidden flex flex-col">
                    <img
                      src="/help/track-3.jpg"
                      alt="AI Management Dashboard"
                      className="w-full h-auto object-cover border-b border-neutral-200"
                    />
                    <div className="w-full p-3 bg-zinc-50 flex justify-center items-center">
                      <span className="text-zinc-500 text-xs font-medium font-sans leading-4">
                        Fig 1: AI Management Dashboard view.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-6 bg-green-50 rounded-xl border border-green-200 flex flex-col justify-start items-start gap-2">
              <div className="flex items-center gap-2">
                <img src="/help/icon-check-green.svg" alt="Expected Result" className="w-4 h-4" />
                <span className="text-green-700 text-base font-bold font-sans uppercase leading-6">
                  EXPECTED RESULT
                </span>
              </div>
              <p className="text-green-800 text-base font-normal font-sans leading-6">
                Once enabled, all users will see an 'AI Recap' button during active video meetings, and summaries will<br className="hidden md:block" />
                automatically post to relevant channels after completion.
              </p>
            </div>

            <div className="w-full pt-8 border-t border-neutral-300 flex flex-col items-start gap-4">
              <h3 className="text-zinc-900 text-xl font-semibold font-sans leading-7">
                Was this article helpful?
              </h3>
              <div className="flex justify-start items-center gap-3">
                <button className="px-4 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9V5C14 3.89543 13.1046 3 12 3H11.5L9.61803 6.76393C9.2285 7.54299 8.4419 8.04719 7.56942 8.12574L4.85172 8.37035C3.81156 8.46397 3 9.33611 3 10.3807V19C3 20.1046 3.89543 21 5 21H16.0378C16.9416 21 17.7287 20.3797 17.954 19.5064L19.5134 13.4659C19.8219 12.2709 18.9171 11 17.6834 11H14.1528C13.5681 11 13.149 10.4571 13.2965 9.88939L14 9Z" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-zinc-900 text-sm font-medium font-sans">Yes</span>
                </button>
                <button className="px-4 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15V19C10 20.1046 10.8954 21 12 21H12.5L14.382 17.2361C14.7715 16.457 15.5581 15.9528 16.4306 15.8743L19.1483 15.6297C20.1884 15.536 21 14.6639 21 13.6193V5C21 3.89543 20.1046 3 19 3H7.96222C7.05835 3 6.27131 3.62029 6.04604 4.49356L4.48665 10.5341C4.17812 11.7291 5.08291 13 6.31662 13H9.84715C10.4319 13 10.851 13.5429 10.7035 14.1106L10 15Z" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-zinc-900 text-sm font-medium font-sans">No</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-72 flex flex-col gap-12 shrink-0">
          <div className="w-full p-8 bg-slate-900 rounded-2xl flex flex-col gap-4">
            <h3 className="text-white text-2xl font-semibold font-sans leading-8">
              Still need help?
            </h3>
            <p className="text-slate-400 text-base font-normal font-sans leading-6 pb-4">
              Our enterprise support team is<br />available 24/7 for critical<br />issues.
            </p>
            <a
              href="#contact"
              className="w-full py-3 bg-sky-700 hover:bg-sky-600 transition-colors rounded-lg flex justify-center items-center"
            >
              <span className="text-white text-base font-semibold font-sans">
                Contact Support
              </span>
            </a>
          </div>

          <div className="w-full flex flex-col gap-6">
            <h4 className="text-zinc-500 text-sm font-bold font-sans uppercase tracking-wide">
              RELATED ARTICLES
            </h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sky-700 hover:underline text-base font-medium font-sans leading-6">
                Customizing AI Transcription accuracy
              </a>
              <a href="#" className="text-sky-700 hover:underline text-base font-medium font-sans leading-6">
                Privacy settings for Meeting recordings
              </a>
              <a href="#" className="text-sky-700 hover:underline text-base font-medium font-sans leading-6">
                Integrating with Google Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
