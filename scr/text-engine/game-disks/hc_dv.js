// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const hcDvDisk = {
  roomId: 'heal-club', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'heal-club', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Health Club Reception Room', // Displayed each time the player enters the room.
      desc: `The door opens with a creak, and you step into a small reception area furnished with cast-iron and vinyl armchairs, a water cooler with paper cups, a small Formica desk with a stack of application forms, and faded posters of once famous bodybuilders. A sign on the Formica desk promises that someone will be “Back in 10 Minutes.”
      
      The elevators open into the reception area from a hallway on one wall. There are two doors behind the desk. the one on the left is marked "Dolls," the one on the right "Guys."`, // Displayed when the player first enters the room.
      exits: [
        {
          dir: ['left', 'dolls', 'girls', 'girls', `women's`, 'womens'], // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'heal-club1',
        },
        {
          dir: ['right', 'guys', 'mens', 'boys', `boy's`, `men's`],
          id: 'heal-club5',
        },
        {
          dir: ['leave'],
          id: 'cor-?'
        }
      ],
    },
    {
      id: 'heal-club1',
      name: `Women's Locker Room`,
      desc: `You enter the women’s locker room, and a woman who seems to be in training for the Olympic hammer throw looks at you with the joy of combat already glistening in her eyes. 
      
      “Not here, buddy,” she informs you in a low voice. “This is the women’s locker room. And you--correct me if I’m wrong--belong in the men’s locker room.” 
      
      She points the direction with her thumb. “That way.”`,
      
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: [],
          id: 'heal-club2',
          block: `"I'm warning you, Bozo: Out of here!`
          
        }
      ],
      onBlock: () => {
        if (prevInput !== 'leave' || 'exit') {
          enterRoom('heal-club2');
        } else {
          enterRoom('heal-club');
        }
      },
    },
    {
      id: 'heal-club2',
      name: ``,
      desc: `"I'm warning you, Bozo: Out of here!`,
      
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: [],
          id: 'heal-club3'
        }        
      ],
      onBlock: () => {
        if (prevInput !== 'leave' || 'exit') {
          enterRoom('heal-club3');
        } else {
          enterRoom('heal-club');
        }
      },
    },
    {
      id: 'heal-club3',
      name: `Women's Locker Room`,
      desc: `"Okay, that's it." 
      With a single, simple flowing motion remarkable in a woman of such size and strength, she springs up and lays you flat with a judicious karate chop to the side of your neck.`,
      onEnter: () => {
        pressEnter('deat-1')
      }
    },
    {
      id: 'heal-club5',
      name: `Men's Locker Room`,
      desc: `You are in the men’s locker room. 

      To your right are two changing areas formed by free-standing metal lockers. To your left are some sinks and a large mirror, with doors on either side. The door on the right is marked “Sauna,” that on the left “Massage.” Directly ahead are the showers, and beyond these a sign points the way to the weight room.`,
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: ['right', 'lockers', 'locker',],
          id: 'heal-club6'
        },
        {
          dir: ['left door', 'massage'],
          id: 'heal-club7',
          block: 'The door to that room is locked.'
        },
        {
          dir: ['right door', 'sauna'],
          id: 'heal-club8'
        }, 
        {
          dir: ['showers', 'shower'],
          id: 'heal-club9',
          block: `You walk towards the showers, look at the half-dozen uninteresting shower heads on the wall, and return to the locker stands.`
        },
        {
          dir: ['weight room', 'weights', 'weight', 'room'],
          id: 'heal-club10',
          block:`There is a woman in the weight room who looks like she is in training for the olympic hammer throw. You take one look at her decidedly hostile expression, and decide you are in less trouble in the locker room`
        }
      ],
    },
    {
      id: 'heal-club6',
      name: `Men's Locker Room`,
      desc: `You take a quick tour of the lockers, opening and closing the metal doors quietly, hoping to find a forgotten or abandoned piece of clothing. Your search of the first alcove yields slim pickings: a plastic bag from a bookstore, a white sock with holes in both toe and heel, a broken shoelace, and a small brass key. Four of the lockers are padlocked. Yanking at the handles accomplishes nothing.`,
      
      onEnter: () => {
        pressEnter('heal-club12')
      }
    },
    {
      id: 'heal-club12',
      name: `Men's Locker Room`,
      desc: `You check out the second alcove of lockers and the fourth locker along the row produces the equivalent, in clothing, of a Minimum Daily Requirement: sweatpants, a Mickey Mouse T-shirt with its sleeves chopped off, and a pair of shower slippers.`,

      onEnter: () => {
        pressEnter('heal-club13')
      }
    },
    {
      id: 'heal-club13',
      name: `Men's locker Room`,
      desc: `Just as you are about to slip into this outfit you hear the voices of two men entering the locker room from the direction of the weight room. You feel a panicky certainty that these clothes belong to one of them, and you stuff them in the plastic bookstore bag. You wish you could crawl into the bag yourself, so strong is your impulse to hide from these approaching strangers.`,
      onEnter: () => {
        reenableInput();
      },
      exits: [
            {
              dir: ['leave', 'exit'],
              id: 'heal-club',
              block: `As you open the door to return to the reception area you can hear a woman’s voice, and then a man’s, discussing the relative merits of different brands of sneakers. Whoever had left the sign saying they’d be back in ten minutes has come back. 
              
              Realizing that you can’t leave the health club in the makeshift clothes you wore when you arrived, you close the door quietly--and feel again the same unreasoning dread, the same need not to be seen.`
            },
            {
              dir: ['right', 'lockers', 'locker',],
              id: 'heal-club6'
            },
            {
              dir: ['left door', 'massage'],
              id: 'heal-club7',
              block: 'The door to that room is locked.'
            },
            {
              dir: ['right door', 'sauna'],
              id: 'heal-club8'
            }, 
            {
              dir: ['showers', 'shower'],
              id: 'heal-club9',
              block: `As you do, you realize that a man and womana re coming out of the shower. Even in your present predicament you can't help but wonder what the woman is doing in the men's locker room.`
            },
            {
              dir: ['weight room', 'weights', 'weight', 'room'],
              id: 'heal-club10',
              block:`There is a woman in the weight room who looks like she is in training for the olympic hammer throw. You take one look at her decidedly hostile expression, and decide you are in less trouble in the locker room`
            }
          ],
    },
    {
      id: 'heal-club7',
      name: `Men's Locker Room`,
      desc: 'massage'
    },
    {
      id: 'heal-club9',
      name: `Men's Locker Room`,
      desc: 'showers',
    },
    {
      id: 'heal-club10',
      name: `Men's Locker Room`,
      desc: `weight room`
    },
    {
      id: 'heal-club8',
      name: `Men's Locker Room`,
      desc: `As you enter the sauna a blast of superheated air wraps your body in what feels like a suit of flames. Your heartbeat quickens, and the narrow confines of the steamy, pine-paneled cell bend and warp and tilt. 

      You are barely able to keep yourself from falling against the iron stove and its pile of heated rocks. You crumble onto the bench of wooden slats, and then…`,
      onEnter: () => {
        pressEnter('heal-club11');
      },
    },
    {
      id: 'heal-club11',
      name: `Men's Locker Room`,
      desc: `But this 'then' is like no other then. It does not follow the time that's gone before. Like a fluid under tremendous pressure, the memories suppressed by your amnesia overwhelm you. At some cue supplied by this hot dark cubbyhole, your past supplants your present life. 
      You are experiencing . . . DEJA-VU!`,
      onEnter: () => {
        pressEnter('deja-vu');
      }
    },
    {
      id: 'deja-vu', 
      name: '', 
      desc: `You are locked in a cell. It is bare and dark and smells of lives gone sour. The only light is a feeble fluorescent glow that slants in through the louvred grill in the iron door. You know the door is iron because you have been beating on it. Your hands are sore, and your right eye is swollen shut. You ache all over.`,
      
      onEnter: () => {
          pressEnter('deja-vu1');
      }
    },
    {
      id: 'deja-vu1',
      name: '',
      desc:`Worse than the ache is the hunger, and worse than the hunger is the fear that you will never leave this cell alive. You begin to scream. You know it will do no good. You’ll probably be beaten again--but you can’t help yourself. You scream the same few senseless words over and over, a litany of terror:`,
      onEnter: () => {
        reenableInput();
    },
      onBlock: () => {
          for (let count = 0; count < 3; count++) {
              println(`'${prevInput}'`);
          }
          enterRoom('deja-vu2');
      }
    },
    {
      id: 'deja-vu2',
      name: '',
      desc: `At last, your screams attract the attention of your jailer. The grill of the door is pushed aside, and his face appears, leering, in the aperture. “What’s the matter, Juanito?” he asks in a drawling, twanging, Texas voice.`,
        onEnter: () => {
            pressEnter('deja-vu3');
        }
      
    },
    {
        id: 'deja-vu3',
        name: '',
        desc: `You ask for food. His eyes shrink to pinponts of sadistic pleasure. "Why sure, Juanito, you'll get fed -- just as soon as you ask for it so's I can hear you. There's just two little words you got to say, and I'll bring you a nice big bowl of five=alarm chili.'
        He waits for you to say the two words that will get you fed.`,
        onEnter: () => {
            reenableInput();
        },

        onBlock: () => {
            if (prevInput === 'please sir') {
                enterRoom('deja-vu5');
            } else {
                enterRoom('deja-vu4');
            };
        },
    },
    {
      id: 'deja-vu4',
      name: '',
      desc: `“Sorry, Juanito,” your jailer says, and slams the grill shut. You think: this is not possible, it is not legal, it can’t go on. Not even the state of Texas can a prisoner be treated like this. You have not been charged with any crime. There has been no trial. One minute you were driving your car home, and the next a motorcycle cop was signaling for you to pull off to the side of the road. The worst of it is that no one knows you’re here, in Santa Candelaria, and so no one will think to report you missing. Suddenly you understand the meaning of hell. There is no way out.`,
      
    },
    {
      id: 'deja-vu5',
      name: '',
      desc: `The jailer favors you with a gap-toothed smile. “You’re learning quick, Juanito.” He goes off and returns in a few minutes with the promised bowl of chili, which he hands you through the aperture in the door. Your mouth waters, and your hand is trembling as you dip the plastic spoon into the lukewarm chili. And then you see the large dead tarantula with which the jailer has garnished your dinner. You laugh, thinking of the classic line, “Waiter, there’s a fly in my soup!” And then you flip the dead tarantula off the chili and wolf down the congealed mixture voraciously.
      When the last smear of spicy grease has been licked from the bowl there are tears in your eyes. Tears of thankfulness for being fed, of shame for being reduced to such a condition.`,
    },
    {
      id: 'deja-vu?',
      name: '',
      desc: `And then, sudden as waking from a nightmare, this mind e­xplosion of memory is over. But was it really a memory--couldn’t it have been, instead, some kind of waking nightmare? Aside from this one lurid glimpse of what may have been your past life, you are able to remember nothing else about yourself or that prison. If that was what your life was like, maybe you shouldn’t try to remember it. Maybe your amnesia is a blessing in disguise.`,
    },
    {
      id: 'deja-vu?',
      name: '',
      desc: `You think: this is not possible, it is not legal, it can’t go on. Not even the state of Texas can a prisoner be treated like this. You have not been charged with any crime. There has been no trial. One minute you were driving your car home, and the next a motorcycle cop was signaling for you to pull off to the side of the road. The worst of it is that no one knows you’re here, in Santa Candelaria, and so no one will think to report you missing. Suddenly you understand the meaning of hell. There is no way out.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu4'
        },
      ],
    },
    //BELOW HERE IS AFTER DEJA-VU
    {
      id: 'heal-club?',
      name: 'Massage Room',
      desc: `“Mr. Cameron, are you conscious, can you hear me?”
      A man’s face is bending down close to your own. You do not recognize him. Gradually you realize that you are no longer in the sauna, but in another small room, where you are lying on your back on a masseur’s table. The massage room, this must be.
      “He’s opened his eyes,” another voice says.
      “Yes,” says the man standing above you, “but there’s this funny dazed look in his eyes. The same thing happened when he went into the sauna last night, and I thought it was from drinking too much. We had to carry him down to his room.
      But maybe he just can’t take the heat in that sauna. Some guys can’t.”
      He turns his attention back to you. “Hey, Mr. Cameron—are you alright?”`,
      exits: [
        {
          dir: [],
          id: 'heal-club?'
        },
      ],
    },
    {
      id: 'heal-club?',
      name: 'Massage Room',
      desc: `“He’s trying to say something,” the other voice observes, “but the words are so slurred. Do you think he’s still drunk?”  The man above you bends over to sniff your breath. “Doesn’t seem to be. No, I figure it’s just heat prostration. Tell you what, Buddy, you mop up around the pool, and I’ll give Cameron here a once-over-lightly, then help him into some clothes. There must be something he can wear in his locker. After that I’d appreciate it if you would steer him back to his room.  Confidentially-” He lowers his voice to a whisper, but you are still able to hear what he says.  “--if there is something seriously wrong with him, I don’t want him shipped off to a hospital from here. It doesn’t look good for a gym to have people leaving it on stretchers.” “Right, boss, I get your message. If I have to, I can carry the guy down there. Does he have his room key on him?” The man nods. “It was on the floor of the sauna.”
      `,
      exits: [
          {
            dir: [],
            id: 'heal-club?'
          },
      ],
    },
    {
        id: 'heal-club?',
        name: 'Massage Room',
        desc: `The man who’d done most of the talking now begins to give you a very gentle massage. You find it strangely soothing. It’s as though he were smoothing tensions from your mind and your muscles at the same time. You begin to be able to think more clearly. Now at least you have a reasonable explanation of how you came to be in Room 1502 without any clothes. Apparently you’ve been a long-term member of this gym, for the masseur spoke of “your” locker.
        He rolls you over onto your stomach but instead of continuing the massage he turns on the sunlamp and leaves you alone in the room. The warmth of the lamp fills you with a strange peaceful passivity. You listen to the unmistakable crunch of steel through steel, and a moment later the masseur returns with a pair of metal cutters in one hand and a green canvas gym in the other. “Sorry to have to cut through your padlock, Mr. Cameron. But I remember how frustrated you got last night trying to remember the combination. I would have cut off the lock then, but you’d passed out in the sauna first. You feeling a little better now?”`,
        exits: [
            {
                dir:[],
                id: 'heal-club15'
            },
        ],
    },
    {
        id: 'heal-club15',
        name: 'Massage Room'
    }
  ],
};


