// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  RACES: [
    'Human',
    'Elf',
    'Dwarf'
  ],
  CLASSES: [
    'Warrior',
    'Dude with bow',
    'Mage'
  ],
  THEMES: [
    'Day',
    'Night'
  ],
  TUTORIAL_NOTIFICATION_RACE: [
    [{ text: 'race1', strong: false }],
    [{ text: 'race2', strong: true }],
    [{ text: 'race3', strong: false }],
  ],
  TUTORIAL_NOTIFICATION_CLASS: [
    [{ text: 'class1', strong: false }],
    [{ text: 'class2', strong: true }],
    [{ text: 'class3', strong: false }]
  ],
  TUTORIAL_NOTIFICATION_SETTINGS: [
    [{ text: 'settings1', strong: false }, { text: 'settings2', strong: true }]
  ],
  TUTORIAL_NOTIFICATION_SETTINGS_PESONALED: [
    {
      class: 'Warrior',
      race: 'Dwarf',
      content: [{ text: 'end-Warrior-Dwarf', strong: false }]
    },
    {
      class: 'Warrior',
      race: 'Human',
      content: [{ text: 'end-Warrior-Human', strong: false }]
    }
  ],
  COMMENT_NOTIFICATION: [
    {
      race: 'Human',
      class: 'None',
      content: [
        [{ text: 'comment-Human-None1', strong: false }],
        [{ text: 'comment-Human-None2', strong: false }],
        [{ text: 'comment-Human-None3', strong: false }]
      ]
    },
    {
      race: 'Elf',
      class: 'None',
      content: [
        [{ text: 'comment-Elf-None1', strong: false }],
        [{ text: 'comment-Elf-None2', strong: false }]
      ]
    },
    {
      race: 'Dwarf',
      class: 'None',
      content: [
        [{ text: 'comment-Dwarf-None', strong: false }]
      ]
    },
    {
      race: 'Human',
      class: 'Warrior',
      content: [
        [{ text: 'comment-Human-Warrior', strong: false }]
      ]
    },
    {
      race: 'Dwarf',
      class: 'Warrior',
      content: [
        [{ text: 'comment-Dwarf-Warrior', strong: false }]
      ]
    },
    {
      race: 'Dwarf',
      class: 'Mage',
      content: [
        [{ text: 'comment-Dwarf-Mage', strong: false }]
      ]
    },
  ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
