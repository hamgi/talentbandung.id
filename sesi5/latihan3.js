// var buah = ["Apel","Jeruk","Mangga","Delima"];
// var listbuah = $('#buah');


// for( var i=0;i<buah.length; i++ ){
// var listItem = '<li class="buah">' + buah[i] + '</li>';
// listbuah.append(listItem)
// }

// var filter = $('#filter');
// filter.keyup( filterbuah);

// function filterbuah(){
// var buah =$('.buah');

// for( var i=0; i < buah.length; i++){
//      var item = $(buah[i]).text().toLowerCase();

// if( item.indexOf( filter.val().toLowerCase() ) != -1){
//     $(buah[i]).slideDown();
// } else{
//     $(buah[i]).slideUp()
// }
// }
// }

var listTaman = $('#list-taman')

$.get('https://ariona.net/talentbandung/', function(data, status) {
    console.log(data);
    for( var i=0;i<data.length; i++ ){
        var taman = '<li class="taman"><img src="'+ data[i].image.thumbnail +'" /> ' + data[i].nama + '</li>';
        listTaman.append(taman)
        }
        
for( var i=0; i < taman.length; i++){
     var item = $(taman[i]).text().toLowerCase();

if( item.indexOf( filter.val().toLowerCase() ) != -1){
    $(taman[i]).slideDown();
} else{
    $(taman[i]).slideUp()
}
}
}
    
);





