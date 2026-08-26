import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import Pillars from '@/pages/Pillars';
import PillarDetail from '@/pages/PillarDetail';
import Articles from '@/pages/Articles';
import ArticleDetail from '@/pages/ArticleDetail';
import Consultations from '@/pages/Consultations';
import Products from '@/pages/Products';
import Challenge from '@/pages/Challenge';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import MedicalDisclaimer from '@/pages/MedicalDisclaimer';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pillars" element={<Pillars />} />
        <Route path="pillars/:slug" element={<PillarDetail />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:slug" element={<ArticleDetail />} />
        <Route path="consultations" element={<Consultations />} />
        <Route path="products" element={<Products />} />
        <Route path="challenge" element={<Challenge />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="medical-disclaimer" element={<MedicalDisclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
