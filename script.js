let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	},
    {
		name: "Deadpool"
	},
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},	
];

Array.prototype.heroesRender = function(universe) {
    let superHeroes = this.map(hero =>`
        <tr>
            <td>${hero.name}</td>
            <td>
                <img src="images/${universe}/${hero.name.toLowerCase().replaceAll(' ', '')}.svg">
            </td>
        </tr>
    `)
    .join('');

    document.write(`
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                ${superHeroes}
            </tbody>
        </table>
    `);
};

dcHeroes.heroesRender('dc');
marvelHeroes.heroesRender('marvel');