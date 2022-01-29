import { 
  Tree,
  readJson,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration
 } from '@nrwl/devkit'
import { applicationGenerator } from'@nrwl/angular/generators'

import { getProjectConfig,  } from '@nrwl/workspace';




export default async function (tree: Tree, schema: any) {


  // const projectConfig  = readProjectConfiguration(tree, schema.name)


  const nxConfig = readJson<Record<string,any>>(tree, 'nx.json')
  const schemaDefault = nxConfig?.generators['@nrwl/angular:application'] ?? {}

  
console.log({
  ...schemaDefault,
  ...schema,
  port: Number(schema.port)
})
  return

  /**
   * criação do aplicativo
   */
  await applicationGenerator(tree, {
    ...schemaDefault,
    ...schema,
    port: Number(schema.port)
  })

  
  await formatFiles(tree);

  return () => {

    installPackagesTask(tree);

  };
}
