// Settings menu

var app = app || {};

(function(global){

	var view = {

		init: function(option){
			this.template = app.templates.settings;
			this.name = 'settingsMenu';
			this.placeholder = document.createElement('aside');

			render();
		}

		render: function(){
			this.plaseholder.innerHTML = this.template;

		}
	}
	
})(window)