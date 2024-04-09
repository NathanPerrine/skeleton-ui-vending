<script lang="ts">
  import vendingIcon from "$lib/assets/images/vending-machine.svg"
</script>
<header class="w-full flex justify-center">
  <div class="w-full max-w-7xl flex flex-row justify-between">
    <div class="flex items-center">
      <img src={vendingIcon} alt="Vending machine icon" width="50px"/>
      <a href="/" class="text-2xl my-auto">SnackMaster Vending Solutions</a>
    </div>

    <div class="flex items-center">
      <a href="/contactus" class="text-nowrap font-semibold rounded-full bg-blue-300 hover:bg-blue-700 p-2">Contact Us</a>
    </div>
  </div>
</header>

<!-- <style lang="scss">
  header {
    height: 75px;
    border-bottom: 2px solid $primary-accent;
  }

  a {
    text-decoration: none;
  }
</style> -->