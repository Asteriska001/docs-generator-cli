module.exports = (projectInfos: projectSpace.projectInfos) => ({
  type: 'input',
  message: '📱  终端环境(app、H5、微信小程序、支付宝小程序、抖音小程序、app嵌H5、小程序嵌H5)',
  name: 'terminalEquipment',
  default: projectInfos.terminalEquipment,
})
