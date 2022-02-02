## Anotação

[How to setup a Micro Frontend with Angular and Nx](https://nx.dev/guides/setup-mfe-with-angular)

> [module federation](https://webpack.js.org/concepts/module-federation/)


1. `npx create-nx-workspace [project_name] --preset=empty --nx-cloud=false`
   
   > cria um espaço de trabalho limpo, sem qualquer plugin e envolvimento com o nx cloud

1. `cd [project_-_name]`
1. `npm install --save-dev @nrwl/angular`
1. `npx nx generate @nrwl/angular:app [application_name] --e2eTestRunner=none --routing --style=scss`

   > cria um aplicativo, sem teste e2e, com configuração de rota e scss
   
   ou criação de mfe

   `npx nx g @nrwl/angular:app [app_name] --mfe --mfeType=[remote | host] --port=[number] --routing  --e2eTestRunner=none --style=scss`
   
   > uma vez executado qualquer comando de criação de aplicativo, será adicionado algumas flag default em ./nx.json

## Comandos

- [Nx CLI](https://nx.dev/using-nx/nx-cli)
- [@nrwl/angular:application](https://nx.dev/angular/application#nrwlangularapplication)
- [@nrwl/angular:library](https://nx.dev/angular/library#nrwlangularlibrary)
- [@nrwl/storybook](https://nx.dev/storybook/overview-angular)
- [Workspace Generators](https://nx.dev/generators/workspace-generators)
  
  - [Generator options](https://nx.dev/generators/generator-options)
    
    - [adding-dynamic-prompts](https://nx.dev/generators/generator-options#adding-dynamic-prompts)
- [understanding-json-schema / conditionals](https://json-schema.org/understanding-json-schema/reference/conditionals.html#implication)

  comando para teste:

  > `npx nx workspace-generator [generator_name] [name] -d`


Todas as flags de `@nrwl/angular:app`: 

./node_modules/@nrwl/angular/src/generators/application/schema.d.ts



exemplo de config do schema, para `seletor-html`

```json
{
   "prefix": {
      "type": "string",
      "format": "html-selector",
      "description": "The prefix to apply to generated selectors.",
      "alias": "p"
    }
}
```

## Criação de lib

- [Doc](https://nx.dev/angular/library)
- [buildable-and-publishable-libraries](https://nx.dev/structure/buildable-and-publishable-libraries)
- [nx-libs-with-assets](https://juristr.com/blog/2020/05/nx-libs-with-assets/)

base usada:

`npx nx g @nrwl/angular:library [lib-name] --prefix=[prefix] --importPath=[lib-name-used-import] --publishable --skipModule`

referente em exportar também estilos... referente a config `ng-packagr`:

- [copy-assets](https://github.com/ng-packagr/ng-packagr/blob/master/docs/copy-assets.md)


## Ref

- [Dynamic Module Federation](https://www.npmjs.com/package/@angular-architects/module-federation#dynamic-module-federation)



