const db = require("./server/db");
const { Valentine, Genre } = require("./server/db/models");

const valentines = [
	{
		content: 'Roses are Red, Violets are Blue, Unexpected "}" on line 42',
		genreId: 5,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, Coffee is bitter, And so are you.",
		genreId: 1,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, You thought this was a love poem, Now the joke is on you.",
		genreId: 1,
		approved: true,
	},
	{
		content:
			"Roses are red, Relationships are tough, The reason I love you, We hate the same stuff",
		genreId: 4,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, I hate poetry, But I'm into you.",
		genreId: 4,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, I'm unoriginal, This is all I can do",
		genreId: 2,
		approved: true,
	},
	{
		content: "Roses are red, Violets are blue, tl;dr, They differ in hue",
		genreId: 5,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, Violets are violet, Not freaking blue.",
		genreId: 2,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, My mom's TikTok, Is cooler than you",
		genreId: 1,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, I said it was me, It was actually you",
		genreId: 1,
		approved: true,
	},
	{
		content:
			"Roses are red, pizza is too, I ordered a large, but none is for you.",
		genreId: 1,
		approved: true,
	},
	{
		content:
			"Roses are red, violets are blue, some poems rhyme, this one doesn’t.",
		genreId: 2,
		approved: true,
	},
	{
		content:
			"Roses are red, violets are blue, they don’t think it be like that, but it do.",
		genreId: 2,
		approved: true,
	},
	{
		content:
			"Roses are red, violets are blue, I don't mind quarantine, when I'm with you",
		genreId: 3,
		approved: true,
	},
	{
		content:
			"Roses are red, violets are blue, though these are dark times, we will pull through.",
		genreId: 3,
		approved: true,
	},
	{
		content:
			"Roses are red, Leaves are green, I’ve tested negative, For COVID-19",
		genreId: 3,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, # social distancing, In case it’s not just the flu.",
		genreId: 3,
		approved: true,
	},
	{
		content:
			"Roses are red, Telephones are plastic, Disco is dead, But you are fantastic!",
		genreId: 2,
		approved: true,
	},
	{
		content:
			"Roses are red, Violets are blue, I'd like to get within 6 feet of you",
		genreId: 3,
		approved: true,
	},
	{
		content: "Roses are red, Violets are blue, I'm sick of zoom",
		genreId: 3,
		approved: true,
	},
	{
		content: `//Roses are red, //Violets are blue, //If you're reading this,//I'm sorry for you.`,
		genreId: 5,
		approved: true,
	},
	{
		content: `//roses are red, //violets are blue, //null errors, //will frustrate you`,
		genreId: 5,
		approved: true,
	},
	{
		content: `//roses are red //violets are blue //null errors //will frustrate you`,
		genreId: 5,
		approved: true,
	},
	{
		content: `Roses are red, Chocolate is delicious, Code worked the first time, this is suspicious`,
		genreId: 5,
		approved: true,
	},
	{
		content: `Roses are red, What a treat, I didn't use prettier, And my code is still neat!`,
		genreId: 5,
		approved: true,
	},
	{
		content: `Roses are red, You're lucky, I didn't leave you on unread`,
		genreId: 1,
		approved: true,
	},
	{
		content: `Roses are red, My everything is sore, Will quarantine end before 2024?`,
		genreId: 3,
		approved: true,
	},
];

const genres = [
	{
		name: "Mean",
		description: `Mean Valentine's Day Poems`,
	},
	{
		name: "Silly",
		description: `Silly Valentine's Day Poems`,
	},
	{
		name: "Quarantine",
		description: `Quarantine Valentine's Day Poems`,
	},
	{
		name: "Romantic",
		description: `Romantic Valentine's Day Poems`,
	},
	{
		name: "Programmer's Humor",
		description: `Nerdy Valentine's Day Poems`,
	},
];

async function seed() {
	await db.sync({ force: true });

	console.log("db synced!");

	await Promise.all(
		genres.map((genre) => {
			return Genre.create(genre);
		})
	);
	//do some creating//making seed here!
	await Promise.all(
		valentines.map((valentine) => {
			return Valentine.create(valentine);
		})
	);

	console.log("seeded successfully!");
}

async function runSeed() {
	console.log("seeding...");
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log("closing db connection");
		await db.close();
		console.log("db connection closed");
	}
}

runSeed();
