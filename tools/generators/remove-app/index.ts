import { exec, execSync } from 'child_process'

import {
   Tree,
   installPackagesTask,
removeProjectConfiguration,
updateWorkspaceConfiguration,
readWorkspaceConfiguration

  } from '@nrwl/devkit';

  import { removeGenerator }  from '@nrwl/workspace';

export default async function (tree: Tree, schema: any) {
  

//   removeProjectConfiguration(tree,schema.name)
//   const workspaceConfig = readWorkspaceConfiguration(tree)
// updateWorkspaceConfiguration(tree, workspaceConfig)
  
//   console.log(workspaceConfig)

// console.log(schema)

//  const command = execSync(`npx nx g @nrwl/angular:rm ${schema.name} -d`)

//  console.log(command.toString())

await removeGenerator(tree, {
  projectName: (schema.name as string),
  forceRemove: true,
  skipFormat:false
})

  return () => {
    installPackagesTask(tree)
  };
}
