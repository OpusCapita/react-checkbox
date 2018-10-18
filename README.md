# react-checkbox

### Description
OpusCapita styled checkbox component

### Installation
```
npm install @opuscapita/react-checkbox
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-checkbox)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| onChange                 | function         | required                                 | Callback function for checkbox           |
| onFocus                  | function         | () => {}                                 | onFocus callback function for checkbox   |
| onBlur                   | function         | () => {}                                 | onBlur callback function for checkbox    |
| checked                  | boolean          | false                                    | Is checked or not                        |
| className                | string           |                                          | Additional class for component           |
| disabled                 | boolean          | false                                    | Is disabled                              |
| id                       | string           |                                          | ID                                       |
| label                    | string or node   |                                          | Checkbox label                           |
| tabIndex                 | string           | 0                                        | tabIndex                                 |

### Code example
```jsx
import React from 'react';
import Checkbox from '@opuscapita/react-checkbox';

export default class ReactView extends React.Component {
  render() {
    return (
      <Checkbox
        onChange={this.onChange}
      />
    );
  }
}
```
