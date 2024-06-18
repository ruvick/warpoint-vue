<template>

	<q-page-container class="my-page-container">
		<div class="my-page-body q-pt-md q-pb-sm">
			<div class="q-pa-md" style="padding: 0;">
				<div class="q-gutter-y-md">
					<q-card class="q-layout no-shadow no-border-radius">
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

							<q-tab-panel class="column bg-dark-panel q-pt-lg q-pb-md" name="mails">

								<div class="row justify-between q-pb-xl">

									<div class="col-4 q-pt-md">
										<div class="text-h6 q-mb-xl">Введите данные:</div>

										<q-form @submit="onSubmit"  class="column" method="post" style="width: 288px;">
											<q-input class="q-mb-lg" v-model.number="model" standout="text-white" type="number" filled label="Номер сертификата" />
											<q-input class="q-mb-lg" v-model.number="model" standout="text-white" type="number" filled label="PIN" />
										</q-form>
										<q-btn class="text-h6" label="Проверить баланс" type="submit" color="primary"/>
										<!-- <q-btn class="text-h6 bg-dark-panel" label="Очистить" type="submit" primary/> -->
									</div>

									<div class="row col justify-center items-center bg-dark-box">
										<div class="column items-center">
											<div class="row">
												<div class="row items-center justify-center text-h6 text-grey-10">Здесь появится информация о сертификате
													<i class="q-icon text-grey-10 q-ml-sm" aria-hidden="true" role="presentation" style="font-size: 24px;">
														<svg viewBox="0 0 24 24"><use xlink:href="icons/allIcons.svg#sert-ico"></use></svg>
													</i>
												</div>
											</div>
											<q-circular-progress indeterminate rounded size="30px" color="light-blue" class="q-mt-lg"/>
										</div>
									</div>

								</div>

								<div class="row q-pt-xl q-pb-md ">

									<q-expansion-item class="text-h6 text-grey-10" expand-separator label="История операций">
										<q-card>
											<q-card-section class="bg-dark-panel">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
												commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
												eveniet doloribus ullam aliquid.
											</q-card-section>
										</q-card>
									</q-expansion-item>
									
								</div>
								<q-separator class="bg-dark-separator" />

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
    	// position: relative;
		color: #fff;
		min-height: 93vh;
		background-color: #1C1E22; 
		margin-top: 4.375rem;
	}
	.q-gutter-y-md, .q-gutter-md {
		margin: -4.375rem 0 0 -0.8125rem;
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
	.bg-dark-panel {
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
	.bg-dark-box {
		background-color: #1D1F24;
	}
	.q-item__section--main ~ .q-item__section--side {
    padding-left: 0.25rem;
	}
	.q-item__section--side > .q-icon {
    font-size: 2.0625rem;
	}
</style>
