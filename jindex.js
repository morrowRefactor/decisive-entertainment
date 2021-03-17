'use strict';

const gameIds = [
    {
        game: 'Abomination',
        id: 'D4VUvACEYi'
    },
    {
        game: `Aeon's End: The New Age`,
        id: 'NHwyTtPl00'
    },
    {
        game: `Aeon's End: War Eternal`,
        id: 'SXVWTlUcEb'
    },
    {
        game: 'Age of War',
        id: 'BhwBOPlccN'
    },
    {
        game: 'Alien',
        id: '1Bh46L1okY'
    },
    {
        game: 'Aliens: Another Glorious Day in the Corps',
        id: '3A0PU8a9GD'
    },
    {
        game: 'Apex Theropod',
        id: 'bH7jPgSGCD'
    },
    {
        game: 'Arkham Horror: The Card Game',
        id: '4G32qGJZWs',
        tracker: 'yes'
    },
    {
        game: 'Artifacts, Inc.',
        id: 'gMHerNI10n'
    },
    {
        game: 'Atlantis Rising',
        id: 'J1vBFiqdHG'
    },
    {
        game: 'AvP: The Hunt Begins',
        id: '1FqvPf6ENF'
    },
    {
        game: 'Bananagrams',
        id: 'jvj31CHwLp'
    },
    {
        game: 'Bezzerwizzer',
        id: 'CGvSiSQRHm'
    },
    {
        game: 'Blood Rage',
        id: 'FldbgzsTYH'
    },
    {
        game: 'Bob Ross: Art of Chill',
        id: '2LJTEmU5LY'
    },
    {
        game: 'Boggle',
        id: 'SWPlxUMqNH'
    },
    {
        game: 'Boss Monster',
        id: 'MQcEH8C8Aa'
    },
    {
        game: 'Carcassonne',
        id: 'Lb4YJ13fWH'
    },
    {
        game: 'Champions of Midgard',
        id: 'zBikUpC51l'
    },
    {
        game: 'Chess',
        id: '3hnL2wtWnM'
    },
    {
        game: 'Clank! A Deck-Building Adventure',
        id: '07FXm6tX4o'
    },
    {
        game: 'Clue',
        id: 'YlTmBk5AEH'
    },
    {
        game: 'Codenames',
        id: 'GP7Y2xOUzj'
    },
    {
        game: 'Codenames: Duet',
        id: '9e0nNBNyOU'
    },
    {
        game: 'Crocodile Dentist',
        id: 'jbcwS5FIEm'
    },
    {
        game: 'Cthulhu: Death May Die',
        id: 'cJFWQXpQV2'
    },
    {
        game: 'Cthulhu: The Dunwich Horror',
        id: '6RLVnzKZ8Q'
    },
    {
        game: 'Dead of Winter',
        id: 'y56td93iXw'
    },
    {
        game: 'Dead Panic',
        id: 'hRxHwWFrWn'
    },
    {
        game: 'Dinosaur Island',
        id: 'MVuJW1rWlY'
    },
    {
        game: 'Dominion',
        id: '07N2GoxAFA'
    },
    {
        game: 'Dominoes',
        id: 'IRKe6MEM9F'
    },
    {
        game: 'Everdell',
        id: '8xos44jY7Q'
    },
    {
        game: 'Evolution',
        id: 'AayCJcD6rT'
    },
    {
        game: 'Fantastic Factories',
        id: 'ObFBe4WGSi'
    },
    {
        game: 'Flash Point',
        id: 'CqocZK7pu6'
    },
    {
        game: 'Fury of Dracula',
        id: 'teJTtkbxiX'
    },
    {
        game: 'Fuse',
        id: 'WlJCBUHsjK'
    },
    {
        game: 'Gloomhaven',
        id: 'RLlDWHh7hR'
    },
    {
        game: 'Hero Realms',
        id: 'UfbQPfF6jK'
    },
    {
        game: 'Horizon: Zero Dawn',
        id: 'OrbKL2NgjD'
    },
    {
        game: 'Horrified',
        id: 'jYcMsxI5zP'
    },
    {
        game: 'Jurassic Park',
        id: 'EAw4xRHPq3'
    },
    {
        game: 'Jurassic Park: The Lost World',
        id: 'eM8IUrAcNV'
    },
    {
        game: 'Jurassic World: The Board Game',
        id: 'Ioo5RAilJN'
    },
    {
        game: 'King of New York',
        id: 'qAUo1yn0pG'
    },
    {
        game: 'King of Tokyo',
        id: 'Y2WacykMm5'
    },
    {
        game: 'Labyrinth',
        id: '9PfvxBFXQm'
    },
    {
        game: 'Last Bastion',
        id: 'hit2aBoUSa'
    },
    {
        game: 'Legendary',
        id: '5uqIWPjZZM'
    },
    {
        game: 'Legendary: 007 James Bond',
        id: 'DDu1Smaj8x'
    },
    {
        game: 'Legendary Encounters: Alien',
        id: '40Qb0frFQo'
    },
    {
        game: 'Legendary Encounters: Predator',
        id: 'B3XR0FgDoC'
    },
    {
        game: 'Legendary Encounters: X-Files',
        id: 'UWcvDIqEuB'
    },
    {
        game: `Let's Go Fishing`,
        id: 'YlSkRt5oxR'
    },
    {
        game: 'London Dread',
        id: 'eDXnPtt2PK'
    },
    {
        game: 'Lords of Hellas',
        id: '4KexyZo2cz'
    },
    {
        game: 'Lords of Waterdeep',
        id: 'axOr9uuOwN'
    },
    {
        game: 'Love Letters: Batman',
        id: 'TGhVamZQWF'
    },
    {
        game: 'Mancala',
        id: 'jqer4AvMyC'
    },
    {
        game: 'Mechs vs Minions',
        id: 'fZ8RsZxJVM'
    },
    {
        game: 'Monopoly',
        id: 'fG5Ax8PA7n'
    },
    {
        game: 'Mysterium',
        id: 'nHJNyAWsoo'
    },
    {
        game: 'Nemesis',
        id: 'JdpRadPLi2'
    },
    {
        game: `Odin's Ravens`,
        id: 'r0qi6cfnBn'
    },
    {
        game: 'Omega Virus',
        id: 'HhObXUrmnD'
    },
    {
        game: 'Orleans',
        id: 'pSY1hWs5YH'
    },
    {
        game: 'Paleo',
        id: '1SXUD8Vm7h'
    },
    {
        game: 'Pandemic',
        id: '6FmFeux5xH'
    },
    {
        game: 'Pandemic: Contagion',
        id: '1NVMtpt6KA'
    },
    {
        game: 'Pandemic: Reign of Cthulhu',
        id: 'Jr6iHnx4Mn'
    },
    {
        game: 'Pandemic: Fall of Rome',
        id: 'kSqMntBWP0'
    },
    {
        game: 'Pandemic: Rising Tide',
        id: 'f5xv1LaJcZ'
    },
    {
        game: 'Phase 10',
        id: 'hQLfeykeLS'
    },
    {
        game: 'Photosynthesis',
        id: 'nlcJOyC0SG'
    },
    {
        game: 'Pictionary',
        id: 'XxdwW5tFt6'
    },
    {
        game: 'Project: ELITE',
        id: 'AFPgt1mPDI'
    },
    {
        game: 'Qwixx',
        id: 'pH1UCBs9dO'
    },
    {
        game: 'Risk: 2210 A.D.',
        id: 'hZLDaGKHJ8'
    },
    {
        game: 'Risk: GodStorm',
        id: '8jCluNSJ9P'
    },
    {
        game: 'Roll Player',
        id: '7P5sZDmCAC'
    },
    {
        game: 'Rummikub',
        id: '3Qx47A4K8M'
    },
    {
        game: 'Robo Rally',
        id: 'x0sk1fJyaz'
    },
    {
        game: 'Scattergories',
        id: 'v7qbL1m0NH'
    },
    {
        game: 'Scrabble',
        id: 'UI0oxncplG'
    },
    {
        game: 'Shards of Infinity',
        id: 'Fu5bcsok0p'
    },
    {
        game: 'Shark Attack',
        id: 'gpWODy5pt6'
    },
    {
        game: 'Small World',
        id: '8UmzC1ZGGE'
    },
    {
        game: 'Smash Up',
        id: 'Q3EWjC8Dm7'
    },
    {
        game: 'Sorry',
        id: 'MpQvtVYQaV'
    },
    {
        game: 'Spirit Island',
        id: 'kPDxpJZ8PD'
    },
    {
        game: 'Star Realms',
        id: '1dWE5BIcOm'
    },
    {
        game: 'Star Wars: Rebellion',
        id: 'Qq2rPNOpoO'
    },
    {
        game: 'Stratego',
        id: 'y3WGl0j2FA'
    },
    {
        game: 'Student Bodies',
        id: '8Pw4saLmXn'
    },
    {
        game: 'Sub Terra',
        id: '8Jw0gsYDqj'
    },
    {
        game: 'Targi',
        id: 'Yzurao9vqw'
    },
    {
        game: 'Telestrations: After Dark',
        id: '7xvW4DYkgw'
    },
    {
        game: 'The Crew: The Quest for Planet 9',
        id: 'zP1jQ8Ueb4'
    },
    {
        game: 'The Game',
        id: '9jlOaXVEB2'
    },
    {
        game: 'Ticket to Ride',
        id: 'AuBvbISHR6'
    },
    {
        game: 'Triassic Terror',
        id: 'WJWiXguWq5'
    },
    {
        game: 'Trivial Pursuit: Bet You Know It',
        id: 'DAREuHkVE0'
    },
    {
        game: 'TMNT: Pizza Power Game',
        id: 'AFu83jcUS7'
    },
    {
        game: 'Under Falling Skies',
        id: 'B9dNhn1s5R'
    },
    {
        game: 'Unmatched: Cobble & Fog',
        id: 'xFTUYTIgPV'
    },
    {
        game: 'Unmatched: Jurassic Park - Ingen vs Raptors',
        id: 'XGhPub5S4d'
    },
    {
        game: 'Unmatched: Robin Hood vs Bigfoot',
        id: '4c6k4Jh4j3'
    },
    {
        game: 'Uno',
        id: 'Ad9NDUFxmt'
    },
    {
        game: 'Wingspan',
        id: '5H5JS0KLzK'
    },
    {
        game: 'XenoShyft: Dreadmire',
        id: 'KAKxMhztTU'
    },
    {
        game: 'Zombicide: Black Plague',
        id: 'H0quEw1gSX'
    },
    {
        game: 'Zombicide: Dark Side',
        id: 'wJcN5ZRKhs'
    },
    {
        game: 'Zombicide: Green Horde',
        id: 'CpN5aMEm3e'
    },
    {
        game: 'Zombicide: Invader',
        id: '4Hvba6UGdA'
    } 
];

