$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$(".back").click(backClick);


}

function backClick(e) {
    // prevent the page from reloading
    window.location.href='/';
}

function CollectionClick(e) {
    // prevent the page from reloading
    window.location.href='CPH';
}

function ProfileClick(e) {
    // prevent the page from reloading
    window.location.href='PPH';
}

function SearchClick(e) {
    // prevent the page from reloading
    window.location.href='search';
}

function GroupClick(e) {
    // prevent the page from reloading
    window.location.href='GPH';
}