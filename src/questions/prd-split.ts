module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '📚  需求拆分',
  name: 'prdSplit',
  default: projectInfos.prdSplit
})
