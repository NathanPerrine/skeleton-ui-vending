<script lang="ts">
  import '../app.postcss';
  import Header from '$lib/components/header/header.svelte';
	import Footer from "$lib/components/footer/footer.svelte";
</script>

<Header />
<slot />
<Footer />