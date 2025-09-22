## Migros Hemen API

### Search Product

```bash
curl --location 'https://www.migros.com.tr/rest/hemen/search/screens/products?q=yumurta&reid=1757927246937000004' \
--header 'sec-ch-ua-platform: "macOS"' \
--header 'Referer: https://www.migros.com.tr/hemen/arama?q=yumurta' \
--header 'Accept-Language: tr' \
--header 'X-FORWARDED-REST: true' \
--header 'sec-ch-ua: "Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'X-Device-PWA: true' \
--header 'X-PWA: true' \
--header 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' \
--header 'Accept: application/json, text/plain, _/_' \
--header 'Cookie: \_\_cf_bm=qf7GaZv3_9ZL76ri5l4JwZOM6PRokwdPMY17nngNlVI-1758055018-1.0.1.1-vZG.xiu0Pq3aiB.8jYxAlNYhIyOJWzYFRdo680l91wZaMUvSOFh_7ANVvHfKHBSBf74as4BuY8v.lDhGztXagTt3nrzpXE6hfYfuN8nOIb0; \_cfuvid=YvlluSMAIOgSopLkIxQLhUGd93n4IRJYx9_q74kGqyk-1758055018380-0.0.1.1-604800000; CLIENT_SESSION_ID=f948d585-56ed-4313-baab-315142ac4c2f; VSTR_ID=101050f3-bc46-4d99-b261-e12f8f9a872c'
```

### Search Product Response

