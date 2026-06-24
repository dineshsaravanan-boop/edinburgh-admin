import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SellerDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface">
      





<main className="mt-14 p-container-padding max-w-[1600px]">

<div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
<div className="flex-shrink-0 relative">
<img className="w-32 h-32 rounded-xl border border-outline-variant object-cover shadow-sm" data-alt="A sophisticated luxury brand logo for 'Vanguard Collective', featuring a minimalist abstract geometric emblem in silver and slate gray. The logo is displayed on a clean white textured background, suggesting a premium e-commerce vendor identity. The lighting is crisp and even, highlighting the sleek lines of the brand mark." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBetfRsQFuVmlRyPGEQJDgqk0eSJuWsqQeMPhANL-eQUkyqg6FzdHV6h5DYHXAb4VaiYZW3AlJYZ5vIz9zXaSA82Kq01pT_rSObWekJG0szHbaV9A47f41Ru0fbJIOcC2KivANMLbDA6a6pRprnp6Gcrg35ZK36jGK8o_5fJTmCFtBFrgdu5HaGlpcYE5ZCO2hu-JRTljiqcRg_vsTQJPn4DlhmcoWXhmPIrrpbjX_3mo8wigkmn8F7TGQUKMKq0ee7glLysW4_moZv" />
<div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-4 border-surface" title="Verified Seller">
<span className="material-symbols-outlined text-[16px] block">verified</span>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<h2 className="font-display-sm text-display-sm text-on-surface">Vanguard Collective</h2>
<span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-label-md text-[11px] uppercase font-bold tracking-wide">Enterprise Tier</span>
</div>
<p className="text-on-surface-variant font-body-md max-w-2xl mb-4">
                    High-end architectural hardware and premium home automation peripherals. Operating since August 2021 with focus on global fulfillment.
                </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Seller ID</p>
<p className="font-code-sm text-on-surface">VC-9921-XPR</p>
</div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Compliance Status</p>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<p className="font-label-md text-on-surface">Fully Compliant</p>
</div>
</div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Risk Score</p>
<p className="font-label-md text-on-surface">12/100 <span className="text-green-600">(Very Low)</span></p>
</div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Last Payout</p>
<p className="font-label-md text-on-surface">$12,440.00 <span className="text-on-surface-variant text-[10px]">2 days ago</span></p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-gutter mb-8">

<div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Revenue Forecast</h3>
<p className="text-on-surface-variant font-body-sm">Trailing 30-day performance vs. previous period</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 bg-surface-container rounded font-label-md text-on-surface">30D</button>
<button className="px-3 py-1 text-on-surface-variant hover:bg-surface-variant/30 rounded font-label-md">90D</button>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-1 mt-4">
<div className="w-full bg-primary/10 h-1/2 rounded-t hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary/10 h-2/3 rounded-t hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary h-3/4 rounded-t"></div>
<div className="w-full bg-primary/10 h-1/2 rounded-t hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary/10 h-3/5 rounded-t hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary h-full rounded-t"></div>
<div className="w-full bg-primary/10 h-2/3 rounded-t hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary/10 h-3/4 rounded-t hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary/10 h-1/2 rounded-t hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary h-4/5 rounded-t"></div>
<div className="w-full bg-primary/10 h-1/2 rounded-t hover:bg-primary/30 transition-colors"></div>
<div className="w-full bg-primary/10 h-2/3 rounded-t hover:bg-primary/30 transition-colors"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] text-on-surface-variant uppercase tracking-widest border-t border-outline-variant pt-4">
<span>Aug 01</span>
<span>Aug 10</span>
<span>Aug 20</span>
<span>Aug 30</span>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<div className="glass-card rounded-xl p-5 flex-1">
<h3 className="font-label-md text-on-surface uppercase tracking-widest mb-4 flex items-center justify-between">
                        Compliance Check
                        <span className="material-symbols-outlined text-green-600 text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</h3>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-outline-variant pb-2">
