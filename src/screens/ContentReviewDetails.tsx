import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContentReviewDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md">
      



<main className="flex-1 flex flex-col  relative">



<div className="flex-1 flex overflow-hidden">

<div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-container-padding bg-surface">

<div className="flex justify-between items-center mb-container-padding">
<div>
<h2 className="font-display-sm text-display-sm">Violation Report: Improper Content</h2>
<p className="text-on-surface-variant font-body-md">Report ID: <span className="font-code-sm">MOD-9921-XQ</span> • Reported 2 hours ago</p>
</div>
<div className="flex gap-stack-tight">
<button className="px-container-padding py-stack-tight border border-outline text-on-surface rounded font-label-md hover:bg-surface-variant transition-all active:scale-95">
                            Export Data
                        </button>
<button className="px-container-padding py-stack-tight bg-primary text-on-primary rounded font-label-md shadow-sm hover:bg-primary-container transition-all active:scale-95">
                            Escalate Case
                        </button>
</div>
</div>

<div className="grid grid-cols-2 gap-gutter mb-container-padding">

<div className="bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="px-stack-default py-stack-tight bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
<span className="font-label-md font-bold uppercase tracking-wider text-on-surface-variant">Original Content</span>
<span className="px-unit bg-surface-container-high rounded text-on-surface text-[10px] font-bold">POST ID: 88219</span>
</div>
<div className="p-container-padding flex-1">
<div className="flex items-center gap-stack-default mb-stack-default">
<img className="w-10 h-10 rounded-full" data-alt="A minimalist avatar of a female creator with colorful hair, professional profile photography style, bright and modern, against a soft lavender background to harmonize with the UI's secondary color accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8TujAhpq1hqzZBzBzHCmNG3DVLxkYnLY7fkaccOy_Pb9V8DSa6p8j6H9RixfGfY4IfApPXh96Y3N_wz5vIqXlQW58ovR1cILWLcx_N2s4e0X3rSzUzrvNUu2HXJzlnqf5HJx-szRg28NIe1hoI8Geaw9E0FI6KjgnuiJHgwQyobrBJcMKnRbXdxFBjjXWnz-DLN6lD__sgUPY86F5F-ZdU5YPJByvwUtFmtK86ym0q1nDW5De-pq8dJNPbxrbKSrO3d09EcvmNdir" />
<div>
<h4 className="font-body-md font-bold text-on-surface">Elena "Cyber" Moss</h4>
<p className="text-label-md text-on-surface-variant">@emoss_creations • Joined 2022</p>
</div>
</div>
<div className="aspect-video w-full rounded-lg mb-stack-default overflow-hidden relative group">
<img className="w-full h-full object-cover" data-alt="A piece of high-end digital abstract art with flowing liquid metallic textures in deep indigo and neon blue. The image looks professional and artistic but contains subtle, potentially prohibited iconography hidden within the patterns. High-resolution aesthetic consistent with a luxury marketplace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl9hH01QEkkq47XWu8E8IX3zJ71gJ59Gw7qrj1aTpunhV0iTGPVIUV-Hj5RIQBcBxPF4cAPukLOcMLBOFvNwoOkj1xnFMFK3jLZc3xGBRwlEGEFXUAje0g4ditLb7THNWBpHo8HjZ9dU3QCwzmRuBRtKAoi_Dzs2Fg8_2OAMdwsYSaltMtA2BK0MDRonmDUhHV3PeYOevYD3KuoIA26cCHTvMfvPZcAI4YyQFULsaOvLMUnMZz7iRY5ci846UOpaP_QR6b_rq2YzXn" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<button className="bg-white/20 backdrop-blur-md border border-white/40 text-white rounded-full px-container-padding py-stack-tight font-label-md flex items-center gap-stack-tight">
<span className="material-symbols-outlined">zoom_in</span>
                                        Inspect Source
                                    </button>
</div>
</div>
<p className="font-body-md text-on-surface leading-relaxed">
                                "The final fragment of the Nexus Core. We don't follow the rules anymore. Join the resistance at the link in bio. #unfiltered #nexus #systemoverload"
                            </p>
</div>
</div>

