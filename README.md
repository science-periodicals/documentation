# @scipe/documentation

[![CircleCI](https://circleci.com/gh/science-periodicals/documentation.svg?style=svg&circle-token=f84769b939a4c31d2245119a959784bb4813ad29)](https://circleci.com/gh/science-periodicals/documentation)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[sci.pe](https://sci.pe) documentation website

Note: this module is auto published to npm on CircleCI. Only run `npm version
patch|minor|major` and let CI do the rest.

## Style guide

Use `prettier --single-quote` (or `npm run format`) and:

* `const` over `let` or `var` whenever possible

## Semantic of `readOnly` and `disabled`

* `disabled`: all controls (delete icon, input etc.) visible _but_ disabled
* `readOnly`: do not render any controls

## Development

Be sure that the dependencies mentioned in `link.sh` are installed and up to date, then:

```sh
npm install
./link.sh
npm run watch
```

### Testing the demos

1. Be sure that app-suite is running on `http://127.0.0.1:3000`
2. Load the `documentation` story data (`create-story -r --prod`)
3. Warmup (`librarian warmup`)
4. Run the documentation dev server (`npm run watch`) and be sure that
  `NODE_ENV` is not set to `production`
5. Visit http://127.0.0.1:3335/get-started/quick-start

## CSS Best Practices

For typography, use the default styles defined in `@scipe/ui/stylesheets/typograpy.css`.
For layout, a number of classes have been defined in the documentation's shared css found in `documentation.css`

The `.sa__` and `.documentation__` mixin classes may be accessed via a BemTags mixin:

```js
const bem = new BemTags('@sa', '@documentation');
```

In most cases the html tags can be mapped to classes as follows:

### Typography

| tag name                | sa class name                     | bemTag                                 |
| ----------------------- | --------------------------------- | -------------------------------------- |
| p, span (body text)     | .sa\_\_default-ui-type            | `bem('@__default-ui-type')`            |
| p, span (big body text) | .sa\_\_default-ui-type--big       | `bem('@__default-ui-type--big')`       |
| h1                      | .sa\_\_default-ui-type--display-1 | `bem('@__default-ui-type--display-1')` |
| h2                      | .sa\_\_default-ui-type--headline  | `bem('@__default-ui-type--headline')`  |
| h3                      | .sa\_\_default-ui-type--subhead-1 | `bem('@__default-ui-type--subhead-1')` |
| h4                      | .sa\_\_default-ui-type--subhead-2 | `bem('@__default-ui-type--subhead-2')` |

### Layout

| tag name          | documentation class name             | bemTag                         |
| ----------------- | ----------------------------------- | ------------------------------ |
| header            | .documentation\_\_header            | `bem('@__header')`             |
| article           | .documentation\_\_article            | `bem('@__article')`            |
| section           | .documentation\_\_section           | `bem('@__section')`            |
| section > section | .documentation\_\_sub-section       | `bem('@__sub-section')`        |
| ul, ol            | .documentation\_\_list               | `bem('@__list')`               |
| table             | .documentation\_\_table              | `bem('@__table')`              |
| tr                | .documentation\_\_table-row          | `bem('@__table-row')`          |
| td                | .documentation\_\_table-cell         | `bem('@__table-cell')`         |
| th                | .documentation\_\_table-cell--header | `bem('@__table-cell--header')` |
| caption           | .documentation\_\_table-caption      | `bem('@__table-caption')`      |


## License

`@scipe/documentation` is dual-licensed under commercial and open source licenses
([AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html)) based on the intended
use case. Contact us to learn which license applies to your use case.