<span className="text-body-sm text-on-surface-variant">Identity Verification</span>
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold">PASSED</span>
</div>
<div className="flex items-center justify-between border-b border-outline-variant pb-2">
<span className="text-body-sm text-on-surface-variant">Banking Confirmation</span>
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold">VERIFIED</span>
</div>
<div className="flex items-center justify-between border-b border-outline-variant pb-2">
<span className="text-body-sm text-on-surface-variant">Tax Documentation (W-8BEN)</span>
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold">CURRENT</span>
</div>
<div className="flex items-center justify-between pb-2">
<span className="text-body-sm text-on-surface-variant">AML Background Check</span>
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold">CLEAR</span>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-5 bg-surface-container-low border-none shadow-sm">
<h3 className="font-label-md text-on-surface uppercase tracking-widest mb-2">Performance Summary</h3>
<div className="flex items-end justify-between">
<div>
<p className="font-display-sm text-display-sm text-on-surface">$84,221</p>
<p className="text-body-sm text-green-600 font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +14.2% this month
                            </p>
</div>
<div className="text-right">
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Global Rank</p>
<p className="font-headline-sm text-on-surface">#442</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-8">

<div className="glass-card rounded-xl overflow-hidden flex flex-col">
<div className="p-5 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm">Product Preview</h3>
<button className="text-primary font-label-md hover:underline">View Full Catalog</button>
</div>
<div className="p-4 space-y-3 flex-1 overflow-auto max-h-[400px] custom-scrollbar">

<div className="flex gap-4 p-2 hover:bg-surface-variant/20 rounded-lg transition-colors group">
<img className="w-16 h-16 rounded object-cover" data-alt="A close-up studio shot of a high-end, minimalist matte black smart door lock. The metal surface has a fine texture, and the electronic keypad glows with a subtle blue backlight. The product is shot against a soft grey background with dramatic, sharp shadows emphasizing its industrial design quality. The image conveys luxury, security, and cutting-edge technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0I-IGB5-XHFhdO3ZiKF7QHtCoch01s7OEA6jd9usZns4wbzLlWo7Ny2L-ROA4d-513LT1LU8a_s0rMQDVHMK17u8EW9vcAn8AuE2pZ-KrvZO1gFCh96EfgR9C457_0zYJUHMKc_1U-36wDQ_bXu99ReMppU3hCtcMKRBwLTMErv59tZdJ-xCPpnEUjfAGEa46EnkR7CzkJIoPgLxqzlfqIAEorvjQNggsTVN0Hq7aEg7eR3dKBSz_vlXn2d1IolF5XcJlqGHTxVrS" />
<div className="flex-1 min-w-0">
<p className="font-body-md text-on-surface font-semibold truncate">Linear Pro Smart Lock</p>
<p className="text-[12px] text-on-surface-variant">SKU: LP-99-BL</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-label-md text-on-surface font-bold">$299.00</span>
<span className="text-[11px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">Active</span>
</div>
</div>
<div className="text-right flex flex-col justify-center">
<p className="text-[11px] text-on-surface-variant">Stock</p>
<p className="font-label-md text-on-surface">1,240</p>
</div>
</div>

<div className="flex gap-4 p-2 hover:bg-surface-variant/20 rounded-lg transition-colors group">
<img className="w-16 h-16 rounded object-cover" data-alt="A premium industrial design interior light switch made of brushed aluminum. The toggle has a satisfying tactile look with precisely knurled edges. It is mounted on a pristine white wall, with soft architectural lighting from the side creating deep, sophisticated shadows. The aesthetic is extremely clean, high-end, and technical, aimed at architects and luxury home builders." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZsM6zdpOqkB4QdXebrPmc48dH9yhl8wqmBfMGoOsafbrvHSvRuOc-ZXJlw950u00w4BS504pD1nZ-my8nNwpquZotevtdDqXrgXNHoJa78yqEbYjjyqzvhfr1MdbKYidz50IrzFkaWt284oEHExRR1t8FwIUeD4NjqqK4wje72cyPeAErImwe2x7JnlgkJbuMXf7ei1xPgFS2ZNsRtZG70rVHvZvtb6wEx_iq5cugxrZZNKKLT4EAQJELYqC7gH2L9WiUBxLp5aeC" />
<div className="flex-1 min-w-0">
<p className="font-body-md text-on-surface font-semibold truncate">Aluminum Toggle Switch (3-Gang)</p>
<p className="text-[12px] text-on-surface-variant">SKU: AT-03-AL</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-label-md text-on-surface font-bold">$89.00</span>
<span className="text-[11px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">Active</span>
</div>
</div>
<div className="text-right flex flex-col justify-center">
<p className="text-[11px] text-on-surface-variant">Stock</p>
<p className="font-label-md text-on-surface">84</p>
</div>
</div>

