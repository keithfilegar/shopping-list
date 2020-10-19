function addItem() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();
        $(".shopping-list").append(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
        $('#shopping-list-entry').val('')
    }
)}

function checkItem(){
    $("ul").on('click', '.shopping-item-toggle', function(event){
        $(this).closest("li").children(".shopping-item").toggleClass("shopping-item__checked")
    })
}

function deleteItem(){
    $("ul").on('click', '.shopping-item-delete', function(event){
        $(this).closest("li").remove()
    })
}

function handleShoppingList(){
    addItem();
    checkItem();
    deleteItem();
}

$(handleShoppingList);
