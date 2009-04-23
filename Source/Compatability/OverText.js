OverText = Class.refactor(OverText, {
	initialize: function(inputs, options){
		if ($$(inputs).length) {
			this.instances = [];
			this.setOptions(options);
			$$(inputs).each(this.addElement, this);
		} else {
			return this.previous.apply(this, arguments);
		}
	},
	addElement: function(el) {
		this.instances.push(new OverText(el, this.options))
	},
	startPolling: function(){
		this.instances.each(function(instance) {
			instance.startPolling();
		});
	},
	stopPolling: function(){
		this.instances.each(function(instance) {
			instance.stopPolling();
		});
	},
	hideTxt: function(el) {
		var ot = el.retrieve('OverText');
		if (ot) ot.hide();
	},
	showTxt: function(el) {
		var ot = el.retrieve('OverText');
		if (ot) ot.show();
	},
	testOverTxt: function(el) {
		var ot = el.retrieve('OverText');
		if (ot) ot.test();		
	},
	repositionAll: function() {
		this.instances.each(function(instance) {
			instance.reposition();
		});
	},
	repositionOverTxt: function(el) {
		var ot = el.retrieve('OverText');
		if (ot) ot.reposition();
	}

});