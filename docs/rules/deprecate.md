# eslint-plugin-react-use-props/deprecate

## Rule Details

This rule check deprecated props that components use. 
Maybe really handy for large teams while refactoring codebase.

### Example:
Let's consider we have this configuration in `.eslintrc`:

```json
{
  "plugins": ["react-use-props"],
  "rules": {
    "react-use-props/deprecate": [2,
      { "element": "div", "props": ["align"] },
      { "element": "MyComponent", "props": ["oldProp"] }
    ]
  }
}
```

:+1: Examples of **correct** code for this rule:

```jsx
<>
  <div />
  <MyComponent />
</>
```

:-1: Examples of **incorrect** code for this rule:

```jsx
<>
  <div align="left" />
  <MyComponent oldProp="value" />
</>
```
