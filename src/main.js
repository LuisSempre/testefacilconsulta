import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AboutPro	from "./components/AboutPro.vue";
import AboutService from "./components/AboutService.vue";

Vue.use(VueRouter);



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
