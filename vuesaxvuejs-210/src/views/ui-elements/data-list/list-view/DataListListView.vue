
<template>
  <div id="data-list-list-view" class="data-list-container">

    <add-new-data-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="addNewDataSidebar = false" />

    <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search :data="users">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mr-4 mb-4">

            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32">
              <span class="mr-2">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>

              <vs-dropdown-item>
                <span>Delete</span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span>Archive</span>
              </vs-dropdown-item>
              
              
            </vs-dropdown-menu>
          </vs-dropdown>

          
        </div>

        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ users.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : users.length }} of {{ users.length }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
            <vs-dropdown-menu>

            <vs-dropdown-item @click="itemsPerPage=4">
              <span>4</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <template slot="thead">
         <vs-th sort-key="name">Name</vs-th>
        <vs-th sort-key="cin">CIN</vs-th>
        <vs-th sort-key="email">Email</vs-th>
       <vs-th sort-key="phone">Phone</vs-th>
        <vs-th sort-key="bayer">Type</vs-th>
         <vs-th sort-key="price">Adresse</vs-th>
      </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

           
              <vs-td>
                <p class="product-name font-medium">{{ tr.name }}</p>
              </vs-td>

              <vs-td>
                <p class="product-category">{{tr.cin}}</p>
              </vs-td>

              <vs-td>
                <p class="product-category">{{ tr.email }}</p>
              </vs-td>

              <vs-td>
                <p class="product-category">+212 {{ tr.phone }}</p>
              </vs-td>

              <vs-td>
                <vs-chip  :color="getPopularityColor(tr)" 
                class="shadow-md" >
               {{ getnamebuyer(tr) }}
                </vs-chip>
              </vs-td>

                

              <vs-td>
                <p class="product-price">{{ tr.pos }}</p>
              </vs-td>

            </vs-tr>
          </tbody>
        </template>
    </vs-table>
  </div>
</template>

<script>
import AddNewDataSidebar from '../AddNewDataSidebar.vue';

export default {
  components: {
    AddNewDataSidebar
  },
  data() {
    return {
      selected: [],
      users: [],
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
  },
  methods: {
     getnamebuyer(status) {  
      if(status.seller == true) return "seller"
      else if(status.bayer == true) return "buyer"
      return "primary"
    },
    getOrderStatusColor(status) {
      if(status == 'on hold') return "warning"
      if(status == 'delivered') return "success"
      if(status == 'canceled') return "danger"
      return "primary"
    },
    getPopularityColor(num) {
      if(num.seller == true) return "success"
      else if(num.bayer == true) return "danger"
      return "primary"
    } 
  },
  created() {
    const thisIns = this;
    this.$http.get('https://recyclers.herokuapp.com/api/admin/users')
      .then(function (response) {
        thisIns.users =  response.data
      })
      .catch(function (error) {
        thisIns.$vs.notify({
          title:'Error',
          text: error,
          color:'danger',
          iconPack: 'feather',
          icon:'icon-alert-circle'})
      });
  },
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss">
#data-list-list-view {
  .vs-con-table {

    .vs-table--header {
      display: flex;
      flex-wrap: wrap-reverse;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
