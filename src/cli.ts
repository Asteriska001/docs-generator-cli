const generate = require('./generate')
const infos = require('./project-infos')
const { showEndMessage } = require('./utils')
const path = require('path')
const askQuestions = require('./ask-questions')

/**
 * 主流程:
 * 1) 获取模板路径
 * 2) 收集项目信息
 * 3) 询问用户问题
 * 4) 生成文档内容
 * 5) 创建doc.md文件
 *
 * @param {Object} args
 */
module.exports = async ({ useDefaultAnswers }: any) => {
  const templatePath = path.resolve(__dirname, '../templates/default.md')
  const projectInformations = await infos.getProjectInfos()
  const answersContext = await askQuestions(
    projectInformations,
    useDefaultAnswers
  )
  const docContent = await generate.buildDocContent(
    answersContext,
    templatePath
  )

  await generate.writeDoc(docContent)

  showEndMessage()
}
