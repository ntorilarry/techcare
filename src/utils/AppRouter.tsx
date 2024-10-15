import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../shared/MainLayout";
import Patients from "../pages/patients/Patients";

const AppRouter = () => {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="patients" />} />
        <Route path="patients" element={<Patients />} />
      </Route>

      {/* Page not found route */}
      <Route path="/*" element={<p>Not Found</p>} />
    </Routes>
  );
};

export default AppRouter;
