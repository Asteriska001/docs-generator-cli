module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '✅  web访问地址',
  name: 'webUrl',
  default: projectInfos.webUrl,
})
