module.exports = (projectInfos:projectSpace.projectInfos) => ({
  type: 'input',
  message: '📝  服务端技术文档',
  name: 'backendProjectDoc',
  default: projectInfos.backendProjectDoc,
})
