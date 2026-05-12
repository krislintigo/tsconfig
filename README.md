# @krislintigo/tsconfig

Shared TypeScript configuration presets.

## Base

```json
{
  "extends": "@krislintigo/tsconfig/base.json"
}
```

## Node with `nodenext`

```json
{
  "extends": "@krislintigo/tsconfig/node.json"
}
```

## Nuxt

```ts
import nuxtTsConfig from "@krislintigo/tsconfig/nuxt";

export default defineNuxtConfig({
  typescript: {
    tsConfig: nuxtTsConfig
  }
});
```
