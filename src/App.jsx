import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SkinCarePage } from "./pages/Skincare";
import { SpecialsPage } from "./pages/Specials";

const App = () => {
  return (
    <>
      
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/skin-care" element={<SkinCarePage />} />
    <Route path="/especiais" element={<SpecialsPage />} />
    </Routes>
    </>
  );
}
export default App