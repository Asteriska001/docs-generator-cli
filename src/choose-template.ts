import inquirer = require('inquirer')

module.exports = async () => {

  const question = {
    type: 'list',
    message: '🐳  请根据需求类别确认模板 ',
    name: 'template',
    choices: [
      {
        name: '迭代需求',
        value: 'iteration',
      },
      {
        name: '新需求 ',
        value: 'new',
      },
    ],
  }

  /**
   * 用户选择模板
   */
  const {template} = await inquirer.prompt([question])
  return template
}
