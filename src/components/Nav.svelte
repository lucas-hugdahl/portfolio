<script>
    import RouterLink from './RouterLink.svelte';
    export let curRoute;
</script>

<style type="text/scss">
    .nav {
        position: sticky;
        top: 0;
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            text-align: right;
            li {
                display: inline;
                background: white;
                padding: 1rem 2rem;
                &:nth-child(1) {
                    margin-right: -5px;
                }
                a {
                    padding-right: 0 !important;
                    padding-left: 0 !important;
                }
            }
        }
    }
</style>

<nav class="nav">
    <ul>
        <li>
            <RouterLink page={{path: '/home', name: 'Home', curRoute}} />
        </li>
        <li>
            <RouterLink page={{path: '/blog', name: 'Blog', curRoute}} />
        </li>
    </ul>
</nav>