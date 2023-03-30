const cards = document.querySelectorAll('.card__item');
const questions = document.querySelectorAll('.card__question');

function acordeon() {
	if (this.classList.contains('card__active')) {
		this.classList.remove('card__active');
	} else {
		roemoveAcordeon();
		this.classList.toggle('card__active');
	}
}
const roemoveAcordeon = () => {
	cards.forEach(el => {
		el.classList.remove('card__active');
	});
};

const closeAcordeon = e => {
	if (
		e.target.classList.contains('card__btn') ||
		e.target.classList.contains('card__question') ||
		e.target.classList.contains('card__text')
	)
		return;
	roemoveAcordeon();
};
cards.forEach(btn => btn.addEventListener('click', acordeon));
window.addEventListener('click', closeAcordeon);
