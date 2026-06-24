import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductModeration() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
      

<div className="w-full flex flex-col">



<main className="flex-1  flex flex-col">



<div className="flex-1 overflow-y-auto custom-scrollbar p-container-padding space-y-6">

<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<div className="flex justify-between items-start mb-2">
<p className="text-label-md font-label-md text-on-surface-variant">Pending Review</p>
<span className="material-symbols-outlined text-primary text-[20px]">pending_actions</span>
</div>
<h2 className="text-display-sm font-display-sm text-on-surface">1,284</h2>
<div className="flex items-center gap-1 mt-2 text-error text-[12px] font-bold">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
<span>+12% vs yesterday</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<div className="flex justify-between items-start mb-2">
<p className="text-label-md font-label-md text-on-surface-variant">AI Safety Alerts</p>
<span className="material-symbols-outlined text-tertiary text-[20px]">auto_awesome</span>
</div>
<h2 className="text-display-sm font-display-sm text-on-surface">42</h2>
<div className="flex items-center gap-1 mt-2 text-primary text-[12px] font-bold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>84% Auto-triaged</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<div className="flex justify-between items-start mb-2">
<p className="text-label-md font-label-md text-on-surface-variant">Copyright Flags</p>
<span className="material-symbols-outlined text-error text-[20px]">copyright</span>
</div>
<h2 className="text-display-sm font-display-sm text-on-surface">15</h2>
<div className="flex items-center gap-1 mt-2 text-on-surface-variant text-[12px] font-bold">
<span>Requires manual check</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl shadow-sm cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<div className="flex justify-between items-start mb-2">
<p className="text-label-md font-label-md text-on-surface-variant">Avg. Response Time</p>
<span className="material-symbols-outlined text-secondary text-[20px]">timer</span>
</div>
<h2 className="text-display-sm font-display-sm text-on-surface">4.2m</h2>
<div className="flex items-center gap-1 mt-2 text-primary text-[12px] font-bold">
<span className="material-symbols-outlined text-[14px]">trending_down</span>
<span>-18% improvement</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col h-full min-h-[600px] cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>

<div className="p-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-low/50">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-on-surface-variant text-label-md">
<input className="w-4 h-4 rounded text-primary border-outline-variant focus:ring-primary" type="checkbox" />
<span className="font-semibold">Select All</span>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<div className="flex gap-2">
<button className="px-3 py-1 bg-surface-container-high hover:bg-primary-container/20 text-on-surface-variant text-label-md rounded border border-outline-variant transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">filter_alt</span>
                                    Filter
                                </button>
<button className="px-3 py-1 bg-surface-container-high hover:bg-primary-container/20 text-on-surface-variant text-label-md rounded border border-outline-variant transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">sort</span>
                                    Sort: Oldest
                                </button>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-label-md text-on-surface-variant mr-2">Bulk Actions:</span>
<button className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 rounded text-label-md font-bold transition-all">Approve Selected</button>
<button className="bg-error/10 text-error hover:bg-error/20 px-3 py-1 rounded text-label-md font-bold transition-all">Reject Selected</button>
</div>
</div>

<div className="flex-1 overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead className="sticky top-0 bg-surface-container-low text-on-surface-variant text-label-md z-10">
<tr>
<th className="p-4 w-12"><input className="w-4 h-4 rounded text-primary border-outline-variant" type="checkbox" /></th>
<th className="p-4 font-bold border-b border-outline-variant">Product & Seller</th>
<th className="p-4 font-bold border-b border-outline-variant">Category</th>
<th className="p-4 font-bold border-b border-outline-variant text-center">Safety Score</th>
<th className="p-4 font-bold border-b border-outline-variant">Flags</th>
<th className="p-4 font-bold border-b border-outline-variant">Status</th>
<th className="p-4 font-bold border-b border-outline-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant text-body-sm">

<tr className="row-hover hover:bg-surface-container-high/50 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<td className="p-4"><input className="w-4 h-4 rounded text-primary border-outline-variant" type="checkbox" /></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A high-end futuristic sneaker with neon highlights, professional studio product photography, clean white background, sharp focus, vibrant blue and silver tones, contemporary streetwear aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4K1DPW-L8-M8i40dfo0dHq5Ial_ty8QDnmvEVmyE6jeP0Qch9bAhDD_zHJcKlhpRSIDh5UrpT1oC1WUCBnW0A_l1K62iz5xgce46EEvRdxmx66PbaEMnNx4-vUYTEWqq3jby8py7VeTAo8ekVfkQB9Ghd-4G2e3seIxAHW7Bry_iqDaRDMKaGWszeHw4yJ53kS8VDycgcyTsxUDwuokFRwUJArWRSez5Ao6vAPPr5oLDmtaGaJfpz9FHg60iAYnMBev5gYke8S7qT" />
</div>
<div>
<p className="font-bold text-on-surface">Nova Runner X1</p>
<p className="text-[11px] text-on-surface-variant">Seller: HyperGear Co.</p>
</div>
</div>
</td>
<td className="p-4">Footwear / Sport</td>
<td className="p-4 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary/20 text-primary font-bold bg-primary/5">
                                            98
                                        </div>
