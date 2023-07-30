import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "screens/HomePage";
import LoginPage from "screens/LoginPage";
import ProfilePage from "screens/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
