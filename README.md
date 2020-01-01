# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Add Installing Angular

1. node;
2. npm ;
3. npm install @angular/cli -g [@angular/cli@8.3.20]
4. ng new angular-app [select router, css as default];
5. npm run start or ng serve;
6. install Prettier for vs code;
7. install git Angular Essentials
8. Angular constructor
src
    - main.ts  /应用的入口文件
      -- AppModule /应用的root模块

9. Input: 父组件传递数据给子组件
10. Output: 父组件监听在子组件上事件
11. Routes: app-routing.module.ts
12. 带参数的路由
13. routerLink
14. 获取路由参数的值(paramMap)
15. services: 应用的操作方法
16. ng generate module modules/post/post-routing --module post --flat /在post模块下面生成post-routing路由放在module post下面
17. ng generate module modules/demo --routing --module app /生成demo模块以及对应的路由模块 放在app下面

