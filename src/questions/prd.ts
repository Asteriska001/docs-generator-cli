module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '📘  需求文档',
  name: 'prd',
  default: projectInfos.prd
})
