import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container/30">
      



<main className="flex flex-col">


<div className="p-container-padding max-w-[1440px] mx-auto w-full grid grid-cols-12 gap-gutter">

<div className="col-span-12 flex justify-between items-end mb-4">
<div>
<h2 className="font-display-sm text-display-sm text-on-surface mb-1">Order ORD-88291-LX</h2>
<p className="text-on-surface-variant font-body-md flex items-center">
                        Placed on Oct 24, 2023 at 02:45 PM
                        <span className="mx-2 w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="text-primary font-semibold">In Transit</span>
</p>
</div>
<div className="flex space-x-3">
<button className="border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-label-md hover:bg-surface-variant/30 transition-colors flex items-center">
<span className="material-symbols-outlined text-[18px] mr-2">mail</span>
                        Contact Buyer
                    </button>
<button className="bg-error-container text-on-error-container px-4 py-2 rounded-lg font-label-md hover:brightness-95 transition-colors flex items-center">
<span className="material-symbols-outlined text-[18px] mr-2">flag</span>
                        Flag Order
                    </button>
</div>
</div>

<div className="col-span-12 lg:col-span-8 space-y-gutter">

<div className="bg-surface-container-lowest border border-outline-variant p-container-padding rounded-xl shadow-sm">
<h3 className="font-label-md text-on-surface mb-6 flex items-center uppercase tracking-widest">
<span className="material-symbols-outlined text-[18px] mr-2 text-primary">timeline</span>
                        Transaction Lifecycle
                    </h3>
<div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-outline-variant">

<div className="relative flex items-start group">
<div className="absolute left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary-container/20 z-10">
<span className="material-symbols-outlined text-on-primary text-[14px]">local_shipping</span>
</div>
<div className="ml-10">
<p className="font-label-md text-on-surface">Order Out for Delivery</p>
<p className="text-body-sm text-on-surface-variant">San Francisco Distribution Center • Oct 26, 09:12 AM</p>
</div>
</div>

<div className="relative flex items-start opacity-70">
<div className="absolute left-0 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center z-10">
<span className="material-symbols-outlined text-on-primary text-[14px]">check</span>
</div>
<div className="ml-10">
<p className="font-label-md text-on-surface">Shipped via FedEx Ground</p>
<p className="text-body-sm text-on-surface-variant">Los Angeles Hub • Oct 25, 11:30 PM</p>
<p className="text-code-sm font-code-sm bg-surface-container px-2 py-0.5 rounded inline-block mt-1">Tracking: 442938810293</p>
</div>
</div>

