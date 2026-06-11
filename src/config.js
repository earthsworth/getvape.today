export const config = {
    // 立即使用的跳转链接
    useNowUrl: "https://relx.lunarclient.top/",

    // 卡网列表 (会自动随机排序)
    shops: [
        { name: "Atri卡网", url: "https://shop.atrishop.autos/product?id=260" },
        { name: "爱发电", url: "https://ifdian.net/item/2ef6a43cf78811f084b752540025c377" },
        { name: "NekoALTs", url: "https://nekoalts.wtf/" },
    ],

    // 建议零售价 (至多6个，超出可能会影响布局美观)
    msrp: [
        { label: "3天卡", price: "￥2.00" },
        { label: "周卡", price: "￥4.50" },
        { label: "月卡", price: "￥15.00" },
    ]
};