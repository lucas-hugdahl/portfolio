<script>
  import { onMount } from "svelte";
  export let name = "Lambda Middleware Framework";
  export let description = "A simple SPA router that enforces event driven user interfaces.";
  export let pkgName = "lmf";

  let downloads = false;
  let info = false;

  onMount(async () => {
    try {
      const [] = await Promise.all([
        fetch(`https://api.npmjs.org/downloads/point/1884-01-01:2050-05-04/${pkgName}`),
        fetch(`http://registry.npmjs.com/-/v1/search?text=${pkgName}&size=1/`)
      ]) 
    } catch(err) {
      console.log(err);
    }
  });

</script>
<style type="text/scss">
  @import "../../../assets/scss/mixins";
    .card {
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.259);
        display: flex;
        align-items: center;
    }

    .image {
        width: 30%;
        height: 100%
    }

    .description {
        flex-grow: 1;
        height: 100%;
    }
</style>

<a class="card mb-6" target="_blank" href={url}>

</a>
