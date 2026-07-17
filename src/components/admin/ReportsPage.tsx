import { useState } from "react";
import { Search, FileText, CheckCircle, Clock, AlertCircle, Eye, Download } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Report {
  id: string;
  patientName: string;
  initials: string;
  type: string;
  date: string;
  status: "Completed" | "Pending" | "Urgent";
}

export default function ReportsPage() {
  const chartData = [
    { month: "Jan", reports: 45 },
    { month: "Feb", reports: 52 },
    { month: "Mar", reports: 38 },
    { month: "Apr", reports: 65 },
    { month: "May", reports: 48 },
    { month: "Jun", reports: 72 },
  ];

  const stats = [
    { icon: FileText, value: "156", label: "Total Reports", color: "text-primary" },
    { icon: CheckCircle, value: "128", label: "Completed", color: "text-primary" },
    { icon: Clock, value: "18", label: "Pending", color: "text-yellow-500" },
    { icon: AlertCircle, value: "10", label: "Urgent", color: "text-red-500" },
  ];

  const reports: Report[] = [
    {
      id: "#RPT001",
      patientName: "Rishi Sharma",
      initials: "R",
      type: "Lab Results",
      date: "Feb 13, 2024",
      status: "Completed",
    },
    {
      id: "#RPT002",
      patientName: "Priya Verma",
      initials: "P",
      type: "Imaging",
      date: "Feb 13, 2024",
      status: "Pending",
    },
    {
      id: "#RPT003",
      patientName: "Suresh Patil",
      initials: "S",
      type: "Consultation",
      date: "Feb 12, 2024",
      status: "Completed",
    },
    {
      id: "#RPT004",
      patientName: "Anita Joshi",
      initials: "A",
      type: "Lab Results",
      date: "Feb 12, 2024",
      status: "Urgent",
    },
    {
      id: "#RPT005",
      patientName: "Mohan Lal",
      initials: "M",
      type: "Imaging",
      date: "Feb 11, 2024",
      status: "Completed",
    },
    {
      id: "#RPT006",
      patientName: "Rekha Singh",
      initials: "R",
      type: "Consultation",
      date: "Feb 11, 2024",
      status: "Pending",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-secondary text-secondary-foreground";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Urgent":
        return "bg-red-500 text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex-1 bg-muted px-8 py-7 flex flex-col gap-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-background rounded-xl border border-border px-5 py-4 flex items-center gap-3 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 cursor-pointer">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-secondary text-primary transition-transform duration-300 hover:scale-110">
                <Icon className={`w-4.5 h-4.5 ${stat.color}`} />
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Chart Section */}
        <div className="bg-background rounded-xl border border-border p-6">
          <h3 className="font-bold text-base text-foreground mb-4">Report Analytics</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month" 
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="reports" 
                  stroke="#1a6dcc" 
                  strokeWidth={2}
                  dot={{ fill: "#1a6dcc", strokeWidth: 2 }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Reports Table */}
        <div className="bg-background rounded-xl border border-border overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h3 className="font-bold text-base text-foreground">Recent Reports</h3>
          </div>
          <div
            className="grid text-xs text-muted-foreground font-bold uppercase px-5 py-3 bg-muted border-b border-border"
            style={{ gridTemplateColumns: "80px 1fr 1fr 100px 90px 100px" }}
          >
            <div>ID</div>
            <div>Patient</div>
            <div>Type</div>
            <div>Date</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
          {reports.map((report, index) => (
            <div
              key={report.id}
              className={`grid items-center px-5 py-3 border-b border-border transition-all duration-300 ease-out transform hover:scale-[1.01] hover:shadow-md ${
                index % 2 === 0 ? "bg-background" : "bg-card-bg"
              }`}
              style={{ gridTemplateColumns: "80px 1fr 1fr 100px 90px 100px", animationDelay: `${index * 30}ms` }}
            >
              <div className="text-xs text-muted-foreground">{report.id}</div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs transition-transform duration-300 hover:scale-110">
                  {report.initials}
                </div>
                <div className="text-sm font-bold text-foreground">{report.patientName}</div>
              </div>
              <div className="text-sm text-foreground">{report.type}</div>
              <div className="text-sm text-muted-foreground">{report.date}</div>
              <div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${getStatusStyle(report.status)}`}>
                  {report.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <Eye className="w-3 h-3" />
                </button>
                <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/30">
                  <Download className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
