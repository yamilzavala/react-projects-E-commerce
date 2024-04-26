export const formatPrice = (value) => {
    return new Intl.NumberFormat("en-US", 
    {
        style: "currency", 
        currency: "USD"
    }).format(value/100)
}

export const getUniqueValues = () => {}

export const orderBy = (filterValue, list) => {
    if(filterValue === 'name(A-Z)') return list.sort((a,b) => a.name.localeCompare(b.name));
    if(filterValue === 'name(Z-A)') return list.sort((a,b) => b.name.localeCompare(a.name));
    if(filterValue === 'price(Lowest)') return list.sort((a,b) => a.price - b.price);
    if(filterValue === 'price(Highest)') return list.sort((a,b) => b.price - a.price);
}

export const filterBy = (newFilters, tempProducts) => {
    const {category, company, color, price, freeShipping} = newFilters;
    return tempProducts.filter(item => (
        item.category === category && 
        item.company === company && 
        item.color === color &&
        item.price === price &&
        item.freeShipping === freeShipping
    ))
}

export const listSortByOptions = [
    'name(A-Z)', 
    'name(Z-A)', 
    'price(Lowest)', 
    'price(Highest)'
]
