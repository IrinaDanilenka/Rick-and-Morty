import './Status.css';

export type CharacterStatus = 'alive' | 'dead' | 'unknown';

type StatusProps = {
  status: CharacterStatus;
};

export function Status({ status }: StatusProps) {
  return (
    <span
      className={`status status-${status}`}
      aria-hidden
    />
  );
}
