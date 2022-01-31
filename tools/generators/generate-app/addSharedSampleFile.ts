import { Tree, generateFiles, joinPathFragments, readProjectConfiguration } from "@nrwl/devkit";
import { Schema } from "./parseApplicationSchema";
import { Substitutions, fileModule, fileIndex } from "./addSharedSampleFileTemplates";


const addFilesShared = (tree: Tree, schema: Schema) => {
    const projectConfig = readProjectConfiguration(tree, schema.name)

    const prefixName = 'sample'
    const fileName = `${prefixName}.module.ts`
    const sharedPath = `${projectConfig.sourceRoot}/app/shared/${prefixName}`

    const substitutions:Substitutions = {
        prefixName,
        fileName,
        moduleItemName: 'ExampleModule',
        moduleName: '@namespace/module'
    }

    tree.write(
        `${sharedPath}/${fileName}`,
        fileModule(substitutions)
    )
    tree.write(
        `${sharedPath}/index.ts`,
        fileIndex(substitutions)
    )
    
    
    


}

export default addFilesShared;
