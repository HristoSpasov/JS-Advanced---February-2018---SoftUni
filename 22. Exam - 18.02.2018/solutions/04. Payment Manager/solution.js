class PaymentManager{
    constructor(title){
        this.title = title;
    }

    render(id){
        let table = $('<table>');
        this.id = id;
        // Caption
        let caption = $(`<caption>${this.title} Payment Manager</caption>`);
        table.append(caption);

        // Thead
        let thead = $('<thead>');
        let tr = $('<tr><th class="name">Name</th><th class="category">Category</th><th class="price">Price</th><th>Actions</th></tr>\n');
        thead.append(tr);
        table.append(thead);

        // Tbody
        let tbody = $('<tbody>').addClass('payments');
        table.append(tbody);

        // // Tfoot
        let tfoot = $('<tfoot>').addClass('input-data');
        let footTr = $('<tr><td><input name="name" type="text"></td><td><input name="category" type="text"></td><td><input name="price" type="number"></td></tr>');
        let addBtn = $('<button>').text('Add').on('click', () => {
            let inpName =  $(`#${id}`).find('.input-data td:nth-child(1) input');
            let inpCategory = $(`#${id}`).find('.input-data td:nth-child(2) input');
            let inpPrice = $(`#${id}`).find('.input-data td:nth-child(3) input');

            if(inpName.val().length === 0 || inpCategory.val().length === 0 || inpPrice.val().length === 0){
                return;
            }

            let newTr = $('<tr>');

            let nameTd = $('<td>').text(inpName.val());
            let categoryTd = $('<td>').text(inpCategory.val());
            let priceTd = $('<td>').text(Number(Number(inpPrice.val())).toString());
            let delBtnTd = $('<td>');
            let delBtn = $('<button>').text('Delete').on('click', (event) => {
                $(event.target).parent().parent().remove()
            });
            delBtnTd.append(delBtn);

            newTr.append(nameTd);
            newTr.append(categoryTd);
            newTr.append(priceTd);
            newTr.append(delBtnTd);

            $(`#${this.id}`).find('.payments').append(newTr);

            inpName.val('');
            inpCategory.val('');
            inpPrice.val('');
        });

        let addTd = $('<td>');
        addTd.append(addBtn);
        footTr.append(addTd);
        tfoot.append(footTr);
        table.append(tfoot);

        $(`#${id}`).append(table);
    }
}