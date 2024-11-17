class Proizvod{
    constructor(id,naziv,cijena, velicine, opis, slike, dostupneBoje, karakteristike){
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
        this.opis = opis;
        this.slike = slike;
        this.dostupneBoje = dostupneBoje;
        this.karakteristike = karakteristike;
    }
}
const proizvodi = [
    new Proizvod(1, 'Obična crna majica', 100, ['XS', 'S', 'M', 'L'], "Default crna majica da ne more obicnija. Definicija obicnosti!", 
        ["https://media.istockphoto.com/id/1830111752/photo/black-t-shirt-short-sleeve-mockup.jpg?s=2048x2048&w=is&k=20&c=q0qo2Se594igcLmvQp6jf1ov1cLw0MFP_1iWc1hfFvg=", 
            "https://media.istockphoto.com/id/948117902/vector/black-t-shirt-template-in-three-dimentions.jpg?s=2048x2048&w=is&k=20&c=jF9nk29A96cz_daTw_3S13Cwd4C-ClMZ6S9iyoQoinY=",
            "https://media.istockphoto.com/id/1509164283/vector/black-sports-tshirt-for-men-3d-vector-mock-up.jpg?s=612x612&w=0&k=20&c=SUHMo1jm597FxG2y3KiMNn6tyl_mYHMvDJp4QgoASG8=",
            "https://media.istockphoto.com/id/1500789453/photo/black-male-t-shirt-mockup-with-crew-neck-label-shadows-casual-shirt-3d-rendering-front-view.jpg?s=612x612&w=0&k=20&c=Tug99DZidYJMpKgbW24EYdiISlOP7yE0KVy9knXD-GA="
        ], ["crna"], ["crna", "80% pamuk, 20% poliester", "obična"]),
    new Proizvod(2, "Levi's 501 traperice", 110, ['S', 'M', 'L'], "Retro styling, straight leg fit",
        ["https://lsco.scene7.com/is/image/lsco/005013271-front-pdp-ld?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=155&hei=155",
        "https://lsco.scene7.com/is/image/lsco/005013271-alt1-pdp-ld?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=155&hei=155",
        "https://lsco.scene7.com/is/image/lsco/005013271-front-pdp?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=155&hei=155",
        "https://lsco.scene7.com/is/image/lsco/005013271-detail1-pdp?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=155&hei=155"
        ],["plava"],["Retro stil", "Poznata Levi's kvaliteta izrade","Preporuka: uzmite broj veće"]),
    new Proizvod(3, 'Zimska kapa', 40, ['onesize'], "Materijal: 40% pamuk, 20% vuna, 20% poliester", 
        ["https://i.ebayimg.com/images/g/cUwAAOSwupVd3ypu/s-l960.webp",
        "https://i.ebayimg.com/images/g/Tt8AAOSwePpd3iml/s-l960.webp",
        "https://i.ebayimg.com/images/g/7DkAAOSwmU9d3imp/s-l960.webp",
        "https://i.ebayimg.com/images/g/reYAAOSwVTpd3ime/s-l1600.webp"
        ], ["smeđa"], ["Robustan dizajn", "Sadrži pravu merino vunu", "USSR stil"]),
    new Proizvod(4, 'Čarape Adidas', 20, ['34-36', '37-39', '40-42'], "Sportske čarape, prigodno za sve aktivnosti, materijal protiv znojenja.", 
        ["https://static.ftshp.digital/img/p/9/8/3/6/3/5/983635.jpg",
        "https://static.ftshp.digital/img/p/9/8/3/6/3/8/983638.jpg",
        "https://static.ftshp.digital/img/p/9/8/3/6/4/1/983641.jpg",
        "https://static.ftshp.digital/img/p/9/8/3/6/3/5/983635.jpg"
        ], ["bijele"], ["100% pamuk", "Prati na 90°C"]),
    new Proizvod(5, 'Tenisice Nike', 200, ['38', '39', '40', '41', '42', '43', '44', '45'], "Patike za trčanje",    
        ["https://www.intersport.hr/media/catalog/product/cache/5864b084779f11fa289096d3dce89f9c//A/U/AURORA_FB2207-401_PHSRH000-1500_14.jpeg",
        "https://www.intersport.hr/media/catalog/product/cache/5864b084779f11fa289096d3dce89f9c//A/U/AURORA_FB2207-401_PHSLH001-1500.jpeg",
        "https://www.intersport.hr/media/catalog/product/cache/5864b084779f11fa289096d3dce89f9c//A/U/AURORA_FB2207-401_PHCFH001-1500.jpeg",
        "https://www.intersport.hr/media/catalog/product/cache/5864b084779f11fa289096d3dce89f9c//A/U/AURORA_FB2207-401_PHCTH001-1500.jpeg"
        ], ["plava"], ["Za trčanje", "Pogodne za sve vrste tla", "Višesportska primjena", "24-to satna udobnost"]),
    new Proizvod (6, 'Jakna Napapijri', 300, ['XS', 'S', 'M', 'L', 'XL'], "Zimska jakna kad je zima brr", 
        ["https://img01.ztat.net/article/spp-media-p1/231d539d4b0548b59cd5817cfcca69c5/02a3c671ff8f43fcbf4199d098f7a9c4.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/ef37e28817cf4f2582de757da3aa6c50/d153108a34c749668c7e046986bc1422.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/cd4049e29dda49438bdf207ce6140864/390e8c36d3a94786af108b951aaa5b2e.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/208623652593467f9cac1d9666e84c01/3cca1c4d8bbd49e58463aaa4e6f4553e.jpg?imwidth=1800"
        ], ["crno/bijela"], ["Topla, jako topla", "zimski uvjeti"])
];

export {Proizvod, proizvodi}