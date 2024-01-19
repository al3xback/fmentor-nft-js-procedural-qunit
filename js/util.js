const createLayoutComponents = () => {
	const createCardEl = () => {
		const cardEl = document.createElement('article');
		cardEl.className = 'card';

		/* card image */
		const cardImageWrapperEl = document.createElement('div');
		cardImageWrapperEl.className = 'card__image';

		const cardImageEl = document.createElement('img');
		cardImageEl.width = 302;
		cardImageEl.height = 302;
		cardImageEl.src = './images/equilibrium.jpg';
		cardImageEl.alt = '';

		cardImageWrapperEl.appendChild(cardImageEl);

		/* card content */
		const cardContentEl = document.createElement('div');
		cardContentEl.className = 'card__content';

		/* card title */
		const cardTitleEl = document.createElement('h2');
		cardTitleEl.className = 'card__title';

		const cardTitleLinkEl = document.createElement('a');
		cardTitleLinkEl.href = '#';
		cardTitleLinkEl.className = 'btn btn--link';
		cardTitleLinkEl.textContent = 'Equilibrium #3429';

		cardTitleEl.appendChild(cardTitleLinkEl);

		/* card description */
		const cardDescriptionEl = document.createElement('p');
		cardDescriptionEl.className = 'card__desc';
		cardDescriptionEl.textContent =
			'Our Equilibrium collection promotes balance and calm.';

		/* card statuses */
		const cardStatusListEl = document.createElement('ul');
		cardStatusListEl.className = 'card__stats-list';

		const cardStatuses = [
			{ icon: 'icon-ethereum', value: '0.041 ETH' },
			{ icon: 'icon-clock', value: '3 days left' },
		];

		for (const status of cardStatuses) {
			const cardStatusItemEl = document.createElement('li');
			cardStatusItemEl.className = 'card__stats-list-item';

			const cardStatusItemIconEl = document.createElement('i');
			cardStatusItemIconEl.className = status.icon;
			cardStatusItemIconEl.ariaHidden = 'true';

			const cardStatusItemTextEl = document.createElement('span');
			cardStatusItemTextEl.textContent = status.value;

			cardStatusItemEl.appendChild(cardStatusItemIconEl);
			cardStatusItemEl.appendChild(cardStatusItemTextEl);

			cardStatusListEl.appendChild(cardStatusItemEl);
		}

		/* card author */
		const cardAuthorEl = document.createElement('div');
		cardAuthorEl.className = 'card__author';

		const cardAuthorImageEl = document.createElement('img');
		cardAuthorImageEl.className = 'card__author-img';
		cardAuthorImageEl.width = 33;
		cardAuthorImageEl.height = 33;
		cardAuthorImageEl.src = './images/avatar.png';
		cardAuthorImageEl.alt = 'Jules Wyvern';

		const cardAuthorDescriptionEl = document.createElement('span');
		cardAuthorDescriptionEl.className = 'card__author-desc';
		cardAuthorDescriptionEl.textContent = 'Creation of ';

		const cardAuthorDescriptionLinkEl = document.createElement('a');
		cardAuthorDescriptionLinkEl.href = '#';
		cardAuthorDescriptionLinkEl.className = 'btn btn--link';
		cardAuthorDescriptionLinkEl.textContent = 'Jules Wyvern';

		cardAuthorDescriptionEl.appendChild(cardAuthorDescriptionLinkEl);

		cardAuthorEl.appendChild(cardAuthorImageEl);
		cardAuthorEl.appendChild(cardAuthorDescriptionEl);

		cardContentEl.appendChild(cardTitleEl);
		cardContentEl.appendChild(cardDescriptionEl);
		cardContentEl.appendChild(cardStatusListEl);
		cardContentEl.appendChild(cardAuthorEl);

		cardEl.appendChild(cardImageWrapperEl);
		cardEl.appendChild(cardContentEl);

		return cardEl;
	};

	/* header */
	const headerEl = document.createElement('header');

	const headerTitleEl = document.createElement('h1');
	headerTitleEl.className = 'sr-only';
	headerTitleEl.textContent = 'NFT';

	headerEl.appendChild(headerTitleEl);

	/* main */
	const mainEl = document.createElement('main');

	const mainContainerEl = document.createElement('div');
	mainContainerEl.className = 'container';

	const cardEl = createCardEl();

	mainContainerEl.appendChild(cardEl);

	mainEl.appendChild(mainContainerEl);

	/* footer */
	const footerEl = document.createElement('footer');

	const footerContainerEl = document.createElement('div');
	footerContainerEl.className = 'container';

	const footerTextEl = document.createElement('p');
	footerTextEl.textContent = 'Challenge by ';

	const footerTextLinkCreatorEl = document.createElement('a');
	footerTextLinkCreatorEl.href =
		'https://www.frontendmentor.io?ref=challenge';
	footerTextLinkCreatorEl.className = 'btn btn--link';
	footerTextLinkCreatorEl.textContent = 'Frontend Mentor';
	footerTextLinkCreatorEl.rel = 'noopener';
	footerTextLinkCreatorEl.target = '_blank';

	const footerTextLinkCoderEl = document.createElement('a');
	footerTextLinkCoderEl.href = 'https://github.com/al3xback';
	footerTextLinkCoderEl.className = 'btn btn--link';
	footerTextLinkCoderEl.textContent = 'al3xback';
	footerTextLinkCoderEl.rel = 'noopener';
	footerTextLinkCoderEl.target = '_blank';

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return {
		headerEl,
		cardEl,
		mainEl,
		footerEl,
	};
};

export default createLayoutComponents;
