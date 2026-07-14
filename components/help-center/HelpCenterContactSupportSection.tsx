export function HelpCenterContactSupportSection() {
  return (
    <div id="contact" className="w-full bg-indigo-700 flex justify-center py-20 px-8 lg:px-12">
      <div className="w-full max-w-[1000px] flex flex-col items-center gap-10">
        <div className="w-full max-w-[900px] flex flex-col items-center text-center gap-4">
          <h2 className="text-white text-4xl sm:text-5xl font-bold font-['Hanken_Grotesk'] leading-[1.2]">
            Contact Support
          </h2>
          <p className="text-white/80 text-base sm:text-lg font-normal font-['Inter'] leading-6 max-w-[600px]">
            Tell us what's going on and our specialists will help you resolve it.
          </p>
        </div>
        
        <div className="w-full max-w-[900px] bg-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col gap-8 relative overflow-hidden">
          <div className="w-full flex flex-col sm:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-zinc-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">
                Product Area
              </label>
              <div className="relative">
                <select className="w-full h-12 pl-3 pr-10 py-2 bg-white rounded-lg border border-neutral-300 text-zinc-900 text-base font-normal font-['Inter'] appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option value="video-meetings">Video Meetings</option>
                  <option value="audio-calls">Audio Calls</option>
                  <option value="messaging">Messaging</option>
                  <option value="admin">Admin Console</option>
                  <option value="billing">Billing</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-zinc-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">
                Severity
              </label>
              <div className="relative">
                <select className="w-full h-12 pl-3 pr-10 py-2 bg-white rounded-lg border border-neutral-300 text-zinc-900 text-base font-normal font-['Inter'] appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option value="low">Low - Question/Help</option>
                  <option value="medium">Medium - Feature Issue</option>
                  <option value="high">High - Service Disruption</option>
                  <option value="critical">Critical - Outage</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full flex flex-col gap-2">
            <label className="text-zinc-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">
              Workspace Name
            </label>
            <input 
              type="text" 
              placeholder="e.g. acme-corp.zoikosema.com" 
              className="w-full h-12 px-3 py-3 bg-white rounded-lg border border-neutral-300 text-zinc-900 text-base font-normal font-['Inter'] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          
          <div className="w-full flex flex-col gap-2">
            <label className="text-zinc-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">
              Detailed Description
            </label>
            <textarea 
              placeholder="Describe the issue, including steps to reproduce and any error messages..." 
              className="w-full px-3 py-3 h-32 bg-white rounded-lg border border-neutral-300 text-zinc-900 text-base font-normal font-['Inter'] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-y"
            ></textarea>
          </div>
          
          <div className="w-full flex flex-col gap-2">
            <label className="text-zinc-900 text-base font-normal font-['Hanken_Grotesk'] leading-6">
              Steps Already Tried
            </label>
            <textarea 
              placeholder="e.g. Cleared cache, restarted app, checked system status..." 
              className="w-full px-3 py-3 h-24 bg-white rounded-lg border border-neutral-300 text-zinc-900 text-base font-normal font-['Inter'] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-y"
            ></textarea>
          </div>
          
          <div className="w-full pt-6 border-t border-neutral-300 flex flex-col sm:flex-row justify-between sm:items-center gap-6">
            <div className="flex items-center gap-4">
              <button type="button" className="flex items-center gap-2 text-zinc-700 hover:text-sky-700 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1716 6.82843L8.10051 13.8995C7.31946 14.6805 7.31946 15.9467 8.10051 16.7278C8.88155 17.5088 10.1479 17.5088 10.9289 16.7278L17.2929 10.3638C18.855 8.80168 18.855 6.26902 17.2929 4.70688C15.7307 3.14474 13.1981 3.14474 11.6359 4.70688L4.56485 11.7779C2.22171 14.1211 2.22171 17.9201 4.56485 20.2632C6.908 22.6064 10.707 22.6064 13.0501 20.2632L19.4142 13.8992" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-base font-normal font-['Hanken_Grotesk'] leading-6">Attach Files</span>
              </button>
              <span className="text-zinc-500 text-sm font-normal font-['Hanken_Grotesk']">Max size 20MB</span>
            </div>
            
            <button type="button" className="px-10 py-3.5 bg-sky-700 hover:bg-sky-800 transition-colors rounded-lg flex justify-center items-center">
              <span className="text-white text-base font-bold font-['Hanken_Grotesk'] leading-6">Submit Ticket</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
