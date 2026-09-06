import './App.scss';

import { Toaster } from 'react-hot-toast';
import { Outlet, Route, Routes } from 'react-router';

import { ErrorBoundary, Footer, Header } from '@/components';
import { CharacterInfoPage, CharactersListPage, NotFoundPage } from '@/pages';

function MainLayout() {
  return (
    <div className='app-layout'>
      <Header />
      <main className='app-layout__content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Toaster
        position='bottom-right'
        toastOptions={{
          custom: {
            style: {
              background: 'transparent',
              boxShadow: 'none',
              padding: 0
            }
          }
        }}
      />
      <ErrorBoundary>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path='/'
              element={<CharactersListPage />}
            />
            <Route
              path='/character/:id'
              element={<CharacterInfoPage />}
            />
            <Route
              path='/404'
              element={<NotFoundPage />}
            />
            <Route
              path='*'
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
