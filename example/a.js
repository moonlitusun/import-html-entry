(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		define([], factory);
	} else if (typeof exports === "object") {
		module.exports = factory();
	} else {
		// 浏览器全局变量
		root.MyModule = factory();
	}
})(typeof self !== "undefined" ? self : this, function () {
	return {
		mounted2: () => {
			console.log('mounted');
		}
	};
});
