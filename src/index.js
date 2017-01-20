const DEFINE = 'define';

export default function (babel) {
  const {types: t} = babel;

  return {
    visitor: {
      CallExpression(path, state) {
        if (isAnonymousDefineCall(path.node)) {
          const moduleName = state.file.getModuleName();

          if(typeof moduleName != 'string' || !moduleName.length) {
            state.file.log.error('Cannot get valid module name from `getModulename()`. Check your Babel options https://babeljs.io/docs/usage/api/#options. Perhaps you need to set `moduleIds` to true.')
            return;
          }

          path.node.arguments.unshift(t.stringLiteral(moduleName));
        }
      }
    }
  };

  function isAnonymousDefineCall(node) {
    if (node.callee.name != DEFINE) {
      return false;
    }

    if (!node.arguments.length) {
      return false;
    }

    const firstArg = node.arguments[0];
    return !t.isStringLiteral(firstArg);
  }
}
