import { LayoutDashboard, Calendar, Users, BarChart2, Settings, IndianRupee, LogOut } from "lucide-react";
import doctorImage from "../../assets/doctor.png";

interface AdminSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function AdminSidebar({ activeTab = "dashboard", onTabChange }: AdminSidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "patients", label: "Patients", icon: Users },
    { id: "reports", label: "Reports", icon: BarChart2 },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "billing", label: "Billing", icon: IndianRupee },
  ];

  return (
    <div className="flex flex-col fixed left-0 top-0" style={{ width: "220px", height: "100vh", backgroundColor: "#0f1c3f" }}>
      {/* Header */}
      <div
        className="px-5 py-5 border-b flex items-center gap-3"
        style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
      >
        <img
          src={doctorImage}
          alt="Dr. Rajat"
          className="w-9 h-9 rounded-xl object-cover border-2 border-primary"
        />
        <div className="flex-1 min-w-0">
          <div className="text-white font-bold text-sm leading-tight truncate">Dr-Rajat-Maheshwari</div>
          <div className="text-xs" style={{ color: "#94a3b8" }}>Admin Panel</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-3 py-5 flex-1">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ease-out transform hover:translate-x-1 ${
                isActive
                  ? "bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/30"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
              <span className="transition-opacity duration-300">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1 w-full">
          <LogOut className="w-4 h-4 flex-shrink-0 transition-transform duration-300 hover:rotate-180" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
