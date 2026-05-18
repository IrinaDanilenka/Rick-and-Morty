import './CharactersListPage.css';

import logoMainPage from '../../assets/logo_main_page.png';
import { Loader } from '../../components/loader/Loader';

export function CharactersListPage() {
  return (
    <>
      <div className='characters-list'>
        <img
          src={logoMainPage}
          alt='main page logo'
          className='characters-list__logo'
        />
      </div>

      <Loader
        text='Loading characters...'
        size={475}
      />
    </>
  );
}
