import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatorDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body-md text-on-surface">
      

<div className="w-full flex flex-col">



<main className="flex-1 flex flex-col  overflow-y-auto bg-surface">



<div className="p-container-padding space-y-gutter pb-12">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

<div className="lg:col-span-8 flex flex-col sm:flex-row gap-gutter bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
<img className="w-32 h-32 rounded-xl object-cover shadow-sm" data-alt="A close-up portrait of a creative content creator with artistic styling, featuring vibrant background lighting in soft neon purple and blue hues. The creator looks modern and tech-savvy, suitable for a high-profile digital artist profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb5gVN06vgwLqj0xVUbJ46Kz1Ici4WKf82l1-tuQBRfxmsFgMrWI8j67ucxhZBzv1edSEJzKHccO5N9_MapD3_lSpTdO0VRDME7DL4Y8no57VLhaU_6AIkzdJyrHUbOBHJ9efozNLLfR04yJsw4xUkyJrX0tEUVn8UgvIQtmzxOb5JKeylDxb6rIPFvLQ4hvhC9u23J2eqNhmHJxIfBJoHF3IgPKxMGwWHanxm2TcuqZKGmsO1_SBerHfLYLPYeN3EoQvIF9PANMnq" />
<div className="flex-1 space-y-2">
<div className="flex justify-between items-start">
<div>
<h2 className="font-display-sm text-display-sm text-on-surface">Elena Rodriguez <span className="material-symbols-outlined text-primary text-[20px] align-middle" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span></h2>
<p className="text-on-surface-variant">Digital Artist & VR Specialist • Joined Dec 2022</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-primary-container/10 text-primary-fixed-variant rounded-full font-label-md text-label-md border border-primary/20">Active Pro</span>
<span className="px-3 py-1 bg-tertiary/10 text-tertiary-container rounded-full font-label-md text-label-md border border-tertiary/20">Premium Tier</span>
</div>
</div>
<p className="text-body-md text-on-surface-variant max-w-2xl">Specializing in high-fidelity 3D assets and generative AI environments. Recognized for top-tier quality in the SuperApp Creator Marketplace with a 99% satisfaction rate.</p>
<div className="flex gap-4 pt-2">
<div>
<p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Followers</p>
<p className="text-headline-sm font-headline-sm">1.2M</p>
</div>
<div className="w-px h-10 bg-outline-variant self-center"></div>
<div>
<p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Total Sales</p>
<p className="text-headline-sm font-headline-sm">45.8k</p>
</div>
<div className="w-px h-10 bg-outline-variant self-center"></div>
<div>
<p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Avg. Rating</p>
<div className="flex items-center gap-1">
<p className="text-headline-sm font-headline-sm">4.9</p>
<span className="material-symbols-outlined text-yellow-500 text-[18px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-gutter">
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
<h3 className="font-headline-sm text-headline-sm mb-4">Earnings Overview</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-label-md font-label-md mb-1">
<span className="text-on-surface-variant">3D Models</span>
<span className="text-on-surface">65%</span>
</div>
<div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary w-[65%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-md font-label-md mb-1">
<span className="text-on-surface-variant">Video Tutorials</span>
<span className="text-on-surface">25%</span>
</div>
<div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[25%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-md font-label-md mb-1">
<span className="text-on-surface-variant">Consulting</span>
<span className="text-on-surface">10%</span>
</div>
<div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-[10%]"></div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-outline-variant">
<p className="text-label-md font-label-md text-on-surface-variant uppercase mb-1">Total Payouts</p>
<p className="text-[32px] font-bold text-on-surface tracking-tight">$142,850.00</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">

<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm">Audience Demographics</h3>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_horiz</span>
</div>
<div className="flex-1 flex items-center justify-center relative min-h-[200px]">

<div className="w-40 h-40 rounded-full border-[16px] border-primary flex items-center justify-center">
<div className="absolute inset-0 w-full h-full border-[16px] border-secondary border-l-transparent border-t-transparent border-b-transparent rotate-45"></div>
<div className="text-center">
<p className="text-headline-sm font-bold">18-24</p>
<p className="text-label-md text-on-surface-variant">Primary Age</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-body-sm text-on-surface-variant">Age 18-24 (42%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<span className="text-body-sm text-on-surface-variant">Age 25-34 (31%)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-tertiary"></div>
<span className="text-body-sm text-on-surface-variant">Age 35+ (27%)</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-sm text-headline-sm">Global Reach</h3>
<div className="flex bg-surface-container rounded-lg p-1">
<button className="px-3 py-1 bg-surface-container-lowest shadow-sm rounded text-label-md font-semibold">Map</button>
<button className="px-3 py-1 text-label-md text-on-surface-variant">List</button>
</div>
</div>
<div className="w-full h-48 rounded-lg bg-surface-variant/30 overflow-hidden relative group">
<img className="w-full h-full object-cover filter grayscale opacity-60 group-hover:opacity-80 transition-opacity" data-location="New York" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpRDv1C0UjqLk8UJvoE8nGsHI2wnpkwVs36D9JYyRrwX-dQpWWwjVbEPSTkWnjFsIzDBWLYyV-5DGWOCZ8_0S61j7tyRL2RgehkqXJAmPMsoaERdh-in7-HYdPHhq6EwbviawcpJyUWpEKDBf1mz53-omSQb9Ug_3iYU9Aj4lJ6ntdv5I0mL_Vnyz_egE1JYS8qEYEFbeEh1WlGROVTM8Z_8O5N8H0vAArElJquS2iiVwxiQfIsrdHiG_E-alrbfm6W9Jvyo2d6lfY" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
<div className="w-3 h-3 bg-primary rounded-full absolute"></div>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">United States</span>
<span className="font-semibold">38%</span>
</div>
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">Germany</span>
<span className="font-semibold">22%</span>
</div>
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">Japan</span>
<span className="font-semibold">15%</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm mb-1">Growth Velocity</h3>
<p className="text-label-md text-on-surface-variant mb-4">Past 30 days performance</p>
</div>
<div className="h-32 flex items-end gap-1 px-2">

<div className="flex-1 bg-primary/20 rounded-t h-1/2"></div>
<div className="flex-1 bg-primary/30 rounded-t h-2/3"></div>
<div className="flex-1 bg-primary/40 rounded-t h-1/3"></div>
<div className="flex-1 bg-primary/50 rounded-t h-3/4"></div>
<div className="flex-1 bg-primary/60 rounded-t h-1/2"></div>
<div className="flex-1 bg-primary/70 rounded-t h-full"></div>
<div className="flex-1 bg-primary rounded-t h-[90%]"></div>
</div>
<div className="mt-4 flex items-center justify-between">
<div>
<p className="text-display-sm font-bold text-primary">+12.4%</p>
<p className="text-label-md text-on-surface-variant">Conversion Rate</p>
</div>
<button className="flex items-center gap-1 text-primary font-bold text-label-md hover:underline">
                                View Details
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-12 gap-gutter">

<div className="xl:col-span-8 space-y-gutter">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm">Moderation Log</h3>
<button className="text-primary font-bold text-label-md flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">history</span>
                                    Full History
                                </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-tight">Date</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-tight">Asset/Event</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-tight">Action</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-tight">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-variant/20 transition-colors">
<td className="px-6 py-4 text-body-sm font-code-sm">2023-10-24</td>
<td className="px-6 py-4">
<p className="font-semibold">Cyber City 3D Pack</p>
<p className="text-label-md text-on-surface-variant">Asset Verification</p>
</td>
<td className="px-6 py-4 text-body-sm">Initial Scan</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-label-md font-bold uppercase">Passed</span>
</td>
</tr>
<tr className="hover:bg-surface-variant/20 transition-colors">
<td className="px-6 py-4 text-body-sm font-code-sm">2023-09-12</td>
<td className="px-6 py-4">
<p className="font-semibold">Creator Payout #82</p>
<p className="text-label-md text-on-surface-variant">Financial Audit</p>
</td>
<td className="px-6 py-4 text-body-sm">Compliance Review</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-label-md font-bold uppercase">Passed</span>
</td>
</tr>
<tr className="hover:bg-surface-variant/20 transition-colors">
<td className="px-6 py-4 text-body-sm font-code-sm">2023-07-05</td>
<td className="px-6 py-4">
<p className="font-semibold">Neon Mask V2</p>
<p className="text-label-md text-on-surface-variant">Report ID: #9921</p>
</td>
<td className="px-6 py-4 text-body-sm">Copyright Dispute</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-label-md font-bold uppercase">Resolved</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="relative rounded-xl overflow-hidden group aspect-square">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A futuristic 3D architectural model of a cyberpunk city skyscraper with glowing neon signs and intricate structural details. Professional rendering with cinematic lighting and reflections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn7Bl87qGR9_ok4wAMg2m38gFeKSqCdFkksxiC1bBYI1z6B6LFxudAs3TVHErphxz3WVD4pdQUq87KiP-3sqtB_Kj2LbSxWIVhh_keXyHVzR_c_uRQvKgiS6ApAiAF5zms9SpcwQdmr_8C8BSAvxH1HgsnkPX2Q_PcCCFE6RwcHzGkITxGmsdp6ChcoZBTNTeIarmPO4raugkaWji--P6T1p824oSKVVshVW-GAKX6x1VCHhqK8IKQ7g13exoEsRRiy2X9Youj__w7" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
<p className="text-white font-bold text-body-sm">Night City Highrise</p>
<p className="text-white/70 text-label-md">$45.00</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group aspect-square">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close-up of a highly detailed 3D sculpted character head with glowing ocular implants and translucent synthetic skin. Sci-fi digital art, professional lighting focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-DQiZyT6HXDA_cAHdeeyLsLHaxWh4mW5TWUTWGGlCRGv2uXPwqs7ktgHjf0ixrWbixXFrtCxpeJ4SfMS-r8LTO7sHnkg2simtNado0Fm__WOvRkWgSfShQGYaIBaE0zesZOrmIDXRGO-Qc7EAoics_noboVrQfZGlAghuT7Zm4vwRAA95xNvNPu7cAj5iYlf9gR9bRKJug3wFINRuNYA_AwhoIyjfbK32cytWxlqmeZktVr9OEu2MHCu2uedWx2byhCvU6eexti8k" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
<p className="text-white font-bold text-body-sm">Android Base Mesh</p>
<p className="text-white/70 text-label-md">$120.00</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group aspect-square">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Abstract 3D digital landscape with floating geometric crystals and iridescent liquid flows. High-end procedural texture generation and ambient occlusion lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYsTNYAaB3H7Swibr0w0mbVcNXLDk39FDPRi4w0gtVHwfY9qksxW0RgEi7z0G7VSlx2nbNzgB-msXTMYCZ-IxPUs2cuGm4HK2cnR1ne5DfpZ94MDbmCktPb8zVTRsDmSC7hYqTbkebJC6RaKtnv2c4_Rula-VB0jh6pNnQkfMYENzpeJBMc0GmIWENyb7N3KIdv-g2tKK74bWGznuoPncXR049JdrbUkJrWXkJVSuUIeLNgB3i2WFy-bBBXVprxte8tX1sSs2nMSv9" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
<p className="text-white font-bold text-body-sm">Ether Voids Pack</p>
<p className="text-white/70 text-label-md">$85.00</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group aspect-square border-2 border-dashed border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="text-center">
<span className="material-symbols-outlined text-outline text-[32px]">add_circle</span>
<p className="text-label-md font-bold mt-2">Manage Assets</p>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 space-y-gutter">

<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
<h3 className="font-headline-sm text-headline-sm mb-4">Subscription Plan</h3>
<div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-6">
<div className="flex justify-between items-center mb-2">
<span className="font-bold text-primary">Creator Elite</span>
<span className="text-label-md font-bold text-on-surface-variant">$49/mo</span>
</div>
<p className="text-body-sm text-on-surface-variant mb-4">Renews on Nov 28, 2023</p>
<div className="flex gap-2">
<button className="flex-1 py-1.5 bg-primary text-on-primary rounded text-label-md font-bold hover:bg-primary/90 transition-colors">Manage</button>
<button className="px-3 py-1.5 border border-outline-variant rounded text-label-md font-bold hover:bg-surface-container transition-colors">History</button>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-600 text-[20px]">check_circle</span>
<span className="text-body-sm">Zero Transaction Fees</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-600 text-[20px]">check_circle</span>
<span className="text-body-sm">Priority Content Review</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-600 text-[20px]">check_circle</span>
<span className="text-body-sm">1TB Asset Cloud Storage</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
<h3 className="font-headline-sm text-headline-sm mb-4">Payout Settings</h3>
<div className="flex items-center gap-4 p-3 border border-outline-variant rounded-lg mb-4">
<div className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">account_balance</span>
</div>
<div className="flex-1">
<p className="font-bold text-body-sm">Chase Bank Business</p>
<p className="text-label-md text-on-surface-variant">Ending in **** 9201</p>
</div>
<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold uppercase">Primary</span>
</div>
<div className="space-y-4 mb-6">
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">Threshold</span>
<span className="font-bold">$500.00</span>
</div>
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">Frequency</span>
<span className="font-bold">Bi-Weekly</span>
</div>
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">Auto-Tax Withholding</span>
<div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
<button className="w-full py-2 border border-outline text-on-surface-variant font-bold text-label-md rounded hover:bg-surface-variant/20 transition-colors">Edit Payout Details</button>
</div>
</div>
</section>
</div>
</main>
</div>



    </div>
  );
}