const expansions = [
    {
        base: 'Aliens: Another Glorious Day in the Corps',
        exp: 'Aliens: Get Away From Her You B***h!',
        id: 'D5OKR78gS6'
    },
    {
        base: 'Arkham Horror: The Card Game',
        exp: 'Arkham Horror: The Forgotten Age',
        id: 'OPetl2kfVG'
    },
    {
        base: 'AvP: The Hunt Begins',
        exp: 'AvP: Hot Landing Zone',
        id: 'wXytIuCvjy'
    },
    {
        base: 'Blood Rage',
        exp: 'Gods of Asgard',
        id: 'dsEay3QGls'
    },
    {
        base: 'Blood Rage',
        exp: 'Mystics of Midgard',
        id: 'KrOSnDs7qp'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster 2: The Next Level',
        id: 'iLClIEykRr'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster: Crash Landing',
        id: 'Grj9ItghtR'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster: Implements of Destruction',
        id: 'MHkPqS3iaz'
    },
    {
        base: 'Boss Monster',
        exp: 'Rise of the Minibosses',
        id: 'UX7TrkiPI8'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster: Tools of Hero-Kind',
        id: 'aSiCTudo4j'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster: Vault of Villains',
        id: 'wK6Feoi5aG'
    },
    {
        base: 'Carcassonne',
        exp: 'Carcassonne: Bridges, Castles & Bazaaars',
        id: 'cxbewrSZzV'
    },
    {
        base: 'Carcassonne',
        exp: 'Carcassonne: The Princess and the Dragon',
        id: 'cyt7Cv1k83'
    },
    {
        base: 'Champions of Midgard',
        exp: 'Champions of Midgard: Dark Mountains',
        id: 'TcWUea0bZt'
    },
    {
        base: 'Champions of Midgard',
        exp: 'Champions of Midgard: Valhalla',
        id: 'uIAbNA34UF'
    },
    {
        base: 'Dinosaur Island',
        exp: 'Dinosaur Island: Totally Liquid',
        id: 'jAbBY1xouO'
    },
    {
        base: 'Everdell',
        exp: 'Pearlbrook',
        id: 'HaJzwUu0aB'
    },
    {
        base: 'Everdell',
        exp: 'Spirecrest',
        id: 'KhIklGFBtO'
    },
    {
        base: 'Evolution',
        exp: 'Evolution: Climate',
        id: '8xkkOT11DT'
    },
    {
        base: 'Evolution',
        exp: 'Evolution: Flight',
        id: 'LTn4zrrUPd'
    },
    {
        base: 'Gloomhaven',
        exp: 'Gloomhaven: Forgotten Circles',
        id: 'PKcSCpkXyE'
    },
    {
        base: 'King of Tokyo',
        exp: 'King of Tokyo: Halloween',
        id: 'IjMcGwdT95'
    },
    {
        base: 'King of Tokyo',
        exp: 'King of Tokyo: Power Up',
        id: 'El8zJPnpYZ'
    },
    {
        base: 'King of Tokyo',
        exp: 'Anubis Monster Pack',
        id: 'bN2dvaRMN5'
    },
    {
        base: 'King of Tokyo',
        exp: 'Cthulhu Monster Pack',
        id: '8Uv1EzPao6'
    },
    {
        base: 'King of Tokyo',
        exp: 'Cybertooth Monster Pack',
        id: 'o0MHmngkoL'
    },
    {
        base: 'King of Tokyo',
        exp: 'King Kong Monster Pack',
        id: 'dOLEboniiK'
    },
    {
        base: 'King of New York',
        exp: 'King of New York: Power Up',
        id: 'JTTiuA257x'
    },
    {
        base: 'King of New York',
        exp: 'Anubis Monster Pack',
        id: 'bN2dvaRMN5'
    },
    {
        base: 'King of New York',
        exp: 'Cthulhu Monster Pack',
        id: '8Uv1EzPao6'
    },
    {
        base: 'King of New York',
        exp: 'Cybertooth Monster Pack',
        id: 'o0MHmngkoL'
    },
    {
        base: 'King of New York',
        exp: 'King Kong Monster Pack',
        id: 'dOLEboniiK'
    },
    {
        base: 'Legendary',
        exp: 'Legendary: Ant-Man',
        id: 'QAD4FAeAB2'
    },
    {
        base: 'Legendary',
        exp: 'Legendary: Deadpool',
        id: 'EEOTOd8RJ5'
    },
    {
        base: 'Legendary',
        exp: 'Legendary: Fantastic Four',
        id: 'z7Hu0AyCn3'
    },
    {
        base: 'Legendary',
        exp: 'Legendary: Guardians of the Galaxy',
        id: 'b0gLLEEmiq'
    },
    {
        base: 'Legendary',
        exp: 'Legendary: Venom',
        id: 'xWWfKgFiVs'
    },
    {
        base: 'Legendary Encounters: Alien',
        exp: 'Legendary Encounters: Alien Deck Building Expansion',
        id: 'xEGxRKUT6n'
    },
    {
        base: 'Legendary Encounters: Alien',
        exp: 'Legendary Encounters: Alien Covenant',
        id: 'TW8GqSyWD9'
    },
    {
        base: 'Lords of Hellas',
        exp: 'Lords of Hellas: Dark Ages',
        id: 'RBpkYHFVl7'
    },
    {
        base: 'Lords of Hellas',
        exp: 'Lords of Hellas: Kronos Rebellion',
        id: '2GjKXNXAzB'
    },
    {
        base: 'Mysterium',
        exp: 'Mysterium: Hidden Signs',
        id: 'Q8FmKGF8U8'
    },
    {
        base: 'Mysterium',
        exp: 'Mysterium: Secrets and Lies',
        id: 'x9WLvqVc6H'
    },
    {
        base: 'Nemesis',
        exp: 'Aftermath & Void Seeders',
        id: 'TOGUdVZhSg'
    },
    {
        base: 'Orleans',
        exp: 'Orleans: Invasion',
        id: 'WJMq3cM0K3'
    },
    {
        base: 'Photosynthesis',
        exp: 'Photosynthesis: Under the Moonlight',
        id: 'ARhjxHBB33'
    },
    {
        base: 'Project: ELITE',
        exp: 'Project: ELITE - Alienship Rescue',
        id: 'ekH0EtCPTh'
    },
    {
        base: 'Project: ELITE',
        exp: 'Project: ELITE - Deathmaw Valley',
        id: 'A7dBe0pRCC'
    },
    {
        base: 'Project: ELITE',
        exp: 'Project: ELITE - Terran Box',
        id: 'rm1bfkpz3r'
    },
    {
        base: 'Roll Player',
        exp: 'Roll Player: Monsters & Minions',
        id: 'l3TMEluK8v'
    },
    {
        base: 'Smash Up',
        exp: 'Awesome Level 9000',
        id: 'E2BDGzVGho'
    },
    {
        base: 'Smash Up',
        exp: 'Big in Japan',
        id: 'BvtUtob0RQ'
    },
    {
        base: 'Smash Up',
        exp: 'Cease and Desist',
        id: 'sEFt5GErUm'
    },
    {
        base: 'Smash Up',
        exp: `It's Your Fault`,
        id: 'nN1GVWyE4U'
    },
    {
        base: 'Smash Up',
        exp: 'Monster Smash',
        id: 'geDNXnjR0T'
    },
    {
        base: 'Smash Up',
        exp: 'Oops, You Did It Again',
        id: '3r6yaoZYv5'
    },
    {
        base: 'Smash Up',
        exp: 'Pretty Pretty Smash Up',
        id: 'eewJGDEpm4'
    },
    {
        base: 'Smash Up',
        exp: 'Science Fiction Double Feature',
        id: 'kKOxQBOpW0'
    },
    {
        base: 'Smash Up',
        exp: `That 70's Expansion`,
        id: 'H9RC6KaBjT'
    },
    {
        base: 'Smash Up',
        exp: 'The Obligatory Cthulhu Expansion',
        id: '4Ci60WoqUv'
    },
    {
        base: 'Smash Up',
        exp: 'What Were We Thinking',
        id: 'cvzbE312G2'
    },
    {
        base: 'Smash Up',
        exp: 'World Tour: Culture Shock',
        id: 'u3R8IY75ZS'
    },
    {
        base: 'Smash Up',
        exp: 'World Tour: International Incident',
        id: 'YXBLRQj65s'
    },
    {
        base: 'Spirit Island',
        exp: 'Branch and Claw',
        id: 'otIQ3ZB83G'
    },
    {
        base: 'Ticket to Ride',
        exp: 'Ticket to Ride: USA 1910',
        id: 'XZ9BeWAgCu'
    },
    {
        base: 'Zombicide: Black Plague',
        exp: 'Zombicide: No Rest for the Wicked',
        id: 'u8eCOdgduc'
    },
    {
        base: 'Zombicide: Black Plague',
        exp: 'Zombicide: Wulfsburg',
        id: 'HlhAEKqlQi'
    },
    {
        base: 'Zombicide: Green Horde',
        exp: 'Zombicide: Friends and Foes',
        id: 'yoZEHZfcD3'
    },
    {
        base: 'Zombicide: Green Horde',
        exp: 'Zombicide: No Rest for the Wicked',
        id: 'u8eCOdgduc'
    },
    {
        base: 'Zombicide: Invader',
        exp: 'Zombicide: Black Ops',
        id: 'YhPzHihmlf'
    },
    {
        base: 'Zombicide: Dark Side',
        exp: 'Zombicide: Black Ops',
        id: 'YhPzHihmlf'
    }
];

