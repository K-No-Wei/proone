import service from "@/service";
import qs from "qs";

// 登入接口
export function login(data){
    return service({
        method: 'post',
        url: '/login',
        data
    })
}

// 学生列表查询
export function students(params){
    return service({
        method: 'get',
        url: '/students',
        params
    })
}

// 学生列表删除
export function studentDel(id){
    return service({
        method: 'delete',
        url: `/students/${id}`
    })
}

// 信息列表新增
export function info(data){
    data = qs.stringify(data)
    return service({
        method: 'post',
        url: '/info',
        data
    })
}

// 信息列表查询
export function getInfo(){
    return service({
        method: 'get',
        url: '/info',
    })
}
