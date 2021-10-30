module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🥷   上下游关联',
  name: 'thirdPartyTeam',
  default: projectInfos.thirdPartyTeam,
})
