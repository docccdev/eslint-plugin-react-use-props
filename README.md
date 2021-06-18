# eslint-plugin-react-use-props

ESLint plugin to **require** or **deprecate** props that components use

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
# npm
npm install eslint --save-dev

# yarn
yarn add eslint --dev
```

Next, install `eslint-plugin-react-use-props`:

```sh
# npm
npm install eslint-plugin-react-use-props --save-dev

# yarn
yarn add eslint-plugin-react-use-props --dev
```

## Usage

Add `react-use-props` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["react-use-props"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "react-use-props/require": [2,
      { "element": "img", "props": ["width", "height"] }
    ],
    "react-use-props/deprecate": [2,
      { "element": "div", "props": ["align"] }
    ]
  }
}
```

## Supported Rules

- [eslint-plugin-react-use-props/require](https://github.com/docccdev/eslint-plugin-react-use-props/blob/main/docs/rules/require.md): Check required component props
- [eslint-plugin-react-use-props/deprecate](https://github.com/docccdev/eslint-plugin-react-use-props/blob/main/docs/rules/deprecate.md): Check deprecated component props
