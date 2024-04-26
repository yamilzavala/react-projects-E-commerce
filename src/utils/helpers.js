export const formatPrice = (value) => {
    return new Intl.NumberFormat("en-US", 
    {
        style: "currency", 
        currency: "USD"
    }).format(value/100)
}

export const getUniqueValues = () => {}

export const filterBy = (filterValue, list) => {
    if(filterValue === 'name(A-Z)') return list.sort((a,b) => a.name.localeCompare(b.name));
    if(filterValue === 'name(Z-A)') return list.sort((a,b) => b.name.localeCompare(a.name));
    if(filterValue === 'price(Lowest)') return list.sort((a,b) => a.price - b.price);
    if(filterValue === 'price(Highest)') return list.sort((a,b) => b.price - a.price);
}
