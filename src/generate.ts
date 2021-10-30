const ejs = require('ejs')
import ora = require('ora')
const { promisify } = require('util')
const { getYear } = require('date-fns')
const fs = require('fs')
const { unescape } = require('lodash')

const DOC_PATH = 'DOC.md'

/**
 * Create doc file from the given docContent
 *
 * @param {string} docContent
 */
const writeDoc = async (docContent: string) => {
  const spinner = ora('文档创建中...').start()

  try {
    await promisify(fs.writeFile)(DOC_PATH, unescape(docContent))
    spinner.succeed('文档创建成功！')
  } catch (err) {
    spinner.fail('文档创建失败')
    throw err
  }
}

/**
 * Get DOC template content from the given templatePath
 *
 * @param {string} templatePath
 */
const getDOCTemplate = async (templatePath: string) => {
  const spinner = ora('加载文档模板').start()

  try {
    const template = await promisify(fs.readFile)(templatePath, 'utf8')
    spinner.succeed('文档模板加载成功')
    return template
  } catch (err) {
    spinner.fail('文档模板加载失败')
    throw err
  }
}

/**
 * Build DOC content with the given context and templatePath
 *
 * @param {Object} context
 * @param {string} templatePath
 */
const buildDocContent = async (context: object, templatePath: string) => {
  const currentYear = getYear(new Date())
  const template = await getDOCTemplate(templatePath)

  return ejs.render(template, {
    filename: templatePath,
    currentYear,
    ...context
  })
}

module.exports = {
  writeDoc,
  buildDocContent,
  DOC_PATH
}
