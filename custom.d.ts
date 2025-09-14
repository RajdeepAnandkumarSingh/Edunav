// This file tells TypeScript how to handle imports for .module.css files.
// Using a unique name like 'content' avoids conflicts with other declaration files.

declare module '*.module.css' {
  const content: { readonly [key: string]: string };
  export default content;
}

