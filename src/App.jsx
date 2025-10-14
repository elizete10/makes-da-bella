import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SkinCarePage } from "./pages/Skincare";
import { SpecialsPage } from "./pages/Specials";
import { ContactPage } from "./pages/Contacts";

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skin-care" element={<SkinCarePage />} />
        <Route path="/especiais" element={<SpecialsPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </>
  );
}
export default App