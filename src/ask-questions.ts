/**
 * 询问用户问题并根据返回内容生成文档
 * @param {Object} projectInfos
 * @param {Boolean} useDefaultAnswers
 */

const inquirer = require('inquirer')
const { flatMap } = require('lodash')
const questionsBuilders = require('./questions')
const utils = require('./utils')

module.exports = async (projectInfos: projectSpace.projectInfos, useDefaultAnswers: any) => {
  const questions = flatMap(
    Object.values(questionsBuilders),
    (questionBuilder: (arg0: projectSpace.projectInfos) => any) => questionBuilder(projectInfos)
  )

  const answersContext = useDefaultAnswers
    ? await utils.getDefaultAnswers(questions)
    : await inquirer.prompt(questions)

  return {
    repositoryUrl: projectInfos.repositoryUrl,
    ...answersContext,
  }
}