const videoGames = [
    {
        game: '1080 Snowboarding',
        console: 'N64',
        id: '3030-18946'
    },
    {
        game: 'Alien: Isolation',
        console: 'PS3',
        id: '3030-44296'
    },
    {
        game: 'Aliens: Colonial Marines',
        console: 'PS3',
        id: '3030-20921'
    },
    {
        game: 'Aliens vs Predator',
        console: 'PS3',
        id: '3030-26532'
    },
    {
        game: 'Alien3',
        console: 'NES',
        id: '3030-14356'
    },
    {
        game: 'Ark Park',
        console: 'PS4',
        id: '3030-67501'
    },
    {
        game: 'Banjo-Kazooie',
        console: 'N64',
        id: '3025-46'
    },
    {
        game: 'Bushido Blade 2',
        console: 'PS1',
        id: '3030-6226'
    },
    {
        game: 'Batman: Arkham Asylum',
        console: 'PS3',
        id: '3030-23245'
    },
    {
        game: 'Batman: Arkham City',
        console: 'PS3',
        id: '3030-29443'
    },
    {
        game: 'Batman: Arkham Origins',
        console: 'PS3',
        id: '3030-42245'
    },
    {
        game: 'BattleToads',
        console: 'GB',
        id: '3030-21228'
    },
    {
        game: 'Black',
        console: 'PS2',
        id: '3030-8369'
    },
    {
        game: 'Call of Cthulhu',
        console: 'PS4',
        id: '3030-45148'
    },
    {
        game: 'Call of Duty 3',
        console: 'PS2',
        id: '3030-7524'
    },
    {
        game: 'Call of Duty: Black Ops',
        console: 'PS3',
        id: '3030-26423'
    },
    {
        game: 'Call of Duty: Black Ops II',
        console: 'PS3',
        id: '3030-38039'
    },
    {
        game: 'Call of Duty: Black Ops III',
        console: 'PS3',
        id: '3030-48754'
    },
    {
        game: 'Call of Duty: Modern Warfare 2',
        console: 'PS3',
        id: '3030-24713'
    },
    {
        game: 'ClayFighter 63 1/3',
        console: 'N64',
        id: '3030-3185'
    },
    {
        game: `Cruis'n USA`,
        console: 'N64',
        id: '3030-9890'
    },
    {
        game: 'Dead Island',
        console: 'PS3',
        id: '3030-21534'
    },
    {
        game: 'Diddy Kong Racing',
        console: 'N64',
        id: '3030-15990'
    },
    {
        game: 'Doom 3: BFD Edition',
        console: 'PS3',
        id: '3030-14537'
    },
    {
        game: 'Doom 64',
        console: 'N64',
        id: '3030-16788'
    },
    {
        game: 'F-Zero X',
        console: 'N64',
        id: '3030-18808'
    },
    {
        game: 'Ghostbusters',
        console: 'PS3',
        id: '3030-20688'
    },
    {
        game: 'God of War',
        console: 'PS4',
        id: '3030-54229'
    },
    {
        game: 'GoldenEye 007',
        console: 'N64',
        id: '3030-3166'
    },
    {
        game: 'GoldenEye 007 Reloaded',
        console: 'PS3',
        id: '3030-35939'
    },
    {
        game: 'Gran Turismo',
        console: 'PS1',
        id: '3030-2416'
    },
    {
        game: 'Gran Turismo 2',
        console: 'PS1',
        id: '3030-8100'
    },
    {
        game: 'Gran Turismo 3 A-Spec',
        console: 'PS2',
        id: '3030-12950'
    },
    {
        game: 'Gran Turismo 5',
        console: 'PS3',
        id: '3030-21790'
    },
    {
        game: 'Grand Theft Auto',
        console: 'PS1',
        id: '3030-13567'
    },
    {
        game: 'Grand Theft Auto III',
        console: 'PS2',
        id: '3030-3724'
    },
    {
        game: 'Grand Theft Auto: San Andreas',
        console: 'PS2',
        id: '3030-7120'
    },
    {
        game: 'Grand Theft Auto: Vice City',
        console: 'PS2',
        id: '3030-17036'
    },
    {
        game: 'Guitar Hero',
        console: 'PS2'
    },
    {
        game: 'Guitar Hero 2',
        console: 'PS2',
        id: '3030-14916'
    },
    {
        game: 'Guitar Hero III: Legends of Rock',
        console: 'PS2',
        id: '3030-4031'
    },
    {
        game: 'Guitar Hero: World Tour',
        console: 'PS2',
        id: '3030-20673'
    },
    {
        game: 'Guitar Hero 5',
        console: 'PS2',
        id: '3030-24711'
    },
    {
        game: `Guitar Hero Encore Rocks the 80's`,
        console: 'PS2',
        id: '3030-12241'
    },
    {
        game: 'Gyruss',
        console: 'NES',
        id: '3030-18885'
    },
    {
        game: 'High Heat Major League Baseball 2003',
        console: 'PS2',
        id: '3030-16036'
    },
    {
        game: 'Horizon: Zero Dawn',
        console: 'PS4',
        id: '3030-49973'
    },
    {
        game: 'Jurassic Park',
        console: 'NES',
        id: '3030-5721'
    },
    {
        game: 'Jurassic Park: Operation Genesis',
        console: 'PS2',
        id: '3030-11069'
    },
    {
        game: 'Jurassic World: Evolution',
        console: 'PS4',
        id: '3030-60911'
    },
    {
        game: `Kirby's Dream Land`,
        console: 'GB',
        id: '3030-19788'
    },
    {
        game: 'Madden NFL 2001',
        console: 'PS1',
        id: '3030-8822'
    },
    {
        game: `Madden NFL '07`,
        console: 'PS2',
        id: '3030-16585'
    },
    {
        game: 'Mario Golf',
        console: 'N64',
        id: '3030-19716'
    },
    {
        game: 'Mario Kart 64',
        console: 'N64',
        id: '3030-10084'
    },
    {
        game: 'Mario Party',
        console: 'N64',
        id: '3030-6424'
    },
    {
        game: 'Mega Man 3',
        console: 'NES',
        id: '3030-4518'
    },
    {
        game: `MLB '06 The Show`,
        console: 'PS2',
        id: '3030-5682'
    },
    {
        game: 'Mortal Kombat Trilogy',
        console: 'N64',
        id: '3030-8279'
    },
    {
        game: 'Mortal Kombat vs DC Universe',
        console: 'PS3',
        id: '3030-20449'
    },
    {
        game: 'NBA Street Vol. 2',
        console: 'PS2',
        id: '3030-9866'
    },
    {
        game: 'NCAA Football 2003',
        console: 'PS2',
        id: '3030-9305'
    },
    {
        game: 'Need for Speed Underground 2',
        console: 'PS2',
        id: '3030-9651'
    },
    {
        game: `NHL '12`,
        console: 'PS3',
        id: '3030-33698'
    },
    {
        game: 'Nightmare Creatures',
        console: 'N64',
        id: '3030-584'
    },
    {
        game: 'Perfect Dark',
        console: 'N64',
        id: '3030-21256'
    },
    {
        game: `Peter Jackson's King Kong`,
        console: 'PS2',
        id: '3030-9458'
    },
    {
        game: 'Pilotwings 64',
        console: 'N64',
        id: '3030-108'
    },
    {
        game: 'Pokemon: Blue',
        console: 'GB',
        id: '3030-3966'
    },
    {
        game: 'Pokemon: Red',
        console: 'GB',
        id: '3030-3966'
    },
    {
        game: 'Pokemon Snap',
        console: 'N64',
        id: '3030-10024'
    },
    {
        game: 'Pokemon Stadium',
        console: 'N64',
        id: '3030-7270'
    },
    {
        game: 'Pokemon: Yellow',
        console: 'GB',
        id: '3030-18673'
    },
    {
        game: 'Pokemon Pinball',
        console: 'GB',
        id: '3030-19154'
    },
    {
        game: 'Pokemon Trading Card Game',
        console: 'GB',
        id: '3030-10489'
    },
    {
        game: 'Predator',
        console: 'NES',
        id: '3030-873'
    },
    {
        game: 'Predator: Concrete Jungle',
        console: 'PS2',
        id: '3030-10661'
    },
    {
        game: 'Predator: Hunting Grounds',
        console: 'PS4',
        id: '3030-73332'
    },
    {
        game: 'Rampage: Total Destruction',
        console: 'PS2',
        id: '3030-5390'
    },
    {
        game: 'Rampage: World Tour',
        console: 'N64',
        id: '3030-12331'
    },
    {
        game: 'Resident Evil 6',
        console: 'PS3',
        id: '3030-37273'
    },
    {
        game: 'Road Rash 64',
        console: 'N64',
        id: '3030-18864'
    },
    {
        game: 'San Francisco Rush: Extreme Racing',
        console: 'N64',
        id: '3030-8458'
    },
    {
        game: `Shaun Palmer's Pro Snowboarder`,
        console: 'PS2',
        id: '3030-25097'
    },
    {
        game: 'Silent Service',
        console: 'NES',
        id: '3030-7565'
    },
    {
        game: 'SRS: Street Racing Syndicate',
        console: 'PS2',
        id: '3030-9927'
    },
    {
        game: 'Star Fox 64',
        console: 'N64',
        id: '3030-19203'
    },
    {
        game: 'Star Wars',
        console: 'NES'
    },
    {
        game: 'Star Wars: Episode 1 - The Phantom Menace',
        console: 'PS1',
        id: '3030-14541'
    },
    {
        game: 'Star Wars: Shadows of the Empire',
        console: 'N64',
        id: '3030-12139'
    },
    {
        game: 'Star Wars Battlefront II',
        console: 'PS2',
        id: '3030-7094'
    },
    {
        game: 'StarCraft 64',
        console: 'N64',
        id: '3030-13062'
    },
    {
        game: 'Super Mario 64',
        console: 'N64',
        id: '3030-2931'
    },
    {
        game: 'Super Mario Bros/Duck Hunt',
        console: 'NES',
        id: '3030-12460'
    },
    {
        game: 'Super Mario Bros. 2',
        console: 'NES',
        id: '3030-7406'
    },
    {
        game: 'Super Mario Bros. 3',
        console: 'NES',
        id: '3030-10299'
    },
    {
        game: 'Super Mario Land',
        console: 'GB',
        id: '3030-19834'
    },
    {
        game: 'Super Mario Land 2: 6 Golden Coins',
        console: 'GB',
        id: '3030-14425'
    },
    {
        game: 'Super Smash Bros.',
        console: 'N64',
        id: '3030-19125'
    },
    {
        game: 'Teenage Mutant Ninja Turtles',
        console: 'NES'
    },
    {
        game: 'Teenage Mutant Ninja Turtles',
        console: 'PS2',
        id: '3030-26368'
    },
    {
        game: 'Teenage Mutant Ninja Turtles III: The Manhattan Project',
        console: 'NES',
        id: '3030-1831'
    },
    {
        game: 'Teenage Mutant Ninja Turtles: Mutants in Manhattan',
        console: 'PS3',
        id: '3030-51715'
    },
    {
        game: 'Tekken 2',
        console: 'PS1',
        id: '3030-10387'
    },
    {
        game: 'Tekken 3',
        console: 'PS1',
        id: '3030-11189'
    },
    {
        game: 'Tetris',
        console: 'GB',
        id: '3030-1896'
    },
    {
        game: 'The Last of Us',
        console: 'PS4',
        id: '3030-36989'
    },
    {
        game: 'The Lost World: Jurassic Park',
        console: 'PS1',
        id: '3030-4125'
    },
    {
        game: 'The X-Files: Resist or Serve',
        console: 'PS2',
        id: '3030-923'
    },
    {
        game: `Tony Hawk's Pro Skater`,
        console: 'PS1',
        id: '3030-7236'
    },
    {
        game: `Tony Hawk's Pro Skater 2`,
        console: 'PS1',
        id: '3030-990'
    },
    {
        game: `Tony Hawk's Pro Skater 3`,
        console: 'PS3',
        id: '3030-5688'
    },
    {
        game: 'Turok: Dinosaur Hunter',
        console: 'N64',
        id: '3030-14614'
    },
    {
        game: 'Twisted Metal',
        console: 'PS3',
        id: '3030-31754'
    },
    {
        game: 'Twisted Metal III',
        console: 'PS1',
        id: '3030-4635'
    },
    {
        game: 'War of the Monsters',
        console: 'PS2',
        id: '3030-19651'
    },
    {
        game: 'Warpath: Jurassic Park',
        console: 'PS1',
        id: '3030-6062'
    },
    {
        game: 'Wave Race 64',
        console: 'N64',
        id: '3030-11969'
    },
    {
        game: `Wayne Gretzky's 3D Hockey`,
        console: 'N64',
        id: '3030-20062'
    },
    {
        game: 'Yoshi',
        console: 'GB',
        id: '3030-19197'
    }
];

