module.exports = {
  hooks: {
    readPackage(pkg, context) {
      if (pkg.name === "@vitejs/plugin-vue2") {
        delete pkg.peerDependencies.vue;
        pkg.peerDependencies = {
          ...pkg.peerDependencies,
          vue2: "npm:vue@2.7.16",
        };
        context.log(
          "changing vue@^3 peer dependency of @vitejs/plugin-vue2 to vue@2.7.16"
        );
      }

      return pkg;
    },
  },
  afterAllResolved(lockfile, context) {
    return lockfile;
  },
};