<div className="bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="px-stack-default py-stack-tight bg-error-container/30 border-b border-outline-variant flex justify-between items-center">
<span className="font-label-md font-bold uppercase tracking-wider text-error">Reported Violation</span>
<span className="px-unit bg-error text-white rounded text-[10px] font-bold">URGENT</span>
</div>
<div className="p-container-padding flex-1">
<div className="flex items-start gap-stack-default mb-stack-default">
<div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined">report</span>
</div>
<div>
<h4 className="font-body-md font-bold text-on-surface">Report Source: AI Guardian</h4>
<p className="text-label-md text-on-surface-variant">Automated Scan • Category: Hate Speech / Recruitment</p>
</div>
</div>
<div className="space-y-stack-default">
<div className="p-stack-default bg-surface-container-low rounded border-l-4 border-error">
<span className="text-label-md font-bold text-error block mb-unit uppercase">Detected Trigger Words</span>
<div className="flex flex-wrap gap-unit">
<span className="px-unit bg-white border border-outline-variant rounded font-code-sm text-on-surface">"resistance"</span>
<span className="px-unit bg-white border border-outline-variant rounded font-code-sm text-on-surface">"systemoverload"</span>
<span className="px-unit bg-white border border-outline-variant rounded font-code-sm text-on-surface">"unfiltered"</span>
</div>
</div>
<div className="p-stack-default bg-surface-container-low rounded border-l-4 border-primary">
<span className="text-label-md font-bold text-primary block mb-unit uppercase">AI Recommendation</span>
<p className="font-body-sm text-on-surface-variant">
                                        Content score: 0.89 probability of violating community guideline 4.2 (Anti-Institutional Recruitment). Recommendation: <span className="font-bold text-on-surface">Temporary Suspension (24h)</span> pending manual moderator review.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-gutter">
<div className="col-span-2 bg-white border border-outline-variant rounded-xl p-container-padding shadow-sm">
<div className="flex items-center justify-between mb-stack-default">
<h3 className="font-headline-sm font-bold">User Trust & History</h3>
<span className="px-stack-default py-unit bg-surface-container-highest rounded-full text-on-surface-variant font-label-md">Tier 2 Creator</span>
</div>
<div className="grid grid-cols-4 gap-stack-default">
<div className="p-stack-default rounded-lg border border-outline-variant text-center">
<span className="text-label-md text-on-surface-variant block">Total Posts</span>
<span className="font-display-sm text-primary">1.2k</span>
</div>
<div className="p-stack-default rounded-lg border border-outline-variant text-center">
<span className="text-label-md text-on-surface-variant block">Prev. Strikes</span>
<span className="font-display-sm text-error">2</span>
</div>
<div className="p-stack-default rounded-lg border border-outline-variant text-center">
<span className="text-label-md text-on-surface-variant block">Account Age</span>
<span className="font-display-sm text-on-surface">1.4y</span>
</div>
<div className="p-stack-default rounded-lg border border-outline-variant text-center">
<span className="text-label-md text-on-surface-variant block">Trust Score</span>
<span className="font-display-sm text-on-surface">64%</span>
</div>
</div>
<div className="mt-stack-default">
<table className="w-full text-left">
<thead className="border-b border-outline-variant text-label-md text-on-surface-variant uppercase">
<tr>
<th className="py-stack-tight">Date</th>
<th className="py-stack-tight">Incident</th>
<th className="py-stack-tight">Action</th>
<th className="py-stack-tight">Status</th>
</tr>
</thead>
<tbody className="text-body-sm">
<tr className="border-b border-outline-variant/30 hover:bg-surface-variant/10">
<td className="py-stack-tight py-stack-tight">Oct 12, 2023</td>
<td>Copyright Claim</td>
<td>Warning</td>
<td><span className="text-secondary font-bold">Resolved</span></td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-variant/10">
<td className="py-stack-tight py-stack-tight">Aug 04, 2023</td>
<td>Spamming</td>
<td>24h Ban</td>
<td><span className="text-error font-bold">Strike 1</span></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-primary/5 border border-primary/20 rounded-xl p-container-padding flex flex-col relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline-sm font-bold text-primary mb-stack-tight">Action Recommendation</h3>
<p className="text-on-surface-variant text-body-sm mb-stack-default">Based on the user's history of 2 strikes and the high probability of violation, the system suggests a firm escalation.</p>
<div className="space-y-stack-tight">
<div className="flex items-center gap-stack-tight">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="text-body-sm font-semibold">Immediate Content Takedown</span>
</div>
<div className="flex items-center gap-stack-tight opacity-50">
<span className="material-symbols-outlined text-primary text-[18px]">radio_button_unchecked</span>
<span className="text-body-sm">7-Day Creator Ban</span>
</div>
<div className="flex items-center gap-stack-tight opacity-50">
<span className="material-symbols-outlined text-primary text-[18px]">radio_button_unchecked</span>
<span className="text-body-sm">Appeal Eligibility: YES</span>
</div>
</div>
</div>
<div className="absolute -bottom-4 -right-4 opacity-10">
<span className="material-symbols-outlined text-[120px]">smart_toy</span>
</div>
</div>
</div>
</div>


</div>
</main>



    </div>
  );
}
