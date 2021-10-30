const loadJsonFile = require('load-json-file')
const boxen = require('boxen')
import path = require('path')
const getReposName = require('git-repo-name')

const END_MSG = `Doc.md was successfully generated.
Thanks for using docs-generator-cli!`

const BOXEN_CONFIG = {
  padding: 1,
  margin: { top: 2, bottom: 3 },
  borderColor: 'cyan',
  align: 'center',
  borderStyle: 'double',
}

/**
 * Display end message
 */
const showEndMessage = () => process.stdout.write(boxen(END_MSG, BOXEN_CONFIG))

/**
 * Get package json name property
 *
 * @param {Object} packageJson
 */
const getPackageJsonName = (packageJson: packageSpace.packageJson = {}) => packageJson.name || undefined
/**
 * Get git repository name
 *
 * @param {String} cwd
 */
const getGitRepositoryName = (cwd: string) => {
  try {
    return getReposName.sync({ cwd })
    // eslint-disable-next-line no-empty
  } catch (err) {
    return undefined
  }
}

/**
 * Get project name
 */
const getProjectName = (packageJson: packageSpace.packageJson) => {
  const cwd = process.cwd()
  return getPackageJsonName(packageJson) || getGitRepositoryName(cwd) || path.basename(cwd)
}

/**
 * Get package.json content
 */
const getPackageJson = async () => {
  try {
    return await loadJsonFile('package.json')
  } catch (err) {
    return undefined
  }
}

/**
 * Get the default answer depending on the question type
 *
 * @param {Object} question
 */
const getDefaultAnswer = async (question: any, answersContext: any) => {
  if (question.when && !question.when(answersContext)) return undefined

  switch (question.type) {
    case 'input':
      return typeof question.default === 'function' ? question.default(answersContext) : question.default || ''
    case 'checkbox':
      return question.choices
        .filter((choice: { checked: any }) => choice.checked)
        .map((choice: { value: any }) => choice.value)
    default:
      return undefined
  }
}

/**
 * Get default question's answers
 *
 * @param {Array} questions
 */
const getDefaultAnswers = (questions: Array<any>) =>
  questions.reduce(async (answersContextProm, question) => {
    const answersContext = await answersContextProm

    return {
      ...answersContext,
      [question.name]: await getDefaultAnswer(question, answersContext),
    }
  }, Promise.resolve({}))

module.exports = {
  getPackageJson,
  showEndMessage,
  getProjectName,
  END_MSG,
  BOXEN_CONFIG,
  getDefaultAnswers,
  getDefaultAnswer,
}
