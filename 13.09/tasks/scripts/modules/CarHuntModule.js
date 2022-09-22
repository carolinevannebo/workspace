import {inputBrand, inputMinPrice, inputMaxPrice} from "../1.js";

const CarHuntModule = ( () => {

    const carArray = [
        {
            brand: "Tesla",
            model: "Cyber-Truck",
            year: 2022,
            kilometers: 300,
            horsepowers: 200,
            image: "tesla.jpeg",
            price: 300000
        },
        {
            brand: "Mercedes",
            model: "SLS",
            year: 2022,
            kilometers: 100,
            horsepowers: 200,
            image: "bmw.jpeg",
            price: 300000
        },
        {
            brand: "Rolls Royce",
            model: "Phantom",
            year: 2021,
            kilometers: 500,
            horsepowers: 200,
            image: "rollsroyce.jpeg",
            price: 400000
        }
    ];

    const getAllCars = () => [...carArray];

    const getCarsByBrand = () => {
        let carsByBrand = carArray.filter(
            car => car.brand.toLowerCase() === inputBrand.value.toLowerCase()
        );
        return carsByBrand;
    }

    const getCarsByPrice = () => {
        let carsByPrice = carArray.filter(
            car => ( car.price >= inputMinPrice.value && car.price <= inputMaxPrice.value )
        );
        return carsByPrice;
    }

    const getSortedByKm = () => {
        let carsSortedByKm = carArray.sort(
            (car1, car2) => car1.kilometers > car2.kilometers ? 1 : -1
        );
        return carsSortedByKm;
    }

    const getSortedByPrice = () => {
        let carsSortedByPrice = carArray.sort(
            (car1, car2) => car1.price > car2.price ? 1 : -1
        );
        return carsSortedByPrice;
    }

    return { 
        getAllCars,
        getCarsByBrand,
        getCarsByPrice,
        getSortedByKm,
        getSortedByPrice
    }
} )();

export default CarHuntModule;