const midwestside = {
    roomId: '59-12', // Starting the node in the top-left with W. 59th and 12th Ave.
    rooms: [

//Begin 59th St.
    {
        id: '59-12',
        name: 'W. 59th St. and 12th Ave.',
        exit: 
        [//Can't go North or West
            {
                dir: ['e', 'east'],
                id: '59-wend'
            },
            {
                dir: ['s', 'south'],
                id: '58-12'
            },
        ],
    },

    {
        id: '59-wend',
        name: 'W. 59th St. and West End Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-wend'
            },
            {
                dir: ['e', 'east'],
                id: '59-amst'
            },
            {
                dir: ['w', 'west'],
                id: '59-12'
            },
            {
                dir: ['s', 'south'],
                id: '58-11'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: 'S-A-subway-ent'
            },
        ],
    },

    {
        id: '59-amst',
        name: 'W. 59th St. and Amsterdam Ave.',
        desc: `There is a subway entrance at this corner.`, // SUBWAY ENTERANCE
        
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-amst'
            },
            {
                dir: ['e', 'east'],
                id: '59-colu'
            },
            {
                dir: ['w', 'west'],
                id: '59-wend'
            },
            {
                dir: ['s', 'south'],
                id: '58-10'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: '59-amst-subway-ent'
            },
        ],
    },

    {
        id: '59-colu',
        name: 'W. 59th St. and Columbus Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-colu'
            },
            {
                dir: ['e', 'east'],
                id: '59-broa'
            },
            {
                dir: ['w', 'west'],
                id: '59-amst'
            },
            {
                dir: ['s', 'south'],
                id: '58-9'
            },
        ],
    },

    {
        id: '59-broa',
        name: 'W. 59th St. and Broadway',   
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-broa'
            },
            {
                dir: ['e', 'east'],
                id: '59-cent'
            },
            {
                dir: ['w', 'west'],
                id: '59-colu'
            },
            {
                dir: ['s', 'south'],
                id: 'broa-8'
            },
        ],
    },

    {
        id: '59-cent',
        name: 'W. 59th St. and Central Pk. W.',  
        desc: `The monument to Christopher Columbus surveys a large undistinguished building called the Coliseum, which shows no signs of its Roman heritage.`, 
        exit: 
        [
            {//Game takes you to 61st and Central Park W. Sort-of checks out on the map
                dir: ['n', 'north'],
                id: '61-cent'
            },
            {
                dir: ['e', 'east'],
                id: 'cent-7'
            },
            {
                dir: ['w', 'west'],
                id: '59-broa'
            },
            {
                dir: ['s', 'south'],
                id: 'broa-8'
            },
        ],
    },
//Somewhere
    {
        id: '59-7',
        name: 'Central Park S. and 7th Ave.',
        exit: 
        [
            {//Somewhere in central park
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: '59-amer'
            },
            {
                dir: ['w', 'west'],
                id: '59-cent'
            },
            {
                dir: ['s', 'south'],
                id: '58-7'
            },
        ],
    },
//somewhere
    {
        id: '59-amer',
        name: 'Central Park S. and Ave of Americas',
        desc: `There is a restaurant called Nedicks here.`, // Nedicks entrance
        exit: 
        [
            {//Somewhere in Central Park
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: '59-wdri'
            },
            {
                dir: ['w', 'west'],
                id: '59-7'
            },
            {
                dir: ['s', 'south'],
                id: '58-amer'
            },
            {//Nedicks Entrance
                dir: ['nedicks','enter',],
                id: 'cent-amer-nedi'
            },
        ],
    },
//End 59th St.

//Begin 58th St.
    {
        id: '58-12',
        name: 'W. 58th St. and 12th Ave.',
        exit: 
        [//Can't go West
            {
                dir: ['n', 'north'],
                id: '59-12'
            },
            {
                dir: ['e', 'east'],
                id: '58-11'
            },
            {
                dir: ['s', 'south'],
                id: '57-12'
            },
        ],
    },

    {
        id: '58-11',
        name: 'W. 58th St. and 11th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '59-wend'
            },
            {
                dir: ['e', 'east'],
                id: '58-10'
            },
            {
                dir: ['w', 'west'],
                id: '58-12'
            },
            {
                dir: ['s', 'south'],
                id: '57-11'
            },
        ],
    },

    {
        id: '58-10',
        name: 'W. 58th St. and 10th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '59-amst'
            },
            {
                dir: ['e', 'east'],
                id: '58-9'
            },
            {
                dir: ['w', 'west'],
                id: '58-11'
            },
            {
                dir: ['s', 'south'],
                id: '57-10'
            },
        ],
    },

    {
        id: '58-9',
        name: 'W. 58th St. and 9th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '59-colu'
            },
            {
                dir: ['e', 'east'],
                id: '58-8'
            },
            {
                dir: ['w', 'west'],
                id: '58-10'
            },
            {
                dir: ['s', 'south'],
                id: '57-9'
            },
        ],
    },

    {
        id: 'broa-8',
        name: 'Broadway and 8th Ave.',
        desc: `There is a subway entrance at this corner.`, // SUBWAY ENTERANCE
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '59-cent'
            },
            {
                dir: ['e', 'east'],
                id: '58-broa'
            },
            {
                dir: ['w', 'west'],
                id: '59-broa'
            },
            {
                dir: ['s', 'south'],
                id: '58-8'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: 'broa-8-subway-ent'
            },
        ],
    },

    {
        id: '58-8',
        name: 'W. 58th St. and 8th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'broa-8'
            },
            {
                dir: ['e', 'east'],
                id: '58-broa'
            },
            {
                dir: ['w', 'west'],
                id: '58-9'
            },
            {
                dir: ['s', 'south'],
                id: '57-8'
            },
        ],
    },

    {
        id: '58-broa',
        name: 'W. 58th St. and Broadway',
        desc: `Cars spin around on Columbus Circle like atomic particles in a particle accelerator, while pedestrians scamper for safety as best they can. Clearly, this is an experiment designed to control the city's expanding population.`,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'broa-8'
            },
            {
                dir: ['e', 'east'],
                id: '58-7'
            },
            {
                dir: ['w', 'west'],
                id: '58-8'
            },
            {
                dir: ['s', 'south'],
                id: '57-broa'
            },
        ],
    },

    {
        id: '58-7',
        name: 'W. 58th St. and 7th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'cent-7'
            },
            {
                dir: ['e', 'east'],
                id: '58-amer'
            },
            {
                dir: ['w', 'west'],
                id: '58-broa'
            },
            {
                dir: ['s', 'south'],
                id: '57-7'
            },
        ],
    },

    {
        id: '58-amer',
        name: 'W. 58th St. and Ave of Americas',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'cent-amer'
            },
            {
                dir: ['e', 'east'],
                id: '58-wdri'
            },
            {
                dir: ['w', 'west'],
                id: '58-7'
            },
            {
                dir: ['s', 'south'],
                id: '57-amer'
            },
        ],
    },
