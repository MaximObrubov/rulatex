# rulatex

<!-- language-babel расширение для Atom
`npm install --only=dev` для установки всех зависимостей

** настраивал по этой ссылке
https://medium.com/@arashsaidi/writing-es6-with-the-atom-editor-fafe2b9b5710 -->

## [Webpack + babel + node-static](http://ccoenraets.github.io/es6-tutorial-data/babel-webpack/)
Процесс установки/настройки:
- устанавливаем пакеты (вместо http-server используем node-static)
```
npm install babel-core babel-loader babel-preset-es2015 webpack node-static
```

- подключаем конфиг для webpack *webpack.js.config*

Входные файлы будут подключены в соответствии с матчем по "index*" (поэтому пока используется *index.js*). Итоговый файл *app.js* компилится в директорию */build*. Параметр `devtool` пока хз зачем.
```coffee
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

```
- подключаем зависимости в *package.json*
```json
"scripts": {
    "webpack": "webpack",
    "start": "static"
}
```

Запуск:
- компиляция: `./compile`
- запуск: `./run`

Текущие проблемы:
- нет компиляции на лету
