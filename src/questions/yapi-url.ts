module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🐤  YAPI URL',
  name: 'yapiUrl',
  default: projectInfos.yapiUrl,
})