const books = [
    {
        title: '1984',
        author: 'George Orwell',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'yxv1LK5gyV4C'
    },
    {
        title: '20,000 Leagues Under the Sea',
        author: 'Jules Verne',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'Iw2huAAACAAJ'
    },
    {
        title: '48 Laws of Power, The',
        author: 'Robert Greene',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'P_zMW3EHnTEC'
    },
    {
        title: 'A Confederacy of Dunces',
        author: 'John Kennedy Toole',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'Hg0jKHsj6DMC'
    },
    {
        title: `A People's History of the United States`,
        author: 'Howard Zinn',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'KBueCgAAQBAJ'
    },
    {
        title: 'A Short History of Nearly Everything',
        author: 'Bill Bryson',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '_CWlKRYLbIwC'
    },
    {
        title: `Aesop's Fables`,
        author: 'Ann McGovern',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'rX75_iXXMoIC'
    },
    {
        title: `Aesop's Illustrated Fables`,
        author: 'Barnes & Noble',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'TYwalwEACAAJ'
    },
    {
        title: 'Alien: The Archive',
        author: 'Titan Books',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'pMSpoAEACAAJ'
    },
    {
        title: 'Aliens: Bug Hunt',
        author: 'Jonathan Maberry',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'DKe5DAAAQBAJ'
    },
    {
        title: 'Aliens: The Essential Comics V.1',
        author: 'Randy Stradley',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'ciRcDwAAQBAJ'
    },
    {
        title: 'Alphabet of Manliness, The',
        author: 'Maddox',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'GiEiXlzThfkC'
    },
    {
        title: 'Anarchy, The: The East India Company, Corporate Violence, and the Pillage of an Empire',
        author: 'William Dalrymple',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'iRuoDwAAQBAJ'
    },
    {
        title: 'Assholes',
        author: 'Aaron James',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'GCqXH6WQdVMC'
    },
    {
        title: 'Bronx is Burning, The',
        author: 'Johnathan Mahler',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'OM7fwH0JZs4C'
    },
    {
        title: 'Car, The',
        author: 'Gary Paulsen',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'SDUzCwAAQBAJ'
    },
    {
        title: 'Catch-22',
        author: 'Joseph Heller',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'Xfze51E7TEoC'
    },
    {
        title: 'Catcher in the Rye, The',
        author: 'J.D. Salinger',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'FqSiDwAAQBAJ'
    },
    {
        title: 'Chilling Ghost Short Stories',
        author: 'Dale Townshend',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'I9_9oQEACAAJ'
    },
    {
        title: 'Chilling Horror Short Stories',
        author: 'Dale Townshend',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'wGs1rgEACAAJ'
    },
    {
        title: 'Collapse',
        author: 'Jared Diamond',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'jNQd9RpuJ-4C'
    },
    {
        title: 'Complete Calvin and Hobbes, The',
        author: 'Bill Watterson',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'wmjG5g4Yx7gC'
    },
    {
        title: 'Count of Monte Cristo, The',
        author: 'Alexandre Dumas',
        translation: 'Robin Buss',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'EhqNGA9gM94C'
    },
    {
        title: 'Dharma Punx',
        author: 'Noah Levine',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '9pLj5siXnxYC'
    },
    {
        title: 'Dinosaurs and Other Prehistoric Animals',
        author: 'Carl Mehling',
        type: 'Non-Fiction',
        owner: 'Kurt'
    },
    {
        title: 'Drunkards Walk, The: How Randomness Rules Our Lives',
        author: 'Leonard Mlodinow',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '7NH5yNWMCFEC'
    },
    {
        title: 'East of Eden',
        author: 'John Steinbeck',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'OPy6E5ZhXs0C'
    },
    {
        title: 'Elon Musk',
        author: 'Ashlee Vance',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'Yd99BAAAQBAJ'
    },
    {
        title: 'Encyclopedia of the Dog',
        author: 'Richard Marples',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'k8Ft-pnQ9xQC'
    },
    {
        title: 'Even More Scary Stories for Sleep-Overs',
        author: 'Q.L. Pearce',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'JejS0xpl05oC'
    },
    {
        title: 'Everybody Lies',
        author: 'Seth Stephens-Davidowitz',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'hy5bCwAAQBAJ'
    },
    {
        title: 'Familiar Dinosaurs: The Autobahn Sociaty Pocket Guides',
        author: 'Alfred A. Knopf',
        type: 'Non-Fiction',
        owner: 'Kurt'
    },
    {
        title: 'Fate of the States',
        author: 'Meredith Whitney',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id:'0dr-fUcL3oMC'
    },
    {
        title: 'Freakonomics',
        author: 'Steven Levitt',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'wNPnl5zYA-cC'
    },
    {
        title: 'For Whom the Bell Tolls',
        author: 'Ernest Hemingway',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'jS2BDwAAQBAJ'
    },
    {
        title: 'Fortune at the Bottom of the Pyramid, The',
        author: 'C.K. Prahalad',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'R5ePu1awfloC'
    },
    {
        title: 'GameTek: The Math and Science of Gaming',
        author: 'Geoff Engelstein',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'tNHqswEACAAJ'
    },
    {
        title: `Garfield's Insults, Put-Downs & Slams`,
        author: 'Jim Davis',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'KDsQzaAhPB8C'
    },
    {
        title: 'Geek-Art: An Anthology',
        author: 'Thomas Olivri',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'hAzJoAEACAAJ'
    },
    {
        title: 'Goblins in the Castle',
        author: 'Bruce Coville',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'P-tFL-NeLeAC'
    },
    {
        title: 'Goblins on the Prowl',
        author: 'Bruce Coville',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'WJSvBAAAQBAJ'
    },
    {
        title: 'Grapes of Wrath,The',
        author: 'John Steinbeck',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'bhJgd3hGdxQC'
    },
    {
        title: 'Guns, Germs, and Steel',
        author: 'Jared Diamond',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'PWnWRFEGoeUC'
    },
    {
        title: 'Holographic Universe, The',
        author: 'Michael Talbot',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '-YZqPmK8jAUC'
    },
    {
        title: 'I Hope They Serve Beer in Hell',
        author: 'Tucker Max',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'rPoBYx7hRB4C'
    },
    {
        title: 'Infinite Jest',
        author: 'David Foster Wallace',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'Nhe2yvx6hP8C'
    },
    {
        title: 'Jeter Unfiltered',
        author: 'Derek Jeter',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '-U0uBQAAQBAJ'
    },
    {
        title: 'Just So Stories',
        author: 'Rudyard Kipling',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'PdG_vQEACAAJ'
    },
    {
        title: 'Last Lion, The',
        author: 'William Manchester',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'ebCoEp9z76sC'
    },
    {
        title: 'Last of the Mohicans, The',
        author: 'James Fenimore Cooper',
        translation: 'Elizabeth Gatewood Cooper',
        type: 'Fiction',
        owner: 'Kurt'
    },
    {
        title: 'Leadership: In Turbulent Times',
        author: 'Doris Kearns Goodwin',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: ''
    },
    {
        title: 'Long Emergency, The',
        author: 'James Howard Kunstler',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'GV_lT_lQPYMC'
    },
    {
        title: 'Meditations',
        author: 'Marcus Aurelius',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'WV7Teosv0bIC'
    },
    {
        title: 'Michael Jordan',
        author: 'Chip Lovitt',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '_lheRQAACAAJ'
    },
    {
        title: 'Michael Jordan: The Life',
        author: 'Roland Lazenby',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'leziAAAAQBAJ'
    },
    {
        title: 'More Scary Stories for Sleep-Overs',
        author: 'Q.L. Pearce',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'SaTNFcu2gW8C'
    },
    {
        title: 'More Scary Stories to Tell in the Dark',
        author: 'Alvin Schwartz',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'snNADwAAQBAJ'
    },
    {
        title: 'More Super Scary Stories for Sleep-Overs',
        author: 'Q.L. Pearce',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'l5r6QfyX-q0C'
    },
    {
        title: 'Mythology',
        author: 'Edith Hamilton',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'DArhDgAAQBAJ'
    },
    {
        title: 'New Jim Crow, The',
        author: 'Michelle Alexander',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'CNOFDwAAQBAJ'
    },
    {
        title: `New York Giants: Great Teams' Great Years`,
        author: 'Jim Terzian',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '4U1xAAAAMAAJ'
    },
    {
        title: 'New York Giants, The: Yesterday, Today, Tomorrow',
        author: 'Dave Klein',
        type: 'Non-Fiction',
        owner: 'Kurt'
    },
    {
        title: 'Odyssey, The',
        author: 'Homer',
        translation: 'Robert Fitzgerald',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'nXkePe2TPQYC'
    },
    {
        title: 'Of Mice and Men',
        author: 'John Steinbeck',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'F7WKDQAAQBAJ'
    },
    {
        title: 'Party is Over, The',
        author: 'Mike Lofgren',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'N-dvDwAAQBAJ'
    },
    {
        title: 'Post Office',
        author: 'Charles Bukowski',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'XjQ5zlnQ8ZcC'
    },
    {
        title: 'Predator: If It Bleeds',
        author: 'Bryan Thomas Schmidt',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'jen1DQAAQBAJ'
    },
    {
        title: 'Predator: The Essential Comics V.1',
        author: 'Randy Stradley',
        type: 'Fiction',
        owner: 'Kurt',
        id: '_SFcDwAAQBAJ'
    },
    {
        title: 'Prince, The',
        author: 'Niccolo Macchiavelli',
        translation: 'W.K. Marriott',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'UW9engEACAAJ'
    },
    {
        title: 'Scary Stories for Sleep-Overs',
        author: 'R.C. Welch',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'gWz6OwAACAAJ'
    },
    {
        title: 'Scary Stories to Tell in the Dark',
        author: 'Alvin Schwartz',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'jXNADwAAQBAJ'
    },
    {
        title: 'Scary Stories 3: More Tales to Chill Your Bones',
        author: 'Alvin Schwartz',
        type: 'Fiction',
        owner: 'Kurt',
        id: '13NADwAAQBAJ'
    },
    {
        title: 'Slaughterhouse Five',
        author: 'Kurt Vonnegut',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'FM4y7N1kM9AC'
    },
    {
        title: 'Still More Scary Stories for Sleep-Overs',
        author: 'Q.L. Pearce',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'OW5IADq3Kj4C'
    },
    {
        title: 'Super Scary Stories for Sleep-Overs',
        author: 'Q.L. Pearce',
        type: 'Fiction',
        owner: 'Kurt',
        id: '-HR1mOYgg6IC'
    },
    {
        title: 'SuperFreakonomics',
        author: 'Steven Levitt',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '2ww1No7b5OYC'
    },
    {
        title: 'Swiss Family Robinson, The',
        author: 'Johann Wyss',
        translation: 'Steve Frazee',
        type: 'Fiction',
        owner: 'Kurt'
    },
    {
        title: 'Third Chimpanzee, The',
        author: 'Jared Diamond',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '11EQBwAAQBAJ'
    },
    {
        title: 'Tipping Point, The',
        author: 'Malcolm Gladwell',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'yBDBEGBIUmgC'
    },
    {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'TA7Q27RWlj0C'
    },
    {
        title: 'Thirteen Notches',
        author: 'Hank Edwards',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'zz333BCcOfcC'
    },
    {
        title: 'Thomas Jefferson: The Art of Power',
        author: 'Jon Meacham',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: '7QBwDwAAQBAJ'
    },
    {
        title: `Tobin's Spirit Guide`,
        author: 'Erik Burnham',
        type: 'Fiction',
        owner: 'Kurt',
        id: '5IyyDAEACAAJ'
    },
    {
        title: 'Treasure Island',
        author: 'Robert Louis Stevenson',
        type: 'Fiction',
        owner: 'Kurt',
        id: 'POCvDAEACAAJ'
    },
    {
        title: 'Until the End of Time',
        author: 'Brian Greene',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'gLXPDwAAQBAJ'
    },
    {
        title: 'Woodsong',
        author: 'Gary Paulsen',
        type: 'Fiction',
        owner: 'Kurt',
        id: '9qsdexSX1qgC'
    },
    {
        title: 'Zero to One',
        author: 'Peter Thiel',
        type: 'Non-Fiction',
        owner: 'Kurt',
        id: 'ZH4oAwAAQBAJ'
    }
];

