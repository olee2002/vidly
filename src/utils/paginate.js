import _ from 'lodash';

export function paginate(items, pageNumber, perPage) {
    const startIndex = (pageNumber - 1) * perPage;
    // console.log(startIndex);
    // const paginationArr = [];
    // for (let i = 0; i < items.length; i++) {
    //     //first page
    //     if (pageNumber === 1 && i < perPage) paginationArr.push(items[i]);
    //     //second page
    //     if (pageNumber > 1) { pationationArr.push(items[])}
    // }

    // return paginationArr
    return _(items)
        .slice(startIndex)
        .take(perPage)
        .value();
}