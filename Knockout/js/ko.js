var initialCatList = [

  {
    name: "Bink",
    imgSrc: "img/bink.jpg",
    clickCount: 0,
    nicknames: ["Binkston James"]
  },
  {
    name: "Binkston",
    imgSrc: "img/binkston.jpg",
    clickCount: 0,
    nicknames: ["Baby Bink"]
  },
  {
    name: "Bink",
    imgSrc: "img/bink.jpg",
    clickCount: 0,
    nicknames: ["Binky Boo"]
  },
  {
    name: "Binkston",
    imgSrc: "img/binkston.jpg",
    clickCount: 0,
    nicknames: ["Binkles"]
  },
  {
    name: "Bink",
    imgSrc: "img/bink.jpg",
    clickCount: 0,
    nicknames: ["Patient Zero"]
  }
];

var Cat = function(data) {
  this.catName = ko.observable(data.name);
  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);
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
    }else{
      return "Feline Deity"
      }
    }, this);
  }

var ViewModel = function() {

    var self = this;

    this.catList = ko.observableArray([]);

    initialCatList.forEach(function(catItem) {
      self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.countPlus = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.changeCat = function(clicked) {
        console.log("butts");
        self.currentCat(clicked);
    }
  };

  ko.applyBindings(new ViewModel());
