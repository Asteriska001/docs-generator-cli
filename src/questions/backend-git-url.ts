module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🦊  服务端地址',
  name: 'backendGitUrl',
  default: projectInfos.backendGitUrl
})
