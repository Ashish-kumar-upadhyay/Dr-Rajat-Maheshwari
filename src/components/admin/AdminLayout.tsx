import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopBar from "./AdminTopBar";
import DashboardPage from "./DashboardPage";
import AppointmentsPage from "./AppointmentsPage";
import PatientsPage from "./PatientsPage";
import ReportsPage from "./ReportsPage";
import SettingsPage from "./SettingsPage";
import BillingPage from "./BillingPage";

interface AdminLayoutProps {
  children?: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    if (children) return children;
    
    switch (activeTab) {
      case "appointments":
        return <AppointmentsPage />;
      case "patients":
        return <PatientsPage />;
      case "reports":
        return <ReportsPage />;
      case "settings":
        return <SettingsPage />;
      case "billing":
        return <BillingPage />;
      case "dashboard":
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="bg-muted" style={{ minHeight: "100vh" }}>
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex flex-col" style={{ marginLeft: "220px" }}>
        <div className="fixed top-0 right-0 left-0 z-10" style={{ marginLeft: "220px" }}>
          <AdminTopBar title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
        </div>
        <div style={{ paddingTop: "73px" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
