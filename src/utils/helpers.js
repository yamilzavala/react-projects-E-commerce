export const formatPrice = (value) => {
    return new Intl.NumberFormat("en-US", 
    {
        style: "currency", 
        currency: "USD"
    }).format(value/100)
}

export const getUniqueValues = () => {}
