module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🏠  小程序路径',
  name: 'miniappPath',
  default: projectInfos.miniappPath
})
