import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

const BookDetailPage = lazy(() => import("./components/book/BookDetailPage"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:slug" element={<BookDetailPage />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
