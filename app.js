console.log("Let's get this party started!");

class Form {
	constructor() {
		this.searchField = $("#searchField");
		this.submitBttn = $("#submitBttn");
		this.removeBttn = $("#removeBttn");
	}
	async getUrl() {
		const searchTerm = this.searchField.val()
		const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
		const resp = await axios.get(url);

		const imgs = resp.data.data;
		const gifURL = imgs[0].images.original.url;	
		return gifURL;
	}
	showGif(gifURL) {
		const newImg = $(`<img src=${gifURL}>`)
		$("#gifHolder").append(newImg)
		this.searchField.val("")

	}
	removeGifs() {

	}
}

const form = new Form();

$("#submitBttn").on("click", async function(evt) {
	evt.preventDefault();
	const gifURL = await form.getUrl();
	console.log(gifURL)
	form.showGif(gifURL);
})

$("#removeBttn").on("click", function(evt) {
	evt.preventDefault();
	$("#gifHolder").html("");
})