<div className="relative flex items-start opacity-70">
<div className="absolute left-0 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center z-10">
<span className="material-symbols-outlined text-on-primary text-[14px]">payments</span>
</div>
<div className="ml-10">
<p className="font-label-md text-on-surface">Payment Captured</p>
<p className="text-body-sm text-on-surface-variant">Auth Code: #STR-9912 • Oct 24, 02:46 PM</p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="p-container-padding bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
<h3 className="font-label-md text-on-surface uppercase tracking-widest">Itemized Receipt</h3>
<span className="text-code-sm font-code-sm text-on-surface-variant">2 Items</span>
</div>
<table className="w-full text-left">
<thead className="bg-surface-container/30 border-b border-outline-variant">
<tr>
<th className="px-container-padding py-3 font-label-md text-outline">Product</th>
<th className="px-container-padding py-3 font-label-md text-outline">Price</th>
<th className="px-container-padding py-3 font-label-md text-outline">Qty</th>
<th className="px-container-padding py-3 font-label-md text-outline text-right">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container/20 transition-colors">
<td className="px-container-padding py-4 flex items-center">
<div className="w-12 h-12 bg-surface-variant rounded border border-outline-variant mr-4 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional studio product shot of a high-end titanium mechanical keyboard with dark gray keycaps on a clean white background. Soft cinematic lighting with subtle blue and orange accents. 8k resolution, minimalist tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYaYZtH-tTUmPIYF-2Ja7Q3QfnWq7WWppPEK_7fsT3zAI79bAn8-iGuC9dpHNfoPuFF6dEMHkDM4MlevDVZK9bK7HmDSuMCcCUYBpEKI5aKYBxLlfAS-SOTysN-CIpCmLkhskinvg2SNg_ezuO46ScK_Htp1GJq47w7T5HJ_R8T5t0Bzl40SLhVhCChV4TyrDKc83Svj5x9NKacee2r3rUJSCXKeE5LAKPhPnnlu71W5TRC6_hgIxMR_mFYx5ixfx8ryiEDzLsZW5q" />
</div>
<div>
<p className="font-label-md text-on-surface">Titanium Mechanical Keyboard v4</p>
<p className="text-body-sm text-on-surface-variant">SKU: TECH-991-GR</p>
</div>
</td>
<td className="px-container-padding py-4 text-body-md">$249.00</td>
<td className="px-container-padding py-4 text-body-md">1</td>
<td className="px-container-padding py-4 text-body-md text-right font-semibold">$249.00</td>
</tr>
<tr className="hover:bg-surface-container/20 transition-colors">
<td className="px-container-padding py-4 flex items-center">
<div className="w-12 h-12 bg-surface-variant rounded border border-outline-variant mr-4 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A macro photograph of premium braided USB-C cables in various lengths, organized neatly. Sleek metallic connectors, charcoal gray fabric braiding, modern technology vibe. High contrast and sharpness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcOaMH-W8nGlKcF0H1f97kE18vtKuMVqj7rXFC6aWohy61lrZveWhS8RVULQcRNR-XAMTeW_eTLwg9LeD2gYxks6ynKtLERBESJO1R7LXgJba1cpuJDq3HjwSA--fD4JxkT67uInNzEl5j_pKDVcgw9jbEVqHu-7zOMs4G5PuGzCtBXNParudLhihqrft_LPgNGMov2tvW3xKGZfubBhZZZCiyTxWoAqHophDyANerS_F8TX1PU2wwoq9mLfL2HnviT9DLtjYeQX1z" />
</div>
<div>
<p className="font-label-md text-on-surface">Braided USB-C Power Link (2m)</p>
<p className="text-body-sm text-on-surface-variant">SKU: ACC-102-BL</p>
</div>
</td>
<td className="px-container-padding py-4 text-body-md">$29.00</td>
<td className="px-container-padding py-4 text-body-md">2</td>
<td className="px-container-padding py-4 text-body-md text-right font-semibold">$58.00</td>
</tr>
</tbody>
</table>
<div className="p-container-padding bg-surface-container-low/50 space-y-2">
<div className="flex justify-between text-body-md">
<span className="text-on-surface-variant">Subtotal</span>
<span className="text-on-surface">$307.00</span>
</div>
<div className="flex justify-between text-body-md">
<span className="text-on-surface-variant">Shipping (Express)</span>
<span className="text-on-surface">$15.00</span>
</div>
<div className="flex justify-between text-body-md">
<span className="text-on-surface-variant">Estimated Tax</span>
<span className="text-on-surface">$24.56</span>
</div>
<div className="flex justify-between text-headline-sm font-bold border-t border-outline-variant pt-3 mt-4">
<span className="text-on-surface">Total Amount</span>
<span className="text-primary">$346.56</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm h-80 relative">
<div className="absolute top-4 left-4 z-10 bg-surface/90 backdrop-blur shadow-md p-3 rounded-lg border border-outline-variant max-w-xs">
<p className="font-label-md text-on-surface mb-1">Current Destination</p>
<p className="text-body-sm text-on-surface-variant">882 Market St, Suite 400<br />San Francisco, CA 94102</p>
</div>
<div className="w-full h-full grayscale opacity-80" data-alt="A detailed, clean, and minimalist vector street map of San Francisco, California. The map features elegant slate grays and light indigo streets with a primary blue pin marker highlighting a specific location. Modern UI design language, data-driven map visualization." data-location="San Francisco" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoChNLPaqx0jSprkNrl0ZDVy4c8RpKhTy3KhK1ankEZKW0NxEicnF_0bierrMEf-WFdilNsIT-uDux-D6WRJMeZWi561LgmKVEFIkQ2Iwflk6qxB1VHIMsD8LEYRq3PuCi3bJf5zvWES4LnX1m8qf8qOWDjGZPmLyT-mrt9PEkl_3A1-GXPxdMbfItA-1BPXSIM4bnpiQCQUd0JIH_3C9Acxla11xhRT4NJi2ZTXm_WG3dmOl7R7Hs9JdoiaRNaK2Fo748-LjW9N4u')"}}></div>
<div className="absolute bottom-4 right-4 z-10 flex space-x-2">
<button className="p-2 bg-surface rounded-full shadow-md border border-outline-variant text-on-surface hover:text-primary"><span className="material-symbols-outlined">zoom_in</span></button>
<button className="p-2 bg-surface rounded-full shadow-md border border-outline-variant text-on-surface hover:text-primary"><span className="material-symbols-outlined">zoom_out</span></button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-gutter">

