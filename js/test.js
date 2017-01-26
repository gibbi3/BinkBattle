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

  init: function() {
    this.setCatID();
    model.currentCat = model.cats[0];
    view.catList();
  },

  setCatID: function() {
    model.cats.forEach(function(cat, index) {
    cat.id = index;
  });
  },

  getAllCats: function() {
    return model.cats;
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  setCurrentCat: function(cat) {
    model.currentCat = model.cats[cat];
  },

  clickPlus: function(cat) {
    cat.clicks++;
  }
}

var view = {

catList: function() {
  var cats = octopus.getAllCats();
  for (c = 0; c < cats.length; c++) {
    var cat = cats[c];
    $('#cat-list').append("<div class='cat'>" + cat.name +
      "<img class='clickable' id='"+c+"' src='" + cats[c].pic + "'></div>");
    $(document).on('click', '.clickable', function() {
      octopus.setCurrentCat(this.id);
      view.catNow();
      });
    }
  },

catNow: function(cat) {
  cat = octopus.getCurrentCat();
    $('#cat-container').replaceWith("<div id='cat-container' " +
      "class='cat-container'><div class='cat'>" + cat.name +
      "<img class='selected' id='"+ cat +"'src='" + cat.pic +
      "'><div class='clicks'>"+ cat.clicks+"</div></div></div>");
    $(document).on('click', '.selected', function(cat) {

    })
  }
};
octopus.init();
