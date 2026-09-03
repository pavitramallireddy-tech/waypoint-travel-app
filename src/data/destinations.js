// Curated destination dataset. Images are fetched at runtime from Pexels —
// only search terms are stored here, never image URLs.
export const destinations = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    lat: 35.0116,
    lon: 135.7681,
    tagline: "A thousand years of temples, gardens, and quiet ceremony.",
    imageQuery: "Kyoto Japan temple autumn",
    region: "Asia",
    bestTime: "Late March–April (cherry blossom) or November (autumn foliage)",
    idealStay: "3–4 days",
    description:
      "Once the imperial capital for over a thousand years, Kyoto holds more than 1,600 Buddhist temples and 400 Shinto shrines within a city that still moves at a walking pace. Wooden machiya houses line narrow lanes in Gion, geiko and maiko still cross the Kamo River at dusk, and the surrounding hills turn the whole basin into a seasonal spectacle twice a year.",
    highlights: [
      "Vermilion torii gates climbing the mountain at Fushimi Inari",
      "Moss gardens and dry rock arrangements at Ryoan-ji",
      "The preserved geisha district of Gion at dusk",
    ],
    famousPlaces: [
      {
        name: "Fushimi Inari Taisha",
        imageQuery: "Fushimi Inari torii gates",
        blurb:
          "Thousands of vermilion torii gates form tunnels up the wooded slopes of Mount Inari. The full loop takes 2–3 hours; most visitors go partway and turn back.",
      },
      {
        name: "Kinkaku-ji (Golden Pavilion)",
        imageQuery: "Kinkaku-ji golden pavilion Kyoto",
        blurb:
          "A Zen retreat sheathed in gold leaf, mirrored perfectly in its pond. Best seen early morning before the tour groups arrive.",
      },
      {
        name: "Arashiyama Bamboo Grove",
        imageQuery: "Arashiyama bamboo grove",
        blurb:
          "A quiet path through towering bamboo stalks on the city's western edge, easily paired with the nearby Tenryu-ji temple garden.",
      },
      {
        name: "Gion District",
        imageQuery: "Gion district Kyoto street",
        blurb:
          "Kyoto's historic geisha quarter, with teahouses, lantern-lit lanes, and the Hanamikoji Street machiya facades.",
      },
    ],
  },
  {
    id: "reykjavik",
    name: "Reykjavík",
    country: "Iceland",
    lat: 64.1466,
    lon: -21.9426,
    tagline: "Glaciers, geysers, and the edge of the Arctic Circle.",
    imageQuery: "Reykjavik Iceland aurora",
    region: "Europe",
    bestTime: "June–August for daylight, September–March for the northern lights",
    idealStay: "4–6 days including the Ring Road",
    description:
      "The world's northernmost capital of its size, Reykjavík is a compact base for a landscape that does most of the talking: black sand beaches, geothermal fields, and glaciers within a few hours' drive. In winter the sky over the harbor regularly fills with aurora; in summer the sun barely sets at all.",
    highlights: [
      "Geothermal bathing at the Blue Lagoon",
      "The waterfalls and craters of the Golden Circle",
      "Aurora hunting on clear winter nights",
    ],
    famousPlaces: [
      {
        name: "Hallgrímskirkja",
        imageQuery: "Hallgrimskirkja church Reykjavik",
        blurb:
          "A concrete church modeled on basalt lava columns, and the best vantage point over the city's colorful rooftops from its tower.",
      },
      {
        name: "Golden Circle",
        imageQuery: "Gullfoss waterfall Iceland",
        blurb:
          "A day-trip loop covering Þingvellir's rift valley, the Geysir geothermal field, and the thundering Gullfoss waterfall.",
      },
      {
        name: "Blue Lagoon",
        imageQuery: "Blue Lagoon Iceland geothermal spa",
        blurb:
          "Milky geothermal water set in a lava field, kept around 38°C year-round. Book ahead — it sells out days in advance.",
      },
      {
        name: "Diamond Beach",
        imageQuery: "Diamond Beach Iceland icebergs",
        blurb:
          "Chunks of glacial ice wash up on black volcanic sand near the Jökulsárlón lagoon, a four-hour drive from the city.",
      },
    ],
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    lat: 31.6295,
    lon: -7.9811,
    tagline: "Red walls, spice markets, and gardens hidden behind them.",
    imageQuery: "Marrakech Morocco medina souk",
    region: "Africa",
    bestTime: "March–May or September–November, avoiding summer heat",
    idealStay: "3 days",
    description:
      "Marrakech's medina is a walled maze of souks, riads, and workshops that has changed little in centuries, even as the new city grows around it. The pace shifts with the light: quiet mornings in tiled courtyards, chaotic afternoons in the dye souks, and the nightly theatre of Jemaa el-Fnaa as the sun drops.",
    highlights: [
      "Getting deliberately lost in the souks",
      "Mint tea on a riad rooftop at sunset",
      "The cobalt-blue gardens of Majorelle",
    ],
    famousPlaces: [
      {
        name: "Jemaa el-Fnaa",
        imageQuery: "Jemaa el-Fnaa square Marrakech night",
        blurb:
          "The main square turns into an open-air theatre after dark, with food stalls, musicians, and storytellers. By day it's calmer, with juice stands and snake charmers.",
      },
      {
        name: "Jardin Majorelle",
        imageQuery: "Jardin Majorelle blue garden Marrakech",
        blurb:
          "A cobalt-blue villa and garden of cacti and bamboo, restored by Yves Saint Laurent. Arrive at opening to avoid the crowds.",
      },
      {
        name: "Bahia Palace",
        imageQuery: "Bahia Palace Marrakech courtyard",
        blurb:
          "A 19th-century palace of carved cedar ceilings and zellige tilework, built around a series of quiet courtyards.",
      },
      {
        name: "Koutoubia Mosque",
        imageQuery: "Koutoubia Mosque minaret Marrakech",
        blurb:
          "The city's tallest structure and the model for the Giralda in Seville. Non-Muslims can't enter, but the surrounding gardens are open to all.",
      },
    ],
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    lat: -34.6037,
    lon: -58.3816,
    tagline: "Tango, steak, and grand European boulevards in South America.",
    imageQuery: "Buenos Aires Argentina street architecture",
    region: "South America",
    bestTime: "March–May or September–November (spring/autumn)",
    idealStay: "4 days",
    description:
      "Buenos Aires earned its nickname 'the Paris of South America' through wide boulevards and Beaux-Arts facades, but the culture is entirely its own — tango born in its working docks, steakhouses on every corner, and a café culture built for long, unhurried conversations.",
    highlights: [
      "A tango show in San Telmo",
      "Sunday antiques market on Defensa street",
      "Steak and Malbec in Palermo",
    ],
    famousPlaces: [
      {
        name: "La Boca & Caminito",
        imageQuery: "Caminito La Boca colorful houses",
        blurb:
          "A working-class port neighborhood known for brightly painted houses and street tango performances along the Caminito.",
      },
      {
        name: "Recoleta Cemetery",
        imageQuery: "Recoleta Cemetery Buenos Aires",
        blurb:
          "A city of elaborate mausoleums housing Argentina's elite, including Eva Perón. The scale of the sculpture rivals any museum.",
      },
      {
        name: "Teatro Colón",
        imageQuery: "Teatro Colon Buenos Aires interior",
        blurb:
          "One of the world's great opera houses, with acoustics acclaimed on par with Vienna and Milan. Guided tours run when there's no rehearsal.",
      },
      {
        name: "San Telmo Market",
        imageQuery: "San Telmo market Buenos Aires",
        blurb:
          "A cobblestone neighborhood with a Sunday street fair stretching for blocks — antiques, tango dancers, and parrilla smoke in the air.",
      },
    ],
  },
  {
    id: "queenstown",
    name: "Queenstown",
    country: "New Zealand",
    lat: -45.0312,
    lon: 168.6626,
    tagline: "Mountains, fjords, and the birthplace of bungee jumping.",
    imageQuery: "Queenstown New Zealand lake mountains",
    region: "Oceania",
    bestTime: "December–February (summer) or June–August (ski season)",
    idealStay: "4–5 days",
    description:
      "Set on the shore of Lake Wakatipu beneath the jagged Remarkables range, Queenstown built its reputation on adrenaline — it's where commercial bungee jumping began — but it's just as suited to slow drives through vineyard country or a cruise into Milford Sound.",
    highlights: [
      "Milford Sound cruise through Fiordland",
      "Bungee jumping at the Kawarau Gorge",
      "Wine tasting in the Gibbston Valley",
    ],
    famousPlaces: [
      {
        name: "Milford Sound",
        imageQuery: "Milford Sound New Zealand fjord",
        blurb:
          "A fjord carved by glaciers, reachable by a scenic three-hour drive from Queenstown or a scenic flight. Waterfalls run down sheer cliffs after rain.",
      },
      {
        name: "Skyline Gondola",
        imageQuery: "Skyline Gondola Queenstown view",
        blurb:
          "A cable car up Bob's Peak for a panoramic view over the lake and the Remarkables — and a luge track back down for the adventurous.",
      },
      {
        name: "Kawarau Gorge Bridge",
        imageQuery: "Kawarau Gorge bungee bridge",
        blurb:
          "The site of the world's first commercial bungee operation, still running jumps 43 meters above the river.",
      },
      {
        name: "Glenorchy",
        imageQuery: "Glenorchy New Zealand lake",
        blurb:
          "A small settlement at the head of the lake, the gateway to several Lord of the Rings filming locations and the Routeburn Track.",
      },
    ],
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    lat: 38.7223,
    lon: -9.1393,
    tagline: "Hills, trams, and light that photographers chase for years.",
    imageQuery: "Lisbon Portugal tram tiles",
    region: "Europe",
    bestTime: "March–May or September–October",
    idealStay: "3–4 days",
    description:
      "Built across seven hills on the Tagus estuary, Lisbon rewards walking — even when it means climbing. Tiled facades catch the coastal light, yellow trams grind up impossibly steep streets, and fado drifts out of small restaurants in the Alfama after dark.",
    highlights: [
      "Riding tram 28 through the old neighborhoods",
      "Custard tarts at the original Pastéis de Belém",
      "Fado music in an Alfama tasca",
    ],
    famousPlaces: [
      {
        name: "Belém Tower",
        imageQuery: "Belem Tower Lisbon",
        blurb:
          "A 16th-century fortress marking the point from which Portuguese explorers set out, now a UNESCO World Heritage Site.",
      },
      {
        name: "Alfama District",
        imageQuery: "Alfama district Lisbon narrow streets",
        blurb:
          "Lisbon's oldest neighborhood, a maze of narrow lanes that survived the 1755 earthquake, still home to fado houses and viewpoints.",
      },
      {
        name: "Jerónimos Monastery",
        imageQuery: "Jeronimos Monastery Lisbon",
        blurb:
          "An elaborate Manueline monastery funded by the spice trade, housing the tomb of Vasco da Gama.",
      },
      {
        name: "Miradouro da Senhora do Monte",
        imageQuery: "Lisbon viewpoint sunset",
        blurb:
          "The highest of Lisbon's many miradouros, with an uninterrupted view over the castle and the river beyond.",
      },
    ],
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    lat: -33.9249,
    lon: 18.4241,
    tagline: "A table-topped mountain between two oceans.",
    imageQuery: "Cape Town South Africa Table Mountain",
    region: "Africa",
    bestTime: "November–March (summer, dry season)",
    idealStay: "4–5 days",
    description:
      "Cape Town sits where the mountains meet the sea in almost every direction, with Table Mountain presiding over a city of surf beaches, vineyards a short drive out, and a working harbor turned waterfront. Few cities pack this much landscape into a single skyline.",
    highlights: [
      "Cable car to the top of Table Mountain",
      "Penguins at Boulders Beach",
      "Wine tasting in Stellenbosch and Franschhoek",
    ],
    famousPlaces: [
      {
        name: "Table Mountain",
        imageQuery: "Table Mountain Cape Town cable car",
        blurb:
          "A flat-topped massif overlooking the city, reachable by a rotating cable car or a half-day hike up Platteklip Gorge.",
      },
      {
        name: "Robben Island",
        imageQuery: "Robben Island Cape Town",
        blurb:
          "The island prison where Nelson Mandela was held for 18 years, now a museum reached by ferry from the V&A Waterfront.",
      },
      {
        name: "Boulders Beach",
        imageQuery: "Boulders Beach penguins Cape Town",
        blurb:
          "A sheltered beach south of the city that's home to a colony of African penguins, viewable from boardwalks.",
      },
      {
        name: "Cape of Good Hope",
        imageQuery: "Cape of Good Hope South Africa",
        blurb:
          "The rocky southwestern tip of the Cape Peninsula, within a nature reserve of ostriches, baboons, and dramatic coastal cliffs.",
      },
    ],
  },
  {
    id: "kyoto2placeholder", // removed below
    remove: true,
  },
  {
    id: "banff",
    name: "Banff",
    country: "Canada",
    lat: 51.1784,
    lon: -115.5708,
    tagline: "Turquoise lakes set against the Canadian Rockies.",
    imageQuery: "Banff Canada Lake Louise mountains",
    region: "North America",
    bestTime: "June–September (hiking) or December–March (skiing)",
    idealStay: "4 days",
    description:
      "Canada's first national park centers on a small mountain town surrounded by glacier-fed lakes in impossible shades of turquoise. It's compact enough to base from one hotel and still reach several iconic viewpoints by car within a day.",
    highlights: [
      "Canoeing on Lake Louise at sunrise",
      "The gondola up Sulphur Mountain",
      "Driving the Icefields Parkway to Jasper",
    ],
    famousPlaces: [
      {
        name: "Lake Louise",
        imageQuery: "Lake Louise Banff turquoise",
        blurb:
          "A glacier-fed lake beneath the Victoria Glacier, at its most vivid shade of blue in mid-summer. Arrive before 7am to find parking.",
      },
      {
        name: "Moraine Lake",
        imageQuery: "Moraine Lake Banff Valley of the Ten Peaks",
        blurb:
          "Set in the Valley of the Ten Peaks, this is one of the most photographed lakes in Canada — a short, steep climb to the rockpile viewpoint is worth it.",
      },
      {
        name: "Sulphur Mountain",
        imageQuery: "Sulphur Mountain gondola Banff",
        blurb:
          "A gondola ride to a boardwalk summit with views over the Bow Valley and the town of Banff below.",
      },
      {
        name: "Johnston Canyon",
        imageQuery: "Johnston Canyon Banff waterfall",
        blurb:
          "A catwalk trail bolted to canyon walls leads to a lower and upper waterfall, one of the park's most accessible hikes.",
      },
    ],
  },
  {
    id: "jaipur",
    name: "Jaipur",
    country: "India",
    lat: 26.9124,
    lon: 75.7873,
    tagline: "The Pink City of forts, palaces, and painted bazaars.",
    imageQuery: "Jaipur India pink city palace",
    region: "Asia",
    bestTime: "October–March, before the summer heat sets in",
    idealStay: "3 days",
    description:
      "Founded in 1727 as a planned capital, Jaipur was painted terracotta pink in 1876 to welcome the Prince of Wales, and the color has defined its old city ever since. Hawa Mahal's honeycomb facade, the astronomical instruments of Jantar Mantar, and the hilltop Amber Fort make it the anchor of Rajasthan's Golden Triangle.",
    highlights: [
      "Sunrise at Hawa Mahal before the street traffic builds",
      "An elephant or jeep ride up to Amber Fort",
      "Bargaining for block-printed textiles in the Bapu Bazaar",
    ],
    famousPlaces: [
      {
        name: "Amber Fort",
        imageQuery: "Amber Fort Jaipur",
        blurb:
          "A hilltop fort of mirrored halls and courtyards overlooking Maota Lake, best reached early morning by jeep before the heat and crowds arrive.",
      },
      {
        name: "Hawa Mahal",
        imageQuery: "Hawa Mahal Jaipur pink facade",
        blurb:
          "A five-story sandstone screen of 953 latticed windows, built so royal women could watch street life unseen. Best photographed from the tea house across the road.",
      },
      {
        name: "City Palace",
        imageQuery: "City Palace Jaipur courtyard",
        blurb:
          "Still partly home to Jaipur's royal family, with museum wings of textiles, weapons, and the giant silver urns that once carried Ganges water to England.",
      },
      {
        name: "Jantar Mantar",
        imageQuery: "Jantar Mantar Jaipur observatory",
        blurb:
          "An 18th-century astronomical observatory of oversized stone instruments, including the world's largest stone sundial, accurate to two seconds.",
      },
    ],
  },
  {
    id: "agra",
    name: "Agra",
    country: "India",
    lat: 27.1767,
    lon: 78.0081,
    tagline: "Home to the Taj Mahal and the Mughal empire's finest stonework.",
    imageQuery: "Taj Mahal Agra India",
    region: "Asia",
    bestTime: "October–March",
    idealStay: "1–2 days",
    description:
      "Agra served as the Mughal capital for over a century, and the empire's obsession with symmetry and inlaid marble reaches its peak at the Taj Mahal, built by Shah Jahan as a mausoleum for his wife. The city's fort and satellite tomb of Itmad-ud-Daulah round out one of the densest clusters of Mughal architecture anywhere.",
    highlights: [
      "The Taj Mahal at sunrise, before the day-trip crowds",
      "Red sandstone ramparts of Agra Fort",
      "The 'Baby Taj' at Itmad-ud-Daulah's tomb",
    ],
    famousPlaces: [
      {
        name: "Taj Mahal",
        imageQuery: "Taj Mahal marble dome sunrise",
        blurb:
          "A white marble mausoleum inlaid with semi-precious stones, completed in 1653. Tickets are timed and the west side offers the best light in late afternoon.",
      },
      {
        name: "Agra Fort",
        imageQuery: "Agra Fort red sandstone walls",
        blurb:
          "A walled Mughal fortress-palace of red sandstone, from whose Musamman Burj tower Shah Jahan is said to have gazed at the Taj in his final years.",
      },
      {
        name: "Itmad-ud-Daulah's Tomb",
        imageQuery: "Itmad-ud-Daulah tomb Agra",
        blurb:
          "Known as the 'Baby Taj,' this smaller marble tomb pioneered the inlay work later used on the Taj Mahal, with far fewer visitors.",
      },
      {
        name: "Mehtab Bagh",
        imageQuery: "Mehtab Bagh garden Taj Mahal view",
        blurb:
          "A riverside garden directly across the Yamuna from the Taj Mahal, giving an uninterrupted view of the monument reflected at dusk.",
      },
    ],
  },
  {
    id: "varanasi",
    name: "Varanasi",
    country: "India",
    lat: 25.3176,
    lon: 82.9739,
    tagline: "Ghats, ritual, and one of the world's oldest living cities.",
    imageQuery: "Varanasi India ghats Ganges",
    region: "Asia",
    bestTime: "October–March",
    idealStay: "2–3 days",
    description:
      "Set on the banks of the Ganges, Varanasi has drawn pilgrims for thousands of years to bathe, cremate the dead, and mark life's passages on its stone ghats. A sunrise boat ride past the riverfront and the nightly fire ritual of Ganga Aarti are as close as the city comes to a single defining image, though its narrow lanes hold far more.",
    highlights: [
      "A sunrise boat ride along the ghats",
      "The evening Ganga Aarti fire ceremony at Dashashwamedh Ghat",
      "Getting lost in the alleys of the old city near Vishwanath Temple",
    ],
    famousPlaces: [
      {
        name: "Dashashwamedh Ghat",
        imageQuery: "Dashashwamedh Ghat Varanasi Aarti",
        blurb:
          "The city's main ghat, where priests perform a synchronized fire ceremony to the Ganges every evening, watched from the steps and from boats on the river.",
      },
      {
        name: "Manikarnika Ghat",
        imageQuery: "Manikarnika Ghat Varanasi",
        blurb:
          "One of Hinduism's holiest cremation grounds, where funeral pyres burn continuously. Approach respectfully and avoid unofficial 'guides' who solicit donations.",
      },
      {
        name: "Kashi Vishwanath Temple",
        imageQuery: "Kashi Vishwanath Temple Varanasi",
        blurb:
          "One of the twelve Jyotirlinga shrines to Shiva, rebuilt in its current form in 1780 and topped with a gold-plated spire.",
      },
      {
        name: "Sarnath",
        imageQuery: "Sarnath stupa Buddhist site",
        blurb:
          "A short drive from the ghats, the deer park where the Buddha gave his first sermon, marked by the large brick Dhamek Stupa.",
      },
    ],
  },
  {
    id: "kerala-backwaters",
    name: "Alleppey & the Backwaters",
    country: "India",
    lat: 9.4981,
    lon: 76.3388,
    tagline: "A network of palm-lined lagoons drifting through Kerala.",
    imageQuery: "Kerala backwaters houseboat",
    region: "Asia",
    bestTime: "September–March, after the monsoon",
    idealStay: "2–3 days",
    description:
      "Kerala's backwaters are a 900-kilometer network of lagoons, canals, and rivers running parallel to the Arabian Sea coast, traditionally worked by rice-barge cargo boats. Converted kettuvallam houseboats now drift the same channels past coconut groves and paddy fields at a pace set entirely by the water.",
    highlights: [
      "An overnight stay on a converted kettuvallam houseboat",
      "Kerala seafood cooked fresh onboard",
      "Village life along the narrower canals of Kumarakom",
    ],
    famousPlaces: [
      {
        name: "Alleppey Houseboats",
        imageQuery: "Alleppey houseboat backwaters sunset",
        blurb:
          "Converted rice barges with thatched roofs cruise the main backwater channels, most itineraries covering one night with meals cooked onboard.",
      },
      {
        name: "Kumarakom Bird Sanctuary",
        imageQuery: "Kumarakom bird sanctuary Kerala",
        blurb:
          "A wetland reserve on Vembanad Lake that draws migratory birds from as far as the Himalayas and Siberia between November and February.",
      },
      {
        name: "Vembanad Lake",
        imageQuery: "Vembanad Lake Kerala",
        blurb:
          "India's longest lake, the main artery of the backwater system, hosting the Nehru Trophy snake boat race every August.",
      },
      {
        name: "Kuttanad Paddy Fields",
        imageQuery: "Kuttanad paddy fields below sea level",
        blurb:
          "Farmland reclaimed below sea level and held back by dykes, one of the few places in the world where rice is grown beneath the waterline.",
      },
    ],
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    lat: 15.2993,
    lon: 74.1240,
    tagline: "Portuguese churches, spice-trade history, and Arabian Sea beaches.",
    imageQuery: "Goa India beach coast",
    region: "Asia",
    bestTime: "November–February",
    idealStay: "3–5 days",
    description:
      "Four and a half centuries of Portuguese rule left Goa with whitewashed churches, azulejo tiles, and a slower rhythm than the rest of the coast, layered onto beaches that range from backpacker strips to quiet fishing coves. Old Goa's churches sit inland from a shoreline of shacks, sunset cruises, and Friday night markets.",
    highlights: [
      "Basilica of Bom Jesus and the churches of Old Goa",
      "Sunset over Palolem or Agonda beach",
      "A Wednesday flea market in Anjuna",
    ],
    famousPlaces: [
      {
        name: "Basilica of Bom Jesus",
        imageQuery: "Basilica of Bom Jesus Goa",
        blurb:
          "A UNESCO-listed baroque church holding the remains of St. Francis Xavier, at the center of the Old Goa church complex.",
      },
      {
        name: "Fort Aguada",
        imageQuery: "Fort Aguada Goa lighthouse",
        blurb:
          "A 17th-century Portuguese fort and lighthouse on a headland above Sinquerim Beach, built to guard against Dutch and Maratha raids.",
      },
      {
        name: "Palolem Beach",
        imageQuery: "Palolem Beach Goa",
        blurb:
          "A curved, palm-fringed cove in South Goa known for calmer water and beach huts rather than the nightlife of the north.",
      },
      {
        name: "Anjuna Flea Market",
        imageQuery: "Anjuna flea market Goa",
        blurb:
          "A Wednesday institution since the hippie era, selling textiles, jewelry, and spices along the clifftop above Anjuna Beach.",
      },
    ],
  },
  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    lat: 34.1526,
    lon: 77.5771,
    tagline: "High-altitude desert, Buddhist monasteries, and the road to Pangong.",
    imageQuery: "Ladakh India Himalayas monastery",
    region: "Asia",
    bestTime: "May–September, when the mountain passes are open",
    idealStay: "5–7 days",
    description:
      "Wedged between the Karakoram and Himalayan ranges, Ladakh is a high-altitude desert of barren peaks and turquoise lakes, culturally closer to Tibet than the rest of India. Leh serves as the base for whitewashed gompas clinging to cliffsides and some of the highest motorable roads on earth.",
    highlights: [
      "The changing colors of Pangong Tso through the day",
      "Prayer flags and murals at Thiksey Monastery",
      "Crossing Khardung La, one of the world's highest motorable passes",
    ],
    famousPlaces: [
      {
        name: "Pangong Tso",
        imageQuery: "Pangong Tso lake Ladakh",
        blurb:
          "A glacial lake stretching into Tibet, shifting between blue, green, and grey through the day depending on the light and time of year.",
      },
      {
        name: "Thiksey Monastery",
        imageQuery: "Thiksey Monastery Ladakh",
        blurb:
          "A twelve-story gompa built in the style of Lhasa's Potala Palace, with a two-story statue of the future Buddha and dawn prayer ceremonies open to visitors.",
      },
      {
        name: "Nubra Valley",
        imageQuery: "Nubra Valley Ladakh sand dunes",
        blurb:
          "A high desert valley beyond Khardung La with sand dunes, double-humped Bactrian camels, and the monasteries of Diskit and Hunder.",
      },
      {
        name: "Leh Palace",
        imageQuery: "Leh Palace Ladakh",
        blurb:
          "A nine-story former royal palace overlooking Leh, modeled on Lhasa's Potala and built in the 17th century, now partly restored and open to climb.",
      },
    ],
  },
  {
    id: "udaipur",
    name: "Udaipur",
    country: "India",
    lat: 24.5854,
    lon: 73.7125,
    tagline: "Marble palaces afloat on a lake in the Aravalli hills.",
    imageQuery: "Udaipur India lake palace",
    region: "Asia",
    bestTime: "October–March",
    idealStay: "2–3 days",
    description:
      "Known as the City of Lakes, Udaipur built its palaces to be seen from — and reflected in — the water, most famously the Lake Palace floating at the center of Lake Pichola. Narrow lanes of the old city rise around it, filled with havelis, rooftop cafés, and views that made it a favorite backdrop for James Bond.",
    highlights: [
      "A boat ride on Lake Pichola at sunset",
      "The City Palace complex's courtyards and mirrored halls",
      "Rooftop dinner overlooking the lit-up Lake Palace",
    ],
    famousPlaces: [
      {
        name: "City Palace, Udaipur",
        imageQuery: "City Palace Udaipur",
        blurb:
          "A sprawling complex of courtyards, balconies, and mirrored chambers built up over 400 years by successive maharanas, overlooking Lake Pichola.",
      },
      {
        name: "Lake Pichola",
        imageQuery: "Lake Pichola Udaipur sunset",
        blurb:
          "An artificial lake at the city's center, with the marble Lake Palace and Jag Mandir island both reachable by evening boat rides.",
      },
      {
        name: "Jagdish Temple",
        imageQuery: "Jagdish Temple Udaipur",
        blurb:
          "A tall, intricately carved Indo-Aryan temple to Vishnu just outside the City Palace gates, active with worshippers throughout the day.",
      },
      {
        name: "Saheliyon ki Bari",
        imageQuery: "Saheliyon ki Bari garden Udaipur",
        blurb:
          "A courtly garden of fountains, lotus pools, and marble elephants, built for the ladies of the royal court.",
      },
    ],
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    lat: 48.8566,
    lon: 2.3522,
    tagline: "Boulevards, museums, and the river that ties them together.",
    imageQuery: "Paris France Eiffel Tower Seine",
    region: "Europe",
    bestTime: "April–June or September–October",
    idealStay: "4–5 days",
    description:
      "Paris arranged itself around the Seine and Haussmann's wide boulevards into a city built for walking between world-class museums, café terraces, and neighborhoods that each keep their own character. The Louvre and Musée d'Orsay alone could take days, but much of the city's appeal is simply in the streets between them.",
    highlights: [
      "The Louvre's less-crowded wings beyond the Mona Lisa",
      "A picnic on the Champ de Mars facing the Eiffel Tower",
      "Wandering Montmartre above the crowds of Sacré-Cœur",
    ],
    famousPlaces: [
      {
        name: "Eiffel Tower",
        imageQuery: "Eiffel Tower Paris",
        blurb:
          "Built for the 1889 World's Fair and meant to be temporary, it's now Paris's defining silhouette, best seen lit up from Trocadéro at night.",
      },
      {
        name: "Louvre Museum",
        imageQuery: "Louvre Museum Paris pyramid",
        blurb:
          "The world's most-visited museum, housed in a former royal palace, with I.M. Pei's glass pyramid marking the main entrance.",
      },
      {
        name: "Notre-Dame Cathedral",
        imageQuery: "Notre Dame Cathedral Paris",
        blurb:
          "A Gothic cathedral on the Île de la Cité, reopened in 2024 after a five-year restoration following the 2019 fire.",
      },
      {
        name: "Montmartre & Sacré-Cœur",
        imageQuery: "Montmartre Sacre Coeur Paris",
        blurb:
          "A hilltop village-within-the-city of cobbled lanes and artists' squares, crowned by the white domes of the Sacré-Cœur basilica.",
      },
    ],
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    lat: 41.9028,
    lon: 12.4964,
    tagline: "Two and a half thousand years of history stacked in one city.",
    imageQuery: "Rome Italy Colosseum",
    region: "Europe",
    bestTime: "April–May or September–October",
    idealStay: "4 days",
    description:
      "Rome layers empires on top of each other — ancient ruins, Renaissance basilicas, and a Baroque city center all within walking distance of each other, with a sovereign Vatican State tucked inside. Meals stretch long, fountains anchor every piazza, and history is simply underfoot.",
    highlights: [
      "The Colosseum and Roman Forum at opening time",
      "Climbing the dome of St. Peter's Basilica",
      "Gelato and a fountain-side evening in Piazza Navona",
    ],
    famousPlaces: [
      {
        name: "Colosseum",
        imageQuery: "Colosseum Rome ancient amphitheater",
        blurb:
          "The largest amphitheater ever built, once host to gladiatorial contests for up to 80,000 spectators. Book timed entry ahead to skip the line.",
      },
      {
        name: "Vatican Museums & Sistine Chapel",
        imageQuery: "Sistine Chapel Vatican",
        blurb:
          "Miles of papal art collections culminating in Michelangelo's ceiling, best visited early morning or on a late-opening evening slot.",
      },
      {
        name: "Trevi Fountain",
        imageQuery: "Trevi Fountain Rome",
        blurb:
          "An 18th-century Baroque fountain where tradition holds that a coin thrown over the shoulder guarantees a return to Rome.",
      },
      {
        name: "Roman Forum & Palatine Hill",
        imageQuery: "Roman Forum ruins",
        blurb:
          "The political heart of ancient Rome, now a field of columns and arches, overlooked by the hill where the city was first founded.",
      },
    ],
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    lat: 36.3932,
    lon: 25.4615,
    tagline: "Whitewashed villages on the rim of a volcanic caldera.",
    imageQuery: "Santorini Greece white buildings caldera",
    region: "Europe",
    bestTime: "May–June or September–October",
    idealStay: "3 days",
    description:
      "Santorini is what's left of a volcanic eruption around 1600 BCE that blew out the island's center, leaving a crescent of cliffs that Oia and Fira now cling to in white plaster and blue domes. Sunset draws crowds to the caldera edge every evening, but quieter black-sand beaches and vineyards sit on the island's other side.",
    highlights: [
      "Sunset over the caldera from Oia",
      "Wine tasting among volcanic-soil vineyards",
      "The black sand beaches of Perissa and Kamari",
    ],
    famousPlaces: [
      {
        name: "Oia",
        imageQuery: "Oia Santorini blue domes sunset",
        blurb:
          "The island's most photographed village, its blue-domed churches and cliffside houses drawing crowds for sunset from the old castle ruins.",
      },
      {
        name: "Fira",
        imageQuery: "Fira Santorini caldera view",
        blurb:
          "The island's capital, perched 300 meters above the caldera, connected to the old port below by a cable car or a 588-step mule path.",
      },
      {
        name: "Akrotiri Archaeological Site",
        imageQuery: "Akrotiri ruins Santorini",
        blurb:
          "A Bronze Age settlement preserved under volcanic ash, sometimes called the 'Minoan Pompeii,' with multi-story buildings still standing.",
      },
      {
        name: "Red Beach",
        imageQuery: "Red Beach Santorini",
        blurb:
          "A beach framed by dramatic red and black volcanic cliffs near Akrotiri, reached by a short walk from the parking area.",
      },
    ],
  },
  {
    id: "cairo",
    name: "Cairo & Giza",
    country: "Egypt",
    lat: 30.0444,
    lon: 31.2357,
    tagline: "The last standing wonder of the ancient world, on the city's edge.",
    imageQuery: "Giza Pyramids Cairo Egypt",
    region: "Africa",
    bestTime: "October–April, avoiding the summer heat",
    idealStay: "3–4 days",
    description:
      "Cairo sprawls along the Nile with the Giza pyramid complex now almost at its doorstep, the only one of the ancient world's Seven Wonders still standing. Beyond Giza, the Egyptian Museum and the medieval alleys of Islamic Cairo hold five thousand years of history in a single, chaotic, unmissable city.",
    highlights: [
      "Sunrise or sunset at the Pyramids of Giza",
      "The treasures of Tutankhamun at the Egyptian Museum",
      "Haggling for spices in Khan el-Khalili bazaar",
    ],
    famousPlaces: [
      {
        name: "Pyramids of Giza",
        imageQuery: "Great Pyramid Giza Sphinx",
        blurb:
          "The Great Pyramid of Khufu and its companions have stood for over 4,500 years, with the Sphinx crouched nearby facing the rising sun.",
      },
      {
        name: "Egyptian Museum",
        imageQuery: "Egyptian Museum Cairo artifacts",
        blurb:
          "Home to Tutankhamun's gold death mask and thousands of pharaonic artifacts, most now shared with the newer Grand Egyptian Museum near Giza.",
      },
      {
        name: "Khan el-Khalili",
        imageQuery: "Khan el-Khalili bazaar Cairo",
        blurb:
          "A medieval bazaar of narrow alleys selling spices, lanterns, and jewelry, in business continuously since the 14th century.",
      },
      {
        name: "Islamic Cairo & Al-Azhar Mosque",
        imageQuery: "Al-Azhar Mosque Islamic Cairo",
        blurb:
          "A dense old quarter of minarets and madrasas centered on Al-Azhar, one of the world's oldest continuously operating universities.",
      },
    ],
  },
  {
    id: "petra",
    name: "Petra",
    country: "Jordan",
    lat: 30.3285,
    lon: 35.4444,
    tagline: "A rose-red city carved into desert canyon walls.",
    imageQuery: "Petra Jordan Treasury canyon",
    region: "Asia",
    bestTime: "March–May or September–November",
    idealStay: "2 days",
    description:
      "Petra was the capital of the Nabataean kingdom, a trading power that carved an entire city of tombs and temples directly into sandstone cliffs. Visitors reach it through the narrow Siq canyon, which opens suddenly onto the facade of the Treasury — one of the most dramatic reveals of any archaeological site.",
    highlights: [
      "Walking the Siq canyon to the Treasury reveal",
      "Climbing to the Monastery for fewer crowds",
      "Petra by Night, lit entirely by candles",
    ],
    famousPlaces: [
      {
        name: "The Treasury (Al-Khazneh)",
        imageQuery: "Petra Treasury facade",
        blurb:
          "Petra's most iconic facade, carved directly into rose-colored sandstone, first glimpsed through the narrow slot of the Siq canyon.",
      },
      {
        name: "The Monastery (Ad Deir)",
        imageQuery: "Petra Monastery Ad Deir",
        blurb:
          "An even larger rock-cut facade than the Treasury, reached by roughly 800 steps up the mountainside, with far fewer visitors at the top.",
      },
      {
        name: "The Siq",
        imageQuery: "Petra Siq canyon walkway",
        blurb:
          "A narrow, kilometer-long natural canyon that serves as Petra's dramatic main entrance, its walls rising up to 80 meters on either side.",
      },
      {
        name: "Royal Tombs",
        imageQuery: "Petra Royal Tombs",
        blurb:
          "A cluster of elaborate multi-story tomb facades cut into the cliff face opposite the old city center, striking in the late afternoon light.",
      },
    ],
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    lat: -13.1631,
    lon: -72.5450,
    tagline: "An Incan citadel suspended between two Andean peaks.",
    imageQuery: "Machu Picchu Peru Andes",
    region: "South America",
    bestTime: "May–September (dry season)",
    idealStay: "2 days plus travel from Cusco",
    description:
      "Built in the 15th century and abandoned within a century, Machu Picchu escaped Spanish discovery entirely and stayed largely unknown outside the region until 1911. Terraced fields and stone temples sit on a narrow ridge between Huayna Picchu and the Urubamba River gorge far below, reachable by train and the classic multi-day Inca Trail.",
    highlights: [
      "Sunrise over the ruins from the Sun Gate",
      "Hiking Huayna Picchu for the classic postcard view",
      "The multi-day trek along the Inca Trail",
    ],
    famousPlaces: [
      {
        name: "Machu Picchu Citadel",
        imageQuery: "Machu Picchu ruins terraces",
        blurb:
          "Stone temples, plazas, and agricultural terraces built without mortar, laid out to align with astronomical events at key points in the year.",
      },
      {
        name: "Huayna Picchu",
        imageQuery: "Huayna Picchu peak trail",
        blurb:
          "The steep peak overlooking the ruins in classic photographs, with a limited daily permit needed to climb its narrow Incan stairways.",
      },
      {
        name: "Sun Gate (Inti Punku)",
        imageQuery: "Sun Gate Inca Trail Machu Picchu",
        blurb:
          "The original ceremonial entrance to Machu Picchu along the Inca Trail, framing the first full view of the citadel below.",
      },
      {
        name: "Sacred Valley",
        imageQuery: "Sacred Valley Peru Incan",
        blurb:
          "The fertile Urubamba valley below, dotted with other Incan sites like Ollantaytambo and Pisac, usually visited en route from Cusco.",
      },
    ],
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    lat: 13.7563,
    lon: 100.5018,
    tagline: "Gilded temples, river life, and some of the world's best street food.",
    imageQuery: "Bangkok Thailand temple skyline",
    region: "Asia",
    bestTime: "November–February",
    idealStay: "3–4 days",
    description:
      "Bangkok runs on its river and canals as much as its roads, with longtail boats connecting gleaming temples to floating markets and a skyline of rooftop bars. Street food stalls operate around the clock, and the contrast between the Grand Palace's gold spires and the neon of Sukhumvit sums up the city's range.",
    highlights: [
      "The Grand Palace and Wat Phra Kaew at opening time",
      "A longtail boat through the Thonburi canals",
      "Street food crawl through Chinatown after dark",
    ],
    famousPlaces: [
      {
        name: "Grand Palace & Wat Phra Kaew",
        imageQuery: "Grand Palace Bangkok Wat Phra Kaew",
        blurb:
          "The former royal residence and its temple housing the revered Emerald Buddha, covered in gold leaf and colored glass mosaics.",
      },
      {
        name: "Wat Arun",
        imageQuery: "Wat Arun Temple of Dawn Bangkok",
        blurb:
          "The Temple of Dawn rises from the west bank of the Chao Phraya, its spire encrusted with porcelain fragments and best seen at sunset from the opposite shore.",
      },
      {
        name: "Chatuchak Weekend Market",
        imageQuery: "Chatuchak Weekend Market Bangkok",
        blurb:
          "One of the world's largest markets, with over 8,000 stalls of clothing, antiques, and food spread across a maze of covered lanes.",
      },
      {
        name: "Chinatown (Yaowarat)",
        imageQuery: "Yaowarat Chinatown Bangkok street food",
        blurb:
          "A dense strip of street food stalls, gold shops, and neon signage that comes alive after dark, best explored hungry.",
      },
    ],
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    lat: -33.8688,
    lon: 151.2093,
    tagline: "A harbor city built around its opera house and beaches.",
    imageQuery: "Sydney Australia Opera House harbor",
    region: "Oceania",
    bestTime: "September–November or March–May",
    idealStay: "4 days",
    description:
      "Sydney wraps around one of the world's great natural harbors, with the Opera House and Harbour Bridge facing each other across the water and surf beaches a short bus ride from downtown. The coastal walk from Bondi to Coogee threads past cliffs and rock pools, while the harbor itself is best seen from a ferry deck.",
    highlights: [
      "Climbing the Harbour Bridge or walking beneath it",
      "The coastal walk from Bondi to Coogee",
      "A ferry to Manly for the view back at the skyline",
    ],
    famousPlaces: [
      {
        name: "Sydney Opera House",
        imageQuery: "Sydney Opera House harbor",
        blurb:
          "Jørn Utzon's sail-shaped landmark on Bennelong Point, best appreciated from a harbor ferry or the Botanic Garden walkway alongside it.",
      },
      {
        name: "Sydney Harbour Bridge",
        imageQuery: "Sydney Harbour Bridge climb",
        blurb:
          "Nicknamed 'the Coathanger,' it can be walked across for free or climbed to the summit on a guided BridgeClimb for harbor views in every direction.",
      },
      {
        name: "Bondi Beach",
        imageQuery: "Bondi Beach Sydney",
        blurb:
          "Australia's most famous beach, backed by cafés and an ocean pool, with a scenic coastal path running south to Coogee.",
      },
      {
        name: "The Rocks",
        imageQuery: "The Rocks Sydney historic district",
        blurb:
          "Sydney's oldest neighborhood, with cobbled lanes, converted warehouses, and a weekend market beneath the Harbour Bridge's southern pylon.",
      },
    ],
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    lat: 25.2048,
    lon: 55.2708,
    tagline: "Desert dunes beside the world's tallest skyline.",
    imageQuery: "Dubai UAE skyline Burj Khalifa",
    region: "Asia",
    bestTime: "November–March",
    idealStay: "3–4 days",
    description:
      "Dubai turned a small trading port into a skyline of superlatives within a couple of decades, and it still keeps building — the tallest tower, some of the largest malls, and artificial islands shaped like palm fronds. Old Dubai's creek and gold souks remain a short trip from the glass towers, a reminder of what preceded them.",
    highlights: [
      "The observation deck of the Burj Khalifa at sunset",
      "An abra ride across Dubai Creek to the souks",
      "A desert safari with dune bashing and a Bedouin camp dinner",
    ],
    famousPlaces: [
      {
        name: "Burj Khalifa",
        imageQuery: "Burj Khalifa Dubai tower",
        blurb:
          "The world's tallest building at 828 meters, with observation decks on the 124th, 125th, and 148th floors overlooking the city and the Gulf.",
      },
      {
        name: "Dubai Creek & Gold Souk",
        imageQuery: "Dubai Creek gold souk",
        blurb:
          "The historic waterway that built the city's original pearl and trade economy, still crossed by wooden abras beside the gold and spice souks.",
      },
      {
        name: "Palm Jumeirah",
        imageQuery: "Palm Jumeirah Dubai aerial",
        blurb:
          "An artificial archipelago shaped like a palm tree, lined with resorts and best appreciated from the air or the Palm Tower's observation deck.",
      },
      {
        name: "Dubai Desert Safari",
        imageQuery: "Dubai desert safari dunes",
        blurb:
          "Red dunes on the city's edge, reached for dune-bashing drives, camel rides, and Bedouin-style camp dinners under the stars.",
      },
    ],
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    lat: -8.3405,
    lon: 115.0920,
    tagline: "Rice terraces, sea temples, and volcanic peaks.",
    imageQuery: "Bali Indonesia rice terraces temple",
    region: "Asia",
    bestTime: "April–October (dry season)",
    idealStay: "6–7 days",
    description:
      "Bali packs volcanoes, terraced rice paddies, surf beaches, and Hindu temple ceremonies into an island small enough to circle in a day. Ubud anchors the cultural and spiritual side inland, while the southern peninsula runs from cliffside temples to some of Southeast Asia's best surf breaks.",
    highlights: [
      "Sunrise trek up Mount Batur",
      "The tiered rice terraces of Tegallalang",
      "Sunset at a cliffside temple like Uluwatu",
    ],
    famousPlaces: [
      {
        name: "Tegallalang Rice Terraces",
        imageQuery: "Tegallalang Rice Terraces Bali",
        blurb:
          "Stepped emerald paddies farmed using the centuries-old subak irrigation system, near Ubud and easiest to see in the early morning light.",
      },
      {
        name: "Uluwatu Temple",
        imageQuery: "Uluwatu Temple cliff Bali",
        blurb:
          "A sea temple perched on a sheer cliff above the Indian Ocean, with sunset kecak fire dance performances held most evenings.",
      },
      {
        name: "Mount Batur",
        imageQuery: "Mount Batur sunrise trek Bali",
        blurb:
          "An active volcano climbed overnight for a sunrise summit view across Lake Batur and, on clear days, to Mount Agung beyond.",
      },
      {
        name: "Tanah Lot",
        imageQuery: "Tanah Lot temple Bali sunset",
        blurb:
          "An offshore rock temple reachable on foot at low tide, one of Bali's most photographed sunset spots.",
      },
    ],
  },
].filter((d) => !d.remove);

export const regions = [...new Set(destinations.map((d) => d.region))].sort();
