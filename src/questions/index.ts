/* eslint-disable global-require */
module.exports = {
  askProjectName: require('./project-name'),

  askProductManager: require('./product-manager'),
  askDesigner: require('./designer'),
  askFrontendEngineer: require('./frontend-engineer'),
  askBackendEngineer: require('./backend-engineer'),
  askTester: require('./tester'),
  askThirdPartyTeam: require('./third-party-team'),

  askDevelopmentLib: require('./development-lib'),
  askBuildTarget: require('./build-target'),

  askTerminalEquipment: require('./terminal-equipment'),
  askMiniappPath: require('./miniapp-path'),
  askWebUrl: require('./web-url'),

  askPrd: require('./prd'),
  askFrontendGitUrl: require('./frontend-git-url'),
  askYapiUrl: require('./yapi-url'),
  askSwagger: require('./swagger'),
  askBackendGitUrl: require('./backend-git-url'),
  askBackendProjectDoc: require('./backend-project-doc'),

  askMainProcess: require('./main-process'),
}
