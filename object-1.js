var book = {
    name : 'Functional Javascript',
    author : 'Michal Fogus',
    publisher :'O\'Reilly',
    page : 250,
    print : function(){
        console.log(this.name +' , '+  this.author);
    }
}
// console.log( book);
// console.log( book.print);
// book.print()
book.publishedYear = 2010;


// console.log(book);;

for (var props in book){
    // console.log(props );
    console.log(props +'='+ book[props]);
}