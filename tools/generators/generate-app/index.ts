import {
  Tree,
  readJson,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,


} from '@nrwl/devkit'
import { applicationGenerator } from '@nrwl/angular/generators'

import parseSchema, { Schema } from './parseApplicationSchema'

import { visitNotIgnoredFiles } from '@nrwl/workspace'
import udpateWebpackConfig from './updateWebPackConfigRefModuleFederation'
import addSharedSampleFile from './addSharedSampleFile'


export default async function (tree: Tree, schema: Schema) {

  const schemaUpdated = parseSchema(tree, schema)
  /**
   * criação do aplicativo
   */
  await applicationGenerator(tree, schemaUpdated)
  /**
   * atualizar informação do webpack com o modulo personalizado
   */
  udpateWebpackConfig(tree, schemaUpdated)
  addSharedSampleFile(tree, schemaUpdated)

  await formatFiles(tree);

  return () => {

    installPackagesTask(tree);

  };
}
