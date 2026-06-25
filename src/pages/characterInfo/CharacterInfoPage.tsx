import './CharacterInfoPage.scss';

import { useNavigate } from 'react-router';

import { ArrowBack } from '@/assets';
import { Loader } from '@/components';

export function CharacterInfoPage() {
  const navigate = useNavigate();

  return (
    <div className='character-info-page'>
      <div className='character-info-page__header'>
        <button
          type='button'
          className='character-info-page__back-button'
          onClick={() => navigate('/')}
        >
          <ArrowBack aria-hidden />
          GO BACK
        </button>
      </div>

      <Loader
        text='Loading character info...'
        size={475}
      />
    </div>
  );
}
