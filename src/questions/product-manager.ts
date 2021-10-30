module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '🙂  产品经理',
  name: 'productManager',
  default: projectInfos.productManager,
})