//End 58th St.

//Start 57th St.
    {
        id: '57-henr',
        name: 'W. 57th St. and Henry Hudson Pkwy.',
        exit: 
        [//Can't go west
            {
                dir: ['n', 'north'],
                id: '72-henr'
            },
            {
                dir: ['e', 'east'],
                id: '57-12'
            },
            {
                dir: ['s', 'south'],
                id: '44-henr'
            },
        ],
    },

    {
        id: '57-12',
        name: 'W. 57th St. and 12th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '58-12'
            },
            {
                dir: ['e', 'east'],
                id: '57-11'
            },
            {
                dir: ['w', 'west'],
                id: '57-henr'
            },
            {//Goes straight from 57th to 55th
                dir: ['s', 'south'],
                id: '55-12'
            },
        ],
    },

    {
        id: '57-11',
        name: 'W. 57th St. and 11th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '58-11'
            },
            {
                dir: ['e', 'east'],
                id: '57-10'
            },
            {
                dir: ['w', 'west'],
                id: '57-12'
            },
            {
                dir: ['s', 'south'],
                id: '56-11'
            },
        ],
    },

    {
        id: '57-10',
        name: 'W. 57th St. and 10th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '58-10'
            },
            {
                dir: ['e', 'east'],
                id: '57-9'
            },
            {
                dir: ['w', 'west'],
                id: '57-11'
            },
            {
                dir: ['s', 'south'],
                id: '56-10'
            },
        ],
    },

    {
        id: '57-9',
        name: 'W. 57th St. and 9th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '58-9'
            },
            {
                dir: ['e', 'east'],
                id: '57-8'
            },
            {
                dir: ['w', 'west'],
                id: '57-10'
            },
            {
                dir: ['s', 'south'],
                id: '56-9'
            },
        ],
    },

    {
        id: '57-8',
        name: 'W. 57th St. and 8th Ave.',
        desc: `There is a Chock Full-O-Nuts at this intersection.`, // Restaurant entrance
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '58-8'
            },
            {
                dir: ['e', 'east'],
                id: '57-broa'
            },
            {
                dir: ['w', 'west'],
                id: '57-9'
            },
            {
                dir: ['s', 'south'],
                id: '56-8'
            },
            {//Chock Full-O-Nuts entrance
                dir: ['enter', 'chock'],
                id: '57-8-chock'
            },
        ],
    },

    {
        id: '57-broa',
        name: 'W. 57th St. and Broadway',
        desc: `At street level Carnegie Hall is basically a row of posters announcing its upcoming events, which this week include a concert of Puccini arias by Linda Ronstadt, the Tuscon Festival Ballet's performance of Twyla Tharp's SWAN LAKE, the Canadian Youth Philharmonic in an all-Beethoven program, and a poetry reading by Allen Ginzberg.`,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '58-broa'
            },
            {
                dir: ['e', 'east'],
                id: '57-7'
            },
            {
                dir: ['w', 'west'],
                id: '57-8'
            },
            {
                dir: ['s', 'south'],
                id: '56-broa'
            },
        ],
    },

    {
        id: '57-7',
        name: 'W. 57th St. and 7th Ave.',
        desc: `There is a subway entrance at this corner.`, //Subway entrance
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '58-7'
            },
            {
                dir: ['e', 'east'],
                id: '57-amer'
            },
            {
                dir: ['w', 'west'],
                id: '57-broa'
            },
            {
                dir: ['s', 'south'],
                id: '56-7'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: '57-7-subway-ent'
            },
        ],
    },

    {
        id: '57-amer',
        name: 'W. 57th St. and Ave of Americas',
        desc: `There is a subway entrance at this corner.`, //Subway entrance
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '58-amer'
            },
            {
                dir: ['e', 'east'],
                id: '57-5'
            },
            {
                dir: ['w', 'west'],
                id: '57-7'
            },
            {
                dir: ['s', 'south'],
                id: '56-amer'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: '57-amer-subway-ent'
            },
        ],
    },
//End 57th St.

//Start 56th St.
 //There is no 56-12
{
    id: '56-11',
    name: 'W. 56th St. and 11th Ave.',
    exit: 
    [//Can't go West
        {
            dir: ['n', 'north'],
            id: '57-1'
        },
        {
            dir: ['e', 'east'],
            id: '56-10'
        },
        {
            dir: ['s', 'south'],
            id: '55-11'
        },
    ],
},

{
    id: '56-10',
    name: 'W. 56th St. and 10th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '57-10'
        },
        {
            dir: ['e', 'east'],
            id: '56-9'
        },
        {
            dir: ['w', 'west'],
            id: '56-11'
        },
        {
            dir: ['s', 'south'],
            id: '55-10'
        },
    ],
},

{
    id: '56-9',
    name: 'W. 56th St. and 9th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '57-9'
        },
        {
            dir: ['e', 'east'],
            id: '56-8'
        },
        {
            dir: ['w', 'west'],
            id: '56-10'
        },
        {
            dir: ['s', 'south'],
            id: '55-9'
        },
    ],
},

{
    id: '56-8',
    name: 'W. 56th St. and 8th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '57-8'
        },
        {
            dir: ['e', 'east'],
            id: '56-broa'
        },
        {
            dir: ['w', 'west'],
            id: '56-9'
        },
        {
            dir: ['s', 'south'],
            id: '55-8'
        },
    ],
},

{
    id: '56-broa',
    name: 'W. 56th St. and Broadway',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '57-broa'
        },
        {
            dir: ['e', 'east'],
            id: '56-7'
        },
        {
            dir: ['w', 'west'],
            id: '56-8'
        },
        {
            dir: ['s', 'south'],
            id: '55-broa'
        },
    ],
},

{
    id: '56-7',
    name: 'W. 56th St. and 7th Ave.',
    desc: `The block from 55th to 56th is taken up by the Omni Park Central Hotel which you seem to remember by another name, though you can't remember what it was.`,
    exit: 
    [//Player cannot enter Omni Park Central Hotel
        {
            dir: ['n', 'north'],
            id: '57-7'
        },
        {
            dir: ['e', 'east'],
            id: '56-amer'
        },
        {
            dir: ['w', 'west'],
            id: '56-broa'
        },
        {
            dir: ['s', 'south'],
            id: '55-7'
        },
    ],
},

{
    id: '56-amer',
    name: 'W. 56th St. and Ave of Americas',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '57-amer'
        },
        {
            dir: ['e', 'east'],
            id: '56-5'
        },
        {
            dir: ['w', 'west'],
            id: '56-7'
        },
        {
            dir: ['s', 'south'],
            id: '55-amer'
        },
    ],
},
//End 56th St.

//Start 55th St.
{
    id: '55-12',
    name: 'W. 55th St. and 12th Ave.',
    exit: 
    [//Can't go West
        {//Goes straight from 55th to 57th
            dir: ['n', 'north'],
            id: '57-12'
        },
        {
            dir: ['e', 'east'],
            id: '55-11'
        },

        {
            dir: ['s', 'south'],
            id: '54-12'
        },
    ],
},

