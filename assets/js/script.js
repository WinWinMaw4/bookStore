let bookData = data.book_data;




function toShort(str,max=50){
    if(str.length > max ){
        return str.substring(0,max)+"...."
    }
    return str;
}


//book-item-slide
let bookListSlide = document.querySelector('.book-lists-slide')
bookData.map(function(el,index){

    bookListSlide.innerHTML += ` <div class="card col-md-3" id="book-item${el.id}">
    <div class="top-img d-flex align-item-center justify-content-center bg-white">
        <a href="${el.book_martica_href}">
            <img src="${el.urlToImage}" class="w-70"  alt="" style="">
        </a>
    </div>
    <div class="card-body">
        <h5 class="book-title">${toShort(el.bookName,30)}</h5>
        <span class="author">
            <label for="" class="mute-color">Author:</label>
            ${el.author}
        </span><br>
        <span class="total-pages">
            <label for="" class="mute-color">Manufacture:</label>
            <date>${el.manuDate}</date>
        </span><br>
        <span class="total-pages">
            <label for="" class="mute-color">Total Pages:</label>
            ${el.totalPages}
        </span><br>
        <span class="total-pages">
            <label for="" class="mute-color">Total Size:</label>
            ${el.totalSize}
        </span>
        <p class="description">
            <label for="" class="mute-color">Description:</label>
            <small>
                ${toShort(el.description,100)};
            </small>
        </p>
    </div>
    <div class="card-footer">
        <a href="${el.book_martica_href}" class="btn-open" target="_blank" >Open book  </a>
        <a href="${el.bookHref}"  class="btn-download" download>PDF Download</a>
    </div>
</div>`;
})





//Book-item-table
let tableBookList = document.querySelector('.table-book-list');
bookData.map(function(el,index){
    tableBookList.innerHTML +=  ` 
<tr class="flex-wrap table-book-item1">
<td>${el.id}</td>
<td class="text-nowrap">${el.bookName}</td>
<td class="text-nowrap">${el.manuDate}</td>
<td>${el.totalPages}</td>
<td>${el.totalSize}</td>
<td>${el.bookPrice}/ebook-${el.freePrice}</td>
<td class="text-nowrap">b-5000/ebook-7000</td>
<td class="text-light text-nowrap">
    <a href="${el.book_မာတိကာ_href}" class="me-2 open-book text-decoration-underline text-info">Open Book </a>
    <a href="${el.bookHref}" class="down-book text-light" download>
        <i class="fas fa-download fa-fw "></i>
    </a>
</td>
</tr>`
});




let btnOpens = document.querySelectorAll('.btn-open');
let bookIframe = document.getElementById('book-iframe');

//show in iframe
for (const btnOpen of btnOpens) {
    btnOpen.addEventListener('click', function(e) {
        e.preventDefault();
        bookIframe.src = btnOpen.href;
        console.log(btnOpen.href);
    });
}