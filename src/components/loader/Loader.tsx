import './Loader.scss';

import loaderImage from '@/assets/loader.png';

type LoaderProps = {
  text?: string;
  size: number;
};

export function Loader({ text, size }: LoaderProps) {
  return (
    <div
      className='loader'
      role='status'
      aria-live='polite'
      aria-label={text ?? 'Loading'}
    >
      <div className='loader__portal'>
        <img
          className='loader__image'
          src={loaderImage}
          alt=''
          width={size}
          height={size}
        />
      </div>
      {text && (
        <p className='loader__text'>
          <span className='loader__text-label'>{text}</span>
        </p>
      )}
    </div>
  );
}
