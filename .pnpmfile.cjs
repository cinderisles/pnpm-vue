module.exports = {
  hooks: {
    readPackage(pkg, context) {
      // I tried this, it doesnt work
      // if (pkg.name === '@vitejs/plugin-vue2') {
      //   pkg.peerDependencies = {
      //     ...pkg.peerDependencies,
      //     vue: '2.7.16'
      //   }
      //   context.log('vue@^3 => vue@2.7.16 in dependencies of @vitejs/plugin-vue2')
      // }

      return pkg;
    },
  },
  afterAllResolved(lockfile, context) {
    return lockfile;
  },
};
