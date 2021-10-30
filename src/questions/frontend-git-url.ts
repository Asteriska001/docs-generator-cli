module.exports = (projectInfos:projectSpace.projectInfos) => ({
  type: 'input',
  message: '🦊  前端仓库地址',
  name: 'frontendGitUrl',
  default: projectInfos.repositoryUrl,
})
