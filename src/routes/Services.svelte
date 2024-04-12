<script lang="ts">
  export let icon: string
  export let service: string
  export let desc: string
  export let leftOrRight: string
</script>

<div class="card card-hover variant-filled-secondary border-2 border-tertiary-500 flex items-center md:h-48 my-2">
  <header class="card-header">
    <img src={icon} alt={`${service} icon`} class={"w-16 h-16 m-4 border-2 border-tertiary-500 bg-tertiary-100 rounded-full self-center "  + (leftOrRight === 'left' ? "order-1" : "order-2") }/>
  </header>
  <section class="p-4">
    <h3 class="h3 text-center">{service}</h3>
    <p>{desc}</p>
  </section>
</div>