{
    id: '55-11',
    name: 'W. 55th St. and 11th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '56-11'
        },
        {
            dir: ['e', 'east'],
            id: '55-10'
        },
        {
            dir: ['w', 'west'],
            id: '55-12'
        },
        {
            dir: ['s', 'south'],
            id: '54-11'
        },
    ],
},

{
    id: '55-10',
    name: 'W. 55th St. and 10th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '56-10'
        },
        {
            dir: ['e', 'east'],
            id: '55-9'
        },
        {
            dir: ['w', 'west'],
            id: '55-11'
        },
        {
            dir: ['s', 'south'],
            id: '54-10'
        },
    ],
},

{
    id: '55-9',
    name: 'W. 55th St. and 9th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '56-9'
        },
        {
            dir: ['e', 'east'],
            id: '55-8'
        },
        {
            dir: ['w', 'west'],
            id: '55-10'
        },
        {
            dir: ['s', 'south'],
            id: '54-9'
        },
    ],
},

{
    id: '55-8',
    name: 'W. 55th St. and 8th Ave.',
    desc: `There is a Greek Gyro located here.`, // Restaurant entrance
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '56-8'
        },
        {
            dir: ['e', 'east'],
            id: '55-broa'
        },
        {
            dir: ['w', 'west'],
            id: '55-9'
        },
        {
            dir: ['s', 'south'],
            id: '54-8'
        },
        {
            dir: ['enter', 'greek', 'gyro'],
            id: '55-8-gyro'
        },
    ],
},

{
    id: '55-broa',
    name: 'W. 55th St. and Broadway',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '56-broa'
        },
        {
            dir: ['e', 'east'],
            id: '55-7'
        },
        {
            dir: ['w', 'west'],
            id: '55-8'
        },
        {
            dir: ['s', 'south'],
            id: '54-broa'
        },
    ],
},

{
    id: '55-7',
    name: 'W. 55th St. and 7th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '56-7'
        },
        {
            dir: ['e', 'east'],
            id: '5-amer'
        },
        {
            dir: ['w', 'west'],
            id: '55-broa'
        },
        {
            dir: ['s', 'south'],
            id: '54-7'
        },
    ],
},

{
    id: '55-amer',
    name: 'W. 55th St. and Ave of America',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '56-amer'
        },
        {
            dir: ['e', 'east'],
            id: '55-5'
        },
        {
            dir: ['w', 'west'],
            id: '55-7'
        },
        {
            dir: ['s', 'south'],
            id: '54-amer'
        },
    ],
},
//End 55th St.

//Start 54th St.
{
    id: '54-12',
    name: 'W. 54th St. and 12th Ave.',
    exit: 
    [//Can't go west
        {
            dir: ['n', 'north'],
            id: '55-12'
        },
        {
            dir: ['e', 'east'],
            id: '54-11'
        },
        {
            dir: ['s', 'south'],
            id: '53-12'
        },
    ],
},

{
    id: '54-11',
    name: 'W. 54th St. and 11th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '55-11'
        },
        {
            dir: ['e', 'east'],
            id: '54-10'
        },
        {
            dir: ['w', 'west'],
            id: '54-12'
        },
        {
            dir: ['s', 'south'],
            id: '53-11'
        },
    ],
},

{
    id: '54-10',
    name: 'W. 54th St. and 10th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '55-10'
        },
        {
            dir: ['e', 'east'],
            id: '54-9'
        },
        {
            dir: ['w', 'west'],
            id: '54-11'
        },
        {
            dir: ['s', 'south'],
            id: '53-10'
        },
    ],
},

{
    id: '54-9',
    name: 'W. 54th St. and 9th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '55-9'
        },
        {
            dir: ['e', 'east'],
            id: '54-8'
        },
        {
            dir: ['w', 'west'],
            id: '54-10'
        },
        {
            dir: ['s', 'south'],
            id: '53-9'
        },
    ],
},

{
    id: '54-8',
    name: 'W. 54th St. and 8th Ave.',
    exit: 
    [//I found a tenement here
        {
            dir: ['n', 'north'],
            id: '55-8'
        },
        {
            dir: ['e', 'east'],
            id: '54-broa'
        },
        {
            dir: ['w', 'west'],
            id: '54-9'
        },
        {
            dir: ['s', 'south'],
            id: '53-8'
        },
    ],
},

{
    id: '54-broa',
    name: 'W. 54th St. and Broadway',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '55-broa'
        },
        {
            dir: ['e', 'east'],
            id: '54-7'
        },
        {
            dir: ['w', 'west'],
            id: '54-8'
        },
        {
            dir: ['s', 'south'],
            id: '53-broa'
        },
    ],
},

{
    id: '54-7',
    name: 'W. 54th St. and 7th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '55-7'
        },
        {
            dir: ['e', 'east'],
            id: '54-amer'
        },
        {
            dir: ['w', 'west'],
            id: '54-broa'
        },
        {
            dir: ['s', 'south'],
            id: '53-7'
        },
    ],
},

{
    id: '54-amer',
    name: 'W. 54th St. and Ave of Americas',
    desc: `There is a pizzeria here.`,//Restaurant Entrance
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '55-amer'
        },
        {
            dir: ['e', 'east'],
            id: '54-5'
        },
        {
            dir: ['w', 'west'],
            id: '54-7'
        },
        {
            dir: ['s', 'south'],
            id: '53-amer'
        },
        {
            dir: ['enter', 'pizzeria', 'pizza',],
            id: '54-amer-pizza'
        },
    ],
},
//End 54th St.

//Start 53rd St.
{
    id: '53-12',
    name: 'W. 53rd St. and 12th Ave.',
    exit: 
    [//Can't go west
        {
            dir: ['n', 'north'],
            id: '54-12'
        },
        {
            dir: ['e', 'east'],
            id: '53-11'
        },
        {
            dir: ['s', 'south'],
            id: '52-12'
        },
    ],
},

{
    id: '53-11',
    name: 'W. 53rd St. and 11th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '54-11'
        },
        {
            dir: ['e', 'east'],
            id: '53-10'
        },
        {
            dir: ['w', 'west'],
            id: '53-12'
        },
        {
            dir: ['s', 'south'],
            id: '52-11'
        },
    ],
},

{
    id: '53-10',
    name: 'W. 53rd St. and 10th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '54-10'
        },
        {
            dir: ['e', 'east'],
            id: '53-9'
        },
        {
            dir: ['w', 'west'],
            id: '53-11'
        },
        {
            dir: ['s', 'south'],
            id: '52-10'
        },
    ],
},

