import { Calendar, Users, FileText, IndianRupee, CalendarPlus, UserPlus, FilePlus, MessageCircle } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  initials: string;
  condition: string;
  time: string;
  status: "Confirmed" | "Pending" | "Cancelled";
}

interface Patient {
  id: string;
  name: string;
  initials: string;
  condition: string;
  date: string;
}

export default function DashboardPage() {
  const stats = [
    {
      icon: Calendar,
      value: "1,248",
      label: "Total Appointments",
      change: "+12%",
    },
    {
      icon: Users,
      value: "14",
      label: "Patients Today",
      change: "+3 new",
    },
    {
      icon: FileText,
      value: "7",
      label: "Pending Reports",
      change: "2 urgent",
    },
    {
      icon: IndianRupee,
      value: "₹2.4L",
      label: "Monthly Revenue",
      change: "+8%",
    },
  ];

  const appointments: Appointment[] = [
    { id: "1", name: "Rishi Sharma", initials: "RS", condition: "Varicose Vein", time: "9:00 AM", status: "Confirmed" },
    { id: "2", name: "Priya Verma", initials: "PV", condition: "Vascular Surgery", time: "10:30 AM", status: "Pending" },
    { id: "3", name: "Suresh Patil", initials: "SP", condition: "Diabetic Foot", time: "12:00 PM", status: "Confirmed" },
    { id: "4", name: "Anita Joshi", initials: "AJ", condition: "Endovascular", time: "2:00 PM", status: "Cancelled" },
    { id: "5", name: "Mohan Lal", initials: "ML", condition: "AV Access", time: "4:00 PM", status: "Confirmed" },
  ];

  const recentPatients: Patient[] = [
    { id: "1", name: "Ritu Agarwal", initials: "R", condition: "Varicose Vein", date: "Feb 10" },
    { id: "2", name: "Karan Mehta", initials: "K", condition: "Arterial Disease", date: "Feb 11" },
    { id: "3", name: "Sunita Das", initials: "S", condition: "Diabetic Foot", date: "Feb 12" },
  ];

  const quickActions = [
    { icon: CalendarPlus, label: "Schedule" },
    { icon: UserPlus, label: "Add Patient" },
    { icon: FilePlus, label: "New Report" },
    { icon: MessageCircle, label: "Message" },
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
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-5">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index} 
              className="bg-background rounded-xl border border-border p-5 flex items-center gap-4 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-secondary text-primary transition-transform duration-300 hover:scale-110">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-primary font-bold mt-0.5">{stat.change}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <div className="col-span-2 bg-background rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-base text-foreground">Today's Appointments</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              <a className="text-sm text-primary font-bold cursor-pointer">View All →</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {appointments.map((appointment, index) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between bg-muted rounded-lg px-4 py-3 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-md"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs transition-transform duration-300 hover:scale-110">
                    {appointment.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{appointment.name}</div>
                    <div className="text-xs text-muted-foreground">{appointment.condition}</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{appointment.time}</div>
                <div className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${getStatusStyle(appointment.status)}`}>
                  {appointment.status}
                </div>
                <div className="flex gap-2">
                  <button className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                    View
                  </button>
                  <button className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/30">
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">
          {/* Recent Patients */}
          <div className="bg-background rounded-xl border border-border p-5">
            <h3 className="font-bold text-sm text-foreground mb-4">Recent Patients</h3>
            <div className="flex flex-col gap-3">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary font-bold text-xs">
                      {patient.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{patient.name}</div>
                      <div className="text-xs text-muted-foreground">{patient.condition}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{patient.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-background rounded-xl border border-border p-5">
            <h3 className="font-bold text-sm text-foreground mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    className="flex flex-col items-center gap-2 px-3 py-3 rounded-lg bg-muted border border-border text-xs text-foreground hover:bg-muted/80 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-md"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="w-4.5 h-4.5 transition-transform duration-300 hover:scale-110" />
                    <span>{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
