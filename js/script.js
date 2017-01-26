var model = {
  currentCat: null,
  cats: [

    {
  		"name": "Bink",
  		"pic": "img/bink.jpg",
  		"clicks": 0
  	},
    {
  		"name": "Binkston",
  		"pic": "img/binkston.jpg",
  		"clicks": 0
  	},
    {
  		"name": "Bink",
  		"pic": "img/bink.jpg",
  		"clicks": 0
  	},
    {
  		"name": "Binkston",
  		"pic": "img/binkston.jpg",
  		"clicks": 0
  	},
    {
  		"name": "Bink",
  		"pic": "img/bink.jpg",
  		"clicks": 0
  	}
  ],
};

var octopus = {

  getAllCats: function() {
    return model.cats;
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  clickCount: function(cat) {
    model.currentCat.clicks++;
  }
};
