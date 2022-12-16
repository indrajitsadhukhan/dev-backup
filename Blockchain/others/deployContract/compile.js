var solc = require('solc');

const input = {
    language: 'Solidity',
    sources: { main: { content: sourceCode } },
    settings: { outputSelection: { '*': { '*': ['abi', 'evm.bytecode'] } } },
  };

function findImports(path) {
  if (path === 'lib.sol')
    return {
      contents:
        'library L { function f() internal returns (uint) { return 7; } }'
    };
  else return { error: 'File not found' };
}

// New syntax (supported from 0.5.12, mandatory from 0.6.0)
var output = JSON.parse(
  solc.compile(JSON.stringify(input), { import: findImports })
);

// `output` here contains the JSON output as specified in the documentation
for (var contractName in output.contracts['test.sol']) {
  console.log(
    contractName +
      ': ' +
      output.contracts['test.sol'][contractName].evm.bytecode.object
  );
}
