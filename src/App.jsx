import { BrowserRouter, Routes, Route } from "react-router";
// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PageNotFound from "./pages/PageNotFound";
import DesignSystem from "./pages/DesignSystem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
