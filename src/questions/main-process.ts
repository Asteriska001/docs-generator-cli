module.exports = (projectInfos:projectSpace.projectInfos) => ({
  type: 'input',
  message: '🔖  主流程',
  name: 'mainProcess',
  default: projectInfos.mainProcess,
})
