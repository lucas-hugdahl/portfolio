<script>
  export let image;
  export let brand;
  export let url;
  export let skills;
</script>
<style type="text/scss">
  @import "../assets/scss/mixins";

  .work-card {
    text-decoration: none;
    height: 400px;
    display: inline-block;
    width: 100%;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.259);
    transition: all .2s ease-in-out;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
    }
    &:active {
      color: inherit;
    }

    &.aos-animate {
      overflow:hidden;
    }

    &__image {
      background-size: cover;
      background-position: center;
      flex-grow: 1;
      position: relative;
    }

    &__details {
      height: 7rem;
      position: relative;

      &__image {
        max-height: 100%;
        width: 100px;
      }

      &__name {
        color: rgba(0, 0, 0, 0.767);
        max-height: 100%;
      }
    }

    @include break-up('lg') {
      &__details {
        height: 3.5rem;
      }
    }
  }
</style>

<a class="work-card mb-6" target="_blank" href={url} data-aos="fade-up" data-aos-anchor-placement="top-center">
  <div class="work-card__image" style="{`background-image: url('${image}')`}">
  </div>
  <div class="work-card__details d-flex align-items-center w-100 h-50">
    <div class="row h-100 px-1">
      <div class="col-12 col-lg-6 h-50 h-lg-100 d-flex align-items-center">
        {#if brand.includes('images/logos/')}
          <img class="work-card__details__image" alt={brand} src={brand}/>
        {:else}
          <h3 class="work-card__details__name w-100 m-0">{brand}</h3>
        {/if}
      </div>
      <div class="col-12 col-lg-6 h-50 h-lg-100 d-flex justify-content-lg-end align-items-center h-lg-100">
        {#each skills as skill, skillIndex}
          <img class="h-50 mr-1 mr-lg-0 ml-lg-1" src={skill.image} alt={skill.name} data-aos="fade-up" data-aos-delay="{skillIndex * 100}"/>
        {/each}
      </div>
    </div>
  </div>
</a>
