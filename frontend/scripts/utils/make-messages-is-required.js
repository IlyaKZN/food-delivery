const fs = require('fs');
const ts = require('typescript');

function makeMessagesIsRequiredForFile(pathToFile) {
  const sourceCode = fs.readFileSync(pathToFile, 'utf-8');
  const sourceFile = ts.createSourceFile(pathToFile, sourceCode, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  const removeWrongUndefinedKeywordsTransformer = (context) => {
    const visit = (node) => {
      if (node.kind === ts.SyntaxKind.PropertySignature && !node.questionToken && node.type.types) {
        node.type.types = node.type.types.filter((type) => type.kind !== ts.SyntaxKind.UndefinedKeyword);
      }

      node = ts.visitEachChild(node, visit, context);

      return node;
    };

    return node => ts.visitNode(node, visit);
  };

  const result = ts.transform(sourceFile, [removeWrongUndefinedKeywordsTransformer]);

  fs.writeFileSync(
    pathToFile,
    `// @ts-nocheck\n ${printer.printFile(result.transformed[0])}`,
  );
}

function makeMessagesIsRequired(pathToDir) {
  fs.readdir(pathToDir, (err, files) => {
    files.forEach(file => {
      makeMessagesIsRequiredForFile(`${pathToDir}/${file}`);
    });
  });
}

module.exports = makeMessagesIsRequired;