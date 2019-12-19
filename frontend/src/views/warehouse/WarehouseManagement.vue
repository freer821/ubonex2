<template>
  <div class="app-container">
    <el-divider>批次号管理</el-divider>
    <el-table
      :data="pici_data"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      height="250"
    >
      <el-table-column prop="pici_code" label="批次号"></el-table-column>
      <el-table-column prop="parcel_num" label="内含包裹数"></el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="300"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            编辑
          </el-button>
          <el-button
            size="small"
            type="warning"
            @click="handleModifyStatus(row, 'draft')"
          >
            转换主单号
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleModifyStatus(row, 'deleted')"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="filter-container" style="padding-top: 20px">
      <el-divider>主单号管理</el-divider>
      <!--el-input
        placeholder="Title"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        Search
      </el-button>
      <el-select
        placeholder="Imp"
        clearable
        style="width: 150px; margin-left: 180px"
        class="filter-item"
      >
        <el-option
          v-for="item in importanceOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >
        Export
      </el-button-->
    </div>

    <el-table
      :data="main_plate_data"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      height="250"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="main_plate_code" label="主单号"></el-table-column>
      <el-table-column prop="parcel_num" label="内含包裹数"></el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="300"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            编辑
          </el-button>
          <el-button
            v-if="row.status != 'deleted'"
            size="mini"
            type="danger"
            @click="handleModifyStatus(row, 'deleted')"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { get_pici_info, get_main_plate_info } from "@/api/warehouse";

import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

export default {
  name: "MainPlateManagement",
  components: { Pagination },
  data() {
    return {
      pici_data: [],
      main_plate_data: [],
      importanceOptions: []
    };
  },
  created() {
    this.fetchPiciParcels();
    this.fetchMainPlateParcels();
  },
  methods: {
    fetchPiciParcels() {
      let request_data = {...this.$store.getters.login_info};
      request_data.action='get_pici_info';
      get_pici_info(request_data)
        .then(response => {
          this.pici_data = response.msg;
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchMainPlateParcels() {
      let request_data = {...this.$store.getters.login_info};
      request_data.action='get_main_plate_info';

      get_main_plate_info(request_data)
        .then(response => {
          this.main_plate_data = response.msg;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
