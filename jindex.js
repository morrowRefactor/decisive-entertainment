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
        id: '4G32qGJZWs'
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
        game: 'Legendary Encounters: Aliens',
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
        id: '5CUDNVboxX'
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
        exp: 'Arkham Horror: The Forgotten Age'
    },
    {
        base: 'AvP: The Hunt Begins',
        exp: 'AvP: Hot Landing Zone'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster: Next Level'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster: Crash Landing'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster: Implements of Destruction'
    },
    {
        base: 'Boss Monster',
        exp: 'Rise of the Mini-Boss'
    },
    {
        base: 'Boss Monster',
        exp: 'Boss Monster: Tools of Hero-Kind'
    },
    {
        base: 'Carcassonne',
        exp: 'Carcassonne: Bridges, Castles & Bazaaars'
    },
    {
        base: 'Carcassonne',
        exp: 'Carcassonne: The Princess and the Dragon'
    },
    {
        base: 'Evolution',
        exp: 'Evolution: Climate Change'
    },
    {
        base: 'Evolution',
        exp: 'Evolution: Flight'
    },
    {
        base: 'Legendary: Alien',
        exp: 'Legendary: Alien Deck Building Expansion'
    },
    {
        base: 'Orleans',
        exp: 'Orleans: Invasion'
    },
    {
        base: 'Ticket to Ride',
        exp: 'Ticket to Ride: USA 1910'
    },
    {
        base: 'Zombicide: Black Plague',
        exp: 'Zombicide: No Rest for the Wicked'
    },
    {
        base: 'Zombicide: Green Horde',
        exp: 'Zombicide: No Rest for the Wicked'
    },
    {
        base: 'Zombicide: Invader',
        exp: 'Zombicide: Black Ops'
    },
    {
        base: 'Zombicide: Dark Side',
        exp: 'Zombicide: Black Ops'
    }
];

const clientId = '6M6K1PSC4C';
const searchURL = 'https://www.boardgameatlas.com/api/search';
let selectedGame = 'none';

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

function displayResults(results) {
    console.log(results);
    $('.games').hide();
    $('.game-overview').empty();
    $('.game-overview').show();

    let gameName = results.games.map(nameVal => nameVal.name);
    let getImage = results.games.map(imageVal => imageVal.image_url);
    let urlLink = results.games.map(gameUrl => gameUrl.url);

    $('.game-overview').append(
        `<div class='game-feature block'>
        <h2>${selectedGame}</h2>
        <img src='${getImage[0]}'>
        <p><a href='${urlLink[0]}' class='link' target='_blank'>Link</a></p>
        </div>`
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

        let gameList = gameIds.map(name => name.game);
        let idList = gameIds.map(gameid => gameid.id);

        for(let i = 0; i < gameList.length; i++) {
            $('.games').append(
                `<div class='game-block'><a class='game-link' onclick='getGames("${idList[i]}", "${gameList[i]}")'>${gameList[i]}</a></div>`
            );
        }
    })
}

function backNav() {
    $('.buttonnav').hide();
    $('.game-overview').hide();
    $('.games').empty();
    $('.games').show();

    let gameList = gameIds.map(name => name.game);
    let idList = gameIds.map(gameid => gameid.id);

    for(let i = 0; i < gameList.length; i++) {
        $('.games').append(
            `<div class='game-block'><a class='game-link' onclick='getGames("${idList[i]}", "${gameList[i]}")'>${gameList[i]}</a></div>`
        );
    }
}


function jsInit() {
    showMovies();
    showGames();
}

$(jsInit);