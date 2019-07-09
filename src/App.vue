 
<template>
	<div id="app">
		<router-view>


        </router-view>
	</div>
</template>
<script type="text/javascript" src="node_modules/auth0-js/build/auth0.js"></script>
<script src="https://cdn.auth0.com/js/auth0/9.10/auth0.min.js"></script>

<script>
import themeConfig from '@/../themeConfig.js'

export default {
    watch: {
        '$store.state.theme'(val) {
            this.toggleClassInBody(val);
        }
    },
    async created() {
      try {
        await this.$auth.renewTokens();
      } catch (e) {
        console.log(e);
      }
    },
    methods: {
        toggleClassInBody(className) {
            if (className == 'dark') {
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                document.body.classList.add('theme-dark');
            } else if (className == 'semi-dark') {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                document.body.classList.add('theme-semi-dark');
            } else {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
            }
        }
    },
    mounted() {
        this.toggleClassInBody(themeConfig.theme)
    },
}
</script>
