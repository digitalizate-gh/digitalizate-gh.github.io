let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// function copiaralportapapeles1(){
//     let texto1 = document.getElementById('texto1');
//     texto1.select();
//     texto1.setSelectionRange(0, 99999);
//     document.execCommand('copy');
// }

// function copiaralportapapeles2(){
//     let texto2 = document.getElementById('texto2');
//     texto2.select();
//     texto2.setSelectionRange(0, 99999);
//     document.execCommand('copy');
// }

// function copiaralportapapeles3(){
//     let texto3 = document.getElementById('texto3');
//     texto3.select();
//     texto3.setSelectionRange(0, 99999);
//     document.execCommand('copy');
// }