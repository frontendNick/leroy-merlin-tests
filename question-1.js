const responses = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "131313",
                "86": "11000",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
};

//  1. Get item name
const getItemName = ({displayedName}) => displayedName['displayedName']['value'][0];

//  2. Получить массив номеров магазинов, где есть товар в наличии
const getNotEmptyShops = ({stock}) => {

    let shopList = []
    let key = Object.keys(stock.stocks)

    Object.entries(stock.stocks[key]).forEach( ( [ shop, count ] ) => {
        if ( count !== '0'){
            shopList.push(shop)
        } else if ( count === '0' ){
            return;
        }
    });

    return shopList
}

//  3. Получить номер магазина и количество товаров в нем
const getShopWithMaxItems = ({stock}) => {
    let key = Object.keys(stock.stocks)
    let workArray = Object.entries(stock.stocks[key])

    let counter = 0

    let x = workArray.reduce((max, [shop, count]) => {
        if( Number(count) > counter) {
            max = {
                shop,
                count
            }

            counter = Number(count)
        }

        return max
    }, {})

    return x

}
