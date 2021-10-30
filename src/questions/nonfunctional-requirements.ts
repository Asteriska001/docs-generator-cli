module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🏷️   非功能需求(埋点，渠道码等)',
  name: 'nonfunctionalRequirements',
  default: projectInfos.nonfunctionalRequirements
})
