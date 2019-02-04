
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "name": "Irwin Kelly",
          "email": "irwinkelly@accidency.com",
          "bio": "Nulla adipisicing duis esse anim deserunt commodo magna. Minim cillum ut tempor aliquip mollit amet consequat deserunt nulla proident mollit proident in. Ad dolor amet occaecat irure labore aliqua velit consectetur nulla pariatur adipisicing elit amet. Duis ad do deserunt est quis duis. Minim proident pariatur aliquip magna magna ipsum do velit ullamco deserunt cillum irure anim. Aliquip labore incididunt duis aute et consectetur ea irure ad velit excepteur minim duis quis.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2016-02-18T11:42:43 +07:00"
        },
        {
          "name": "Higgins Church",
          "email": "higginschurch@accidency.com",
          "bio": "Non ut non reprehenderit laboris. Excepteur reprehenderit qui pariatur veniam eiusmod cillum sunt occaecat mollit irure esse mollit. Ullamco consequat sint ea tempor officia sint minim amet.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2017-07-10T01:28:38 +07:00"
        },
        {
          "name": "Peters Daugherty",
          "email": "petersdaugherty@accidency.com",
          "bio": "Ullamco in esse ex cupidatat. Et occaecat anim nisi sint. Do eiusmod laboris sint eu nulla consectetur. Ad tempor cupidatat elit irure non occaecat. Laborum eiusmod non sunt do ea incididunt fugiat enim ut et Lorem nostrud in laborum.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2016-06-04T08:43:25 +07:00"
        },
        {
          "name": "Reese Rojas",
          "email": "reeserojas@accidency.com",
          "bio": "Et commodo ea duis veniam proident sint deserunt veniam anim magna adipisicing adipisicing. Nulla non mollit mollit eiusmod. Irure irure ea ex exercitation nisi eiusmod. In culpa enim reprehenderit fugiat et cillum excepteur ex. Ad cillum irure labore fugiat aute incididunt minim dolor consequat sunt excepteur proident do laboris.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2014-05-12T10:51:51 +07:00"
        },
        {
          "name": "Peterson Vasquez",
          "email": "petersonvasquez@accidency.com",
          "bio": "Lorem laborum Lorem incididunt excepteur pariatur sunt excepteur ad aliqua ex in. Id consectetur est mollit occaecat quis cupidatat quis adipisicing minim reprehenderit eiusmod et cillum aute. Non eu sint irure nisi veniam quis elit.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2014-08-13T11:00:10 +07:00"
        },
        {
          "name": "Kathleen Morrow",
          "email": "kathleenmorrow@accidency.com",
          "bio": "Nostrud qui irure ex nulla do eu ullamco cupidatat esse quis. Proident elit consectetur deserunt id reprehenderit in est ipsum ipsum eiusmod quis. Laboris veniam commodo incididunt Lorem duis incididunt ea culpa nisi aute. Do enim et exercitation ullamco do eu anim est exercitation ea.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2018-03-16T11:20:57 +07:00"
        },
        {
          "name": "Claudine Peters",
          "email": "claudinepeters@accidency.com",
          "bio": "Adipisicing fugiat amet proident id duis. Sit officia id qui et do culpa amet. Esse proident minim ipsum quis adipisicing excepteur magna id esse aliquip sunt id.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2014-04-08T11:07:13 +07:00"
        },
        {
          "name": "Luann Anderson",
          "email": "luannanderson@accidency.com",
          "bio": "Sunt nulla ea aliquip eiusmod laborum cillum aliqua sit. Dolor reprehenderit id do occaecat officia labore proident sit ullamco Lorem proident. Eu est ad ex duis dolor fugiat do. Amet enim minim velit dolore Lorem dolore mollit reprehenderit.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2016-10-01T06:33:01 +07:00"
        },
        {
          "name": "Pickett Murray",
          "email": "pickettmurray@accidency.com",
          "bio": "Mollit enim magna elit id est fugiat duis id reprehenderit id non incididunt sunt magna. Lorem non dolor sunt tempor sit veniam magna consequat incididunt ut proident enim nulla. Officia ea voluptate do est cillum ullamco reprehenderit anim pariatur cupidatat ea incididunt qui esse. Nulla fugiat aliqua consectetur eiusmod quis. Irure id ea ut ipsum ea aliqua aliquip non do exercitation nostrud.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2018-05-28T10:40:51 +07:00"
        },
        {
          "name": "Diaz Dotson",
          "email": "diazdotson@accidency.com",
          "bio": "Occaecat laboris elit veniam laborum anim cillum nostrud elit eu sunt laborum Lorem excepteur nulla. Nisi dolor esse anim nisi sint ea. Aliqua consequat do sit enim adipisicing.\r\n",
          "profilePhotoURL": "http://placehold.it/32x32",
          "location": "Tucson, AZ",
          "created_at": "2015-04-22T09:11:51 +07:00"
        }
      ]);
    });
};
