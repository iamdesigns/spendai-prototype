import { useState } from "react";

const companies = [
  {
    id: 1,
    name: "Carl's Simple Org",
    categories: 2,
    suppliers: 11,
    transactions: 11,
    amount: "$123,456",
    updated: "Last updated 1 month ago",
  },
];

function Badge({ children, variant = "outline" }) {
  const styles = {
    outline: { background: "transparent", border: "1px solid #e4e4e7", color: "#09090b" },
    yellow: { background: "#e5ff2c", border: "none", color: "#263b30" },
    purple: { background: "#d7b1ff", border: "none", color: "#3C3489" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 8px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 500,
        cursor: "default",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}

function NavLink({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 10px",
        borderRadius: 8,
        fontSize: 13,
        color: active ? "#09090b" : "#71717a",
        background: active ? "#f4f4f5" : "transparent",
        border: "none",
        cursor: "pointer",
        fontWeight: active ? 500 : 400,
      }}
    >
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
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500, fontSize: 15 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "#09090b", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" stroke="#e5ff2c" strokeWidth="1.5" fill="none" />
                <circle cx="8" cy="8" r="2" fill="#e5ff2c" />
              </svg>
            </div>
            SpendAI
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <NavLink active={activeNav === "portfolio"} onClick={() => setActiveNav("portfolio")}>
              <Badge variant="outline">&#10003; Portfolio</Badge>
            </NavLink>
            <NavLink active={activeNav === "spendcube"} onClick={() => setActiveNav("spendcube")}>
              Spend Cube
            </NavLink>
            <NavLink active={activeNav === "explore"} onClick={() => setActiveNav("explore")}>
              Explore
            </NavLink>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#d7b1ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#3C3489" }}>
            CA
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Carl's Account</div>
            <div style={{ fontSize: 11, color: "#71717a", textDecoration: "underline" }}>paul@spendai.com</div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: "32px 24px 24px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: 42, fontWeight: 500, letterSpacing: -1, lineHeight: 1, marginBottom: 12 }}>
            Carl's Account Dashboard
          </h1>
          <p style={{ fontSize: 15, color: "#71717a", maxWidth: 460, lineHeight: 1.6 }}>
            Acme Inc's personal AI helps you cut through the noise, speed up delivery, and stay focused without switching contexts.
          </p>
        </div>
        <div style={{ background: "#e5ff2c", borderRadius: 10, padding: "12px 16px", minWidth: 160 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11, color: "#263b30", marginBottom: 4 }}>
            Total Spend
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#263b30" strokeWidth="2">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#263b30", letterSpacing: -0.5 }}>$123,456</div>
        </div>
      </div>

      {/* Section header */}
      <div style={{ padding: "0 24px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Carl's Portfolio Companies</div>
          <div style={{ fontSize: 12, color: "#71717a", marginTop: 2 }}>Detailed view of selected companies</div>
        </div>
        <Badge variant="purple">± Add Company</Badge>
      </div>

      {/* Company list */}
      <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
        {companies.map((co) => (
          <div
            key={co.id}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", border: "1px solid #e4e4e7", borderRadius: 12, background: "#fff" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#d7b1ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3C3489" strokeWidth="2">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{co.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {[
                    { label: `${co.categories} Categories` },
                    { label: `${co.suppliers} Suppliers` },
                    { label: `${co.transactions} Transactions` },
                  ].map((item) => (
                    <span key={item.label} style={{ fontSize: 11, color: "#71717a" }}>{item.label}</span>
                  ))}
                </div>
                <div style={{ fontSize: 11, color: "#71717a", marginTop: 4 }}>{co.updated}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.5 }}>{co.amount}</span>
              <Badge variant="yellow">Analyze Spend</Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #e4e4e7", marginTop: 32 }}>
        <span style={{ fontSize: 12, color: "#71717a" }}>© SpendAI 2026</span>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {["Feedback", "Upgrade", "Website", "Support"].map((link) => (
            <span key={link} style={{ fontSize: 12, color: "#71717a", cursor: "pointer" }}>{link}</span>
          ))}
        </div>
      </div>

    </div>
  );
}

