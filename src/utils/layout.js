import defConst from './DEFCONST.js'
export default{
    contorlTypeName: new Map([
       [defConst.TYPE_NAME_INPUT,'Input'],
       [defConst.TYPE_NAME_SELECT,'Select'],
       [defConst.TYPE_NAME_RADIO,'Radio'],
    ]),
    getTypeName:function(type){
        return this.contorlTypeName.get(type)
    }

}