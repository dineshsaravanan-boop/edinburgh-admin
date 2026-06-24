import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModerationDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface">
      



<main className="flex-1 flex flex-col  relative overflow-hidden cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports"); }}>



<div className="p-container-padding space-y-gutter flex-1 grid-bg cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports"); }}>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports"); }}>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col justify-between shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl">flag</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-on-surface-variant">Reports per Hour</span>
<span className="text-xs font-bold text-error bg-error-container/20 px-1.5 rounded">+12.4%</span>
</div>
<h2 className="font-display-sm text-display-sm">1,248</h2>
</div>
<div className="mt-4 h-12 flex items-end gap-1">
<div className="bg-primary/20 w-full h-[40%]" style={{"height":"40%"}}></div>
<div className="bg-primary/20 w-full h-[60%]" style={{"height":"60%"}}></div>
<div className="bg-primary/20 w-full h-[45%]" style={{"height":"45%"}}></div>
<div className="bg-primary/20 w-full h-[80%]" style={{"height":"80%"}}></div>
<div className="bg-primary w-full h-[95%]" style={{"height":"95%"}}></div>
<div className="bg-primary w-full h-[70%]" style={{"height":"70%"}}></div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-4 shadow-sm relative group overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl">smart_toy</span>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="font-label-md text-label-md text-on-surface-variant">AI Auto-Mod Rate</span>
<span className="text-xs font-bold text-green-600 bg-green-100 px-1.5 rounded">94.2%</span>
</div>
<div className="flex items-baseline gap-2">
<h2 className="font-display-sm text-display-sm">82.5%</h2>
<span className="text-xs text-on-surface-variant">Global Avg</span>
</div>
<div className="mt-4 w-full bg-surface-container rounded-full h-2">
<div className="bg-secondary h-full rounded-full" style={{"width":"82.5%"}}></div>
</div>
<p className="mt-2 text-[11px] text-on-surface-variant font-body-sm italic">Model v4.2 Deployment active</p>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-4 shadow-sm relative group overflow-hidden cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports"); }}>
<div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl">pending_actions</span>
</div>
<div className="flex items-center gap-2 mb-1 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports"); }}>
<span className="font-label-md text-label-md text-on-surface-variant cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports"); }}>Review Queue Size</span>
<span className="text-xs font-bold text-amber-600 bg-amber-100 px-1.5 rounded">Warning</span>
</div>
<h2 className="font-display-sm text-display-sm">4,892</h2>
<div className="mt-4 flex justify-between items-center text-[11px] font-medium uppercase tracking-wider text-on-surface-variant">
<span>P0: 12</span>
<span>P1: 442</span>
<span>P2: 4,438</span>
</div>
<div className="mt-1 flex h-1.5 w-full rounded-full overflow-hidden">
<div className="bg-error w-[5%]"></div>
<div className="bg-secondary w-[20%]"></div>
<div className="bg-surface-variant w-[75%]"></div>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded p-container-padding shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm">Violation Distribution</h3>
<button className="text-primary"><span className="material-symbols-outlined">more_horiz</span></button>
</div>
<div className="space-y-4">
<div className="space-y-1">
<div className="flex justify-between text-label-md font-label-md">
<span>Hate Speech</span>
<span className="font-mono">42%</span>
</div>
<div className="h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-error" style={{"width":"42%"}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-label-md font-label-md">
<span>Harassment</span>
<span className="font-mono">28%</span>
</div>
<div className="h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary" style={{"width":"28%"}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-label-md font-label-md">
<span>Spam / Bot Activity</span>
<span className="font-mono">18%</span>
</div>
<div className="h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{"width":"18%"}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-label-md font-label-md">
<span>NSFW Content</span>
<span className="font-mono">12%</span>
</div>
<div className="h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-tertiary-container" style={{"width":"12%"}}></div>
</div>
</div>
</div>
<div className="mt-8 p-4 rounded bg-surface-container-low border border-dashed border-outline-variant">
<p className="text-xs text-on-surface-variant font-body-sm leading-relaxed">
                            Trend Alert: <span className="font-bold text-on-surface">"Spam"</span> has increased by 4% since the last epoch. Recommendation: Adjust heuristic filters for domain pattern 0x4F.
                        </p>
</div>
</div>

<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded flex flex-col shadow-sm overflow-hidden">
<div className="px-container-padding py-4 border-b border-outline-variant flex justify-between items-center bg-surface">
<div className="flex items-center gap-3">
<h3 className="font-headline-sm text-headline-sm">Priority Action Queue</h3>
<span className="bg-error text-on-error text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">Urgent</span>
</div>
<div className="flex gap-2">
<div className="flex border border-outline-variant rounded overflow-hidden">
<button className="px-3 py-1 bg-surface-container-high text-on-surface font-label-md text-label-md">Active</button>
<button className="px-3 py-1 bg-surface text-on-surface-variant font-label-md text-label-md border-l border-outline-variant hover:bg-surface-container-low">Archived</button>
</div>
</div>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container font-label-md text-label-md text-on-surface-variant">
<th className="px-4 py-2 border-b border-outline-variant font-semibold">Flag</th>
<th className="px-4 py-2 border-b border-outline-variant font-semibold">User / Content</th>
<th className="px-4 py-2 border-b border-outline-variant font-semibold">Violation</th>
<th className="px-4 py-2 border-b border-outline-variant font-semibold">Score</th>
<th className="px-4 py-2 border-b border-outline-variant font-semibold">Timestamp</th>
<th className="px-4 py-2 border-b border-outline-variant font-semibold text-right">Action</th>
</tr>
</thead>
<tbody className="text-body-sm font-body-sm">
<tr className="hover:bg-surface-variant/20 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports/REP-3928"); }}>
<td className="px-4 py-3 border-b border-outline-variant">
<span className="material-symbols-outlined text-error" style={{"fontVariationSettings":"'FILL' 1"}}>priority_high</span>
</td>
<td className="px-4 py-3 border-b border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center text-[10px] font-bold">JD</div>
<div className="flex flex-col">
<span className="font-semibold text-on-surface">@jdoe_99</span>
<span className="text-[10px] text-on-surface-variant italic">"This platform is garbage..."</span>
</div>
</div>
</td>
<td className="px-4 py-3 border-b border-outline-variant">
<span className="bg-error-container/10 text-error px-2 py-0.5 rounded-full border border-error/20">Hate Speech</span>
</td>
<td className="px-4 py-3 border-b border-outline-variant font-code-sm text-code-sm text-error">0.98</td>
<td className="px-4 py-3 border-b border-outline-variant text-on-surface-variant">2m ago</td>
<td className="px-4 py-3 border-b border-outline-variant text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 hover:text-error" title="Ban"><span className="material-symbols-outlined text-lg">block</span></button>
<button className="p-1 hover:text-primary" title="Review"><span className="material-symbols-outlined text-lg">visibility</span></button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-variant/20 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports/REP-3928"); }}>
<td className="px-4 py-3 border-b border-outline-variant">
<span className="material-symbols-outlined text-amber-500" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</td>
<td className="px-4 py-3 border-b border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary-container/20 flex items-center justify-center text-[10px] font-bold">AL</div>
<div className="flex flex-col">
<span className="font-semibold text-on-surface">@alex_light</span>
<span className="text-[10px] text-on-surface-variant italic">Multi-login detected (34 IPs)</span>
</div>
</div>
</td>
<td className="px-4 py-3 border-b border-outline-variant">
<span className="bg-secondary-container/10 text-secondary px-2 py-0.5 rounded-full border border-secondary/20">Spam / Bot</span>
</td>
<td className="px-4 py-3 border-b border-outline-variant font-code-sm text-code-sm text-amber-600">0.84</td>
<td className="px-4 py-3 border-b border-outline-variant text-on-surface-variant">5m ago</td>
<td className="px-4 py-3 border-b border-outline-variant text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 hover:text-error" title="Ban"><span className="material-symbols-outlined text-lg">block</span></button>
<button className="p-1 hover:text-primary" title="Review"><span className="material-symbols-outlined text-lg">visibility</span></button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-variant/20 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports/REP-3928"); }}>
<td className="px-4 py-3 border-b border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant" style={{"fontVariationSettings":"'FILL' 0"}}>info</span>
</td>
<td className="px-4 py-3 border-b border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-[10px] font-bold">U</div>
<div className="flex flex-col">
<span className="font-semibold text-on-surface">@unknown_01</span>
<span className="text-[10px] text-on-surface-variant italic">Massive image upload burst</span>
</div>
</div>
</td>
<td className="px-4 py-3 border-b border-outline-variant">
<span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full border border-outline-variant">NSFW Scan</span>
</td>
<td className="px-4 py-3 border-b border-outline-variant font-code-sm text-code-sm">0.12</td>
<td className="px-4 py-3 border-b border-outline-variant text-on-surface-variant">12m ago</td>
<td className="px-4 py-3 border-b border-outline-variant text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 hover:text-error" title="Ban"><span className="material-symbols-outlined text-lg">block</span></button>
<button className="p-1 hover:text-primary" title="Review"><span className="material-symbols-outlined text-lg">visibility</span></button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-variant/20 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports/REP-3928"); }}>
<td className="px-4 py-3 border-b border-outline-variant">
<span className="material-symbols-outlined text-amber-500" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</td>
<td className="px-4 py-3 border-b border-outline-variant">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center text-[10px] font-bold">MK</div>
<div className="flex flex-col">
<span className="font-semibold text-on-surface">@market_king</span>
<span className="text-[10px] text-on-surface-variant italic">Inappropriate seller title</span>
</div>
</div>
</td>
<td className="px-4 py-3 border-b border-outline-variant">
<span className="bg-tertiary-container/10 text-tertiary px-2 py-0.5 rounded-full border border-tertiary/20">Market Policy</span>
</td>
<td className="px-4 py-3 border-b border-outline-variant font-code-sm text-code-sm text-amber-600">0.71</td>
<td className="px-4 py-3 border-b border-outline-variant text-on-surface-variant">14m ago</td>
<td className="px-4 py-3 border-b border-outline-variant text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 hover:text-error" title="Ban"><span className="material-symbols-outlined text-lg">block</span></button>
<button className="p-1 hover:text-primary" title="Review"><span className="material-symbols-outlined text-lg">visibility</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-container-padding py-3 flex items-center justify-between bg-surface border-t border-outline-variant">
<p className="text-label-md text-on-surface-variant">Showing 1-4 of 124 pending high-priority reviews</p>
<div className="flex gap-2">
<button className="p-1 border border-outline-variant rounded hover:bg-surface-container"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="p-1 border border-outline-variant rounded hover:bg-surface-container"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-container-padding shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm">Moderator Performance Hub</h3>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-green-500"></span>
<span className="font-label-md text-label-md text-on-surface-variant">42 Agents Online</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
<div className="p-3 border border-outline-variant rounded bg-surface">
<div className="flex items-center gap-3 mb-2">
<img className="w-10 h-10 rounded-full border border-primary" data-alt="Portrait of a young female tech support agent, soft focus background with professional studio lighting, warm skin tones, and modern minimalist tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCALOHocqQFuEVdmrora5RE-ycz3kREgySdNDNN8zrwIPbVFEsVNO9BEyzEnz2hMvCDjGHUVRl2pVotQHI_A6exe6lQO7CwwQ-CWntAxnAKk1jcoiVkDFA-8sY1Gvugb_CDoOLbWD84g261osSkFA5hct62D7Ebp7JoGvIm8Lq2kojYOYX72WHdxu5Ak3THanHMTm_behSBOnEhh2s7AU5cgJ34n5b6i2xNJguXYPyCAKXIaHEfSKLZhDfM-G4irS19fF0x0U9LY9bc" />
<div>
<p className="font-label-md text-label-md font-bold">Sarah Chen</p>
<p className="text-[10px] text-on-surface-variant">Lead Reviewer</p>
</div>
</div>
<div className="flex justify-between text-[11px] mb-1">
<span>Accuracy</span>
<span className="font-bold text-green-600">99.8%</span>
</div>
<div className="h-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-green-500" style={{"width":"99.8%"}}></div>
</div>
<div className="mt-2 text-[10px] text-on-surface-variant flex justify-between">
<span>142 Solved</span>
<span className="font-mono">avg 2.4m</span>
</div>
</div>
<div className="p-3 border border-outline-variant rounded bg-surface">
<div className="flex items-center gap-3 mb-2">
<img className="w-10 h-10 rounded-full border border-outline-variant" data-alt="Portrait of a male content moderator, clean shaven, professional studio lighting, neutral grey background, high information density aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQLvb5gZn4zeQLKsSBRyDIKsjTH198Nno-bYyDU3rrj47PAZR_pfn5p2efvk7yW_02yqC53LS1urxr09n5RzPKk4n2kaiwGwmJ0uqwopByNBQGhPWPDJsJHP15Ar2nFZ8tqNSg2mWp-Qc144s9CnGNcQbZx11s17BMwN6-oPgcdGs6CsnMfVQPId-s9cMijZ7fFVWfBrsM021nIcDHngEuYBZDjYICtyEbi0bfanuZDnZ0JtyypjXcadIuSk_-yPNfDsufaqosqE6G" />
<div>
<p className="font-label-md text-label-md font-bold">Marcus Vane</p>
<p className="text-[10px] text-on-surface-variant">Senior Agent</p>
</div>
</div>
<div className="flex justify-between text-[11px] mb-1">
<span>Accuracy</span>
<span className="font-bold text-green-600">98.2%</span>
</div>
<div className="h-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-green-500" style={{"width":"98.2%"}}></div>
</div>
<div className="mt-2 text-[10px] text-on-surface-variant flex justify-between">
<span>118 Solved</span>
<span className="font-mono">avg 3.1m</span>
</div>
</div>
<div className="p-3 border border-outline-variant rounded bg-surface">
<div className="flex items-center gap-3 mb-2">
<img className="w-10 h-10 rounded-full border border-outline-variant" data-alt="Portrait of a female security analyst, professional attire, soft office lighting, focused and serious expression, modern corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh6yi0ACVapYQibEaSr1m6WPPnMImAF46319Lsygf8uPmThdlEa8OOwv8ky2GopC-wYNOCq3eY5PV8fj-Sx_sZgSWzCJGnf3Vj7cW0yUJKy1VQeo5db2lUhgEMK07ssOO8vrFuInDYQ1VGwtOfAAxYn_Ho4jmnzrYW51wYKGwxiqBKRg5NDGGBeW9sGds1lu5tw512SWvUQa58Qowrlevinos98tE-uJ6PZxLbo29Hrlwr7-UN00jPNZM1y_orRRnqcTUy4Q5WmKiX" />
<div>
<p className="font-label-md text-label-md font-bold">Elena Rodriguez</p>
<p className="text-[10px] text-on-surface-variant">Junior Reviewer</p>
</div>
</div>
<div className="flex justify-between text-[11px] mb-1">
<span>Accuracy</span>
<span className="font-bold text-amber-600">94.5%</span>
</div>
<div className="h-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-amber-500" style={{"width":"94.5%"}}></div>
</div>
<div className="mt-2 text-[10px] text-on-surface-variant flex justify-between">
<span>89 Solved</span>
<span className="font-mono">avg 4.5m</span>
</div>
</div>
<div className="p-3 border border-outline-variant rounded bg-surface flex flex-col justify-center items-center border-dashed border-2 hover:bg-surface-container cursor-pointer transition-colors">
<span className="material-symbols-outlined text-outline-variant text-2xl">person_add</span>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">Onboard Agent</p>
</div>
</div>
</div>
</div>


</main>


    </div>
  );
}
