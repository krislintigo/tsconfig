export const nuxtTsConfig = {
  compilerOptions: {
    // Type Checking
    strict: true,
    noPropertyAccessFromIndexSignature: true,
    noUncheckedIndexedAccess: true,
    noUnusedLocals: true,
    noUnusedParameters: true,

    // Modules
    resolveJsonModule: true,

    // Emit
    noEmit: true,
    declaration: true,
    declarationMap: true,
    sourceMap: true,

    // Interop Constraints
    erasableSyntaxOnly: true,
    esModuleInterop: true,
    // "isolatedDeclarations": true,
    verbatimModuleSyntax: true,

    // Completeness
    skipLibCheck: true,
  }
}
