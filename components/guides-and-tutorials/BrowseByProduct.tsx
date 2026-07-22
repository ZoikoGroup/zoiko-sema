import React from 'react';
import Link from 'next/link';

const BrowseByProduct = () => {
    const products = [
        { title: 'Meetings', icon: 'icon-29.svg', href: '/video-meetings' },
        { title: 'Workspace', icon: 'icon-42.svg', href: '/channels-spaces' },
        { title: 'AI', icon: 'icon-41.svg', href: '/sema-ai' },
        { title: 'Administration', icon: 'icon-44.svg', href: '/admin-console' },
        { title: 'Security', icon: 'icon-34.svg', href: '/security-center' },
        { title: 'Integrations', icon: 'icon-45.svg', href: '/integration-scalability' },
        { title: 'Analytics', icon: 'icon-38.svg', href: '/insights-analytics' }
    ];

    return (
        <div className="w-full bg-violet-50/50 pt-20 pb-12 px-4 md:px-8 lg:px-10 flex justify-center font-sans">
            <div className="w-full max-w-7xl flex flex-col justify-start items-start gap-10">
                <div className="w-full flex justify-between items-end">
                    <div className="flex flex-col justify-start items-start gap-2">
                        <h2 className="text-slate-900 text-3xl font-semibold leading-10">Browse by Product</h2>
                        <p className="text-slate-600 text-base font-normal">Find specialized guides for every part of the Zoiko Sema ecosystem.</p>
                    </div>
                    <div className="flex justify-start items-center gap-1.5 cursor-pointer group">
                        <span className="text-indigo-600 group-hover:text-indigo-700 text-sm font-semibold tracking-tight transition-colors">View All</span>
                        <img src="/guides-and-Tutorials/icon-27.svg" alt="View All" className="w-4 h-4 object-contain group-hover:translate-x-0.5 transition-transform" />
                    </div>
                </div>
                <div className="self-stretch flex justify-start items-stretch gap-4 overflow-x-auto pb-4">
                    {products.map((product, index) => (
                        <Link key={index} href={product.href} className="flex-1 min-w-[150px] p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-center items-center gap-4">
                            <div className="flex flex-col justify-start items-center">
                                <img src={`/guides-and-Tutorials/${product.icon}`} alt={product.title} className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col justify-start items-center px-1">
                                <span className="text-center text-slate-900 text-[15px] font-semibold tracking-tight">{product.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowseByProduct;
