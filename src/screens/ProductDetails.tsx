import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md">
      
<div className="w-full flex flex-col">



<main className="flex-1  flex flex-col  overflow-hidden">



<div className="flex-1 overflow-y-auto p-gutter custom-scrollbar space-y-6">

<div className="flex justify-between items-end">
<div className="space-y-1">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase tracking-wider">Active</span>
<span className="text-on-surface-variant text-body-sm font-code-sm">ID: PRD-9921-XQ</span>
</div>
<h1 className="font-display-sm text-display-sm">Luminal Pro X7 - Advanced Audio System</h1>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant hover:border-primary transition-colors rounded">
<span className="material-symbols-outlined text-[20px]">edit</span>
<span className="font-label-md">Edit</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant hover:border-primary transition-colors rounded">
<span className="material-symbols-outlined text-[20px]">visibility_off</span>
<span className="font-label-md">Delist</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant hover:border-primary transition-colors rounded">
<span className="material-symbols-outlined text-[20px]">star</span>
<span className="font-label-md">Feature</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-error-container text-on-error-container hover:bg-error transition-colors hover:text-on-error rounded">
<span className="material-symbols-outlined text-[20px]">flag</span>
<span className="font-label-md">Flag for Review</span>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-8 space-y-6">

<div className="grid grid-cols-4 gap-2 h-[420px]">
<div className="col-span-3 h-full rounded overflow-hidden border border-outline-variant relative group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-resolution, ultra-detailed professional studio photograph of a premium silver brushed-metal audio receiver. The lighting is sophisticated, utilizing dramatic rim lighting against a minimalist dark gray background to emphasize the precision manufacturing and sleek textures of the device." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUx-XmNKw73qFL4-QF8Yg85PgMHA-x778ntoZnMIVT8oleMVz9ee2QufUtIeUaF0sr9-l4RbWB9xrBVM3R58PVq3kajprefiLfRz3E857354cYp_ZXvhiLZxcwjuJLyUxX8h5gqEUjqViGEeXyqZso6sINsFFIovmiH4EPuydpqBVKoqtwzfWjnaLf7kWxPdOXuaxnansYVwq9s_Wr1GS2b3gL8S2rCTeLKgf9EYJ8fKgBJj2KOCysN7sdKv0n2d2O6R8oFnisEroh" />
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-white text-[10px] font-bold">4K RESOLUTION</span>
<span className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-white text-[10px] font-bold">RAW-UPLOAD</span>
</div>
</div>
<div className="col-span-1 grid grid-rows-3 gap-2">
<div className="rounded border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up detailed shot of the volume knob on a premium audio device, showcasing the intricate texture of the knurled metal and soft ambient reflection of indigo studio lights. Minimalist high-end tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIi5mz-7mbEXGmB3Ltpr64MmPvJ8nLiG1FCR6el5XLgGf8cyicsWQkGjensIzujwaqPEP18-d1luovdgNuqhxX1gvHpZnxLhHCr19wI9LK2AnfVjfNC2nwyOLQA3T3P9Lv17tSfPdc6ljoutROK72RQ2ZIQf_1m_83-dIjDU3CKfUKe_cyowkEDgWCciRHsTtHp7MOTHJLGGS9XJjRL7ddYyC9C0J24jz8QEyeShQ_5zpJM0jEww90Wag2N3mFGhjAZP8Qjoc8-s2T" />
</div>
<div className="rounded border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Rear view of professional audio equipment showing gold-plated connector ports and clean cable management. The scene is lit with soft white light, emphasizing the technical quality and clean industrial design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA1wkkHJ4PESlIVfilOlBF8GACBgACGftjURD_sVbVp2Ojdb2QfYtvPbIfNxLYXrhvcW-EakLOufH2J1yWcA8k-My_iI9xcWkIvLgkobefjbuTnki1HWfZg6BTWqO6X6OmolRfbip6JelTZQYhkG48ZVGjS2oyqGVSRJjlZzBPlsk95KJGl7R5EMCk0h4SGp1KloeGH0GPNJ5x206KwVzzcXMZnheU2gKo9iV7YQS4YdyUTxIxiRcN3HJQrkXE54KXg5Gn8Piul6Vo" />
</div>
<div className="rounded border border-outline-variant overflow-hidden bg-surface-container flex items-center justify-center relative cursor-pointer hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-primary text-3xl">add</span>
<span className="absolute bottom-2 text-[10px] font-bold text-on-surface-variant uppercase">View +12 More</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm">Pricing History (90 Days)</h3>
<div className="flex gap-4">
<div className="flex items-center gap-1">
<div className="w-3 h-3 bg-primary rounded-full"></div>
<span className="text-xs text-on-surface-variant">Market Price</span>
</div>
<div className="flex items-center gap-1">
<div className="w-3 h-3 bg-secondary rounded-full"></div>
<span className="text-xs text-on-surface-variant">Seller Ask</span>
</div>
</div>
</div>
<div className="h-48 w-full flex items-end justify-between gap-1">

