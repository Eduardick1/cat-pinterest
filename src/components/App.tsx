import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import Favorites from "./Favorites";
import Catalog from "./Catalog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Catalog />} index />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
