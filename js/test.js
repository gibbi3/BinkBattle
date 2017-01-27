var model = {
  currentCat: null,
  admin: false,
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
    octopus.setCatID();
    model.currentCat = model.cats[0];
    viewCatList.init();
    viewCatNow.init();
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
    model.currentCat = cat;
    console.log(model.currentCat)
  },

  clickPlus: function() {
    model.currentCat.clicks += 1;
    viewCatNow.render();
  },

  resetCount: function() {
    for (c in model.cats) {
      model.cats[c].clicks = 0;
    }
  },

  isAdmin: function() {
    return model.admin;
  },

  adminTrue: function() {
    model.admin = true;
    viewCatNow.adminView.style.display = 'flex';
    viewCatNow.adminButton.style.display = 'none';
  },

  adminFalse: function() {
    model.admin = false;
    viewCatNow.adminView.style.display = 'none';
    viewCatNow.adminButton.style.display = 'flex';
  },

  updateCat: function() {
    if (document.getElementById('new-name').value.length != 0) {
      model.currentCat.name = document.getElementById('new-name').value;
    }
    if (document.getElementById('new-pic').value.length != 0) {
      model.currentCat.pic = document.getElementById('new-pic').value;
    }
    if (document.getElementById('new-clicks').value.length != 0) {
      model.currentCat.clicks = document.getElementById('new-clicks').value;
    }
    viewCatNow.render();
    viewCatList.render();
  }
}

var viewCatList = {

render: function() {
  this.catListElem.innerHTML = '';
  var cats = octopus.getAllCats();
  for (c = 0; c < cats.length; c++) {

    cat = cats[c];

    elem = document.createElement("div");
    elem.textContent = cat.name;

    pic = document.createElement("img", cat.id);
    pic.src = cat.pic;
    pic.className += 'clickable';
    pic.addEventListener('click', (function(catCopy) {
      return function() {
        octopus.setCurrentCat(catCopy);
        viewCatNow.render();
    };
  })(cat));

    this.catListElem.appendChild(elem);
    this.catListElem.appendChild(pic);
    };
  },

init: function() {
  this.catListElem = document.getElementById('cat-list');
  viewCatList.render();
    }
}

var viewCatNow = {

  init: function() {

    this.catContainer = document.getElementById('cat-container');
    this.count = document.getElementById('clicks');
    this.name = document.getElementById('name');
    this.cat = document.getElementById('cat');
    this.reset = document.getElementById('reset');
    this.adminButton = document.getElementById('admin-button');
    this.adminView = document.getElementById('admin-view');
    this.cancelButton = document.getElementById('cancel');
    this.submitButton = document.getElementById('submit');

    this.cat.addEventListener('click', function() {
      octopus.clickPlus();
    });

    this.reset.addEventListener('click', function() {
      octopus.resetCount();
      viewCatNow.render();
    });

    this.adminButton.addEventListener('click', function(){
      octopus.adminTrue();
      viewCatNow.render();
    });

    this.submitButton.addEventListener('click', function() {
      octopus.updateCat();
    });

    this.cancelButton.addEventListener('click', function(){
      octopus.adminFalse();
      viewCatNow.render();
    });

    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat();
    this.count.textContent = currentCat.clicks;
    this.name.textContent = currentCat.name;
    this.cat.src = currentCat.pic;

    val = octopus.isAdmin();
    if (val === false) {
      this.adminView.style.display = 'none';
    }else if(val === true) {
      this.adminView.style.display = 'flex';
    };

    console.log(this.count);
    console.log(this.name);
    console.log(this.cat);
    console.log(currentCat.name);

  },
};

octopus.init();