{
    id: '53-9',
    name: 'W. 53rd St. and 9th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '54-9'
        },
        {
            dir: ['e', 'east'],
            id: '53-8'
        },
        {
            dir: ['w', 'west'],
            id: '53-10'
        },
        {
            dir: ['s', 'south'],
            id: '52-9'
        },
    ],
},

{
    id: '53-8',
    name: 'W. 53rd St. and 8th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '54-8'
        },
        {
            dir: ['e', 'east'],
            id: '53-broa'
        },
        {
            dir: ['w', 'west'],
            id: '53-9'
        },
        {
            dir: ['s', 'south'],
            id: '52-8'
        },
    ],
},

{
    id: '53-broa',
    name: 'W. 53rd St. and Broadway',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '54-broa'
        },
        {
            dir: ['e', 'east'],
            id: '53-7'
        },
        {
            dir: ['w', 'west'],
            id: '53-8'
        },
        {
            dir: ['s', 'south'],
            id: '52-broa'
        },
    ],
},

{
    id: '53-7',
    name: 'W. 53rd St. and 7th Ave.',
    desc: 'There is a subway entrance at this corner.', //Subway Entrance
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '54-7'
        },
        {
            dir: ['e', 'east'],
            id: '53-amer'
        },
        {
            dir: ['w', 'west'],
            id: '53-broa'
        },
        {
            dir: ['s', 'south'],
            id: '52-7'
        },
        {//Subway Entrance
            dir: ['subway', 'entrance'],
            id: '53-7-subway-ent'
        },
    ],
},

{
    id: '53-amer',
    name: 'W. 53rd St. and Ave of Americas',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '54-amer'
        },
        {
            dir: ['e', 'east'],
            id: '53-5'
        },
        {
            dir: ['w', 'west'],
            id: '53-7'
        },
        {
            dir: ['s', 'south'],
            id: '52-amer'
        },
    ],
},
//End 53rd St.

//Start 52nd St.
{
    id: '52-12',
    name: 'W. 52nd St. and 12th Ave.',
    exit: 
    [//Can't go west
        {
            dir: ['n', 'north'],
            id: '53-12'
        },
        {
            dir: ['e', 'east'],
            id: '52-11'
        },
        {
            dir: ['s', 'south'],
            id: '51-12'
        },
    ],
},

{
    id: '52-11',
    name: 'W. 52nd St. and 11th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '53-11'
        },
        {
            dir: ['e', 'east'],
            id: '52-10'
        },
        {
            dir: ['w', 'west'],
            id: '52-12'
        },
        {
            dir: ['s', 'south'],
            id: '51-11'
        },
    ],
},

{
    id: '52-10',
    name: 'W. 52nd St. and 10th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '53-10'
        },
        {
            dir: ['e', 'east'],
            id: '52-9'
        },
        {
            dir: ['w', 'west'],
            id: '52-11'
        },
        {
            dir: ['s', 'south'],
            id: '51-10'
        },
    ],
},

{
    id: '52-9',
    name: 'W. 52nd St. and 9th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '53-9'
        },
        {
            dir: ['e', 'east'],
            id: '52-8'
        },
        {
            dir: ['w', 'west'],
            id: '52-10'
        },
        {
            dir: ['s', 'south'],
            id: '51-9'
        },
    ],
},

{
    id: '52-8',
    name: 'W. 52nd St. and 8th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '53-8'
        },
        {
            dir: ['e', 'east'],
            id: '52-broa'
        },
        {
            dir: ['w', 'west'],
            id: '52-9'
        },
        {
            dir: ['s', 'south'],
            id: '51-8'
        },
    ],
},

{
    id: '52-broa',
    name: 'W. 52nd St. and Broadway',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '53-broa'
        },
        {
            dir: ['e', 'east'],
            id: '52-7'
        },
        {
            dir: ['w', 'west'],
            id: '52-8'
        },
        {
            dir: ['s', 'south'],
            id: '51-broa'
        },
    ],
},

{
    id: '52-7',
    name: 'W. 52nd St. and 7th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '53-7'
        },
        {
            dir: ['e', 'east'],
            id: '52-amer'
        },
        {
            dir: ['w', 'west'],
            id: '52-broa'
        },
        {
            dir: ['s', 'south'],
            id: '51-7'
        },
    ],
},

{
    id: '52-amer',
    name: 'W. 52nd St. and Ave of Americas',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '53-amer'
        },
        {
            dir: ['e', 'east'],
            id: '52-5'
        },
        {
            dir: ['w', 'west'],
            id: '52-7'
        },
        {
            dir: ['s', 'south'],
            id: '51-amer'
        },
    ],
},
//End 52nd St.

//Start 51st St.
{
    id: '51-12',
    name: 'W. 51st St. and 12th Ave.',
    exit: 
    [//Can't go west
        {
            dir: ['n', 'north'],
            id: '52-12'
        },
        {
            dir: ['e', 'east'],
            id: '51-A'
        },
        {
            dir: ['s', 'south'],
            id: '50-12'
        },
    ],
},

{
    id: '51-11',
    name: 'W. 51st St. and 11th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '52-11'
        },
        {
            dir: ['e', 'east'],
            id: '51-10'
        },
        {
            dir: ['w', 'west'],
            id: '51-12'
        },
        {
            dir: ['s', 'south'],
            id: '50-11'
        },
    ],
},

{
    id: '51-10',
    name: 'W. 51st St. and 10th Ave.',
    desc: 'There is a Chock Full-O-Nuts at this intersection.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '52-10'
        },
        {
            dir: ['e', 'east'],
            id: '51-9'
        },
        {
            dir: ['w', 'west'],
            id: '51-11'
        },
        {
            dir: ['s', 'south'],
            id: '50-10'
        },
        {
            dir: ['enter', 'chock', 'nuts',],
            id: '51-10-chock'
        },
    ],
},

{
    id: '51-9',
    name: 'W. 51st St. and 9th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '52-9'
        },
        {
            dir: ['e', 'east'],
            id: '51-8'
        },
        {
            dir: ['w', 'west'],
            id: '51-10'
        },
        {
            dir: ['s', 'south'],
            id: '50-9'
        },
    ],
},

{
    id: '51-8',
    name: 'W. 51st St. and 8th Ave.',
    desc: 'There is a luncheonette on the corner.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '52-8'
        },
        {
            dir: ['e', 'east'],
            id: '51-broa'
        },
        {
            dir: ['w', 'west'],
            id: '51-9'
        },
        {
            dir: ['s', 'south'],
            id: '50-8'
        },
        {
            dir: ['enter', 'lunch', 'luncheonette',],
            id: '51-8-lunch'
        },
    ],
},

{
    id: '51-broa',
    name: 'W. 51st St. and Broadway',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '52-broa'
        },
        {
            dir: ['e', 'east'],
            id: '51-7'
        },
        {
            dir: ['w', 'west'],
            id: '51-8'
        },
        {
            dir: ['s', 'south'],
            id: '50-broa'
        },
    ],
},

