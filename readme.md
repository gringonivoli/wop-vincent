![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# wop-vincent

Web Component built with Stencil to add backgrounds and slideshows to web pages.

## Getting Started

To try this component:

```bash
git clone https://github.com/gringonivoli/wop-vincent.git my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

## Using this component

### Script tag

- Put this script tag `<script async defer src="https://unpkg.com/wop-vincent@0.1.2/dist/wopvincent.js"></script>` in the head of your index.html

### Node Modules
- Run `npm install wop-vincent --save`
- Put a script tag similar to this `<script src='node_modules/wop-vincent/dist/wopvincent.js'></script>` in the head of your index.html

### In a stencil-starter app
- Run `npm install wop-vincent --save`
- Add `{ name: 'wop-vincent' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)

## Examples

```html
<wop-vincent delay="6500">
  <wop-vincent-img data-src="https://images.unsplash.com/photo-1486610832872-e35509acaed4?ixlib=rb-0.3.5&s=b22b43f5e11002f2a998639936c5a2aa&auto=format&fit=crop&w=1567&q=80"></wop-vincent-img>
  <wop-vincent-img data-src="https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-0.3.5&s=cbf1dad48350e3ce57c6225f53b5addb&auto=format&fit=crop&w=1500&q=80"></wop-vincent-img>
</wop-vincent>
```