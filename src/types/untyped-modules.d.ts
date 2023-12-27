declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.svg?inline' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: unknown;
  export default content;
}

