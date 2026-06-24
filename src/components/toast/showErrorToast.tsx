import toast from 'react-hot-toast';

import { ErrorToast } from './ErrorToast';

export function showErrorToast(title: string, message: string) {
  toast.custom(
    (t) => (
      <ErrorToast
        title={title}
        message={message}
        visible={t.visible}
      />
    ),
    { duration: 4000 }
  );
}
