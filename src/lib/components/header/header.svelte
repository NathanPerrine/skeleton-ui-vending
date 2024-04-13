<script lang="ts">
  import vendingIcon from "$lib/assets/images/vending-machine.svg";
  import { LightSwitch } from '@skeletonlabs/skeleton';
</script>
<nav class="z-10 w-full flex justify-center sticky top-0 py-2 border-b-2 border-primary-500 variant-filled-surface">
  <div class="w-full max-w-7xl flex flex-row justify-between">
    <div class="flex items-center">
      <a href="/"><img src={vendingIcon} alt="Vending machine icon" width="50px"/></a>
      <a href="/" class="hidden md:block text-2xl my-auto">SnackMaster Vending Solutions</a>
    </div>

    <div class="flex items-center">
      <a href="/contactus" class="btn rounded-full font-semibold p-2 mr-2 variant-filled-tertiary border-2 border-tertiary-700">Contact Us</a>
    </div>
  </div>
</nav>