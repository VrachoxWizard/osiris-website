import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Header />
      <Home />
      <Footer />
    </Suspense>
  );
}

export default App;
