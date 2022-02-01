import * as path  from 'path'

import {
  Tree,
  readJson,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  generateFiles,  
  visitNotIgnoredFiles

} from '@nrwl/devkit'
import { applicationGenerator } from '@nrwl/angular/generators'

import parseSchema, { Schema } from './parseApplicationSchema'


import udpateWebpackConfig from './updateWebPackConfigRefModuleFederation'


export default async function (tree: Tree, schema: Schema) {

  const schemaUpdated = parseSchema(tree, schema)
  /**
   * criação do aplicativo
   */
  await applicationGenerator(tree, schemaUpdated)
  /**
   * atualizar informação do webpack com o modulo personalizado
   */
  // udpateWebpackConfig(tree, schemaUpdated)
  // addSharedSampleFile(tree, schemaUpdated)
  const projectConfig = readProjectConfiguration(tree, schemaUpdated.name)

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    projectConfig.sourceRoot,
    schemaUpdated
  )
  
  visitNotIgnoredFiles(tree, projectConfig.root, (path)=>{

  if(path.includes('nx-welcome.component')) {
    tree.delete(path)
  }

  if(path.includes('styles.scss')){
    tree.delete(path)
  }

})
  // await formatFiles(tree);

  return () => {

    installPackagesTask(tree);

  };
}
