// Define the system topology here. The topolgy should reference 
// containers defined in definitions/services.js

exports.name = 'demo';
exports.namespace = 'demo';
exports.id = 'f6db696e-88a6-4c47-88bb-dc3cb51b3a83';

exports.topology = {

  development: {
    root: ['server', 'client']
  }
};

// Example
//
// exports.topology = {
//   development: {
//     root: ['web']
//   }
// };