const smashUp = [
    'Aliens',
    'Anansi Tales',
    'Ancient Egyptians',
    'Ancient Incans',
    'Astroknights',
    'Bear Cavalry',
    'Changerbots',
    'Cowboys',
    'Cyborg Apes',
    'Dinosaurs',
    'Disco Dancers',
    'Dragons',
    'Elder Things',
    'Explorers',
    'Fairies',
    'Giant Ants',
    'Ghosts',
    'Grannies',
    `Grimms' Fairy Tales`,
    'Ignobles',
    'Innsmouth',
    'Itty Critters',
    'Kaiju',
    'Killer Plants',
    'Kitty Cats',
    'Kung Fu Fighters',
    'Luchadors',
    'Mad Scientists',
    'Magical Girls',
    'Mega Troopers',
    'Minions of Cthulhu',
    'Miskatonic University',
    'Mounties',
    'Musketeers',
    'Mythic Greeks',
    'Mythic Horses',
    'Ninjas',
    'Pirates',
    'Polynesian Voyagers',
    'Princesses',
    'Robots',
    'Rock Stars',
    'Russian Fairy Tales',
    'Samurai',
    'Shapeshifters',
    'Sharks',
    'Star Roamers',
    'Steampunks',
    'Sumo Wrestlers',
    'Super Spies',
    'Superheroes',
    'Teddy Bears',
    'Time Travelers',
    'Tornados',
    'Tricksters',
    'Truckers',
    'Vampires',
    'Vigilantes',
    'Vikings',
    'Werewolves',
    'Wizards',
    'Zombies'
];

