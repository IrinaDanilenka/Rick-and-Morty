import './Status.scss';

import type { Status as CharacterStatus } from '@/shared/enums';

type StatusProps = {
  status: CharacterStatus;
};

export function Status({ status }: StatusProps) {
  return (
    <span
      className={`status status--${status}`}
      aria-hidden
    />
  );
}
