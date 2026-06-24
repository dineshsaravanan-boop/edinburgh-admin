import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReportedContent() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md">
      



<main className="flex flex-col bg-surface">



<div className="flex-1 overflow-hidden flex flex-col">

<div className="px-container-padding pt-6 pb-4 flex flex-col gap-6">
<div className="flex items-end justify-between">
<div>
<h3 className="font-display-sm text-display-sm text-on-surface">Reported Content</h3>
<p className="text-on-surface-variant font-body-sm">Review and manage community-flagged items across the platform.</p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container px-4 py-2 rounded-lg border border-outline-variant/30 flex items-center gap-3">
<div className="flex flex-col">
<span className="font-label-md text-on-surface-variant">Active Reports</span>
<span className="font-display-sm text-on-surface leading-tight">1,248</span>
</div>
<span className="text-error font-label-md flex items-center gap-1 bg-error-container/30 px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">trending_up</span> 12%
                            </span>
</div>
<div className="bg-surface-container px-4 py-2 rounded-lg border border-outline-variant/30 flex items-center gap-3">
<div className="flex flex-col">
<span className="font-label-md text-on-surface-variant">Avg. Risk Score</span>
<span className="font-display-sm text-on-surface leading-tight">74.2</span>
</div>
<span className="text-primary font-label-md flex items-center gap-1 bg-primary-container/10 px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">analytics</span> High
                            </span>
</div>
</div>
</div>

<div className="flex items-center gap-3 py-2 border-b border-outline-variant/30">
<div className="relative flex-1 group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-md text-body-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Search by entity name, reporter, or reason..." type="text" />
</div>
<div className="flex items-center gap-2">
<select className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-1.5 text-body-sm text-on-surface outline-none focus:border-primary">
<option>Reason Category</option>
<option>Spam</option>
<option>Harassment</option>
<option>Explicit Content</option>
<option>Counterfeit</option>
</select>
<select className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-1.5 text-body-sm text-on-surface outline-none focus:border-primary">
<option>Severity</option>
<option>Critical (90-100)</option>
<option>High (70-89)</option>
<option>Medium (40-69)</option>
<option>Low (0-39)</option>
</select>
<button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded text-label-md transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                            More Filters
                        </button>
</div>
</div>
</div>

<div className="flex-1 overflow-auto custom-scrollbar px-container-padding pb-8">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse dense-table">
<thead className="bg-surface-container-low border-b border-outline-variant sticky top-0 z-10">
<tr className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
<th className="w-12"><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /></th>
<th className="min-w-[240px]">Reported Entity</th>
<th className="min-w-[140px]">Reason</th>
<th className="min-w-[120px]">Risk Score (AI)</th>
<th className="min-w-[160px]">Reporter</th>
<th className="min-w-[140px]">Timestamp</th>
<th className="min-w-[120px]">Status</th>
<th className="w-[180px] text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30" id="report-table-body">

<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports/REP-3928"); }}>
<td><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /></td>
<td>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img className="w-full h-full object-cover" data-alt="A sleek, high-end electric guitar with a matte black finish, photographed against a minimalist grey background with professional studio lighting. The aesthetic is modern and premium, featuring crisp reflections on the metallic parts. Designed to fit within a luxury marketplace UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdh7F0htDN4aXPqAdkGV9zvPIaFDRAGRdo4uKJ2zQjx6-zDfS5DSHs1kpBNNm30ygHWagr0U2fW_udTJUZkuyLrMfUDxSLZqsaMo_B3cEjLCcTLyl03RjFRKd2J-Rtt-5aEi4pKD4vp8aQUdsbtdNwXS7zMwx9If-4nEhUQw7kIiz56AjxFVrlMGYiCf_61PMPOVxdaoTTDQazWmaYaiZeLGn6SWf8CxOkg4WMtr0OsQDafMbLvEr9sOEbWpiNLXAVMXlj7_JaNQSc" />
</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">Obsidian Series V1</span>
<span className="font-code-sm text-on-surface-variant opacity-70">Product • ID: #PROD-8821</span>
</div>
</div>
</td>
<td>
<span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded text-label-md">Counterfeit</span>
</td>
<td>
<div className="flex items-center gap-2">
<div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden flex-1">
<div className="h-full bg-error" style={{"width":"92%"}}></div>
</div>
<span className="font-code-sm font-bold text-error">92</span>
</div>
</td>
<td>
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full bg-surface-variant" data-alt="A profile portrait of a professional woman wearing modern glasses and a casual beige blazer, set against a soft, bright office background. High-key lighting emphasizes a clean, approachable, and trustworthy user persona for a modern digital platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzPq_wTv4q0bXlt4qpMlfxuE5DmkZcJYLTwGrPiVMg4vktyZwwTlK0eKVnq3N-5pqbtNyK8m1WQUFXD26IWATydwDzLtMOEwS3CZvAbSCiHbAc0wijRED1n5QgrkEpMFIqLQCTTvnDCJMXWT7oRurKQPmvGPfLIp0PlzdJpgqfKvkvWynsGvqcWV2YAgdvHKkBAzTlEw-SbB8yTOMl-q4i_WTfTWC7NY208v3G_w7bCLtmXJArV67avibGqp8dzDrrC08QBIkqrv2P" />
<span className="text-body-sm">Elena Markov</span>
</div>
</td>
<td>
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">Today, 10:45 AM</span>
<span className="font-code-sm text-[11px] text-outline">8m ago</span>
</div>
</td>
<td>
<span className="flex items-center gap-1.5 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                                        Pending
                                    </span>
