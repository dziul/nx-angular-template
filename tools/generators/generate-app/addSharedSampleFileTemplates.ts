import { capitalize } from './utils'

export interface Substitutions {
    prefixName: string
    fileName: string
    moduleName: string
    moduleItemName: string
}

export const fileIndex = (substitutions:Substitutions) => 
    `export * from './${substitutions.fileName.replace('.ts', '')}';`

export const fileModule = (substitutions:Substitutions) => 

    `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ${substitutions.moduleItemName} } from '${substitutions.moduleName}';

const modules = [
    ${substitutions.moduleItemName},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class ${capitalize(substitutions.prefixName)}Module { }
`