import { createFileRoute } from "@tanstack/react-router";
import AdminLayout from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/doctor-admin")({
  component: Admin,
});

function Admin() {
  return <AdminLayout />;
}
