import { useState } from "react";
import { Plus, CheckCircle, Clock, XCircle, Eye, Edit, Trash2 } from "lucide-react";

interface Appointment {
  id: string;
  patientName: string;
  initials: string;
  age: number;
  treatment: string;
  date: string;
  time: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}

export default function AppointmentsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["All", "Today", "Upcoming", "Confirmed", "Pending", "Cancelled"];

  const stats = [
    { icon: CheckCircle, value: "5", label: "Confirmed", color: "text-primary" },
    { icon: Clock, value: "2", label: "Pending", color: "text-yellow-500" },
    { icon: XCircle, value: "1", label: "Cancelled", color: "text-muted-foreground" },
  ];

  const appointments: Appointment[] = [
    {
      id: "#APT001",
      patientName: "Rishi Sharma",
      initials: "R",
      age: 42,
      treatment: "Varicose Vein Treatment",
      date: "Feb 13, 2024",
      time: "9:00 AM",
      status: "Confirmed",
    },
    {
      id: "#APT002",
      patientName: "Priya Verma",
      initials: "P",
      age: 35,
      treatment: "Vascular Surgery Consult",
      date: "Feb 13, 2024",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: "#APT003",
      patientName: "Suresh Patil",
      initials: "S",
      age: 58,
      treatment: "Diabetic Foot Care",
      date: "Feb 13, 2024",
      time: "12:00 PM",
      status: "Confirmed",
    },
    {
      id: "#APT004",
      patientName: "Anita Joshi",
      initials: "A",
      age: 50,
      treatment: "Endovascular Procedure",
      date: "Feb 13, 2024",
      time: "2:00 PM",
      status: "Cancelled",
    },
    {
      id: "#APT005",
      patientName: "Mohan Lal",
      initials: "M",
      age: 63,
      treatment: "AV Access Creation",
      date: "Feb 13, 2024",
      time: "4:00 PM",
      status: "Confirmed",
    },
    {
      id: "#APT006",
      patientName: "Rekha Singh",
      initials: "R",
      age: 47,
      treatment: "Arterial Bypass Surgery",
      date: "Feb 14, 2024",
      time: "9:00 AM",
      status: "Pending",
    },
    {
      id: "#APT007",
      patientName: "Vikram Rao",
      initials: "V",
      age: 55,
      treatment: "Carotid Artery Surgery",
      date: "Feb 14, 2024",
      time: "11:00 AM",
      status: "Confirmed",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-secondary text-secondary-foreground";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Cancelled":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex-1 bg-muted px-8 py-7 flex flex-col gap-6">
      {/* Filters and Add Button */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter.toLowerCase())}
              className={`text-xs px-4 py-2 rounded-lg border font-bold transition-colors ${
                activeFilter === filter.toLowerCase()
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <button className="bg-primary text-primary-foreground text-sm font-bold px-5 py-2 rounded-xl flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Appointment
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-background rounded-xl border border-border px-5 py-4 flex items-center gap-3 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 cursor-pointer">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground bg-muted transition-transform duration-300 hover:scale-110">
            <CheckCircle className="w-4.5 h-4.5" />
          </div>
          <div>
            <div className="font-bold text-xl text-foreground">8</div>
            <div className="text-xs text-muted-foreground">Total</div>
          </div>
        </div>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-background rounded-xl border border-border px-5 py-4 flex items-center gap-3 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 cursor-pointer">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground bg-muted transition-transform duration-300 hover:scale-110">
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

      {/* Appointments Table */}
      <div className="bg-background rounded-xl border border-border overflow-hidden">
        {/* Table Header */}
        <div
          className="grid text-xs text-muted-foreground font-bold uppercase px-5 py-3 bg-muted border-b border-border"
          style={{ gridTemplateColumns: "80px 1fr 1fr 1fr 1fr 100px 120px" }}
        >
          <div>ID</div>
          <div>Patient</div>
          <div>Treatment</div>
          <div>Date</div>
          <div>Time</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Table Rows */}
        {appointments.map((appointment, index) => (
          <div
            key={appointment.id}
            className={`grid items-center px-5 py-3 border-b border-border transition-all duration-300 ease-out transform hover:scale-[1.01] hover:shadow-md ${
              index % 2 === 0 ? "bg-background" : "bg-card-bg"
            }`}
            style={{ gridTemplateColumns: "80px 1fr 1fr 1fr 1fr 100px 120px", animationDelay: `${index * 30}ms` }}
          >
            <div className="text-xs text-muted-foreground">{appointment.id}</div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs transition-transform duration-300 hover:scale-110">
                {appointment.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{appointment.patientName}</div>
                <div className="text-xs text-muted-foreground">Age {appointment.age}</div>
              </div>
            </div>
            <div className="text-sm text-foreground">{appointment.treatment}</div>
            <div className="text-sm text-muted-foreground">{appointment.date}</div>
            <div className="text-sm text-muted-foreground">{appointment.time}</div>
            <div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${getStatusStyle(appointment.status)}`}>
                {appointment.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md">
                <Eye className="w-3 h-3" />
              </button>
              <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/30">
                <Edit className="w-3 h-3" />
              </button>
              <button className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:text-red-500">
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