<div className="w-full h-full flex items-end gap-1 px-2">
<div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[60%] rounded-t-sm" title="$1,240"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[65%] rounded-t-sm" title="$1,280"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[62%] rounded-t-sm" title="$1,260"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[75%] rounded-t-sm" title="$1,340"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[85%] rounded-t-sm" title="$1,420"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[80%] rounded-t-sm" title="$1,380"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[90%] rounded-t-sm" title="$1,450"></div>
<div className="flex-1 bg-primary/40 hover:bg-primary transition-colors h-[95%] rounded-t-sm" title="$1,499"></div>
<div className="flex-1 bg-primary hover:bg-primary transition-colors h-[92%] rounded-t-sm" title="$1,495 (Current)"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest border-t border-outline-variant pt-4">
<span>Sep 01</span>
<span>Oct 15</span>
<span>Nov 28</span>
</div>
</div>

<div className="grid grid-cols-3 gap-gutter">
<div className="bg-surface-container-lowest border border-outline-variant p-5 rounded space-y-4">
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Average Rating</span>
<div className="flex items-center gap-3">
<span className="text-4xl font-bold">4.8</span>
<div className="flex flex-col">
<div className="flex text-tertiary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>star_half</span>
</div>
<span className="text-[11px] text-on-surface-variant">1,248 verified reviews</span>
</div>
</div>
</div>
<div className="col-span-2 bg-surface-container-lowest border border-outline-variant p-5 rounded">
<div className="flex justify-between mb-4">
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Sentiment Analysis</span>
<span className="text-[10px] text-primary font-bold">AI POWERED</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<span className="w-16 text-[10px] font-bold text-on-surface-variant">POSITIVE</span>
<div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full w-[88%]"></div>
</div>
<span className="text-[11px] font-bold">88%</span>
</div>
<div className="flex items-center gap-3">
<span className="w-16 text-[10px] font-bold text-on-surface-variant">NEUTRAL</span>
<div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-outline rounded-full w-[9%]"></div>
</div>
<span className="text-[11px] font-bold">9%</span>
</div>
<div className="flex items-center gap-3">
<span className="w-16 text-[10px] font-bold text-on-surface-variant">NEGATIVE</span>
<div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-error rounded-full w-[3%]"></div>
</div>
<span className="text-[11px] font-bold">3%</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-4 space-y-6">

