import { Search, Bell } from "lucide-react";
import doctorImage from "../../assets/doctor.png";

interface AdminTopBarProps {
  title?: string;
  subtitle?: string;
}

export default function AdminTopBar({ title = "Dashboard", subtitle = "Overview for today" }: AdminTopBarProps) {
  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
    <div className="bg-background border-b border-border px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="font-bold text-xl text-foreground">{title}</h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          {subtitle} — {today}
        </p>
      </div>
      <div className="flex items-center gap-4">
        {/* Search */}
        <div
          className="flex items-center gap-2 bg-input rounded-lg px-3 py-2 border border-border"
          style={{ width: "220px" }}
        >
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search...</span>
        </div>

        {/* Notifications */}
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <Bell className="w-4 h-4" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-primary-foreground text-xs flex items-center justify-center font-bold">
            3
          </div>
        </div>

        {/* Profile */}
        <img
          src={doctorImage}
          alt="Dr. Rajat"
          className="w-9 h-9 rounded-full object-cover border-2 border-primary"
        />
      </div>
    </div>
  );
}
