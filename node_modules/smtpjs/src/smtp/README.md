# smtp server

ctx.send = function () {

}

ctx.params
```js
const config = {
  events: {
    HELO: (ctx) => {
      ctx.send('HELO')
    },

    'MAIL FROM': (ctx) => {

    }
  }
}
```