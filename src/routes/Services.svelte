<script lang="ts">
	import Icon from "@iconify/svelte";

  export let icon: string
  export let service: string
  export let desc: string
  export let leftOrRight: string
</script>

<div class="card card-hover p-4 variant-soft-secondary border-2 border-tertiary-200 flex flex-col md:flex-row items-center md:h-48 mt-2 md:mb-8">
  <header class={"card-header " + (leftOrRight === 'left' ? "order-1" : "order-2")}>
    <div class="min-w-12 min-h-16">
      <Icon icon={icon} class="min-w-12 min-h-16 border-2 border-tertiary-500 bg-tertiary-100 rounded-full self-center text-primary-800" />
    </div>
  </header>
  <section class={"p-4 " + (leftOrRight === 'left' ? "order-2" : "order-1") }>
    <h3 class="h3 text-center">{service}</h3>
    <p>{desc}</p>
  </section>
</div>