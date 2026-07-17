import { useState } from "react";
import { User, Bell, Shield, Palette, Globe, Save } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    email: "dr.rajat@clinic.com",
    phone: "+91 98765 43210",
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
    twoFactor: false,
    language: "en",
    timezone: "Asia/Kolkata",
  });

  return (
    <div className="flex-1 bg-muted px-8 py-7 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl text-foreground">Settings</h2>
        <button className="bg-primary text-primary-foreground text-sm font-bold px-5 py-2 rounded-xl flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-background rounded-xl border border-border p-6 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110">
              <User className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground">Profile Settings</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-bold text-foreground mb-1 block">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-input text-foreground text-sm transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1 block">Phone</label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-input text-foreground text-sm transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-background rounded-xl border border-border p-6 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground">Notifications</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-foreground">Push Notifications</div>
                <div className="text-xs text-muted-foreground">Receive in-app notifications</div>
              </div>
              <button
                onClick={() => setSettings({ ...settings, notifications: !settings.notifications })}
                className={`w-12 h-6 rounded-full transition-all duration-300 hover:scale-110 ${
                  settings.notifications ? "bg-primary shadow-lg shadow-primary/30" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.notifications ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-foreground">Email Alerts</div>
                <div className="text-xs text-muted-foreground">Receive email notifications</div>
              </div>
              <button
                onClick={() => setSettings({ ...settings, emailAlerts: !settings.emailAlerts })}
                className={`w-12 h-6 rounded-full transition-all duration-300 hover:scale-110 ${
                  settings.emailAlerts ? "bg-primary shadow-lg shadow-primary/30" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.emailAlerts ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-foreground">SMS Alerts</div>
                <div className="text-xs text-muted-foreground">Receive SMS notifications</div>
              </div>
              <button
                onClick={() => setSettings({ ...settings, smsAlerts: !settings.smsAlerts })}
                className={`w-12 h-6 rounded-full transition-all duration-300 hover:scale-110 ${
                  settings.smsAlerts ? "bg-primary shadow-lg shadow-primary/30" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.smsAlerts ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-background rounded-xl border border-border p-6 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground">Security</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-foreground">Two-Factor Authentication</div>
                <div className="text-xs text-muted-foreground">Add extra security to your account</div>
              </div>
              <button
                onClick={() => setSettings({ ...settings, twoFactor: !settings.twoFactor })}
                className={`w-12 h-6 rounded-full transition-all duration-300 hover:scale-110 ${
                  settings.twoFactor ? "bg-primary shadow-lg shadow-primary/30" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    settings.twoFactor ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <button className="text-sm text-primary font-bold py-2 transition-all duration-300 hover:scale-105 hover:text-primary/80">Change Password</button>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-background rounded-xl border border-border p-6 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-foreground">Appearance</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-bold text-foreground mb-1 block">Language</label>
              <select
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-input text-foreground text-sm transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1 block">Timezone</label>
              <select
                value={settings.timezone}
                onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-input text-foreground text-sm transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                <option value="Asia/Dubai">Asia/Dubai (GST)</option>
                <option value="America/New_York">America/New_York (EST)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
