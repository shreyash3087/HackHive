import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Hackathons from "./Pages/Hackathons";
import BlogsPage from "./Pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/blogs" element={<BlogsPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
