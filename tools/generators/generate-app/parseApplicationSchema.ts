import {
    Tree,
    readJson,
} from '@nrwl/devkit'

import { Schema } from '@nrwl/angular/src/generators/application/schema'

import { NxJsonConfiguration } from "@nrwl/devkit"

const parseSchema = (tree: Tree, schema: Schema) => {


    const nxConfig = readJson<NxJsonConfiguration>(tree, 'nx.json')
    const schemaDefault = nxConfig.generators['@nrwl/angular:application'] ?? {}

    let { mfeType, port, ...schemaRest } = schema
    mfeType = [
        'remote',
        'host'
    ].includes(schema?.mfeType) ? schema?.mfeType : undefined
    port = port ? Number(port) : undefined


    return {
        ...schemaDefault,
        ...schemaRest,
        mfeType,
        port
    }

}


export { Schema }

export default parseSchema