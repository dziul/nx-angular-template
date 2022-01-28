


import {
  Tree,
  formatFiles,
  installPackagesTask,
  addDependenciesToPackageJson,
  removeDependenciesFromPackageJson,
  visitNotIgnoredFiles,
  readProjectConfiguration
} from '@nrwl/devkit';
import { applicationGenerator, upgradeModuleGenerator } from '@nrwl/angular/generators';
import { E2eTestRunner, UnitTestRunner,  } from '@nrwl/angular/src/utils/test-runners';
import { Linter } from '@nrwl/linter';


import * as ts from 'typescript'

export default async function (tree: Tree, schema: any) {

  //criar aplicativo angular
  await applicationGenerator(tree, {
    name: schema.name,
    e2eTestRunner: E2eTestRunner.None,
    linter: Linter.EsLint,
    style: 'scss',
    routing: true,
    unitTestRunner: UnitTestRunner.Jest
  });

const dirRoot =  readProjectConfiguration(tree, schema.name).root


  visitNotIgnoredFiles(tree, dirRoot, (filePath)=>{

    // if(filePath.includes('nx-welcome.component.ts')){

    //   tree.delete(filePath)

    // }
    if(filePath.includes('app.module.ts')){

      const moduleSource = tree.read(filePath, 'utf-8')


      const sourceFile  = ts.createSourceFile(filePath, moduleSource.toString(), ts.ScriptTarget.Latest, true)

      console.log(sourceFile.statements)

    }

  })


  // await formatFiles(tree);

  // addDependenciesToPackageJson(tree, { uuid: '8' }, {})// ==> interessante
  // removeDependenciesFromPackageJson(tree, ['uuid'],[])// ==> interessante para remover
  // console.log(tree.read('package.json').toString())

  return () => {
    installPackagesTask(tree);
  };
}
