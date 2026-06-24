import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SystemSettings() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md">
      


<div className="w-full flex flex-col">



<main className="flex-1 overflow-y-auto bg-surface">
<div className="max-w-[1200px] mx-auto p-container-padding">

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-3 space-y-2">
<h3 className="text-label-md font-label-md text-outline uppercase tracking-widest px-3 mb-4">Categories</h3>
<button className="w-full text-left px-3 py-2 rounded bg-surface-container font-bold text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">security</span> Security
                        </button>
<button className="w-full text-left px-3 py-2 rounded hover:bg-surface-container-low text-on-surface-variant flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[18px]">language</span> Regional
                        </button>
<button className="w-full text-left px-3 py-2 rounded hover:bg-surface-container-low text-on-surface-variant flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[18px]">payments</span> Platform Fees
                        </button>
<button className="w-full text-left px-3 py-2 rounded hover:bg-surface-container-low text-on-surface-variant flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[18px]">notifications_active</span> Notifications
                        </button>
<button className="w-full text-left px-3 py-2 rounded hover:bg-surface-container-low text-on-surface-variant flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[18px]">api</span> API Keys
                        </button>
</div>

<div className="col-span-9 space-y-gutter">

<section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">security</span> Security Authentication
                            </h2>
<div className="space-y-6">
<div className="flex items-center justify-between py-4 border-b border-outline-variant last:border-0">
<div className="flex-1">
<div className="font-bold text-on-surface">Multi-Factor Authentication (MFA)</div>
<div className="text-on-surface-variant text-body-sm">Enforce secondary verification for all administrative accounts.</div>
</div>
<div className="ml-4">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox" />
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
<div className="flex items-center justify-between py-4 border-b border-outline-variant last:border-0">
<div className="flex-1">
<div className="font-bold text-on-surface">IP Whitelisting</div>
<div className="text-on-surface-variant text-body-sm">Restrict admin access to specific corporate IP ranges.</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-surface-container rounded text-code-sm font-code-sm">192.168.1.*</span>
<button className="text-primary hover:underline text-body-sm font-bold">Edit</button>
</div>
</div>
<div className="flex items-center justify-between py-4">
<div className="flex-1">
<div className="font-bold text-on-surface">Session Timeout</div>
<div className="text-on-surface-variant text-body-sm">Automatic logout duration for inactive admin sessions.</div>
</div>
<select className="bg-surface-container border border-outline-variant rounded px-3 py-1.5 text-body-sm focus:ring-1 focus:ring-primary outline-none">
<option>15 Minutes</option>
<option selected={true}>30 Minutes</option>
<option>1 Hour</option>
<option>4 Hours</option>
</select>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">language</span> Regional Defaults
                            </h2>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-label-md font-label-md text-on-surface-variant">Default Currency</label>
<select className="w-full bg-surface-container border border-outline-variant rounded px-3 py-2 text-body-sm focus:ring-1 focus:ring-primary outline-none">
<option selected={true}>USD ($) - United States Dollar</option>
<option>EUR (€) - Euro</option>
<option>GBP (£) - British Pound</option>
<option>JPY (¥) - Japanese Yen</option>
</select>
</div>
<div className="space-y-2">
<label className="text-label-md font-label-md text-on-surface-variant">Default Language</label>
<select className="w-full bg-surface-container border border-outline-variant rounded px-3 py-2 text-body-sm focus:ring-1 focus:ring-primary outline-none">
<option selected={true}>English (US)</option>
<option>English (UK)</option>
<option>Spanish</option>
<option>French</option>
</select>
</div>
<div className="space-y-2 col-span-2">
<label className="text-label-md font-label-md text-on-surface-variant">Timezone</label>
<select className="w-full bg-surface-container border border-outline-variant rounded px-3 py-2 text-body-sm focus:ring-1 focus:ring-primary outline-none">
<option selected={true}>(GMT-05:00) Eastern Time (US & Canada)</option>
<option>(GMT+00:00) Western European Time</option>
<option>(GMT+08:00) Beijing, Perth, Singapore</option>
</select>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg overflow-hidden relative">
<div className="absolute top-0 right-0 p-6">
<span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Live Pricing</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">payments</span> Platform Fee Management
                            </h2>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 bg-surface rounded border border-outline-variant">
