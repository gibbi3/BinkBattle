var cats = [

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
];

function catList() {
  for (c in cats) {
    $('#cat-list').append("<div class='cat'>" + cats[c].name + "<img class='clickable' id='"+c+"' src='" + cats[c].pic + "'></div>");
  }
};

$(function() {
  $('.clickable').click(function() {
    var clicked = this.id;
    console.log(clicked);
    $('#cat-container').replaceWith("<div id='cat-container' class='cat-container'><div class='cat'>" + cats[clicked].name + "<img class='selected' id='"+ clicked +"'src='" + cats[clicked].pic + "'><div class='clicks'>"+cats[clicked].clicks+"</div></div></div>");
  })
});

$(function() {
  $(document).on('click', '.selected', function() {
    var clicked = this.id;
    console.log(clicked);
    cats[clicked].clicks +=1;
    console.log(cats[clicked].clicks);
    $('.clicks').text(cats[clicked].clicks);
  })
});

catList();