{
    id: '51-7',
    name: 'W. 51st St. and 7th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '52-7'
        },
        {
            dir: ['e', 'east'],
            id: '51-amer'
        },
        {
            dir: ['w', 'west'],
            id: '51-broa'
        },
        {
            dir: ['s', 'south'],
            id: '50-7'
        },
    ],
},

{
    id: '51-amer',
    name: 'W. 51st St. and Ave of Americas',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '52-amer'
        },
        {
            dir: ['e', 'east'],
            id: '51-5'
        },
        {
            dir: ['w', 'west'],
            id: '51-7'
        },
        {
            dir: ['s', 'south'],
            id: '50-amer'
        },
    ],
},
//End 51st St.

//Start 50th St.
{
    id: '50-12',
    name: 'W. 50th St. and 12th Ave.',
    exit: 
    [//Can't go west
        {
            dir: ['n', 'north'],
            id: '51-12'
        },
        {
            dir: ['e', 'east'],
            id: '50-11'
        },
        {
            dir: ['s', 'south'],
            id: '49-12'
        },
    ],
},

{
    id: '50-11',
    name: 'W. 50th St. and 11th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '51-11'
        },
        {
            dir: ['e', 'east'],
            id: '50-10'
        },
        {
            dir: ['w', 'west'],
            id: '50-12'
        },
        {
            dir: ['s', 'south'],
            id: '49-11'
        },
    ],
},

{
    id: '50-10',
    name: 'W. 50th St. and 10th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '51-10'
        },
        {
            dir: ['e', 'east'],
            id: '50-9'
        },
        {
            dir: ['w', 'west'],
            id: '50-11'
        },
        {
            dir: ['s', 'south'],
            id: '49-10'
        },
    ],
},

{
    id: '50-9',
    name: 'W. 50th St. and 9th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '51-9'
        },
        {
            dir: ['e', 'east'],
            id: '50-8'
        },
        {
            dir: ['w', 'west'],
            id: '50-10'
        },
        {
            dir: ['s', 'south'],
            id: '49-9'
        },
    ],
},

{
    id: '50-8',
    name: 'W. 50th St. and 8th Ave.',
    desc: 'There is a subway entrance at this corner.', //Subway Entrance
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '51-8'
        },
        {
            dir: ['e', 'east'],
            id: '50-broa'
        },
        {
            dir: ['w', 'west'],
            id: '50-9'
        },
        {
            dir: ['s', 'south'],
            id: '49-8'
        },
        {//Subway Entrance
            dir: ['subway', 'entrance'],
            id: '50-8-subway-ent'
        },
    ],
},

{
    id: '50-broa',
    name: 'W. 50th St. and Broadway',
    desc: 'There is a subway entrance at this corner.', //Subway Entrance
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '51-broa'
        },
        {
            dir: ['e', 'east'],
            id: '50-7'
        },
        {
            dir: ['w', 'west'],
            id: '50-8'
        },
        {
            dir: ['s', 'south'],
            id: '49-broa'
        },
        {//Subway Entrance
            dir: ['subway', 'entrance'],
            id: '50-broa-subway-ent'
        },
    ],
},

{
    id: '50-7',
    name: 'W. 50th St. and 7th Ave.',
    desc: 'Radio City Music Hall -- its bronze doors hiding the largest chandeliers and the best legs in the world.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '51-7'
        },
        {
            dir: ['e', 'east'],
            id: '50-amer'
        },
        {
            dir: ['w', 'west'],
            id: '50-broa'
        },
        {
            dir: ['s', 'south'],
            id: '49-7'
        },
    ],
},

{
    id: '50-amer',
    name: 'W. 50th St. and Ave of Americas',
    desc: 'There is a subway entrance at this corner.', //Subway Entrance
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '51-amer'
        },
        {
            dir: ['e', 'east'],
            id: '50-5'
        },
        {
            dir: ['w', 'west'],
            id: '50-7'
        },
        {
            dir: ['s', 'south'],
            id: '49-amer'
        },
        {//Subway Entrance
            dir: ['subway', 'entrance'],
            id: '50-amer-subway-ent'
        },
    ],
},
//End 50th St.

//Start 49th St.
{
    id: '49-12',
    name: 'W. 49th St. and 12th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '50-12'
        },
        {
            dir: ['e', 'east'],
            id: '49-11'
        },
        {
            dir: ['s', 'south'],
            id: '48-12'
        },
    ],
},

{
    id: '49-11',
    name: 'W. 49th St. and 11th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '50-11'
        },
        {
            dir: ['e', 'east'],
            id: '49-10'
        },
        {
            dir: ['w', 'west'],
            id: '49-12'
        },
        {
            dir: ['s', 'south'],
            id: '48-11'
        },
    ],
},

{
    id: '49-10',
    name: 'W. 49th St. and 10th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '50-10'
        },
        {
            dir: ['e', 'east'],
            id: '49-9'
        },
        {
            dir: ['w', 'west'],
            id: '49-11'
        },
        {
            dir: ['s', 'south'],
            id: '48-10'
        },
    ],
},

{
    id: '49-9',
    name: 'W. 49th St. and 9th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '50-9'
        },
        {
            dir: ['e', 'east'],
            id: '49-8'
        },
        {
            dir: ['w', 'west'],
            id: '49-10'
        },
        {
            dir: ['s', 'south'],
            id: '48-9'
        },
    ],
},

{
    id: '49-8',
    name: 'W. 49th St. and 8th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '50-8'
        },
        {
            dir: ['e', 'east'],
            id: '49-broa'
        },
        {
            dir: ['w', 'west'],
            id: '49-9'
        },
        {
            dir: ['s', 'south'],
            id: '48-8'
        },
    ],
},

{
    id: '49-broa',
    name: 'W. 49th St. and Broadway',
    desc: `There is a restaurant called Nedicks here.`,//Restaurant Entrance
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '50-broa'
        },
        {
            dir: ['e', 'east'],
            id: '49-7'
        },
        {
            dir: ['w', 'west'],
            id: '49-8'
        },
        {
            dir: ['s', 'south'],
            id: '48-broa'
        },
        {
            dir: ['enter', 'restaurant', 'nedicks'],
            id: '49-broa-nedicks'
        },
    ],
},

{
    id: '49-7',
    name: 'W. 49th St. and 7th Ave.',
    desc: 'There is a subway entrance at this corner.', //Subway Entrance
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '50-7'
        },
        {
            dir: ['e', 'east'],
            id: '49-amer'
        },
        {
            dir: ['w', 'west'],
            id: '49-broa'
        },
        {
            dir: ['s', 'south'],
            id: '48-7'
        },
        {//Subway Entrance
            dir: ['subway', 'entrance'],
            id: '49-7-subway-ent'
        },
    ],
},

{
    id: '49-amer',
    coord: [],
    name: 'W. 49th St. and Ave of Americas',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: '50-amer'
        },
        {
            dir: ['e', 'east'],
            id: '49-5'
        },
        {
            dir: ['w', 'west'],
            id: '49-7'
        },
        {
            dir: ['s', 'south'],
            id: '48-amer'
        },
    ],
},
//End 49th St.



