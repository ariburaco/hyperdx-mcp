# Migros Hemen Adjust Basket

### Adjust Basket

```bash
curl 'https://www.migros.com.tr/rest/hemen/carts/screens/items/replace?reid=1758058184611179060' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'Referer: https://www.migros.com.tr/hemen/sepetim' \
  -H 'Accept-Language: tr' \
  -H 'X-FORWARDED-REST: true' \
  -H 'sec-ch-ua: "Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'X-Device-PWA: true' \
  -H 'X-PWA: true' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  --data-raw '{"items":[{"productId":40000028130000,"quantity":0,"unit":"GRAM","storeId":40000000006371}]}'
```

### Adjust Basket Response

```json
{
    "successful": true,
    "data": {
        "cartInfo": {
            "deliveryPrice": 4499,
            "lineDeliveryFeeDiscount": 0,
            "lineDeepDiscount": 0,
            "lineCouponDiscount": 0,
            "lineStarDiscount": 0,
            "lineSpecialDiscount": 0,
            "minimumRequiredRevenue": 10000,
            "priceLeftForCheckout": -30123,
            "productPrice": 50123,
            "revenue": 43622,
            "shownDeliveryFee": 3499,
            "shownLineDiscount": 0,
            "shownProductDiscount": 10000,
            "lineFoodProductDiscountAmount": 0,
            "totalPrice": 43622,
            "totalProductPrice": 40123,
            "totalReduction": 10000,
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
                        "amount": 500,
                        "id": 5445699238,
                        "lineId": 40000493765938,
                        "productId": 40000028080000,
                        "storeId": 40000000006371,
                        "unit": "GRAM"
                    },
                    "product": {
                        "storeProductInfo": {
                            "prettyName": "domates-kg-p-1ac7780",
                            "name": "Domates Kg",
                            "length": 50,
                            "id": 40000028080000,
                            "tags": [],
                            "status": "IN_SALE",
                            "companyId": 40,
                            "storeId": 40000000006371,
                            "images": [
                                {
                                    "urls": {
                                        "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-105x105.jpg",
                                        "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d.jpg",
                                        "PRODUCT_HD": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-1650x1650.jpg",
                                        "CART": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-46x46.jpg"
                                    },
                                    "productId": 40000028080000
                                }
                            ],
                            "brandId": 492,
                            "categoryId": 40000000070233,
                            "sku": "28080000",
                            "saleable": true,
                            "storeGroupId": 1,
                            "width": 200,
                            "visible": true,
                            "primaryUnit": "GRAM",
                            "externalName": "DOMATES  KG.",
                            "currentStockAmount": 123.526,
                            "tamimInSale": true,
                            "aysEnabled": true,
                            "banned": false,
                            "brand": {
                                "name": "Reyondan",
                                "id": 492,
                                "prettyName": "reyondan-b-1ec"
                            },
                            "externalCategoryName": "DOMATES",
                            "hasStock": true,
                            "marketingInSale": true,
                            "primaryUnitSaleQuantity": 1000,
                            "primaryPrice": 5495,
                            "externalUnit": "GRAM",
                            "externalCategoryId": "305020012010",
                            "height": 300,
                            "category": {
                                "name": "Sebze",
                                "id": 40000000070233,
                                "prettyName": "sebze-c-11259"
                            },
                            "externalUnitSaleQuantity": 1000,
                            "categoryFilterInfos": [],
                            "bundleType": "INDIVIDUAL",
                            "saleVat": 1,
                            "searchBoost": 0,
                            "storageCondition": "NORMAL",
                            "netWeight": 1000,
                            "additionalCategoryIds": "40000000074064",
                            "priceUnit": "KG",
                            "primaryUnitExternalSaleQuantity": 1,
                            "primaryUnitIncrementQuantity": 500,
                            "primaryUnitMaxQuantity": 10000,
                            "primaryUnitInitialIncrementQuantity": 1000,
                            "primaryDiscountedPrice": 5495,
                            "primaryDiscountedLoyaltyPrice": 5495,
                            "externalDiscountedPrice": 5495,
                            "externalDiscountedLoyaltyPrice": 5495,
                            "criticalStockAmount": 0.500,
                            "externalPrice": 4990,
                            "externalOnlinePrice": 5495,
                            "previousExternalPrice": 4995,
                            "hasImage": true,
                            "propertyInfos": [
                                {
                                    "id": 40000000000422,
                                    "type": "LEGAL",
                                    "name": "Kurye İçin Ağırlık",
                                    "priority": 3,
                                    "customId": "courier_weight",
                                    "value": "720"
                                }
                            ],
                            "categoryAscendants": [
                                {
                                    "name": "Meyve & Sebze",
                                    "id": 40000000070231,
                                    "prettyName": "meyve-sebze-c-11257"
                                }
                            ],
                            "lists": [
                                {
                                    "name": "Meyve- Sebze Kg Ürünler",
                                    "id": 40000196894840,
                                    "prettyName": "meyve-sebze-kg-urunler-l-bbc6078"
                                }
                            ],
                            "additionalCategoryInfos": [
                                {
                                    "id": 40000000074064,
                                    "ascendantIds": [
                                        40000000074063
                                    ]
                                }
                            ],
                            "shownPrimaryPrice": 5495,
                            "effectiveStockAmount": 123.026,
                            "badges": {
                                "DOMESTIC_GOOD": "true"
                            },
                            "discounts": {},
                            "productOptionInfos": [],
                            "productCreatedAt": 1554719424000,
                            "productLastUpdatedAt": 1757527644980,
                            "discountDescriptions": [],
                            "description": "<p>Türk mutfağının olmazsa olmazı olan domates, pişmiş ve çiğ olarak kullanılmak üzere kahvaltıların, salataların, salçaların ve yemeklerin vazgeçilmezi bir sebzedir. A ve C vitaminleri başta olmak üzere içerisinde pek çok vitamin ve mineral bulundurmakta olan domates etli ve sulu bir yapıya sahiptir.</p>"
                        },
                        "ascendantCategoriesNames": [
                            "Meyve & Sebze",
                            "Sebze"
                        ],
                        "brandId": 492,
                        "brandName": "Reyondan",
                        "categoryId": 40000000070233,
                        "categoryName": "Sebze",
                        "depositPrice": 0,
                        "description": "<p>Türk mutfağının olmazsa olmazı olan domates, pişmiş ve çiğ olarak kullanılmak üzere kahvaltıların, salataların, salçaların ve yemeklerin vazgeçilmezi bir sebzedir. A ve C vitaminleri başta olmak üzere içerisinde pek çok vitamin ve mineral bulundurmakta olan domates etli ve sulu bir yapıya sahiptir.</p>",
                        "dimensionImageUrlMap": {
                            "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-105x105.jpg",
                            "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d.jpg",
                            "PRODUCT_HD": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-1650x1650.jpg",
                            "CART": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-46x46.jpg"
                        },
                        "discountDescriptions": [],
                        "discounts": {},
                        "externalCategoryId": "305020012010",
                        "externalUnit": "GRAM",
                        "externalUnitSaleAmount": 1000,
                        "externalUnitSaleQuantity": 1000,
                        "images": [
                            {
                                "urls": {
                                    "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-105x105.jpg",
                                    "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d.jpg",
                                    "PRODUCT_HD": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-1650x1650.jpg",
                                    "CART": "https://images.migrosone.com/hemen/product/28080000/domates-kg-c7462d-46x46.jpg"
                                }
                            }
                        ],
                        "incrementAmount": 500,
                        "initialIncrementAmount": 1000,
                        "installmentApplicable": false,
                        "maxAmount": 10000,
                        "name": "Domates Kg",
                        "prettyName": "domates-kg-p-1ac7780",
                        "primaryPrice": 5495,
                        "primaryUnit": "GRAM",
                        "primaryUnitExternalSaleAmount": 1,
                        "primaryUnitExternalSaleQuantity": 1,
                        "primaryUnitIncrementAmount": 500,
                        "primaryUnitIncrementQuantity": 500,
                        "primaryUnitInitialIncrementAmount": 1000,
                        "primaryUnitInitialIncrementQuantity": 1000,
                        "primaryUnitMaxAmount": 10000,
                        "primaryUnitMaxQuantity": 10000,
                        "primaryUnitSaleAmount": 1000,
                        "primaryUnitSaleQuantity": 1000,
                        "regularPrice": 5495,
                        "rootCategoryId": 40000000070231,
                        "rootCategoryName": "Meyve & Sebze",
                        "shownPrice": 5495,
                        "discountRate": 0,
                        "sku": "28080000",
                        "status": "IN_SALE",
                        "storageCondition": "NORMAL",
                        "storeId": 40000000006371,
                        "unit": "GRAM",
                        "unitAmount": 1000,
                        "crmDiscountTags": [],
                        "productMessages": [],
                        "storePortfolio": "MARKET",
                        "primaryUnitEnum": "GRAM",
                        "externalUnitEnum": "GRAM",
                        "statusEnum": "IN_SALE",
                        "badges": []
                    },
                    "options": [],
                    "revenue": 2748,
                    "shownAmount": "0.5",
                    "singleShownPrice": 5495,
                    "totalDiscount": 0,
                    "totalPrice": 2748,
                    "totalRegularPrice": 2748,
                    "itemNoteAppendable": true,
                    "referrerEventId": "1758058299431179188"
                },
                {
                    "item": {
                        "amount": 1,
                        "id": 5445699242,
                        "lineId": 40000493765938,
                        "productId": 40000014901989,
                        "storeId": 40000000006371,
                        "unit": "PIECE"
                    },
                    "product": {
                        "storeProductInfo": {
                            "prettyName": "namet-hindi-fume-200-g-p-e362e5",
                            "name": "Namet Hindi Füme 200 G",
                            "length": 17,
                            "id": 40000014901989,
                            "tags": [],
                            "status": "IN_SALE",
                            "companyId": 40,
                            "storeId": 40000000006371,
                            "images": [
                                {
                                    "urls": {
                                        "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-105x105.png",
                                        "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e.png",
                                        "PRODUCT_HD": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-1650x1650.png",
                                        "CART": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-46x46.png"
                                    },
                                    "productId": 40000014901989
                                }
                            ],
                            "brandId": 790,
                            "categoryId": 40000000072638,
                            "sku": "14901989",
                            "saleable": true,
                            "storeGroupId": 1,
                            "width": 196,
                            "visible": true,
                            "primaryUnit": "PIECE",
                            "externalName": "NAMET HİNDİ FÜME 200 G",
                            "currentStockAmount": 33.000,
                            "tamimInSale": true,
                            "aysEnabled": true,
                            "banned": false,
                            "brand": {
                                "name": "Namet",
                                "id": 790,
                                "prettyName": "namet-b-316"
                            },
                            "externalCategoryName": "HİNDİ",
                            "hasStock": true,
                            "marketingInSale": true,
                            "primaryUnitSaleQuantity": 1,
                            "primaryPrice": 9490,
                            "externalUnit": "PIECE",
                            "externalCategoryId": "330010015015",
                            "height": 207,
                            "category": {
                                "name": "hindi",
                                "id": 40000000072638,
                                "stockLegalAmount": 50,
                                "prettyName": "hindi-c-11bbe"
                            },
                            "externalUnitSaleQuantity": 1,
                            "categoryFilterInfos": [],
                            "bundleType": "INDIVIDUAL",
                            "saleVat": 1,
                            "searchBoost": 0,
                            "storageCondition": "NORMAL",
                            "netWeight": 200,
                            "priceUnit": "KG",
                            "primaryUnitExternalSaleQuantity": 1,
                            "primaryUnitIncrementQuantity": 1,
                            "primaryUnitMaxQuantity": 10,
                            "primaryUnitInitialIncrementQuantity": 1,
                            "primaryDiscountedPrice": 9490,
                            "primaryDiscountedLoyaltyPrice": 9490,
                            "externalDiscountedPrice": 9490,
                            "externalDiscountedLoyaltyPrice": 9490,
                            "criticalStockAmount": 2.000,
                            "externalPrice": 9490,
                            "externalOnlinePrice": 0,
                            "previousExternalPrice": 9995,
                            "hasImage": true,
                            "propertyInfos": [
                                {
                                    "id": 40000000000029,
                                    "type": "NUTRITIONAL",
                                    "name": "Enerji (kcal)",
                                    "priority": 1,
                                    "customId": "energyKcal",
                                    "value": "92.2"
                                },
                                {
                                    "id": 40000000000054,
                                    "type": "MAIN",
                                    "name": "İçindekiler",
                                    "priority": 1,
                                    "value": "Hindi eti ,su ,tuz ,baharat karışımı ,stabilizör (E450 ,E452) ,antioksidan (E316) ,koruyucu (E250) ,ve ambalajlama gazı (azot ,karbon dioksit)"
                                },
                                {
                                    "id": 40000000000055,
                                    "type": "MAIN",
                                    "name": "Alerjen Uyarısı",
                                    "priority": 2,
                                    "value": "Alerjen içermemektedir."
                                },
                                {
                                    "id": 40000000000065,
                                    "type": "NUTRITIONAL",
                                    "name": "Enerji (kJ)",
                                    "priority": 2,
                                    "customId": "energyKj",
                                    "value": "389.6"
                                },
                                {
                                    "id": 40000000000422,
                                    "type": "LEGAL",
                                    "name": "Kurye İçin Ağırlık",
                                    "priority": 3,
                                    "customId": "courier_weight",
                                    "value": "200"
                                },
                                {
                                    "id": 40000000000056,
                                    "type": "MAIN",
                                    "name": "Net Miktar (g/ml)",
                                    "priority": 3,
                                    "customId": "netKg",
                                    "value": "200"
                                },
                                {
                                    "id": 40000000000030,
                                    "type": "NUTRITIONAL",
                                    "name": "Yağ (g)",
                                    "priority": 3,
                                    "customId": "fat",
                                    "value": "1.8"
                                },
                                {
                                    "id": 40000000000031,
                                    "type": "NUTRITIONAL",
                                    "name": "Doymuş yağ (g)",
                                    "priority": 4,
                                    "customId": "saturatedFat",
                                    "value": "0.5"
                                },
                                {
                                    "id": 40000000000058,
                                    "type": "MAIN",
                                    "name": "Saklama Koşulları",
                                    "priority": 4,
                                    "value": "0-4 °C muhafaza ediniz"
                                },
                                {
                                    "id": 40000000000057,
                                    "type": "MAIN",
                                    "name": "Menşei",
                                    "priority": 5,
                                    "customId": "country",
                                    "value": "TÜRKİYE"
                                },
                                {
                                    "id": 40000000000061,
                                    "type": "MAIN",
                                    "name": "İşletme Kayıt No",
                                    "priority": 6,
                                    "customId": "productionPermitCertNo",
                                    "value": "TR-41-0027"
                                },
                                {
                                    "id": 40000000000059,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                                    "priority": 7,
                                    "customId": "productSupplier",
                                    "value": "NAMET GIDA SAN.VE TİC.A.Ş."
                                },
                                {
                                    "id": 40000000000294,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                                    "priority": 8,
                                    "customId": "productSupplierId",
                                    "value": "024840"
                                },
                                {
                                    "id": 40000000000033,
                                    "type": "NUTRITIONAL",
                                    "name": "Karbonhidrat (g)",
                                    "priority": 9,
                                    "customId": "carbohydrate",
                                    "value": "2.0"
                                },
                                {
                                    "id": 40000000000378,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                                    "priority": 10,
                                    "customId": "productSupplierAddress",
                                    "value": "AKSE MAH.FEVZİ ÇAKMAK CADDESİ NO.134 ÇAYIROVA KOCAELİ"
                                },
                                {
                                    "id": 40000000000034,
                                    "type": "NUTRITIONAL",
                                    "name": "Şeker (g)",
                                    "priority": 10,
                                    "customId": "glucose",
                                    "value": "0.0"
                                },
                                {
                                    "id": 40000000000036,
                                    "type": "NUTRITIONAL",
                                    "name": "Protein (g)",
                                    "priority": 14,
                                    "customId": "protein",
                                    "value": "17.0"
                                },
                                {
                                    "id": 40000000000038,
                                    "type": "NUTRITIONAL",
                                    "name": "Tuz (g)",
                                    "priority": 15,
                                    "customId": "salt",
                                    "value": "2.0"
                                }
                            ],
                            "categoryAscendants": [
                                {
                                    "name": "Et Şarküteri",
                                    "id": 40000000070299,
                                    "stockLegalAmount": 50,
                                    "prettyName": "et-sarkuteri-c-1129b"
                                },
                                {
                                    "name": "Süt & Kahvaltılık",
                                    "id": 40000000070285,
                                    "stockLegalAmount": 50,
                                    "prettyName": "sut-kahvaltilik-c-1128d"
                                }
                            ],
                            "lists": [
                                {
                                    "name": "Kahvaltının Vazgeçilmezleri",
                                    "id": 40000196901439,
                                    "prettyName": "kahvaltinin-vazgecilmezleri-l-bbc7a3f"
                                }
                            ],
                            "additionalCategoryInfos": [],
                            "shownPrimaryPrice": 9490,
                            "effectiveStockAmount": 31.000,
                            "badges": {
                                "DOMESTIC_GOOD": "true",
                                "GREAT_PRICE": "true"
                            },
                            "discounts": {},
                            "productOptionInfos": [],
                            "productCreatedAt": 1565096786000,
                            "productLastUpdatedAt": 1757688401428,
                            "discountDescriptions": [],
                            "description": "<p><strong>Namet Hindi Füme,&nbsp;</strong>hindi göğüs etleri derileri ile birlikte bütün halde tuz ve baharatlarla bir gün boyunca masajlanır. Daha sonra füme fırınlarında pişirilir. Ürün soğutulduktan sonra shrink torbalarda vakumlanarak ambalajlanır ve blok olarak satışa sunulur. Bu ürünü kahvaltılarınızda, ara öğünlerinizde, sandviçlerinizde, tostlarınızda, mezelerinizde, rahatlıkla kullanabilirsiniz. Beyaz et sevenler için ideal bir seçimdir.</p><p><br></p><p>Namet, IFS V6, BRC V6, ISO 9001:2008, ISO 22000:2005, PAS 220:2008 ve TSE standartlarına uygun olarak üretimini gerçekleştirmektedir.</p><p><br></p><p>Unutmayın; gıda ürünlerinin doğrudan güneş ışığı altında kalması, özelliklerinin kaybolmasına ve bozulmasına neden olabilir. Bu yüzden tüm ürünler az ışıklı ve temiz bir ortamda muhafaza edilmelidir. Ambalajı açılmamış ürünler raf ömürleri süresince tazeliğini koruyabilirler. Ambalajı açılmış ürünleri ise buzdolabında 3 gün boyunca muhafaza edebilirsiniz. 3 gün içerisinde tüketilmeyecekse hava alması engellenerek dondurularak saklanabilir.</p><p><br></p>"
                        },
                        "ascendantCategoriesNames": [
                            "Süt & Kahvaltılık",
                            "Et Şarküteri",
                            "hindi"
                        ],
                        "brandId": 790,
                        "brandName": "Namet",
                        "categoryId": 40000000072638,
                        "categoryName": "hindi",
                        "depositPrice": 0,
                        "description": "<p><strong>Namet Hindi Füme,&nbsp;</strong>hindi göğüs etleri derileri ile birlikte bütün halde tuz ve baharatlarla bir gün boyunca masajlanır. Daha sonra füme fırınlarında pişirilir. Ürün soğutulduktan sonra shrink torbalarda vakumlanarak ambalajlanır ve blok olarak satışa sunulur. Bu ürünü kahvaltılarınızda, ara öğünlerinizde, sandviçlerinizde, tostlarınızda, mezelerinizde, rahatlıkla kullanabilirsiniz. Beyaz et sevenler için ideal bir seçimdir.</p><p><br></p><p>Namet, IFS V6, BRC V6, ISO 9001:2008, ISO 22000:2005, PAS 220:2008 ve TSE standartlarına uygun olarak üretimini gerçekleştirmektedir.</p><p><br></p><p>Unutmayın; gıda ürünlerinin doğrudan güneş ışığı altında kalması, özelliklerinin kaybolmasına ve bozulmasına neden olabilir. Bu yüzden tüm ürünler az ışıklı ve temiz bir ortamda muhafaza edilmelidir. Ambalajı açılmamış ürünler raf ömürleri süresince tazeliğini koruyabilirler. Ambalajı açılmış ürünleri ise buzdolabında 3 gün boyunca muhafaza edebilirsiniz. 3 gün içerisinde tüketilmeyecekse hava alması engellenerek dondurularak saklanabilir.</p><p><br></p>",
                        "dimensionImageUrlMap": {
                            "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-105x105.png",
                            "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e.png",
                            "PRODUCT_HD": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-1650x1650.png",
                            "CART": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-46x46.png"
                        },
                        "discountDescriptions": [],
                        "discounts": {},
                        "externalCategoryId": "330010015015",
                        "externalUnit": "PIECE",
                        "externalUnitSaleAmount": 1,
                        "externalUnitSaleQuantity": 1,
                        "images": [
                            {
                                "urls": {
                                    "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-105x105.png",
                                    "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e.png",
                                    "PRODUCT_HD": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-1650x1650.png",
                                    "CART": "https://images.migrosone.com/hemen/product/14901989/14901989-73412e-46x46.png"
                                }
                            }
                        ],
                        "incrementAmount": 1,
                        "initialIncrementAmount": 1,
                        "installmentApplicable": false,
                        "maxAmount": 10,
                        "name": "Namet Hindi Füme 200 G",
                        "prettyName": "namet-hindi-fume-200-g-p-e362e5",
                        "primaryPrice": 9490,
                        "primaryUnit": "PIECE",
                        "primaryUnitExternalSaleAmount": 1,
                        "primaryUnitExternalSaleQuantity": 1,
                        "primaryUnitIncrementAmount": 1,
                        "primaryUnitIncrementQuantity": 1,
                        "primaryUnitInitialIncrementAmount": 1,
                        "primaryUnitInitialIncrementQuantity": 1,
                        "primaryUnitMaxAmount": 10,
                        "primaryUnitMaxQuantity": 10,
                        "primaryUnitSaleAmount": 1,
                        "primaryUnitSaleQuantity": 1,
                        "regularPrice": 9490,
                        "rootCategoryId": 40000000070285,
                        "rootCategoryName": "Süt & Kahvaltılık",
                        "shownPrice": 9490,
                        "discountRate": 0,
                        "sku": "14901989",
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
                        "badges": [
                            {
                                "name": "GREAT_PRICE",
                                "value": "İyi Fiyat",
                                "colorCodes": []
                            }
                        ]
                    },
                    "options": [],
                    "revenue": 9490,
                    "shownAmount": "1",
                    "singleShownPrice": 9490,
                    "totalDiscount": 0,
                    "totalPrice": 9490,
                    "totalRegularPrice": 9490,
                    "itemNoteAppendable": true,
                    "referrerEventId": "1758058299431179188"
                },
                {
                    "item": {
                        "amount": 1,
                        "id": 5445699241,
                        "lineId": 40000493765938,
                        "productId": 40000009035809,
                        "storeId": 40000000006371,
                        "unit": "PIECE"
                    },
                    "product": {
                        "storeProductInfo": {
                            "prettyName": "dardanel-light-ton-baligi-3x75-g-p-89e021",
                            "name": "Dardanel Light Ton Balığı 3X75 G",
                            "length": 40,
                            "id": 40000009035809,
                            "tags": [],
                            "status": "IN_SALE",
                            "companyId": 40,
                            "storeId": 40000000006371,
                            "images": [
                                {
                                    "urls": {
                                        "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-105x105.jpg",
                                        "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf.jpg",
                                        "PRODUCT_HD": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-1650x1650.jpg",
                                        "CART": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-46x46.jpg"
                                    },
                                    "productId": 40000009035809
                                },
                                {
                                    "urls": {
                                        "LEGAL": "https://images.migrosone.com/hemen/product-legal/09035809/09035809_bicakizi-6661c8.jpg"
                                    },
                                    "productId": 40000009035809
                                }
                            ],
                            "brandId": 539,
                            "categoryId": 40000000072929,
                            "sku": "09035809",
                            "saleable": true,
                            "storeGroupId": 1,
                            "width": 200,
                            "visible": true,
                            "primaryUnit": "PIECE",
                            "externalName": "DARDANEL LIGHT TON BALIĞI 3X75 G",
                            "currentStockAmount": 15.000,
                            "tamimInSale": true,
                            "aysEnabled": true,
                            "banned": false,
                            "brand": {
                                "name": "Dardanel",
                                "id": 539,
                                "prettyName": "dardanel-b-21b"
                            },
                            "externalCategoryName": "TON BALIĞI",
                            "hasStock": true,
                            "marketingInSale": true,
                            "primaryUnitSaleQuantity": 1,
                            "primaryPrice": 29995,
                            "externalUnit": "PIECE",
                            "externalCategoryId": "125015020010",
                            "height": 70,
                            "category": {
                                "name": "Ton Balığı",
                                "id": 40000000072929,
                                "stockLegalAmount": 50,
                                "prettyName": "ton-baligi-c-11ce1"
                            },
                            "externalUnitSaleQuantity": 1,
                            "categoryFilterInfos": [],
                            "bundleType": "INDIVIDUAL",
                            "saleVat": 1,
                            "searchBoost": 0,
                            "storageCondition": "NORMAL",
                            "netWeight": 225,
                            "priceUnit": "KG",
                            "primaryUnitExternalSaleQuantity": 1,
                            "primaryUnitIncrementQuantity": 1,
                            "primaryUnitMaxQuantity": 10,
                            "primaryUnitInitialIncrementQuantity": 1,
                            "primaryDiscountedPrice": 29995,
                            "primaryDiscountedLoyaltyPrice": 19995,
                            "externalDiscountedPrice": 29995,
                            "externalDiscountedLoyaltyPrice": 19995,
                            "criticalStockAmount": 1.000,
                            "loyaltyPromotionId": 499784,
                            "externalPrice": 29995,
                            "externalOnlinePrice": 0,
                            "previousExternalPrice": 28295,
                            "hasImage": true,
                            "propertyInfos": [
                                {
                                    "id": 40000000000029,
                                    "type": "NUTRITIONAL",
                                    "name": "Enerji (kcal)",
                                    "priority": 1,
                                    "customId": "energyKcal",
                                    "value": "397.0"
                                },
                                {
                                    "id": 40000000000054,
                                    "type": "MAIN",
                                    "name": "İçindekiler",
                                    "priority": 1,
                                    "value": "Ton Balığı Su Tuz"
                                },
                                {
                                    "id": 40000000000055,
                                    "type": "MAIN",
                                    "name": "Alerjen Uyarısı",
                                    "priority": 2,
                                    "value": "Balık alerjenler listesinde yer almaktadır."
                                },
                                {
                                    "id": 40000000000065,
                                    "type": "NUTRITIONAL",
                                    "name": "Enerji (kJ)",
                                    "priority": 2,
                                    "customId": "energyKj",
                                    "value": "95.0"
                                },
                                {
                                    "id": 40000000000422,
                                    "type": "LEGAL",
                                    "name": "Kurye İçin Ağırlık",
                                    "priority": 3,
                                    "customId": "courier_weight",
                                    "value": "300"
                                },
                                {
                                    "id": 40000000000056,
                                    "type": "MAIN",
                                    "name": "Net Miktar (g/ml)",
                                    "priority": 3,
                                    "customId": "netKg",
                                    "value": "225"
                                },
                                {
                                    "id": 40000000000030,
                                    "type": "NUTRITIONAL",
                                    "name": "Yağ (g)",
                                    "priority": 3,
                                    "customId": "fat",
                                    "value": "0.4"
                                },
                                {
                                    "id": 40000000000031,
                                    "type": "NUTRITIONAL",
                                    "name": "Doymuş yağ (g)",
                                    "priority": 4,
                                    "customId": "saturatedFat",
                                    "value": "0.2"
                                },
                                {
                                    "id": 40000000000058,
                                    "type": "MAIN",
                                    "name": "Saklama Koşulları",
                                    "priority": 4,
                                    "value": "Serin ve Kuru Yerde Muhafaza Ediniz"
                                },
                                {
                                    "id": 40000000000057,
                                    "type": "MAIN",
                                    "name": "Menşei",
                                    "priority": 5,
                                    "customId": "country",
                                    "value": "TÜRKİYE"
                                },
                                {
                                    "id": 40000000000061,
                                    "type": "MAIN",
                                    "name": "İşletme Kayıt No",
                                    "priority": 6,
                                    "customId": "productionPermitCertNo",
                                    "value": "TR 17-0047"
                                },
                                {
                                    "id": 40000000000059,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                                    "priority": 7,
                                    "customId": "productSupplier",
                                    "value": "DARDANEL DAĞITIM A.Ş."
                                },
                                {
                                    "id": 40000000000294,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                                    "priority": 8,
                                    "customId": "productSupplierId",
                                    "value": "706938"
                                },
                                {
                                    "id": 40000000000033,
                                    "type": "NUTRITIONAL",
                                    "name": "Karbonhidrat (g)",
                                    "priority": 9,
                                    "customId": "carbohydrate",
                                    "value": "0.0"
                                },
                                {
                                    "id": 40000000000378,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                                    "priority": 10,
                                    "customId": "productSupplierAddress",
                                    "value": "BOĞAZKENT MH. DARDANEL SİT. ATATÜRK CD. NO:51/1 KEPEZ ÇANAKKALE"
                                },
                                {
                                    "id": 40000000000034,
                                    "type": "NUTRITIONAL",
                                    "name": "Şeker (g)",
                                    "priority": 10,
                                    "customId": "glucose",
                                    "value": "0.0"
                                },
                                {
                                    "id": 40000000000060,
                                    "type": "MAIN",
                                    "name": "Kullanım Önerileri",
                                    "priority": 11,
                                    "value": "Pişirilmiştir. Doğrudan tüketilmiştir"
                                },
                                {
                                    "id": 40000000000036,
                                    "type": "NUTRITIONAL",
                                    "name": "Protein (g)",
                                    "priority": 14,
                                    "customId": "protein",
                                    "value": "23.5"
                                },
                                {
                                    "id": 40000000000038,
                                    "type": "NUTRITIONAL",
                                    "name": "Tuz (g)",
                                    "priority": 15,
                                    "customId": "salt",
                                    "value": "1.0"
                                }
                            ],
                            "categoryAscendants": [
                                {
                                    "name": "Konserve",
                                    "id": 40000000070306,
                                    "stockLegalAmount": 50,
                                    "prettyName": "konserve-c-112a2"
                                },
                                {
                                    "name": "Temel Gıda",
                                    "id": 40000000070300,
                                    "stockLegalAmount": 50,
                                    "prettyName": "temel-gida-c-1129c"
                                }
                            ],
                            "lists": [
                                {
                                    "name": "Dardanel Ürünleri",
                                    "id": 40000196901320,
                                    "prettyName": "dardanel-urunleri-l-bbc79c8"
                                }
                            ],
                            "additionalCategoryInfos": [],
                            "shownPrimaryPrice": 29995,
                            "effectiveStockAmount": 14.000,
                            "badges": {
                                "PRICE_PROMOTED": "29995",
                                "DOMESTIC_GOOD": "true"
                            },
                            "discounts": {},
                            "productOptionInfos": [],
                            "productCreatedAt": 1588626561000,
                            "productLastUpdatedAt": 1757575218575,
                            "discountDescriptions": [],
                            "description": "<p><span style=\"color: rgb(0, 0, 0);\">İthal edilen balıklardan Türkiye’de üretilmiştir.</span></p>"
                        },
                        "ascendantCategoriesNames": [
                            "Temel Gıda",
                            "Konserve",
                            "Ton Balığı"
                        ],
                        "brandId": 539,
                        "brandName": "Dardanel",
                        "categoryId": 40000000072929,
                        "categoryName": "Ton Balığı",
                        "depositPrice": 0,
                        "description": "<p><span style=\"color: rgb(0, 0, 0);\">İthal edilen balıklardan Türkiye’de üretilmiştir.</span></p>",
                        "dimensionImageUrlMap": {
                            "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-105x105.jpg",
                            "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf.jpg",
                            "PRODUCT_HD": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-1650x1650.jpg",
                            "CART": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-46x46.jpg"
                        },
                        "discountDescriptions": [],
                        "discounts": {},
                        "externalCategoryId": "125015020010",
                        "externalUnit": "PIECE",
                        "externalUnitSaleAmount": 1,
                        "externalUnitSaleQuantity": 1,
                        "images": [
                            {
                                "urls": {
                                    "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-105x105.jpg",
                                    "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf.jpg",
                                    "PRODUCT_HD": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-1650x1650.jpg",
                                    "CART": "https://images.migrosone.com/hemen/product/09035809/9035809_1-722dbf-46x46.jpg"
                                }
                            }
                        ],
                        "incrementAmount": 1,
                        "initialIncrementAmount": 1,
                        "installmentApplicable": false,
                        "maxAmount": 10,
                        "name": "Dardanel Light Ton Balığı 3X75 G",
                        "prettyName": "dardanel-light-ton-baligi-3x75-g-p-89e021",
                        "primaryPrice": 29995,
                        "primaryUnit": "PIECE",
                        "primaryUnitExternalSaleAmount": 1,
                        "primaryUnitExternalSaleQuantity": 1,
                        "primaryUnitIncrementAmount": 1,
                        "primaryUnitIncrementQuantity": 1,
                        "primaryUnitInitialIncrementAmount": 1,
                        "primaryUnitInitialIncrementQuantity": 1,
                        "primaryUnitMaxAmount": 10,
                        "primaryUnitMaxQuantity": 10,
                        "primaryUnitSaleAmount": 1,
                        "primaryUnitSaleQuantity": 1,
                        "regularPrice": 29995,
                        "rootCategoryId": 40000000070300,
                        "rootCategoryName": "Temel Gıda",
                        "shownPrice": 19995,
                        "discountRate": 33,
                        "sku": "09035809",
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
                        "badges": [
                            {
                                "name": "PRICE_PROMOTED",
                                "value": "299,95 TL",
                                "colorCodes": [
                                    "#808284",
                                    "#ffe200"
                                ]
                            }
                        ]
                    },
                    "options": [],
                    "revenue": 19995,
                    "shownAmount": "1",
                    "singleShownPrice": 19995,
                    "totalDiscount": 0,
                    "totalPrice": 19995,
                    "totalRegularPrice": 29995,
                    "moneyPriceInfo": 10000,
                    "moneyPriceTextInfo": "Money ile 100,00 TL daha avantajlı!",
                    "itemNoteAppendable": true,
                    "referrerEventId": "1758058299431179188"
                },
                {
                    "item": {
                        "amount": 1,
                        "id": 5445699240,
                        "lineId": 40000493765938,
                        "productId": 40000005056305,
                        "storeId": 40000000006371,
                        "unit": "PIECE"
                    },
                    "product": {
                        "storeProductInfo": {
                            "prettyName": "aly-tortilla-lavas-tam-bugdayli-6li-25-cm-390-g-p-4d2731",
                            "name": "Aly Tortilla  Lavaş Tam Buğdaylı 6'lı 25 Cm 390 G",
                            "length": 310,
                            "id": 40000005056305,
                            "tags": [],
                            "status": "IN_SALE",
                            "companyId": 40,
                            "storeId": 40000000006371,
                            "images": [
                                {
                                    "urls": {
                                        "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-105x105.jpg",
                                        "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60.jpg",
                                        "PRODUCT_HD": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-1650x1650.jpg",
                                        "CART": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-46x46.jpg"
                                    },
                                    "productId": 40000005056305
                                }
                            ],
                            "brandId": 70,
                            "categoryId": 40000000073542,
                            "sku": "05056305",
                            "saleable": true,
                            "storeGroupId": 1,
                            "width": 310,
                            "visible": true,
                            "primaryUnit": "PIECE",
                            "externalName": "ALY TORTILLA LAVAŞ TAM BUĞDAYLI 25CM 6LI 390G",
                            "currentStockAmount": 27.000,
                            "tamimInSale": true,
                            "aysEnabled": true,
                            "banned": false,
                            "brand": {
                                "name": "Aly",
                                "id": 70,
                                "prettyName": "aly-b-46"
                            },
                            "externalCategoryName": "GÖZLEME BAZLAMA KATMER",
                            "hasStock": true,
                            "marketingInSale": true,
                            "primaryUnitSaleQuantity": 1,
                            "primaryPrice": 7890,
                            "externalUnit": "PIECE",
                            "externalCategoryId": "505050010040",
                            "height": 10,
                            "category": {
                                "name": "gözleme bazlama katmer",
                                "id": 40000000073542,
                                "stockLegalAmount": 50,
                                "prettyName": "gozleme-bazlama-katmer-c-11f46"
                            },
                            "externalUnitSaleQuantity": 1,
                            "categoryFilterInfos": [],
                            "bundleType": "INDIVIDUAL",
                            "saleVat": 1,
                            "searchBoost": 0,
                            "storageCondition": "NORMAL",
                            "netWeight": 390,
                            "priceUnit": "KG",
                            "primaryUnitExternalSaleQuantity": 1,
                            "primaryUnitIncrementQuantity": 1,
                            "primaryUnitMaxQuantity": 10,
                            "primaryUnitInitialIncrementQuantity": 1,
                            "primaryDiscountedPrice": 7890,
                            "primaryDiscountedLoyaltyPrice": 7890,
                            "externalDiscountedPrice": 7890,
                            "externalDiscountedLoyaltyPrice": 7890,
                            "criticalStockAmount": 2.000,
                            "externalPrice": 7890,
                            "externalOnlinePrice": 0,
                            "previousExternalPrice": 6800,
                            "hasImage": true,
                            "propertyInfos": [
                                {
                                    "id": 40000000000029,
                                    "type": "NUTRITIONAL",
                                    "name": "Enerji (kcal)",
                                    "priority": 1,
                                    "customId": "energyKcal",
                                    "value": "287.0"
                                },
                                {
                                    "id": 40000000000054,
                                    "type": "MAIN",
                                    "name": "İçindekiler",
                                    "priority": 1,
                                    "value": "Tam buğday unu %60, buğday unu %40, su, bitkisel yağ (palm, kanola, pamuk ve ayçiçek), tuz, şeker, stabilizatör (gliserol), emülgatör (bitkisel yağ asitlerinin mono ve digliseridleri), kabartıcılar (sodyum bikarbonat, sodyum asit pirofosfat), asitlik düzenleyiciler (malik asit, sitrik asit), koruyucular (potasyum sorbat, kalsiyum propiyonat)."
                                },
                                {
                                    "id": 40000000000055,
                                    "type": "MAIN",
                                    "name": "Alerjen Uyarısı",
                                    "priority": 2,
                                    "value": "Gluten içerir."
                                },
                                {
                                    "id": 40000000000065,
                                    "type": "NUTRITIONAL",
                                    "name": "Enerji (kJ)",
                                    "priority": 2,
                                    "customId": "energyKj",
                                    "value": "1216.0"
                                },
                                {
                                    "id": 40000000000422,
                                    "type": "LEGAL",
                                    "name": "Kurye İçin Ağırlık",
                                    "priority": 3,
                                    "customId": "courier_weight",
                                    "value": "400"
                                },
                                {
                                    "id": 40000000000056,
                                    "type": "MAIN",
                                    "name": "Net Miktar (g/ml)",
                                    "priority": 3,
                                    "customId": "netKg",
                                    "value": "390"
                                },
                                {
                                    "id": 40000000000030,
                                    "type": "NUTRITIONAL",
                                    "name": "Yağ (g)",
                                    "priority": 3,
                                    "customId": "fat",
                                    "value": "5.7"
                                },
                                {
                                    "id": 40000000000031,
                                    "type": "NUTRITIONAL",
                                    "name": "Doymuş yağ (g)",
                                    "priority": 4,
                                    "customId": "saturatedFat",
                                    "value": "3.9"
                                },
                                {
                                    "id": 40000000000058,
                                    "type": "MAIN",
                                    "name": "Saklama Koşulları",
                                    "priority": 4,
                                    "value": "Serin ve Kuru Yerde Muhafaza Ediniz"
                                },
                                {
                                    "id": 40000000000057,
                                    "type": "MAIN",
                                    "name": "Menşei",
                                    "priority": 5,
                                    "customId": "country",
                                    "value": "TÜRKİYE"
                                },
                                {
                                    "id": 40000000000061,
                                    "type": "MAIN",
                                    "name": "İşletme Kayıt No",
                                    "priority": 6,
                                    "customId": "productionPermitCertNo",
                                    "value": "TR-19-K-000410"
                                },
                                {
                                    "id": 40000000000059,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                                    "priority": 7,
                                    "customId": "productSupplier",
                                    "value": "AKSULAR DAĞITIM PAZARLAMA TİC.VE SAN.A.Ş."
                                },
                                {
                                    "id": 40000000000294,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                                    "priority": 8,
                                    "customId": "productSupplierId",
                                    "value": "036270"
                                },
                                {
                                    "id": 40000000000033,
                                    "type": "NUTRITIONAL",
                                    "name": "Karbonhidrat (g)",
                                    "priority": 9,
                                    "customId": "carbohydrate",
                                    "value": "52.5"
                                },
                                {
                                    "id": 40000000000378,
                                    "type": "MAIN",
                                    "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                                    "priority": 10,
                                    "customId": "productSupplierAddress",
                                    "value": "MACUN MH.BATI BULVARI NO:2/136 ÖZ ANKARA GIDA TOPT. MACUNKÖY YENİMAHALLE ANKARA"
                                },
                                {
                                    "id": 40000000000034,
                                    "type": "NUTRITIONAL",
                                    "name": "Şeker (g)",
                                    "priority": 10,
                                    "customId": "glucose",
                                    "value": "2.9"
                                },
                                {
                                    "id": 40000000000060,
                                    "type": "MAIN",
                                    "name": "Kullanım Önerileri",
                                    "priority": 11,
                                    "value": "Oda koşullarında muhafaza ediniz."
                                },
                                {
                                    "id": 40000000000035,
                                    "type": "NUTRITIONAL",
                                    "name": "Lif (g)",
                                    "priority": 13,
                                    "value": "10.4"
                                },
                                {
                                    "id": 40000000000036,
                                    "type": "NUTRITIONAL",
                                    "name": "Protein (g)",
                                    "priority": 14,
                                    "customId": "protein",
                                    "value": "8.3"
                                },
                                {
                                    "id": 40000000000038,
                                    "type": "NUTRITIONAL",
                                    "name": "Tuz (g)",
                                    "priority": 15,
                                    "customId": "salt",
                                    "value": "1.3"
                                }
                            ],
                            "categoryAscendants": [
                                {
                                    "name": "Unlu Mamüller",
                                    "id": 40000000070283,
                                    "stockLegalAmount": 50,
                                    "prettyName": "unlu-mamuller-c-1128b"
                                },
                                {
                                    "name": "Fırın",
                                    "id": 40000000070280,
                                    "stockLegalAmount": 50,
                                    "prettyName": "firin-c-11288"
                                }
                            ],
                            "lists": [],
                            "additionalCategoryInfos": [],
                            "shownPrimaryPrice": 7890,
                            "effectiveStockAmount": 25.000,
                            "badges": {
                                "DOMESTIC_GOOD": "true"
                            },
                            "discounts": {},
                            "productOptionInfos": [],
                            "productCreatedAt": 1690578054749,
                            "productLastUpdatedAt": 1755178543459,
                            "discountDescriptions": []
                        },
                        "ascendantCategoriesNames": [
                            "Fırın",
                            "Unlu Mamüller",
                            "gözleme bazlama katmer"
                        ],
                        "brandId": 70,
                        "brandName": "Aly",
                        "categoryId": 40000000073542,
                        "categoryName": "gözleme bazlama katmer",
                        "depositPrice": 0,
                        "dimensionImageUrlMap": {
                            "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-105x105.jpg",
                            "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60.jpg",
                            "PRODUCT_HD": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-1650x1650.jpg",
                            "CART": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-46x46.jpg"
                        },
                        "discountDescriptions": [],
                        "discounts": {},
                        "externalCategoryId": "505050010040",
                        "externalUnit": "PIECE",
                        "externalUnitSaleAmount": 1,
                        "externalUnitSaleQuantity": 1,
                        "images": [
                            {
                                "urls": {
                                    "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-105x105.jpg",
                                    "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60.jpg",
                                    "PRODUCT_HD": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-1650x1650.jpg",
                                    "CART": "https://images.migrosone.com/hemen/product/05056305/05056305_1-55fb60-46x46.jpg"
                                }
                            }
                        ],
                        "incrementAmount": 1,
                        "initialIncrementAmount": 1,
                        "installmentApplicable": false,
                        "maxAmount": 10,
                        "name": "Aly Tortilla  Lavaş Tam Buğdaylı 6'lı 25 Cm 390 G",
                        "prettyName": "aly-tortilla-lavas-tam-bugdayli-6li-25-cm-390-g-p-4d2731",
                        "primaryPrice": 7890,
                        "primaryUnit": "PIECE",
                        "primaryUnitExternalSaleAmount": 1,
                        "primaryUnitExternalSaleQuantity": 1,
                        "primaryUnitIncrementAmount": 1,
                        "primaryUnitIncrementQuantity": 1,
                        "primaryUnitInitialIncrementAmount": 1,
                        "primaryUnitInitialIncrementQuantity": 1,
                        "primaryUnitMaxAmount": 10,
                        "primaryUnitMaxQuantity": 10,
                        "primaryUnitSaleAmount": 1,
                        "primaryUnitSaleQuantity": 1,
                        "regularPrice": 7890,
                        "rootCategoryId": 40000000070280,
                        "rootCategoryName": "Fırın",
                        "shownPrice": 7890,
                        "discountRate": 0,
                        "sku": "05056305",
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
                    "revenue": 7890,
                    "shownAmount": "1",
                    "singleShownPrice": 7890,
                    "totalDiscount": 0,
                    "totalPrice": 7890,
                    "totalRegularPrice": 7890,
                    "itemNoteAppendable": true,
                    "referrerEventId": "1758058299431179188"
                }
            ],
            "cartMoneyPriceInfo": 10000,
            "cartMoneyTextInfo": "Money ile bu alışverişin 100,00 TL daha avantajlı!",
            "unavailableItems": [],
            "shortfallItems": [],
            "deliveryPriceTierInfo": {
                "currentTierText": "Teslimatın 44,99 TL yerine 34,99 TL oldu! \uD83C\uDF89",
                "firstTierDeliveryFee": "44,99 TL",
                "currentTierDeliveryFee": "34,99 TL",
                "nextTierText": "298,77 TL'lik ürün ekle, teslimatın ücretsiz olsun!",
                "nextTierRemainingRevenue": "298,77 TL",
                "nextTierDeliveryFee": "ücretsiz",
                "currentTierOrder": 2,
                "totalTierCount": 3,
                "normalizedProgress": 0.57318574
            },
            "starDiscountInfo": {
                "status": "UNAVAILABLE"
            },
            "foodProductDiscountInfo": {
                "foodProductDiscountProductInfoList": []
            }
        },
        "remainingRevenueRecommendations": [],
        "cartCampaignSuggestions": []
    }
}
```