// board game variables
const clientId = '6M6K1PSC4C';
const searchURL = 'https://api.boardgameatlas.com/api/search';
const trackerURL = 'https://docs.google.com/spreadsheets/d/10bqq3FyHzjih2ou_9BnSm1ke16qN-qKn4oegymVOhGc/';
let selectedGame = 'none';
let selectedExp = 'none';
let expCount = 0;

// book variables
const googleURL = 'https://www.googleapis.com/books/v1/volumes/';
const googleId = 'AIzaSyC2oWpXroEy-JTZ3L5tRW_WQ5bmwkulEGI';
const googleImgURL = 'https://www.googleapis.com/books/v1/volumes?q=';

// video game variables
const vgurl = 'http://www.giantbomb.com/api/search';
const vgIdUrl = 'http://www.giantbomb.com/api/game/';
const vgkey = '248c166d6f92c18c7d0795936502e62456760472';

// toggle top menu //
function showMenu () {
    $('.hamburger').click(function () {
        $('.menu').toggle('slow', function () {
            if($('.menu').is(':visible')){
                $('.menu').show();
                if($(window).width() <= 400) {
                    $('.menu').css({
                        'font-size': '14px'
                    });
                }
            } 
            else {
                $('.menu').hide();
            }
        });
    });
}

// show top nav to account for screen size adjustment to desktop
function adjustNav() {
    $(window).resize(function() {
        let windowWidth = $(window).width();
        if(windowWidth >= 900) {
            $('.menu').show();
        }
    });
}

