import ora = require('ora')
const parse = require('parse-github-url')
const { getPackageJson, getProjectName } = require('./utils')
const isObject = (val: Object) => val !== null && typeof val === 'object'
const isString = (val: string) => val !== '' && typeof val === 'string'

/**
 * Clean repository url by removing '.git' and 'git+'
 *
 * @param {string} reposUrl
 */
const getReposUrlFromPackageJson = async (pkg: {
  repository: any
  homepage: any
  bugs: { url: any }
}) => {
  if (!isObject(pkg)) {
    return null
  }

  let url = pkg.repository || pkg.homepage || (pkg.bugs && pkg.bugs.url)
  if (isObject(url)) {
    url = url.url
  }

  if (!isString(url)) {
    return null
  }

  if (/github\.com/.test(url) && /\/issues$/.test(url)) {
    return url.replace(/\/issues$/, '')
  }

  const parsed = parse(url)
  return `http://10.1.249.43/${parsed.repository}`
}

/**
 * Get project informations from git and package.json
 */
const getProjectInfos = async () => {
  const spinner = ora('收集项目信息中').start()
  const packageJson = await getPackageJson()
  const name = getProjectName(packageJson)
  const repositoryUrl = await getReposUrlFromPackageJson(packageJson)
  spinner.succeed('🦄 项目基本信息')

  return {
    name,
    repositoryUrl
  }
}

module.exports = {
  getProjectInfos
}