//Start 48th St.
{
    id: '48-12',
    coord: [],
    name: 'W. 48th St. and 12th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['s', 'south'], id:'47-12'},
        {dir: ['w', 'west'], block:`You can’t go that way.`},
        {dir: ['n', 'north'], id:'49-12'},
        {dir: ['e', 'east'], id:'48-11'},
    ],
},

{
    id: '48-11',
    coord: [],
    name: 'W. 48th St. and 11th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'49-11'},
        {dir: ['e', 'east'], id:'48-10'},
        {dir: ['w', 'west'], id:'48-12'},
        {dir: ['s', 'south'], id:'47-11'},
    ],
},

{
    id: '48-10',
    coord: [],
    name: 'W. 48th St. and 10th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'49-10'},
        {dir: ['e', 'east'], id:'48-9'},
        {dir: ['w', 'west'], id:'48-11'},
        {dir: ['s', 'south'], id:'47-10'},
    ],
},

{
    id: '48-9',
    coord: [],
    name: 'W. 48th St. and 9th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'49-9'},
        {dir: ['e', 'east'], id:'48-8'},
        {dir: ['w', 'west'], id:'48-10'},
        {dir: ['s', 'south'], id:'47-9'},
    ],
},

{
    id: '48-8',
    coord: [],
    name: 'W. 48th St. and 8th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'49-8'},
        {dir: ['e', 'east'], id:'48-broa'},
        {dir: ['w', 'west'], id:'48-9'},
        {dir: ['s', 'south'], id:'47-8'},
    ],
},

{
    id: '48-broa',
    coord: [],
    name: 'W. 48th St. and Broadway',
    desc: 'Here is the Metropole Cafe. In the evening it is a safe haven for bare breasts and sequined hips that undulate slightly off the beat of the music.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'49-broa'},
        {dir: ['e', 'east'], id:'48-7'},
        {dir: ['w', 'west'], id:'48-8'},
        {dir: ['s', 'south'], id:'47-broa'},
        {dir: ['enter', 'cafe', 'metropole'], block:`There is no point to going there.`},
    ],
},

{
    id: '48-7',
    coord: [],
    name: 'W. 48th St. and 7th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'49-7'},
        {dir: ['e', 'east'], id:'48-amer'},
        {dir: ['w', 'west'], id:'48-broa'},
        {dir: ['s', 'south'], id:'47-7'},
    ],
},

{
    id: '48-amer',
    coord: [],
    name: 'W. 48th St. and Ave of Americas',
    desc: 'There is a Greek Gyro located here.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'49-amer'},
        {dir: ['e', 'east'], id:'48-5'},
        {dir: ['w', 'west'], id:'48-7'},
        {dir: ['s', 'south'], id:'47-amer'},
        {dir: ['enter', 'greek', 'gyro'], id:'48-gyro'},
    ],
},
//End 48th Street

//Start 47th Street
{
    id: '47-12',
    coord: [],
    name: 'W. 47th St. and 12th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-12'},
        {dir: ['e', 'east'], id:'47-11'},
        {dir: ['w', 'west'], block:`You can’t go that way.`},
        {dir: ['s', 'south'], id:'46-12'},
    ],
},

{
    id: '47-11',
    coord: [],
    name: 'W. 47th St. and 11th Ave.',
    desc: 'There is a luncheonette on the corner.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-11'},
        {dir: ['e', 'east'], id:'47-10'},
        {dir: ['w', 'west'], id:'47-12'},
        {dir: ['s', 'south'], id:'46-11'},
        {dir: ['enter', 'lunch', 'luncheonette'], id:'47-11-lunch'},
    ],
},

{
    id: '47-10',
    coord: [],
    name: 'W. 47th St. and 10th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-10'},
        {dir: ['e', 'east'], id:'47-9'},
        {dir: ['w', 'west'], id:'47-11'},
        {dir: ['s', 'south'], id:'46-10'},
    ],
},

{
    id: '47-10',
    coord: [],
    name: 'W. 47th St. and 10th Ave.',
    desc: 'There is a pizzeria here.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-10'},
        {dir: ['e', 'east'], id:'47-9'},
        {dir: ['w', 'west'], id:'47-11'},
        {dir: ['s', 'south'], id:'46-10'},
        {dir: ['enter', 'pizza', 'pizzeria'], id:'47-10-pizza'},
    ],
},

{
    id: '47-9',
    coord: [],
    name: 'W. 47th St. and 9th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-9'},
        {dir: ['e', 'east'], id:'47-8'},
        {dir: ['w', 'west'], id:'47-10'},
        {dir: ['s', 'south'], id:'46-9'},
    ],
},

{
    id: '47-8',
    coord: [],
    name: 'W. 47th St. and 8th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-8'},
        {dir: ['e', 'east'], id:'47-broa'},
        {dir: ['w', 'west'], id:'47-9'},
        {dir: ['s', 'south'], id:'46-8'},
    ],
},

{
    id: '47-broa',
    coord: [],
    name: 'W. 47th St. and Broadway',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-broa'},
        {dir: ['e', 'east'], id:'47-7'},
        {dir: ['w', 'west'], id:'47-8'},
        {dir: ['s', 'south'], id:'46-broa'},
    ],
},

{
    id: '47-7',
    coord: [],
    name: 'W. 47th St. and 7th Ave.',
    desc: 'There is a restaurant called Nedicks here.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-7'},
        {dir: ['e', 'east'], id:'47-amer'},
        {dir: ['w', 'west'], id:'47-broa'},
        {dir: ['s', 'south'], id:'46-7'},
        {dir: ['enter', 'restaurant', 'nedicks'], id:'47-7-nedi'},
    ],
},

{
    id: '47-amer',
    coord: [],
    name: 'W. 47th St. and Ave of Americas',
    desc: 'There is a pizzeria here.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'48-amer'},
        {dir: ['e', 'east'], id:'47-5'},
        {dir: ['w', 'west'], id:'47-broa'},
        {dir: ['s', 'south'], id:'46-amer'},
        {dir: ['enter', 'pizza', 'pizzeria'], id:'47-amer-pizza'},
    ],
},
//End 47th Street.

//Start 46th Street.
{
    id: '46-12',
    coord: [],
    name: 'W. 46th St. and 12th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'47-12'},
        {dir: ['e', 'east'], id:'46-11'},
        {dir: ['w', 'west'], block:`You can’t go that way.`},
        {dir: ['s', 'south'], id:'45-12'},
    ],
},

{
    id: '46-11',
    coord: [],
    name: 'W. 46th St. and 11th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'47-11'},
        {dir: ['e', 'east'], id:'46-10'},
        {dir: ['w', 'west'], id:'46-12'},
        {dir: ['s', 'south'], id:'45-11'},
    ],
},

