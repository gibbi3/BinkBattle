var Cat = function() {
  this.catName = ko.observable('Bink');
  this.clickCount = ko.observable(0);
  this.imgSrc = ko.observable('img/bink.jpg');
  this.nicknames = ko.observableArray([
    {name: 'Binkston James'},
    {name: 'Shitass'},
    {name: 'Binkston Reginald'}
    ]);
  this.catLevel = ko.computed(function() {
    if (this.clickCount() < 10) {
      return "Infant"
    }else if (this.clickCount() < 40) {
      return "Kitten"
    }else if (this.clickCount() < 80) {
      return "Teen"
    }else if (this.clickCount() < 120) {
      return "Cat"
    }else if (this.clickCount() < 150) {
      return "Beast"
    }else if (this.clickCount() < 200) {
      return "Lion"
    }else if (this.clickCount() < 250) {
      return "Feline Deity"
      }
    }, this);
  }

var ViewModel = function() {

    this.currentCat = ko.observable( new Cat() );
    this.countPlus = function() {
        this.clickCount(this.clickCount() + 1);
    };
  };

  ko.applyBindings(new ViewModel());
