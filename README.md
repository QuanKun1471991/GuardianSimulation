# React project template

## Features

- Nextjs, Ant Design, Typescript.

- Basic authentication ( user: *email@gmail.com* password: password ).

- Sass supported.

- Container and component samples

- Eslint, Prettier and `pre-commit` supported

- Rest API with `axios`

- Clean structure

- Redux, Sagas with injector.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build:(nightly | staging | production)
```

## Code structure

```
- src
  - assets
    - images
    - styles
        - global.scss
        - loader.scss
        - layout.scss
  - components
    - Common
    - HoCs
  - configs
    - common-configs
  - core
    - constants
    - hooks
    - model
    - utils
  - layouts
    - header
    - main
    - sider
  - pages
    - login
    - todo
  - services
    - _base
    - auth
      - actions
      - api
      - reducers
      - sagas
      - selectors
      - types
    - todo
  - types
    - auth
    - axios
    - redux
    - todo
```
