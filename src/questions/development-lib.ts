module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '📦  开发库',
  name: 'developmentLib',
  default: projectInfos.developmentLib
})
