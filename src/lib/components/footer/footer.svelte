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

<footer class="w-full mb-8 border-t-2 border-primary-500 flex justify-center">
	<div class="w-full max-w-7xl flex flex-col">
		<div>
			<h2 class="font-bold text-2xl text-center my-4">Connect with us</h2>
		</div>
		<div class="flex flex-col md:flex-row md:justify-around md:mx-8">
			<!-- contact -->
			<div class="w-1/4 flex md:flex-col my-2">
				<!-- phone/email -->
				<h3 class="self-center font-bold text-xl m-2">Contact</h3>
				<div>
					<!-- phone -->
					<div class="flex">
							<Icon icon="mdi:cellphone" width="30px" class="mr-2"/>
							<a href="tel:1111111111">111-111-1111</a>
					</div>
					<div class="flex">
            <Icon icon="mdi:email-outline" width="30px" class="mr-2"/>
							<a href="mailto:snackmaster@gmail.com">SnackMaster@gmail.com</a>
					</div>
          <div class="flex">
            <Icon icon="mdi:email-fast-outline" width="30px" class="mr-2" />
            <a href="/contactus" class="text-lg underline">Send us an email</a>
          </div>
				</div>
			</div>

			<!-- socials -->
			<div class="w-1/4 flex md:flex-col my-2">
				<h3 class="self-center font-bold text-xl m-2">Socials</h3>
				<!-- social icons -->
				<div class="flex gap-2">
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