'use strict';

const gameIds = [
    {
        game: 'Alien',
        id: '1Bh46L1okY'
    },
    {
        game: 'Apex Theropod',
        id: 'bH7jPgSGCD'
    },
    {
        game: 'Apples to Apples',
        id: 'sOC4PMWhs0'
    },
    {
        game: 'Arkham Horror: The Card Game',
        id: '4G32qGJZWs',
        tracker: 'yes'
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
        game: 'Cards Against Humanity',
        id: 'dFC1lnGINr'
    },
    {
        game: 'Chess',
        id: '3hnL2wtWnM'
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
        game: 'Evolution',
        id: 'AayCJcD6rT'
    },
    {
        game: 'Exploding Kittens',
        id: '74f9mzbw9Y'
    },
    {
        game: 'Flash Point',
        id: 'CqocZK7pu6'
    },
    {
        game: 'Funglish',
        id: 'tH2zndq6oB'
    },
    {
        game: 'Fuse',
        id: 'WlJCBUHsjK'
    },
    {
        game: 'Ghostbusters',
        id: 'Qasr8JSP2c'
    },
    {
        game: 'Hero Realms',
        id: 'UfbQPfF6jK'
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
        game: 'Life',
        id: 'OCv0s54FtD'
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
        game: 'Love Letters: Batman',
        id: 'TGhVamZQWF'
    },
    {
        game: 'Mancala',
        id: 'jqer4AvMyC'
    },
    {
        game: 'Monopoly',
        id: 'fG5Ax8PA7n'
    },
    {
        game: 'Mouse Trap',
        id: 'T4DfVzfque'
    },
    {
        game: 'Mysterium',
        id: 'nHJNyAWsoo'
    },
    {
        game: 'Myth',
        id: '5CUDNVboxX',
        tracker: 'yes'
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
        game: 'Qwixx',
        id: 'pH1UCBs9dO'
    },
    {
        game: 'Risk: 2210 A.D.',
        id: 'hZLDaGKHJ8'
    },
    {
        game: 'Risk: Call of Duty Black Ops Zombies',
        id: 'HaTeZQLEJK'
    },
    {
        game: 'Risk: GodStorm',
        id: '8jCluNSJ9P'
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
        game: 'Splendor',
        id: 'O0G8z5Wgz1'
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
        game: 'Telestrations: After Dark',
        id: '7xvW4DYkgw'
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
        game: 'Trivial Pursuit',
        id: 'lKRO027F7t'
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
        game: 'Unmatched: Robin Hood vs Bigfoot',
        id: '4c6k4Jh4j3'
    },
    {
        game: 'Uno',
        id: 'Ad9NDUFxmt'
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
        base: 'Orleans',
        exp: 'Orleans: Invasion',
        id: 'WJMq3cM0K3'
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
        console: 'N64'
    },
    {
        game: 'Alien: Isolation',
        console: 'PS3'
    },
    {
        game: 'Aliens: Colonial Marines',
        console: 'PS3'
    },
    {
        game: 'Aliens vs Predator',
        console: 'PS3'
    },
    {
        game: 'Alien3',
        console: 'NES'
    },
    {
        game: 'Ark Park',
        console: 'PS4'
    },
    {
        game: 'Banjo-Kazooie',
        console: 'N64'
    },
    {
        game: 'Bushido Blade 2',
        console: 'PS1'
    },
    {
        game: 'Batman: Arkham Asylum',
        console: 'PS3'
    },
    {
        game: 'Batman: Arkham City',
        console: 'PS3'
    },
    {
        game: 'Batman: Arkham Origins',
        console: 'PS3'
    },
    {
        game: 'BattleToads',
        console: 'GB'
    },
    {
        game: 'Black',
        console: 'PS2'
    },
    {
        game: 'Call of Cthulhu',
        console: 'PS4'
    },
    {
        game: 'Call of Duty 3',
        console: 'PS2'
    },
    {
        game: 'Call of Duty: Black Ops',
        console: 'PS3'
    },
    {
        game: 'Call of Duty: Black Ops II',
        console: 'PS3'
    },
    {
        game: 'Call of Duty: Black Ops III',
        console: 'PS3'
    },
    {
        game: 'Call of Duty: Modern Warfare 2',
        console: 'PS3'
    },
    {
        game: 'ClayFighter 63 1/3',
        console: 'N64'
    },
    {
        game: `Cruis'n USA`,
        console: 'N64'
    },
    {
        game: 'Dead Island',
        console: 'PS3'
    },
    {
        game: 'Diddy Kong Racing',
        console: 'N64'
    },
    {
        game: 'Doom 3: BFD Edition',
        console: 'PS3'
    },
    {
        game: 'Doom 64',
        console: 'N64'
    },
    {
        game: 'F-Zero X',
        console: 'N64'
    },
    {
        game: 'Ghostbusters',
        console: 'PS3'
    },
    {
        game: 'God of War',
        console: 'PS4'
    },
    {
        game: 'GoldenEye 007',
        console: 'N64'
    },
    {
        game: 'GoldenEye 007 Reloaded',
        console: 'PS3'
    },
    {
        game: 'Gran Turismo',
        console: 'PS1'
    },
    {
        game: 'Gran Turismo 2',
        console: 'PS1'
    },
    {
        game: 'Gran Turismo 3 A-Spec',
        console: 'PS2'
    },
    {
        game: 'Gran Turismo 5',
        console: 'PS3'
    },
    {
        game: 'Grand Theft Auto',
        console: 'PS1'
    },
    {
        game: 'Grand Theft Auto III',
        console: 'PS2'
    },
    {
        game: 'Grand Theft Auto: San Andreas',
        console: 'PS2'
    },
    {
        game: 'Grand Theft Auto: Vice City',
        console: 'PS2'
    },
    {
        game: 'Guitar Hero',
        console: 'PS2'
    },
    {
        game: 'Guitar Hero 2',
        console: 'PS2'
    },
    {
        game: 'Guitar Hero III: Legends of Rock',
        console: 'PS2'
    },
    {
        game: 'Guitar Hero: World Tour',
        console: 'PS2'
    },
    {
        game: 'Guitar Hero 5',
        console: 'PS2'
    },
    {
        game: `Guitar Hero Encore Rocks the 80's`,
        console: 'PS2'
    },
    {
        game: 'Gyruss',
        console: 'NES'
    },
    {
        game: 'High Heat Major League Baseball 2003',
        console: 'PS2'
    },
    {
        game: 'Horizon: Zero Dawn',
        console: 'PS4'
    },
    {
        game: 'Jurassic Park',
        console: 'NES'
    },
    {
        game: 'Jurassic Park: Operation Genesis',
        console: 'PS2'
    },
    {
        game: 'Jurassic World: Evolution',
        console: 'PS4'
    },
    {
        game: `Kirby's Dream Land`,
        console: 'GB'
    },
    {
        game: 'Madden NFL 2001',
        console: 'PS1'
    },
    {
        game: `Madden NFL '07`,
        console: 'PS2'
    },
    {
        game: 'Mario Golf',
        console: 'N64'
    },
    {
        game: 'Mario Kart 64',
        console: 'N64'
    },
    {
        game: 'Mario Party',
        console: 'N64'
    },
    {
        game: 'Mega Man 3',
        console: 'NES'
    },
    {
        game: `MLB '06 The Show`,
        console: 'PS2'
    },
    {
        game: 'Mortal Kombat Trilogy',
        console: 'N64'
    },
    {
        game: 'Mortal Kombat vs DC Universe',
        console: 'PS3'
    },
    {
        game: 'NBA Street Vol. 2',
        console: 'PS2'
    },
    {
        game: 'NCAA Football 2003',
        console: 'PS2'
    },
    {
        game: 'Need for Speed Underground 2',
        console: 'PS2'
    },
    {
        game: `NHL '12`,
        console: 'PS3'
    },
    {
        game: 'Nightmare Creatures',
        console: 'N64'
    },
    {
        game: 'Perfect Dark',
        console: 'N64'
    },
    {
        game: `Peter Jackson's King Kong`,
        console: 'PS2'
    },
    {
        game: 'Pilotwings 64',
        console: 'N64'
    },
    {
        game: 'Pokemon: Blue',
        console: 'GB'
    },
    {
        game: 'Pokemon: Red',
        console: 'GB'
    },
    {
        game: 'Pokemon Snap',
        console: 'N64'
    },
    {
        game: 'Pokemon Stadium',
        console: 'N64'
    },
    {
        game: 'Pokemon: Yellow',
        console: 'GB'
    },
    {
        game: 'Pokemon Pinball',
        console: 'GB'
    },
    {
        game: 'Pokemon Trading Card Game',
        console: 'GB'
    },
    {
        game: 'Predator',
        console: 'NES'
    },
    {
        game: 'Predator: Concrete Jungle',
        console: 'PS2'
    },
    {
        game: 'Rampage: Total Destruction',
        console: 'PS2'
    },
    {
        game: 'Rampage: World Tour',
        console: 'N64'
    },
    {
        game: 'Resident Evil 6',
        console: 'PS3'
    },
    {
        game: 'Road Rash 64',
        console: 'N64'
    },
    {
        game: 'San Francisco Rush: Extreme Racing',
        console: 'N64'
    },
    {
        game: `Shaun Palmer's Pro Snowboarder`,
        console: 'PS2'
    },
    {
        game: 'Silent Service',
        console: 'NES'
    },
    {
        game: 'SRS: Street Racing Syndicate',
        console: 'PS2'
    },
    {
        game: 'Star Fox 64',
        console: 'N64'
    },
    {
        game: 'Star Wars',
        console: 'NES'
    },
    {
        game: 'Star Wars: Episode 1 - The Phantom Menace',
        console: 'PS1'
    },
    {
        game: 'Star Wars: Shadows of the Empire',
        console: 'N64'
    },
    {
        game: 'Star Wars Battlefront II',
        console: 'PS2'
    },
    {
        game: 'StarCraft 64',
        console: 'N64'
    },
    {
        game: 'Super Mario 64',
        console: 'N64'
    },
    {
        game: 'Super Mario Bros/Duck Hunt',
        console: 'NES'
    },
    {
        game: 'Super Mario Bros. 2',
        console: 'NES'
    },
    {
        game: 'Super Mario Bros. 3',
        console: 'NES'
    },
    {
        game: 'Super Mario Land',
        console: 'GB'
    },
    {
        game: 'Super Mario Land 2: 6 Golden Coins',
        console: 'GB'
    },
    {
        game: 'Super Smash Bros.',
        console: 'N64'
    },
    {
        game: 'Teenage Mutant Ninja Turtles',
        console: 'NES'
    },
    {
        game: 'Teenage Mutant Ninja Turtles',
        console: 'PS2'
    },
    {
        game: 'Teenage Mutant Ninja Turtles III: The Manhattan Project',
        console: 'NES'
    },
    {
        game: 'Teenage Mutant Ninja Turtles: Mutants in Manhattan',
        console: 'PS3'
    },
    {
        game: 'Tekken 2',
        console: 'PS1'
    },
    {
        game: 'Tekken 3',
        console: 'PS1'
    },
    {
        game: 'Tetris',
        console: 'GB'
    },
    {
        game: 'The Last of Us',
        console: 'PS4'
    },
    {
        game: 'The Lost World: Jurassic Park',
        console: 'PS1'
    },
    {
        game: 'The X-Files: Resist or Serve',
        console: 'PS2'
    },
    {
        game: `Tony Hawk's Pro Skater`,
        console: 'PS1'
    },
    {
        game: `Tony Hawk's Pro Skater 2`,
        console: 'PS1'
    },
    {
        game: `Tony Hawk's Pro Skater 3`,
        console: 'PS3'
    },
    {
        game: 'Turok: Dinosaur Hunter',
        console: 'N64'
    },
    {
        game: 'Twisted Metal',
        console: 'PS3'
    },
    {
        game: 'Twisted Metal III',
        console: 'PS1'
    },
    {
        game: 'War of the Monsters',
        console: 'PS2'
    },
    {
        game: 'Warpath: Jurassic Park',
        console: 'PS1'
    },
    {
        game: 'Wave Race 64',
        console: 'N64'
    },
    {
        game: `Wayne Gretzky's 3D Hockey`,
        console: 'N64'
    },
    {
        game: 'Yoshi',
        console: 'GB'
    }
];

