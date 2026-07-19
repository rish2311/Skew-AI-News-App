import React from "react";

// ── Tokens ────────────────────────────────────────────────────────────────────
const colors = {
  primary: [
    { label: "TEXT PRIMARY", hex: "#000000", bg: "bg-[#000000]" },
    { label: "TEXT SECONDARY", hex: "#6B7280", bg: "bg-[#6B7280]" },
    { label: "SURFACE", hex: "#F6F6F6", bg: "bg-[#F6F6F6] border border-[#E5E7EB]" },
  ],
  semantic: [
    { label: "LEFT BIAS", hex: "#B42318", bg: "bg-[#B42318]" },
    { label: "CENTER", hex: "#E5E7EB", bg: "bg-[#E5E7EB] border border-[#d1d5db]" },
    { label: "RIGHT BIAS", hex: "#1D4ED8", bg: "bg-[#1D4ED8]" },
  ],
  neutrals: [
    { label: "BG PRIMARY", hex: "#FFFFFF", bg: "bg-white border border-[#E5E7EB]" },
    { label: "BG SECONDARY", hex: "#F0F0F0", bg: "bg-[#F0F0F0]" },
    { label: "BORDER", hex: "#E5E7EB", bg: "bg-[#E5E7EB]" },
    { label: "DIVIDER", hex: "#E5E7EB", bg: "bg-[#E5E7EB]" },
  ],
};

const typeScale = [
  { tag: "H1", desc: "Page / Screen Title", size: "32px", weight: "Bold", lh: "1.2", cls: "text-[32px] font-bold" },
  { tag: "H2", desc: "Section Title", size: "24px", weight: "SemiBold", lh: "1.3", cls: "text-[24px] font-semibold" },
  { tag: "H3", desc: "Card / Module Title", size: "20px", weight: "SemiBold", lh: "1.3", cls: "text-[20px] font-semibold" },
  { tag: "H4", desc: "Subheading", size: "16px", weight: "Medium", lh: "1.4", cls: "text-[16px] font-medium" },
  { tag: "Body Large", desc: "Important content", size: "16px", weight: "Regular", lh: "1.6", cls: "text-[16px] font-normal" },
  { tag: "Body Medium", desc: "Body text", size: "14px", weight: "Regular", lh: "1.6", cls: "text-[14px] font-normal" },
  { tag: "Body Small", desc: "Supporting text", size: "13px", weight: "Regular", lh: "1.6", cls: "text-[13px] font-normal" },
  { tag: "Caption", desc: "Labels, meta text", size: "11px", weight: "Regular", lh: "1.4", cls: "text-[11px] font-normal" },
];

const spacing = [4, 8, 16, 24, 32, 40, 64];

const shadows = [
  { label: "SMALL", value: "0px 1px 2px rgba(0,0,0,0.05)", cls: "shadow-[0px_1px_2px_rgba(0,0,0,0.05)]" },
  { label: "MEDIUM", value: "0px 4px 12px rgba(0,0,0,0.08)", cls: "shadow-[0px_4px_12px_rgba(0,0,0,0.08)]" },
  { label: "LARGE", value: "0px 12px 24px rgba(0,0,0,0.12)", cls: "shadow-[0px_12px_24px_rgba(0,0,0,0.12)]" },
];

const radii = [
  { label: "SMALL", value: "4px", cls: "rounded-[4px]" },
  { label: "MEDIUM", value: "8px", cls: "rounded-[8px]" },
  { label: "LARGE", value: "12px", cls: "rounded-[12px]" },
  { label: "FULL", value: "9999px", cls: "rounded-full" },
];

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[8px] p-6">
      <p className="text-[11px] font-semibold tracking-widest text-[#000000] mb-4 uppercase">{title}</p>
      {children}
    </div>
  );
}

