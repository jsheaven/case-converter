describe('index', () => {
  it('test all exported functions', async () => {
    const module = await import('../dist/index.esm')
    const exportedModules = Object.keys(module)

    expect(exportedModules).toEqual(
      expect.arrayContaining([
        'convert',
        'convertFromTo',
        'fromCamelCase',
        'toCamelCase',
        'fromKebabCase',
        'toKebabCase',
        'fromPascalCase',
        'toPascalCase',
        'fromSnakeCase',
        'toSnakeCase',
        'fromAny',
        'isAlphaCase',
        'isLowerCase',
        'firstCharacterToLower',
        'firstCharacterToUpper',
      ]),
    )
  })
})
