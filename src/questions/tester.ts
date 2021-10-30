module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '👤  测试人员',
  name: 'tester',
  default: projectInfos.tester,
})
