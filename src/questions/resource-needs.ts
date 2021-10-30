module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🔌  资源需求',
  name: 'resourceNeeds',
  default: projectInfos.resourceNeeds
})
