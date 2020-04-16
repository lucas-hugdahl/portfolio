<script>
  import { onMount } from "svelte";
  import "splitting/dist/splitting.css";
  import "splitting/dist/splitting-cells.css";
  import Splitting from "splitting";
  onMount(async () => {
  // something soon
  // Splitting();
  });
</script>

<style type="text/scss">
  @import "../../../assets/scss/mixins";

  .header {
    position: relative;
    height: 90vh;

    &__image {
      bottom: 0;
      right: 50%;
      transform: translateX(50%);
      position: absolute;
    }

    &__text {
      position: absolute;
      top: 10%;
      left: 10%;
      z-index: 2;

      &__name {
          font-size: 2.5rem;
          font-weight: 400;
          //offset font whitespace
          margin-left: -4px;
      }

      &__title {
        opacity: .8;
      }
    }

    @include break-up('lg') {
      height: 450px;

      &__image {
        right: 0;
        transform: translateX(0%);
      }

      &__text {
        top: 10%;

        &__name {
            font-size:  3rem;
            font-weight: 400;
        }

        &__title {
      
        }
      }
    }
  }
</style>

<section class="header">
  <div class="header__text" data-depth="0.6">
    <h1 class="header__text__name mt-0 mb-1" data-splitting>Lucas Hugdahl</h1>
    <p class="header__text__title my-0">Front End Developer</p>
  </div>
  <img class="header__image" src="images/avatar.png" alt="Headshot photograph of Lucas Hugdahl in a Hawaiin shirt"/>
</section>