const clientId = '6M6K1PSC4C';
const searchURL = 'https://www.boardgameatlas.com/api/search';
const trackerURL = 'https://docs.google.com/spreadsheets/d/10bqq3FyHzjih2ou_9BnSm1ke16qN-qKn4oegymVOhGc/';
let selectedGame = 'none';
let selectedExp = 'none';
let expCount = 0;

// generate clean url for fetch request
function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

// call api with query value and params
function getGames(gameQuery, gameName) {
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
      .then(responseJson => displayResults(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
}

// display details for selected game
function displayResults(results) {
    console.log(results);
    $('.games').hide();
    $('.game-overview').empty();
    $('.game-overview').show();

    let getImage = results.games.map(imageVal => imageVal.image_url);
    let urlLink = results.games.map(gameUrl => gameUrl.url);

    $('.game-overview').append(
        `<div class='game-feature block'>
        <h2>${selectedGame}</h2>
        <img src='${getImage[0]}'>
        <p class='tracker-append'><a href='${urlLink[0]}' class='link' target='_blank'>View details</a></p>
        </div>`
    );

    for (let i = 0; i < gameIds.length; i++) {
        if(gameIds[i].game === selectedGame && gameIds[i].tracker === 'yes') {
            console.log('good');
            $('.tracker-append').append(
                `<span><br /><a class='link' href='${trackerURL}' target='_blank'>View game tracker</a></span>`
            );
        }
    }

    $('.game-feature').append(
        `<button class='exp-link' onclick='findExpansions("${selectedGame}")'>Expansions</button>
        <section class='expansions block'></section>`
    )
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
            `<div class="game-block random"><a class="game-link random" onclick='randomGame()'>Generate Random</a></div>`
        );

        let gameList = gameIds.map(name => name.game);
        let idList = gameIds.map(gameid => gameid.id);

        for(let i = 0; i < gameList.length; i++) {
            $('.games').append(
                `<div class='game-block'><a class='game-link' onclick='getGames("${idList[i]}", "${gameList[i]}")'>${gameList[i]}</a></div>`
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

    for(let i = 0; i < videoGames.length; i++) {
        if (videoGames[i].console === con) {
            $('.videos').append(
                `<div class='game-block'>${vgName[i]}</div>`
            );
        }
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
            getGames(gameIds[i].id, gameIds[i].game);
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


function jsInit() {
    showMovies();
    showGames();
    showVGconsoles();
}

$(jsInit);