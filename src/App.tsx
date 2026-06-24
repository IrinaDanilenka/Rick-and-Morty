import './App.scss';

import { Toaster } from 'react-hot-toast';
import { Outlet, Route, Routes } from 'react-router';

import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { CharacterInfoPage } from '@/pages/character-info/CharacterInfoPage';
import { CharactersListPage } from '@/pages/characters-list/CharactersListPage';

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
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path='/'
            element={<CharactersListPage />}
          />
          <Route
            path='/character'
            element={<CharacterInfoPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
