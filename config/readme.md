Umi 在 .umirc.ts 或 config/ 中配置项目和插件，支持 es6。
如果项目的配置不复杂，推荐在 .umirc.ts 中写配置； 
如果项目的配置比较复杂，可以将配置写在 config/config.ts 中，并把配置的一部分拆分出去，比如路由配置可以拆分成单独的 routes.ts
```
// config/routes.ts
export default [
    { exact: true, path: '/', component: 'index' },
];


// config/config.ts
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes: routes,
});
```

推荐两种配置方式二选一，.umirc.ts 优先级更高(即.umirc.ts存在的时候优先采用，config将会不生效)。
