<script>
  import WorkCard from "./WorkCard.svelte";
  import recentProjects from "../data/work";
  
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
  <h1 class="work__title py-4">RECENT WORK</h1>
  <div class="skills__projects px-2 px-lg-5">
    {#each recentProjects as project}
      <WorkCard 
        image={project.image}
        url={project.url}
        brand={project.brand}
        skills={project.skills}
      />
    {/each}
  </div>
</section>