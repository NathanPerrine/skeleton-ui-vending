<script lang="ts">
	import Icon from '@iconify/svelte';

	let socials = [
		{
			site: 'Instagram',
			link: '/',
			icon: 'mdi:instagram'
		},
		{
			site: 'Facebook',
			link: '/',
			icon: 'mdi:facebook'
		},
		{
			site: 'Twitter',
			link: '/',
			icon: 'mdi:twitter'
		},
		{
			site: 'linkedIn',
			link: '/',
			icon: 'mdi:linkedin'
		}
	];
</script>

<footer class="w-full flex justify-center mb-8 border-t-2 border-primary-500">
	<div class="w-full max-w-7xl flex flex-col">
		<div>
			<h2 class="font-bold text-2xl text-center">Connect with us</h2>
		</div>
		<div class="flex justify-around mx-8">
			<!-- contact -->
			<div class="w-1/4 flex flex-col my-2">
				<!-- phone/email -->
				<h3 class="self-center font-bold text-xl my-4">Contact</h3>
				<div>
					<!-- phone -->
					<div>
						<p>
							<span class="text-lg font-bold">Phone:</span>
							<a href="tel:1111111111">111-111-1111</a>
						</p>
					</div>
					<div>
						<p>
							<span class="text-lg font-bold">Email:</span>
							<a href="mailto:snackmaster@gmail.com">SnackMaster@gmail.com</a>
						</p>
					</div>
          <div>
            <a href="/contactus" class="text-lg underline">Send us an email</a>
          </div>
				</div>
			</div>

			<!-- socials -->
			<div class="w-1/4 flex flex-col my-2">
				<h3 class="self-center font-bold text-xl my-4">Socials</h3>
				<!-- social icons -->
				<div class="flex justify-between">
					{#each socials as social (social.site)}
						<a href={social.link} class="p-4 border border-gray-500 text-primary-800 variant-soft rounded-md">
							<Icon icon={social.icon} width="24px" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>

<!-- <style lang="scss">
	footer {
		border-top: 2px solid $dark-accent;
	}

  a {
    color: $dark-accent;
  }
</style> -->