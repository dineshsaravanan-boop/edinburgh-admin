import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatorAnalytics() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md">
      


<div className="w-full flex flex-col">



<main className="flex-1 p-container-padding overflow-y-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 className="font-display-sm text-display-sm text-on-surface mb-1">Creator Ecosystem Health</h1>
<p className="text-on-surface-variant font-body-md">Real-time overview of creator growth, retention, and monetization performance.</p>
</div>
<div className="flex gap-2 bg-surface-container rounded-lg p-1 border border-outline-variant">
<button className="px-3 py-1.5 text-label-md font-semibold bg-white shadow-sm rounded-md transition-all">Last 30 Days</button>
<button className="px-3 py-1.5 text-label-md font-medium text-on-surface-variant hover:bg-surface-variant/30 rounded-md transition-all">90 Days</button>
<button className="px-3 py-1.5 text-label-md font-medium text-on-surface-variant hover:bg-surface-variant/30 rounded-md transition-all">Yearly</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-8">
<div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-3">
<span className="text-label-md font-bold text-on-surface-variant uppercase tracking-tight">Active Creators</span>
<span className="text-green-600 bg-green-50 text-[10px] font-bold px-2 py-0.5 rounded-full">+12.4%</span>
</div>
<div className="font-display-sm text-display-sm mb-2">12,842</div>
<div className="w-full h-10 overflow-hidden opacity-50">
<div className="flex items-end gap-1 h-full">
<div className="w-1 bg-primary h-2"></div><div className="w-1 bg-primary h-4"></div><div className="w-1 bg-primary h-3"></div><div className="w-1 bg-primary h-6"></div><div className="w-1 bg-primary h-5"></div><div className="w-1 bg-primary h-8"></div><div className="w-1 bg-primary h-7"></div><div className="w-1 bg-primary h-10"></div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-3">
<span className="text-label-md font-bold text-on-surface-variant uppercase tracking-tight">Total Payouts</span>
<span className="text-green-600 bg-green-50 text-[10px] font-bold px-2 py-0.5 rounded-full">+8.2%</span>
</div>
<div className="font-display-sm text-display-sm mb-2">$4.2M</div>
<div className="w-full h-10 flex items-center justify-center">
<svg className="w-full h-full overflow-visible" viewBox="0 0 100 20">
<path className="animate-[dash_2s_ease-in-out_infinite]" d="M0 15 Q 10 5, 20 12 T 40 8 T 60 14 T 80 5 T 100 10" fill="none" stroke="#004ac6" strokeWidth="1.5"></path>
</svg>
</div>
</div>
<div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-3">
<span className="text-label-md font-bold text-on-surface-variant uppercase tracking-tight">Avg. Retention</span>
<span className="text-red-600 bg-red-50 text-[10px] font-bold px-2 py-0.5 rounded-full">-2.1%</span>
</div>
<div className="font-display-sm text-display-sm mb-2">78.4%</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[78.4%]"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-3">
<span className="text-label-md font-bold text-on-surface-variant uppercase tracking-tight">Growth Cohort</span>
<span className="text-primary font-bold text-[10px]">Tier A+</span>
</div>
<div className="font-display-sm text-display-sm mb-2">High Impact</div>
<p className="text-body-sm text-on-surface-variant">Top 5% leading revenue.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-8">

<div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden h-[400px]">
<div className="flex justify-between items-center mb-6 relative z-10">
<div>
<h3 className="font-headline-sm text-headline-sm">Consumption Trends</h3>
<p className="text-body-sm text-on-surface-variant">Aggregate view time across categories.</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-label-md text-on-surface-variant">Video</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="text-label-md text-on-surface-variant">Audio</span>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 top-24 px-6">

<div className="w-full h-full flex items-end gap-1 pb-10">

<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t h-[40%] group relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-on-primary px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
</div>
<div className="flex-1 bg-secondary/20 hover:bg-secondary/40 transition-all rounded-t h-[60%]"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t h-[55%]"></div>
<div className="flex-1 bg-secondary/20 hover:bg-secondary/40 transition-all rounded-t h-[80%]"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t h-[70%]"></div>
<div className="flex-1 bg-secondary/20 hover:bg-secondary/40 transition-all rounded-t h-[45%]"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t h-[90%]"></div>
<div className="flex-1 bg-secondary/20 hover:bg-secondary/40 transition-all rounded-t h-[65%]"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t h-[30%]"></div>
<div className="flex-1 bg-secondary/20 hover:bg-secondary/40 transition-all rounded-t h-[50%]"></div>
<div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t h-[75%]"></div>
<div className="flex-1 bg-secondary/20 hover:bg-secondary/40 transition-all rounded-t h-[85%]"></div>
</div>

