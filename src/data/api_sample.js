const charClassAPI = [
  {
    index: "barbarian",
    name: "Barbarian",
    hit_die: 12,
    proficiency_choices: [
      {
        choose: 2,
        type: "proficiencies",
        from: [
          {
            index: "skill-animal-handling",
            name: "Skill: Animal Handling",
            url: "/api/proficiencies/skill-animal-handling",
          },
          {
            index: "skill-athletics",
            name: "Skill: Athletics",
            url: "/api/proficiencies/skill-athletics",
          },
          {
            index: "skill-intimidation",
            name: "Skill: Intimidation",
            url: "/api/proficiencies/skill-intimidation",
          },
          {
            index: "skill-nature",
            name: "Skill: Nature",
            url: "/api/proficiencies/skill-nature",
          },
          {
            index: "skill-perception",
            name: "Skill: Perception",
            url: "/api/proficiencies/skill-perception",
          },
          {
            index: "skill-survival",
            name: "Skill: Survival",
            url: "/api/proficiencies/skill-survival",
          },
        ],
      },
    ],
    proficiencies: [
      {
        index: "light-armor",
        name: "Light Armor",
        url: "/api/proficiencies/light-armor",
      },
      {
        index: "medium-armor",
        name: "Medium Armor",
        url: "/api/proficiencies/medium-armor",
      },
      {
        index: "shields",
        name: "Shields",
        url: "/api/proficiencies/shields",
      },
      {
        index: "simple-weapons",
        name: "Simple Weapons",
        url: "/api/proficiencies/simple-weapons",
      },
      {
        index: "martial-weapons",
        name: "Martial Weapons",
        url: "/api/proficiencies/martial-weapons",
      },
    ],
    saving_throws: [
      {
        index: "str",
        name: "STR",
        url: "/api/ability-scores/str",
      },
      {
        index: "con",
        name: "CON",
        url: "/api/ability-scores/con",
      },
    ],
    starting_equipment: [
      {
        equipment: {
          index: "explorers-pack",
          name: "Explorer's Pack",
          url: "/api/equipment/explorers-pack",
        },
        quantity: 1,
      },
      {
        equipment: {
          index: "javelin",
          name: "Javelin",
          url: "/api/equipment/javelin",
        },
        quantity: 4,
      },
    ],
    starting_equipment_options: [
      {
        choose: 1,
        type: "equipment",
        from: [
          {
            equipment: {
              index: "greataxe",
              name: "Greataxe",
              url: "/api/equipment/greataxe",
            },
            quantity: 1,
          },
          {
            equipment_option: {
              choose: 1,
              type: "equipment",
              from: {
                equipment_category: {
                  index: "martial-melee-weapons",
                  name: "Martial Melee Weapons",
                  url: "/api/equipment-categories/martial-melee-weapons",
                },
              },
            },
          },
        ],
      },
      {
        choose: 1,
        type: "equipment",
        from: [
          {
            equipment: {
              index: "handaxe",
              name: "Handaxe",
              url: "/api/equipment/handaxe",
            },
            quantity: 2,
          },
          {
            equipment_option: {
              choose: 1,
              type: "equipment",
              from: {
                equipment_category: {
                  index: "simple-weapons",
                  name: "Simple Weapons",
                  url: "/api/equipment-categories/simple-weapons",
                },
              },
            },
          },
        ],
      },
    ],
    class_levels: "/api/classes/barbarian/levels",
    multi_classing: {
      prerequisites: [
        {
          ability_score: {
            index: "str",
            name: "STR",
            url: "/api/ability-scores/str",
          },
          minimum_score: 13,
        },
      ],
      proficiencies: [
        {
          index: "shields",
          name: "Shields",
          url: "/api/proficiencies/shields",
        },
        {
          index: "simple-weapons",
          name: "Simple Weapons",
          url: "/api/proficiencies/simple-weapons",
        },
        {
          index: "martial-weapons",
          name: "Martial Weapons",
          url: "/api/proficiencies/martial-weapons",
        },
      ],
    },
    subclasses: [
      {
        index: "berserker",
        name: "Berserker",
        url: "/api/subclasses/berserker",
      },
    ],
    url: "/api/classes/barbarian",
  },
  {
    index: "bard",
    name: "Bard",
    hit_die: 8,
    proficiency_choices: [
      {
        choose: 3,
        type: "proficiencies",
        from: [
          {
            index: "skill-acrobatics",
            name: "Skill: Acrobatics",
            url: "/api/proficiencies/skill-acrobatics",
          },
          {
            index: "skill-animal-handling",
            name: "Skill: Animal Handling",
            url: "/api/proficiencies/skill-animal-handling",
          },
          {
            index: "skill-arcana",
            name: "Skill: Arcana",
            url: "/api/proficiencies/skill-arcana",
          },
          {
            index: "skill-athletics",
            name: "Skill: Athletics",
            url: "/api/proficiencies/skill-athletics",
          },
          {
            index: "skill-deception",
            name: "Skill: Deception",
            url: "/api/proficiencies/skill-deception",
          },
          {
            index: "skill-history",
            name: "Skill: History",
            url: "/api/proficiencies/skill-history",
          },
          {
            index: "skill-insight",
            name: "Skill: Insight",
            url: "/api/proficiencies/skill-insight",
          },
          {
            index: "skill-intimidation",
            name: "Skill: Intimidation",
            url: "/api/proficiencies/skill-intimidation",
          },
          {
            index: "skill-investigation",
            name: "Skill: Investigation",
            url: "/api/proficiencies/skill-investigation",
          },
          {
            index: "skill-medicine",
            name: "Skill: Medicine",
            url: "/api/proficiencies/skill-medicine",
          },
          {
            index: "skill-nature",
            name: "Skill: Nature",
            url: "/api/proficiencies/skill-nature",
          },
          {
            index: "skill-perception",
            name: "Skill: Perception",
            url: "/api/proficiencies/skill-perception",
          },
          {
            index: "skill-performance",
            name: "Skill: Performance",
            url: "/api/proficiencies/skill-performance",
          },
          {
            index: "skill-persuasion",
            name: "Skill: Persuasion",
            url: "/api/proficiencies/skill-persuasion",
          },
          {
            index: "skill-religion",
            name: "Skill: Religion",
            url: "/api/proficiencies/skill-religion",
          },
          {
            index: "skill-sleight-of-hand",
            name: "Skill: Sleight of Hand",
            url: "/api/proficiencies/skill-sleight-of-hand",
          },
          {
            index: "skill-stealth",
            name: "Skill: Stealth",
            url: "/api/proficiencies/skill-stealth",
          },
          {
            index: "skill-survival",
            name: "Skill: Survival",
            url: "/api/proficiencies/skill-survival",
          },
        ],
      },
      {
        choose: 3,
        type: "proficiencies",
        from: [
          {
            index: "bagpipes",
            name: "Bagpipes",
            url: "/api/proficiencies/bagpipes",
          },
          {
            index: "drum",
            name: "Drum",
            url: "/api/proficiencies/drum",
          },
          {
            index: "dulcimer",
            name: "Dulcimer",
            url: "/api/proficiencies/dulcimer",
          },
          {
            index: "flute",
            name: "Flute",
            url: "/api/proficiencies/flute",
          },
          {
            index: "lute",
            name: "Lute",
            url: "/api/proficiencies/lute",
          },
          {
            index: "lyre",
            name: "Lyre",
            url: "/api/proficiencies/lyre",
          },
          {
            index: "horn",
            name: "Horn",
            url: "/api/proficiencies/horn",
          },
          {
            index: "pan-flute",
            name: "Pan flute",
            url: "/api/proficiencies/pan-flute",
          },
          {
            index: "shawm",
            name: "Shawm",
            url: "/api/proficiencies/shawm",
          },
          {
            index: "viol",
            name: "Viol",
            url: "/api/proficiencies/viol",
          },
        ],
      },
    ],
    proficiencies: [
      {
        index: "light-armor",
        name: "Light Armor",
        url: "/api/proficiencies/light-armor",
      },
      {
        index: "simple-weapons",
        name: "Simple Weapons",
        url: "/api/proficiencies/simple-weapons",
      },
      {
        index: "longswords",
        name: "Longswords",
        url: "/api/proficiencies/longswords",
      },
      {
        index: "rapiers",
        name: "Rapiers",
        url: "/api/proficiencies/rapiers",
      },
      {
        index: "shortswords",
        name: "Shortswords",
        url: "/api/proficiencies/shortswords",
      },
      {
        index: "hand-crossbows",
        name: "Hand crossbows",
        url: "/api/proficiencies/hand-crossbows",
      },
    ],
    saving_throws: [
      {
        index: "dex",
        name: "DEX",
        url: "/api/ability-scores/dex",
      },
      {
        index: "cha",
        name: "CHA",
        url: "/api/ability-scores/cha",
      },
    ],
    starting_equipment: [
      {
        equipment: {
          index: "leather-armor",
          name: "Leather Armor",
          url: "/api/equipment/leather-armor",
        },
        quantity: 1,
      },
      {
        equipment: {
          index: "dagger",
          name: "Dagger",
          url: "/api/equipment/dagger",
        },
        quantity: 1,
      },
    ],
    starting_equipment_options: [
      {
        choose: 1,
        type: "equipment",
        from: [
          {
            equipment: {
              index: "rapier",
              name: "Rapier",
              url: "/api/equipment/rapier",
            },
            quantity: 1,
          },
          {
            equipment: {
              index: "longsword",
              name: "Longsword",
              url: "/api/equipment/longsword",
            },
            quantity: 1,
          },
          {
            equipment_option: {
              choose: 1,
              type: "equipment",
              from: {
                equipment_category: {
                  index: "simple-weapons",
                  name: "Simple Weapons",
                  url: "/api/equipment-categories/simple-weapons",
                },
              },
            },
          },
        ],
      },
      {
        choose: 1,
        type: "equipment",
        from: [
          {
            equipment: {
              index: "diplomats-pack",
              name: "Diplomat's Pack",
              url: "/api/equipment/diplomats-pack",
            },
            quantity: 1,
          },
          {
            equipment: {
              index: "entertainers-pack",
              name: "Entertainer's Pack",
              url: "/api/equipment/entertainers-pack",
            },
            quantity: 1,
          },
        ],
      },
      {
        choose: 1,
        type: "equipment",
        from: [
          {
            equipment: {
              index: "lute",
              name: "Lute",
              url: "/api/equipment/lute",
            },
            quantity: 1,
          },
          {
            equipment_option: {
              choose: 1,
              type: "equipment",
              from: {
                equipment_category: {
                  index: "musical-instruments",
                  name: "Musical Instruments",
                  url: "/api/equipment-categories/musical-instruments",
                },
              },
            },
          },
        ],
      },
    ],
    class_levels: "/api/classes/bard/levels",
    multi_classing: {
      prerequisites: [
        {
          ability_score: {
            index: "cha",
            name: "CHA",
            url: "/api/ability-scores/cha",
          },
          minimum_score: 13,
        },
      ],
      proficiencies: [
        {
          index: "light-armor",
          name: "Light Armor",
          url: "/api/proficiencies/light-armor",
        },
      ],
      proficiency_choices: [
        {
          choose: 1,
          type: "proficiencies",
          from: [
            {
              index: "skill-acrobatics",
              name: "Skill: Acrobatics",
              url: "/api/proficiencies/skill-acrobatics",
            },
            {
              index: "skill-animal-handling",
              name: "Skill: Animal Handling",
              url: "/api/proficiencies/skill-animal-handling",
            },
            {
              index: "skill-arcana",
              name: "Skill: Arcana",
              url: "/api/proficiencies/skill-arcana",
            },
            {
              index: "skill-athletics",
              name: "Skill: Athletics",
              url: "/api/proficiencies/skill-athletics",
            },
            {
              index: "skill-deception",
              name: "Skill: Deception",
              url: "/api/proficiencies/skill-deception",
            },
            {
              index: "skill-history",
              name: "Skill: History",
              url: "/api/proficiencies/skill-history",
            },
            {
              index: "skill-insight",
              name: "Skill: Insight",
              url: "/api/proficiencies/skill-insight",
            },
            {
              index: "skill-intimidation",
              name: "Skill: Intimidation",
              url: "/api/proficiencies/skill-intimidation",
            },
            {
              index: "skill-investigation",
              name: "Skill: Investigation",
              url: "/api/proficiencies/skill-investigation",
            },
            {
              index: "skill-medicine",
              name: "Skill: Medicine",
              url: "/api/proficiencies/skill-medicine",
            },
            {
              index: "skill-nature",
              name: "Skill: Nature",
              url: "/api/proficiencies/skill-nature",
            },
            {
              index: "skill-perception",
              name: "Skill: Perception",
              url: "/api/proficiencies/skill-perception",
            },
            {
              index: "skill-performance",
              name: "Skill: Performance",
              url: "/api/proficiencies/skill-performance",
            },
            {
              index: "skill-persuasion",
              name: "Skill: Persuasion",
              url: "/api/proficiencies/skill-persuasion",
            },
            {
              index: "skill-religion",
              name: "Skill: Religion",
              url: "/api/proficiencies/skill-religion",
            },
            {
              index: "skill-sleight-of-hand",
              name: "Skill: Sleight of Hand",
              url: "/api/proficiencies/skill-sleight-of-hand",
            },
            {
              index: "skill-stealth",
              name: "Skill: Stealth",
              url: "/api/proficiencies/skill-stealth",
            },
            {
              index: "skill-survival",
              name: "Skill: Survival",
              url: "/api/proficiencies/skill-survival",
            },
          ],
        },
        {
          choose: 1,
          type: "proficiencies",
          from: [
            {
              index: "bagpipes",
              name: "Bagpipes",
              url: "/api/proficiencies/bagpipes",
            },
            {
              index: "drum",
              name: "Drum",
              url: "/api/proficiencies/drum",
            },
            {
              index: "dulcimer",
              name: "Dulcimer",
              url: "/api/proficiencies/dulcimer",
            },
            {
              index: "flute",
              name: "Flute",
              url: "/api/proficiencies/flute",
            },
            {
              index: "lute",
              name: "Lute",
              url: "/api/proficiencies/lute",
            },
            {
              index: "lyre",
              name: "Lyre",
              url: "/api/proficiencies/lyre",
            },
            {
              index: "horn",
              name: "Horn",
              url: "/api/proficiencies/horn",
            },
            {
              index: "pan-flute",
              name: "Pan flute",
              url: "/api/proficiencies/pan-flute",
            },
            {
              index: "shawm",
              name: "Shawm",
              url: "/api/proficiencies/shawm",
            },
            {
              index: "viol",
              name: "Viol",
              url: "/api/proficiencies/viol",
            },
          ],
        },
      ],
    },
    subclasses: [
      {
        index: "lore",
        name: "Lore",
        url: "/api/subclasses/lore",
      },
    ],
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: "cha",
        name: "CHA",
        url: "/api/ability-scores/cha",
      },
      info: [
        {
          desc: [
            "You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.",
          ],
          name: "Cantrips",
        },
        {
          desc: [
            "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            "For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.",
          ],
          name: "Spell Slots",
        },
        {
          desc: [
            "You know four 1st-level spells of your choice from the bard spell list.",
            "The Spells Known column of the Bard table shows when you learn more bard spells of your choice.",
            "Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
            "Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.",
          ],
          name: "Spells Known of 1st Level and Higher",
        },
        {
          desc: [
            "Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
            "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
            "Spell attack modifier = your proficiency bonus + your Charisma modifier.",
          ],
          name: "Spellcasting Ability",
        },
        {
          desc: [
            "You can cast any bard spell you know as a ritual if that spell has the ritual tag.",
          ],
          name: "Ritual Casting",
        },
        {
          desc: [
            "You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells.",
          ],
          name: "Spellcasting Focus",
        },
      ],
    },
    spells: "/api/classes/bard/spells",
    url: "/api/classes/bard",
  },
  {
    index: "wizard",
    name: "Wizard",
    hit_die: 6,
    proficiency_choices: [
      {
        choose: 2,
        type: "proficiencies",
        from: [
          {
            index: "skill-arcana",
            name: "Skill: Arcana",
            url: "/api/proficiencies/skill-arcana",
          },
          {
            index: "skill-history",
            name: "Skill: History",
            url: "/api/proficiencies/skill-history",
          },
          {
            index: "skill-insight",
            name: "Skill: Insight",
            url: "/api/proficiencies/skill-insight",
          },
          {
            index: "skill-investigation",
            name: "Skill: Investigation",
            url: "/api/proficiencies/skill-investigation",
          },
          {
            index: "skill-medicine",
            name: "Skill: Medicine",
            url: "/api/proficiencies/skill-medicine",
          },
          {
            index: "skill-religion",
            name: "Skill: Religion",
            url: "/api/proficiencies/skill-religion",
          },
        ],
      },
    ],
    proficiencies: [
      {
        index: "daggers",
        name: "Daggers",
        url: "/api/proficiencies/daggers",
      },
      {
        index: "quarterstaffs",
        name: "Quarterstaffs",
        url: "/api/proficiencies/quarterstaffs",
      },
      {
        index: "darts",
        name: "Darts",
        url: "/api/proficiencies/darts",
      },
      {
        index: "slings",
        name: "Slings",
        url: "/api/proficiencies/slings",
      },
    ],
    saving_throws: [
      {
        index: "int",
        name: "INT",
        url: "/api/ability-scores/int",
      },
      {
        index: "wis",
        name: "WIS",
        url: "/api/ability-scores/wis",
      },
    ],
    starting_equipment: [
      {
        equipment: {
          index: "spellbook",
          name: "Spellbook",
          url: "/api/equipment/spellbook",
        },
        quantity: 1,
      },
    ],
    starting_equipment_options: [
      {
        choose: 1,
        type: "equipment",
        from: [
          {
            equipment: {
              index: "dagger",
              name: "Dagger",
              url: "/api/equipment/dagger",
            },
            quantity: 1,
          },
          {
            equipment: {
              index: "quarterstaff",
              name: "Quarterstaff",
              url: "/api/equipment/quarterstaff",
            },
            quantity: 1,
          },
        ],
      },
      {
        choose: 1,
        type: "equipment",
        from: [
          {
            equipment: {
              index: "component-pouch",
              name: "Component pouch",
              url: "/api/equipment/component-pouch",
            },
            quantity: 1,
          },
          {
            equipment_option: {
              choose: 1,
              type: "equipment",
              from: {
                equipment_category: {
                  index: "arcane-foci",
                  name: "Arcane Foci",
                  url: "/api/equipment-categories/arcane-foci",
                },
              },
            },
          },
        ],
      },
      {
        choose: 1,
        type: "equipment",
        from: [
          {
            equipment: {
              index: "scholars-pack",
              name: "Scholar's Pack",
              url: "/api/equipment/scholars-pack",
            },
            quantity: 1,
          },
          {
            equipment: {
              index: "dungeoneers-pack",
              name: "Dungeoneer's Pack",
              url: "/api/equipment/dungeoneers-pack",
            },
            quantity: 1,
          },
        ],
      },
    ],
    class_levels: "/api/classes/wizard/levels",
    multi_classing: {
      prerequisites: [
        {
          ability_score: {
            index: "int",
            name: "INT",
            url: "/api/ability-scores/int",
          },
          minimum_score: 13,
        },
      ],
      proficiencies: [],
    },
    subclasses: [
      {
        index: "evocation",
        name: "Evocation",
        url: "/api/subclasses/evocation",
      },
    ],
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: "int",
        name: "INT",
        url: "/api/ability-scores/int",
      },
      info: [
        {
          desc: [
            "At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.",
          ],
          name: "Cantrips",
        },
        {
          desc: [
            "At 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.",
          ],
          name: "Spellbook",
        },
        {
          desc: [
            "The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            "You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
            "For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            "You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.",
          ],
          name: "Preparing and Casting Spells",
        },
        {
          desc: [
            "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
            "Spell save DC = 8 + your proficiency bonus + your Intelligence modifier.",
            "Spell attack modifier = your proficiency bonus + your Intelligence modifier.",
          ],
          name: "Spellcasting Ability",
        },
        {
          desc: [
            "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.",
          ],
          name: "Ritual Casting",
        },
        {
          desc: [
            "You can use an arcane focus as a spellcasting focus for your wizard spells.",
          ],
          name: "Spellcasting Focus",
        },
      ],
    },
    spells: "/api/classes/wizard/spells",
    url: "/api/classes/wizard",
  },
];

export const classes = [
  {
    index: "barbarian",
    name: "Barbarian",
    url: "/api/classes/barbarian",
  },
  {
    index: "bard",
    name: "Bard",
    url: "/api/classes/bard",
  },
  {
    index: "cleric",
    name: "Cleric",
    url: "/api/classes/cleric",
  },
  {
    index: "druid",
    name: "Druid",
    url: "/api/classes/druid",
  },
  {
    index: "fighter",
    name: "Fighter",
    url: "/api/classes/fighter",
  },
  {
    index: "monk",
    name: "Monk",
    url: "/api/classes/monk",
  },
  {
    index: "paladin",
    name: "Paladin",
    url: "/api/classes/paladin",
  },
  {
    index: "ranger",
    name: "Ranger",
    url: "/api/classes/ranger",
  },
  {
    index: "rogue",
    name: "Rogue",
    url: "/api/classes/rogue",
  },
  {
    index: "sorcerer",
    name: "Sorcerer",
    url: "/api/classes/sorcerer",
  },
  {
    index: "warlock",
    name: "Warlock",
    url: "/api/classes/warlock",
  },
  {
    index: "wizard",
    name: "Wizard",
    url: "/api/classes/wizard",
  },
];
