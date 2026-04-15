import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Studio } from './pages/Studio';
import { Contact } from './pages/Contact';
import { LanguageProvider } from './i18n/context';
import './App.css';

function RouteErrorFallback() {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-24 bg-warm-white text-charcoal">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-wider text-muted-sage mb-3">Navigation error</p>
        <h1 className="font-heading text-3xl lg:text-5xl mb-4">This page could not be loaded.</h1>
        <p className="text-soft-gray mb-8">
          The route might be invalid, or the app base path is misconfigured for the current host.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-charcoal text-warm-white hover:bg-charcoal/90 transition-smooth"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorFallback />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
      { path: 'studio', element: <Studio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <RouteErrorFallback /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
