import { Forma } from "./components/landing/forma/Forma";
import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./components/admin/AdminPage";
import { Lessons } from "./components/landing/lessons/Lessons";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="admin-page" element={<AdminPage />} />
      <Route path="login" element={<Forma />} />
      <Route path="videos" element={<Lessons />} />
    </Routes>
  );
}

export default App;
