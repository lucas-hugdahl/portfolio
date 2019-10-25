<script>
	import Header from "./components/Header.svelte";
	import About from "./components/About.svelte";
	import Skills from "./components/Skills.svelte";
	import Work from "./components/Work.svelte";
	import Contact from "./components/Contact.svelte";
	import AOS from 'aos';
	
	import { onMount } from 'svelte';

	onMount(async () => {
		AOS.init();
	});
</script>

<style type="text/scss">
	@import "./assets/scss/mixins";

	.main-wrapper {
		position: relative;
		box-sizing: border-box;
		
		&__bg {
			transform: scale(1.2);
			min-height: 500vh;
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

		&__content {
			background: white;
			box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);
		}

		@include break-up('lg') {
			padding-top: 15%;
			padding-bottom: 15%;
		}
	}
</style>
<main class="main-wrapper vw-100" id="scene">
	<div class="main-wrapper__bg">
		<div class="main-wrapper__bg__image"></div>
	</div>
	<div class="main-wrapper__content container-main bg-white">
		<Header/>
		<About/>
		<Skills/>
		<Work/>
		<Contact/>
	</div>
</main>
