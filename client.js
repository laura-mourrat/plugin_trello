window.TrelloPowerUp.initialize({
  'card-badges': function(t, options) {
    return t.card('checklists')
      .then(function(card) {
        const items = [];
        card.checklists.forEach(checklist => {
          checklist.checkItems.forEach(item => {
            items.push(item.name);
          });
        });
        return items.slice(0, 3).map(name => ({
          text: name,
          color: 'blue'
        }));
      });
  }
});
