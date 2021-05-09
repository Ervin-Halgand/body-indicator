export const activities = [
    {
        text: "Sédentaire",
        value: 1.2,
        desc: "Aucun exercice quotidien ou presque"
    },
    {
        text: "Légèrement actif",
        value: 1.375,
        desc: "Vous faites parfois des exercices physiques (1 à 3 fois par semaine)"
    },
    {
        text: "Modérément actif",
        value: 1.55,
        desc: "Vous faites régulièrement des exercices physiques (3 à 5 fois par semaine)"
    },
    {
        text: "Très actif",
        value: 1.725,
        desc: "Vous faites quotidiennement du sport ou des exercices physiques soutenus"
    },
    {
        text: "Extrêmement actif",
        value: 1.9,
        desc: "Votre travail est extrêmement physique ou bien vous vous considérez comme un grand sportif"
    }
]

export const metabolismeMenCalculation = (weight, size, age) => {
    const mb = (13.707 * weight) + (492.3 * (size / 100)) - (6.673 * age) + 77.607;
    return mb;
}

export const metabolismeWomanCalculation = (weight, size, age) => {
    const mb = (9.740 * weight) + (172.9 * (size / 100)) - (4.737 * age) + 667.051;
    return mb;
}