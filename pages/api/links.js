const links = [
	{
		_id: 'link_1',
		icon: {
			path: '/icons/vk.svg',
			width: 86
		},
		gradient: {
			from: '#0077ff',
			to: '#66adff'
		},
		link: 'https://vk.com/wholynum',
		title: 'Вконтакте'
	},
	{
		_id: 'link_2',
		icon: {
			path: '/icons/telegram.svg',
			width: 80
		},
		gradient: {
			from: '#76acfd',
			to: '#6ed0ff'
		},
		link: 'https://t.me/wholynum',
		title: 'Телеграм',
		isImportant: true
	},
	{
		_id: 'link_3',
		icon: {
			path: '/icons/github.svg',
			width: 90
		},
		gradient: {
			from: '#238636',
			to: '#50c878'
		},
		link: 'https://github.com/wholynum',
		title: 'Профиль на GitHub'
	},
	{
		_id: 'link_4',
		icon: {
			path: '/icons/resume.svg',
			width: 80
		},
		gradient: {
			from: '#e53e3e',
			to: '#ff6666'
		},
		link: 'https://tomsk.hh.ru/resume/8e198824ff0b41f75c0039ed1f52314952454a',
		title: 'Моё резюме'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
