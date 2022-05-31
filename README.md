## Issue

Whenever we try to run the server with `npm run dev`, it throws this error-

```
[worker reload] [worker init] Named export 'hashSync' not found. The requested module 'file:///Users/siam/Desktop/nuxt-reproduction/node_modules/bcryptjs/index.js' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'file:///Users/siam/Desktop/nuxt-reproduction/node_modules/bcryptjs/index.js';
const { hashSync } = pkg;


  import { hashSync } from 'node_modules/bcryptjs/index.js';
  ^^^^^^^^
  SyntaxError: Named export 'hashSync' not found. The requested module 'node_modules/bcryptjs/index.js' is a CommonJS module, which may not support all module.exports as named exports.
  CommonJS modules can always be imported via the default export, for example using:

  import pkg from 'node_modules/bcryptjs/index.js';
  const { hashSync } = pkg;

  at ModuleJob._instantiate (node:internal/modules/esm/module_job:128:21)
  at async ModuleJob.run (node:internal/modules/esm/module_job:194:5)
  at async Promise.all (index 0)
  at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
  at async loadESM (node:internal/process/esm_loader:88:5)
  at async handleMainPromise (node:internal/modules/run_main:61:12)
```
