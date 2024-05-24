# Tamagui + Solito + Next + Expo Monorepo

## 🔦 About

This monorepo is a starter for an Expo + Next.js + Tamagui + Solito app.

## 👏 Special Thanks

- [Nate Birdman](https://twitter.com/natebirdman) - Creator of Tamagui
- [Fernando Rojo](https://twitter.com/fernandotherojo) - Creator of Solito

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router

## 🗂 Folder layout

The main apps are:

- `expo` (native)
- `next` (web)

- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

> [!TIP]
> Switching from `app` to `pages` router:
>
> - delete `app` folder and rename `pages-demo` to `pages`
> - search for `app router` and `pages router` keywords and follow the instructions

## 🏁 Start the app

- Install dependencies: `bun i`

- Next.js local dev: `bun web`

- Expo local dev: `bun native`

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

See `packages/ui` named `@my/ui` for how this works.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
bun add date-fns
cd ../..
bun i
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/expo
bun add react-native-reanimated
cd ..
bun i
```

## Update new dependencies

### Pure JS dependencies

```sh
bun upgrade-interactive
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.
