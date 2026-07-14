"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Shield, Paperclip, ChevronDown, Check, X } from 'lucide-react';

// --- CUSTOM SCROLL-REVEAL REUSABLE HOOK ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function ReportFormSection() {
  const [sectionRef, isVisible] = useScrollReveal();
  
  // State variables for form fields
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [severity, setSeverity] = useState('');
  const [affectedDomain, setAffectedDomain] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [hasAcknowledged, setHasAcknowledged] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log({
      fullName,
      workEmail,
      severity,
      affectedDomain,
      contactEmail,
      description,
      isUrgent,
      hasAcknowledged,
      attachedFile
    });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 lg:py-10 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* --- LEFT HAND FORM BLOCK --- */}
        <form 
          onSubmit={handleFormSubmit}
          className={`lg:col-span-7 bg-white dark:bg-gray-800/40 rounded-3xl border border-violet-100 dark:border-gray-800 shadow-[0_24px_50px_-34px_rgba(80,50,180,0.15)] dark:shadow-none overflow-hidden transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          {/* Header Row */}
          <div className="p-6 sm:p-8 bg-purple-50/50 dark:bg-purple-950/10 border-b border-violet-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-sans tracking-tight dark:text-white">Security issue</h2>
                <p className="text-xs font-semibold text-violet-600 dark:text-violet-400">Routes to Security / Trust</p>
              </div>
            </div>
            <span className="text-zinc-400 dark:text-zinc-500 text-xs font-bold tracking-wider self-start sm:self-center">
              STEP 2 — DETAILS
            </span>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            
            {/* Input Row: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-900 dark:text-gray-300">Your name</label>
                <input 
                  type="text" 
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-zinc-200 dark:border-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-900 dark:text-gray-300">Work email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-zinc-200 dark:border-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
                />
              </div>
            </div>

            {/* Input Row: Severity & Domain */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <label className="text-xs font-semibold text-slate-900 dark:text-gray-300">Severity</label>
                  <span className="text-red-500 text-xs font-semibold">*</span>
                </div>
                <div className="relative">
                  <select 
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                    required
                    className="w-full appearance-none px-4 py-3 bg-white dark:bg-gray-900 border border-zinc-200 dark:border-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white pr-10"
                  >
                    <option value="" disabled>Select severity</option>
                    <option value="critical">Critical (Immediate danger/breakage)</option>
                    <option value="high">High (Major functionality impacted)</option>
                    <option value="medium">Medium (Moderate operational bypass)</option>
                    <option value="low">Low (Trivial or styling bugs)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-tight">Use impact, not just a label.</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <label className="text-xs font-semibold text-slate-900 dark:text-gray-300">Affected account or domain</label>
                  <span className="text-red-500 text-xs font-semibold">*</span>
                </div>
                <input 
                  type="text" 
                  placeholder="workspace.zoikosema.com"
                  value={affectedDomain}
                  onChange={(e) => setAffectedDomain(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-zinc-200 dark:border-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
                />
              </div>
            </div>

            {/* Input Row: Contact Email */}
            <div className="flex flex-col gap-2 max-w-md">
              <div className="flex items-center gap-1">
                <label className="text-xs font-semibold text-slate-900 dark:text-gray-300">Contact email</label>
                <span className="text-red-500 text-xs font-semibold">*</span>
              </div>
              <input 
                type="email" 
                placeholder="security-contact@company.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-zinc-200 dark:border-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
              />
            </div>

            {/* Input Row: Evidence upload */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-slate-900 dark:text-gray-300">Evidence (optional)</label>
              <input 
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-slate-300 dark:border-gray-800 hover:border-violet-400 dark:hover:border-violet-500/50 rounded-xl cursor-pointer transition-all"
              >
                {attachedFile ? (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs text-slate-700 dark:text-gray-200 truncate font-semibold">
                        📎 {attachedFile.name}
                      </span>
                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setAttachedFile(null);
                        }}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Paperclip className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">Attach a file (optional)</span>
                  </>
                )}
              </div>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-tight">Redact secrets before uploading.</span>
            </div>

            {/* Input Row: Description */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <label className="text-xs font-semibold text-slate-900 dark:text-gray-300">Description</label>
                <span className="text-red-500 text-xs font-semibold">*</span>
              </div>
              <textarea 
                rows={4}
                placeholder="Describe the concern: what happened, when, the affected page or feature, and steps to reproduce. Remove any sensitive data from screenshots."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-zinc-200 dark:border-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white leading-relaxed resize-none"
              />
            </div>

            {/* Urgency Notification Box */}
            <div 
              onClick={() => setIsUrgent(!isUrgent)}
              className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                isUrgent 
                  ? 'bg-rose-50/70 border-red-300 dark:bg-rose-950/20 dark:border-rose-900/50' 
                  : 'bg-red-50/40 border-rose-100 dark:bg-rose-950/10 dark:border-gray-800'
              }`}
            >
              <input 
                type="checkbox"
                checked={isUrgent}
                onChange={() => setIsUrgent(!isUrgent)}
                className="mt-1 h-3.5 w-3.5 rounded-sm accent-red-600 cursor-pointer"
              />
              <p className="text-xs leading-relaxed text-slate-700 dark:text-gray-300">
                <span className="text-red-700 dark:text-red-400 font-bold">This concern is urgent. </span>
                Flag if there is an active security risk, ongoing abuse, or safety issue. Urgent reports are prioritized for review.
              </p>
            </div>

            {/* Privacy Acknowledgment Box */}
            <div 
              onClick={() => setHasAcknowledged(!hasAcknowledged)}
              className="flex items-start gap-3 p-1 cursor-pointer"
            >
              <input 
                type="checkbox"
                required
                checked={hasAcknowledged}
                onChange={() => setHasAcknowledged(!hasAcknowledged)}
                className="mt-1 h-3.5 w-3.5 rounded-sm accent-violet-600 cursor-pointer"
              />
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                I acknowledge that my report will be processed to review this concern, as described in the{' '}
                <a href="#" className="text-violet-600 dark:text-violet-400 hover:underline inline-flex" onClick={(e) => e.stopPropagation()}>Privacy Notice</a>.
                I have not included passwords, secret keys, or unnecessary sensitive data.
              </p>
            </div>

            {/* Action Buttons */}
            <button 
              type="submit"
              disabled={!hasAcknowledged}
              className={`w-full py-3.5 text-center text-sm font-bold rounded-xl transition-all shadow-md ${
                hasAcknowledged 
                  ? 'bg-violet-600 hover:bg-violet-700 text-white cursor-pointer hover:-translate-y-0.5' 
                  : 'bg-zinc-200 dark:bg-gray-800 text-zinc-400 cursor-not-allowed'
              }`}
            >
              Submit report
            </button>

            <span className="text-[11px] text-center text-zinc-400 dark:text-zinc-500 leading-relaxed px-4">
              You&apos;ll receive a reference ID and clear next steps. No response-time guarantees are made.
            </span>

          </div>
        </form>

        {/* --- RIGHT HAND INSTRUCTION & ANCHOR SIDEBAR --- */}
        <div 
          className={`lg:col-span-5 flex flex-col gap-8 transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-widest uppercase">
              SAFE EVIDENCE GUIDANCE
            </span>

            {/* Guidance Block: Do include */}
            <div className="p-6 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-950/40 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <Check className="w-4 h-4 stroke-[3px]" />
                </div>
                <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400">Do include</h3>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-emerald-800/95 dark:text-emerald-300 list-disc pl-5 leading-relaxed">
                <li>A brief timeline and the affected page or feature</li>
                <li>The account or workspace involved</li>
                <li>Steps to reproduce the issue</li>
                <li>Screenshots with sensitive data removed</li>
              </ul>
            </div>

            {/* Guidance Block: Do not include */}
            <div className="p-6 bg-red-50/50 dark:bg-rose-950/10 border border-rose-100/50 dark:border-rose-950/40 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 rounded-lg">
                  <X className="w-4 h-4 stroke-[3px]" />
                </div>
                <h3 className="text-sm font-bold text-red-700 dark:text-red-400">Do not include</h3>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-red-800 dark:text-rose-300 list-disc pl-5 leading-relaxed">
                <li>Passwords, private keys, or access tokens</li>
                <li>Full payment card details</li>
                <li>Unnecessary personal data</li>
                <li>Confidential third-party data</li>
              </ul>
            </div>
          </div>

          {/* Graphical placeholder block */}
          <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden bg-slate-950 dark:bg-black/40 border border-transparent dark:border-gray-800 shadow-lg">
            <img 
              className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105" 
              src= "/report-concern/image 132.png" 
              alt="System visualization" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}