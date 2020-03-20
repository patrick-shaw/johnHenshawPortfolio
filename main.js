// //DROP DOWN PAGE SELECT
// const dropDown = document.querySelector('#project-drop');
// const titles = document.getElementById('titles').querySelectorAll('section');

// dropDown.addEventListener('change', function () {
//     titles.forEach(item => {
//         let sel = dropDown.options[dropDown.selectedIndex];
//         item.style.display = 'none';
//         titles[sel.value].style.display = 'grid';
//     })
// })

//INFO PANEL VISIBLE
const info = document.getElementById('info');
const close = document.getElementById('close');
const infoPanel = document.getElementById('info-panel');

info.addEventListener('click', () => {
    infoPanel.style.display = "block";
})

close.addEventListener('click', () => {
    infoPanel.style.display = "none";
})

window.onclick = (e) => {
    if (e.target == infoPanel) {
        infoPanel.style.display = "none";
    }
}

//HOME PAGE CREATE CLOUD
const cloudClick = document.querySelector('.home-screen');
const clickText = document.getElementById('click-text');

cloudClick.addEventListener('click', (e) => {
    clickText.style.color = 'white';
    const cloud = document.createElement('img');

    const randNum = (Math.ceil(Math.random() * 4))

    cloud.src = `images/clouds/cloud_${randNum}.svg`;
    cloud.style.position = 'absolute';
    const mouseTop = e.clientY - 50;
    const mouseLeft = e.clientX - 70;
    cloud.style.top = `${mouseTop}px`
    cloud.style.left = `${mouseLeft}px`

    cloudClick.appendChild(cloud);
})

//SMOOTH MAGIC IMAGE FADE IN
const controller = new ScrollMagic.Controller();
const gridImages = document.querySelectorAll('.grid-image');

gridImages.forEach(image => {
    new ScrollMagic.Scene({
        triggerElement: image,
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle(image, 'visible')
        .addTo(controller);
})


//CUSTOM DROP DOWN

const pageTitle = document.getElementById('page-title');
const dropdown = document.getElementById('dropdown');

pageTitle.addEventListener('click', () => {
    dropdown.classList.toggle('collapsed');
    dropdown.style.transition = 'max-height 0.5s ease-in-out';
})

const titles = document.getElementById('titles').querySelectorAll('section');
const droptions = document.getElementById('droptions').querySelectorAll('h1');

droptions.forEach((page, index) => {
    page.addEventListener('click', () => {
        titles.forEach(item => {
            item.style.display = 'none';
        })
        titles[index].style.display = 'grid';
        dropdown.classList.toggle('collapsed');
        dropdown.style.transition = 'none';
        pageTitle.innerHTML = page.innerHTML
    })
})

window.addEventListener('click', (e) => {
    if (!e.target.closest('#dropdown')) {
        dropdown.classList.add('collapsed');
    }
})