</td>
<td className="p-4">
<div className="flex gap-1 flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold">Verified Seller</span>
</div>
</td>
<td className="p-4">
<span className="flex items-center gap-1.5 text-primary">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                            Pending Review
                                        </span>
</td>
<td className="p-4 text-right">
<div className="action-buttons flex justify-end gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-sm hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">check</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-error text-on-error shadow-sm hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant shadow-sm hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="row-hover hover:bg-surface-container-high/50 transition-colors group bg-error/5 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<td className="p-4"><input className="w-4 h-4 rounded text-primary border-outline-variant" type="checkbox" /></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A designer luxury leather handbag with a prominent logo, studio lighting, soft shadows, high-end fashion photography, rich textures, deep brown and gold color palette, minimalist setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC1hC-WRXLtSAYge6sR6tRIHbJd4PCf8gn_anUhN2H_B4WH4EgcaB0bRABrQkTFmyj4LUKo1qRaKSOwWQdDQ9J9mzvXM6EwHLT69aAlT59oV3Sjv604jg8DVsqIxAVakHG221cb0Vjz-vQWTINpJa-RKk_IusVgSYkzjAeFzTK_w2bVwc29JtjjUXy9DCAHPWOZoeXm_fUlzTfiN97lYXBm0kJGz5T5MNcldUW2QjTulOmiGILKlcd6p6DClz_hzw-owEOJJdtCnFy" />
</div>
<div>
<p className="font-bold text-on-surface">Luxe Carry-All Pro</p>
<p className="text-[11px] text-on-surface-variant">Seller: BrandClone_Global</p>
</div>
</div>
</td>
<td className="p-4">Accessories / Luxury</td>
<td className="p-4 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-error text-error font-bold bg-error/10">
                                            12
                                        </div>
</td>
<td className="p-4">
<div className="flex gap-1 flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-error/10 text-error text-[10px] font-bold">Copyright Risk</span>
<span className="px-2 py-0.5 rounded-full bg-error/10 text-error text-[10px] font-bold">Duplicate IP</span>
</div>
</td>
<td className="p-4">
<span className="flex items-center gap-1.5 text-error font-bold">
<span className="material-symbols-outlined text-[16px]">priority_high</span>
                                            High Risk
                                        </span>
</td>
<td className="p-4 text-right">
<div className="action-buttons flex justify-end gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-sm hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">check</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-error text-on-error shadow-sm hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant shadow-sm hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="row-hover hover:bg-surface-container-high/50 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<td className="p-4"><input className="w-4 h-4 rounded text-primary border-outline-variant" type="checkbox" /></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A modern minimalist coffee machine with wood accents, kitchen counter setting, soft morning sunlight, photorealistic render, warm tones, high-end lifestyle photography, clear details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs_dHVbqy3ySfMwVj8fALRkr2gn8uel4UaoQpAvyFW_85tscRB0NQ46a6CoEXAdTvpfyWpU2JeV7B-G5zIQdXuQpk2vnD7jU03tuVjqCHlPY1WWO20Xiyt6WSFhssOHbMfCxylT4xrT_TxxLGOuDDk0HE-JYo0MGKnSHuBwqWqPHeVg09Yc6XV_OsnixWQ2h916PnJRsYY2bqRbshePEDXLaiSjt0jQx1lqOIQ3r9C5Hym_Bnv2l7VLpT38EPzK0CdgFe3rkN8q6U-" />
</div>
<div>
<p className="font-bold text-on-surface">BrewMaster Elite</p>
<p className="text-[11px] text-on-surface-variant">Seller: KitchenWizards</p>
</div>
</div>
</td>
<td className="p-4">Home / Appliances</td>
<td className="p-4 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary/20 text-primary font-bold bg-primary/5">
                                            82
                                        </div>
</td>
<td className="p-4">
<div className="flex gap-1 flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold">New Seller</span>
</div>
</td>
<td className="p-4">
<span className="flex items-center gap-1.5 text-primary">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                                            Pending Review
                                        </span>
