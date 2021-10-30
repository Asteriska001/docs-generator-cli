module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '✨  项目名称',
  name: 'projectName',
  default: projectInfos.name
})