// adjust menu font for screen size adjustments
function adjustMenu() {
    $(window).resize(function() {
        if($(window).width() <= 400) {
            $('.menu').css({
                'font-size': '14px'
            });
        } else {
            $('.menu').css({
                'font-size': '20px'
        });
        }
    })
}

// generate clean url for fetch request
function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

// call api with query value and params
function getGames(gameQuery, gameName, random) {
    selectedGame = gameName;

    const params = {
        ids: gameQuery,
        client_id: clientId
    };

    const queryString = formatQueryParams(params);
    const url = searchURL + '?' + queryString;
    console.log(url);

    fetch(url) 
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => {
        if (random === 'rand') {
            displayResults(responseJson, 'rand')
        }
        else {displayResults(responseJson)}
        })
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
}

// display details for selected game
function displayResults(results, random) {
    console.log(results);
    $('.games').hide();
    $('.game-overview').empty();
    $('.game-overview').show();

    let getImage = results.games.map(imageVal => imageVal.image_url);
    let urlLink = results.games.map(gameUrl => gameUrl.url);
    let exp = 'no';

    $('.game-overview').append(
        `<div class='game-feature block'>
        <h2>${selectedGame}</h2>
        <img src='${getImage[0]}'>
        <p class='tracker-append'><a href='${urlLink[0]}' class='link' target='_blank'>View details</a></p>
        </div>`
    );

    if (selectedGame === 'Smash Up') {
        $('.tracker-append').append(
            `<div>
                <br/>
                <u><a class='link' onclick='smashUpFactions()'>Pick Random Factions</a></u>
            </div>
            <div class='smash-append hidden'></div>`
        );
    }

    for (let i = 0; i < gameIds.length; i++) {
        if(gameIds[i].game === selectedGame && gameIds[i].tracker === 'yes') {
            $('.tracker-append').append(
                `<span><br /><a class='link' href='${trackerURL}' target='_blank'>View game tracker</a></span>`
            );
        }
    }

    if (random === 'rand') {
        $('.game-feature').append(
            `<button onclick='randomGame()'>Generate New Random</button>`
        )
    }

    for (let i = 0; i < expansions.length; i++) {
        if (expansions[i].base === selectedGame) {
            exp = 'yes';
        }
    }

    if (exp === 'yes') {
        $('.game-feature').append(
            `<button class='exp-link' onclick='findExpansions("${selectedGame}")'>Expansions</button>
            <section class='expansions block'></section>`
        )}
}

// generate random factions for SmashUp
function smashUpFactions() {
    $('.smash-append').empty();
    $('.smash-append').show();
    const shuffled = smashUp.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 2);
    $('.smash-append').append(
        `<p>
            ${selected}
        </p>`
    );
}

// look for and display any expansions associated with base game
function findExpansions(baseGame) {
    const expArray = expansions;
    expCount = 0;

    for (let i = 0; i < expArray.length; i++) {
        if (expArray[i].base === baseGame) {
            expCount++;

            $('.expansions').append(
                `<div id='${expArray[i].id}' class='exp-details block'>
                <button class='exp-button' onclick='fetchExp("${expArray[i].id}")'>${expArray[i].exp}</button>
                </div>`
            );
            
        }
    }

    if (expCount === 0) {
        $('.expansions').append(
            `<p>None</p>`
        );
    }
}

