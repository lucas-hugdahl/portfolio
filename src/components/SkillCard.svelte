<script>
export let image;
export let name;
export let url;
export let fadeDelay;
</script>

<style type="text/scss">
  @import "../assets/scss/mixins";

  .skill-card {
    margin-bottom: 1.5rem;
    text-decoration: none;
    transition: transform .2s ease-in-out;
    min-width: 33.33%;
    flex-direction: column;


    &__image {
      height: 80px;
      width: 80px;
      object-fit: contain;
      object-position: center;
    }

    &__label {
      text-align: center;
      color: black;
      margin-top: 1rem;
      opacity: 0;
      transition: opacity .3s ease-in-out;
    }

    &:hover {
      .skill-card__label {
        opacity: 1;
      }

      transform: translateY(-10px)
    }

    @include break-up('lg') {
      min-width: 33.33%;
      &__image {
        height: 80px;
        width: px;
        object-fit: contain;
        object-position: center;
      }
    }
  }
</style>

<a class="skill-card d-flex align-items-center" href="{url}" data-aos="fade-up" data-aos-delay="{fadeDelay}" data-depth="0.4">
  <img class="skill-card__image" src="{image}">
  <p class="skill-card__label">{name}</p>
</a>