<div className="absolute bottom-4 inset-x-6 flex justify-between text-label-md text-on-surface-variant border-t border-outline-variant pt-2">
<span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
</div>
</div>
</div>

<div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-6 flex flex-col justify-between overflow-hidden relative group">

<div className="relative z-10">
<h3 className="font-headline-sm text-headline-sm mb-1">Payout Velocity</h3>
<p className="text-body-sm opacity-70">Distribution by creator tier.</p>
<div className="mt-8 space-y-6">
<div>
<div className="flex justify-between text-label-md mb-2">
<span>Diamond Tier</span>
<span>62%</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full">
<div className="bg-primary h-full w-[62%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-md mb-2">
<span>Gold Tier</span>
<span>24%</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full">
<div className="bg-secondary h-full w-[24%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-md mb-2">
<span>Silver Tier</span>
<span>14%</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full">
<div className="bg-tertiary-fixed-dim h-full w-[14%]"></div>
</div>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<button className="w-full py-3 bg-white text-on-surface font-semibold rounded-lg hover:bg-opacity-90 transition-all">View Full Report</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="px-6 py-4 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 className="font-headline-sm text-headline-sm">Top Performer Cohort</h3>
<div className="flex items-center gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[16px]">filter_list</span>
<select className="bg-surface pl-9 pr-8 py-1.5 border border-outline-variant rounded-lg text-label-md focus:ring-primary/20 appearance-none">
<option>Sort by Payout</option>
<option>Sort by Growth</option>
<option>Sort by Engagement</option>
</select>
</div>
<button className="p-1.5 border border-outline-variant rounded-lg hover:bg-surface-variant/30 transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-6 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Creator</th>
<th className="px-6 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Category</th>
<th className="px-6 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-right">Views (30d)</th>
<th className="px-6 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-right">Avg. Revenue</th>
<th className="px-6 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Growth Trend</th>
<th className="px-6 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-center">Status</th>
<th className="px-6 py-3 text-label-md font-bold text-on-surface-variant uppercase tracking-wider"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="hover:bg-surface-container/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A vibrant avatar illustration for a creator specializing in digital art. The avatar has a creative and slightly abstract style, featuring glowing blue and magenta outlines against a dark, minimalist background. The character has an expressive, artistic look with digital brushes and neon aesthetic elements." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9aQ7OrIiTttL2FdMhlJWBG3OMTLOjq2pdApjIOr92_pHUjmbtNwV7JMpv6LOBkzzEXn1YX1Ph7H8i0-SahbixWXlBaL2p0AcMEJ-gC4w6SuoT2a9Q-JYMmmH9jmd7Ttr1uapLhpsHBMFwBxmY_MGtyKVIIhOyK2Kon7QogJcCOdXiVHPCD0ja0eqSRDeuixUY6KJL5gtliNMFs8htk6T2JuKgvBSnOGUOOowtlDPbXEfUDZmqvJXFKk0ephSZJYjh6tK6pOvDJ-Uj" />
</div>
<div>
<div className="font-label-md font-semibold text-on-surface">Elena Chroma</div>
<div className="text-code-sm text-on-surface-variant">@chroma_arts</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="bg-primary/5 text-primary text-[11px] font-bold px-2 py-1 rounded">Digital Art</span>
</td>
<td className="px-6 py-4 text-right font-code-sm">1.2M</td>
<td className="px-6 py-4 text-right font-code-sm">$12,450</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-green-600">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="text-label-md font-bold">24%</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-variant/50 rounded-lg">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A portrait of a minimalist technology reviewer in a sleek, ultra-modern home studio. The person is wearing a simple black turtleneck and glasses. The studio setup behind them is impeccably organized with high-end tech gadgets, featuring a clean white-and-gray color scheme and very precise, direct lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjb-kQokF5k90C8uY449KuuMAxnbImBbylDRhYkboXnqhXqRIFPRHcpKElF4VFQQnYjQPQxdeDa330If6vRKoq3J0Al9DCCXOfKpXWZT5xM2_KgtleMZkYEnGTRWu83VoN97tnCx5bOTalmx7aJKcCMH7BONdnqp8wE18k7ma5ouTH_1SY1VYRSM1otcUQNxwPFss9esepsGvRyWHEgSSNsFY_hiw6328H0O9BUvfCWzea8yWHPXd2OGx3yoNbgjlw6uBmTwrAUTnR" />
</div>
<div>
<div className="font-label-md font-semibold text-on-surface">Mark Techson</div>
<div className="text-code-sm text-on-surface-variant">@tech_minimal</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="bg-secondary/5 text-secondary text-[11px] font-bold px-2 py-1 rounded">Technology</span>
</td>
<td className="px-6 py-4 text-right font-code-sm">840K</td>
<td className="px-6 py-4 text-right font-code-sm">$8,900</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-green-600">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="text-label-md font-bold">12%</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-block w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-variant/50 rounded-lg">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container/30 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A highly detailed close-up of a pastry chef working in a high-key, sunlit kitchen. The chef is expertly dusting sugar over a complex, multi-layered dessert. The lighting is warm and natural, highlighting the textures of the food and the pristine cleanliness of the marble workspace. The aesthetic is elegant and refined." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx8gQQQTG8RErRnHbd3ebrfT7fUBPeTSNNUdAw4f423I3zt-NRE52fO6hVKONF1WUf0lcUaQzcH1cmzMqE1TdnA1GV8dcNd74ulIEWiKtMFXmnRNYPGb13fETr5bwqW7XINqvMT0hZO083KB47H9e0A_4rTt9faON1fXkFjuhHUdJQyQH32N805DyUN5Rx3DwhExQyQPdsvM5gHStd7a3Ok3tq4pmTWzffqIWQbryz_RGwM3qAiszaN19BbudSo2pF3tS14-j1gEa3" />
</div>
<div>
<div className="font-label-md font-semibold text-on-surface">Chef Saffron</div>
<div className="text-code-sm text-on-surface-variant">@culinary_edge</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="bg-tertiary-container/10 text-tertiary text-[11px] font-bold px-2 py-1 rounded">Lifestyle</span>
</td>
<td className="px-6 py-4 text-right font-code-sm">2.4M</td>
<td className="px-6 py-4 text-right font-code-sm">$18,200</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-red-600">
<span className="material-symbols-outlined text-[16px]">trending_down</span>
<span className="text-label-md font-bold">4%</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<span className="inline-block w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-variant/50 rounded-lg">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-outline-variant flex items-center justify-between">
<span className="text-label-md text-on-surface-variant">Showing 3 of 42 high-impact creators</span>
<div className="flex gap-2">
<button className="p-1 border border-outline-variant rounded hover:bg-surface-variant/30 disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="p-1 border border-outline-variant rounded hover:bg-surface-variant/30">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-8">
<div className="bg-primary-container/5 border border-primary/20 p-6 rounded-xl relative group overflow-hidden">
<div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-[120px]">lightbulb</span>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">trending_up</span>
</div>
<h4 className="font-headline-sm text-headline-sm">Growth Opportunity</h4>
</div>
<p className="text-body-md text-on-surface mb-4">Short-form video content consumption is up <strong>42%</strong> this month. Recommend pivoting 'Silver' tier creators to this format to boost retention.</p>
<button className="text-primary font-semibold text-label-md hover:underline flex items-center gap-1">
                        Generate Bulk Recommendation <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div className="bg-secondary-container/5 border border-secondary/20 p-6 rounded-xl relative group overflow-hidden">
<div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-[120px]">shield</span>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">gavel</span>
</div>
<h4 className="font-headline-sm text-headline-sm">Policy Alert</h4>
</div>
<p className="text-body-md text-on-surface mb-4">Payout distributions for the lifestyle category are being flagged for abnormal variance. <strong>4 accounts</strong> pending internal audit.</p>
<button className="text-secondary font-semibold text-label-md hover:underline flex items-center gap-1">
                        Review Flagged Accounts <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</main>
</div>




    </div>
  );
}
