import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import NotFound from "./components/NotFound";
import Layout from "./Layout";
import Services from "./Components/Services";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
