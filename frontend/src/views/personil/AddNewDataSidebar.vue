<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>ADD NEW DATA</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

<!-- <form @submit=""> -->
    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6" :settings="settings">

      <div class="p-6">
        <!-- NAME -->
        <vs-input label="Name" v-validate="'required'" name="name" v-model="name" class="mt-5 w-full" />

        <!-- EMAIL -->
        <!-- <vs-input v-validate="'email'" name="email" label-placeholder="Email" v-model="email" class="w-full mb-6" :danger="!validateForm && email != ''" val-icon-danger="clear" :success="validateForm" val-icon-success="done" :color="validateForm ? 'success' : 'danger'" /> -->
        <vs-input v-validate="'email'" label="Email" name="email" v-model="email" class="w-full mb-6" />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
        
        <!-- CATEGORY -->
        <!-- <vs-select v-model="category" label="Category" class="mt-5 w-full">
          <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in category_choices" />
        </vs-select> -->

        <!-- ORDER STATUS -->
        <!-- <vs-select v-model="order_status" label="Order Status" class="mt-5 w-full">
          <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in order_status_choices" />
        </vs-select> -->

        <!-- PRICE -->
        <!-- <vs-input label="Price" name="price" v-model="price" class="mt-5 w-full" /> -->

        <!-- IMG -->
        <!-- <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" /> -->
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6" @click="addData">Add Data</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
<!-- </form> -->
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import axios from 'axios'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      name: '',
      email: '',
      // category: 'audio',
      // order_status: 'pending',
      // price: '',

      // category_choices: [
      //   {text:'Audio',value:'audio'},
      //   {text:'Computers',value:'computers'},
      //   {text:'Fitness',value:'fitness'},
      //   {text:'Appliance',value:'appliance'}
      // ],
      // order_status_choices: [
      //   {text:'Pending',value:'pending'},
      //   {text:'Canceled',value:'canceled'},
      //   {text:'Delivered',value:'delivered'},
      //   {text:'On Hold',value:'on_hold'}
      // ],
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar');
          this.initValues();
        }
      }
    }
  },
  methods: {
    initValues() {
      this.name = '';
      this.email = '';
      // this.category = 'audio';
      // this.order_status = 'pending';
      // this.price = '';
      // this.$refs.fileUpload.srcs = [];
    },
    async addData(){
      const data = {
        name: this.name,
        email: this.email
      }
      console.log(data)
      const response = await axios.post("users", data).catch(function(error) {
          thisIns.$vs.notify({
            title: "Error",
            text: error,
            color: "danger",
            iconPack: "feather",
            icon: "icon-alert-circle"
          });
        });
        if(response){
          this.isSidebarActiveLocal = false
          this.$vs.notify({
            title: "Success",
            text: "Data berhasil tersimpan",
            color: "success",
            iconPack: "feather",
            icon: "icon-check"
          });
          this.$emit('updated')
        }
        console.log(response)
    }
  },
  components: {
    VuePerfectScrollbar,
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    height: calc(100% - 4.3rem);
}
</style>
