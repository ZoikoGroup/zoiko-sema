import React from 'react';

const BrowseByProduct = () => {
    const products = [
        { title: 'Meetings', icon: 'icon-29.svg' },
        { title: 'Workspace', icon: 'icon-42.svg' },
        { title: 'AI', icon: 'icon-41.svg' },
        { title: 'Administration', icon: 'icon-44.svg' },
        { title: 'Security', icon: 'icon-34.svg' },
        { title: 'Integrations', icon: 'icon-45.svg' },
        { title: 'Analytics', icon: 'icon-38.svg' }
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
                        <div key={index} className="flex-1 min-w-[140px] p-7 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer flex flex-col justify-center items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex justify-center items-center p-2.5">
                                <img src={`/guides-and-Tutorials/${product.icon}`} alt={product.title} className="w-7 h-7 object-contain" />
                            </div>
                            <div className="flex flex-col justify-start items-center px-1">
                                <span className="text-center text-slate-900 text-[15px] font-semibold tracking-tight">{product.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowseByProduct;