</td>
<td className="text-right">
<div className="row-hover-actions flex items-center justify-end gap-2">
<button className="px-3 py-1 bg-surface hover:bg-surface-variant border border-outline-variant rounded font-label-md transition-colors" onClick={(e) => { e.preventDefault(); }}>Dismiss</button>
<button className="px-3 py-1 bg-primary text-on-primary rounded font-label-md hover:brightness-110 transition-all" onClick={(e) => { e.preventDefault(); }}>Investigate</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports/REP-3928"); }}>
<td><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /></td>
<td>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-error-container/30 rounded-lg flex items-center justify-center border border-error/20">
<span className="material-symbols-outlined text-error">chat_bubble</span>
</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface truncate max-w-[200px]">"Your service is absolutely pathetic..."</span>
<span className="font-code-sm text-on-surface-variant opacity-70">Comment • ID: #CMT-0044</span>
</div>
</div>
</td>
<td>
<span className="px-2 py-1 bg-surface-variant text-on-surface-variant rounded text-label-md">Harassment</span>
</td>
<td>
<div className="flex items-center gap-2">
<div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden flex-1">
<div className="h-full bg-secondary" style={{"width":"68%"}}></div>
</div>
<span className="font-code-sm font-bold text-secondary">68</span>
</div>
</td>
<td>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-[10px] text-on-primary-container font-bold">JD</div>
<span className="text-body-sm">John Doe (Auto)</span>
</div>
</td>
<td>
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">Today, 09:12 AM</span>
<span className="font-code-sm text-[11px] text-outline">1h 41m ago</span>
</div>
</td>
<td>
<span className="flex items-center gap-1.5 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                                        Pending
                                    </span>
</td>
<td className="text-right">
<div className="row-hover-actions flex items-center justify-end gap-2">
<button className="px-3 py-1 bg-surface hover:bg-surface-variant border border-outline-variant rounded font-label-md transition-colors" onClick={(e) => { e.preventDefault(); }}>Dismiss</button>
<button className="px-3 py-1 bg-primary text-on-primary rounded font-label-md hover:brightness-110 transition-all" onClick={(e) => { e.preventDefault(); }}>Investigate</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports/REP-3928"); }}>
<td><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /></td>
<td>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img className="w-full h-full object-cover" data-alt="A futuristic neon-lit city street at night, with rain reflections on the pavement and glowing holographic advertisements. High contrast, cinematic lighting with a deep blue and magenta color palette. The image feels energetic and highly detailed, representing a digital creator's profile banner." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAXO8Gpgct9Q9iWh7z4vyDY2_nqeSiWIxsFXokjsHLg911EK49BCGBBGHyVmCYCGb6R1VI1bqc24A_UJmy_88UEyf8QiTJvS8YMtZe5vf-43qmvKM00jqxUNUXdlPCLCE4esIDST75l9dvYR0kxoYWhHkcGVXtchggW7VgZwrwFT7GyemxMSD9iBAn4x1tGbi6GWiYXLhxxJegDeoVUskfaLVNMkos6GSzJTgfYFytrdoOk8v4z_sdH3qfyKbVIi2MpDHgoBvbTqXJ" />
</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">NeoPixel_Art</span>
<span className="font-code-sm text-on-surface-variant opacity-70">Profile • ID: #USR-9003</span>
</div>
</div>
</td>
<td>
<span className="px-2 py-1 bg-error-container text-on-error-container rounded text-label-md">Spam Bot</span>
</td>
<td>
<div className="flex items-center gap-2">
<div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden flex-1">
<div className="h-full bg-error" style={{"width":"95%"}}></div>
</div>
<span className="font-code-sm font-bold text-error">95</span>
</div>
</td>
<td>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline">smart_toy</span>
<span className="text-body-sm">AI Guardian</span>
</div>
</td>
<td>
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">Yesterday, 11:30 PM</span>
<span className="font-code-sm text-[11px] text-outline">11h ago</span>
</div>
</td>
<td>
<span className="flex items-center gap-1.5 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-outline"></span>
                                        Escalated
                                    </span>
