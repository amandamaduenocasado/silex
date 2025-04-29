import { v4 } from 'uuid';

export const PRODUCTS = [
	{
		id: v4(),
		name: 'Silex Solar',
		title: 'for all skin types',
		description:
			'Facial sunscreen with an ultra-light texture and an aqueous external phase, leaving a silky finish',
		subdescription:
			'Instant absorption. Blends seamlessly with the skin and provides high protection. Hydrates and adds a beautiful natural tint',
		minidescription: 'This is the first step of your skincare routine',
		price: '17.95€ 50 ML',
		miniature: '/assets/images/silex/miniature-baby.png',
	},
	{
		id: v4(),
		name: 'Silex Cleansing Gel',
		title: 'for all skin types',
		description:
			'Facial cleanser with an ultra-light texture and an aqueous external phase, leaving a silky finish',
		subdescription:
			'Immediate absorption. It melts into the skin and provides deep cleansing. Hydrates the skin and offers antioxidant action',
		minidescription: 'This is the second step of your skincare routine',
		price: '20.95€ 75 ML',
		miniature: '/assets/images/silex/mouth-bottle.png',
	},
	{
		id: v4(),
		name: 'Silex Retinol',
		title: 'for all skin types',
		description:
			'Contains encapsulated retinol to help rejuvenate the skin. Free of fragrances and oils. Has a lightweight, non-comedogenic texture',
		subdescription:
			'Formulated with niacinamide, hyaluronic acid, and three essential ceramides',
		minidescription: 'This is the third step of your skincare routine',
		price: '17.95€ 30 ML',
		miniature: '/assets/images/silex/mantis-bottle.png',
	},
];
