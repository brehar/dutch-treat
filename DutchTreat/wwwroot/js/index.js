$(document).ready(() => {
	const $messageForm = $('#message-form');
	const $btnBuy = $('#btn-buy');
	const $listItems = $('.product-props li');
	const $loginToggle = $('#login-toggle');
	const $popupForm = $('.popup-form');

	$messageForm.hide();

	$btnBuy.on('click', () => {
		$messageForm.show();
	});

	$listItems.on('click', event => {
		console.log(`You clicked on ${$(event.currentTarget).text()}.`);
	});
	
	$loginToggle.on('click', () => {
		$popupForm.fadeToggle(1000);
	});
});
