import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatorsList() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface">
      



<main className="flex flex-col">



<section className="p-container-padding space-y-6">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h2 className="font-display-sm text-display-sm text-on-surface">Creator Ecosystem</h2>
<p className="text-body-md text-on-surface-variant mt-1">Manage and monitor high-performance content partners.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-label-md font-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Segment
                    </button>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-label-md font-label-md hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export Data
                    </button>
</div>
</div>

<div className="flex border-b border-outline-variant gap-8 overflow-x-auto pb-px">
<button className="pb-3 border-b-2 border-primary text-on-surface font-semibold text-label-md px-1 whitespace-nowrap">All Creators</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-colors text-label-md px-1 whitespace-nowrap">Lifestyle</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-colors text-label-md px-1 whitespace-nowrap">Tech & Gadgets</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-colors text-label-md px-1 whitespace-nowrap">Education</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-colors text-label-md px-1 whitespace-nowrap">Gaming</button>
<button className="pb-3 border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-colors text-label-md px-1 whitespace-nowrap">Under Review</button>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50 border-b border-outline-variant">
<th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant uppercase tracking-wider">Creator</th>
<th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant uppercase tracking-wider">Content Niche</th>
<th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant uppercase tracking-wider">Followers</th>
<th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant uppercase tracking-wider">Total Earnings</th>
<th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant uppercase tracking-wider">Growth %</th>
<th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="px-6 py-4 text-label-md font-semibold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">

