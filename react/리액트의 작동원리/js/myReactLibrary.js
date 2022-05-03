const React = {
	createElement: function(element, props, text) {
		const $element = document.createElement(element);

		console.log(typeof props); //object

		for (let key in props) {
			//console.log(props[key]);
			$element.setAttribute(key, props[key]);
		}

		const $text = document.createTextNode(text);

		$element.appendChild($text);

		return $element;
	}
};

const ReactDOM = {
	render: function($element, $target) {
		$target.appendChild($element);
	}
};
