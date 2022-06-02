import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AboutPro	from "./components/AboutPro.vue";
import AboutService from "./components/AboutService.vue";
import AboutPreview from "./components/AboutPreview.vue";
import Vuelidate from "vuelidate";

Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
	routes: [
		{
			path: "/about",
			component: AboutPro
		},
		{
			path: "/about/:about",
			component: AboutService,
			props: true
		},
		{
			path: "/about/:about/:preview",
			component: AboutPreview,
			props: true
		},
		{
			path: "/",
			redirect: "/about"
		}
	]
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
