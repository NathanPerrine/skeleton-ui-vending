<script lang="ts">
  export let icon: string
  export let service: string
  export let desc: string
  export let leftOrRight: string
</script>

<section class="flex w-full border-2 border-secondary-400 bg-primary-400 rounded-md h-48 my-4 p-2">
  <img src={icon} alt={`${service} icon`} class={"w-16 h-16 m-4 border-2 border-secondary-500 rounded-full self-center "  + (leftOrRight === 'left' ? "order-1" : "order-2") }/>
  <div class={leftOrRight === 'left' ? "order-2" : "order-1"}>
    <h3 class="font-bold text-xl text-center">{service}</h3>
    <p>{desc}</p>
  </div>
</section>