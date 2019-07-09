 
<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>ADD NEW PRODUCT</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6" :settings="settings">
      <div class="p-6">
        <!-- NAME -->
        <vs-input label="Name Product" name="name" v-model="name" class="mt-5 w-full"/>

        <!-- CATEGORY -->
        <vs-select v-model="category" label="Category" class="mt-5 w-full">
          <vs-select-item
            :key="item.value"
            :value="item.value"
            :text="item.text"
            v-for="item in category_choices"
          />
        </vs-select>

        <!-- ORDER STATUS -->
        <vs-select v-model="order_status" label="Order Status" class="mt-5 w-full">
          <vs-select-item
            :key="item.value"
            :value="item.value"
            :text="item.text"
            v-for="item in order_status_choices"
          />
        </vs-select>

        <!-- PRICE -->
        <vs-input label="Price  DH" name="price" v-model="price" class="mt-5 w-full"/>

        <!-- IMG -->
        <vs-upload text="Upload Image" class="img-upload" ref="fileUpload"/>

        <!-- auction -->
        <ul class="demo-alignment">
          <li>
            <vs-checkbox v-model="checkBox1" vs-value="BID">Public auction</vs-checkbox>
          </li>
          <li class="op-block">{{ checkBox1==null?&apos;DONT&apos;:checkBox1 }}</li>
        </ul>

        <!-- Quantity -->

        <div class="vx-row mb-6 mt-5 w-full">
          <div class="vx-col sm:w-1/3 w-full">
            <span>Quantity</span>
          </div>
          <vs-input-number class="vx-col" v-model="number0" :step="0.5"/>

          <vs-select v-model="Type" label="Type" class="vx-col w-full">
            <vs-select-item
              :key="item.value"
              :value="item.value"
              :text="item.text"
              v-for="item in Type_unit"
            />
          </vs-select>
        </div>
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6" @click="isSidebarActiveLocal = true">Add Product</vs-button>

      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

  
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      name: "",
      category: "Plastic",
      order_status: "pending",
      price: "",
      Type: "Kg",
      checkBox1: null,
      number0: 1.5,
      category_choices: [
        { text: "bottle", value: "bottle" },
        { text: "Ate", value: "Ate" },
        { text: "Plastic", value: "Plastic" },
        { text: "Wood", value: "Wood" }
      ],
      order_status_choices: [
        { text: "Pending", value: "pending" },
        { text: "Canceled", value: "canceled" },
        { text: "Delivered", value: "delivered" },
        { text: "On Hold", value: "on_hold" }
      ],
      Type_unit: [
        { text: "Kg", value: "Kg" },
        { text: "g", value: "g" },
        { text: "Unite", value: "Unite" },
        { text: "L", value: "L" }
      ],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          this.initValues();
        } else {

          /////////

          this.$emit("closeSidebar");
          this.initValues();
          this.$vs.notify({
            title: "Done",
            text: "success",
            color: "success",
            iconPack: "feather"
          });
        }
      }
    }
  },
  methods: {
    initValues() {
      this.name = "";
      this.category = "Plastic";
      this.Type = "Kg";
      this.order_status = "pending";
      this.price = "0";
      this.$refs.fileUpload.srcs = [];
    }
  },
  components: {
    VuePerfectScrollbar
  }
};
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
