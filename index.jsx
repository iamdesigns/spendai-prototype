import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Target,
  BarChart2,
  ArrowUpDown,
  TrendingUp,
  Building2,
  LayoutGrid,
  Globe,
  Compass,
  ChevronDown,
  MoreVertical,
} from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

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
  { label: "Total Categories", value: "2",  icon: Target },
  { label: "Total Suppliers",  value: "11", icon: BarChart2 },
  { label: "Total Transactions", value: "11", icon: ArrowUpDown },
];

const navItems = [
  { key: "portfolio",  label: "Portfolio",  Icon: LayoutGrid },
  { key: "spendcube", label: "SpendCube",  Icon: Globe },
  { key: "explore",   label: "Explore",    Icon: Compass },
];

// ── Sub-components ───────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 2L13 5V11L8 14L3 11V5L8 2Z"
            stroke="#e5ff2c"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="8" cy="8" r="2" fill="#e5ff2c" />
        </svg>
      </div>
      <span className="text-sm font-semibold tracking-tight">spendAi</span>
    </div>
  );
}

function NavLink({ item, active, onClick }) {
  const { label, Icon } = item;
  return (
    <button
      onClick={onClick}
      className={[
        "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs transition-colors",
        active
          ? "bg-muted font-medium text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      ].join(" ")}
    >
      <Icon className="h-3 w-3" />
      {label}
    </button>
  );
}

function StatCard({ label, value, icon: Icon }) {
  return (
    <Card className="flex-1">
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1.5">{label}</p>
          <p className="text-xl font-medium">{value}</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background flex-shrink-0">
          <Icon className="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
}

function CompanyRow({ co }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-[#d7b1ff]">
          <Building2 className="h-4 w-4 text-[#3C3489]" />
        </div>
        <div>
          <p className="text-xs font-medium mb-1">{co.name}</p>
          <div className="flex items-center gap-2.5 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Target className="h-2.5 w-2.5" />
              {co.categories} Categories
            </span>
            <span className="flex items-center gap-1">
              <BarChart2 className="h-2.5 w-2.5" />
              {co.suppliers} Suppliers
            </span>
            <span className="flex items-center gap-1">
              <ArrowUpDown className="h-2.5 w-2.5" />
              {co.transactions} Transactions
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5">{co.updated}</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2.5">
        <span className="text-xl font-bold tracking-tight">{co.amount}</span>
        <Badge
          className="rounded-full bg-[#e5ff2c] text-[#263b30] hover:bg-[#e5ff2c] border-none text-xs font-medium px-3 cursor-default"
        >
          Analyze Spend
        </Badge>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
              <MoreVertical className="h-3.5 w-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeNav, setActiveNav] = useState("portfolio");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between border-b px-6 py-2.5">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                item={item}
                active={activeNav === item.key}
                onClick={() => setActiveNav(item.key)}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d7b1ff] text-[10px] font-semibold text-[#3C3489]">
            P
          </div>
          <div>
            <p className="text-xs font-medium leading-tight">Carl's Account</p>
            <p className="text-[10px] text-muted-foreground leading-tight">paul@spendai.com</p>
          </div>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </div>
      </nav>

      {/* Hero */}
      <div className="flex items-start justify-between px-6 pt-6 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight leading-tight mb-1">
            Carl's Account Dashboard
          </h1>
          <p className="text-xs text-muted-foreground">
            Comprehensive spend analysis across your portfolio companies
          </p>
        </div>
        <div className="rounded-md bg-[#e5ff2c] px-3 py-2 min-w-[130px] flex-shrink-0">
          <div className="flex items-center justify-between text-[10px] font-medium text-[#263b30] mb-1">
            Total Spend
            <TrendingUp className="h-3 w-3" />
          </div>
          <p className="text-lg font-bold tracking-tight text-[#263b30]">$709,795</p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="flex gap-3 px-6 pb-4">
        {statCards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      {/* Portfolio Companies */}
      <div className="px-6 pb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between py-3 px-4">
            <div>
              <CardTitle className="text-sm font-semibold">Portfolio Companies</CardTitle>
              <CardDescription className="text-xs mt-0.5">
                Detailed view of selected companies
              </CardDescription>
            </div>
            <Badge className="rounded-full bg-[#d7b1ff] text-[#3C3489] hover:bg-[#d7b1ff] border-none text-xs font-medium px-3 cursor-default">
              + Add Company
            </Badge>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            {companies.map((co, i) => (
              <div key={co.id}>
                <CompanyRow co={co} />
                {i < companies.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t px-6 py-3 mt-8">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-foreground">
            <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" stroke="#e5ff2c" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <span className="text-[10px] text-muted-foreground">© 2026 SpendAi. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          {["Guides", "Status", "Support", "Terms"].map((link) => (
            <span key={link} className="text-[10px] text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
              {link}
            </span>
          ))}
        </div>
      </footer>

    </div>
  );
}
