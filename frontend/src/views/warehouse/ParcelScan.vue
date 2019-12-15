<template>
  <div style="padding:10px">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-form
          label-position="top"
          label-width="100px"
          :model="formLabelAlign"
          class="form-container"
        >
          <el-form-item>
            <span slot="label" class="ps-label">包裹单号</span>
            <input type="text" class="ps_input" />
          </el-form-item>
          <el-form-item>
            <span slot="label" class="ps-label">包裹重量</span>
            <input type="text" class="ps_input" />
          </el-form-item>
          <el-form-item>
            <span slot="label" class="ps-label">系统分配分主单/批次号</span>
            <input type="text" class="ps_input" disabled />
          </el-form-item>
        </el-form>
        <div class="ps_packageinfo_box">
          <div class="ps_packageinfo_titel">
            <h2 style="font-weight: 600; font-size: 26px;">扫描包裹信息</h2>
          </div>
        </div>
        <div class="parcel_info">
          <el-row :gutter="20">
            <el-col :span="6">
              包裹单号：
            </el-col>
            <el-col :span="6">
              UB1321654ex
            </el-col>
            <el-col :span="6">
              收件人：
            </el-col>
            <el-col :span="6">
              隔壁老王
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              批次/主单号：
            </el-col>
            <el-col :span="6">
              UB1321654ex
            </el-col>
            <el-col :span="6">
              收件城市：
            </el-col>
            <el-col :span="6">
              隔壁老王
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              登记重量(KG)：
            </el-col>
            <el-col :span="6">
              UB1321654ex
            </el-col>
            <el-col :span="6">
              收件人身份证：
            </el-col>
            <el-col :span="6">
              隔壁老王
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              实际重量(KG)：
            </el-col>
            <el-col :span="6">
              UB1321654ex
            </el-col>
            <el-col :span="6">
              当前状态：
            </el-col>
            <el-col :span="6">
              隔壁老王
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <el-table style="width: 100%">
          <el-table-column prop="pici_code" label="批次号"> </el-table-column>
          <el-table-column prop="parcel_num" label="包裹数"> </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <div class="ps_big_pici"><span class="color-change">CC001</span></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="ps_status"><span>复重成功</span></div>
      </el-col>
      <el-col :span="6">
        <div class="ps_status2">
          <span style="display:inline-block;height:100%;vertical-align:middle"
            >已扫描包裹数：</span
          >
        </div>
      </el-col>
      <el-col :span="8">
        <div class="ps_status2">
          <span
            style="display:inline-block;height:100%;vertical-align:middle; font-size: 86px"
            >123</span
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ParcelScan",
  data() {
    return {
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  }
};
</script>

<style scoped>
.ps-label {
  font-size: 32px;
  color: #787878;
}
.ps_input {
  width: 100%;
  font-size: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: #5e5e5e;
  padding-left: 10px;
}

.ps_input:focus {
  border-style: solid;
  border-color: #03a9f4;
  box-shadow: 0 0 10px #03a9f4;
}

.ps_packageinfo_titel {
  font-size: 32px;
  color: #f74902;
  text-align: center;
  font-weight: 600;
  position: relative;
}

.ps_packageinfo_box {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
}

.ps_packageinfo_titel h2:before,
.ps_packageinfo_titel h2:after {
  position: absolute;
  background: #f74902;
  content: "";
  height: 1px;
  top: 50%;
  width: 25%;
}

.ps_packageinfo_titel h2:before {
  left: 0px;
}

.ps_packageinfo_titel h2:after {
  right: 0px;
}

.ps_big_pici {
  text-align: center;
  font-size: 120px;
  font-weight: 800;
  padding-top: 100px;
  height: 100%;
}

.ps_status {
  font-size: 82px;
  text-align: center;
  font-weight: 600;
  background-color: rgb(0, 153, 119);
}

.ps_status2 {
  font-size: 48px;
  text-align: left;
  font-weight: 600;
  line-height: 117px;
  height: 117px;
}
.parcel_info {
  margin-bottom: 20px;
  font-size: large;
}
.parcel_info .el-row {
  margin-bottom: 15px;
}
</style>
