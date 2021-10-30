module.exports = (projectInfos:projectSpace.projectInfos) => ({
  type: 'input',
  message: '🧑‍💻   后端',
  name: 'backendEngineer',
  default: projectInfos.backendEngineer,
})