<div className="bg-surface-container-lowest border border-outline-variant p-container-padding rounded-xl shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="font-label-md text-on-surface uppercase tracking-widest">Fraud Analysis</h3>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Low Risk</span>
</div>
<div className="flex items-center space-x-4">
<div className="relative w-16 h-16">
<svg className="w-full h-full -rotate-90">
<circle className="text-outline-variant" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="176" stroke-dashoffset="150" strokeWidth="6"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center font-bold text-on-surface">14</span>
</div>
<div className="flex-1">
<p className="text-body-sm text-on-surface-variant mb-2">Score of 14/100 based on transaction patterns and IP geolocation.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-container px-2 py-1 rounded text-[10px] text-on-surface flex items-center">
<span className="material-symbols-outlined text-[12px] mr-1 text-green-600">verified</span> Verified IP
                                </span>
<span className="bg-surface-container px-2 py-1 rounded text-[10px] text-on-surface flex items-center">
<span className="material-symbols-outlined text-[12px] mr-1 text-green-600">verified</span> 3DS Secure
                                </span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h3 className="font-label-md text-on-surface uppercase tracking-widest">Customer</h3>
<a className="text-primary text-label-md hover:underline" href="#">View Profile</a>
</div>
<div className="p-container-padding">
<div className="flex items-center space-x-4 mb-4">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">person</span>
</div>
<div>
<p className="font-label-md text-on-surface">Julianne Moore</p>
<p className="text-body-sm text-on-surface-variant">j.moore@design.co</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-start">
<span className="material-symbols-outlined text-outline text-[18px] mr-3 mt-0.5">shopping_bag</span>
<div>
<p className="text-[11px] uppercase text-outline">Customer Since</p>
<p className="text-body-sm text-on-surface">Feb 2021 (24 Orders)</p>
</div>
</div>
<div className="flex items-start">
<span className="material-symbols-outlined text-outline text-[18px] mr-3 mt-0.5">location_on</span>
<div>
<p className="text-[11px] uppercase text-outline">Shipping Address</p>
<p className="text-body-sm text-on-surface leading-tight">882 Market St, Suite 400<br />San Francisco, CA 94102</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
<h3 className="font-label-md text-on-surface uppercase tracking-widest">Payment Method</h3>
<span className="material-symbols-outlined text-outline">info</span>
</div>
<div className="p-container-padding">
<div className="flex items-center space-x-3 mb-4">
<div className="bg-[#1a1f71] w-10 h-6 rounded flex items-center justify-center text-white font-bold text-[8px] italic">VISA</div>
<p className="font-label-md text-on-surface">Visa ending in •••• 4421</p>
</div>
<div className="space-y-4 font-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant">ID</span>
<span className="font-code-sm text-code-sm">ch_3N82XzL9sA0rP</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Status</span>
<span className="text-green-600 font-semibold flex items-center">
<span className="material-symbols-outlined text-[14px] mr-1">check_circle</span> Succeeded
                                </span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Source</span>
<span className="text-on-surface">Stripe Checkout</span>
</div>
<div className="pt-4 border-t border-outline-variant">
<button className="w-full text-center text-primary font-label-md hover:underline">View in Stripe Dashboard</button>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h3 className="font-label-md text-on-surface uppercase tracking-widest">Seller</h3>
<a className="text-primary text-label-md hover:underline" href="#">Manage</a>
</div>
<div className="p-container-padding flex items-center space-x-4">
<div className="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary">store</span>
</div>
<div>
<p className="font-label-md text-on-surface">Zenith Hardware Ltd.</p>
<p className="text-body-sm text-on-surface-variant">Tier 1 Merchant • 98% Rating</p>
</div>
</div>
</div>
</div>
</div>


</main>


    </div>
  );
}