</td>
<td className="p-4 text-right">
<div className="action-buttons flex justify-end gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-sm hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">check</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-error text-on-error shadow-sm hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant shadow-sm hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="row-hover hover:bg-surface-container-high/50 transition-colors group bg-tertiary-container/5 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<td className="p-4"><input className="w-4 h-4 rounded text-primary border-outline-variant" type="checkbox" /></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high rounded overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A collection of generic glass bottles with no labels, clinical setting, bright lighting, high-key photography, medical aesthetic, clean and sterile environment, neutral palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0l9fsKlAkLpXZxiNtAntzPAq4zkrqIBKqIt8ICrty7ecsJAKkLN_aMvLFEjO5dqTQ9qsW2SY7oOuBbwjOFajcsYIMxmfep8GvjEgyYmhL83ca2q3k0i33hYjjrDlIlEz7Ihsg8VDa51SLmlKSYZO1uOFNVqE7hfHn4FWBFKKZYtOAIjVfFlSCJlCwrWqz5VVSB9XJMgDg_9gOpXIFeP8yd1qRGcprcZnxn-UktHVjSg1VvP2Y4RU1KlnRVyduiVkRilc3YBQSI1za" />
</div>
<div>
<p className="font-bold text-on-surface">Secret Youth Serum</p>
<p className="text-[11px] text-on-surface-variant">Seller: HealthSolutions_99</p>
</div>
</div>
</td>
<td className="p-4">Beauty / Health</td>
<td className="p-4 text-center">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-tertiary text-tertiary font-bold bg-tertiary/10">
                                            45
                                        </div>
</td>
<td className="p-4">
<div className="flex gap-1 flex-wrap">
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">Banned Keywords</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">Unverified Claims</span>
</div>
</td>
<td className="p-4">
<span className="flex items-center gap-1.5 text-tertiary font-bold">
<span className="material-symbols-outlined text-[16px]">warning</span>
                                            Flagged
                                        </span>
</td>
<td className="p-4 text-right">
<div className="action-buttons flex justify-end gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-sm hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">check</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-error text-on-error shadow-sm hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant shadow-sm hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-outline-variant bg-surface-container-low/30 flex items-center justify-between">
<p className="text-label-md text-on-surface-variant">Showing <span className="font-bold">1-25</span> of <span className="font-bold">1,284</span> pending items</p>
<div className="flex items-center gap-1">
<button className="p-1.5 border border-outline-variant rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="px-3 py-1 bg-primary text-on-primary text-label-md rounded font-bold">1</button>
<button className="px-3 py-1 hover:bg-surface-container text-label-md rounded transition-colors">2</button>
<button className="px-3 py-1 hover:bg-surface-container text-label-md rounded transition-colors">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="px-3 py-1 hover:bg-surface-container text-label-md rounded transition-colors">52</button>
<button className="p-1.5 border border-outline-variant rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary">psychology</span>
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Queue Intelligence</h3>
</div>
<div className="flex gap-6 items-center">
<div className="flex-1">
<p className="text-body-sm text-on-surface-variant mb-4">AI Confidence scores suggest auto-approving 450 items based on seller reputation and image recognition matching. Estimated time savings: 2.5 hours.</p>
<button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-bold text-label-md hover:brightness-95 transition-all flex items-center gap-2">
                                    Run Auto-Approval Wizard
                                    <span className="material-symbols-outlined text-[16px]">bolt</span>
</button>
</div>
<div className="w-32 h-32 flex-shrink-0 relative">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle className="text-surface-container-high" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-primary transition-all duration-1000" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="62.8" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-headline-sm font-bold">75%</span>
<span className="text-[9px] uppercase font-bold text-on-surface-variant">Efficiency</span>
</div>
</div>
</div>
</div>
<div className="bg-primary text-on-primary rounded-xl p-5 shadow-lg flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined">rocket_launch</span>
<h3 className="font-bold text-label-md uppercase tracking-widest">Moderation Streak</h3>
</div>
<p className="text-display-sm font-display-sm">124 Items</p>
<p className="text-body-sm opacity-80">Moderated in the last hour</p>
</div>
<button className="relative z-10 w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 rounded font-bold text-label-md transition-all mt-4">
                            View Leaderboard
                        </button>

<div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</main>
</div>


<div className="fixed bottom-6 right-6 bg-surface-container-highest border border-outline shadow-xl rounded-lg p-3 text-[11px] opacity-0 translate-y-4 transition-all duration-300 pointer-events-none z-50 cursor-pointer" id="shortcut-hint" onClick={(e) => { e.preventDefault(); navigate("/marketplace/products/PROD-1029"); }}>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between gap-4"><span className="font-bold">Approve</span> <span className="bg-surface-container border px-1 rounded">A</span></div>
<div className="flex justify-between gap-4"><span className="font-bold">Reject</span> <span className="bg-surface-container border px-1 rounded">R</span></div>
<div className="flex justify-between gap-4"><span className="font-bold">Next</span> <span className="bg-surface-container border px-1 rounded">↓</span></div>
</div>
</div>


    </div>
  );
}
