import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <Suspense fallback={<div className="h-screen w-screen bg-black" />}>
      <ScrollToTop />
      <Header />
      <Home />
      <Footer />
    </Suspense>
  );
}

export default App;
