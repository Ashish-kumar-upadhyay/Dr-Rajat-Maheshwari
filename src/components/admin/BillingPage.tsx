import { useState } from "react";
import { IndianRupee, Download, Eye, FileText, TrendingUp, Calendar, CheckCircle } from "lucide-react";

interface Invoice {
  id: string;
  patientName: string;
  initials: string;
  amount: number;
  date: string;
  status: "Paid" | "Pending" | "Overdue";
}

export default function BillingPage() {
  const stats = [
    { icon: IndianRupee, value: "₹2.4L", label: "Total Revenue", color: "text-primary" },
    { icon: TrendingUp, value: "₹45K", label: "This Month", color: "text-green-500" },
    { icon: Calendar, value: "156", label: "Total Invoices", color: "text-primary" },
    { icon: CheckCircle, value: "142", label: "Paid", color: "text-green-500" },
  ];

  const invoices: Invoice[] = [
    {
      id: "#INV001",
      patientName: "Rishi Sharma",
      initials: "R",
      amount: 15000,
      date: "Feb 13, 2024",
      status: "Paid",
    },
    {
      id: "#INV002",
      patientName: "Priya Verma",
      initials: "P",
      amount: 25000,
      date: "Feb 12, 2024",
      status: "Pending",
    },
    {
      id: "#INV003",
      patientName: "Suresh Patil",
      initials: "S",
      amount: 18000,
      date: "Feb 11, 2024",
      status: "Paid",
    },
    {
      id: "#INV004",
      patientName: "Anita Joshi",
      initials: "A",
      amount: 32000,
      date: "Feb 10, 2024",
      status: "Overdue",
    },
    {
      id: "#INV005",
      patientName: "Mohan Lal",
      initials: "M",
      amount: 12000,
      date: "Feb 09, 2024",
      status: "Paid",
    },
    {
      id: "#INV006",
      patientName: "Rekha Singh",
      initials: "R",
      amount: 28000,
      date: "Feb 08, 2024",
      status: "Pending",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Overdue":
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

      {/* Main Content */}
      <div className="bg-background rounded-xl border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-bold text-base text-foreground">Recent Invoices</h3>
          <button className="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-lg flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Generate Invoice
          </button>
        </div>
        <div
          className="grid text-xs text-muted-foreground font-bold uppercase px-5 py-3 bg-muted border-b border-border"
          style={{ gridTemplateColumns: "80px 1fr 100px 120px 90px 100px" }}
        >
          <div>ID</div>
          <div>Patient</div>
          <div>Amount</div>
          <div>Date</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        {invoices.map((invoice, index) => (
          <div
            key={invoice.id}
            className={`grid items-center px-5 py-3 border-b border-border transition-all duration-300 ease-out transform hover:scale-[1.01] hover:shadow-md ${
              index % 2 === 0 ? "bg-background" : "bg-card-bg"
            }`}
            style={{ gridTemplateColumns: "80px 1fr 100px 120px 90px 100px", animationDelay: `${index * 30}ms` }}
          >
            <div className="text-xs text-muted-foreground">{invoice.id}</div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs transition-transform duration-300 hover:scale-110">
                {invoice.initials}
              </div>
              <div className="text-sm font-bold text-foreground">{invoice.patientName}</div>
            </div>
            <div className="text-sm font-bold text-foreground">₹{invoice.amount.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">{invoice.date}</div>
            <div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${getStatusStyle(invoice.status)}`}>
                {invoice.status}
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
  );
}
