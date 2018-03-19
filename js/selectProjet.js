
$('#allWorks').on('click', function(event) {
	event.preventDefault();
	$('.groupBoutons ul li a').removeClass();
	$('#allWorks a').addClass('actifBouton');
	$('.projetCreative, .projetCorporate, .projetPortfolio').hide();
	$('.projetCreative, .projetCorporate, .projetPortfolio').fadeIn();
});

$('#creative').on('click', function(event) {
	event.preventDefault();
	$('.groupBoutons ul li a').removeClass();
	$('#creative a').addClass('actifBouton');
	$('.projetCreative, .projetCorporate, .projetPortfolio').hide();
	$('.projetCreative').fadeIn();
});

$('#corporate').on('click', function(event) {
	event.preventDefault();
	$('.groupBoutons ul li a').removeClass();
	$('#corporate a').addClass('actifBouton');
	$('.projetCreative, .projetCorporate, .projetPortfolio').hide();
	$('.projetCorporate').fadeIn();
});

$('#portfolio').on('click', function(event) {
	event.preventDefault();
	$('.groupBoutons ul li a').removeClass();
	$('#portfolio a').addClass('actifBouton');
	$('.projetCreative, .projetCorporate, .projetPortfolio').hide();
	$('.projetPortfolio').fadeIn();
});