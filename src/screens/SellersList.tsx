import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SellersList() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      





<main className="p-container-padding">

<div className="mb-container-padding flex flex-col gap-unit">

<h1 className="font-display-sm text-display-sm text-on-surface font-extrabold tracking-tight">Sellers Management</h1>
<p className="text-on-surface-variant font-body-md max-w-2xl">Monitor merchant performance, health metrics, and onboarding status across the global marketplace ecosystem.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-container-padding">
<div className="bg-surface-container-lowest p-container-padding border border-outline-variant flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-6xl">storefront</span>
</div>
<span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Total Active Sellers</span>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-display-sm text-on-surface">12,482</span>
<span className="text-green-600 text-label-md font-bold flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> 4.2%
                    </span>
</div>
<div className="w-full bg-outline-variant/30 h-1 mt-2">
<div className="bg-primary h-full w-[78%]"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-container-padding border border-outline-variant flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-6xl">payments</span>
</div>
<span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Avg. Monthly GMV</span>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-display-sm text-on-surface">$14.2M</span>
<span className="text-green-600 text-label-md font-bold flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> 12%
                    </span>
</div>
<div className="w-full bg-outline-variant/30 h-1 mt-2">
<div className="bg-secondary h-full w-[64%]"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-container-padding border border-outline-variant flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-6xl">new_releases</span>
</div>
<span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Pending Onboarding</span>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-display-sm text-on-surface">342</span>
<span className="text-tertiary text-label-md font-bold flex items-center">
<span className="material-symbols-outlined text-sm">history</span> +18 today
                    </span>
</div>
<div className="w-full bg-outline-variant/30 h-1 mt-2">
<div className="bg-tertiary h-full w-[25%]"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-container-padding border border-outline-variant flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-6xl">warning</span>
</div>
<span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Risk Alerts</span>
<div className="flex items-baseline gap-2">
<span className="text-display-sm font-display-sm text-on-surface">24</span>
<span className="text-error text-label-md font-bold flex items-center">
<span className="material-symbols-outlined text-sm">priority_high</span> High Priority
                    </span>
</div>
<div className="w-full bg-outline-variant/30 h-1 mt-2">
<div className="bg-error h-full w-[12%]"></div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-4 border border-outline-variant mb-unit border-b-0 flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-label-md font-bold text-on-surface-variant">Filters:</span>
<select className="bg-surface border border-outline-variant text-body-sm px-3 py-1.5 focus:border-primary focus:ring-0 rounded-lg">
<option>Category: All</option>
<option>Electronics</option>
<option>Home & Garden</option>
<option>Fashion</option>
<option>Health & Beauty</option>
</select>
<select className="bg-surface border border-outline-variant text-body-sm px-3 py-1.5 focus:border-primary focus:ring-0 rounded-lg">
<option>Revenue Tier: All</option>
<option>Tier 1 ($1M+)</option>
<option>Tier 2 ($100k-$1M)</option>
<option>Tier 3 (&lt;$100k)</option>
</select>
<select className="bg-surface border border-outline-variant text-body-sm px-3 py-1.5 focus:border-primary focus:ring-0 rounded-lg">
<option>Risk Level: All</option>
<option>Low Risk</option>
<option>Medium Risk</option>
<option>High Risk</option>
</select>
</div>
<div className="h-6 w-[1px] bg-outline-variant"></div>
<div className="flex-1 flex justify-end gap-2">
<button className="flex items-center gap-2 text-on-surface-variant hover:text-primary text-body-sm font-medium px-2 transition-colors">
<span className="material-symbols-outlined">filter_list</span>
                    Clear All
                </button>
<button className="flex items-center gap-2 text-on-surface-variant hover:text-primary text-body-sm font-medium px-2 transition-colors">
<span className="material-symbols-outlined">view_column</span>
                    Columns
                </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high border-b border-outline-variant">
<th className="py-3 px-4 w-10">
<input className="text-primary focus:ring-primary border-outline" type="checkbox" />
</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Shop Name</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Category</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Avg Rating</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Monthly Revenue</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Products</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Status</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-bold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">

