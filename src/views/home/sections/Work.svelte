<script>
  import WorkCard from "../components/WorkCard.svelte";
  import NPMCard from "../components/NPMCard.svelte";
  import projects from "../data/work";

  $: contributions = projects.filter(({ type }) => type === "contribution");
  $: games = projects.filter(({ type }) => type === "game");
  $: websites = projects.filter(({ type }) => type === "website");
</script>
<style type="text/scss">
  .work {
    padding-bottom: 1rem;

   &__title {
     text-align:center;
   }
  }
</style>

<section class="work">
  <h1 class="work__title pt-4 pb-0 mb-0">RECENT WORK</h1>
  <div class="skills__projects px-2 px-lg-5">
    <div class="category py-3">
      <h3>Video Games</h3>
      <hr class="my-2">
      {#each games as project}
        <WorkCard 
          image={project.image}
          url={project.url}
          brand={project.brand}
          skills={project.skills}
        />
      {/each}
    </div>
    <div class="category py-3">
      <h3>Websites</h3>
      <hr class="my-2">
      {#each websites as project}
        <WorkCard 
          image={project.image}
          url={project.url}
          brand={project.brand}
          skills={project.skills}
        />
      {/each}
    </div>
  </div>
</section>