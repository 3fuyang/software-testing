// 接收一组参数，返回字符串结果
function triangleJudge(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 ||  a > 200 || b > 200 || c > 200){
        return "数据非法，边长数值越界"
    }
    if (
        a + b > c &&
        a + c > b &&
        b + c > a
    ) {
        if (a === b && a === c){
            return "该三角形的是等边三角形"
        }else if (a === b || a === c || b === c){
            return "该三角形的是等腰三角形"
        }else {
            return "该三角形的是普通三角形"
        }
    } else {
        return "所给三边数据不能构成三角形"
    }
}

// 根据.csv文件的表头字段提取对应的参数，返回参数数组
function getArgs(row) {
    let args = [Number.parseInt(row.Edge1), Number.parseInt(row.Edge2), Number.parseInt(row.Edge3)]
    return args    
}

// 添加别名，进行导出
export { triangleJudge as useSingleTest, getArgs as useGetArgs }