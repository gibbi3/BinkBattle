$(function() {
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
    catNow(cat);
  }

}

$(document).on('click', '.clickable', function(cat) {
  var cat = this.id;
  console.log(cat);
  currentCat = cat;
  catNow(cat);
});


$(document).on('click', '.selected', function() {
  var clicked = this.id;
  console.log(clicked);
  model.cats[clicked].clicks +=1;
  console.log(model.cats[clicked].clicks);
  $('.clicks').text(model.cats[clicked].clicks);
});


$(document).on('click', '.reset', function() {
  for (c in cats) {
    cats[c].clicks = 0;
    $('.clicks').text("0");
  }
})

function catList() {
  var cats = octopus.getAllCats();
  for (c in cats) {
    $('#cat-list').append("<div class='cat'>" + cats[c].name +
      "<img class='clickable' id='"+c+"' src='" + cats[c].pic + "'></div>");
    }
  };

function catNow(cat) {
  $('#cat-container').replaceWith("<div id='cat-container' "+
    "class='cat-container'><div class='cat'>" + model.cats[cat].name +
    "<img class='selected' id='"+ cat +"'src='" + model.cats[cat].pic +
    "'><div class='clicks'>"+model.cats[cat].clicks+"</div></div></div>");
}

catList();

});
