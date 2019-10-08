<script>
  import SkillCard from "./SkillCard.svelte";
  import skill from "../data/skills";


  let skillRows = [
    [
      skill.vue,
      skill.react,
      skill.svelte
    ],
    [
      skill.sass,
      skill.bash,
      skill.bootstrap
    ],
    [
      skill.gulp,
      skill.webpack,
      skill.rollup  
    ],
    [
      skill.mssql,
      skill.mysql,
      skill.mongo
    ],
    [
      skill.zesty, 
      skill.babylon,
      skill.three,
    ],
    [
       skill.git, 
      skill.wordpress,
      skill.twig
    ],
    [
      skill.jquery,
      skill.npm,
      skill.aws    
    ],
    [
      skill.html,
      skill.css,
      skill.js    
    ],
    [
      skill.figma,
       skill.photoshop,
      skill.illustrator
    ]
     
  ]
</script>
<style type="text/scss">
  .skills {

   &__title {
     text-align:center;
   }

   &__icons {
     &__row {
       display: flex;
      //  flex-wrap: wrap;
       &--flip-direction {
         flex-direction: row-reverse;
       }
     }
   }
  }
</style>

<section class="skills px-lg-5 px-2">
  <h1 class="skills__title py-4">SKILLS</h1>
  <div class="skills__icons">
    {#each skillRows as rowItem, rowIndex}
      <div class="skills__icons__row {rowIndex % 2 ? 'skills__icons__row--flip-direction' : ''}">
        {#each rowItem as col, colIndex}
            <SkillCard
              image={col.image}
              name={col.name}
              url="{col.url}"
              fadeDelay="{(colIndex + 1) * 100}"
            />
        {/each}
      </div>
    {/each}
  </div>
</section>