<div className="flex gap-4 p-2 hover:bg-surface-variant/20 rounded-lg transition-colors group border-l-2 border-primary/20">
<img className="w-16 h-16 rounded object-cover" data-alt="A minimalist architectural faucet for a modern kitchen, featuring a gooseneck design and a matte charcoal finish. The product is displayed on a marble countertop with natural morning light streaming through a window, creating realistic reflections. The image highlights the fluid curves and professional-grade finish of the hardware in a high-density, expensive residential setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDExrVFvjUNj4lMYIJANu45nCflvsKDdZD0GiV_YFnE4-B7sZrhGdII1nhW8ym4uvvkJTf23y44cwEgwvPisd36Ln79tNsSM7nvQnKscG4vo2AmcicJaU4GPasCjaQbB_6j3FcvogagQXcAuf2ZuBfCVafMECKP7nmK-3yJaKiunv0GIlMK9xBAHcXopo4VvtzMoxMUDlJEuuhoVty8o7XJ_LGg3l5gxkb5cT0gCPbiSyViH9lzlcYTQj-7KYVtLjqBUrDTfMW9zdHF" />
<div className="flex-1 min-w-0">
<p className="font-body-md text-on-surface font-semibold truncate">Obsidian Kitchen Faucet</p>
<p className="text-[12px] text-on-surface-variant">SKU: OK-12-MK</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-label-md text-on-surface font-bold">$450.00</span>
<span className="text-[11px] text-on-tertiary-fixed-variant bg-tertiary-fixed px-1.5 py-0.5 rounded border border-tertiary-container/20">Low Stock</span>
</div>
</div>
<div className="text-right flex flex-col justify-center">
<p className="text-[11px] text-error font-medium">Stock</p>
<p className="font-label-md text-error">12</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden flex flex-col">
<div className="p-5 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm">Payout History</h3>
<button className="text-on-surface-variant flex items-center gap-1 font-label-md hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                    </button>
</div>
<div className="overflow-x-auto flex-1">
<table className="w-full text-left font-body-sm">
<thead className="bg-surface-container-low text-on-surface-variant border-b border-outline-variant">
<tr>
<th className="px-4 py-3 font-medium uppercase text-[10px] tracking-widest">Date</th>
<th className="px-4 py-3 font-medium uppercase text-[10px] tracking-widest">Method</th>
<th className="px-4 py-3 font-medium uppercase text-[10px] tracking-widest">Status</th>
<th className="px-4 py-3 font-medium uppercase text-[10px] tracking-widest text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-variant/10 transition-colors">
<td className="px-4 py-3 text-on-surface">Aug 24, 2023</td>
<td className="px-4 py-3 text-on-surface-variant">Wire Transfer</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase">Completed</span>
</td>
<td className="px-4 py-3 text-right font-bold">$12,440.00</td>
</tr>
<tr className="hover:bg-surface-variant/10 transition-colors">
<td className="px-4 py-3 text-on-surface">Aug 10, 2023</td>
<td className="px-4 py-3 text-on-surface-variant">Wire Transfer</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase">Completed</span>
</td>
<td className="px-4 py-3 text-right font-bold">$15,820.00</td>
</tr>
<tr className="hover:bg-surface-variant/10 transition-colors">
<td className="px-4 py-3 text-on-surface">Jul 27, 2023</td>
<td className="px-4 py-3 text-on-surface-variant">Wire Transfer</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase">Completed</span>
</td>
<td className="px-4 py-3 text-right font-bold">$9,112.50</td>
</tr>
<tr className="hover:bg-surface-variant/10 transition-colors">
<td className="px-4 py-3 text-on-surface font-semibold">Sep 07, 2023</td>
<td className="px-4 py-3 text-on-surface-variant">Wire Transfer</td>
<td className="px-4 py-3">
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Processing</span>
</td>
<td className="px-4 py-3 text-right font-bold">$11,200.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 bg-surface-container-lowest">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-on-surface">gavel</span>
<h3 className="font-headline-sm text-headline-sm">Internal Moderation Logs</h3>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-6">
<div className="flex gap-4 border-l-2 border-outline-variant pl-4 py-1">
<div className="flex-shrink-0">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">person</span>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<span className="font-label-md text-on-surface">Senior Mod: Sarah J.</span>
<span className="text-[11px] text-on-surface-variant">Oct 12, 2023 • 14:22</span>
</div>
<p className="text-body-md text-on-surface-variant">
                                Conducted routine shop audit. Inventory transparency is excellent. No customer complaints regarding shipping delays in the last 6 months. High satisfaction rating verified.
                            </p>
