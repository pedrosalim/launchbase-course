const modalOverlay = document.querySelector('.link');
const link = document.querySelectorAll('.links')
const modal = document.querySelector('.modal')

for (let links of link) {
    links.addEventListener('click', function() {
        links.classList.add('active')
    })
}