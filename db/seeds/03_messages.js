exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('messages').insert([
        {
          fromUser: 7,
          toUser: 1,
          subject:
            'Aliqua consectetur dolore sit officia veniam ullamco labore nulla elit occaecat nisi.',
          body:
            'Laborum pariatur laboris esse labore. Deserunt magna ea id excepteur cillum qui deserunt culpa. Quis duis exercitation fugiat velit eu nostrud sit do duis magna cupidatat cupidatat excepteur irure. Velit nisi pariatur elit qui.\r\n',
          created_at: new Date(2018, 6, 23)
        },
        {
          fromUser: 4,
          toUser: 9,
          subject:
            'Ea consectetur adipisicing anim mollit duis ullamco aute ea culpa.',
          body:
            'Occaecat velit adipisicing ex cupidatat culpa ex. Veniam ullamco aute esse in et nisi deserunt aliqua sit non veniam sint proident. Laboris magna mollit ea in laborum cillum. Veniam sint dolore deserunt voluptate deserunt tempor tempor et consequat qui in elit. Duis nostrud consectetur adipisicing minim adipisicing magna labore reprehenderit non tempor tempor elit amet ea. Irure pariatur laborum elit consectetur aliquip ad id eu anim incididunt. Aute sint sit ad esse ad aute quis eu anim commodo.\r\n',
          created_at: new Date(2015, 11, 24)
        },
        {
          fromUser: 3,
          toUser: 5,
          subject:
            'Cillum non qui sunt nulla ea dolor aliqua minim ipsum non enim aute deserunt.',
          body:
            'Pariatur Lorem enim aute do aliqua. Nulla nulla ullamco enim ex et ipsum voluptate eu irure proident ea reprehenderit aute. Eu excepteur enim cupidatat duis excepteur excepteur eiusmod sunt nulla. Eiusmod id laborum aliqua voluptate.\r\n',
          created_at: new Date(2018, 7, 16)
        },
        {
          fromUser: 6,
          toUser: 3,
          subject:
            'Laborum irure pariatur officia amet velit reprehenderit nulla.',
          body:
            'Tempor deserunt est nulla sint quis in. Eu labore reprehenderit commodo exercitation amet sint id. Exercitation dolor dolor ex laboris excepteur ad ut. Ullamco culpa magna esse nostrud quis ullamco nulla magna non.\r\n',
          created_at: new Date(2014, 8, 29)
        },
        {
          fromUser: 3,
          toUser: 10,
          subject:
            'Ut deserunt laboris incididunt ex exercitation officia ea pariatur cillum excepteur sint pariatur.',
          body:
            'Dolore ex pariatur excepteur sunt cillum magna cupidatat velit. Mollit consequat ea Lorem velit veniam pariatur. Laborum incididunt eiusmod nisi pariatur sit ullamco id.\r\n',
          created_at: new Date(2018, 1, 26)
        },
        {
          fromUser: 9,
          toUser: 10,
          subject:
            'Fugiat esse eiusmod eu do magna sint eu culpa laborum fugiat dolore.',
          body:
            'Consequat magna consequat ullamco ad esse labore. Id aliquip deserunt exercitation quis dolor in occaecat sit. Culpa veniam dolore culpa nulla aliquip est. Aliquip pariatur excepteur est id magna ut ullamco ad ut excepteur velit id.\r\n',
          created_at: new Date(2018, 1, 19)
        },
        {
          fromUser: 5,
          toUser: 3,
          subject:
            'Esse magna velit voluptate nulla anim nisi in enim minim ut velit reprehenderit dolore et.',
          body:
            'Labore est nisi duis sint occaecat ipsum nostrud deserunt aliqua ut do commodo minim. Incididunt elit eu non fugiat ullamco proident velit mollit reprehenderit tempor dolore velit. Culpa velit dolore elit occaecat labore. Velit et sit qui amet ad non eu exercitation ullamco aliquip irure tempor minim. Et excepteur do ullamco in id consequat anim. Fugiat exercitation pariatur anim ullamco ullamco cillum.\r\n',
          created_at: new Date(2018, 4, 4)
        },
        {
          fromUser: 2,
          toUser: 1,
          subject: 'Sit pariatur mollit Lorem voluptate.',
          body:
            'Eu qui laborum proident adipisicing. Est elit non dolor ullamco quis sint esse incididunt cupidatat Lorem eu labore. Duis sit Lorem officia exercitation tempor velit aute reprehenderit pariatur ipsum id officia dolor. Ad nostrud commodo in aute laborum ipsum exercitation magna adipisicing.\r\n',
          created_at: new Date(2016, 2, 16)
        },
        {
          fromUser: 1,
          toUser: 2,
          subject:
            'Adipisicing laborum incididunt velit cupidatat non incididunt commodo quis.',
          body:
            'Veniam consequat quis velit cillum aute laboris sunt tempor. Ipsum anim excepteur ipsum occaecat. Amet adipisicing exercitation nostrud nisi quis dolore proident exercitation laborum Lorem.\r\n',
          created_at: new Date(2018, 9, 19)
        },
        {
          fromUser: 2,
          toUser: 9,
          subject: 'Exercitation magna laboris sunt non ad ullamco.',
          body:
            'Nostrud minim in culpa reprehenderit Lorem nulla incididunt pariatur incididunt quis aute sunt quis. Aute sint aliqua excepteur pariatur. Laborum adipisicing ea laborum anim magna sint consectetur. Sunt nulla velit anim dolore culpa ut. Velit deserunt ullamco est irure aute fugiat voluptate aliquip ullamco anim magna.\r\n',
          created_at: new Date(2016, 1, 26)
        }
      ])
    })
}
