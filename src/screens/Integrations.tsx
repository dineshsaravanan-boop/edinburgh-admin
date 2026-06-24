import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Integrations() {
  const navigate = useNavigate();

  return (
    <div className="font-body-md text-body-md">
      


<div className="w-full flex flex-col">



<main className="flex-grow  p-container-padding overflow-y-auto  custom-scrollbar bg-background">



<div className="grid grid-cols-12 gap-gutter mb-8">
<div className="col-span-12 lg:col-span-8 bento-grid">
<div className="col-span-4 glass-card p-5 rounded-xl">
<div className="flex items-center gap-2 text-primary mb-2">
<span className="material-symbols-outlined">link</span>
<span className="font-label-md text-label-md font-bold uppercase tracking-widest">Active Connections</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-extrabold text-on-surface">24</span>
<span className="text-xs text-tertiary-container font-semibold">+2 this week</span>
</div>
</div>
<div className="col-span-4 glass-card p-5 rounded-xl">
<div className="flex items-center gap-2 text-primary mb-2">
<span className="material-symbols-outlined">key</span>
<span className="font-label-md text-label-md font-bold uppercase tracking-widest">Valid API Keys</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-extrabold text-on-surface">18</span>
<span className="text-xs text-on-surface-variant font-semibold">2 expiring soon</span>
</div>
</div>
<div className="col-span-4 glass-card p-5 rounded-xl">
<div className="flex items-center gap-2 text-primary mb-2">
<span className="material-symbols-outlined">speed</span>
<span className="font-label-md text-label-md font-bold uppercase tracking-widest">Uptime Avg.</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-extrabold text-on-surface">99.98%</span>
<span className="text-xs text-error font-semibold">0.02% dip</span>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4 glass-card p-5 rounded-xl relative overflow-hidden bg-primary-container/5 border-primary/20">
<div className="relative z-10">
<h3 className="font-label-md text-label-md font-bold text-primary uppercase mb-2">Integration Health</h3>
<div className="flex items-center gap-4">
<div className="flex-grow">
<div className="flex justify-between text-[11px] font-bold text-on-surface-variant mb-1">
<span>OPERATIONAL</span>
<span>22/24</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full" style={{"width":"91.6%"}}></div>
</div>
</div>
</div>
<p className="text-[11px] text-on-surface-variant mt-3 italic">"Two services (AWS, Discord) reporting partial degradation."</p>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Connected Services</h2>
<div className="flex gap-2">
<button className="p-1.5 rounded bg-surface-container-high text-primary"><span className="material-symbols-outlined">grid_view</span></button>
<button className="p-1.5 rounded hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined">list</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">

<div className="glass-card p-5 rounded-xl service-card transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center p-2 border border-indigo-100">
<img className="w-full h-auto" data-alt="A clean, flat vector logo for Stripe, emphasizing a modern fintech aesthetic. The logo is displayed with high contrast on a white background, using the signature Stripe purple color palette. Professional and tech-oriented composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1eI92aIp3CHcuyqCErUzu6DyO05caansxwAPb23ZDkawFUhO6yx4ligcZWqztIiY4hfvaYUMimDcyTsx78GdqgO0KWjdlXVlvNAogKRvpA-zkhsE5rpk8qjUJ0kyfUsD8E7IFreKmlPMFxIrKDXl7sFydOhyvhh5AuDSeMxOGIPCSaVM-I-FKkjcAXEc6W5-q9Sv4nEkvcXgjiVwXidFF5mHO3xsJi5oI-_HeAGTVOyymtIk1WxjK7g4jSJqX1Ulg381M0B7YGvS5" />
</div>
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700">Operational</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface mb-1">Stripe Payments</h3>
<p className="text-on-surface-variant text-body-sm line-clamp-2 mb-4">Full-stack payment processing with automated reconciliation and fraud detection.</p>
<div className="pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-[11px] font-code-sm text-on-surface-variant">Last synced: 2m ago</span>
<button className="text-primary font-label-md text-label-md font-bold group-hover:underline">Configure</button>
</div>
</div>

<div className="glass-card p-5 rounded-xl service-card transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center p-2 border border-orange-100">
<img className="w-full h-auto" data-alt="A professional flat vector logo for Amazon Web Services AWS, featuring the iconic orange arrow from A to Z. The aesthetic is clean, industrial, and high-tech, fitting for a cloud infrastructure service within a sleek enterprise admin dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr_gPm81k6opTI0Tw7tZJZxklBm81SRg_beM4GY8LyBm5tBOy9c5lmq5z0RAiAbZiikePlsQiO6-s6onmoccmEn3l9fFAXSRVbFHw9tnMuXfSKp2-Xaq1yFXKLUS9nEgV-gt-lkoxwIdTShNV4wLgI6jeG1LOARnXe3eN3WzUu68NHhp2VE-qOTMSqQK7Ccwt1-Mbdcr7dAaY8YQ8_UOXvxNQ2vVuyQtDU8XfAyEsDeopPCQ2AuaFV0rbTcTOo3eJYaMf8C_Npxc34" />
</div>
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700">Degraded</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface mb-1">AWS Cloud Infrastructure</h3>
<p className="text-on-surface-variant text-body-sm line-clamp-2 mb-4">Serverless compute, S3 storage buckets, and IAM policy management integration.</p>
<div className="pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-[11px] font-code-sm text-on-surface-variant">Checking status...</span>
<button className="text-primary font-label-md text-label-md font-bold group-hover:underline">View Logs</button>
</div>
</div>

<div className="glass-card p-5 rounded-xl service-card transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center p-2 border border-emerald-100">
<img className="w-full h-auto" data-alt="The modern Zendesk logo in a flat vector style, focusing on the geometric shapes and corporate green color. The design is minimalist and represents high-end customer support technology, presented as a dashboard integration icon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk0_VBgDFSMYflfYx5Ex7jME8ywOSfGdaba_iFPu-H_MZ6ZoaNCJjDVuBXo0C47pLCmfLEFUmnm-BkNtOsDv2lOs4zBRJlVBViZarldJwO4NKpIJo2bxvmyurQfHtpbz2n85lTsppeLRQBd-wwPecsrQXQl57j4VmNCbYmoyi6BVadt__PyTLG0weugWxhZLH8ZnPlpGeHnPfTyGhAfuE_PMNwVCmZYLtKk_Wwea6MKT13gNIPDTnbqaA_MtXvyhnQ-y6rHF04mCuI" />
</div>
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700">Operational</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface mb-1">Zendesk Support</h3>
<p className="text-on-surface-variant text-body-sm line-clamp-2 mb-4">Customer support ticket syncing, live chat events, and user profile mapping.</p>
<div className="pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-[11px] font-code-sm text-on-surface-variant">Active 24/7</span>
<button className="text-primary font-label-md text-label-md font-bold group-hover:underline cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/settings/system"); }}>Settings</button>
</div>
</div>

