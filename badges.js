window.TrelloPowerUp.initialize({
  'card-badges': function (t, options) {
    return t.card('checklists')
      .then(function (card) {
        const checklists = card.checklists || [];
        const badges = [];

        checklists.forEach(cl => {
          cl.checkItems.forEach(item => {
            badges.push({
              text: item.name,
              color: item.state === 'complete' ? 'green' : 'red',
              icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png'
            });
          });
        });

        return badges;
      });
  }
});
