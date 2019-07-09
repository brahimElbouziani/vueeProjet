 <template>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>LEET  <a href="https://1337.ma/" target="_blank" rel="nofollow">1337</a></span>
        
       
                        <div class="mt-4">
                            <div>
                                <vs-radio class="mr-4" v-model="theme" vs-value="light">Light</vs-radio>
                                <vs-radio class="mr-4" v-model="theme" vs-value="dark">Dark</vs-radio>
                             </div>
                        </div>

        <span class="md:flex hidden items-center">
            <span>E - recycle </span>
            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2 greenHeart" />
        </span>

    </footer>
</template>

<script>
 import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import themeConfig from '@/../themeConfig.js'

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    } ,
    computed: {
        theme: {
            get() {
                return this.$store.state.theme;
            },
            set(val) {
                this.$store.dispatch('updateTheme', val);
            }
        } 
    },
    methods: {
        updatePrimaryColor(color) {
            this.primaryColor = color;
            this.$vs.theme({ primary: color });
        }
    }

 
}
</script>
