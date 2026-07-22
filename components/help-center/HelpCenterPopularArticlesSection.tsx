export function HelpCenterPopularArticlesSection() {
  const articles = [
    {
      category: "Integrations",
      subcategory: "Admin",
      title: "Setting up Okta SSO for Enterprise",
      description: "Learn how to configure Single Sign-On using Okta for your entire organization's...",
      updated: "Updated 2 days ago",
      href: "#"
    },
    {
      category: "ZoikoTime",
      subcategory: "User",
      title: "Automating Your Daily Stand-up",
      description: "Configure ZoikoTime to automatically prompt and collect daily status updates...",
      updated: "Updated 1 week ago",
      href: "#"
    },
    {
      category: "Security",
      subcategory: "Privacy",
      title: "Understanding Data Encryption",
      description: "A comprehensive overview of how Zoiko Sema handles end-to-end encryption for...",
      updated: "Updated yesterday",
      href: "#"
    }
  ];

  return (
    <div className="w-full bg-violet-50 flex justify-center py-16 overflow-hidden">
      <div className="w-full max-w-[1280px] px-8 lg:px-12 flex flex-col items-start gap-12">
        <div className="w-full flex flex-col justify-start items-start">
          <h2 className="text-zinc-900 text-3xl font-semibold font-sans leading-10">
            Popular Articles
          </h2>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div 
              key={idx} 
              className="w-full bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-neutral-300/50 flex flex-col overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6 flex flex-col gap-3 h-full">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="px-2 py-0.5 bg-blue-600/10 rounded-sm">
                    <span className="text-sky-700 text-base font-normal font-sans leading-6">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-zinc-700 text-base font-normal font-sans leading-6">
                      • {article.subcategory}
                    </span>
                  </div>
                </div>
                
                <div className="pt-1">
                  <h3 className="text-zinc-900 text-2xl font-semibold font-sans leading-8">
                    {article.title}
                  </h3>
                </div>
                
                <div className="pb-3 flex-grow">
                  <p className="text-zinc-700 text-base font-normal font-sans leading-6">
                    {article.description}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-neutral-300 flex justify-between items-center mt-auto">
                  <div>
                    <span className="text-zinc-700 text-base font-normal font-sans leading-6">
                      {article.updated}
                    </span>
                  </div>
                  <div>
                    <a href={article.href} className="text-sky-700 text-base font-bold font-sans leading-6 hover:underline">
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