{
    id: '46-10',
    coord: [],
    name: 'W. 46th St. and 10th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'47-10'},
        {dir: ['e', 'east'], id:'46-9'},
        {dir: ['w', 'west'], id:'46-11'},
        {dir: ['s', 'south'], id:'45-10'},
    ],
},

{
    id: '46-9',
    coord: [],
    name: 'W. 46th St. and 9th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'47-9'},
        {dir: ['e', 'east'], id:'46-8'},
        {dir: ['w', 'west'], id:'46-10'},
        {dir: ['s', 'south'], id:'45-9'},
    ],
},

{
    id: '46-8',
    coord: [],
    name: 'W. 46th St. and 8th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'47-8'},
        {dir: ['e', 'east'], id:'46-broa'},
        {dir: ['w', 'west'], id:'46-9'},
        {dir: ['s', 'south'], id:'45-8'},
    ],
},

{
    id: '46-broa',
    coord: [],
    name: 'W. 46th St. and Broadway',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'47-broa'},
        {dir: ['e', 'east'], id:'46-7'},
        {dir: ['w', 'west'], id:'46-8'},
        {dir: ['s', 'south'], id:'45-broa'},
    ],
},

{
    id: '46-7',
    coord: [],
    name: 'W. 46th St. and 7th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'47-7'},
        {dir: ['e', 'east'], id:'46-amer'},
        {dir: ['w', 'west'], id:'46-broa'},
        {dir: ['s', 'south'], id:'45-7'},
    ],
},

{
    id: '46-amer',
    coord: [],
    name: 'W. 46th St. and Ave of Americas',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'47-amer'},
        {dir: ['e', 'east'], id:'46-5'},
        {dir: ['w', 'west'], id:'46-7'},
        {dir: ['s', 'south'], id:'45-amer'},
    ],
},
//End 46th Street

//Start 45th Street
{
    id: '45-12',
    coord: [],
    name: 'W. 45th St. and 12th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'46-12'},
        {dir: ['e', 'east'], id:'45-11'},
        {dir: ['w', 'west'], block:`You can’t go that way.`},
        {dir: ['s', 'south'], id:'44-12'},
    ],
},

{
    id: '45-11',
    coord: [],
    name: 'W. 45th St. and 11th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'46-11'},
        {dir: ['e', 'east'], id:'45-10'},
        {dir: ['w', 'west'], id:'45-12'},
        {dir: ['s', 'south'], id:'44-11'},
    ],
},

{
    id: '45-10',
    coord: [],
    name: 'W. 45th St. and 10th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'46-10'},
        {dir: ['e', 'east'], id:'45-9'},
        {dir: ['w', 'west'], id:'45-11'},
        {dir: ['s', 'south'], id:'44-10'},
    ],
},

{
    id: '45-9',
    coord: [],
    name: 'W. 45th St. and 9th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'46-9'},
        {dir: ['e', 'east'], id:'45-8'},
        {dir: ['w', 'west'], id:'45-10'},
        {dir: ['s', 'south'], id:'44-9'},
    ],
},

{
    id: '45-8',
    coord: [],
    name: 'W. 45th St. and 8th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'46-8'},
        {dir: ['e', 'east'], id:'45-broa'},
        {dir: ['w', 'west'], id:'45-9'},
        {dir: ['s', 'south'], id:'44-8'},
    ],
},

{
    id: '45-broa',
    coord: [],
    name: 'W. 45th St. and Broadway',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'46-broa'},
        {dir: ['e', 'east'], id:'45-7'},
        {dir: ['w', 'west'], id:'45-8'},
        {dir: ['s', 'south'], id:'broa-7'},
    ],
},

{
    id: '45-7',
    coord: [],
    name: 'W. 45th St. and 7th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'46-7'},
        {dir: ['e', 'east'], id:'45-amer'},
        {dir: ['w', 'west'], id:'45-broa'},
        {dir: ['s', 'south'], id:'broa-7'},
    ],
},

{
    id: '45-amer',
    coord: [],
    name: 'W. 45th St. and Ave of Americas',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'46-amer'},
        {dir: ['e', 'east'], id:'45-5'},
        {dir: ['w', 'west'], id:'45-7'},
        {dir: ['s', 'south'], id:'44-amer'},
    ],
},

{//Important!!
    id: 'broa-7',
    coord: [],
    name: 'Broadway and 7th Ave.',
    desc: `Times Square -- where the city's melting pot reaches a full boil. Every extreme of wealth and squalor rub shoulders here, and every conceivable hustle is in operation.`,
    //Important!! In this section, there is a guy who says: "And a sidewalk vendor wants to sell you a genuine gold chain stolen only five minutes ago from a woman standing in line to buy tickets to that long running hit musical, 42ND STREET. 'Check it out,' he chants, shaking the chain in your face, wanna buy this beauty cheap?'" 
    //The player can then respond with "no" for a response of: "The hustler leaves you and begins making his pitch to someone else halfway down the block."
    //When the player responds yes, the game continues to a bad end, in the following room.
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'45-7'},
        {dir: ['e', 'east'], id:'44-broa'},
        {dir: ['w', 'west'], id:'45-broa'},
        {dir: ['s', 'south'], id:'44-7'},
        {dir: ['yes', 'okay'], id:'broa-7-A'},
    ],
},

{//Gets arrested and sent to trial
    id: 'broa-7-A',
    onEnter: () => {
      println(`That was dumb. The cops have been waiting for the last 15 minutes for someone to come along and compound the felony. A plainclothes detective flashes his badge and informs you you're under arrest.`);
      pressEnter('deat-1');
    },
  },
//End of 45th Street & broa-7

//Start of 44th Street
{
    id: '44-henr',
    coord: [],
    name: 'W. 44th St. and Henry Hudson Pkwy.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'57-henr'},
        {dir: ['e', 'east'], id:'44-12'},
        {dir: ['w', 'west'], block:`You can’t go that way.`},
        {dir: ['s', 'south'], id:'43-henr'},
    ],
},

{
    id: '44-12',
    coord: [],
    name: 'W. 44th St. and 12th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'45-12'},
        {dir: ['e', 'east'], id:'44-11'},
        {dir: ['w', 'west'], id:'44-henr'},
        {dir: ['s', 'south'], id:'43-12'},
    ],
},

{
    id: '44-11',
    coord: [],
    name: 'W. 44th St. and 11th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'45-11'},
        {dir: ['e', 'east'], id:'44-10'},
        {dir: ['w', 'west'], id:'44-12'},
        {dir: ['s', 'south'], id:'43-11'},
    ],
},

{
    id: '44-10',
    coord: [],
    name: 'W. 44th St. and 10th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'45-10'},
        {dir: ['e', 'east'], id:'44-9'},
        {dir: ['w', 'west'], id:'44-11'},
        {dir: ['s', 'south'], id:'43-10'},
    ],
},

