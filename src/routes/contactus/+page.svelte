<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<!-- email form -->
<div class="w-full flex justify-center">
	<div class="max-w-7xl flex md:h-[75vh] items-center">
		<form
			class="w-full max-w-lg card bg-gradient-to-br variant-gradient-tertiary-primary p-4 my-4 mx-2"
			method="POST"
			use:enhance
			action="?/sendEmail"
		>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<!-- First Name -->
					<label class="label" for="firstName">
						<span>First Name</span>
						<input class="input" name="firstName" type="text" placeholder="Jane" />
					</label>
					<!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
				</div>
				<div class="w-full md:w-1/2 px-3">
					<!-- Last Name -->
					<label class="label" for="lastName">
						<span>Last Name</span>
						<input class="input" name="lastName" type="text" placeholder="Doe" />
					</label>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<!-- email -->
					<div class="mb-2">
						<label class="label" for="email">
							<span>Email</span>
							<input class="input" name="email" type="email" placeholder="JaneDoe@gmail.com" />
						</label>
					</div>
					<!-- Message area -->
					<div>
						<label class="label" for="message">
							<span>Message</span>
							<textarea
								class="textarea"
								name="message"
								rows="6"
								placeholder="Hi! I'd like to request a site survey for your free vending machine placements at my office/break room/rest stop."
							/>
						</label>
					</div>
				</div>
			</div>
			<!-- Address -->
			<div class="flex flex-wrap flex-col mb-2">
				<div class="w-full mb-2">
					<label class="label" for="address">
						<span>Address</span>
						<input class="input" name="address" type="text" placeholder="123 Fake St." />
					</label>
				</div>
				<div class="flex flex-wrap -mx-3">
					<!-- City -->
					<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label class="label" for="city">
							<span>City</span>
							<input class="input" name="city" type="text" placeholder="Toledo" />
						</label>
					</div>
					<!-- State -->
					<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label class="label" for="state">
							<span>State</span>
							<select class="select" name="state">
								<option selected>Ohio</option>
								<option>Michigan</option>
							</select>
						</label>
					</div>
					<!-- Zip -->
					<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label class="label" for="zip">
							<span>Zip</span>
							<input class="input" name="zip" type="text" placeholder="43601" />
						</label>
					</div>
				</div>
			</div>
			<div class="w-full flex justify-center">
				<button class="btn variant-filled-secondary rounded-full w-1/4 p-2" type="submit">Send &rarr;</button>
			</div>
		</form>
	</div>
</div>