</div>
</div>
<div className="flex gap-4 border-l-2 border-outline-variant pl-4 py-1">
<div className="flex-shrink-0">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">gavel</span>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<span className="font-label-md text-on-surface">System Auto-Moderator</span>
<span className="text-[11px] text-on-surface-variant">Sep 05, 2023 • 09:10</span>
</div>
<p className="text-body-md text-on-surface-variant">
                                Seller upgraded to Enterprise Tier. Credit line increased to $100k. Identity re-verification succeeded via automated biometric flow.
                            </p>
</div>
</div>
<div className="mt-4">
<textarea className="w-full bg-surface-container border border-outline-variant rounded-lg p-3 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none" placeholder="Add a private moderation note..." rows={3}></textarea>
<div className="flex justify-end mt-2">
<button className="px-4 py-1.5 bg-on-surface text-surface rounded-lg font-label-md hover:bg-on-surface-variant transition-colors">Post Note</button>
</div>
</div>
</div>
<div className="space-y-6">
<div className="p-4 bg-surface rounded-lg border border-outline-variant">
<h4 className="font-label-md text-on-surface-variant uppercase tracking-widest mb-3">Risk Assessment</h4>
<div className="relative pt-1">
<div className="flex mb-2 items-center justify-between">
<div>
<span className="text-[10px] font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                                        Very Safe
                                    </span>
</div>
<div className="text-right">
<span className="text-[12px] font-semibold inline-block text-on-surface">
                                        12%
                                    </span>
</div>
</div>
<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-surface-variant">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500" style={{"width":"12%"}}></div>
</div>
</div>
<ul className="space-y-2 mt-4">
<li className="flex items-start gap-2 text-[12px]">
<span className="material-symbols-outlined text-green-600 text-[16px]">check</span>
<span className="text-on-surface-variant">No chargeback disputes in 12 months</span>
</li>
<li className="flex items-start gap-2 text-[12px]">
<span className="material-symbols-outlined text-green-600 text-[16px]">check</span>
<span className="text-on-surface-variant">High fulfillment speed (avg 18h)</span>
</li>
<li className="flex items-start gap-2 text-[12px]">
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">info</span>
<span className="text-on-surface-variant">High value inventory (low volume)</span>
</li>
</ul>
</div>
<button className="w-full py-2 bg-error-container text-on-error-container font-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-error hover:text-on-error transition-all active:scale-95">
<span className="material-symbols-outlined text-[18px]">block</span>
                        Suspend Seller Account
                    </button>
</div>
</div>
</div>
</main>



    </div>
  );
}
