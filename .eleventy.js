const { DateTime } = require("luxon")

module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/_data");
	eleventyConfig.addPassthroughCopy("./src/img");
	eleventyConfig.addPassthroughCopy("./src/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addPassthroughCopy("./src/admin");

	eleventyConfig.addWatchTarget("./src/scss/");

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
		})
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};