```json
{
    "successful": true,
    "data": {
        "searchInfo": {
            "pageCount": 1,
            "hitCount": 18,
            "storeProductInfos": [
                {
                    "id": 40000020000040,
                    "storeId": 40000000002202,
                    "sku": "20000040",
                    "name": "Keskinoglu 15'li L Büyük Boy  Yumurta (63-72 G)",
                    "brand": {
                        "name": "Keskinoğlu",
                        "id": 788,
                        "prettyName": "keskinoglu-b-314"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-46x46.jpg"
                            },
                            "productId": 40000020000040
                        }
                    ],
                    "prettyName": "keskinoglu-15li-l-buyuk-boy-yumurta-63-72-g-p-1312d28",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 10950,
                    "shownPrice": 10950,
                    "unitPrice": "(7,30 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020000310,
                    "storeId": 40000000002202,
                    "sku": "20000310",
                    "name": "Raya Organik 8'li M Boy Yumurta (53 - 62 G)",
                    "brand": {
                        "name": "Raya",
                        "id": 131,
                        "prettyName": "raya-b-83"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000310/20000310-c327f8-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000310/20000310-c327f8.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000310/20000310-c327f8-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000310/20000310-c327f8-46x46.jpg"
                            },
                            "productId": 40000020000310
                        }
                    ],
                    "prettyName": "raya-organik-8li-m-boy-yumurta-53-62-g-p-1312e36",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 10995,
                    "shownPrice": 10995,
                    "unitPrice": "(13,74 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020000243,
                    "storeId": 40000000002202,
                    "sku": "20000243",
                    "name": "Güres M - Orta Boy Yumurta 30'lu ( 53 - 62 G)",
                    "brand": {
                        "name": "Güres",
                        "id": 379,
                        "prettyName": "gures-b-17b"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000243/20000243-d205c4-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000243/20000243-d205c4.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000243/20000243-d205c4-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000243/20000243-d205c4-46x46.jpg"
                            },
                            "productId": 40000020000243
                        }
                    ],
                    "prettyName": "gures-m-orta-boy-yumurta-30lu-53-62-g-p-1312df3",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 15950,
                    "shownPrice": 15950,
                    "unitPrice": "(5,31 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000046054277,
                    "storeId": 40000000002202,
                    "sku": "46054277",
                    "name": "Naturaköy Gezen 15'li Yumurta M Orta Boy (53-62) G",
                    "brand": {
                        "name": "Naturaköy",
                        "id": 1597,
                        "prettyName": "naturakoy-b-63d"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/46054277/46054277-c36b51-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/46054277/46054277-c36b51.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/46054277/46054277-c36b51-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/46054277/46054277-c36b51-46x46.jpg"
                            },
                            "productId": 40000046054277
                        }
                    ],
                    "prettyName": "naturakoy-gezen-15li-yumurta-m-orta-boy-53-62-g-p-2bebb85",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 15495,
                    "shownPrice": 15495,
                    "unitPrice": "(10,33 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020000301,
                    "storeId": 40000000002202,
                    "sku": "20000301",
                    "name": "Green Ranch M Boy Yumurta 10'lu (53 - 62 G)",
                    "brand": {
                        "name": "Green Ranch",
                        "id": 274,
                        "prettyName": "green-ranch-b-112"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000301/20000301-93d535-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000301/20000301-93d535.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000301/20000301-93d535-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000301/20000301-93d535-46x46.jpg"
                            },
                            "productId": 40000020000301
                        }
                    ],
                    "prettyName": "green-ranch-m-boy-yumurta-10lu-53-62-g-p-1312e2d",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 8795,
                    "shownPrice": 8795,
                    "unitPrice": "(8,79 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000046054278,
                    "storeId": 40000000002202,
                    "sku": "46054278",
                    "name": "Naturaköy Gezen 6'lı Yumurta M Orta Boy (53-62 G)",
                    "brand": {
                        "name": "Naturaköy",
                        "id": 1597,
                        "prettyName": "naturakoy-b-63d"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/46054278/46054278-d99465-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/46054278/46054278-d99465.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/46054278/46054278-d99465-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/46054278/46054278-d99465-46x46.jpg"
                            },
                            "productId": 40000046054278
                        }
                    ],
                    "prettyName": "naturakoy-gezen-6li-yumurta-m-orta-boy-53-62-g-p-2bebb86",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 6995,
                    "shownPrice": 6995,
                    "unitPrice": "(11,65 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020000287,
                    "storeId": 40000000002202,
                    "sku": "20000287",
                    "name": "Doğalım M - Orta Boy Yumurta 15'li (53 - 62 G)",
                    "brand": {
                        "name": "Doğalım",
                        "id": 828,
                        "prettyName": "dogalim-b-33c"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000287/dogalim-m-orta-boy-yumurta-15-li-53-62-gr-fe0e1a-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000287/dogalim-m-orta-boy-yumurta-15-li-53-62-gr-fe0e1a.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000287/dogalim-m-orta-boy-yumurta-15-li-53-62-gr-fe0e1a-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000287/dogalim-m-orta-boy-yumurta-15-li-53-62-gr-fe0e1a-46x46.jpg"
                            },
                            "productId": 40000020000287
                        }
                    ],
                    "prettyName": "dogalim-m-orta-boy-yumurta-15li-53-62-g-p-1312e1f",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 12495,
                    "shownPrice": 12495,
                    "unitPrice": "(8,33 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020002034,
                    "storeId": 40000000002202,
                    "sku": "20002034",
                    "name": "Coşkun 20'li L Boy Yumurta (63-72 G)",
                    "brand": {
                        "name": "Coşkun",
                        "id": 2511,
                        "prettyName": "coskun-b-9cf"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20002034/20002034-e912fe-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20002034/20002034-e912fe.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20002034/20002034-e912fe-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20002034/20002034-e912fe-46x46.jpg"
                            },
                            "productId": 40000020002034
                        }
                    ],
                    "prettyName": "coskun-20li-l-boy-yumurta-63-72-g-p-13134f2",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 19995,
                    "shownPrice": 19995,
                    "unitPrice": "(9,99 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020002001,
                    "storeId": 40000000002202,
                    "sku": "20002001",
                    "name": "Raya Gezen Tavuk Yumurtası 10'lu M Boy",
                    "brand": {
                        "name": "Raya",
                        "id": 131,
                        "prettyName": "raya-b-83"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20002001/20002001-8c38be-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20002001/20002001-8c38be.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20002001/20002001-8c38be-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20002001/20002001-8c38be-46x46.jpg"
                            },
                            "productId": 40000020002001
                        }
                    ],
                    "prettyName": "raya-gezen-tavuk-yumurtasi-10lu-m-boy-p-13134d1",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 10495,
                    "shownPrice": 10495,
                    "unitPrice": "(10,49 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020000041,
                    "storeId": 40000000002202,
                    "sku": "20000041",
                    "name": "Coskun Organik M Boy Yumurta 15'li (53-63 G)",
                    "brand": {
                        "name": "Coşkun",
                        "id": 2511,
                        "prettyName": "coskun-b-9cf"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000041/20000041-ab941b-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000041/20000041-ab941b.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000041/20000041-ab941b-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000041/20000041-ab941b-46x46.jpg"
                            },
                            "productId": 40000020000041
                        }
                    ],
                    "prettyName": "coskun-organik-m-boy-yumurta-15li-53-63-g-p-1312d29",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 19995,
                    "shownPrice": 19995,
                    "unitPrice": "(13,33 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020000080,
                    "storeId": 40000000002202,
                    "sku": "20000080",
                    "name": "Keskinoğlu L - Büyük Boy Yumurta 10'lu ( 63 - 72 G )",
                    "brand": {
                        "name": "Keskinoğlu",
                        "id": 788,
                        "prettyName": "keskinoglu-b-314"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000080/20000080_1-13da0f-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000080/20000080_1-13da0f.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000080/20000080_1-13da0f-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000080/20000080_1-13da0f-46x46.jpg"
                            },
                            "productId": 40000020000080
                        }
                    ],
                    "prettyName": "keskinoglu-l-buyuk-boy-yumurta-10lu-63-72-g-p-1312d50",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 10495,
                    "shownPrice": 10495,
                    "unitPrice": "(10,49 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000020000024,
                    "storeId": 40000000002202,
                    "sku": "20000024",
                    "name": "Keskinoğlu 20'li Beyaz L Yumurta 63-73 G",
                    "brand": {
                        "name": "Keskinoğlu",
                        "id": 788,
                        "prettyName": "keskinoglu-b-314"
                    },
                    "category": {
                        "name": "Yumurta",
                        "id": 40000000070287,
                        "stockLegalAmount": 50,
                        "prettyName": "yumurta-c-1128f"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Süt & Kahvaltılık",
                            "id": 40000000070285,
                            "stockLegalAmount": 50,
                            "prettyName": "sut-kahvaltilik-c-1128d"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000024/20000024_1-5b5d99-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000024/20000024_1-5b5d99.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000024/20000024_1-5b5d99-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000024/20000024_1-5b5d99-46x46.jpg"
                            },
                            "productId": 40000020000024
                        }
                    ],
                    "prettyName": "keskinoglu-20li-beyaz-l-yumurta-63-73-g-p-1312d18",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 4,
                    "unitAmount": 1,
                    "regularPrice": 21495,
                    "shownPrice": 21495,
                    "unitPrice": "(10,74 TL/Adet)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000007040124,
                    "storeId": 40000000002202,
                    "sku": "07040124",
                    "name": "Jimmy Toys Oyuncaklı Yumurta Mavi 25 G",
                    "brand": {
                        "name": "Jimmy",
                        "id": 6508,
                        "prettyName": "jimmy-b-196c"
                    },
                    "category": {
                        "name": "Çocuklara Özel",
                        "id": 40000000072385,
                        "stockLegalAmount": 50,
                        "prettyName": "cocuklara-ozel-c-11ac1"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Atıştırmalık",
                            "id": 40000000070235,
                            "prettyName": "atistirmalik-c-1125b"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07040124/07040124-122b03-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07040124/07040124-122b03.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07040124/07040124-122b03-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07040124/07040124-122b03-46x46.jpg"
                            },
                            "productId": 40000007040124
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07040124/07040124_yan-7dd108-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07040124/07040124_yan-7dd108.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07040124/07040124_yan-7dd108-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07040124/07040124_yan-7dd108-46x46.jpg"
                            },
                            "productId": 40000007040124
                        }
                    ],
                    "prettyName": "jimmy-toys-oyuncakli-yumurta-mavi-25-g-p-6b6c7c",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 20,
                    "unitAmount": 1,
                    "regularPrice": 1595,
                    "shownPrice": 1595,
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000007040123,
                    "storeId": 40000000002202,
                    "sku": "07040123",
                    "name": "Jimmy Toys Oyuncaklı Yumurta Pembe 25 G",
                    "brand": {
                        "name": "Jimmy",
                        "id": 6508,
                        "prettyName": "jimmy-b-196c"
                    },
                    "category": {
                        "name": "Çocuklara Özel",
                        "id": 40000000072385,
                        "stockLegalAmount": 50,
                        "prettyName": "cocuklara-ozel-c-11ac1"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Atıştırmalık",
                            "id": 40000000070235,
                            "prettyName": "atistirmalik-c-1125b"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07040123/07040123-96360c-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07040123/07040123-96360c.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07040123/07040123-96360c-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07040123/07040123-96360c-46x46.jpg"
                            },
                            "productId": 40000007040123
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07040123/07040123_yan-2e7049-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07040123/07040123_yan-2e7049.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07040123/07040123_yan-2e7049-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07040123/07040123_yan-2e7049-46x46.jpg"
                            },
                            "productId": 40000007040123
                        }
                    ],
                    "prettyName": "jimmy-toys-oyuncakli-yumurta-pembe-25-g-p-6b6c7b",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 20,
                    "unitAmount": 1,
                    "regularPrice": 1595,
                    "shownPrice": 1595,
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000007030240,
                    "storeId": 40000000002202,
                    "sku": "07030240",
                    "name": "Ozmo Egg 20 G",
                    "brand": {
                        "name": "Ozmo",
                        "id": 548,
                        "prettyName": "ozmo-b-224"
                    },
                    "category": {
                        "name": "Çocuklara Özel",
                        "id": 40000000072385,
                        "stockLegalAmount": 50,
                        "prettyName": "cocuklara-ozel-c-11ac1"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Atıştırmalık",
                            "id": 40000000070235,
                            "prettyName": "atistirmalik-c-1125b"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07030240/07030240-14409f-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07030240/07030240-14409f.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07030240/07030240-14409f-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07030240/07030240-14409f-46x46.jpg"
                            },
                            "productId": 40000007030240
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07030240/07030240_yan-ef5eb0-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07030240/07030240_yan-ef5eb0.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07030240/07030240_yan-ef5eb0-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07030240/07030240_yan-ef5eb0-46x46.jpg"
                            },
                            "productId": 40000007030240
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07030240/07030240_arka-3c07ab-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07030240/07030240_arka-3c07ab.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07030240/07030240_arka-3c07ab-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07030240/07030240_arka-3c07ab-46x46.jpg"
                            },
                            "productId": 40000007030240
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07030240/07030240_etiket-adf306-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07030240/07030240_etiket-adf306.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07030240/07030240_etiket-adf306-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07030240/07030240_etiket-adf306-46x46.jpg"
                            },
                            "productId": 40000007030240
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07030240/07030240_urundetay-5f5337-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07030240/07030240_urundetay-5f5337.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07030240/07030240_urundetay-5f5337-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07030240/07030240_urundetay-5f5337-46x46.jpg"
                            },
                            "productId": 40000007030240
                        }
                    ],
                    "prettyName": "ozmo-egg-20-g-p-6b45e0",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 20,
                    "unitAmount": 1,
                    "regularPrice": 3795,
                    "shownPrice": 3795,
                    "unitPrice": "(1897,50 TL/Kg)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000007043435,
                    "storeId": 40000000002202,
                    "sku": "07043435",
                    "name": "Kinder Joy Kızlara Özel 20 G",
                    "brand": {
                        "name": "Kinder",
                        "id": 587,
                        "prettyName": "kinder-b-24b"
                    },
                    "category": {
                        "name": "Çocuklara Özel",
                        "id": 40000000072385,
                        "stockLegalAmount": 50,
                        "prettyName": "cocuklara-ozel-c-11ac1"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Atıştırmalık",
                            "id": 40000000070235,
                            "prettyName": "atistirmalik-c-1125b"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043435/07043435-dc3761-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043435/07043435-dc3761.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043435/07043435-dc3761-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043435/07043435-dc3761-46x46.jpg"
                            },
                            "productId": 40000007043435
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043435/07043435_arka-f4b186-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043435/07043435_arka-f4b186.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043435/07043435_arka-f4b186-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043435/07043435_arka-f4b186-46x46.jpg"
                            },
                            "productId": 40000007043435
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043435/07043435_etiket-5d336d-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043435/07043435_etiket-5d336d.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043435/07043435_etiket-5d336d-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043435/07043435_etiket-5d336d-46x46.jpg"
                            },
                            "productId": 40000007043435
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043435/07043435_urundetay-6b763c-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043435/07043435_urundetay-6b763c.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043435/07043435_urundetay-6b763c-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043435/07043435_urundetay-6b763c-46x46.jpg"
                            },
                            "productId": 40000007043435
                        }
                    ],
                    "prettyName": "kinder-joy-kizlara-ozel-20-g-p-6b796b",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 20,
                    "unitAmount": 1,
                    "regularPrice": 3795,
                    "shownPrice": 3795,
                    "unitPrice": "(1897,50 TL/Kg)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000007043436,
                    "storeId": 40000000002202,
                    "sku": "07043436",
                    "name": "Kinder Joy Erkeklere Özel 20 G",
                    "brand": {
                        "name": "Kinder",
                        "id": 587,
                        "prettyName": "kinder-b-24b"
                    },
                    "category": {
                        "name": "Çocuklara Özel",
                        "id": 40000000072385,
                        "stockLegalAmount": 50,
                        "prettyName": "cocuklara-ozel-c-11ac1"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Atıştırmalık",
                            "id": 40000000070235,
                            "prettyName": "atistirmalik-c-1125b"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043436/7043436_1-6cc03f-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043436/7043436_1-6cc03f.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043436/7043436_1-6cc03f-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043436/7043436_1-6cc03f-46x46.jpg"
                            },
                            "productId": 40000007043436
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043436/07043436_arka-f4b186-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043436/07043436_arka-f4b186.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043436/07043436_arka-f4b186-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043436/07043436_arka-f4b186-46x46.jpg"
                            },
                            "productId": 40000007043436
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043436/07043436_etiket-5d336d-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043436/07043436_etiket-5d336d.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043436/07043436_etiket-5d336d-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043436/07043436_etiket-5d336d-46x46.jpg"
                            },
                            "productId": 40000007043436
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043436/07043436_urundetay-6b763c-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043436/07043436_urundetay-6b763c.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043436/07043436_urundetay-6b763c-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043436/07043436_urundetay-6b763c-46x46.jpg"
                            },
                            "productId": 40000007043436
                        }
                    ],
                    "prettyName": "kinder-joy-erkeklere-ozel-20-g-p-6b796c",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 20,
                    "unitAmount": 1,
                    "regularPrice": 3795,
                    "shownPrice": 3795,
                    "unitPrice": "(1897,50 TL/Kg)",
                    "discountRate": 0,
                    "badges": [],
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                },
                {
                    "id": 40000007043438,
                    "storeId": 40000000002202,
                    "sku": "07043438",
                    "name": "Kinder Joy Erkeklere Özel 3'lü Paket 3 x 20 G",
                    "brand": {
                        "name": "Kinder",
                        "id": 587,
                        "prettyName": "kinder-b-24b"
                    },
                    "category": {
                        "name": "Çocuklara Özel",
                        "id": 40000000072385,
                        "stockLegalAmount": 50,
                        "prettyName": "cocuklara-ozel-c-11ac1"
                    },
                    "categoryAscendants": [
                        {
                            "name": "Atıştırmalık",
                            "id": 40000000070235,
                            "prettyName": "atistirmalik-c-1125b"
                        }
                    ],
                    "crmDiscountTags": [],
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043438/7043438_1-ea3ced-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043438/7043438_1-ea3ced.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043438/7043438_1-ea3ced-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043438/7043438_1-ea3ced-46x46.jpg"
                            },
                            "productId": 40000007043438
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043438/7043438_yan-8a5e92-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043438/7043438_yan-8a5e92.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043438/7043438_yan-8a5e92-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043438/7043438_yan-8a5e92-46x46.jpg"
                            },
                            "productId": 40000007043438
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043438/07043438_arka-f4b186-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043438/07043438_arka-f4b186.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043438/07043438_arka-f4b186-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043438/07043438_arka-f4b186-46x46.jpg"
                            },
                            "productId": 40000007043438
                        },
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07043438/07043438_etiket-5d336d-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07043438/07043438_etiket-5d336d.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07043438/07043438_etiket-5d336d-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/07043438/07043438_etiket-5d336d-46x46.jpg"
                            },
                            "productId": 40000007043438
                        }
                    ],
                    "prettyName": "kinder-joy-erkeklere-ozel-3lu-paket-3-x-20-g-p-6b796e",
                    "status": "IN_SALE",
                    "unit": "PIECE",
                    "initialIncrementAmount": 1,
                    "incrementAmount": 1,
                    "maxAmount": 20,
                    "unitAmount": 1,
                    "regularPrice": 10595,
                    "shownPrice": 8995,
                    "unitPrice": "(1499,16 TL/Kg)",
                    "discountRate": 15,
                    "badges": [
                        {
                            "name": "PRICE_PROMOTED",
                            "value": "105,95 TL",
                            "colorCodes": [
                                "#808284",
                                "#ffe200"
                            ]
                        }
                    ],
                    "loyaltyPromotionId": 499784,
                    "referrerEventId": "1758055018256143781",
                    "sponsored": false,
                    "productNoteAppendable": false,
                    "buyNowApplicable": false
                }
            ],
            "sortCriteria": [
                {
                    "selected": true,
                    "requestParam": "akilli-siralama",
                    "label": "Akıllı Sıralama",
                    "name": "RELEVANCE"
                },
                {
                    "selected": false,
                    "requestParam": "cok-satanlar",
                    "label": "Çok Satanlar",
                    "name": "WEEKLY_BEST_SELLER"
                },
                {
                    "selected": false,
                    "requestParam": "son-eklenenler",
                    "label": "Son Eklenenler",
                    "name": "CREATED_AT_DESC"
                },
                {
                    "selected": false,
                    "requestParam": "satin-aldiklarima-gore",
                    "label": "Satın Aldıklarıma Göre",
                    "name": "LAST_ORDERS"
                },
                {
                    "selected": false,
                    "requestParam": "once-en-dusuk-fiyat",
                    "label": "Önce En Düşük Fiyat",
                    "name": "PRICE_ASC"
                },
                {
                    "selected": false,
                    "requestParam": "once-en-yuksek-fiyat",
                    "label": "Önce En Yüksek Fiyat",
                    "name": "PRICE_DESC"
                }
            ],
            "aggregationGroups": [
                {
                    "type": "CATEGORY",
                    "label": "Kategoriler",
                    "requestParamKey": "kategoriler",
                    "aggregationInfos": [
                        {
                            "topHits": [],
                            "label": "Atıştırmalık",
                            "requestParameter": "70235",
                            "checked": false,
                            "prettyName": "atistirmalik-c-1125b",
                            "id": "70235",
                            "count": 6
                        },
                        {
                            "topHits": [],
                            "label": "Süt & Kahvaltılık",
                            "requestParameter": "70285",
                            "checked": false,
                            "prettyName": "sut-kahvaltilik-c-1128d",
                            "id": "70285",
                            "count": 12
                        },
                        {
                            "topHits": [],
                            "label": "Özel Beslenme",
                            "requestParameter": "70276",
                            "checked": false,
                            "prettyName": "ozel-beslenme-c-11284",
                            "id": "70276",
                            "count": 1
                        }
                    ]
                },
                {
                    "type": "DISCOUNT",
                    "label": "İndirimler",
                    "requestParamKey": "indirim",
                    "aggregationInfos": [
                        {
                            "topHits": [],
                            "label": "Money İndirimli Market Ürünleri",
                            "requestParameter": "MCC",
                            "checked": false,
                            "id": "MCC",
                            "count": 1
                        }
                    ]
                },
                {
                    "type": "BRAND",
                    "label": "Markalar",
                    "requestParamKey": "markalar",
                    "aggregationInfos": [
                        {
                            "topHits": [],
                            "label": "Keskinoğlu",
                            "requestParameter": "788",
                            "checked": false,
                            "prettyName": "keskinoglu-b-314",
                            "id": "788",
                            "count": 3
                        },
                        {
                            "topHits": [],
                            "label": "Kinder",
                            "requestParameter": "587",
                            "checked": false,
                            "prettyName": "kinder-b-24b",
                            "id": "587",
                            "count": 3
                        },
                        {
                            "topHits": [],
                            "label": "Jimmy",
                            "requestParameter": "6508",
                            "checked": false,
                            "prettyName": "jimmy-b-196c",
                            "id": "6508",
                            "count": 2
                        },
                        {
                            "topHits": [],
                            "label": "Coşkun",
                            "requestParameter": "2511",
                            "checked": false,
                            "prettyName": "coskun-b-9cf",
                            "id": "2511",
                            "count": 2
                        },
                        {
                            "topHits": [],
                            "label": "Raya",
                            "requestParameter": "131",
                            "checked": false,
                            "prettyName": "raya-b-83",
                            "id": "131",
                            "count": 2
                        },
                        {
                            "topHits": [],
                            "label": "Naturaköy",
                            "requestParameter": "1597",
                            "checked": false,
                            "prettyName": "naturakoy-b-63d",
                            "id": "1597",
                            "count": 2
                        },
                        {
                            "topHits": [],
                            "label": "Doğalım",
                            "requestParameter": "828",
                            "checked": false,
                            "prettyName": "dogalim-b-33c",
                            "id": "828",
                            "count": 1
                        },
                        {
                            "topHits": [],
                            "label": "Green Ranch",
                            "requestParameter": "274",
                            "checked": false,
                            "prettyName": "green-ranch-b-112",
                            "id": "274",
                            "count": 1
                        },
                        {
                            "topHits": [],
                            "label": "Ozmo",
                            "requestParameter": "548",
                            "checked": false,
                            "prettyName": "ozmo-b-224",
                            "id": "548",
                            "count": 1
                        },
                        {
                            "topHits": [],
                            "label": "Güres",
                            "requestParameter": "379",
                            "checked": false,
                            "prettyName": "gures-b-17b",
                            "id": "379",
                            "count": 1
                        }
                    ]
                },
                {
                    "type": "PROPERTY",
                    "label": "Yaşam & Beslenme Tarzı",
                    "requestParamKey": "yasam-beslenme-tarzi",
                    "aggregationInfos": [
                        {
                            "topHits": [],
                            "label": "Organik",
                            "requestParameter": "279",
                            "checked": false,
                            "id": "40000000000279",
                            "count": 2
                        },
                        {
                            "topHits": [],
                            "label": "Superfood",
                            "requestParameter": "287",
                            "checked": false,
                            "id": "40000000000287",
                            "count": 6
                        }
                    ]
                }
            ]
        },
        "companyBasedProductRecommendationInfo": {
            "pageMetaData": {
                "breadcrumbs": []
            },
            "storeProductInfos": [],
            "sponsored": false
        },
        "postSearchRecommendationInfos": [],
        "bannersMap": {},
        "searchQuery": "?query=yumurta",
        "metaInfo": {
            "title": "Arama",
            "breadcrumbs": [
                {
                    "label": "Arama"
                }
            ],
            "seoTitle": "Arama"
        },
        "eventInfo": {
            "eventId": 1758055018317029645,
            "screenName": "Search"
        },
        "productRecommendationInfo": {
            "storeProductInfos": [],
            "pageMetaData": {
                "breadcrumbs": []
            }
        }
    }
}
```


