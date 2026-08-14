import './CharacterInfoPage.scss';

import { useNavigate, useParams } from 'react-router';

import { ArrowBack } from '@/assets';
import { Loader } from '@/components';
import { formatEnumLabel } from '@/helpers';
import { useLoadCharacter } from '@/hooks';
import { STATUS_LABELS } from '@/shared/enums';
import type { Character } from '@/shared/types';

const UNKNOWN_VALUE = 'Unknown';

const getInfoFields = (character: Character) => [
  { label: 'Gender', value: formatEnumLabel(character.gender) },
  { label: 'Status', value: STATUS_LABELS[character.status] },
  { label: 'Specie', value: formatEnumLabel(character.species) },
  { label: 'Origin', value: character.origin.name || UNKNOWN_VALUE },
  { label: 'Type', value: character.type || UNKNOWN_VALUE },
  { label: 'Location', value: character.location.name || UNKNOWN_VALUE }
];

export function CharacterInfoPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const characterId = Number(id);
  const { character, isLoading } = useLoadCharacter(
    Number.isInteger(characterId) && characterId > 0 ? characterId : null
  );

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

      {isLoading ? (
        <Loader
          text='Loading character card...'
          size={475}
        />
      ) : character ? (
        <div className='character-info-page__content'>
          <img
            src={character.image}
            alt={character.name}
            className='character-info-page__avatar'
          />

          <h1 className='character-info-page__name'>{character.name}</h1>

          <p className='character-info-page__section-title'>Information</p>

          <dl className='character-info-page__info'>
            {getInfoFields(character).map(({ label, value }) => (
              <div
                key={label}
                className='character-info-page__info-row'
              >
                <dt className='character-info-page__info-label'>{label}</dt>
                <dd
                  className='character-info-page__info-value'
                  title={value}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : (
        <p className='character-info-page__empty'>Character not found...</p>
      )}
    </div>
  );
}
