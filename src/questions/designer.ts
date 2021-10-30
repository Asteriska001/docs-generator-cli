module.exports = (projectInfos:projectSpace.projectInfos) => ({
  type: 'input',
  message: '👩‍🦱  设计师',
  name: 'designer',
  default: projectInfos.designer,
})
