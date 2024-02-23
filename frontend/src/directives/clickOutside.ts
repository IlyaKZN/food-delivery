import { Directive } from 'vue';

type TValue = {
  handler: () => void;
};

const root = document.querySelector('#app') as HTMLDivElement;

function clickHandler(el: HTMLElement, callback: () => void, event: MouseEvent) {
  if (!el.contains(event.target as HTMLElement)) {
    callback();
  }
}

const clickOutside: Directive<HTMLElement, TValue> = {
  mounted(el, { value }) {
    const handler = clickHandler.bind(this, el, value.handler);

    setTimeout(() => {
      root.addEventListener('click', handler);
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    el.handler = handler;
  },
  unmounted(el) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    root.removeEventListener('click', el.handler);
  },
};

export default clickOutside;
