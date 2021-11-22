import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/casderooij/dev.portfolio.git',
		user: {
			name: 'Cas de Rooij',
			email: 'casdrooij@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy complete');
	}
);