<div className="bg-surface-container border border-outline-variant rounded overflow-hidden">
<div className="bg-on-surface text-surface px-4 py-2 flex items-center justify-between">
<span className="font-label-md">System Metadata</span>
<span className="material-symbols-outlined text-[18px]">info</span>
</div>
<div className="p-4 space-y-4">
<div className="flex justify-between py-2 border-b border-outline-variant">
<span className="text-on-surface-variant text-body-sm font-semibold">SKU</span>
<span className="font-code-sm text-on-surface">LUM-PRO-X7-SLV</span>
</div>
<div className="flex justify-between py-2 border-b border-outline-variant">
<span className="text-on-surface-variant text-body-sm font-semibold">Category</span>
<span className="font-body-sm text-on-surface">Audio & Visual &gt; Pro Systems</span>
</div>
<div className="flex justify-between py-2 border-b border-outline-variant">
<span className="text-on-surface-variant text-body-sm font-semibold">Global ID</span>
<span className="font-code-sm text-on-surface">GUID-0912-33291-B</span>
</div>
<div className="space-y-2">
<span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">Tags</span>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-0.5 bg-surface text-on-surface-variant text-[10px] border border-outline-variant rounded">Hi-Fi</span>
<span className="px-2 py-0.5 bg-surface text-on-surface-variant text-[10px] border border-outline-variant rounded">Aluminum</span>
<span className="px-2 py-0.5 bg-surface text-on-surface-variant text-[10px] border border-outline-variant rounded">Wireless</span>
<span className="px-2 py-0.5 bg-surface text-on-surface-variant text-[10px] border border-outline-variant rounded">4K-Audio</span>
<span className="px-2 py-0.5 bg-surface text-on-surface-variant text-[10px] border border-outline-variant rounded">Premium</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-4 space-y-4">
<h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Seller Information</h4>
<div className="flex items-center gap-3">
<img className="w-12 h-12 rounded border border-outline-variant" data-alt="Professional logo for a high-end electronics retail company named Apex Audio. Minimalist, geometric logo design using primary blue and white colors, corporate tech style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI0buLqkgGGQRvtqZaSUstdhmV6riBVjqOcp4Ch-fi-hD1L3kszYoZlHu7fKAKJN-9Qe9Oz4mkBPIV7RoSsl8KVBTKfmHNYMKKNpasHkQtePZlR0NT-xKr5S27ITolORXHhmsbSmoBeHaE28_iEtWbmRn6YnOT-Ps6MXkR4fpNkoMgyMA5ZTrGc7SbuZmb6dSCCTBPU61P8CpVXBdsDiGrUEI0Ee8mWaHfo5Se7AXPcyVBWZSpulFBPpiZ-HP-k0kU_-hgI2in9CFQ" />
<div className="flex-1">
<p className="font-bold text-on-surface">Apex Audio Solutions</p>
<p className="text-[11px] text-on-surface-variant">Certified Vendor since 2019</p>
</div>
<span className="material-symbols-outlined text-primary">verified</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-surface p-2 rounded border border-outline-variant text-center">
<p className="text-[10px] font-bold text-on-surface-variant">RETURN RATE</p>
<p className="text-lg font-bold text-primary">0.4%</p>
</div>
<div className="bg-surface p-2 rounded border border-outline-variant text-center">
<p className="text-[10px] font-bold text-on-surface-variant">TRUST SCORE</p>
<p className="text-lg font-bold text-tertiary">98/100</p>
</div>
</div>
<button className="w-full py-2 border border-primary text-primary font-bold rounded text-xs hover:bg-primary hover:text-white transition-colors">
                                Contact Seller Account Manager
                            </button>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
<div className="p-4 border-b border-outline-variant flex justify-between items-center bg-error-container/5">
<h4 className="text-[10px] font-bold text-error uppercase tracking-widest">Moderation History</h4>
<span className="px-2 py-0.5 bg-error/10 text-error text-[9px] font-extrabold rounded">3 ALERTS</span>
</div>
<div className="divide-y divide-outline-variant">
<div className="p-3 space-y-1">
<div className="flex justify-between items-start">
<span className="text-[11px] font-bold">Image Resolution Policy</span>
<span className="text-[10px] text-on-surface-variant">2h ago</span>
</div>
<p className="text-[11px] text-on-surface-variant leading-relaxed">System flagged image index 04 for low DPI. Manually resolved by Seller.</p>
<div className="flex gap-2 pt-1">
<span className="bg-green-100 text-green-700 text-[9px] px-1.5 rounded font-bold">RESOLVED</span>
</div>
</div>
<div className="p-3 space-y-1">
<div className="flex justify-between items-start">
<span className="text-[11px] font-bold">Price Spike Warning</span>
<span className="text-[10px] text-on-surface-variant">2 days ago</span>
</div>
<p className="text-[11px] text-on-surface-variant leading-relaxed">Listed price increased by 14% in 24h. Manual review completed by Moderator 'Admin_4'.</p>
<div className="flex gap-2 pt-1">
<span className="bg-blue-100 text-blue-700 text-[9px] px-1.5 rounded font-bold">BYPASS_APPROVED</span>
</div>
</div>
<div className="p-3 space-y-1">
<div className="flex justify-between items-start">
<span className="text-[11px] font-bold">Fraud Alert: Multi-Listing</span>
<span className="text-[10px] text-on-surface-variant">Nov 12</span>
</div>
<p className="text-[11px] text-on-surface-variant leading-relaxed">Duplicate SKU found on separate store ID. Suspicion of drop-shipping.</p>
<div className="flex gap-2 pt-1">
<span className="bg-red-100 text-red-700 text-[9px] px-1.5 rounded font-bold">FLAGGED</span>
</div>
</div>
</div>
<button className="w-full py-3 text-[11px] font-bold text-on-surface-variant hover:text-primary transition-colors bg-surface-container">
                                VIEW FULL SAFETY LOG (42 ENTRIES)
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>



    </div>
  );
}