</td>
<td className="text-right">
<div className="row-hover-actions flex items-center justify-end gap-2">
<button className="px-3 py-1 bg-surface hover:bg-surface-variant border border-outline-variant rounded font-label-md transition-colors" onClick={(e) => { e.preventDefault(); }}>Dismiss</button>
<button className="px-3 py-1 bg-primary text-on-primary rounded font-label-md hover:brightness-110 transition-all" onClick={(e) => { e.preventDefault(); }}>Investigate</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/moderation/reports/REP-3928"); }}>
<td><input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /></td>
<td>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img className="w-full h-full object-cover" data-alt="A minimalist white ceramic vase with a single dried eucalyptus branch, placed on a light oak wooden table. Natural, soft sunlight creates gentle shadows. The scene is calm, clean, and organic, perfectly fitting a modern aesthetic interior design shop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs0B63f6jbDY1Mtsa1yPGfhKBrgeJ5A3altfBmo_ezDnWRealutCWniOlGhDPmVd_wuviDSCSCvNCXQ-H77ell19phnIw1-Z70wz1_gATRbOLKX_LYgg6irKRahRYhhapnG0dtheYY_YmCLgFC5Y1KGzrOawiVSOgOWYs-U8a-mURrIaAi8fhzTiRqxukXy5ya4s5TTBNinzqcfAxunQLlfM9Uj0s58xcqow3qi-YPLs1vsHOHACsgZ87lRnGyD0irB_Q0CqW5iD3w" />
</div>
<div className="flex flex-col">
<span className="font-body-md font-semibold text-on-surface">Nordic Vase Collection</span>
<span className="font-code-sm text-on-surface-variant opacity-70">Product • ID: #PROD-4122</span>
</div>
</div>
</td>
<td>
<span className="px-2 py-1 bg-surface-variant text-on-surface-variant rounded text-label-md">Inaccurate Data</span>
</td>
<td>
<div className="flex items-center gap-2">
<div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden flex-1">
<div className="h-full bg-primary" style={{"width":"32%"}}></div>
</div>
<span className="font-code-sm font-bold text-primary">32</span>
</div>
</td>
<td>
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full bg-surface-variant" data-alt="A portrait of a cheerful man with a beard and a knit beanie, standing in a blurred urban park during autumn. Warm lighting and natural colors create a friendly, community-focused user vibe for a social marketplace platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIQmKOXvRwGXRQa30kteORhQN0WVmJu6aCeE5Y9piQy3nq6LIXPXLZXCaxIooGlAr6DAmf3kPPEyPHyhzP_A-PkgLO2HHaIPF8kWnPKvtRxcHfnxLkU9eBrcDkezx_8wSf5qLDl83ZEcj3YtzA7BIq_CFMWaRVnRG5M1i4CDy8TnV6DPoD-wv2h9g3driZFnky8MdR5c3XSSE38Hw7VAiqrpya8ZsVsu_9nI6stk_GbcQXsJXIB68Dk7MBJqqAKBNTJCWu4TDATGac" />
<span className="text-body-sm">Liam Carter</span>
</div>
</td>
<td>
<div className="flex flex-col">
<span className="text-body-sm text-on-surface">2 days ago</span>
<span className="font-code-sm text-[11px] text-outline">Oct 24, 2:15 PM</span>
</div>
</td>
<td>
<span className="flex items-center gap-1.5 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                                        Pending
                                    </span>
</td>
<td className="text-right">
<div className="row-hover-actions flex items-center justify-end gap-2">
<button className="px-3 py-1 bg-surface hover:bg-surface-variant border border-outline-variant rounded font-label-md transition-colors" onClick={(e) => { e.preventDefault(); }}>Dismiss</button>
<button className="px-3 py-1 bg-primary text-on-primary rounded font-label-md hover:brightness-110 transition-all" onClick={(e) => { e.preventDefault(); }}>Investigate</button>
</div>
</td>
</tr>
</tbody>
</table>

<div className="px-container-padding py-3 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
<span className="text-label-md text-on-surface-variant">Showing 1-15 of 1,248 reports</span>
<div className="flex items-center gap-1">
<button className="p-1 hover:bg-surface-variant rounded disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="px-2 py-1 text-label-md font-bold bg-primary text-on-primary rounded">1</button>
<button className="px-2 py-1 text-label-md hover:bg-surface-variant rounded">2</button>
<button className="px-2 py-1 text-label-md hover:bg-surface-variant rounded">3</button>
<span className="px-1">...</span>
<button className="px-2 py-1 text-label-md hover:bg-surface-variant rounded">84</button>
<button className="p-1 hover:bg-surface-variant rounded">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-8 right-8 bg-inverse-surface text-inverse-on-surface px-6 py-3 rounded-lg shadow-xl translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-3 z-[100]" id="toast">
<span className="material-symbols-outlined text-primary-fixed-dim" id="toast-icon">check_circle</span>
<span className="font-body-md" id="toast-message">Action completed successfully</span>
</div>
</main>


    </div>
  );
}
