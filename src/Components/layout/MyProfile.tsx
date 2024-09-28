import Dashboard from "../../pages/AdminDashboard/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const MyProfile = () => {
  return (
    <ProtectedRoute role={undefined}>
      <Dashboard />
    </ProtectedRoute>
  );
};

export default MyProfile;