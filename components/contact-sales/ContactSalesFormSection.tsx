export function ContactSalesFormSection() {
  return (
    <div className="flex-1 w-full max-w-[576px] bg-white rounded-3xl border border-gray-100 shadow-xl px-8 sm:px-12 pt-14 pb-12 flex flex-col gap-2 relative">
      {/* Decorative shadow border mentioned in HTML */}
      <div className="absolute inset-0 rounded-3xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] border border-indigo-600 pointer-events-none"></div>
      
      <h4 className="text-indigo-600 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wider">
        CONTACT SALES
      </h4>
      <h2 className="text-slate-900 text-3xl font-bold font-['Inter'] leading-9 mt-2.5">
        Send us a message
      </h2>
      <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-5 mt-1">
        Complete the form and a member of our team will be in touch within one<br className="hidden sm:block"/>business day.
      </p>

      <form className="flex flex-col gap-6 mt-8 w-full z-10 relative">
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700 text-xs font-bold font-['Inter'] leading-4">Full name *</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
              <img src="/contact/icon-user-input.svg" alt="User" className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-indigo-500 font-['Inter'] placeholder-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700 text-xs font-bold font-['Inter'] leading-4">Business email *</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
              <img src="/contact/icon-mail-input.svg" alt="Email" className="w-4 h-4" />
            </div>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-indigo-500 font-['Inter'] placeholder-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700 text-xs font-bold font-['Inter'] leading-4">Company name *</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
              <img src="/contact/icon-company-input.svg" alt="Company" className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="Enter your company name" 
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-indigo-500 font-['Inter'] placeholder-gray-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700 text-xs font-bold font-['Inter'] leading-4">Phone number</label>
          <input 
            type="tel" 
            placeholder="Enter your phone number" 
            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-indigo-500 font-['Inter'] placeholder-gray-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex-1 flex flex-col gap-1.5 relative">
            <label className="text-slate-700 text-xs font-bold font-['Inter'] leading-4">Company size</label>
            <select className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-indigo-500 font-['Inter'] appearance-none">
              <option value="">Select company size</option>
              <option value="1-50">1-50</option>
              <option value="51-200">51-200</option>
              <option value="201-1000">201-1000</option>
              <option value="1000+">1000+</option>
            </select>
            <div className="absolute right-4 top-1/2 translate-y-1 pointer-events-none text-gray-500 flex items-center justify-center">
              <img src="/contact/icon-chevron-down.svg" alt="Select" className="w-4 h-4" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-1.5 relative">
            <label className="text-slate-700 text-xs font-bold font-['Inter'] leading-4">Job role</label>
            <select className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-indigo-500 font-['Inter'] appearance-none">
              <option value="">Select your role</option>
              <option value="Executive">Executive</option>
              <option value="IT/Engineering">IT / Engineering</option>
              <option value="HR/Operations">HR / Operations</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 translate-y-1 pointer-events-none text-gray-500 flex items-center justify-center">
              <img src="/contact/icon-chevron-down.svg" alt="Select" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 relative">
          <label className="text-slate-700 text-xs font-bold font-['Inter'] leading-4">What can we help you with? *</label>
          <select className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-500 text-sm focus:outline-none focus:border-indigo-500 font-['Inter'] appearance-none">
            <option value="">Select an option</option>
            <option value="Sales">Sales inquiry</option>
            <option value="Support">Technical support</option>
            <option value="Partnership">Partnership</option>
          </select>
          <div className="absolute right-4 top-1/2 translate-y-1 pointer-events-none text-gray-500 flex items-center justify-center">
            <img src="/contact/icon-chevron-down.svg" alt="Select" className="w-4 h-4" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-700 text-xs font-bold font-['Inter'] leading-4">Tell us more (optional)</label>
          <textarea 
            placeholder="Share any details about your needs, goals, or questions..." 
            className="w-full px-4 pt-3 pb-16 bg-white rounded-lg border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-indigo-500 font-['Inter'] resize-none"
            rows={4}
          ></textarea>
        </div>

        <div className="flex items-start gap-3 mt-2">
          <div className="pt-1 flex shrink-0">
            <input type="checkbox" className="w-4 h-4 rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500" />
          </div>
          <p className="text-gray-600 text-xs font-normal font-['Inter'] leading-4">
            I agree to the <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a>.
          </p>
        </div>

        <button 
          type="button" 
          className="w-full py-4 mt-2 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-xl text-white text-base font-bold font-['Inter'] leading-6 flex items-center justify-center gap-2 shadow-[0px_4px_6px_-4px_rgba(79,70,229,0.3)]"
        >
          Send message
          <img src="/contact/icon-arrow-right.svg" alt="Send" className="w-4 h-4" style={{ filter: "brightness(0) invert(1)" }} />
        </button>

        <div className="flex items-center justify-center gap-2 mt-2">
          <img src="/contact/icon-shield-check.svg" alt="Secure" className="w-3 h-3.5" style={{ filter: "grayscale(100%) opacity(50%)" }} />
          <span className="text-gray-500 text-xs font-normal font-['Inter'] leading-4">
            We respect your privacy. Your information is secure.
          </span>
        </div>
      </form>
    </div>
  );
}
