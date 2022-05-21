<template>
    <div class="triangle">
        <div class="tri_title">
            <b>三角形问题</b>
        </div>
        <el-divider/>
        <el-col :span="12">
            <div class="tri_content" style="margin-right:200px;">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item prop="a">
                        <span style="color: balck;margin:0px 15px 15px 0px;font-size:20px;"><strong>边长a</strong></span>
                        <el-col :span="18">
                            <el-input v-model="form.a" placeholder="请输入边长a" type="textarea" :rows="2"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="b">
                        <span style="color: balck;margin:0px 15px 15px 0px;font-size:20px;"><strong>边长b</strong></span>
                        <el-col :span="18">
                            <el-input v-model="form.a" placeholder="请输入边长b" type="textarea" :rows="2"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item prop="c">
                        <span style="color: balck;margin:0px 15px 15px 0px;font-size:20px;"><strong>边长c</strong></span>
                        <el-col :span="18">
                            <el-input v-model="form.a" placeholder="请输入边长c" type="textarea" :rows="2"></el-input>
                        </el-col>
                    </el-form-item>
                    <div class="btn">
                        <el-button type="primary" @click="submit"  style="margin:20px 0px 0px 0px" height="30px">提交</el-button>
                    </div>
                </el-form>
            </div>
        </el-col>
        <el-divider direction="vertical"/>
        <el-col :span="26">
            <div style="font-size:20px;margin-bottom:30px;">
                <b>测试样例</b>
            </div>
            <el-cascader
                v-model="value"
                :options="options"
                @change="handleChange"
                placeholder="请选择测试方法"
            />
            <el-button type="primary" style="margin:0px 0px 0px 40px" height="30px">测试</el-button>
            <div style="margin-top:40px;margin-left:50px;">
                <el-table :data="tableData" stripe style="width: 100%" border :header-cell-style="{'text-align':'center'}" :cell-style="{'text-align':'center'}">
                    <el-table-column prop="a" label="a" width="100" />
                    <el-table-column prop="b" label="b" width="100" />
                    <el-table-column prop="c" label="c" width="100"/>
                    <el-table-column prop="result" label="result" width="300" />
                </el-table>
            </div>
        </el-col>
    </div>
</template>

<script>
    export default {
        setup() {
            const options = [
                {
                    value: 'bjz',
                    label: '边界值测试',
                },
                {
                    value: 'djl',
                    label: '等价类测试',
                }
            ]
            const handleChange = (value) => {
                console.log(value)
            }
            return {
                form: {
                    a: '',
                    b: '',
                    c: ''
                },
                options,
                handleChange,
            }
        },
        name: "triangle",
        data() {
            return {
                tableData:[
                {
                    a: '1',
                    b: '4',
                    c: '3',
                    result:'三角形'
                },
                {
                    a: '1',
                    b: '4',
                    c: '3',
                    result:'三角形'
                },
                {
                    a: '1',
                    b: '4',
                    c: '3',
                    result:'三角形'
                },
                {
                    a: '1',
                    b: '4',
                    c: '3',
                    result:'三角形'
                },
                {
                    a: '1',
                    b: '4',
                    c: '3',
                    result:'三角形'
                },
            ]
            };
        }
    }
</script>

<style scoped>
.tri_title{
    font-size: 30px;
    color:black;
    text-align: left;
}
.btn{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 10%;
}
.btn button {
    width: 80px;
    height: 40px;
    font-family: SourceHanSansCN-Regular;
    font-size: 20px;
    font-weight: normal;
    position: relative;
    left: 20%;
}
.el-divider--vertical{
    height: 630px;
    left:750px;
    position:absolute;
}
</style>
