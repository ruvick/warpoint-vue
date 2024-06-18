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
							<q-tab style="flex: 0;" name="mails" label="Проверка баланса" />
							<q-tab style="flex: 0;" name="alarms" label="Активация сертификата" /> 
							<q-tab style="flex: 0;" name="movies" label="История активаций" />
						</q-tabs>

						<!-- <q-separator /> -->

						<q-tab-panels v-model="tab" animated>
							<q-tab-panel class="row justify-between bg-dark-panel" name="mails">

								<div class="col-4">
									<div class="text-h6 q-mb-xl">Введите данные:</div>

									<q-form @submit="onSubmit"  class="column" method="post" style="width: 288px;">
										<q-input class="q-mb-lg" v-model.number="model" standout="text-white" type="number" filled label="Номер сертификата" />
										<q-input class="q-mb-lg" v-model.number="model" standout="text-white" type="number" filled label="PIN" />
									</q-form>
									<q-btn class="text-h6" label="проверить баланс" type="submit" color="primary"/>
								</div>

								<div class="row col justify-center items-center">
									<div class="column items-center">
										<div class="row">
											<div class="row items-center justify-center text-h6 text-grey-10">Здесь появится информация о сертификате
												<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
													<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#sert-ico"></use></svg>
												</i>
											</div>
										</div>
										<q-circular-progress
											indeterminate
											rounded
											size="30px"
											color="light-blue"
											class="q-mt-lg"
										/>
									</div>
								</div>

							</q-tab-panel>

							<q-tab-panel class="bg-dark-panel" name="alarms">
								<div class="text-h6">Узнайте у клиента номер заказа сертификата:</div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</q-tab-panel>

							<q-tab-panel class="bg-dark-panel" name="movies">
								<div class="text-h6">Movies</div>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</q-tab-panel>
						</q-tab-panels>
					</q-card>

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
      tab: ref('mails'),
		value: 71
    }
  }
};


</script>

<style lang="scss">
	.my-page-body {
		padding: 0.3937rem 2rem 0.3937rem 8.5rem;
    	position: relative;
		color: #fff;
		min-height: 93vh;
		background-color: #1C1E22; 
		margin-top: 4.375rem;
	}
	.q-gutter-y-md, .q-gutter-md {
		margin: -4.375rem 0 0 -0.8125rem;
	}
	.q-card {
	   box-shadow: none;
    	border-radius: 0;
	}
	.my-page-body .q-tab.q-tab--active {
		min-height: 3rem;
		background-color: #1C1E22;
		border-radius: 6px 6px 0px 0px;
		.text-primary {
			color: #5B89F8;
		}
	}
	.my-page-body .q-tab__label {
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.465rem;
	}
	.my-page-body .q-tab--active .q-tab__indicator {
    opacity: 0;
	}
	.my-page-body .bg-dark-panel {
		padding: 3rem 1rem;
		background-color: #1C1E22;
	}
	.q-field--filled .q-field__control {
		background: #5B89F826;
	}
	.q-field__label {
		color: #9E9E9E;
	}
	.q-field__native, .q-field__input {
    color: #9E9E9E;
	}
</style>
