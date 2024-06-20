import axios from 'axios';
import { defu } from 'defu';
import { Notify } from 'quasar';
import { useMainStore } from 'src/stores/main.js';

export const useApi = async (url, options = {}) => {
	const { g } = useMainStore();

	const defaults = {
		baseURL: 'https://dserver.warpoint.ru/api',
		headers: g.token ? { Authorization: `Bearer ${g.token}` } : {}
	};

	const params = defu(options, defaults);

	let data = null;
	let error = null;

	try {
		const response = await axios(url, params);
		data = response.data;
	} catch (anyError) {
		error = anyError;

		if (error.response.status === 403 || error.response.status === 401) {
			g.token = null
			localStorage.removeItem('token')
			window.location.reload()
			window.location.reload()
		}

		if (error.response && [403, 404, 401, 500].includes(error.response.status)) {
			const statuses = {
				401: $t('Ошибка доступа'),
				403: $t('Ошибка доступа'),
				404: $t('Элемент страницы не найден'),
				500: $t('Ошибка сервера')
			};

			Notify.create({
				message: `${statuses[error.response.status]}, ${$t('обратитесь к администратору')}`,
				color: 'red',
				icon: 'warning',
				position: 'bottom-left',
				timeout: 0,
				actions: [{ icon: 'close', color: 'white', round: true }]
			});


		}
	}

	return { data, error };
};

export const useApi2 = async (url, options = {}) => {
	const { g } = useMainStore();

	const defaults = {
		baseURL: 'https://dserver.warpoint.ru/api',
		headers: { Authorization: `Bearer 1f2b31e917005d19e5015c9a3ec5ab5efdcaeb4b` }
	};

	const params = defu(options, defaults);

	let data = null;
	let error = null;

	try {
		const response = await axios(url, params);
		data = response.data;
	} catch (anyError) {
		error = anyError;

		if (error.response && [403, 404, 500].includes(error.response.status)) {
			const statuses = {
				403: $t('Ошибка доступа'),
				404: $t('Элемент страницы не найден'),
				500: $t('Ошибка сервера')
			};

			Notify.create({
				message: `${statuses[error.response.status]}, ${$t('обратитесь к администратору')}`,
				color: 'red',
				icon: 'warning',
				position: 'bottom-left',
				timeout: 0,
				actions: [{ icon: 'close', color: 'white', round: true }]
			});
		}
	}

	return { data, error };
};
