
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {
          "author_id": 9,
          "content": "Elit proident veniam exercitation dolor anim. Lorem laboris quis eiusmod pariatur. Nostrud commodo esse occaecat reprehenderit qui. Ut cupidatat ea magna aliqua.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2017-10-15T12:14:37 +07:00"
        },
        {
          "author_id": 5,
          "content": "Sit laboris cupidatat laboris veniam deserunt velit laboris reprehenderit ad ad in officia culpa non. Do est occaecat ex laboris nostrud sunt nisi. Culpa ullamco cillum minim cillum dolore do magna deserunt commodo.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2017-03-31T04:58:09 +07:00"
        },
        {
          "author_id": 4,
          "content": "Veniam adipisicing duis ullamco pariatur pariatur nostrud cillum non est non veniam. Cupidatat aute sunt quis nostrud irure consequat. Velit nostrud veniam tempor enim ullamco. Consectetur mollit laboris ipsum enim enim commodo labore culpa irure veniam cupidatat ea exercitation. Dolore et eiusmod do veniam. In deserunt elit tempor consequat id cupidatat reprehenderit ad amet quis ipsum pariatur voluptate in.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2018-09-10T05:21:24 +07:00"
        },
        {
          "author_id": 5,
          "content": "Aute duis cupidatat excepteur reprehenderit eu occaecat magna ut Lorem aliquip enim fugiat magna commodo. Consectetur anim cupidatat ad nostrud minim ut occaecat minim officia dolor proident et. Nostrud occaecat nulla laboris est et. Voluptate est cupidatat commodo enim veniam ex. Cupidatat excepteur magna aute amet aute incididunt sit duis est pariatur esse labore voluptate. Ad ex ut consectetur labore incididunt.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2014-10-23T10:33:50 +07:00"
        },
        {
          "author_id": 8,
          "content": "Id dolore non occaecat culpa et. Consequat ipsum nisi est ad. Occaecat non cillum et nisi duis dolor magna anim anim voluptate ea. Eiusmod consequat culpa incididunt velit pariatur velit esse dolore amet Lorem aliquip commodo. Laboris fugiat id incididunt nulla elit. Veniam enim excepteur labore excepteur pariatur consectetur reprehenderit. Consectetur sint sint elit nostrud dolore pariatur eiusmod veniam voluptate consequat.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2018-05-15T09:33:30 +07:00"
        },
        {
          "author_id": 1,
          "content": "Nulla ullamco mollit adipisicing adipisicing irure laborum id nulla commodo consequat quis. Ipsum exercitation aliqua nulla sint et mollit laboris ipsum occaecat enim id adipisicing veniam fugiat. Ea deserunt veniam minim eiusmod sunt. Reprehenderit amet aliqua deserunt fugiat tempor in commodo. Et ut velit voluptate cupidatat ipsum anim.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2014-06-30T02:18:16 +07:00"
        },
        {
          "author_id": 3,
          "content": "Ad eu officia est fugiat nulla consectetur. Fugiat incididunt officia est sint non id incididunt aute culpa. Aliqua excepteur magna Lorem ea ut nulla culpa aliquip exercitation. Aliqua quis eu occaecat pariatur do veniam anim eu fugiat qui enim id quis. Et irure adipisicing ut adipisicing magna culpa voluptate incididunt irure elit.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2017-09-26T12:24:40 +07:00"
        },
        {
          "author_id": 9,
          "content": "Voluptate laborum commodo sint laboris veniam. Pariatur reprehenderit ad sunt ad deserunt nisi amet nisi incididunt ipsum. Ea consectetur excepteur nostrud Lorem aliqua elit pariatur proident occaecat velit anim. Eiusmod tempor elit fugiat nostrud eiusmod adipisicing. Cupidatat anim magna velit cupidatat ex voluptate minim voluptate voluptate velit. Dolore sit ea quis dolor do do anim laborum ad. Esse elit deserunt minim adipisicing magna velit.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2015-06-04T03:31:35 +07:00"
        },
        {
          "author_id": 8,
          "content": "Excepteur culpa est esse pariatur labore voluptate duis reprehenderit aute dolor duis laboris ipsum aliquip. Ex ad deserunt deserunt laboris exercitation incididunt eiusmod adipisicing fugiat id aute. Do ea nisi mollit nostrud tempor ipsum pariatur culpa elit cillum duis proident.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2016-10-18T03:42:53 +07:00"
        },
        {
          "author_id": 6,
          "content": "Mollit irure mollit quis fugiat est commodo excepteur quis nostrud mollit in. Laboris ullamco minim ex qui. Irure consequat et exercitation reprehenderit aliquip occaecat labore ea incididunt reprehenderit consequat consectetur id. Ad cillum officia dolore Lorem laboris labore est.\r\n",
          "imageUrl": "http://placehold.it/32x32",
          "created_at": "2016-07-28T09:17:56 +07:00"
        }
      ]);
    });
};
