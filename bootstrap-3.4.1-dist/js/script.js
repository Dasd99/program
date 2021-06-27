// event pada saat link di klik
$('.page-scroll').on('click',function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yg bersangkutan
    var elemenTujuan = $(tujuan);
    console.log(elemenTujuan);

    // pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top -50
    },'easseInOutExpo');

    event.preventDefault();

    

});





// (function() {
// })();