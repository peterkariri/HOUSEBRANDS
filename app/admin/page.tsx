import { requireAdmin } from "@/lib/admin-auth";
import AdminDashboard from "./admin-dashboard";

export default async function AdminPage() {
  await requireAdmin();
  return <AdminDashboard />;
}
