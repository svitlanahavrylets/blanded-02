
const parseCategory = (category) => {
    if (typeof category !== `string`) return;
    const isCategory = ['books', 'electronics', 'clothing', 'other'].includes(category);
    if (isCategory) return category;
};

const parseNumber = (number) => {
    if (typeof number !== `string`) return;
    const controlNumber = Number(number);
    if (Number.isNaN(controlNumber)) return;
    return controlNumber;
};



export const parseFilterParams = ({ category, minPrice, maxPrice }) => {
    const parsedCategory = parseCategory(category);
    const parsedMinPrice = parseNumber(minPrice);
    const parsedMaxPrice = parseNumber(maxPrice);
    return {
        category: parsedCategory,
        minPrice: parsedMinPrice,
        maxPrice: parsedMaxPrice,
    };
};