<tr className="table-row-hover hover:bg-surface-variant/20 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/sellers/SEL-2983"); }}>
<td className="py-2.5 px-4"><input className="text-primary border-outline" type="checkbox" /></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-low border border-outline-variant flex items-center justify-center text-primary font-bold text-xs">NL</div>
<div>
<div className="text-body-md font-bold text-on-surface">NeoLogistics Tech</div>
<div className="text-[11px] text-on-surface-variant">Merchant ID: 00-4821</div>
</div>
</div>
</td>
<td className="py-2.5 px-4"><span className="px-2 py-0.5 bg-surface-variant/50 text-on-surface-variant text-[11px] font-bold rounded">ELECTRONICS</span></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-yellow-500 text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="text-body-sm font-bold">4.9</span>
<span className="text-xs text-on-surface-variant">(1.2k)</span>
</div>
</td>
<td className="py-2.5 px-4">
<div className="text-body-sm font-code-sm">$248,500.00</div>
<div className="text-[10px] text-green-600 font-bold">+12.4%</div>
</td>
<td className="py-2.5 px-4 text-body-sm">1,240</td>
<td className="py-2.5 px-4">
<span className="flex items-center gap-1.5 text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full w-fit border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> Active
                                </span>
</td>
<td className="py-2.5 px-4 text-right">
<div className="row-actions flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-1.5 hover:bg-error-container/20 rounded transition-colors text-error"><span className="material-symbols-outlined">delete</span></button>
</div>
</td>
</tr>

<tr className="table-row-hover hover:bg-surface-variant/20 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/sellers/SEL-2983"); }}>
<td className="py-2.5 px-4"><input className="text-primary border-outline" type="checkbox" /></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-low border border-outline-variant flex items-center justify-center text-primary font-bold text-xs">AG</div>
<div>
<div className="text-body-md font-bold text-on-surface">Artisan Green</div>
<div className="text-[11px] text-on-surface-variant">Merchant ID: 00-9921</div>
</div>
</div>
</td>
<td className="py-2.5 px-4"><span className="px-2 py-0.5 bg-surface-variant/50 text-on-surface-variant text-[11px] font-bold rounded">HOME & GARDEN</span></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-yellow-500 text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="text-body-sm font-bold">4.2</span>
<span className="text-xs text-on-surface-variant">(482)</span>
</div>
</td>
<td className="py-2.5 px-4">
<div className="text-body-sm font-code-sm">$52,120.00</div>
<div className="text-[10px] text-red-600 font-bold">-2.1%</div>
</td>
<td className="py-2.5 px-4 text-body-sm">84</td>
<td className="py-2.5 px-4">
<span className="flex items-center gap-1.5 text-[11px] font-bold text-tertiary-container bg-tertiary-fixed/30 px-2 py-0.5 rounded-full w-fit border border-tertiary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Pending
                                </span>
</td>
<td className="py-2.5 px-4 text-right">
<div className="row-actions flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-1.5 hover:bg-error-container/20 rounded transition-colors text-error"><span className="material-symbols-outlined">delete</span></button>
</div>
</td>
</tr>

<tr className="table-row-hover hover:bg-surface-variant/20 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/sellers/SEL-2983"); }}>
<td className="py-2.5 px-4"><input className="text-primary border-outline" type="checkbox" /></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-low border border-outline-variant flex items-center justify-center text-primary font-bold text-xs">SV</div>
<div>
<div className="text-body-md font-bold text-on-surface">Silver Vault</div>
<div className="text-[11px] text-on-surface-variant">Merchant ID: 00-1123</div>
</div>
</div>
</td>
<td className="py-2.5 px-4"><span className="px-2 py-0.5 bg-surface-variant/50 text-on-surface-variant text-[11px] font-bold rounded">JEWELRY</span></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-yellow-500 text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="text-body-sm font-bold">4.7</span>
<span className="text-xs text-on-surface-variant">(92)</span>
</div>
</td>
<td className="py-2.5 px-4">
<div className="text-body-sm font-code-sm">$1,020,400.00</div>
<div className="text-[10px] text-green-600 font-bold">+44.0%</div>
</td>
<td className="py-2.5 px-4 text-body-sm">312</td>
<td className="py-2.5 px-4">
<span className="flex items-center gap-1.5 text-[11px] font-bold text-error bg-error-container/30 px-2 py-0.5 rounded-full w-fit border border-error-container">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Risk Alert
                                </span>
</td>
<td className="py-2.5 px-4 text-right">
<div className="row-actions flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-1.5 hover:bg-error-container/20 rounded transition-colors text-error"><span className="material-symbols-outlined">delete</span></button>
</div>
</td>
</tr>