<div className="text-on-surface-variant text-label-md font-label-md mb-1">Marketplace Fee</div>
<div className="text-display-sm text-primary">12.5%</div>
<div className="text-[10px] text-green-600 font-bold flex items-center mt-2">
<span className="material-symbols-outlined text-[12px] mr-1">trending_down</span> -0.5% vs Last Qtr
                                    </div>
</div>
<div className="p-4 bg-surface rounded border border-outline-variant">
<div className="text-on-surface-variant text-label-md font-label-md mb-1">Processing Fee</div>
<div className="text-display-sm text-primary">2.9%</div>
<div className="text-[10px] text-on-surface-variant font-bold flex items-center mt-2">
<span className="material-symbols-outlined text-[12px] mr-1">table</span> Flat
                                    </div>
</div>
<div className="p-4 bg-surface rounded border border-outline-variant">
<div className="text-on-surface-variant text-label-md font-label-md mb-1">Platform Payout</div>
<div className="text-display-sm text-primary">$0.30</div>
<div className="text-[10px] text-on-surface-variant font-bold mt-2">Per Transaction</div>
</div>
</div>
<div className="space-y-4">
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center mb-1">
<span className="text-body-sm font-bold">Dynamic Surcharge Threshold</span>
<span className="text-code-sm font-code-sm text-primary">$5,000.00</span>
</div>
<input className="w-full h-1.5 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
</div>
<p className="text-[11px] text-on-surface-variant italic">Note: Fee updates require 24-hour propagation across global nodes and notification to all affected vendors.</p>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">notifications_active</span> Notification Protocols
                            </h2>
<div className="space-y-2">
<div className="flex items-center gap-4 p-4 hover:bg-surface transition-colors border border-transparent hover:border-outline-variant rounded">
<div className="w-10 h-10 bg-error-container text-on-error-container rounded flex items-center justify-center">
<span className="material-symbols-outlined">warning</span>
</div>
<div className="flex-1">
<div className="font-bold text-on-surface">Critical System Alerts</div>
<div className="text-on-surface-variant text-body-sm">Slack + SMS + Email for server outages and security breaches.</div>
</div>
<button className="px-4 py-1.5 bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded text-label-md font-bold">Config</button>
</div>
<div className="flex items-center gap-4 p-4 hover:bg-surface transition-colors border border-transparent hover:border-outline-variant rounded">
<div className="w-10 h-10 bg-secondary-container text-on-secondary-container rounded flex items-center justify-center">
<span className="material-symbols-outlined">monitoring</span>
</div>
<div className="flex-1">
<div className="font-bold text-on-surface">Performance Digests</div>
<div className="text-on-surface-variant text-body-sm">Weekly analytics rollups delivered to executive email list.</div>
</div>
<button className="px-4 py-1.5 bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded text-label-md font-bold">Config</button>
</div>
</div>
</section>

<div className="flex items-center justify-between pt-6 border-t border-outline-variant">
<div className="flex items-center gap-2 text-on-surface-variant text-body-sm">
<span className="material-symbols-outlined text-[16px]">history</span>
                                Last updated: Oct 24, 2023 at 14:22 by @j.smith
                            </div>
<div className="flex items-center gap-4">
<button className="px-6 py-2 border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors rounded font-bold text-body-sm">Discard Changes</button>
<button className="px-8 py-2 bg-primary text-on-primary hover:bg-primary/90 transition-colors rounded font-bold text-body-sm shadow-sm">Save Platform State</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </div>
  );
}