<div className="glass-card p-5 rounded-xl service-card transition-all group border-primary/30 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center p-2 border border-blue-100">
<img className="w-full h-auto" data-alt="A clean Discord logo 'Clyde' icon in a flat, modern design. The blurple color is used prominently against a soft white background. The style is community-focused yet professional, suitable for a tech-heavy integration dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsdiDniywMe9JTPMoCxUfa7qMmVapseBBuRSr0GIADFbBH2eX_JZ8pL-JFPLlC8VHKKOprG6kxoXEq_o8iBxL-lQ_TACVITbbnvKkndqEA023gLdf3Z0jMbXE0GM-Gc5OKtT9mQzbRmH0ucRom1eAuTWQ_5p1_Bs4jHZfV9vsTGyRELNrRH7K01BlB_ohFVWLG1KsZNnwyAf6Y_8pVWsR-PXhe02-7h48FdNN7VNdsPkzGKky-u5lFGvJaoSRru2F543HEEvcmnYqB" />
</div>
<span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary-container text-on-primary-container">Updating</span>
</div>
<h3 className="font-headline-sm text-[16px] text-on-surface mb-1">Discord Bot API</h3>
<p className="text-on-surface-variant text-body-sm line-clamp-2 mb-4">Community notification system, role management, and server activity logging.</p>
<div className="pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-[11px] font-code-sm text-on-surface-variant">v.4.1.2 rollout</span>
<button className="text-primary font-label-md text-label-md font-bold group-hover:underline">Pause</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter pb-8">

<section className="glass-card rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
<h3 className="font-headline-sm text-[16px] text-on-surface font-bold">Primary API Keys</h3>
<button className="text-primary font-label-md text-label-md font-bold hover:underline">+ Generate New Key</button>
</div>
<div className="divide-y divide-outline-variant">
<div className="px-6 py-4 flex items-center justify-between group hover:bg-surface-container-lowest transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-outline">key</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Production Master</p>
<p className="font-code-sm text-code-sm text-on-surface-variant opacity-50">sk_live_••••••••••••••••••••3a9c</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-surface-variant text-on-surface-variant">Expires: Dec 2024</span>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">content_copy</button>
<button className="material-symbols-outlined text-error hover:text-red-700 transition-colors opacity-0 group-hover:opacity-100">delete</button>
</div>
</div>
<div className="px-6 py-4 flex items-center justify-between group hover:bg-surface-container-lowest transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-outline">key</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface">Staging Environment</p>
<p className="font-code-sm text-code-sm text-on-surface-variant opacity-50">sk_test_••••••••••••••••••••92fb</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-surface-variant text-on-surface-variant">Never Expires</span>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">content_copy</button>
<button className="material-symbols-outlined text-error hover:text-red-700 transition-colors opacity-0 group-hover:opacity-100">delete</button>
</div>
</div>
</div>
</section>

