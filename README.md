```bash
 npm install -g newfile-cli

 newfile node-graphql-demo/ then cd
```

babel让node使用import语法配置流程

```bash
yarn add @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime @babel/runtime nodemon -D

```
创建.babelrc
```json
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-transform-runtime"]
}
```

创建项目安装依赖

```bash
yarn init -y

yarn add koa koa-router graphql graphql-tools nanoid

yarn add koa-graphql

```

