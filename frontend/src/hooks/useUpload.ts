import { merge } from 'lodash';

type TOptions = {
  accept?: string
  multiple?: boolean
};

const defaultOptions = {
  accept: '*',
  multiple: true,
};

function useUpload<T extends TOptions>(options?: T): T['multiple'] extends false ? Promise<File | null> : Promise<FileList | null>;
function useUpload(options = defaultOptions) {
  options = merge(defaultOptions, options);

  return new Promise((resolve) => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', options.accept);
    input.setAttribute('multiple', options.multiple.toString());

    input.click();

    input.addEventListener('change', (event) => {
      const { files } = event.target as HTMLInputElement;

      resolve(
        options.multiple
          ? files!
          : files![0],
      );

      input.remove();
    });

    input.addEventListener('cancel', () => {
      resolve(null);

      input.remove();
    });
  });
};

export default useUpload;
