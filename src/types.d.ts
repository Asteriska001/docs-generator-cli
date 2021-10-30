/**
 * @name   projectSpace(项目基础信息)
 */

declare namespace projectSpace {
  interface projectInfos {
    backendEngineer?: string
    backendGitUrl?: string
    backendProjectDoc?: string
    buildTarget?: string

    designer?: string
    developmentLib?: string

    frontendEngineer?: string
    repositoryUrl?: string

    influence?: string

    mainProcess?: string
    miniappPath?: string

    nonfunctionalRequirements?: string
    notice?: string

    prd?: string
    prdSplit?: string
    productManager?: string

    resourceNeeds?: string

    name?: string
    swagger?: string

    terminalEquipment?: string
    tester?: string
    thirdPartyTeam?: string

    webUrl?: string
    yapiUrl?: string
  }
}

declare namespace packageSpace {
  interface packageJson {
    name?: string
  }
}
