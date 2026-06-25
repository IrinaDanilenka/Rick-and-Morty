import './ErrorToast.scss';

import { Cross } from '@/assets';

type ErrorToastProps = {
  title: string;
  message: string;
  visible: boolean;
};

export function ErrorToast({ title, message, visible }: ErrorToastProps) {
  return (
    <div
      className={`error-toast ${visible ? 'error-toast--visible' : ''}`}
      role='alert'
    >
      <div
        className='error-toast__icon'
        aria-hidden
      >
        <Cross />
      </div>

      <div className='error-toast__content'>
        <p className='error-toast__title'>{title}</p>
        <p className='error-toast__message'>{message}</p>
      </div>
    </div>
  );
}
