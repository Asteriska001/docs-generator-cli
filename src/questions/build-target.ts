module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🎯  构建目标',
  name: 'buildTarget',
  default: projectInfos.buildTarget,
})
