# Monorepo Setup
`yarn init`
`yarn lerna init`

### Create a package
`lerna create packagename`

### Installing a scoped package
`lerna add packagename --scope package`

### Installing a dev dependency
`yarn add packagename -D -W`

### Removing a dependency
`yarn workspace some-package remove some-dep`

### Publishing to GitHub
#### Generating a GitHub Personal Access Token:
1. First, create a GitHub personal access token to publish and read packages:
2. Go to https://github.com/settings/profile, Click on developer settings
3. Click on personal access token
4. Select write & read packages, which should also mark the repo automatically
5. Add a note so that you remember what it’s about and click on generate the token.

`lerna publish --registry=https://npm.pkg.github.com/`
