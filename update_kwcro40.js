const fs = require('fs');
let t = fs.readFileSync('assets/index-CWBHOOU2.js', 'utf8');

// Replace in Xg()
const oldXgProd = '{name:"Stainless Steel Water Cooler",desc:"Premium grade SS body for maximum durability and hygiene."}';
const newXgProd = '{name:"KWCRO40",desc:"STAINLESS STEEL WATER COOLER WITH RO. 40L capacity with 7-stage purification."}';
t = t.replace(oldXgProd, newXgProd);

// Replace in Pd()
const oldPdProd = '{name:"Stainless Steel Water Cooler",desc:"Premium grade SS body for maximum durability and hygiene."}';
const newPdProd = '{name:"KWCRO40",desc:"STAINLESS STEEL WATER COOLER WITH RO. 40L capacity with 7-stage purification.", isKw: true}';
t = t.replace(oldPdProd, newPdProd);

// Update Pd() rendering
const targetPdRender = 'o.jsx("p",{className:"text-lg text-gray-600 mb-8 leading-relaxed",children:n.desc})';
const newPdRender = `o.jsx("p",{className:"text-lg text-gray-600 mb-8 leading-relaxed",children:n.desc}),
n.isKw ? o.jsxs("div",{className:"mb-8",children:[
  o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Specifications"}),
  o.jsx("div",{className:"bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6",children:o.jsx("table",{className:"min-w-full divide-y divide-gray-200",children:o.jsx("tbody",{className:"divide-y divide-gray-200",children:[
    {label:"Model Name",value:"KWCRO40"},
    {label:"Dispenser Type",value:"Water Cooler with RO"},
    {label:"Body Material",value:"Stainless steel"},
    {label:"Water Cooler Type",value:"Floor Mounted"},
    {label:"Storage Tank (Ltr)",value:"40"},
    {label:"Cooling Capacity (Ltr/Hr)",value:"40"},
    {label:"Purification Capacity (Ltr/Hr)",value:"25"},
    {label:"No. of Faucet",value:"2"},
    {label:"Faucet Material",value:"Brass (Chrome Plated)"},
    {label:"Chiller Tank & Drip Tray",value:"Stainless Steel (SS 304)"},
    {label:"Power Input (Watt)",value:"450"},
    {label:"Product Dimension (mm)",value:"590X490X1200"},
    {label:"Product Weight (KG)",value:"43 (approx)"},
    {label:"Membrane Capacity",value:"80GPD*2"},
    {label:"Membrane Type",value:"TFC Membrane"},
    {label:"Input Water TDS (Max)",value:"upto 3000"},
    {label:"TDS Reduction",value:"90-95%"}
  ].map((r,d)=>o.jsxs("tr",{className:d%2===0?"bg-white":"bg-gray-50",children:[o.jsx("td",{className:"px-6 py-4 text-sm font-medium text-gray-900 w-1/3",children:r.label}),o.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:r.value})]},d)))})})}),
  o.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"Key Features"}),
  o.jsxs("ul",{className:"space-y-4",children:[
    o.jsxs("li",{className:"flex gap-3",children:[o.jsx("span",{className:"font-bold text-[#1a2b66]",children:"7 Stage Purification:"}),o.jsx("span",{className:"text-gray-600",children:"Includes seven stages of purification, including RO+UV, which eliminates chemicals, and organic and inorganic contaminants, and renders all known bacteria and viruses that cause disease inactive."})]}),
    o.jsxs("li",{className:"flex gap-3",children:[o.jsx("span",{className:"font-bold text-[#1a2b66]",children:"Integrated Safety Feature:"}),o.jsx("span",{className:"text-gray-600",children:"Water flow is stopped by an integrated electronic monitoring system if the level of the purified tank is full."})]}),
    o.jsxs("li",{className:"flex gap-3",children:[o.jsx("span",{className:"font-bold text-[#1a2b66]",children:"Durable and Hygienic Body:"}),o.jsx("span",{className:"text-gray-600",children:"Cooler has a body made entirely of stainless steel to reduce corrosion, extend product life, and meet hygienic requirements."})]}),
    o.jsxs("li",{className:"flex gap-3",children:[o.jsx("span",{className:"font-bold text-[#1a2b66]",children:"Large Storage Capacity:"}),o.jsx("span",{className:"text-gray-600",children:"Guarantees an adequate water supply at all times with its 40 litres storage tank."})]})
  ]})
]}) : null`;

t = t.replace(targetPdRender, newPdRender);
fs.writeFileSync('assets/index-CWBHOOU2.js', t);
console.log('Done!');
