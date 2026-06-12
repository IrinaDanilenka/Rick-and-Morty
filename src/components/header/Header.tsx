import './Header.scss';

import { Logo } from '@/assets';

export function Header() {
  return (
    <div className='header'>
      <Logo className='header__logo' />
    </div>
  );
}
