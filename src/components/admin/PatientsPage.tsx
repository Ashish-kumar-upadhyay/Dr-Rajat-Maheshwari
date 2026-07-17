import { useState } from "react";
import { Search, Filter, UserPlus, Users, UserCheck, AlertCircle, Eye, Edit } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  initials: string;
  age: number;
  gender: "Male" | "Female";
  condition: string;
  lastVisit: string;
  visits: number;
  status: "Active" | "Inactive" | "Critical";
}

export default function PatientsPage() {
  const stats = [
    { icon: Users, value: "248", label: "Total Patients", color: "text-primary" },
    { icon: UserCheck, value: "192", label: "Active Patients", color: "text-primary" },
    { icon: AlertCircle, value: "12", label: "Critical Cases", color: "text-yellow-500" },
  ];

  const patients: Patient[] = [
    {
      id: "P001",
      name: "Rishi Sharma",
      initials: "R",
      age: 42,
      gender: "Male",
      condition: "Varicose Vein",
      lastVisit: "Feb 10, 2024",
      visits: 5,
      status: "Active",
    },
    {
      id: "P002",
      name: "Priya Verma",
      initials: "P",
      age: 35,
      gender: "Female",
      condition: "Vascular Surgery",
      lastVisit: "Feb 08, 2024",
      visits: 2,
      status: "Active",
    },
    {
      id: "P003",
      name: "Suresh Patil",
      initials: "S",
      age: 58,
      gender: "Male",
      condition: "Diabetic Foot",
      lastVisit: "Feb 05, 2024",
      visits: 8,
      status: "Critical",
    },
    {
      id: "P004",
      name: "Anita Joshi",
      initials: "A",
      age: 50,
      gender: "Female",
      condition: "Endovascular",
      lastVisit: "Jan 28, 2024",
      visits: 3,
      status: "Inactive",
    },
    {
      id: "P005",
      name: "Mohan Lal",
      initials: "M",
      age: 63,
      gender: "Male",
      condition: "AV Access",
      lastVisit: "Feb 12, 2024",
      visits: 6,
      status: "Active",
    },
    {
      id: "P006",
      name: "Rekha Singh",
      initials: "R",
      age: 47,
      gender: "Female",
      condition: "Arterial Bypass",
      lastVisit: "Feb 01, 2024",
      visits: 4,
      status: "Active",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-secondary text-secondary-foreground";
      case "Critical":
        return "bg-yellow-500 text-white";
      case "Inactive":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex-1 bg-muted px-8 py-7 flex flex-col gap-6">
      {/* Search, Filter, and Add Patient */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 border border-border" style={{ width: "260px" }}>
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search patients...</span>
          </div>
          <button className="border border-border bg-background text-sm text-muted-foreground px-4 py-2 rounded-lg flex items-center gap-2">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
        </div>
        <button className="bg-primary text-primary-foreground text-sm font-bold px-5 py-2 rounded-xl flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add Patient
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-background rounded-xl border border-border px-5 py-4 flex items-center gap-3 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 cursor-pointer">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-secondary text-primary transition-transform duration-300 hover:scale-110">
                <Icon className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Patients Table */}
      <div className="bg-background rounded-xl border border-border overflow-hidden">
        {/* Table Header */}
        <div
          className="grid text-xs text-muted-foreground font-bold uppercase px-5 py-3 bg-muted border-b border-border"
          style={{ gridTemplateColumns: "70px 1fr 80px 80px 1fr 120px 80px 90px 100px" }}
        >
          <div>ID</div>
          <div>Name</div>
          <div>Age</div>
          <div>Gender</div>
          <div>Condition</div>
          <div>Last Visit</div>
          <div>Visits</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Table Rows */}
        {patients.map((patient, index) => (
          <div
            key={patient.id}
            className={`grid items-center px-5 py-3 border-b border-border transition-all duration-300 ease-out transform hover:scale-[1.01] hover:shadow-md ${
              index % 2 === 0 ? "bg-background" : "bg-card-bg"
            }`}
            style={{ gridTemplateColumns: "70px 1fr 80px 80px 1fr 120px 80px 90px 100px", animationDelay: `${index * 30}ms` }}
          >
            <div className="text-xs text-muted-foreground">{patient.id}</div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs transition-transform duration-300 hover:scale-110">
                {patient.initials}
              </div>
              <div className="text-sm font-bold text-foreground">{patient.name}</div>
            </div>
            <div className="text-sm text-foreground">{patient.age}</div>
            <div className="text-sm text-muted-foreground">{patient.gender}</div>
            <div className="text-sm text-foreground">{patient.condition}</div>
            <div className="text-sm text-muted-foreground">{patient.lastVisit}</div>
            <div className="text-sm text-muted-foreground text-center">{patient.visits}</div>
            <div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${getStatusStyle(patient.status)}`}>
                {patient.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md">
                <Eye className="w-3 h-3" />
              </button>
              <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/30">
                <Edit className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
