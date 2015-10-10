// Place service container definitions here.

exports.root = {
  type: 'blank-container'
};


exports.server = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/orxan07/server.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 8000:8080 -d',
      process: 'src/server.js'
    }
  }
};
exports.client = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'https://github.com/orxan07/client.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 1337:80 -d',
      process: 'src/server.js'
    }
  }
};
exports.mongo = {
  type: 'docker',
  specific: {
    name: 'mongo',
    execute: {
      args: '-d -p 27017:27017'
    }
  }
};


// Example
//
// exports.web = {
//   type: 'docker',
//     specific: {
//       repositoryUrl: 'git@github.com:nearform/nscaledemoweb.git',
//       execute: {
//         // docker run <ARGS> image <EXEC>
//         args: '-p 8000:8000 -d',
//         exec: ''
//       }
//     }
// };
