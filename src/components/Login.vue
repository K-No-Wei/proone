<template>
  <div class="login">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>后台管理系统</span>
        </div>
        <div style="margin: 20px;"></div>

        <el-form  label-width="80px" :model="form" ref="form" :rules="rules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
        <el-form-item type="password" label="密码" prop="password">
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item >
            <el-button type="primary" @click="login('form')">登入</el-button>
        </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
import {nameRule, passRule} from '@/utils/vaildate'
import { setToken } from '@/utils/setToken'
import { login } from '@/api/api'
export default {
    data(){
        return {
            form:{
                username: '',
                password: ''
            },
            rules: {
                username:[{validator: nameRule, trigger: 'blur'}],
                password:[{validator: passRule, trigger: 'blur'}]
            },
        }
    },
    methods:{
        login(form){
            this.$refs[form].validate((valid) =>{
                if(valid){
                    console.log(this.form)
                    // this.service.post('/login', this.form).then(res=>{
                    //     if(res.data.status === 200){
                    //         setToken('username', res.data.username )
                    //         setToken('token', res.data.token)
                    //         this.$message({message: res.data.message, type: 'success'})
                    //         this.$router.push('/home')
                    //     }
                    //     console.log(res)
                    // })
                    login(this.form).then(res=>{
                        if(res.data.status === 200){
                            setToken('username', res.data.username )
                            setToken('token', res.data.token)
                            this.$message({message: res.data.message, type: 'success'})
                            this.$router.push('/home')
                        }
                        console.log(res)
                    })
                }else{
                    console.error(this.form)
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import url('@/assets/css/reset.css');
.login{
    height: 100%;
    width: 100%;
    position: absolute;
    background: url('@/assets/image/login.jpg') center no-repeat;
    
    
    .box-card{
        width: 450px;
        margin: 200px auto;
        color: #fff;
        .el-card_header{
            font-size: 34px;
        }
        .el-button{
            width: 100%;
        }
    }
}
</style>