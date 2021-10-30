module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🐍  Swagger地址',
  name: 'swagger',
  default: projectInfos.swagger,
})
