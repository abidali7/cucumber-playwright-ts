export default class inventoryPage {
    readonly productSortDropdown: string
    readonly productSortActive: string
    readonly inventoryPriceList: string
    readonly inventoryAddToCart: string
    readonly inventoryItemImg: string
    readonly shoppingCartLink: string
    readonly checkout: string

    constructor() {
        this.productSortDropdown = "//*[@class='product_sort_container']";
        this.productSortActive = "//*[@class='active_option']";
        this.inventoryPriceList = "//*[@class='inventory_item_price']";
        this.inventoryAddToCart= "//*[@class='btn btn_primary btn_small btn_inventory']";
        this.inventoryItemImg = "//*[@class='inventory_item_img']/a/img";
        this.shoppingCartLink = "//*[@class='shopping_cart_link']";
        this.checkout = "//*[@id='checkout']";
        
    }

}