const generate = require('./generate')
const infos = require('./project-infos')
const { showEndMessage } = require('./utils')
const askQuestions = require('./ask-questions')

/**
 * @param {Object} args
 */
module.exports = async ({ customTemplatePath, useDefaultAnswers }: any) => {
  const templatePath = await generate.getTemplatePath(customTemplatePath)
  const projectInformations = await infos.getProjectInfos()
  const answersContext = await askQuestions(projectInformations, useDefaultAnswers)
  const docContent = await generate.buildDocContent(answersContext, templatePath)

  await generate.writeDoc(docContent)

  showEndMessage()
}
