```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-basic-input.js';

export default {
  title: 'JbBasicInput',
  component: 'jb-basic-input',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbBasicInput

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-basic-input
```

```js
import 'jb-basic-input/jb-basic-input.js';
```

```js preview-story
export const Simple = () => html`
  <jb-basic-input></jb-basic-input>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-basic-input title="Hello World"></jb-basic-input>
`;
```
