# eslint-plugin-react-use-props/require

## Rule Details

This rule check required props that components use

### Example:
Let's consider we have this configuration in `.eslintrc`:

```json
{
  "plugins": ["react-use-props"],
  "rules": {
    "react-use-props/require": [2,
      { "element": "img", "props": ["width", "height"] },
      { "element": "iframe", "props": ["width", "height"] }
    ]
  }
}
```

:+1: Examples of **correct** code for this rule:

```jsx
<>
  <img width="200" height="100" />
  <iframe width="400" height="200" />
</>
```

:-1: Examples of **incorrect** code for this rule:

```jsx
<>
  <img />
  <img width="200" />
  <img height="100" />
  <iframe />
  <iframe width="400" />
  <iframe height="200" />
</>
```