// fetch details for expansion
function fetchExp(expId) {
    selectedExp = expId;

    const params = {
        ids: expId,
        client_id: clientId
    };

    const queryString = formatQueryParams(params);
    const url = searchURL + '?' + queryString;
    console.log(url);

    fetch(url) 
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => loadExp(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
}

// load expansion details
function loadExp(expObj) {
    console.log(expObj);

    let targetExp = document.getElementById(selectedExp);
    let expImage = expObj.games.map(imageVal => imageVal.image_url);
    let expURL = expObj.games.map(urlVal => urlVal.url);
    
    $(targetExp).append(
        `<section class='expansion block'>
        <img src='${expImage[0]}' />
        <p><a class='link' href='${expURL[0]}' target='_blank'>View details</a></p>
        </section>`
    );
}

// display movie categories
function showMovies() {
    $('.buttonnav').on('click', '.movie-button', function (event) {
        $('.buttonnav').hide();
        $('.movies').show();
    })
}

// display games                                                                                      
function showGames() {
    $('.buttonnav').on('click', '.games-button', function (event) {
        $('.buttonnav').hide();
        $('.games').empty();
        $('.games').show();

        $('.games').append(
            `<div class='game-block random'><a class="link random" onclick='randomGame()'>Generate Random</a></div>`
        );

        let gameList = gameIds.map(name => name.game);
        let idList = gameIds.map(gameid => gameid.id);

        for(let i = 0; i < gameList.length; i++) {
            $('.games').append(
                `<div class='game-block'><a class='link' onclick='getGames("${idList[i]}", "${gameList[i]}")'>${gameList[i]}</a></div>`
            );
        }
    })
}

// show list of video gam consoles
function showVGconsoles() {
    $('.buttonnav').on('click', '.video-button', function (event) {
        $('.buttonnav').empty();

        $('.buttonnav').append(
            `<button class='button' id='GB' onclick='showVideos("GB")'>Game Boy</button>
            <button class='button' id='NES' onclick='showVideos("NES")'>Nintendo (NES)</button>
            <button class='button' id='N64' onclick='showVideos("N64")'>Nintendo 64</button>
            <button class='button' id='PS' onclick='showVideos("PS1")'>PlayStation</button>
            <button class='button' id='PS2' onclick='showVideos("PS2")'>PlayStation 2</button>
            <button class='button' id='PS3' onclick='showVideos("PS3")'>PlayStation 3</button>
            <button class='button' id='PS4' onclick='showVideos("PS4")'>PlayStation 4</button>`
        );
    })
}

// display full list of video games
function showVideos(con) {
    $('.buttonnav').hide();
    $('.videos').show();

    let vgName = videoGames.map(name => name.game);
    let vgID = videoGames.map(guid => guid.id);

    for(let i = 0; i < videoGames.length; i++) {
        if (videoGames[i].console === con) {
            $('.videos').append(
                `<button class='game-block' onclick='getVideoGames("${vgID[i]}")'>${vgName[i]}</button>`
            );
        }
    }
}

function getVideoGames(id) {
    let url = vgIdUrl + id + '/?api_key=' + vgkey + '&format=jsonp&json_callback=';
    console.log(url);
    
    fetch(url) 
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayVG(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function displayVG(results) {
    console.log(results);
}

// show list of book classes
function showBookTypes() {
    $('.buttonnav').on('click', '.books-button', function (event) {
        $('.buttonnav').empty();

        $('.buttonnav').append(
            `<button class='button' id='Fiction' onclick='showBooks("Fiction")'>Fiction</button>
            <button class='button' id='Non-Fiction' onclick='showBooks("Non-Fiction")'>Non-Fiction</button>`
        );
    })
}

// display full list of books by genre
function showBooks(type) {
    $('.buttonnav').hide();
    $('.books').show();

    let bookName = books.map(name => name.title);
    let cleanBook = encodeURIComponent(books.map(n => n.title));
    let id = books.map(bookid => bookid.id);

    for(let i = 0; i < books.length; i++) {
        if (books[i].type === type) {
            $('.books').append(
                `<div class='book-block'><a class='link' onclick='fetchBook("${cleanBook[i]}", "${id[i]}")'>${bookName[i]}</a></div>`
            );
        }
    }
}

// fetch requested book details
function fetchBook(book, id) {
    const url = googleURL + id + '?key=' + googleId;
    console.log(url);

    fetch(url) 
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayBook(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

// display selected book details
function displayBook(results) {
    $('.books').empty();
    console.log(results);
    const bookid = results.volumeInfo.id;
    const bookName = results.volumeInfo.title;
    const author = results.volumeInfo.authors[0];
    const published = results.volumeInfo.publishedDate;
    const pages = results.volumeInfo.pageCount;
    const description = results.volumeInfo.description;

    if (!('imageLinks' in results.volumeInfo)) {
        $('.books').append(
            `<div class='book-feature'>
                <h2>${bookName}</h2>
                <div class='book-details'>${author}<br/>
                Published: ${published}<br/>
                Page Count: ${pages}</div>
                <p>${description}</p>
            </div>`
        );
    }
    else {
        const bookImg = results.volumeInfo.imageLinks.thumbnail;

        $('.books').append(
            `<div class='book-feature'>
                <img src="${bookImg}" />
                <h2>${bookName}</h2>
                <div class='book-details'>${author}<br/>
                Published: ${published}<br/>
                Page Count: ${pages}</div>
                <p>${description}</p>
            </div>`
        );
    }
}

// generate random board game recommendation
function randomGame() {
    $('.game-block').hide();
    $('.games').empty();

    const randomArr = gameIds.map(randName => randName.game);
    const randomGen = randomArr[Math.floor(Math.random() * randomArr.length)];

    for (let i = 0; i < gameIds.length; i++) {
        if (gameIds[i].game === randomGen) {
            getGames(gameIds[i].id, gameIds[i].game, 'rand');
        }
    }

}

function backNavBG() {
    $('.buttonnav, .game-overview').hide();
    $('.games, .videos').empty();
    $('.games').show();

    $('.games').append(
        `<div class="game-block random"><a class="game-link random" onclick='randomGame()'>Generate Random</a></div>`
    );

    let gameList = gameIds.map(name => name.game);
    let idList = gameIds.map(gameid => gameid.id);

    for(let i = 0; i < gameList.length; i++) {
        $('.games').append(
            `<div class='game-block'><a class='game-link' onclick='getGames("${idList[i]}", "${gameList[i]}")'>${gameList[i]}</a></div>`
        );
    }
}

function backNavVG() {
    $('.games, .game-overview').hide();
    $('.games, .videos, .buttonnav').empty();
    $('.buttonnav').show();

    $('.buttonnav').append(
        `<button class='button' id='GB' onclick='showVideos("GB")'>Game Boy</button>
        <button class='button' id='NES' onclick='showVideos("NES")'>Nintendo (NES)</button>
        <button class='button' id='N64' onclick='showVideos("N64")'>Nintendo 64</button>
        <button class='button' id='PS' onclick='showVideos("PS1")'>PlayStation</button>
        <button class='button' id='PS2' onclick='showVideos("PS2")'>PlayStation 2</button>
        <button class='button' id='PS3' onclick='showVideos("PS3")'>PlayStation 3</button>
        <button class='button' id='PS4' onclick='showVideos("PS4")'>PlayStation 4</button>`
    );
}

function backNavBoo() {
    $('.games, .game-overview').hide();
    $('.games, .videos, .buttonnav, .books').empty();
    $('.buttonnav').show();

    $('.buttonnav').append(
        `<button class='button' id='Fiction' onclick='showBooks("Fiction")'>Fiction</button>
        <button class='button' id='Non-Fiction' onclick='showBooks("Non-Fiction")'>Non-Fiction</button>`
    );
}

function homeNav() {
    $('.games, .game-overview').hide();
    $('.games, .videos, .buttonnav, .books').empty();
    $('.buttonnav').show();

    $('.buttonnav').append(
        `<button class="button games-button">Board Games</button>
        <button class="button books-button">Books</button>
        <button class="button movie-button">Movies</button>
        <button class="button video-button">Video Games</button>`
    );
}

function jsInit() {
    showMovies();
    showGames();
    showVGconsoles();
    showBookTypes();
    showMenu();
    adjustNav();
    adjustMenu();
}

$(jsInit);