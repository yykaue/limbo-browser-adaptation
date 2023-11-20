/**
 *Created by miaoying <yykaue@qq.com> on 2023/11/20.
 */
const verify = () => {
  if (Array.prototype.flat) {
    return
  }

  // eslint-disable-next-line no-extend-native
  Array.prototype.flat =function (depth = 1) {
    const stack = [{list:this,curDepth:0}]; // 复制当前数组
    const result = [];
    while (stack.length) {
      const next = stack.pop();
      // console.log('list',next.list)
      // console.log('curDepth',next.curDepth)
      // console.log('flag',Array.isArray(next.list)&&next.curDepth <= depth)
      if(Array.isArray(next.list)&&next.curDepth <= depth){
        next.list.forEach(item=>{
          // console.log('item',item)
          stack.push({list:item,curDepth:next.curDepth+1})
        })
      }else{
        result.push(next.list);
      }     
    }
    // 反转结果数组，保证顺序正确
    return result.reverse();
  }
}

export default verify
