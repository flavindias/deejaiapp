const { injectBabelPlugin } = require('react-app-rewired');

const rootImport = [
    "root-import",
    {
        rootPathPrefix: "~", //caractere para referenciar o caminho absoluto da aplicacao
        rootPathSuffix: "src" //qual eh a pasta raiz da aplicacao (src)
    }
];

module.exports = config => injectBabelPlugin(rootImport, config);