<template>

	<q-page-container class="my-page-container">
		<div class="my-page-body">
			<div class="q-pa-md" style="padding: 0;">
				<div class="q-gutter-y-md">
					<q-card class="q-layout">
						<q-tabs
							v-model="tab"
							dense
							class="text-grey"
							active-color="primary"
							indicator-color="primary"
							align="justify"
							narrow-indicator
						>
							<q-tab style="flex: 0;" name="mails" label="проверка баланса" />
							<q-tab style="flex: 0;" name="alarms" label="активация сертификата" />
							<q-tab style="flex: 0;" name="movies" label="история активаций" />
						</q-tabs>

						<!-- <q-separator /> -->

						<q-tab-panels v-model="tab" animated>
							<q-tab-panel class="bg-dark-panel" name="mails">
								<div class="text-h6">Mails</div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</q-tab-panel>

							<q-tab-panel class="bg-dark-panel" name="alarms">
								<div class="text-h6">Alarms</div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</q-tab-panel>

							<q-tab-panel class="bg-dark-panel" name="movies">
								<div class="text-h6">Movies</div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</q-tab-panel>
						</q-tab-panels>
					</q-card>

					<!-- <q-card>
						<q-tab-panels v-model="tab" animated>
							<q-tab-panel name="mails">
								<div class="text-h6">Mails</div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</q-tab-panel>

							<q-tab-panel name="alarms">
								<div class="text-h6">Alarms</div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</q-tab-panel>

							<q-tab-panel name="movies">
								<div class="text-h6">Movies</div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</q-tab-panel>
						</q-tab-panels>

						<q-separator />

						<q-tabs
							v-model="tab"
							dense
							:class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
							align="justify"
							narrow-indicator
						>
							<q-tab name="mails" label="Mails" />
							<q-tab name="alarms" label="Alarms" />
							<q-tab name="movies" label="Movies" />
						</q-tabs>

					</q-card> -->

				</div>
  		</div>
		</div>
	</q-page-container>

</template>

<script>
import { ref } from 'vue';
export default {
     name: 'Certificates',
  setup () {
    return {
      tab: ref('mails')
    }
  }
};


</script>

<style lang="scss">
	.my-page-body {
		padding: 6.3px 32px 6.3px 136px;
    position: relative;
		color: #fff;
		min-height: 93vh;
		background-color: #1C1E22; 
		margin-top: 70px;
	}
	.q-gutter-y-md, .q-gutter-md {
    margin-top: -70px;
	}
	.q-card {
		box-shadow: none;
    border-radius: 0;
	}
	.my-page-body .q-tab.q-tab--active {
		min-height: 48px;
		background-color: #1C1E22;
		border-radius: 6px 6px 0px 0px;
		.text-primary {
			color: #5B89F8;
		}
	}
	.my-page-body .q-tab--active .q-tab__indicator {
    opacity: 0;
	}
	.my-page-body .bg-dark-panel {
		background-color: #1C1E22;
	}
</style>