<tr className="hover:bg-surface-variant/10 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/creators/CRE-1049"); }}>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a young creative professional with modern glasses and a colorful aesthetic. The background is a clean, minimal artist studio with bright daylight, maintaining a high-end light mode appearance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL-zeAMgLBA8ZGafBKnq-IJS6z5Ui-1v7ghF5g4rfWo5DPnIl8B6EidGRm_JXwJgaQQx-pammFLMLWCBfhR2dzDlE3M0mwzblBYVW-QoWdF5zhDoxDQV9PdlXnCDYkQgDgy_rLlATEC6FYTUpf_4BvMdcE0Gg7o0LvUdOXoRpFKYFdeZ_1_mVEaGqyEXKJ7SdzT0wckgNSrwe2IpzsmPCeH5ZMjI7urYppJ-uTua9rnn_jM2yu3v6eghcRlcOlgE3aSKib4snUngnk" />
</div>
<div>
<div className="text-body-md font-semibold text-on-surface">Alex Rivera</div>
<div className="text-label-md text-on-surface-variant">@arivera_tech</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container/10 text-secondary font-label-md border border-secondary-container/20">Consumer Tech</span>
</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface">1.2M</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface">$240,500.00</td>
<td className="px-6 py-4">
<div className="flex items-center text-primary font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                                        +14.2%
                                    </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-100 text-green-700 text-label-md font-medium border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Active
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors" title="Quick Edit">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors" title="View Analytics">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">monitoring</span>
</button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors" title="More Options">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-variant/10 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/creators/CRE-1049"); }}>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Minimalist portrait of a stylish woman in her 30s with a clean and professional appearance. The lighting is soft and even, highlighting her expression in a bright, modern interior setting that looks like a high-end designer office." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7eH4tqQKkFMM2GQ7aAiDmSu6knCE7LBuvZi6GMPFYQ0P9RYMd97Pj713DYlNw7KWRYs4NN4929M4LWtxBp0Qx2XbDCy77m9QnHQV7eZUP8J-Nc1rXqHuCe5SXa4FUekFV98boC66yYdtxeNtbkzCMLOLEAOUe9_Hmk8ms_9BvGvQaFRPx4ikXgpIycIRiizGGpXBiWGZPHgyN87BuYiEAwNxWO0SYnOWv1xb361-PP1eeFPK-oS5KjBDJ_BxCEued4K_kJvj34PpD" />
</div>
<div>
<div className="text-body-md font-semibold text-on-surface">Sarah Jenkins</div>
<div className="text-label-md text-on-surface-variant">@sarah_writes</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container/10 text-secondary font-label-md border border-secondary-container/20">Productivity</span>
</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface">850K</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface">$112,000.00</td>
<td className="px-6 py-4">
<div className="flex items-center text-primary font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                                        +5.8%
                                    </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-100 text-green-700 text-label-md font-medium border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Active
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">monitoring</span>
</button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-variant/10 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/creators/CRE-1049"); }}>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional studio portrait of a man with an approachable and friendly expression, wearing a simple white shirt. The background is a crisp off-white gallery wall, emphasizing the clean neo-minimalist style of the interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2OcKwuFF5o08_p4Y5h_vxOTDwmgkEn62Py9ToIm3lYUalfwWsne0E3F7DuuiM1wymfi4G2Mp2CT2wuDHA5-Hzr4D31NyyJe6EV8Khb3bhfXhOVw94JglLFAqkbyRkgHD5qD04ltuPR0YVgZcaYOiF6Gf1NA5oQoUJ0wwXoQxJvyH4U04_jM2dKgvkNikfA6qLxqPowMpudRzrXNLngbZKcxkE-0zPASSPYU5wX3LFxEruEAQDKKvm6NHXkrzkJ4KzI7Z7r7uIrwnb" />
</div>
<div>
<div className="text-body-md font-semibold text-on-surface">Marcus Chen</div>
<div className="text-label-md text-on-surface-variant">@mchen_cooking</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container/10 text-secondary font-label-md border border-secondary-container/20">Culinary Art</span>
</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface">32K</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface">$4,200.00</td>
<td className="px-6 py-4">
<div className="flex items-center text-tertiary font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px] mr-1">trending_down</span>
                                        -1.2%
                                    </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-label-md font-medium border border-yellow-200">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                        Review
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">monitoring</span>
</button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">more_vert</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-variant/10 transition-colors group cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/creators/CRE-1049"); }}>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Candid high-resolution photograph of a creative director in a bright, sun-drenched loft. The aesthetic is clean and modern, focusing on natural textures and a palette of whites and soft blues to match the UI system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYIsLQU1qf-oTvFzIRkw_BWHBzS3iTebxkp05LXcRB3zFJRySk_YLYGSVwBJfPe-diZ4Eg1biOnkeueiDL958hsRDcaOhPNw_LAERfukCLId2QbJWQwYYWt37CI32OOJuFGTXG0vIzqn02AiIlFX91fUztP2T-zNTO3HHxFfRpI2ByC05QTjDDTU8TSArBznhkBKPQ5Um-NzU0BPu1zyxwJRm-Rt0ZFOVLhHUozGTSHjq84YLxqNFSgeXrIJrn3WdFVdl7XmiXsgld" />
</div>
<div>
<div className="text-body-md font-semibold text-on-surface">Lila Thorne</div>
<div className="text-label-md text-on-surface-variant">@lilathorne_ux</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container/10 text-secondary font-label-md border border-secondary-container/20">Design</span>
</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface">245K</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface">$89,750.00</td>
<td className="px-6 py-4">
<div className="flex items-center text-primary font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                                        +28.4%
                                    </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-100 text-green-700 text-label-md font-medium border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Active
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">edit</span>
</button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">monitoring</span>
</button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 bg-surface-container-low/30 border-t border-outline-variant flex items-center justify-between">
<span className="text-label-md text-on-surface-variant">Showing 1 to 10 of 1,284 creators</span>
<div className="flex gap-2">
<button className="px-3 py-1.5 border border-outline-variant rounded hover:bg-surface transition-colors text-label-md">Previous</button>
<button className="px-3 py-1.5 border border-outline-variant rounded hover:bg-surface transition-colors text-label-md">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="p-container-padding bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<div>
<p className="text-label-md text-on-surface-variant font-medium">Global Creator Payouts</p>
<h3 className="text-display-sm font-display-sm text-on-surface mt-1">$4.2M</h3>
</div>
<span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">payments</span>
</div>
<div className="text-label-md text-green-600 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                        +12.5% vs last month
                    </div>
</div>
<div className="p-container-padding bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<div>
<p className="text-label-md text-on-surface-variant font-medium">New Applications</p>
<h3 className="text-display-sm font-display-sm text-on-surface mt-1">1,482</h3>
</div>
<span className="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-lg">person_add</span>
</div>
<div className="text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span>
                        42 pending review
                    </div>
</div>
<div className="p-container-padding bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<div>
<p className="text-label-md text-on-surface-variant font-medium">Engagement Score</p>
<h3 className="text-display-sm font-display-sm text-on-surface mt-1">94.2%</h3>
</div>
<span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-2 rounded-lg">bolt</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full mt-4 overflow-hidden">
<div className="bg-primary h-full w-[94%]"></div>
</div>
</div>
</div>
</section>
</main>



    </div>
  );
}
