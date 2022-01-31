import { Tree, readProjectConfiguration } from '@nrwl/devkit'

import { Schema } from './parseApplicationSchema'

/**
 * Nome do modulo
 */
const pluginName = '@namespace/module'

const pluginShared = (pluginName: string) => `'${pluginName}': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
    includeSecondaries: true,
  },`

const udpateWebpackConfig = async (tree: Tree, schema: Schema) => {

    if (!schema.mfe) return

    const projectConfig = readProjectConfiguration(tree, schema.name)

    const webpackFilePath = `${projectConfig.root}/webpack.config.js`

    const content = tree.read(webpackFilePath, 'utf-8')

    /**
     * add o plugin shared
     */
    const contentUpdated = content.split('\n').map((line: string) => {

        if (line.includes('...sharedMappings.getDescriptors()')) {
            return pluginShared(pluginName) + line
        }
        return line
    }).join('\n')

    tree.write(webpackFilePath, contentUpdated)

}



export default udpateWebpackConfig