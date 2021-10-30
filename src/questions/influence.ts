module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '💥  影响范围',
  name: 'influence',
  default: projectInfos.influence
})