### Add to basket via cookies

```bash
curl --location --request PUT 'https://www.migros.com.tr/rest/hemen/carts/items?reid=1757927540893344116' \
--header 'accept: application/json' \
--header 'accept-language: tr' \
--header 'content-type: application/json' \
--header 'origin: https://www.migros.com.tr' \
--header 'priority: u=1, i' \
--header 'referer: https://www.migros.com.tr/hemen/arama?q=yumurta' \
--header 'sec-ch-ua: "Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "macOS"' \
--header 'sec-fetch-dest: empty' \
--header 'sec-fetch-mode: cors' \
--header 'sec-fetch-site: same-origin' \
--header 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' \
--header 'x-device-pwa: true' \
--header 'x-forwarded-rest: true' \
--header 'x-pwa: true' \
--header 'Cookie: __cf_bm=3M2Oyt3rCcHuJeC4BGZEsvxNpemmSiZiI8GpCyThzCU-1757927188-1.0.1.1-Lqd6Bk7kDTaiCbvRB.09hIE2xgPN5VHiK2kGupXdI3Oo8eMTCY.0JUkbuzpDgu9K3EtSbK.ytb7UJPpb9JUNuMmI01jvdHrY_HX0JRcn4vc; _cfuvid=qgLeVlnJkJqYX5w7aOGkeOEflkCV29Oq1QPbW7eMt1k-1757927188793-0.0.1.1-604800000; _fbp=fb.2.1757927189073.1443005955; _fbp=fb.3.1757927189073.1443005955; _vwo_uuid_v2=D366E0866D9A690569BD140812BC48E36|256b577e29847a892411f059bde96ad1; VSTR_ID=ac8006bf-0128-496a-82f5-6382471c4bd9; CLIENT_SESSION_ID=b3a942b4-5a74-4063-8a2a-7e83bab83bb3; _gcl_gs=2.1.k1$i1757927188$u127610129; _gcl_au=1.1.407152968.1757927189; pfx_lastclick=adwords; LinkadooVisitor=false; rnid=9ac9545d-f858-4f84-ab7b-3bce4e0f4c76; lastSource=google / cpc; _tt_enable_cookie=1; _ttp=01K56A0B534TCEVJ1QEHG0XCQP_.tt.2; _gcl_aw=GCL.1757927190.Cj0KCQjw8p7GBhCjARIsAEhghZ0udTx7NiIACYsMAlH93xWezO27sSq-Zm4exP8Gwt3gF-owk1rjEtAaAqBDEALw_wcB; _ga=GA1.1.866763218.1757927190; _ga_KTN3ZLW2R5=GS2.1.s1757927189$o1$g0$t1757927197$j52$l0$h0; ttcsid_D2I1SOJC77U9U4KDPTS0=1757927189668::yConCFcQGhduevuUbz3p.1.1757927197052; ttcsid=1757927189668::jJ1UTeS9efdh3dGEB5-c.1.1757927197052; remember-me=bWo2U2Q5eWdZMnZ2MUVhRUwxTmZtZyUzRCUzRDpUYU11V1RqbHNDR245a2Q1R2t4N2V3JTNEJTNE; SESSION=ZTg0OTU3MWYtMzA3Mi00MzgzLWJkOWEtYjU1NTkwYjVkMzFk; _dd_s=logs=1&id=09a95fe7-84f2-4dd3-98ab-7e302eaa972a&created=1757927189056&expire=1757928512647&rum=0; __cf_bm=OgrkV2tzrmIIWpVoFQtnietWad8TwX2gJQQEZSjgtgI-1758055117-1.0.1.1-W0hEYrUabkA4.60.9dDqsOWmHcucXr54VQSS3wqA4.cC4kYVDQkeNd8FkIrg3YrTA_BjqMeUsxEQJP0iI.sOYZhOBU_DvjEnHIakyYx9Spo; _cfuvid=YvlluSMAIOgSopLkIxQLhUGd93n4IRJYx9_q74kGqyk-1758055018380-0.0.1.1-604800000; CLIENT_SESSION_ID=b3a942b4-5a74-4063-8a2a-7e83bab83bb3; SESSION=OGM4MzUwOWMtMzFjOC00OTVlLTkzZmItMzg5NmE4NjQzNDI2; VSTR_ID=101050f3-bc46-4d99-b261-e12f8f9a872c' \
--data '{
    "items": [
        {
            "productId": 40000020000040,
            "storeId": 40000000006371,
            "unit": "PIECE",
            "amount": 4
        }
    ],
    "applyCrmDiscounts": false,
    "applySpecialDiscounts": false,
    "applyDeepDiscounts": false,
    "includeDeliveryFee": false,
    "applyFoodProductDiscounts": false
}'
```

