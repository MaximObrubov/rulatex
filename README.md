# rulatex

## [Webpack + babel + node-static](http://ccoenraets.github.io/es6-tutorial-data/babel-webpack/)
Процесс установки/настройки:
- устанавливаем пакеты (вместо http-server используем node-static)
```shell
npm install
```

- подключаем конфиг для webpack *webpack.js.config*

Входные файлы будут подключены в соответствии с матчем по "index*" (поэтому пока используется *index.js*). Итоговый файл *app.js* компилится в директорию */build*. Параметр `devtool` пока хз зачем.
```js
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './module/rulatex',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'rulatex-compiled.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff|woff2|eot|svg|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('rulatex-compiled.css')
  ],
  stats: {
    colors: true
  },
  devtool: 'eval',
  watch: true
};

```
- подключаем зависимости в *package.json*
```json
"scripts": {
  "build": "webpack",
  "start": "static"
}
```

Запуск:
- компиляция: `./compile`
- запуск: `./run`
