import React, { useState } from "react";

const companies = [
  {
    id: 1,
    name: "Carl's Simple Org",
    categories: 2,
    suppliers: 11,
    transactions: 11,
    amount: "$709,795",
    updated: "Last updated 1 month ago",
  },
];

const statCards = [
  { label: "Total Categories", value: "2", icon: "target" },
  { label: "Total Suppliers", value: "11", icon: "chart" },
  { label: "Total Transactions", value: "11", icon: "arrows" },
];

function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function ArrowsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M7 16V4m0 0L3 8m4-4 4 4" /><path d="M17 8v12m0 0 4-4m-4 4-4-4" />
    </svg>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div style={{
      flex: 1,
      border: "1px solid #e4e4e7",
      borderRadius: 12,
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#fff",
    }}>
      <div>
        <div style={{ fontSize: 12, color: "#71717a", marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 500, color: "#09090b" }}>{value}</div>
      </div>
      <div style={{
        width: 36, height: 36, borderRadius: 8, background: "#09090b",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {icon === "target" && <TargetIcon />}
        {icon === "chart" && <ChartIcon />}
        {icon === "arrows" && <ArrowsIcon />}
      </div>
    </div>
  );
}

function Badge({ children, variant = "outline" }) {
  const styles = {
    outline: { background: "transparent", border: "1px solid #e4e4e7", color: "#09090b" },
    yellow: { background: "#e5ff2c", border: "none", color: "#263b30" },
    purple: { background: "#d7b1ff", border: "none", color: "#3C3489" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 500,
      cursor: "default", ...styles[variant],
    }}>
      {children}
    </span>
  );
}

function NavLink({ children, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 6,
      padding: "5px 10px", borderRadius: 8, fontSize: 13,
      color: active ? "#09090b" : "#71717a",
      background: active ? "#f4f4f5" : "transparent",
      border: "none", cursor: "pointer", fontWeight: active ? 500 : 400,
    }}>
      {children}
    </button>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("portfolio");

  return (
    <div style={{ fontFamily: "'Geist', sans-serif", background: "#fff", minHeight: "100vh", color: "#09090b" }}>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", borderBottom: "1px solid #e4e4e7" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 15 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "#09090b", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" stroke="#e5ff2c" strokeWidth="1.5" fill="none" />
                <circle cx="8" cy="8" r="2" fill="#e5ff2c" />
              </svg>
            </div>
            spendAi
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <NavLink active={activeNav === "portfolio"} onClick={() => setActiveNav("portfolio")}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
              </svg>
              Portfolio
            </NavLink>
            <NavLink active={activeNav === "spendcube"} onClick={() => setActiveNav("spendcube")}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              SpendCube
            </NavLink>
            <NavLink active={activeNav === "explore"} onClick={() => setActiveNav("explore")}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
              Explore
            </NavLink>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#d7b1ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#3C3489" }}>
            P
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Carl's Account</div>
            <div style={{ fontSize: 11, color: "#71717a" }}>paul@spendai.com</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: "28px 24px 20px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.1, marginBottom: 8, whiteSpace: "nowrap" }}>
            Carl's Account Dashboard
          </h1>
          <p style={{ fontSize: 14, color: "#71717a", maxWidth: 480, lineHeight: 1.6 }}>
            Comprehensive spend analysis across your portfolio companies
          </p>
        </div>
        <div style={{ background: "#e5ff2c", borderRadius: 10, padding: "12px 16px", minWidth: 160, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11, color: "#263b30", marginBottom: 4 }}>
            Total Spend
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#263b30" strokeWidth="2">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#263b30", letterSpacing: -0.5 }}>$709,795</div>
        </div>
      </div>

      {/* Stat Cards */}
      <div style={{ padding: "0 24px 24px", display: "flex", gap: 16 }}>
        {statCards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      {/* Section header */}
      <div style={{ padding: "0 24px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Portfolio Companies</div>
          <div style={{ fontSize: 12, color: "#71717a", marginTop: 2 }}>Detailed view of selected companies</div>
        </div>
        <Badge variant="purple">+ Add Company</Badge>
      </div>

      {/* Company list */}
      <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
        {companies.map((co) => (
          <div key={co.id} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px", border: "1px solid #e4e4e7", borderRadius: 12, background: "#fff",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#d7b1ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3C3489" strokeWidth="2">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{co.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#71717a" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    {co.categories} Categories
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#71717a" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    {co.suppliers} Suppliers
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#71717a" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16V4m0 0L3 8m4-4 4 4"/><path d="M17 8v12m0 0 4-4m-4 4-4-4"/></svg>
                    {co.transactions} Transactions
                  </span>
                </div>
                <div style={{ fontSize: 11, color: "#71717a", marginTop: 4 }}>{co.updated}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>{co.amount}</span>
              <Badge variant="yellow">Analyze Spend</Badge>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2">
                <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: "32px 24px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #e4e4e7", marginTop: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: 4, background: "#09090b", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" stroke="#e5ff2c" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <span style={{ fontSize: 12, color: "#71717a" }}>© 2026 SpendAi. All rights reserved.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {["Guides", "Status", "Support", "Terms"].map((link) => (
            <span key={link} style={{ fontSize: 12, color: "#71717a", cursor: "pointer" }}>{link}</span>
          ))}
        </div>
      </div>

    </div>
  );
}