### Add to basket via cookies Response

```json
{
    "successful": true,
    "data": {
        "deliveryPrice": 0,
        "lineDeliveryFeeDiscount": 0,
        "lineDeepDiscount": 0,
        "lineCouponDiscount": 0,
        "lineStarDiscount": 0,
        "lineSpecialDiscount": 0,
        "minimumRequiredRevenue": 10000,
        "priceLeftForCheckout": -33800,
        "productPrice": 43800,
        "revenue": 43800,
        "shownDeliveryFee": 0,
        "shownLineDiscount": 0,
        "shownProductDiscount": 0,
        "lineFoodProductDiscountAmount": 0,
        "totalPrice": 43800,
        "totalProductPrice": 43800,
        "totalReduction": 0,
        "line": {
            "anonymous": false,
            "createdAt": 1754053521913,
            "id": 40000493765938,
            "serviceAreaObjectType": "POLYGON",
            "storePortfolio": "MARKET",
            "deliveryModel": "LAST_MILE",
            "storeId": 40000000006371,
            "loyal": true,
            "shoppingType": "MARKET",
            "creationDate": 1754053521913
        },
        "itemInfos": [
            {
                "item": {
                    "amount": 4,
                    "id": 5440429651,
                    "lineId": 40000493765938,
                    "productId": 40000020000040,
                    "storeId": 40000000006371,
                    "unit": "PIECE"
                },
                "product": {
                    "storeProductInfo": {
                        "prettyName": "keskinoglu-15li-l-buyuk-boy-yumurta-63-72-g-p-1312d28",
                        "name": "Keskinoglu 15'li L Büyük Boy  Yumurta (63-72 G)",
                        "length": 248,
                        "id": 40000020000040,
                        "tags": [],
                        "status": "IN_SALE",
                        "companyId": 40,
                        "storeId": 40000000006371,
                        "images": [
                            {
                                "urls": {
                                    "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-105x105.jpg",
                                    "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db.jpg",
                                    "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-1650x1650.jpg",
                                    "CART": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-46x46.jpg"
                                },
                                "productId": 40000020000040
                            },
                            {
                                "urls": {
                                    "LEGAL": "https://images.migrosone.com/hemen/product-legal/20000040/20000040_bicakizi-d8fd6d.jpg"
                                },
                                "productId": 40000020000040
                            }
                        ],
                        "brandId": 788,
                        "categoryId": 40000000070287,
                        "sku": "20000040",
                        "saleable": true,
                        "storeGroupId": 1,
                        "width": 152,
                        "visible": true,
                        "primaryUnit": "PIECE",
                        "externalName": "KESKİNOĞLU 15'Lİ L-BÜYÜK BOY YUMURTA (63-72 G)",
                        "currentStockAmount": 24.000,
                        "tamimInSale": true,
                        "aysEnabled": true,
                        "banned": false,
                        "brand": {
                            "name": "Keskinoğlu",
                            "id": 788,
                            "prettyName": "keskinoglu-b-314"
                        },
                        "externalCategoryName": "NORMAL YUMURTA NO 3",
                        "hasStock": true,
                        "marketingInSale": true,
                        "primaryUnitSaleQuantity": 1,
                        "primaryPrice": 10950,
                        "externalUnit": "PIECE",
                        "externalCategoryId": "331010010010",
                        "height": 69,
                        "category": {
                            "name": "Yumurta",
                            "id": 40000000070287,
                            "stockLegalAmount": 50,
                            "prettyName": "yumurta-c-1128f"
                        },
                        "externalUnitSaleQuantity": 1,
                        "categoryFilterInfos": [],
                        "bundleType": "INDIVIDUAL",
                        "saleVat": 1,
                        "searchBoost": 0,
                        "storageCondition": "NORMAL",
                        "netWeight": 15000,
                        "priceUnit": "AD",
                        "primaryUnitExternalSaleQuantity": 1,
                        "primaryUnitIncrementQuantity": 1,
                        "primaryUnitMaxQuantity": 4,
                        "primaryUnitInitialIncrementQuantity": 1,
                        "primaryDiscountedPrice": 10950,
                        "primaryDiscountedLoyaltyPrice": 10950,
                        "externalDiscountedPrice": 10950,
                        "externalDiscountedLoyaltyPrice": 10950,
                        "criticalStockAmount": 2.000,
                        "externalPrice": 10950,
                        "externalOnlinePrice": 0,
                        "previousExternalPrice": 10475,
                        "hasImage": true,
                        "propertyInfos": [
                            {
                                "id": 40000000000422,
                                "type": "LEGAL",
                                "name": "Kurye İçin Ağırlık",
                                "priority": 3,
                                "customId": "courier_weight",
                                "value": "1070"
                            },
                            {
                                "id": 40000000000059,
                                "type": "MAIN",
                                "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                                "priority": 7,
                                "customId": "productSupplier",
                                "value": "KESKİNOĞLU YUMURTA ÜRETİM SATIŞ PAZARLAMA A.Ş."
                            },
                            {
                                "id": 40000000000294,
                                "type": "MAIN",
                                "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                                "priority": 8,
                                "customId": "productSupplierId",
                                "value": "038578"
                            },
                            {
                                "id": 40000000000378,
                                "type": "MAIN",
                                "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                                "priority": 10,
                                "customId": "productSupplierAddress",
                                "value": "PANAYIR MH.602.SK.MATLI PLAZA NO:14 İÇ KAPI NO:20 OSMANGAZİ BURSA"
                            }
                        ],
                        "categoryAscendants": [
                            {
                                "name": "Süt & Kahvaltılık",
                                "id": 40000000070285,
                                "stockLegalAmount": 50,
                                "prettyName": "sut-kahvaltilik-c-1128d"
                            }
                        ],
                        "lists": [],
                        "additionalCategoryInfos": [],
                        "shownPrimaryPrice": 10950,
                        "effectiveStockAmount": 22.000,
                        "badges": {},
                        "discounts": {},
                        "productOptionInfos": [],
                        "productCreatedAt": 1570171297000,
                        "productLastUpdatedAt": 1757117121527,
                        "discountDescriptions": [],
                        "description": "<p>NO 3 - Kafes Tavuk Yumurtası</p>"
                    },
                    "ascendantCategoriesNames": [
                        "Süt & Kahvaltılık",
                        "Yumurta"
                    ],
                    "brandId": 788,
                    "brandName": "Keskinoğlu",
                    "categoryId": 40000000070287,
                    "categoryName": "Yumurta",
                    "depositPrice": 0,
                    "description": "<p>NO 3 - Kafes Tavuk Yumurtası</p>",
                    "dimensionImageUrlMap": {
                        "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-105x105.jpg",
                        "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db.jpg",
                        "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-1650x1650.jpg",
                        "CART": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-46x46.jpg"
                    },
                    "discountDescriptions": [],
                    "discounts": {},
                    "externalCategoryId": "331010010010",
                    "externalUnit": "PIECE",
                    "externalUnitSaleAmount": 1,
                    "externalUnitSaleQuantity": 1,
                    "images": [
                        {
                            "urls": {
                                "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-105x105.jpg",
                                "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db.jpg",
                                "PRODUCT_HD": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-1650x1650.jpg",
                                "CART": "https://images.migrosone.com/hemen/product/20000040/20000040-d4f5db-46x46.jpg"
                            }
                        }
                    ],
                    "incrementAmount": 1,
                    "initialIncrementAmount": 1,
                    "installmentApplicable": false,
                    "maxAmount": 4,
                    "name": "Keskinoglu 15'li L Büyük Boy  Yumurta (63-72 G)",
                    "prettyName": "keskinoglu-15li-l-buyuk-boy-yumurta-63-72-g-p-1312d28",
                    "primaryPrice": 10950,
                    "primaryUnit": "PIECE",
                    "primaryUnitExternalSaleAmount": 1,
                    "primaryUnitExternalSaleQuantity": 1,
                    "primaryUnitIncrementAmount": 1,
                    "primaryUnitIncrementQuantity": 1,
                    "primaryUnitInitialIncrementAmount": 1,
                    "primaryUnitInitialIncrementQuantity": 1,
                    "primaryUnitMaxAmount": 4,
                    "primaryUnitMaxQuantity": 4,
                    "primaryUnitSaleAmount": 1,
                    "primaryUnitSaleQuantity": 1,
                    "regularPrice": 10950,
                    "rootCategoryId": 40000000070285,
                    "rootCategoryName": "Süt & Kahvaltılık",
                    "shownPrice": 10950,
                    "discountRate": 0,
                    "sku": "20000040",
                    "status": "IN_SALE",
                    "storageCondition": "NORMAL",
                    "storeId": 40000000006371,
                    "unit": "PIECE",
                    "unitAmount": 1,
                    "crmDiscountTags": [],
                    "productMessages": [],
                    "storePortfolio": "MARKET",
                    "primaryUnitEnum": "PIECE",
                    "externalUnitEnum": "PIECE",
                    "statusEnum": "IN_SALE",
                    "badges": []
                },
                "options": [],
                "revenue": 43800,
                "shownAmount": "4",
                "singleShownPrice": 10950,
                "totalDiscount": 0,
                "totalPrice": 43800,
                "totalRegularPrice": 43800,
                "itemNoteAppendable": true,
                "referrerEventId": "1758055117004147362"
            }
        ],
        "unavailableItems": [],
        "shortfallItems": [],
        "starDiscountInfo": {
            "status": "UNAVAILABLE"
        },
        "foodProductDiscountInfo": {
            "foodProductDiscountProductInfoList": []
        }
    }
}
```