// $(document).ready(function(){
    console.log("testing",gallery);
   var daftarTaman = $('.daftar-taman');
   var filter      = $('#filter');

   $.get('https://www.ariona.net/talentbandung/', function(data){
      $.each( data, function(){
         var html =  '<div class="grid-item"><article class="taman">'+
                        '<figure>'+
                           '<a href="single.html"><img src="'+this.image.thumbnail+'" alt=""/></a>'+
                        '</figure>'+
                        '<div class="taman-detail">'+
                           '<h2>'+
                              '<a href="single.html">'+
                                 '<span class="subtitle">Taman</span>'+
                                 '<span class="title">'+this.nama+'</span>'+
                              '</a>'+
                           '</h2>'+
                           '<p>'+this.alamat+'</p>'+
                        '</div>'+
                     '</article></div>';
         
         daftarTaman.append(html);
   
      } );
   });
   
   filter.on('keyup', function(){
      var taman  = $(".grid-item");
      var search = this.value.toLowerCase();
      
      taman.each(function(){
         var namaTaman   = $(this).find('.title').text().toLowerCase();
         var alamatTaman = $(this).find('p').text().toLowerCase();
   
   
         if (namaTaman.indexOf(search) != -1 || alamatTaman.indexOf(search) != -1) {
            $(this).show(300);
         } else {
            $(this).hide(300);
         }
      });
   });
   var gallery = $('.gallery-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:'<button class="slick-prev ion-android-arrow-back" aria-label="Previous" type="button"></button>',
    nextArrow:'<button class="slick-next ion-android-arrow-forward" aria-label="Next" type="button"></button>',
    


   });
    
    
// });