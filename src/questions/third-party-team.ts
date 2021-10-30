module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🥷   三方团队',
  name: 'thirdPartyTeam',
  default: projectInfos.thirdPartyTeam
})
