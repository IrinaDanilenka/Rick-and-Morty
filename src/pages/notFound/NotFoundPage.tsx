import './NotFoundPage.scss';

import { Link } from 'react-router';

import { notFoundImage } from '@/assets';

export function NotFoundPage() {
  return (
    <div className='not-found-page'>
      <img
        src={notFoundImage}
        alt='404 Not Found'
        className='not-found-page__image'
      />

      <Link
        to='/'
        className='not-found-page__link'
      >
        Go to main page
      </Link>
    </div>
  );
}