<tr className="table-row-hover hover:bg-surface-variant/20 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/sellers/SEL-2983"); }}>
<td className="py-2.5 px-4"><input className="text-primary border-outline" type="checkbox" /></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-low border border-outline-variant flex items-center justify-center text-primary font-bold text-xs">UM</div>
<div>
<div className="text-body-md font-bold text-on-surface">Urban Motion</div>
<div className="text-[11px] text-on-surface-variant">Merchant ID: 00-6671</div>
</div>
</div>
</td>
<td className="py-2.5 px-4"><span className="px-2 py-0.5 bg-surface-variant/50 text-on-surface-variant text-[11px] font-bold rounded">FASHION</span></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-yellow-500 text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="text-body-sm font-bold">4.5</span>
<span className="text-xs text-on-surface-variant">(2.4k)</span>
</div>
</td>
<td className="py-2.5 px-4">
<div className="text-body-sm font-code-sm">$12,900.00</div>
<div className="text-[10px] text-on-surface-variant font-bold">--</div>
</td>
<td className="py-2.5 px-4 text-body-sm">410</td>
<td className="py-2.5 px-4">
<span className="flex items-center gap-1.5 text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full w-fit border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> Active
                                </span>
</td>
<td className="py-2.5 px-4 text-right">
<div className="row-actions flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-1.5 hover:bg-error-container/20 rounded transition-colors text-error"><span className="material-symbols-outlined">delete</span></button>
</div>
</td>
</tr>

<tr className="table-row-hover hover:bg-surface-variant/20 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/sellers/SEL-2983"); }}>
<td className="py-2.5 px-4"><input className="text-primary border-outline" type="checkbox" /></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-low border border-outline-variant flex items-center justify-center text-primary font-bold text-xs">BP</div>
<div>
<div className="text-body-md font-bold text-on-surface">Blue Pearl</div>
<div className="text-[11px] text-on-surface-variant">Merchant ID: 00-5542</div>
</div>
</div>
</td>
<td className="py-2.5 px-4"><span className="px-2 py-0.5 bg-surface-variant/50 text-on-surface-variant text-[11px] font-bold rounded">BEAUTY</span></td>
<td className="py-2.5 px-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-yellow-500 text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="text-body-sm font-bold">4.8</span>
<span className="text-xs text-on-surface-variant">(112)</span>
</div>
</td>
<td className="py-2.5 px-4">
<div className="text-body-sm font-code-sm">$8,450.00</div>
<div className="text-[10px] text-on-surface-variant font-bold">--</div>
</td>
<td className="py-2.5 px-4 text-body-sm">12</td>
<td className="py-2.5 px-4">
<span className="flex items-center gap-1.5 text-[11px] font-bold text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded-full w-fit border border-outline-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Suspended
                                </span>
</td>
<td className="py-2.5 px-4 text-right">
<div className="row-actions flex items-center justify-end gap-1">
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
<button className="p-1.5 hover:bg-surface-variant rounded transition-colors text-on-surface-variant"><span className="material-symbols-outlined">visibility</span></button>
<button className="p-1.5 hover:bg-error-container/20 rounded transition-colors text-error"><span className="material-symbols-outlined">delete</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 py-3 bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
<div className="text-label-md text-on-surface-variant">
                    Showing <span className="font-bold text-on-surface">1-25</span> of 12,482 sellers
                </div>
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-surface-variant/50 rounded text-on-surface-variant disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<div className="flex items-center gap-1">
<button className="w-7 h-7 bg-primary text-white font-bold text-xs rounded">1</button>
<button className="w-7 h-7 hover:bg-surface-variant/50 text-on-surface-variant text-xs rounded transition-colors">2</button>
<button className="w-7 h-7 hover:bg-surface-variant/50 text-on-surface-variant text-xs rounded transition-colors">3</button>
<span className="text-on-surface-variant px-1">...</span>
<button className="w-7 h-7 hover:bg-surface-variant/50 text-on-surface-variant text-xs rounded transition-colors">499</button>
</div>
<button className="p-1 hover:bg-surface-variant/50 rounded text-on-surface-variant">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-outline-variant/30 flex justify-between items-center text-on-surface-variant text-label-md">
<div className="flex gap-4">
<a className="hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4" href="#">Merchant Policy</a>
<a className="hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4" href="#">Compliance Guide</a>
<a className="hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4" href="#">Security Protocol</a>
</div>
<div className="font-code-sm text-[10px]">VER: 4.8.2-OPERATIONAL | SESSION ID: AF-9281-KM</div>
</div>
</main>


    </div>
  );
}