<section className="glass-card rounded-xl overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
<h3 className="font-headline-sm text-[16px] text-on-surface font-bold">Recent Connection Logs</h3>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full bg-primary-container/10 text-primary text-[10px] font-bold">LIVE FEED</span>
</div>
</div>
<div className="flex-grow overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container/30 text-label-md text-on-surface-variant border-b border-outline-variant">
<tr>
<th className="px-6 py-3 font-bold uppercase tracking-wider text-[10px]">Service</th>
<th className="px-6 py-3 font-bold uppercase tracking-wider text-[10px]">Event</th>
<th className="px-6 py-3 font-bold uppercase tracking-wider text-[10px]">Status</th>
<th className="px-6 py-3 font-bold uppercase tracking-wider text-[10px] text-right">Time</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-lowest transition-colors cursor-default">
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-body-sm font-medium">Stripe</span>
</div>
</td>
<td className="px-6 py-3 text-body-sm">Webhook: charge.succeeded</td>
<td className="px-6 py-3">
<span className="flex items-center gap-1 text-green-600 font-bold text-[11px]">
<span className="material-symbols-outlined text-[14px]">check_circle</span> 200 OK
                                        </span>
</td>
<td className="px-6 py-3 text-right text-body-sm text-on-surface-variant font-code-sm">12:44:02</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors cursor-default">
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
<span className="text-body-sm font-medium">AWS</span>
</div>
</td>
<td className="px-6 py-3 text-body-sm">Lambda: Execute Function</td>
<td className="px-6 py-3">
<span className="flex items-center gap-1 text-error font-bold text-[11px]">
<span className="material-symbols-outlined text-[14px]">error</span> 504 TIMEOUT
                                        </span>
</td>
<td className="px-6 py-3 text-right text-body-sm text-on-surface-variant font-code-sm">12:43:55</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors cursor-default">
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-body-sm font-medium">Zendesk</span>
</div>
</td>
<td className="px-6 py-3 text-body-sm">Sync: User Profile Update</td>
<td className="px-6 py-3">
<span className="flex items-center gap-1 text-green-600 font-bold text-[11px]">
<span className="material-symbols-outlined text-[14px]">check_circle</span> 201 CREATED
                                        </span>
</td>
<td className="px-6 py-3 text-right text-body-sm text-on-surface-variant font-code-sm">12:42:10</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</main>
</div>

<div className="hidden fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm flex items-center justify-center p-container-padding" id="integration-modal">
<div className="bg-surface w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-outline-variant">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Connect New Service</h3>
<button className="material-symbols-outlined hover:bg-surface-variant p-2 rounded-full transition-colors" onClick={(e) => { e.preventDefault(); }}>close</button>
</div>
<div className="p-8">
<div className="grid grid-cols-3 gap-4 mb-8">
<button className="flex flex-col items-center gap-3 p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-primary-container/5 transition-all">
<span className="material-symbols-outlined text-4xl text-primary">cloud</span>
<span className="text-label-md font-bold">Cloud Infra</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-primary-container/5 transition-all">
<span className="material-symbols-outlined text-4xl text-primary">payments</span>
<span className="text-label-md font-bold">Payments</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-primary-container/5 transition-all">
<span className="material-symbols-outlined text-4xl text-primary">forum</span>
<span className="text-label-md font-bold">Messaging</span>
</button>
</div>
<div className="space-y-4">
<label className="block">
<span className="text-label-md font-bold text-on-surface-variant mb-1 block">Quick Connect ID</span>
<input className="w-full px-4 py-3 border border-outline-variant rounded-lg font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Enter service ID or URL" type="text" />
</label>
</div>
</div>
<div className="p-6 bg-surface-container-low border-t border-outline-variant flex justify-end gap-3">
<button className="px-6 py-2 text-on-surface-variant font-label-md font-bold hover:text-on-surface transition-colors" onClick={(e) => { e.preventDefault(); }}>Cancel</button>
<button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-md font-bold hover:shadow-lg transition-all">Continue Connection</button>
</div>
</div>
</div>


    </div>
  );
}