{
    id: '44-9',
    coord: [],
    name: 'W. 44th St. and 9th Ave.',
    desc: 'There is a Greek Gyro here.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'45-9'},
        {dir: ['e', 'east'], id:'44-8'},
        {dir: ['w', 'west'], id:'44-10'},
        {dir: ['s', 'south'], id:'43-9'},
        {dir: ['enter', 'greek', 'gyro'], id:'44-9'},
    ],
},

{
    id: '44-8',
    coord: [],
    name: 'W. 44th St. and 8th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'45-8'},
        {dir: ['e', 'east'], id:'44-7'},
        {dir: ['w', 'west'], id:'44-9'},
        {dir: ['s', 'south'], id:'43-8'},
    ],
},

{
    id: '44-7',
    coord: [],
    name: 'W. 44th St. and 7th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'broa-7'},
        {dir: ['e', 'east'], id:'44-broa'},
        {dir: ['w', 'west'], id:'44-8'},
        {dir: ['s', 'south'], id:'43-7'},
    ],
},

{
    id: '44-broa',
    coord: [],
    name: 'W. 44th St. and Broadway',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'broa-7'},
        {dir: ['e', 'east'], id:'44-amer'},
        {dir: ['w', 'west'], id:'44-7'},
        {dir: ['s', 'south'], id:'43-broa'},
    ],
},

{
    id: '44-amer',
    coord: [],
    name: 'W. 44th St. and Ave of Americas',
    desc: 'The faded elegance of the Algonquin Hotel still draws the theatre and writing crowd for cocktails and meals.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'45-amer'},
        {dir: ['e', 'east'], id:'44-5'},
        {dir: ['w', 'west'], id:'44-broa'},
        {dir: ['s', 'south'], id:'43-amer'},
        {dir: ['enter', 'hotel', 'algonquin'], block:`You can’t go that way.`},
    ],
},
//End 44th Street

//Start 43rd Street
{
    id: '43-henr',
    coord: [],
    name: 'W. 43rd St. and Henry Hudson Pkwy.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-henr'},
        {dir: ['e', 'east'], id:'43-12'},
        {dir: ['w', 'west'], block:`You can’t go that way.`},
        {dir: ['s', 'south'], id:'42-henr'},
    ],
},

{
    id: '43-12',
    coord: [],
    name: 'W. 43rd St. and 12th Ave.',
    desc: 'There is a restaurant called Nedicks here.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-12'},
        {dir: ['e', 'east'], id:'43-11'},
        {dir: ['w', 'west'], id:'43-henr'},
        {dir: ['s', 'south'], id:'42-12'},
        {dir: ['enter', 'nedicks'], id:'43-12-nedi'},
    ],
},

{
    id: '43-11',
    coord: [],
    name: 'W. 43rd St. and 11th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-11'},
        {dir: ['e', 'east'], id:'43-10'},
        {dir: ['w', 'west'], id:'43-12'},
        {dir: ['s', 'south'], id:'42-11'},
    ],
},

{
    id: '43-10',
    coord: [],
    name: 'W. 43rd St. and 10th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-10'},
        {dir: ['e', 'east'], id:'43-9'},
        {dir: ['w', 'west'], id:'43-11'},
        {dir: ['s', 'south'], id:'42-10'},
    ],
},

{
    id: '43-9',
    coord: [],
    name: 'W. 43rd St. and 9th Ave.',
    desc: 'There is a Chock Full-O-Nuts at this intersection.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-10'},
        {dir: ['e', 'east'], id:'43-9'},
        {dir: ['w', 'west'], id:'43-11'},
        {dir: ['s', 'south'], id:'42-10'},
        {dir: ['enter', 'chock', 'nuts'], id:'43-9-chock'},
    ],
},

{
    id: '43-8',
    coord: [],
    name: 'W. 43rd St. and 8th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-8'},
        {dir: ['e', 'east'], id:'43-7'},
        {dir: ['w', 'west'], id:'43-9'},
        {dir: ['s', 'south'], id:'42-8'},
    ],
},

{
    id: '43-7',
    coord: [],
    name: 'W. 43rd St. and 7th Ave.',
    desc: 'There is a subway entrance at this corner.',
    isStreet: true,
    hasSubway: true,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-7'},
        {dir: ['e', 'east'], id:'43-broa'},
        {dir: ['w', 'west'], id:'43-8'},
        {dir: ['s', 'south'], id:'42-7'},
    ],
},

{
    id: '43-broa',
    coord: [],
    name: 'W. 43rd St. and Broadway',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-broa'},
        {dir: ['e', 'east'], id:'43-amer'},
        {dir: ['w', 'west'], id:'43-7'},
        {dir: ['s', 'south'], id:'42-broa'},
    ],
},

{
    id: '43-amer',
    coord: [],
    name: 'W. 43rd St. and Ave of Americas',
    isStreet: true,
    hasSubway: false,
    exit: 
    [
        {dir: ['n', 'north'], id:'44-amer'},
        {dir: ['e', 'east'], id:'43-5'},
        {dir: ['w', 'west'], id:'43-broa'},
        {dir: ['s', 'south'], id:'42-amer'},
    ],
},


//End 43rd Street



//Start Templates

 //Start Room Template
{
    id: '#-#',
    coord: [],
    name: 'W. #th St. and #th Ave.',
    isStreet: true,
    hasSubway: false,
    exit: 
    [ 
        {dir: ['n', 'north'], id:'S-A'},
        {dir: ['e', 'east'], id:'S-A'},
        {dir: ['w', 'west'], id:'S-A'},
        {dir: ['s', 'south'], id:'S-A'},
    ],
},
 //End Room Template

//Still need streets 49 through 34

//End Templates

//Need to change some names, such as those used in central park, to match other sections.

//Important rooms:
//cent-amer Nedicks
//57-8 Chock Full-O-Nuts
//58-broa Description
//57-broa Description
//56-7 Description
//55-8 Greek Gyro
//54-amer Pizzeria
//51-10 Chock Full-O-Nuts
//51-8 luncheonette
//50-7 Description
//48-amer Greek Gyro
//47-11 luncheonette
//47-9 pizzeria
//47-7 Nedicks
//47-amer Pizzeria
//broa-7 Description and death in texas
//44-9 Greek Gyro
//43-12 Nedicks
//43-9 Chock Full-O-Nuts

//Subway entrances:
//59-amst
//broa-8
//57-7
//57-amer
//53-7
//50-8
//50-broa
//50-amer
//43-7


//Naming conventions in this disk: 
//Midtown West Side > midwestside
//West End Ave. > wend
//Amsterdam Ave. > amst
//Columbus Ave. > colu
//Central Park W > cent
//Broadway > broa
//Ave of Americas > amer
//West Drive > wdri
//Henry Hudson Pkwy > henr
//Chock Full-O-Nuts > chock
//Greek Gyro > gyro
//Pizzeria > pizza
//Luncheonette > lunch
//Nedicks > nedi



    ],
},