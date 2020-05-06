<script>
  import Header from "./sections/Header.svelte";
	import About from "./sections/About.svelte";
	import Skills from "./sections/Skills.svelte";
	import Work from "./sections/Work.svelte";
</script>

<style type="text/scss">
  .home {
    background: white;
    box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);
    -webkit-transform: translateZ(0);
   -moz-transform: translateZ(0);
   -ms-transform: translateZ(0);
   -o-transform: translateZ(0);
   transform: translateZ(0);
  }
</style>

<div class="home container-main bg-white">
  <Header/>
  <About/>
  <Skills/>
  <Work/>
</div>