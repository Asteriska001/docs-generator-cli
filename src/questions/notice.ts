module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '⚠️   注意事项',
  name: 'notice',
  default: projectInfos.notice,
})
