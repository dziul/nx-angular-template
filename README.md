## Anotação

[How to setup a Micro Frontend with Angular and Nx](https://nx.dev/guides/setup-mfe-with-angular)


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
  
  > `npx nx workspace-generator [generator_name] -d`