// ── Bias Meter ────────────────────────────────────────────────────────────────
function BiasMeter({ left, center, right }: { left: number; center: number; right: number }) {
  return (
    <div>
      <div className="flex rounded-[4px] overflow-hidden text-[11px] font-semibold h-8">
        <div className="flex items-center justify-center bg-[#B42318] text-white" style={{ width: `${left}%` }}>Left {left}%</div>
        <div className="flex items-center justify-center bg-[#E5E7EB] text-[#000000]" style={{ width: `${center}%` }}>Center {center}%</div>
        <div className="flex items-center justify-center bg-[#1D4ED8] text-white" style={{ width: `${right}%` }}>Right {right}%</div>
      </div>
      <div className="flex justify-between text-[11px] text-[#6B7280] mt-1">
        <span>0%</span><span>50%</span><span>100%</span>
      </div>
    </div>
  );
}

// ── Icons (inline SVG stubs) ──────────────────────────────────────────────────
const icons = [
  // menu
  <svg key="menu" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
  // search
  <svg key="search" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  // bookmark
  <svg key="bookmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>,
  // clock
  <svg key="clock" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  // info
  <svg key="info" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="8" /><line x1="12" y1="12" x2="12" y2="16" /></svg>,
  // share
  <svg key="share" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>,
  // external link
  <svg key="ext" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>,
  // calendar
  <svg key="cal" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  // chart
  <svg key="chart" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  // tag
  <svg key="tag" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
  // user
  <svg key="user" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  // bell
  <svg key="bell" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
  // sliders
  <svg key="sliders" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>,
  // check circle
  <svg key="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  // more
  <svg key="more" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>,
];

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] font-[family-name:var(--font-poppins)]">
      <div className="max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-1 gap-6">

        {/* Row 1 */}
        <div className="grid grid-cols-[280px_1fr_320px] gap-6">

          {/* Brand */}
          <Section title="Brand">
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <div className="text-center">
                <span className="text-[56px] font-bold leading-none tracking-tight">biasly</span>
                <p className="text-[16px] font-medium text-[#6B7280] mt-1">News</p>
              </div>
              <p className="text-[14px] text-[#6B7280] text-center mt-3 leading-relaxed">Balanced news coverage,<br />powered by AI.</p>
            </div>
          </Section>

          {/* Typography */}
          <Section title="Typography">
            <div className="flex gap-8">
              {/* Left: Font Family */}
              <div className="w-[180px] flex-shrink-0">
                <p className="text-[10px] text-[#6B7280] uppercase tracking-widest mb-2">Font Family</p>
                <p className="text-[36px] font-bold leading-none mb-3">Poppins</p>
                <p className="text-[11px] text-[#6B7280] leading-relaxed">Poppins is a modern geometric sans-serif typeface that ensures clarity and excellent readability.</p>
              </div>

              {/* Right: Type scale table */}
              <div className="flex-1 min-w-0">
                {/* Header */}
                <div className="grid text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider pb-2 border-b border-[#E5E7EB] mb-1"
                  style={{ gridTemplateColumns: "80px 1fr 48px 72px 72px" }}>
                  <span>Style</span>
                  <span></span>
                  <span>Size</span>
                  <span>Weight</span>
                  <span>Line Height</span>
                </div>
                {typeScale.map((t) => (
                  <div
                    key={t.tag}
                    className="grid items-center border-b border-[#F3F4F6] py-1.5"
                    style={{ gridTemplateColumns: "80px 1fr 48px 72px 72px" }}
                  >
                    <span className={`${t.cls} leading-none whitespace-nowrap`}>{t.tag}</span>
                    <span className="text-[11px] text-[#6B7280] truncate pr-2">{t.desc}</span>
                    <span className="text-[11px] font-semibold text-[#111]">{t.size}</span>
                    <span className="text-[11px] text-[#6B7280]">{t.weight}</span>
                    <span className="text-[11px] text-[#6B7280]">{t.lh}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* UI Elements */}
          <Section title="UI Elements">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Buttons</p>
            {/* Column headers */}
            <div className="grid text-[11px] text-[#6B7280] mb-1" style={{ gridTemplateColumns: "64px 1fr 1fr 1fr 1fr" }}>
              <span></span>
              {["Default", "Hover", "Outline", "Disabled"].map(s => (
                <span key={s} className="text-center">{s}</span>
              ))}
            </div>
            {/* Primary row */}
            <div className="grid items-center gap-2 mb-1" style={{ gridTemplateColumns: "64px 1fr 1fr 1fr 1fr" }}>
              <span className="text-[11px] text-[#6B7280]">Primary</span>
              <button className="bg-[#000000] text-white text-[12px] font-medium px-3 py-1.5 rounded-[4px]">Button</button>
              <button className="bg-[#374151] text-white text-[12px] font-medium px-3 py-1.5 rounded-[4px]">Button</button>
              <button className="border border-[#000000] text-[#000000] text-[12px] font-medium px-3 py-1.5 rounded-[4px] bg-white">Button</button>
              <button className="bg-[#E5E7EB] text-[#9CA3AF] text-[12px] font-medium px-3 py-1.5 rounded-[4px] cursor-not-allowed">Button</button>
            </div>
            {/* Secondary row */}
            <div className="grid items-center gap-2 mb-1" style={{ gridTemplateColumns: "64px 1fr 1fr 1fr 1fr" }}>
              <span className="text-[11px] text-[#6B7280]">Secondary</span>
              <button className="border border-[#E5E7EB] text-[#000000] text-[12px] font-medium px-3 py-1.5 rounded-[4px]">Button</button>
              <button className="border border-[#9CA3AF] text-[#000000] text-[12px] font-medium px-3 py-1.5 rounded-[4px]">Button</button>
              <button className="border border-[#E5E7EB] text-[#000000] text-[12px] font-medium px-3 py-1.5 rounded-[4px]">Button</button>
              <button className="border border-[#E5E7EB] text-[#D1D5DB] text-[12px] font-medium px-3 py-1.5 rounded-[4px] cursor-not-allowed">Button</button>
            </div>
            {/* Text row */}
            <div className="grid items-center gap-2 mb-4" style={{ gridTemplateColumns: "64px 1fr 1fr 1fr 1fr" }}>
              <span className="text-[11px] text-[#6B7280]">Text</span>
              <button className="text-[#000000] text-[12px] font-medium px-3 py-1.5">Button</button>
              <button className="text-[#1D4ED8] text-[12px] font-medium px-3 py-1.5">Button</button>
              <span className="text-[#D1D5DB] text-[12px] px-3 py-1.5">—</span>
              <span className="text-[#D1D5DB] text-[12px] px-3 py-1.5">—</span>
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Chip / Category</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["World Cup", "IPL", "Business & Markets", "More"].map(c => (
                <span key={c} className="flex items-center gap-1 border border-[#E5E7EB] rounded-full px-3 py-1 text-[12px] font-medium">
                  {c} <span className="text-[#6B7280]">+</span>
                </span>
              ))}
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Bias Meter</p>
            <BiasMeter left={25} center={50} right={25} />
          </Section>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[300px_1fr_1fr] gap-6">

          {/* Colors */}
          <Section title="Colors">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Primary</p>
            <div className="flex gap-3 mb-4">
              {colors.primary.map(c => (
                <div key={c.label} className="flex flex-col gap-1">
                  <div className={`w-14 h-14 rounded-[4px] ${c.bg}`} />
                  <p className="text-[10px] font-medium leading-tight">{c.label}</p>
                  <p className="text-[10px] text-[#6B7280]">{c.hex}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Semantic</p>
            <div className="flex gap-3 mb-4">
              {colors.semantic.map(c => (
                <div key={c.label} className="flex flex-col gap-1">
                  <div className={`w-14 h-14 rounded-[4px] ${c.bg}`} />
                  <p className="text-[10px] font-medium leading-tight">{c.label}</p>
                  <p className="text-[10px] text-[#6B7280]">{c.hex}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] mb-2">Neutrals</p>
            <div className="flex gap-3">
              {colors.neutrals.map(c => (
                <div key={c.label} className="flex flex-col gap-1">
                  <div className={`w-12 h-12 rounded-[4px] ${c.bg}`} />
                  <p className="text-[10px] font-medium leading-tight">{c.label}</p>
                  <p className="text-[10px] text-[#6B7280]">{c.hex}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Icons */}
          <Section title="Icons">
            <div className="grid grid-cols-5 gap-4 text-[#000000]">
              {icons.map((icon, i) => (
                <div key={i} className="flex items-center justify-center w-8 h-8">{icon}</div>
              ))}
            </div>
            <p className="text-[11px] text-[#6B7280] mt-4">Line style · 2px stroke · Rounded caps</p>
          </Section>

          {/* Card Example */}
          <Section title="Card Example">
            <div className="border border-[#E5E7EB] rounded-[8px] overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
              <div className="flex gap-4 p-4">
                <div className="w-40 h-36 bg-[#E5E7EB] rounded-[4px] flex-shrink-0 overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-[#9CA3AF] to-[#374151]" />
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/80 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12" y2="16" /></svg>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <p className="text-[11px] text-[#6B7280]">Politics · United States</p>
                  <p className="text-[16px] font-bold leading-snug">Trump Sends Iran Revised Peace Proposal With Tougher Terms: Report</p>
                  <p className="text-[13px] text-[#6B7280] leading-snug">The proposal includes stricter limits on uranium enrichment and enhanced verification measures.</p>
                </div>
              </div>
              <div className="px-4 pb-3">
                <BiasMeter left={25} center={50} right={25} />
              </div>
              <div className="flex items-center gap-4 px-4 py-3 border-t border-[#E5E7EB] text-[11px] text-[#6B7280]">
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  2h ago
                </span>
                <span className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                  12 min read
                </span>
              </div>
            </div>
          </Section>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-4 gap-6">

          {/* Spacing */}
          <Section title="Spacing System (4px Base Unit)">
            <div className="flex items-end gap-3 mb-3">
              {spacing.map((s) => (
                <div key={s} className="flex flex-col items-center gap-1">
                  <div
                    className="bg-[#c7d2fe] rounded-[2px]"
                    style={{ width: `${Math.max(s * 0.6, 12)}px`, height: `${Math.max(s * 0.6, 12)}px` }}
                  />
                  <span className="text-[10px] text-[#6B7280]">{s}px</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#6B7280]">Consistent spacing scale based on 4px base unit</p>
          </Section>

          {/* Grid System */}
          <Section title="Grid System">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex-1 h-20 bg-[#c7d2fe] rounded-[2px] opacity-60" />
              ))}
            </div>
            <div className="text-[11px] text-[#6B7280] space-y-0.5">
              <p><span className="font-medium text-[#000000]">Container</span> 1280px</p>
              <p><span className="font-medium text-[#000000]">Columns</span> 12</p>
              <p><span className="font-medium text-[#000000]">Gutter</span> 24px</p>
              <p><span className="font-medium text-[#000000]">Margin</span> 24px</p>
            </div>
          </Section>

          {/* Shadows */}
          <Section title="Shadows">
            <div className="space-y-4">
              {shadows.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className={`w-12 h-10 bg-white rounded-[4px] ${s.cls}`} />
                  <div>
                    <p className="text-[11px] font-semibold">{s.label}</p>
                    <p className="text-[10px] text-[#6B7280]">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Border Radius */}
          <Section title="Border Radius">
            <div className="space-y-3">
              {radii.map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white border border-[#E5E7EB] ${r.cls}`} />
                  <div className="flex gap-4">
                    <p className="text-[11px] font-semibold w-16">{r.label}</p>
                    <p className="text-[11px] text-[#6B7280]">{r.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111111] text-white mt-8 px-6 py-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div>
            <p className="text-[20px] font-bold leading-none">biasly</p>
            <p className="text-[11px] text-[#9CA3AF]">News</p>
            <p className="text-[11px] text-[#9CA3AF] mt-1">Balanced news coverage,<br />powered by AI.</p>
          </div>
          <div className="text-center text-[11px] text-[#9CA3AF]">
            <p>Design System v1.0</p>
            <p>June 1, 2026</p>
          </div>
          <p className="text-[13px] text-[#9CA3AF] italic">Stay consistent. Stay unbiased.</p>
        </div>
      </footer>
    </div>
  );
}
