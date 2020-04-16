const getters = {
    sidebar: state => state.app.sidebar,
    theme: state => state.theme.theme,
    routes: state => state.route.routes,
    routerFlag: state => state.route.routerFlag,
    device: state => state.app.device,
    token: state => state.user.accessToken,
    avatar: state => state.user.avatar,
    userCode: state => state.user.userCode,
    name: state => state.user.name,
    userInfo: state => state.user.userInfo,
    roles: state => state.user.roles,
    dictionaryMap: state => state.dictionary.dictionaryMap,
    dictionaryCatchMap: state => state.dictionary.dictionaryCatchMap,
    fieldLayout: state => state.app.fieldLayout,
    treeNode: state => state.snTree.treeNode,
    snTree: state => state.snTree.snTree,
    snv: state => state.searchEdit.snv,
    snvCopy: state => state.searchEdit.snvCopy,
    activeButtonInfo: state => state.searchEdit.activeButtonInfo,
    activeInfo: state => state.searchEdit.activeInfo,
    cacheList: state => state.cache.cacheList,
    searchValue: state => state.claim.searchValue,
    checkSnv: state => state.claim.checkSnv,
    initClaimSn: state => state.claim.initClaimSn,
    snDataArr: state => state.claim.snDataArr,
    cause: state => state.claim.cause,
    functionCode: state => state.claim.functionCode,
    avtiveSnv: state => state.cache.avtiveSnv,
    reqBlackList: state => state.cache.reqBlackList,
    activeLyout: state => state.cache.activeLyout,
    showInfo: state => state.title.showInfo,
    listData: state => state.claim.listData,
    policyNo: state => state.claim.policyNo
  }
  export default getters
  