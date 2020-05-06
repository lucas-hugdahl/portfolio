<script>
	import Contact from "./components/Contact.svelte";
	import Nav from "./components/Nav.svelte";
	import NotFound from "./views/404.svelte";
	import AOS from 'aos';
	import router, { curRoute } from './router.js';

	
	import { onMount } from 'svelte';

	// onMount(async () => {
	// 	AOS.init();
	// 	curRoute.set(window.location.pathname);
	// 	if (!history.state) {
	// 		window.history.replaceState({path: window.location.pathname}, '',   window.location.href)
	// 	}
	// });

	function handlerBackNavigation(event) {
		curRoute.set(event.state.path)
	}
</script>

<style type="text/scss">
	@import "./assets/scss/mixins";

	.main-wrapper {
		position: relative;
		box-sizing: border-box;
		
		&__bg {
			min-height: 100vh;
			min-width: 100vw;
			position: fixed;
			z-index: -1;
			top: 0;
			filter: blur(8px);
			-webkit-filter: blur(8px);

			&__image {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url('/images/bg.jpg');
				background-size: cover;
				background-position: top;
				transition: transform .1s ease-out;
			}
		}	

		@include break-up('lg') {
			padding-top: 15%;
			padding-bottom: 15%;
		}
	}
</style>

<svelte:window on:popstate={handlerBackNavigation} />

<main class="main-wrapper vw-100" id="scene">
	<div class="main-wrapper__bg">
		<div class="main-wrapper__bg__image"></div>
	</div>


	<div class="container-main">
		<!-- <Nav curRoute={$curRoute}/> -->
		<!-- ROUTER -->
		<svelte:component this={router[$curRoute] ? router[$curRoute] : NotFound} />
		<!-- ROUTER -->
		<Contact/>
	</div>
</main>
