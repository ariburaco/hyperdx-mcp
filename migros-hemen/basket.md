# Migros Hemen Basket

### Basket

```bash
curl 'https://www.migros.com.tr/rest/hemen/carts/screens/V2?reid=1758058375984000001' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'Referer: https://www.migros.com.tr/hemen/sepetim' \
  -H 'Accept-Language: tr' \
  -H 'X-FORWARDED-REST: true' \
  -H 'sec-ch-ua: "Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'X-Device-PWA: true' \
  -H 'X-PWA: true' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' \
  -H 'Accept: application/json'
```

### Basket Response

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
              "criticalStockAmount": 0.5,
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
                  "ascendantIds": [40000000074063]
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
            "ascendantCategoriesNames": ["Meyve & Sebze", "Sebze"],
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
          "referrerEventId": "1758058376288178445"
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
              "currentStockAmount": 33.0,
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
              "criticalStockAmount": 2.0,
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
              "effectiveStockAmount": 31.0,
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
          "referrerEventId": "1758058376288178445"
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
              "currentStockAmount": 15.0,
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
              "criticalStockAmount": 1.0,
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
              "effectiveStockAmount": 14.0,
              "badges": {
                "DOMESTIC_GOOD": "true",
                "PRICE_PROMOTED": "29995"
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
                "colorCodes": ["#808284", "#ffe200"]
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
          "referrerEventId": "1758058376288178445"
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
              "currentStockAmount": 27.0,
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
              "criticalStockAmount": 2.0,
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
              "effectiveStockAmount": 25.0,
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
          "referrerEventId": "1758058376288178445"
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
    "skuPromoteCampaigns": [
      {
        "title": "Fide Ürünleri!",
        "name": "Fide Ürünleri!",
        "description": "Fide Ürünleri!",
        "storeProductInfos": [
          {
            "id": 40000009024305,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "09024305",
            "name": "Fide Zeytinyağlı Ton Balığı 3x80 G",
            "description": "<p><strong>İçindekiler</strong><br>Ton  balığı, zeytinyağı ,tuz</p><p><strong>Alerjen Uyarısı</strong><br>Ton Balığı</p><p><strong>Net Miktar (g/ml)</strong><br>240</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR10-1076</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FİDE KONSERVE GIDA SAN.A.Ş....</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705799</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Pişirilmiştir, doğrudan tüketilebilir.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Ton  balığı, zeytinyağı ,tuz</p><p><strong>Alerjen Uyarısı</strong><br>Ton Balığı</p><p><strong>Net Miktar (g/ml)</strong><br>240</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR10-1076</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FİDE KONSERVE GIDA SAN.A.Ş....</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705799</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Pişirilmiştir, doğrudan tüketilebilir.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 4454,
            "brand": {
              "name": "Fide",
              "id": 4454,
              "prettyName": "fide-b-1166"
            },
            "categoryId": 40000000070306,
            "category": {
              "name": "Konserve",
              "id": 40000000070306,
              "stockLegalAmount": 50,
              "prettyName": "konserve-c-112a2"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Ton Balığı",
                "id": 40000000072929,
                "stockLegalAmount": 50,
                "prettyName": "ton-baligi-c-11ce1"
              },
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
                "name": "Fide Ürünleri",
                "id": 40000196901349,
                "prettyName": "fide-urunleri-l-bbc79e5"
              },
              {
                "name": "Fide Ürünleri",
                "id": 40000196901326,
                "prettyName": "fide-urunleri-l-bbc79ce"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/09024305/09024305_1-b7f51d-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/09024305/09024305_1-b7f51d.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/09024305/09024305_1-b7f51d-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/09024305/09024305_1-b7f51d-46x46.jpg"
                },
                "productId": 40000009024305
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/09024305/09024305_bicakizi-0f33af.jpg"
                },
                "productId": 40000009024305
              }
            ],
            "energyImages": [],
            "prettyName": "fide-zeytinyagli-ton-baligi-3x80-g-p-89b331",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "300"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Ton  balığı, zeytinyağı ,tuz"
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "Ton Balığı"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "240"
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
                  "value": "TR10-1076"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "FİDE KONSERVE GIDA SAN.A.Ş...."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "705799"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Pişirilmiştir, doğrudan tüketilebilir."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "212.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "886.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "12.4"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "1.9"
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
                  "value": "23.7"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "1.7"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 23995,
            "salePrice": 23995,
            "loyaltyPrice": 23995,
            "shownPrice": 23995,
            "unitPrice": "(999,79 TL/Kg)",
            "discountRate": 0,
            "discounts": {
              "CROSS_DISCOUNT": ["Sepetine 2. Ürünü Eklemeyi Unutma"]
            },
            "discountDescriptions": ["Sepetine 2. Ürünü Eklemeyi Unutma"],
            "badges": [
              {
                "name": "CROSS_PROMOTED",
                "value": "2 Al 1 Öde",
                "colorCodes": ["#4C437A", "#12D180"]
              }
            ],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376321178450",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000009050058,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "09050058",
            "name": "Fide Acılı Ton Balığı 2 x 160 G",
            "description": "<p><strong>İçindekiler</strong><br>Ton balığı, ayçiçek yağı, acı biber, tuz, sarımsak tozu, acı aroması</p><p><strong>Net Miktar (g/ml)</strong><br>320</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FİDE KONSERVE GIDA SAN.A.Ş....</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705799</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>ambalaj açıldıktan sonra ürünün üzerini kaplayacak şekilde yağ ekleyerek, ağzı kapalı bir şekilde buzdolabında saklanması ve 2 gün içinde tüketilmesi tavsiye edilir.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Ton balığı, ayçiçek yağı, acı biber, tuz, sarımsak tozu, acı aroması</p><p><strong>Net Miktar (g/ml)</strong><br>320</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FİDE KONSERVE GIDA SAN.A.Ş....</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705799</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>ambalaj açıldıktan sonra ürünün üzerini kaplayacak şekilde yağ ekleyerek, ağzı kapalı bir şekilde buzdolabında saklanması ve 2 gün içinde tüketilmesi tavsiye edilir.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 4454,
            "brand": {
              "name": "Fide",
              "id": 4454,
              "prettyName": "fide-b-1166"
            },
            "categoryId": 40000000070306,
            "category": {
              "name": "Konserve",
              "id": 40000000070306,
              "stockLegalAmount": 50,
              "prettyName": "konserve-c-112a2"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Ton Balığı",
                "id": 40000000072929,
                "stockLegalAmount": 50,
                "prettyName": "ton-baligi-c-11ce1"
              },
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
                "name": "Fide Ürünleri",
                "id": 40000196901349,
                "prettyName": "fide-urunleri-l-bbc79e5"
              },
              {
                "name": "Fide Ürünleri",
                "id": 40000196901326,
                "prettyName": "fide-urunleri-l-bbc79ce"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/09050058/09050058_1-62fc62-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/09050058/09050058_1-62fc62.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/09050058/09050058_1-62fc62-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/09050058/09050058_1-62fc62-46x46.jpg"
                },
                "productId": 40000009050058
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/09050058/09050058_bicakizi-9275fd.jpg"
                },
                "productId": 40000009050058
              }
            ],
            "energyImages": [],
            "prettyName": "fide-acili-ton-baligi-2-x-160-g-p-8a17ca",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "400"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Ton balığı, ayçiçek yağı, acı biber, tuz, sarımsak tozu, acı aroması"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "320"
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
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "FİDE KONSERVE GIDA SAN.A.Ş...."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "705799"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "ambalaj açıldıktan sonra ürünün üzerini kaplayacak şekilde yağ ekleyerek, ağzı kapalı bir şekilde buzdolabında saklanması ve 2 gün içinde tüketilmesi tavsiye edilir."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "196.8"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "826.89"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "10.8"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.9"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "0.7"
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
                  "value": "24.2"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "1.7"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 17995,
            "salePrice": 17995,
            "loyaltyPrice": 17995,
            "shownPrice": 17995,
            "unitPrice": "(562,34 TL/Kg)",
            "discountRate": 0,
            "discounts": {
              "CROSS_DISCOUNT": ["Sepetine 2. Ürünü Eklemeyi Unutma"]
            },
            "discountDescriptions": ["Sepetine 2. Ürünü Eklemeyi Unutma"],
            "badges": [
              {
                "name": "CROSS_PROMOTED",
                "value": "2 Al 1 Öde",
                "colorCodes": ["#4C437A", "#12D180"]
              }
            ],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376321178450",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000009051113,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "09051113",
            "name": "Fide Zeytinyağlı Ton Balığı 2X160 G",
            "description": "<p><strong>İçindekiler</strong><br>Ton balığı, zeytinyağı, tuz</p><p><strong>Alerjen Uyarısı</strong><br>Ton Balığı</p><p><strong>Net Miktar (g/ml)</strong><br>320</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR10-1076</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FİDE KONSERVE GIDA SAN.A.Ş....</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705799</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Pişirilmiştir, doğruda tüketilebilir.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Ton balığı, zeytinyağı, tuz</p><p><strong>Alerjen Uyarısı</strong><br>Ton Balığı</p><p><strong>Net Miktar (g/ml)</strong><br>320</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR10-1076</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FİDE KONSERVE GIDA SAN.A.Ş....</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705799</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Pişirilmiştir, doğruda tüketilebilir.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 4454,
            "brand": {
              "name": "Fide",
              "id": 4454,
              "prettyName": "fide-b-1166"
            },
            "categoryId": 40000000070306,
            "category": {
              "name": "Konserve",
              "id": 40000000070306,
              "stockLegalAmount": 50,
              "prettyName": "konserve-c-112a2"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Ton Balığı",
                "id": 40000000072929,
                "stockLegalAmount": 50,
                "prettyName": "ton-baligi-c-11ce1"
              },
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
                "name": "Fide Ürünleri",
                "id": 40000196901326,
                "prettyName": "fide-urunleri-l-bbc79ce"
              },
              {
                "name": "Fide Ürünleri",
                "id": 40000196901349,
                "prettyName": "fide-urunleri-l-bbc79e5"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/09051113/09051113-49a53b-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/09051113/09051113-49a53b.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/09051113/09051113-49a53b-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/09051113/09051113-49a53b-46x46.jpg"
                },
                "productId": 40000009051113
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/09051113/09051113_bicakizi-991dce.jpg"
                },
                "productId": 40000009051113
              }
            ],
            "energyImages": [],
            "prettyName": "fide-zeytinyagli-ton-baligi-2x160-g-p-8a1be9",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "400"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Ton balığı, zeytinyağı, tuz"
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "Ton Balığı"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "320"
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
                  "value": "TR10-1076"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "FİDE KONSERVE GIDA SAN.A.Ş...."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "705799"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Pişirilmiştir, doğruda tüketilebilir."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "212.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "886.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "12.4"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "1.9"
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
                  "value": "23.7"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "1.7"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 27495,
            "salePrice": 27495,
            "loyaltyPrice": 27495,
            "shownPrice": 27495,
            "unitPrice": "(859,21 TL/Kg)",
            "discountRate": 0,
            "discounts": {
              "CROSS_DISCOUNT": ["Sepetine 2. Ürünü Eklemeyi Unutma"]
            },
            "discountDescriptions": ["Sepetine 2. Ürünü Eklemeyi Unutma"],
            "badges": [
              {
                "name": "CROSS_PROMOTED",
                "value": "2 Al 1 Öde",
                "colorCodes": ["#4C437A", "#12D180"]
              }
            ],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376321178450",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000009024382,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "09024382",
            "name": "Fide Klasik Ton Balığı 3x80 G",
            "description": "<p><strong>İçindekiler</strong><br>Ton balığı, ayçiçek yağı, tuz</p><p><strong>Alerjen Uyarısı</strong><br>Ton balığı</p><p><strong>Net Miktar (g/ml)</strong><br>240</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR10-1076</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FİDE KONSERVE GIDA SAN.A.Ş....</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705799</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Pişirilmiştir, doğrudan tüketilebilir.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Ton balığı, ayçiçek yağı, tuz</p><p><strong>Alerjen Uyarısı</strong><br>Ton balığı</p><p><strong>Net Miktar (g/ml)</strong><br>240</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR10-1076</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FİDE KONSERVE GIDA SAN.A.Ş....</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705799</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Pişirilmiştir, doğrudan tüketilebilir.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 4454,
            "brand": {
              "name": "Fide",
              "id": 4454,
              "prettyName": "fide-b-1166"
            },
            "categoryId": 40000000070306,
            "category": {
              "name": "Konserve",
              "id": 40000000070306,
              "stockLegalAmount": 50,
              "prettyName": "konserve-c-112a2"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Ton Balığı",
                "id": 40000000072929,
                "stockLegalAmount": 50,
                "prettyName": "ton-baligi-c-11ce1"
              },
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
                "name": "Fide Ürünleri",
                "id": 40000196901349,
                "prettyName": "fide-urunleri-l-bbc79e5"
              },
              {
                "name": "Fide Ürünleri",
                "id": 40000196901326,
                "prettyName": "fide-urunleri-l-bbc79ce"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/09024382/09024382-7f3e06-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/09024382/09024382-7f3e06.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/09024382/09024382-7f3e06-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/09024382/09024382-7f3e06-46x46.jpg"
                },
                "productId": 40000009024382
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/09024382/09024382_bicakizi-2eadc8.jpg"
                },
                "productId": 40000009024382
              }
            ],
            "energyImages": [],
            "prettyName": "fide-klasik-ton-baligi-3x80-g-p-89b37e",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "300"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Ton balığı, ayçiçek yağı, tuz"
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "Ton balığı"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "240"
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
                  "value": "TR10-1076"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "FİDE KONSERVE GIDA SAN.A.Ş...."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "705799"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BÜYÜKDERE CD. NADİDE APT. NO:73 K:2 D:4 MECİDİYEKÖY ŞİŞLİ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Pişirilmiştir, doğrudan tüketilebilir."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "193.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "807.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "10.8"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.9"
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
                  "value": "23.7"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "1.7"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 20995,
            "salePrice": 20995,
            "loyaltyPrice": 20995,
            "shownPrice": 20995,
            "unitPrice": "(874,79 TL/Kg)",
            "discountRate": 0,
            "discounts": {
              "CROSS_DISCOUNT": ["Sepetine 2. Ürünü Eklemeyi Unutma"]
            },
            "discountDescriptions": ["Sepetine 2. Ürünü Eklemeyi Unutma"],
            "badges": [
              {
                "name": "CROSS_PROMOTED",
                "value": "2 Al 1 Öde",
                "colorCodes": ["#4C437A", "#12D180"]
              }
            ],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376321178450",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          }
        ]
      },
      {
        "title": "Nutella ürünleri",
        "name": "Nutella ürünleri",
        "description": "Nutella ürünleri",
        "storeProductInfos": [
          {
            "id": 40000007155050,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "07155050",
            "name": "Nutella Kakaolu Fındık Kreması 400 G",
            "description": "<p>Mağaza ve bölge stoğunda mevcut olması durumunda kampanya ambalajlı ürün teslimi yapılabilecektir.</p><p>Nutella®'nın tadı neden bu kadar güzel?</p><p>Nutella’nın benzersiz tarifini bu kadar lezzetli yapan, sizlere zevkli ve lezzetli bir deneyim sunabilmek adına üretimin her aşamasında gösterdiğimiz özen ve tutkudur.</p><p>Nutella®'nın kusursuz tarifi dünyanın her yerinde aynıdır. Özenle seçilmiş 7 kaliteli malzeme birleştirilerek, eşsiz kremamsı bir doku ve yoğun bir lezzet katılarak üretilir.</p><p>Bu yüksek kalite standartlarından bazıları, dünyanın önde gelen kontrol, doğrulama, test ve belgelendirme kuruluşu olan SGS tarafından da doğrulanmıştır.&nbsp;Bağımsız bir hizmet sağlayıcı olarak SGS; Nutella®'nın ve tüm bileşenlerinin, uygulamakta olduğumuz \"Kalite\" doğrulama programı gerekliliklerine uygun olduğunu doğrulamaktadır.</p><p><strong>İçindekiler</strong><br>şeker,\r\nbitkisel yağ (palm),\r\nfındık (%13), \r\nyağsız süt tozu (%8.7),\r\nyağı azaltılmış kakao tozu (%7.4),\r\nemülgatör: lesitin (soya),\r\naroma verici(vanilin).</p><p><strong>Alerjen Uyarısı</strong><br>fındık , \r\nyağsız süt tozu ,\r\nemülgatör: lesitin (soya),</p><p><strong>Net Miktar (g/ml)</strong><br>400</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-45-K-004046</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>034642</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>P:Ürünün lot numarasıdır\r\nTETT:Tavsiye edilen tüketim tarihi kapaktadır.\r\nbuzdolabı dışında serin ve kuru yerde muhafaza ediniz.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p>Mağaza ve bölge stoğunda mevcut olması durumunda kampanya ambalajlı ürün teslimi yapılabilecektir.</p><p>Nutella®'nın tadı neden bu kadar güzel?</p><p>Nutella’nın benzersiz tarifini bu kadar lezzetli yapan, sizlere zevkli ve lezzetli bir deneyim sunabilmek adına üretimin her aşamasında gösterdiğimiz özen ve tutkudur.</p><p>Nutella®'nın kusursuz tarifi dünyanın her yerinde aynıdır. Özenle seçilmiş 7 kaliteli malzeme birleştirilerek, eşsiz kremamsı bir doku ve yoğun bir lezzet katılarak üretilir.</p><p>Bu yüksek kalite standartlarından bazıları, dünyanın önde gelen kontrol, doğrulama, test ve belgelendirme kuruluşu olan SGS tarafından da doğrulanmıştır.&nbsp;Bağımsız bir hizmet sağlayıcı olarak SGS; Nutella®'nın ve tüm bileşenlerinin, uygulamakta olduğumuz \"Kalite\" doğrulama programı gerekliliklerine uygun olduğunu doğrulamaktadır.</p>",
            "information": "<p><strong>İçindekiler</strong><br>şeker,\r\nbitkisel yağ (palm),\r\nfındık (%13), \r\nyağsız süt tozu (%8.7),\r\nyağı azaltılmış kakao tozu (%7.4),\r\nemülgatör: lesitin (soya),\r\naroma verici(vanilin).</p><p><strong>Alerjen Uyarısı</strong><br>fındık , \r\nyağsız süt tozu ,\r\nemülgatör: lesitin (soya),</p><p><strong>Net Miktar (g/ml)</strong><br>400</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-45-K-004046</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>034642</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>P:Ürünün lot numarasıdır\r\nTETT:Tavsiye edilen tüketim tarihi kapaktadır.\r\nbuzdolabı dışında serin ve kuru yerde muhafaza ediniz.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 586,
            "brand": {
              "name": "Nutella",
              "id": 586,
              "prettyName": "nutella-b-24a"
            },
            "categoryId": 40000000070294,
            "category": {
              "name": "Çikolata & Kahvaltı",
              "id": 40000000070294,
              "stockLegalAmount": 50,
              "prettyName": "cikolata-kahvalti-c-11296"
            },
            "categoryAscendants": [
              {
                "name": "Süt & Kahvaltılık",
                "id": 40000000070285,
                "stockLegalAmount": 50,
                "prettyName": "sut-kahvaltilik-c-1128d"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "kakao krema",
                "id": 40000000072654,
                "stockLegalAmount": 50,
                "prettyName": "kakao-krema-c-11bce"
              },
              {
                "name": "Çikolata & Kahvaltı",
                "id": 40000000070294,
                "stockLegalAmount": 50,
                "prettyName": "cikolata-kahvalti-c-11296"
              },
              {
                "name": "Süt & Kahvaltılık",
                "id": 40000000070285,
                "stockLegalAmount": 50,
                "prettyName": "sut-kahvaltilik-c-1128d"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155050/7155050-ccf08f-105x105.png",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155050/7155050-ccf08f.png",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155050/7155050-ccf08f-1650x1650.png",
                  "CART": "https://images.migrosone.com/hemen/product/07155050/7155050-ccf08f-46x46.png"
                },
                "productId": 40000007155050
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155050/07155050_yan-46b8a6-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155050/07155050_yan-46b8a6.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155050/07155050_yan-46b8a6-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07155050/07155050_yan-46b8a6-46x46.jpg"
                },
                "productId": 40000007155050
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155050/07155050_arka-3c5861-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155050/07155050_arka-3c5861.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155050/07155050_arka-3c5861-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07155050/07155050_arka-3c5861-46x46.jpg"
                },
                "productId": 40000007155050
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155050/07155050_etiket-722aa5-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155050/07155050_etiket-722aa5.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155050/07155050_etiket-722aa5-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07155050/07155050_etiket-722aa5-46x46.jpg"
                },
                "productId": 40000007155050
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155050/07155050_urundetay-0aa96c-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155050/07155050_urundetay-0aa96c.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155050/07155050_urundetay-0aa96c-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07155050/07155050_urundetay-0aa96c-46x46.jpg"
                },
                "productId": 40000007155050
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "nutella-kakaolu-findik-kremasi-400-g-p-6d2d6a",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "620"
                }
              ],
              "MISC": [
                {
                  "id": 40000000000051,
                  "type": "MISC",
                  "name": "Ürün Özellikleri",
                  "priority": 0,
                  "customId": "productDetailsImage",
                  "value": "https://images.migrosone.com/hemen/custom/nutellaposter-623a7e27.jpg"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "şeker,\r\nbitkisel yağ (palm),\r\nfındık (%13), \r\nyağsız süt tozu (%8.7),\r\nyağı azaltılmış kakao tozu (%7.4),\r\nemülgatör: lesitin (soya),\r\naroma verici(vanilin)."
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "fındık , \r\nyağsız süt tozu ,\r\nemülgatör: lesitin (soya),"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "400"
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
                  "value": "TR-45-K-004046"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE"
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "034642"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "P:Ürünün lot numarasıdır\r\nTETT:Tavsiye edilen tüketim tarihi kapaktadır.\r\nbuzdolabı dışında serin ve kuru yerde muhafaza ediniz."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "539.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "2252.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "30.9"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "10.6"
                },
                {
                  "id": 40000000000070,
                  "type": "NUTRITIONAL",
                  "name": "Trans yağ (g)",
                  "priority": 5,
                  "value": "0.1"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "57.5"
                },
                {
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "56.3"
                },
                {
                  "id": 40000000000035,
                  "type": "NUTRITIONAL",
                  "name": "Lif (g)",
                  "priority": 13,
                  "value": "3.0"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "6.3"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.1"
                },
                {
                  "id": 40000000000037,
                  "type": "NUTRITIONAL",
                  "name": "Sodyum (g)",
                  "priority": 16,
                  "value": "0.1"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 15995,
            "salePrice": 15995,
            "loyaltyPrice": 15995,
            "shownPrice": 15995,
            "unitPrice": "(399,87 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376321178451",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000007155709,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "07155709",
            "name": "Nutella Kakaolu Fındık Kreması 750 G",
            "description": "<p>Nutella®'nın tadı neden bu kadar güzel?</p><p>Nutella’nın benzersiz tarifini bu kadar lezzetli yapan, sizlere zevkli ve lezzetli bir deneyim sunabilmek adına üretimin her aşamasında gösterdiğimiz özen ve tutkudur.</p><p>Nutella®'nın kusursuz tarifi dünyanın her yerinde aynıdır. Özenle seçilmiş 7 kaliteli malzeme birleştirilerek, eşsiz kremamsı bir doku ve yoğun bir lezzet katılarak üretilir.</p><p>Bu yüksek kalite standartlarından bazıları, dünyanın önde gelen kontrol, doğrulama, test ve belgelendirme kuruluşu olan SGS tarafından da doğrulanmıştır.&nbsp;Bağımsız bir hizmet sağlayıcı olarak SGS; Nutella®'nın ve tüm bileşenlerinin, uygulamakta olduğumuz \"Kalite\" doğrulama programı gerekliliklerine uygun olduğunu doğrulamaktadır.</p><p><strong>İçindekiler</strong><br>şeker,\r\nbitkisel yağ (palm),\r\nfındık (%13), \r\nyağsız süt tozu (%8.7),\r\nyağı azaltılmış kakao tozu (%7.4),\r\nemülgatör: lesitin (soya),\r\naroma verici(vanilin).</p><p><strong>Alerjen Uyarısı</strong><br>fındık (%13), \r\nyağsız süt tozu (%8.7),\r\nlesitin (soya) içeriyor.</p><p><strong>Net Miktar (g/ml)</strong><br>750</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-45-K-004046</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>034642</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Buzdolabı dışında serin ve kuru yerde muhafaza ediniz.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p>Nutella®'nın tadı neden bu kadar güzel?</p><p>Nutella’nın benzersiz tarifini bu kadar lezzetli yapan, sizlere zevkli ve lezzetli bir deneyim sunabilmek adına üretimin her aşamasında gösterdiğimiz özen ve tutkudur.</p><p>Nutella®'nın kusursuz tarifi dünyanın her yerinde aynıdır. Özenle seçilmiş 7 kaliteli malzeme birleştirilerek, eşsiz kremamsı bir doku ve yoğun bir lezzet katılarak üretilir.</p><p>Bu yüksek kalite standartlarından bazıları, dünyanın önde gelen kontrol, doğrulama, test ve belgelendirme kuruluşu olan SGS tarafından da doğrulanmıştır.&nbsp;Bağımsız bir hizmet sağlayıcı olarak SGS; Nutella®'nın ve tüm bileşenlerinin, uygulamakta olduğumuz \"Kalite\" doğrulama programı gerekliliklerine uygun olduğunu doğrulamaktadır.</p>",
            "information": "<p><strong>İçindekiler</strong><br>şeker,\r\nbitkisel yağ (palm),\r\nfındık (%13), \r\nyağsız süt tozu (%8.7),\r\nyağı azaltılmış kakao tozu (%7.4),\r\nemülgatör: lesitin (soya),\r\naroma verici(vanilin).</p><p><strong>Alerjen Uyarısı</strong><br>fındık (%13), \r\nyağsız süt tozu (%8.7),\r\nlesitin (soya) içeriyor.</p><p><strong>Net Miktar (g/ml)</strong><br>750</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-45-K-004046</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>034642</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Buzdolabı dışında serin ve kuru yerde muhafaza ediniz.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 586,
            "brand": {
              "name": "Nutella",
              "id": 586,
              "prettyName": "nutella-b-24a"
            },
            "categoryId": 40000000070294,
            "category": {
              "name": "Çikolata & Kahvaltı",
              "id": 40000000070294,
              "stockLegalAmount": 50,
              "prettyName": "cikolata-kahvalti-c-11296"
            },
            "categoryAscendants": [
              {
                "name": "Süt & Kahvaltılık",
                "id": 40000000070285,
                "stockLegalAmount": 50,
                "prettyName": "sut-kahvaltilik-c-1128d"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "kakao krema",
                "id": 40000000072654,
                "stockLegalAmount": 50,
                "prettyName": "kakao-krema-c-11bce"
              },
              {
                "name": "Çikolata & Kahvaltı",
                "id": 40000000070294,
                "stockLegalAmount": 50,
                "prettyName": "cikolata-kahvalti-c-11296"
              },
              {
                "name": "Süt & Kahvaltılık",
                "id": 40000000070285,
                "stockLegalAmount": 50,
                "prettyName": "sut-kahvaltilik-c-1128d"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155709/7155709_1-fc84e2-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155709/7155709_1-fc84e2.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155709/7155709_1-fc84e2-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07155709/7155709_1-fc84e2-46x46.jpg"
                },
                "productId": 40000007155709
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155709/7155709_2-f1c361-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155709/7155709_2-f1c361.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155709/7155709_2-f1c361-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07155709/7155709_2-f1c361-46x46.jpg"
                },
                "productId": 40000007155709
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155709/07155709_3-70c3da-105x105.jpeg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155709/07155709_3-70c3da.jpeg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155709/07155709_3-70c3da-1650x1650.jpeg",
                  "CART": "https://images.migrosone.com/hemen/product/07155709/07155709_3-70c3da-46x46.jpeg"
                },
                "productId": 40000007155709
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07155709/07155709_4-7c3b75-105x105.jpeg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07155709/07155709_4-7c3b75.jpeg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07155709/07155709_4-7c3b75-1650x1650.jpeg",
                  "CART": "https://images.migrosone.com/hemen/product/07155709/07155709_4-7c3b75-46x46.jpeg"
                },
                "productId": 40000007155709
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "nutella-kakaolu-findik-kremasi-750-g-p-6d2ffd",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "1150"
                }
              ],
              "MISC": [
                {
                  "id": 40000000000051,
                  "type": "MISC",
                  "name": "Ürün Özellikleri",
                  "priority": 0,
                  "customId": "productDetailsImage",
                  "value": "https://images.migrosone.com/hemen/custom/nutellaposter-3aa3f278.jpg"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "şeker,\r\nbitkisel yağ (palm),\r\nfındık (%13), \r\nyağsız süt tozu (%8.7),\r\nyağı azaltılmış kakao tozu (%7.4),\r\nemülgatör: lesitin (soya),\r\naroma verici(vanilin)."
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "fındık (%13), \r\nyağsız süt tozu (%8.7),\r\nlesitin (soya) içeriyor."
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "750"
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
                  "value": "TR-45-K-004046"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE"
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "034642"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Buzdolabı dışında serin ve kuru yerde muhafaza ediniz."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "539.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "2252.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "30.9"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "10.6"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "57.5"
                },
                {
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "56.3"
                },
                {
                  "id": 40000000000035,
                  "type": "NUTRITIONAL",
                  "name": "Lif (g)",
                  "priority": 13,
                  "value": "3.0"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "6.3"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.1"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 4,
            "maxAmountDescription": "Bu üründen en fazla 4 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 27250,
            "salePrice": 27250,
            "loyaltyPrice": 27250,
            "shownPrice": 27250,
            "unitPrice": "(363,33 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376321178451",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000007151717,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "07151717",
            "name": "Nutella & Go Kakaolu Fındık Kreması ve Grissini 28 G",
            "description": "<p><strong>İçindekiler</strong><br>Şeker, bitkisel yağ (palm), fındık (%13), yağsız süt tozu (%8,7), yağı azaltılmış kakao tozu(%7,4), emülgatör: lesitinler (soya), aroma verici (vanilin). \u000BGrissini İçindekiler: Buğday Unu, bitkisel yağ (palm), tuz, arpa malt özü (%1,2), maya\u000BGrissini gluten içerir. Grissini, eser miktarda hardal içerebilir.</p><p><strong>Alerjen Uyarısı</strong><br>fındık (%13), yağsız süt tozu (%8,7), emülgatör: lesitin (soya), Buğday unu, arpa malt özü (1,2%) içerir.  Grissini, eser miktarda hardal ve gluten içerebilir</p><p><strong>Net Miktar (g/ml)</strong><br>28</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>034642</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>NUTELLA® & GO! hareket halindeyken yiyebileceğiniz ideal bir atıştırmalıktır.\n \nBu eşsiz paketin iki bölümü vardır: biri çıtır grissini çubuklarıyla, diğeri de NUTELLA ® ile dolu. Hareket halindeyken (evde bile!) yediğiniz bu mükemmel kombinasyon, atıştırma anınızı eğlenceli ve unutulmaz kılacak.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Şeker, bitkisel yağ (palm), fındık (%13), yağsız süt tozu (%8,7), yağı azaltılmış kakao tozu(%7,4), emülgatör: lesitinler (soya), aroma verici (vanilin). \u000BGrissini İçindekiler: Buğday Unu, bitkisel yağ (palm), tuz, arpa malt özü (%1,2), maya\u000BGrissini gluten içerir. Grissini, eser miktarda hardal içerebilir.</p><p><strong>Alerjen Uyarısı</strong><br>fındık (%13), yağsız süt tozu (%8,7), emülgatör: lesitin (soya), Buğday unu, arpa malt özü (1,2%) içerir.  Grissini, eser miktarda hardal ve gluten içerebilir</p><p><strong>Net Miktar (g/ml)</strong><br>28</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>034642</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>NUTELLA® & GO! hareket halindeyken yiyebileceğiniz ideal bir atıştırmalıktır.\n \nBu eşsiz paketin iki bölümü vardır: biri çıtır grissini çubuklarıyla, diğeri de NUTELLA ® ile dolu. Hareket halindeyken (evde bile!) yediğiniz bu mükemmel kombinasyon, atıştırma anınızı eğlenceli ve unutulmaz kılacak.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 586,
            "brand": {
              "name": "Nutella",
              "id": 586,
              "prettyName": "nutella-b-24a"
            },
            "categoryId": 40000000070294,
            "category": {
              "name": "Çikolata & Kahvaltı",
              "id": 40000000070294,
              "stockLegalAmount": 50,
              "prettyName": "cikolata-kahvalti-c-11296"
            },
            "categoryAscendants": [
              {
                "name": "Süt & Kahvaltılık",
                "id": 40000000070285,
                "stockLegalAmount": 50,
                "prettyName": "sut-kahvaltilik-c-1128d"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "kakao krema",
                "id": 40000000072654,
                "stockLegalAmount": 50,
                "prettyName": "kakao-krema-c-11bce"
              },
              {
                "name": "Çikolata & Kahvaltı",
                "id": 40000000070294,
                "stockLegalAmount": 50,
                "prettyName": "cikolata-kahvalti-c-11296"
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
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07151717/7151717_1-ed29e6-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07151717/7151717_1-ed29e6.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07151717/7151717_1-ed29e6-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07151717/7151717_1-ed29e6-46x46.jpg"
                },
                "productId": 40000007151717
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07151717/7151717_2-bea3dd-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07151717/7151717_2-bea3dd.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07151717/7151717_2-bea3dd-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07151717/7151717_2-bea3dd-46x46.jpg"
                },
                "productId": 40000007151717
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/07151717/07151717_bicakizi-e54eec.jpeg"
                },
                "productId": 40000007151717
              }
            ],
            "energyImages": [],
            "prettyName": "nutella-go-kakaolu-findik-kremasi-ve-grissini-28-g-p-6d2065",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "50"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Şeker, bitkisel yağ (palm), fındık (%13), yağsız süt tozu (%8,7), yağı azaltılmış kakao tozu(%7,4), emülgatör: lesitinler (soya), aroma verici (vanilin). \u000BGrissini İçindekiler: Buğday Unu, bitkisel yağ (palm), tuz, arpa malt özü (%1,2), maya\u000BGrissini gluten içerir. Grissini, eser miktarda hardal içerebilir."
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "fındık (%13), yağsız süt tozu (%8,7), emülgatör: lesitin (soya), Buğday unu, arpa malt özü (1,2%) içerir.  Grissini, eser miktarda hardal ve gluten içerebilir"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "28"
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
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "FERRERO TÜRKİYE ÇİKOLATA VE TARIM ÜRÜNLERİ SAN.VE"
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "034642"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BALMUMCU MH. GAZİ UMUR PAŞA SK NO:27 BEŞİKTAŞ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "NUTELLA® & GO! hareket halindeyken yiyebileceğiniz ideal bir atıştırmalıktır.\n \nBu eşsiz paketin iki bölümü vardır: biri çıtır grissini çubuklarıyla, diğeri de NUTELLA ® ile dolu. Hareket halindeyken (evde bile!) yediğiniz bu mükemmel kombinasyon, atıştırma anınızı eğlenceli ve unutulmaz kılacak."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "539.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "2252.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "30.9"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "10.6"
                },
                {
                  "id": 40000000000070,
                  "type": "NUTRITIONAL",
                  "name": "Trans yağ (g)",
                  "priority": 5,
                  "value": "0.1"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "57.5"
                },
                {
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "56.3"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "6.3"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.1"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 2950,
            "salePrice": 2950,
            "loyaltyPrice": 2950,
            "shownPrice": 2950,
            "unitPrice": "(1053,57 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376321178451",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          }
        ]
      },
      {
        "title": "Hayfene Ürünleri!",
        "name": "Hayfene Ürünleri!",
        "description": "Hayfene Ürünleri!",
        "storeProductInfos": [
          {
            "id": 40000006013048,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "06013048",
            "name": "Hayfene İtalyan Baharat Karışımı 25 G",
            "description": "<p><strong>İçindekiler</strong><br>Fesleğen, Sarımsak Granül, Soğan Granül, Tatlı Pul Biber, Zahter, Mercanköşk, Reyhan, Biberiye, Kekik</p><p><strong>Alerjen Uyarısı</strong><br>kereviz, hardal, susam ve sert kabuklu meyve içerebilir.</p><p><strong>Net Miktar (g/ml)</strong><br>25</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056385</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Sebze ve salatalarınızın üzerine dilediğiniz kadar serpebilirsiniz</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Fesleğen, Sarımsak Granül, Soğan Granül, Tatlı Pul Biber, Zahter, Mercanköşk, Reyhan, Biberiye, Kekik</p><p><strong>Alerjen Uyarısı</strong><br>kereviz, hardal, susam ve sert kabuklu meyve içerebilir.</p><p><strong>Net Miktar (g/ml)</strong><br>25</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056385</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Sebze ve salatalarınızın üzerine dilediğiniz kadar serpebilirsiniz</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 405,
            "brand": {
              "name": "Hayfene",
              "id": 405,
              "prettyName": "hayfene-b-195"
            },
            "categoryId": 40000000070304,
            "category": {
              "name": "Baharat",
              "id": 40000000070304,
              "stockLegalAmount": 50,
              "prettyName": "baharat-c-112a0"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Diğer Baharat",
                "id": 40000000072956,
                "stockLegalAmount": 50,
                "prettyName": "diger-baharat-c-11cfc"
              },
              {
                "name": "Baharat",
                "id": 40000000070304,
                "stockLegalAmount": 50,
                "prettyName": "baharat-c-112a0"
              },
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013048/06013048-50ddf6-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013048/06013048-50ddf6.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013048/06013048-50ddf6-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013048/06013048-50ddf6-46x46.jpg"
                },
                "productId": 40000006013048
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013048/06013048_yan-8352e6-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013048/06013048_yan-8352e6.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013048/06013048_yan-8352e6-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013048/06013048_yan-8352e6-46x46.jpg"
                },
                "productId": 40000006013048
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "hayfene-italyan-baharat-karisimi-25-g-p-5bc078",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "ATTRIBUTE": [
                {
                  "id": 40000000000281,
                  "type": "ATTRIBUTE",
                  "name": "Vegan",
                  "priority": 13,
                  "customId": "veganAttribute",
                  "value": "E"
                },
                {
                  "id": 40000000000282,
                  "type": "ATTRIBUTE",
                  "name": "Vejetaryen",
                  "priority": 14,
                  "customId": "vegetarianAttribute",
                  "value": "E"
                }
              ],
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "200"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Fesleğen, Sarımsak Granül, Soğan Granül, Tatlı Pul Biber, Zahter, Mercanköşk, Reyhan, Biberiye, Kekik"
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "kereviz, hardal, susam ve sert kabuklu meyve içerebilir."
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "25"
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
                  "value": "TR-34-K056385"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "035271"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Sebze ve salatalarınızın üzerine dilediğiniz kadar serpebilirsiniz"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [
              {
                "type": "ATTRIBUTE",
                "label": "Vejetaryen",
                "description": "Et, balık, kümes hayvanları ve kabuklu deniz ürünleri içermediği belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vejetaryen.png",
                "tag": "Vejetaryen",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              },
              {
                "type": "ATTRIBUTE",
                "label": "Vegan",
                "description": "Hayvansal ya da hayvanlardan dolaylı olarak elde edilen (süt, yumurta, bal vb) hiçbir içeriği bulundurmadığı belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vegan.png",
                "tag": "Vegan",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              }
            ],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 10395,
            "salePrice": 10395,
            "loyaltyPrice": 7277,
            "shownPrice": 7277,
            "unitPrice": "(2910,80 TL/Kg)",
            "discountRate": 30,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [
              {
                "name": "PRICE_PROMOTED",
                "value": "103,95 TL",
                "colorCodes": ["#808284", "#ffe200"]
              }
            ],
            "loyaltyPromotionId": 501727,
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178452",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000006010115,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "06010115",
            "name": "Hayfene Karbonat 390 G",
            "description": "<p><strong>İçindekiler</strong><br>Sodyum bikarbonat</p><p><strong>Net Miktar (g/ml)</strong><br>390</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K-056379</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>4 kişilik kek harcına 1 çay kaşığı kabonat yeterli olmaktadır. Karbonatı aktif etmek için çözenecek kadar limon suyu (3 çay kaşığı) eklemeniz gerekmektedir.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Sodyum bikarbonat</p><p><strong>Net Miktar (g/ml)</strong><br>390</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K-056379</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>4 kişilik kek harcına 1 çay kaşığı kabonat yeterli olmaktadır. Karbonatı aktif etmek için çözenecek kadar limon suyu (3 çay kaşığı) eklemeniz gerekmektedir.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 405,
            "brand": {
              "name": "Hayfene",
              "id": 405,
              "prettyName": "hayfene-b-195"
            },
            "categoryId": 40000000070304,
            "category": {
              "name": "Baharat",
              "id": 40000000070304,
              "stockLegalAmount": 50,
              "prettyName": "baharat-c-112a0"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Diğer Baharat",
                "id": 40000000072956,
                "stockLegalAmount": 50,
                "prettyName": "diger-baharat-c-11cfc"
              },
              {
                "name": "Baharat",
                "id": 40000000070304,
                "stockLegalAmount": 50,
                "prettyName": "baharat-c-112a0"
              },
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06010115/06010115-e71448-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06010115/06010115-e71448.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06010115/06010115-e71448-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06010115/06010115-e71448-46x46.jpg"
                },
                "productId": 40000006010115
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "hayfene-karbonat-390-g-p-5bb503",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "400"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Sodyum bikarbonat"
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
                  "value": "TR-34-K-056379"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "035271"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "4 kişilik kek harcına 1 çay kaşığı kabonat yeterli olmaktadır. Karbonatı aktif etmek için çözenecek kadar limon suyu (3 çay kaşığı) eklemeniz gerekmektedir."
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 8995,
            "salePrice": 8995,
            "loyaltyPrice": 6297,
            "shownPrice": 6297,
            "unitPrice": "(161,46 TL/Kg)",
            "discountRate": 30,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [
              {
                "name": "PRICE_PROMOTED",
                "value": "89,95 TL",
                "colorCodes": ["#808284", "#ffe200"]
              }
            ],
            "loyaltyPromotionId": 501727,
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178452",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000006013042,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "06013042",
            "name": "Hayfene Toprak Sebze & Salata Baharatı 100 G",
            "description": "<p><strong>İçindekiler</strong><br>Sarımsak, Alacabiber, Sumak, Deniz Tuzu, Zeytinyağı, Kekik, Nane, Fesleğen.</p><p><strong>Alerjen Uyarısı</strong><br>KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR</p><p><strong>Net Miktar (g/ml)</strong><br>100</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056382</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Damak tadınıza göre 1 porsiyon yemek için 1 çay kaşığı baharatımızdan ekleyebilrsiniz.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Sarımsak, Alacabiber, Sumak, Deniz Tuzu, Zeytinyağı, Kekik, Nane, Fesleğen.</p><p><strong>Alerjen Uyarısı</strong><br>KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR</p><p><strong>Net Miktar (g/ml)</strong><br>100</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056382</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Damak tadınıza göre 1 porsiyon yemek için 1 çay kaşığı baharatımızdan ekleyebilrsiniz.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 405,
            "brand": {
              "name": "Hayfene",
              "id": 405,
              "prettyName": "hayfene-b-195"
            },
            "categoryId": 40000000070304,
            "category": {
              "name": "Baharat",
              "id": 40000000070304,
              "stockLegalAmount": 50,
              "prettyName": "baharat-c-112a0"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Diğer Baharat",
                "id": 40000000072956,
                "stockLegalAmount": 50,
                "prettyName": "diger-baharat-c-11cfc"
              },
              {
                "name": "Baharat",
                "id": 40000000070304,
                "stockLegalAmount": 50,
                "prettyName": "baharat-c-112a0"
              },
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013042/06013042-39ad8f-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013042/06013042-39ad8f.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013042/06013042-39ad8f-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013042/06013042-39ad8f-46x46.jpg"
                },
                "productId": 40000006013042
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013042/06013042_yan-579dee-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013042/06013042_yan-579dee.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013042/06013042_yan-579dee-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013042/06013042_yan-579dee-46x46.jpg"
                },
                "productId": 40000006013042
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "hayfene-toprak-sebze-salata-baharati-100-g-p-5bc072",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "ATTRIBUTE": [
                {
                  "id": 40000000000281,
                  "type": "ATTRIBUTE",
                  "name": "Vegan",
                  "priority": 13,
                  "customId": "veganAttribute",
                  "value": "E"
                },
                {
                  "id": 40000000000282,
                  "type": "ATTRIBUTE",
                  "name": "Vejetaryen",
                  "priority": 14,
                  "customId": "vegetarianAttribute",
                  "value": "E"
                }
              ],
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "100"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Sarımsak, Alacabiber, Sumak, Deniz Tuzu, Zeytinyağı, Kekik, Nane, Fesleğen."
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "100"
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
                  "value": "TR-34-K056382"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "035271"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Damak tadınıza göre 1 porsiyon yemek için 1 çay kaşığı baharatımızdan ekleyebilrsiniz."
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [
              {
                "type": "ATTRIBUTE",
                "label": "Vejetaryen",
                "description": "Et, balık, kümes hayvanları ve kabuklu deniz ürünleri içermediği belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vejetaryen.png",
                "tag": "Vejetaryen",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              },
              {
                "type": "ATTRIBUTE",
                "label": "Vegan",
                "description": "Hayvansal ya da hayvanlardan dolaylı olarak elde edilen (süt, yumurta, bal vb) hiçbir içeriği bulundurmadığı belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vegan.png",
                "tag": "Vegan",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              }
            ],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 12495,
            "salePrice": 12495,
            "loyaltyPrice": 8747,
            "shownPrice": 8747,
            "unitPrice": "(874,70 TL/Kg)",
            "discountRate": 30,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [
              {
                "name": "PRICE_PROMOTED",
                "value": "124,95 TL",
                "colorCodes": ["#808284", "#ffe200"]
              }
            ],
            "loyaltyPromotionId": 501727,
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178452",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000006013041,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "06013041",
            "name": "Hayfene 5. Element Baharatı 140 G",
            "description": "<p><strong>Alerjen Uyarısı</strong><br>ESER MİKTARDA KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR</p><p><strong>Net Miktar (g/ml)</strong><br>140</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056383</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>Alerjen Uyarısı</strong><br>ESER MİKTARDA KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR</p><p><strong>Net Miktar (g/ml)</strong><br>140</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056383</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 405,
            "brand": {
              "name": "Hayfene",
              "id": 405,
              "prettyName": "hayfene-b-195"
            },
            "categoryId": 40000000070304,
            "category": {
              "name": "Baharat",
              "id": 40000000070304,
              "stockLegalAmount": 50,
              "prettyName": "baharat-c-112a0"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Diğer Baharat",
                "id": 40000000072956,
                "stockLegalAmount": 50,
                "prettyName": "diger-baharat-c-11cfc"
              },
              {
                "name": "Baharat",
                "id": 40000000070304,
                "stockLegalAmount": 50,
                "prettyName": "baharat-c-112a0"
              },
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013041/06013041-937011-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013041/06013041-937011.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013041/06013041-937011-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013041/06013041-937011-46x46.jpg"
                },
                "productId": 40000006013041
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013041/06013041_yan-b820da-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013041/06013041_yan-b820da.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013041/06013041_yan-b820da-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013041/06013041_yan-b820da-46x46.jpg"
                },
                "productId": 40000006013041
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "hayfene-5-element-baharati-140-g-p-5bc071",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "ATTRIBUTE": [
                {
                  "id": 40000000000281,
                  "type": "ATTRIBUTE",
                  "name": "Vegan",
                  "priority": 13,
                  "customId": "veganAttribute",
                  "value": "E"
                }
              ],
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "200"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "ESER MİKTARDA KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "140"
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
                  "value": "TR-34-K056383"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "035271"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [
              {
                "type": "ATTRIBUTE",
                "label": "Vegan",
                "description": "Hayvansal ya da hayvanlardan dolaylı olarak elde edilen (süt, yumurta, bal vb) hiçbir içeriği bulundurmadığı belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vegan.png",
                "tag": "Vegan",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              }
            ],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 12495,
            "salePrice": 12495,
            "loyaltyPrice": 8747,
            "shownPrice": 8747,
            "unitPrice": "(624,78 TL/Kg)",
            "discountRate": 30,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [
              {
                "name": "PRICE_PROMOTED",
                "value": "124,95 TL",
                "colorCodes": ["#808284", "#ffe200"]
              }
            ],
            "loyaltyPromotionId": 501727,
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178452",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000006013046,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "06013046",
            "name": "Hayfene Tüm Kanatlılar & Beyaz Etler İçin Baharat 115 G",
            "description": "<p><strong>İçindekiler</strong><br>Sarımsak, Soğan, Deniz Tuzu, Tatlı Pul Biber, Tatlı Kırmızı Biber, Zerdeçal, Karabiber, Kereviz, Domates, Özel Pul Biber, Fesleğen, Kimyon, Biberiye, Kekik, Tarçın.</p><p><strong>Alerjen Uyarısı</strong><br>ESER MİKTARDA KEREVİZ, HARDAL, SUSAM VE SERT KABUKLU MEYVELER İÇEREBİLİR.</p><p><strong>Net Miktar (g/ml)</strong><br>115</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056380</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Damak tadınıza göre 1 porsiyon yemek için 1 çay kaşığı baharatımızdan ekleyebilrsiniz.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Sarımsak, Soğan, Deniz Tuzu, Tatlı Pul Biber, Tatlı Kırmızı Biber, Zerdeçal, Karabiber, Kereviz, Domates, Özel Pul Biber, Fesleğen, Kimyon, Biberiye, Kekik, Tarçın.</p><p><strong>Alerjen Uyarısı</strong><br>ESER MİKTARDA KEREVİZ, HARDAL, SUSAM VE SERT KABUKLU MEYVELER İÇEREBİLİR.</p><p><strong>Net Miktar (g/ml)</strong><br>115</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056380</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Damak tadınıza göre 1 porsiyon yemek için 1 çay kaşığı baharatımızdan ekleyebilrsiniz.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 405,
            "brand": {
              "name": "Hayfene",
              "id": 405,
              "prettyName": "hayfene-b-195"
            },
            "categoryId": 40000000070304,
            "category": {
              "name": "Baharat",
              "id": 40000000070304,
              "stockLegalAmount": 50,
              "prettyName": "baharat-c-112a0"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Diğer Baharat",
                "id": 40000000072956,
                "stockLegalAmount": 50,
                "prettyName": "diger-baharat-c-11cfc"
              },
              {
                "name": "Baharat",
                "id": 40000000070304,
                "stockLegalAmount": 50,
                "prettyName": "baharat-c-112a0"
              },
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013046/06013046-21d35c-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013046/06013046-21d35c.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013046/06013046-21d35c-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013046/06013046-21d35c-46x46.jpg"
                },
                "productId": 40000006013046
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013046/06013046_yan-a943e5-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013046/06013046_yan-a943e5.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013046/06013046_yan-a943e5-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013046/06013046_yan-a943e5-46x46.jpg"
                },
                "productId": 40000006013046
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "hayfene-tum-kanatlilar-beyaz-etler-icin-baharat-115-g-p-5bc076",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "ATTRIBUTE": [
                {
                  "id": 40000000000281,
                  "type": "ATTRIBUTE",
                  "name": "Vegan",
                  "priority": 13,
                  "customId": "veganAttribute",
                  "value": "E"
                },
                {
                  "id": 40000000000282,
                  "type": "ATTRIBUTE",
                  "name": "Vejetaryen",
                  "priority": 14,
                  "customId": "vegetarianAttribute",
                  "value": "E"
                }
              ],
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "100"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Sarımsak, Soğan, Deniz Tuzu, Tatlı Pul Biber, Tatlı Kırmızı Biber, Zerdeçal, Karabiber, Kereviz, Domates, Özel Pul Biber, Fesleğen, Kimyon, Biberiye, Kekik, Tarçın."
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "ESER MİKTARDA KEREVİZ, HARDAL, SUSAM VE SERT KABUKLU MEYVELER İÇEREBİLİR."
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "115"
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
                  "value": "TR-34-K056380"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "035271"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Damak tadınıza göre 1 porsiyon yemek için 1 çay kaşığı baharatımızdan ekleyebilrsiniz."
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [
              {
                "type": "ATTRIBUTE",
                "label": "Vejetaryen",
                "description": "Et, balık, kümes hayvanları ve kabuklu deniz ürünleri içermediği belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vejetaryen.png",
                "tag": "Vejetaryen",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              },
              {
                "type": "ATTRIBUTE",
                "label": "Vegan",
                "description": "Hayvansal ya da hayvanlardan dolaylı olarak elde edilen (süt, yumurta, bal vb) hiçbir içeriği bulundurmadığı belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vegan.png",
                "tag": "Vegan",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              }
            ],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 12495,
            "salePrice": 12495,
            "loyaltyPrice": 8747,
            "shownPrice": 8747,
            "unitPrice": "(760,60 TL/Kg)",
            "discountRate": 30,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [
              {
                "name": "PRICE_PROMOTED",
                "value": "124,95 TL",
                "colorCodes": ["#808284", "#ffe200"]
              }
            ],
            "loyaltyPromotionId": 501727,
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178452",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000006013044,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "06013044",
            "name": "Hayfene Ateş Kırmızı Etler & Izgara Baharatı 100 G",
            "description": "<p><strong>İçindekiler</strong><br>Tatlı Pul Biber, Özel Pul Biber, Sumak, Deniz Tuzu, Sarımsak, Maya Ekstraktı, Kekik, İsot.</p><p><strong>Alerjen Uyarısı</strong><br>KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR</p><p><strong>Net Miktar (g/ml)</strong><br>100</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056379</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Tatlı Pul Biber, Özel Pul Biber, Sumak, Deniz Tuzu, Sarımsak, Maya Ekstraktı, Kekik, İsot.</p><p><strong>Alerjen Uyarısı</strong><br>KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR</p><p><strong>Net Miktar (g/ml)</strong><br>100</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-34-K056379</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>035271</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 405,
            "brand": {
              "name": "Hayfene",
              "id": 405,
              "prettyName": "hayfene-b-195"
            },
            "categoryId": 40000000070304,
            "category": {
              "name": "Baharat",
              "id": 40000000070304,
              "stockLegalAmount": 50,
              "prettyName": "baharat-c-112a0"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Diğer Baharat",
                "id": 40000000072956,
                "stockLegalAmount": 50,
                "prettyName": "diger-baharat-c-11cfc"
              },
              {
                "name": "Baharat",
                "id": 40000000070304,
                "stockLegalAmount": 50,
                "prettyName": "baharat-c-112a0"
              },
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013044/06013044-a588a3-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013044/06013044-a588a3.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013044/06013044-a588a3-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013044/06013044-a588a3-46x46.jpg"
                },
                "productId": 40000006013044
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/06013044/06013044_yan-9f62e0-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/06013044/06013044_yan-9f62e0.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/06013044/06013044_yan-9f62e0-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/06013044/06013044_yan-9f62e0-46x46.jpg"
                },
                "productId": 40000006013044
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "hayfene-ates-kirmizi-etler-izgara-baharati-100-g-p-5bc074",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "ATTRIBUTE": [
                {
                  "id": 40000000000281,
                  "type": "ATTRIBUTE",
                  "name": "Vegan",
                  "priority": 13,
                  "customId": "veganAttribute",
                  "value": "E"
                },
                {
                  "id": 40000000000282,
                  "type": "ATTRIBUTE",
                  "name": "Vejetaryen",
                  "priority": 14,
                  "customId": "vegetarianAttribute",
                  "value": "E"
                }
              ],
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "100"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Tatlı Pul Biber, Özel Pul Biber, Sumak, Deniz Tuzu, Sarımsak, Maya Ekstraktı, Kekik, İsot."
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "KEREVİZ HARDAL SUSAM SERT KABUKLU MEYVE İÇEREBİLİR"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "100"
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
                  "value": "TR-34-K056379"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "UCUZCULAR GIDA MADDELERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "035271"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "MISIR ÇARŞISI İÇİ NO:51  EMİNÖNÜ İSTANBUL"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [
              {
                "type": "ATTRIBUTE",
                "label": "Vejetaryen",
                "description": "Et, balık, kümes hayvanları ve kabuklu deniz ürünleri içermediği belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vejetaryen.png",
                "tag": "Vejetaryen",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              },
              {
                "type": "ATTRIBUTE",
                "label": "Vegan",
                "description": "Hayvansal ya da hayvanlardan dolaylı olarak elde edilen (süt, yumurta, bal vb) hiçbir içeriği bulundurmadığı belirtilen ürünlerdir.",
                "iconUrl": "https://images.migrosone.com/sanalmarket/custom/attributes/vegan.png",
                "tag": "Vegan",
                "legalWarning": "Yalnızca bu bilgilere güvenmemenizi ve ürün bilgilerini/etiketlerini her zaman kontrol etmenizi öneririz."
              }
            ],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 12495,
            "salePrice": 12495,
            "loyaltyPrice": 8747,
            "shownPrice": 8747,
            "unitPrice": "(874,70 TL/Kg)",
            "discountRate": 30,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [
              {
                "name": "PRICE_PROMOTED",
                "value": "124,95 TL",
                "colorCodes": ["#808284", "#ffe200"]
              }
            ],
            "loyaltyPromotionId": 501727,
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178452",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          }
        ]
      },
      {
        "title": "Seç Al Ürünleri! ",
        "name": "Seç Al Ürünleri! ",
        "description": "12- 22 Eylül 2025 tarihleri arasında 50 TL ve üzeri alışverişlerde farklı ürünlerde farklı indirim oranları uygulanacaktır. Kampanyadan faydalanabilmek için kampanyalı ürünler haricinde 50 TL'lik sepet oluşturman gerekmektedir. Her 50 TL'lik alışverişte seç al kampanyası geçerli olacaktır. İndirim sepette düşecektir. Kampanyalı ürünler mağaza stoklarıyla sınırlıdır. Ürünler dönemsel olarak değişmektedir. Ürün stoklarının anlık değişkenlik göstermesi nedeniyle siparişinizde tedarik edilemeyen ürünler bulunabilir. Bu durumunda, kampanya koşullarını sağladığınız ölçüde indirimden faydalanabilirsiniz. Satın almış olduğunuz ürün/ürünlerde iade talebinde bulunduğunuzda; sipariş içerisinde yararlanmış olduğunuz kampanya koşullarına uygun olarak indirim tutarı, iadesi talep edilen ürünlere bedeli oranında yansıtılacak olup iade ettiğiniz üründen söz konusu indirim tutarı düşülerek ücret iadesi gerçekleştirilecektir.",
        "storeProductInfos": [
          {
            "id": 40000030569720,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "30569720",
            "name": "Vanish Kosla Multipower Sıvı Leke Çıkarıcı ve Deterjan Güçlendirici 1000 ml Renkliler İçin",
            "description": "<p>Vanish Kosla Gold, renklileriniz için en iyisi! Vanish Kosla Gold, güçlü formülü sayesinde lekeleri tek seferde ve soğuk suda bile çıkarır.</p><p>Kullanım Talimatı:</p><p>Ön İşlem:</p><p>1. Lekelerin üzerine 1 çay kaşığı (2 ml.) Vanish Kosla Oxi Action Gold&nbsp;Sıvı dökün.</p><p>2. En fazla 10 dakika çamaşırlarınızı bu şekilde bekletin.</p><p>3. Daha sonra çamaşır makinenizin deterjan bölümüne deterjanınıza Vanish Kosla Oxi Action Gold Sıvı ekleyip normal yıkamanıza devam edin.</p><p>Suya Bastırma:</p><p>1. 4 litre suya (en fazla 40°C) 1,5 çay bardağı (100 ml.) Vanish Kosla Oxi Action Gold Sıvı dökün.</p><p>2. Beyazlarınızı en fazla 6 saat bu suda bekletin.</p><p>3. Çamaşırlarınızı sudan çıkarttıktan sonra makinede yıkayın veya iyice durulayın.</p><p>Çamaşır Makinesinde Yıkama:</p><p>1.Deterjan gözüne deterjana ek olarak kullanıma uygundur.</p><p>2.Normal lekeler için 50ml, zorlu ve kurumuş lekeler için 100ml</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>RECKITT BENCKISER EV VE HİJYEN ÜRÜNLERİ A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>036069</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENTEPE MAH.BUYUKDERE CD. TEKFEN TOWER NO;209/2 4.LEVENT/ŞİŞLİ İSTANBUL</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p>Vanish Kosla Gold, renklileriniz için en iyisi! Vanish Kosla Gold, güçlü formülü sayesinde lekeleri tek seferde ve soğuk suda bile çıkarır.</p><p>Kullanım Talimatı:</p><p>Ön İşlem:</p><p>1. Lekelerin üzerine 1 çay kaşığı (2 ml.) Vanish Kosla Oxi Action Gold&nbsp;Sıvı dökün.</p><p>2. En fazla 10 dakika çamaşırlarınızı bu şekilde bekletin.</p><p>3. Daha sonra çamaşır makinenizin deterjan bölümüne deterjanınıza Vanish Kosla Oxi Action Gold Sıvı ekleyip normal yıkamanıza devam edin.</p><p>Suya Bastırma:</p><p>1. 4 litre suya (en fazla 40°C) 1,5 çay bardağı (100 ml.) Vanish Kosla Oxi Action Gold Sıvı dökün.</p><p>2. Beyazlarınızı en fazla 6 saat bu suda bekletin.</p><p>3. Çamaşırlarınızı sudan çıkarttıktan sonra makinede yıkayın veya iyice durulayın.</p><p>Çamaşır Makinesinde Yıkama:</p><p>1.Deterjan gözüne deterjana ek olarak kullanıma uygundur.</p><p>2.Normal lekeler için 50ml, zorlu ve kurumuş lekeler için 100ml</p>",
            "information": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>RECKITT BENCKISER EV VE HİJYEN ÜRÜNLERİ A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>036069</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENTEPE MAH.BUYUKDERE CD. TEKFEN TOWER NO;209/2 4.LEVENT/ŞİŞLİ İSTANBUL</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 1833,
            "brand": {
              "name": "Vanish",
              "id": 1833,
              "prettyName": "vanish-b-729"
            },
            "categoryId": 40000000070321,
            "category": {
              "name": "Çamaşır",
              "id": 40000000070321,
              "stockLegalAmount": 20,
              "prettyName": "camasir-c-112b1"
            },
            "categoryAscendants": [
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Çamaşır",
                "id": 40000000070321,
                "stockLegalAmount": 20,
                "prettyName": "camasir-c-112b1"
              },
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              },
              {
                "name": "Tertemiz Çarşamba\uD83E\uDDFC",
                "id": 40000196901528,
                "prettyName": "tertemiz-carsamba-l-bbc7a98"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569720/30569720_1-1587db-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569720/30569720_1-1587db.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569720/30569720_1-1587db-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569720/30569720_1-1587db-46x46.jpg"
                },
                "productId": 40000030569720
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569720/30569720_2-a6201e-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569720/30569720_2-a6201e.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569720/30569720_2-a6201e-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569720/30569720_2-a6201e-46x46.jpg"
                },
                "productId": 40000030569720
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569720/30569720_3-895260-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569720/30569720_3-895260.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569720/30569720_3-895260-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569720/30569720_3-895260-46x46.jpg"
                },
                "productId": 40000030569720
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569720/30569720_4-89ebe7-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569720/30569720_4-89ebe7.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569720/30569720_4-89ebe7-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569720/30569720_4-89ebe7-46x46.jpg"
                },
                "productId": 40000030569720
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569720/30569720_5-d7a0ed-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569720/30569720_5-d7a0ed.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569720/30569720_5-d7a0ed-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569720/30569720_5-d7a0ed-46x46.jpg"
                },
                "productId": 40000030569720
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/30569720/30569720_bicakizi-7dfe34.jpg"
                },
                "productId": 40000030569720
              }
            ],
            "energyImages": [],
            "prettyName": "vanish-kosla-multipower-sivi-leke-cikarici-ve-deterjan-guclendirici-1000-ml-renkliler-icin-p-1d274f8",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 3,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "1100"
                }
              ],
              "MISC": [
                {
                  "id": 40000000000051,
                  "type": "MISC",
                  "name": "Ürün Özellikleri",
                  "priority": 0,
                  "customId": "productDetailsImage",
                  "value": "https://images.migrosone.com/hemen/custom/30569720_rc-d72bf772.jpg"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "RECKITT BENCKISER EV VE HİJYEN ÜRÜNLERİ A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "036069"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "ESENTEPE MAH.BUYUKDERE CD. TEKFEN TOWER NO;209/2 4.LEVENT/ŞİŞLİ İSTANBUL"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 149,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 6,
            "maxAmountDescription": "Bu üründen en fazla 6 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 20 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 28095,
            "salePrice": 28095,
            "loyaltyPrice": 28095,
            "shownPrice": 28095,
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178453",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000031160159,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "31160159",
            "name": "Sleepy Yüzey Temizlik Havlusu Portakal 100'lü",
            "description": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>ERUSLU SAĞLIK ÜRÜNLERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705863</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>4.ORGANİZE SAN.BÖL. 83424 NOLU CD. NO:3 ŞEHİTKAMİL GAZİANTEP</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>ERUSLU SAĞLIK ÜRÜNLERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705863</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>4.ORGANİZE SAN.BÖL. 83424 NOLU CD. NO:3 ŞEHİTKAMİL GAZİANTEP</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 5176,
            "brand": {
              "name": "Sleepy",
              "id": 5176,
              "prettyName": "sleepy-b-1438"
            },
            "categoryId": 40000000070326,
            "category": {
              "name": "Kağıt",
              "id": 40000000070326,
              "stockLegalAmount": 20,
              "prettyName": "kagit-c-112b6"
            },
            "categoryAscendants": [
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Kağıt Temizlik Bezi",
                "id": 40000000072854,
                "stockLegalAmount": 20,
                "prettyName": "kagit-temizlik-bezi-c-11c96"
              },
              {
                "name": "Kağıt",
                "id": 40000000070326,
                "stockLegalAmount": 20,
                "prettyName": "kagit-c-112b6"
              },
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "lists": [
              {
                "name": "Geniş Portföy",
                "id": 40000196892911,
                "prettyName": "genis-portfoy-l-bbc58ef"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/31160159/31160159_1-889444-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/31160159/31160159_1-889444.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/31160159/31160159_1-889444-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/31160159/31160159_1-889444-46x46.jpg"
                },
                "productId": 40000031160159
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/31160159/31160159_bicakizi-e89c51.png"
                },
                "productId": 40000031160159
              }
            ],
            "energyImages": [],
            "prettyName": "sleepy-yuzey-temizlik-havlusu-portakal-100lu-p-1db775f",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "800"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "ERUSLU SAĞLIK ÜRÜNLERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "705863"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "4.ORGANİZE SAN.BÖL. 83424 NOLU CD. NO:3 ŞEHİTKAMİL GAZİANTEP"
                }
              ],
              "PL": [
                {
                  "id": 40000000000193,
                  "type": "PL",
                  "name": "Sadece Migrosta",
                  "priority": 1,
                  "customId": "onlyInMigros",
                  "value": "E"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 69,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 2,
            "maxAmountDescription": "Bu üründen en fazla 2 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 20 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 13350,
            "salePrice": 13350,
            "loyaltyPrice": 13350,
            "shownPrice": 13350,
            "unitPrice": "(1,33 TL/Adet)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178453",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000040310013,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "40310013",
            "name": "Huub Slim Askı 10'lu",
            "description": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>LEHOME EV BAKIM ÜRÜNLERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>037774</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>AKÇABURGAZ MAH.1573.SK. NO:1 İÇ KAPI NO:42 ESENYURT İSTANBUL</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>LEHOME EV BAKIM ÜRÜNLERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>037774</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>AKÇABURGAZ MAH.1573.SK. NO:1 İÇ KAPI NO:42 ESENYURT İSTANBUL</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 7379,
            "brand": {
              "name": "Huub",
              "id": 7379,
              "prettyName": "huub-b-1cd3"
            },
            "categoryId": 40000000070352,
            "category": {
              "name": "Hırdavat",
              "id": 40000000070352,
              "stockLegalAmount": 10,
              "prettyName": "hirdavat-c-112d0"
            },
            "categoryAscendants": [
              {
                "name": "Ev  Yaşam",
                "id": 40000000070345,
                "stockLegalAmount": 10,
                "prettyName": "ev-yasam-c-112c9"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Kıyafet",
                "id": 40000000073106,
                "stockLegalAmount": 10,
                "prettyName": "kiyafet-c-11d92"
              },
              {
                "name": "Hırdavat",
                "id": 40000000070352,
                "stockLegalAmount": 10,
                "prettyName": "hirdavat-c-112d0"
              },
              {
                "name": "Ev  Yaşam",
                "id": 40000000070345,
                "stockLegalAmount": 10,
                "prettyName": "ev-yasam-c-112c9"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/40310013/40310013_1-f7a820-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/40310013/40310013_1-f7a820.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/40310013/40310013_1-f7a820-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/40310013/40310013_1-f7a820-46x46.jpg"
                },
                "productId": 40000040310013
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/40310013/40310013_2-3c8ada-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/40310013/40310013_2-3c8ada.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/40310013/40310013_2-3c8ada-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/40310013/40310013_2-3c8ada-46x46.jpg"
                },
                "productId": 40000040310013
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/40310013/40310013_3-9313ab-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/40310013/40310013_3-9313ab.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/40310013/40310013_3-9313ab-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/40310013/40310013_3-9313ab-46x46.jpg"
                },
                "productId": 40000040310013
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "huub-slim-aski-10lu-p-26714fd",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 3,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "400"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "LEHOME EV BAKIM ÜRÜNLERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "037774"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "AKÇABURGAZ MAH.1573.SK. NO:1 İÇ KAPI NO:42 ESENYURT İSTANBUL"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 79,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 6,
            "maxAmountDescription": "Bu üründen en fazla 6 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 10 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 13995,
            "salePrice": 13995,
            "loyaltyPrice": 13995,
            "shownPrice": 13995,
            "unitPrice": "(13,99 TL/Adet)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178453",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000014209464,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "14209464",
            "name": "Namet Dana Kasap Sucuk 250 G",
            "description": "<p><strong>İçindekiler</strong><br>DANA ETİ VE YAĞI BAHARAT KARIŞIMI TUZ SARIMSAK ANTİOKSİDAN KORUYUCU</p><p><strong>Alerjen Uyarısı</strong><br>SOYA VE SOYA TÜREVLERİ İLE SÜT VE SÜT ÜRÜNLERİ İÇERİR.</p><p><strong>Net Miktar (g/ml)</strong><br>250</p><p><strong>Saklama Koşulları</strong><br>0-4 °C muhafaza ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR 41 - 0027</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>NAMET GIDA SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>024840</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>AKSE MAH.FEVZİ ÇAKMAK CADDESİ NO.134 ÇAYIROVA KOCAELİ</p><p><strong>Kullanım Önerileri</strong><br>0/+4 DERECEDE ORJİNAL AMBALAJINDA STT YE KADAR TÜKETİLMELİ.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>DANA ETİ VE YAĞI BAHARAT KARIŞIMI TUZ SARIMSAK ANTİOKSİDAN KORUYUCU</p><p><strong>Alerjen Uyarısı</strong><br>SOYA VE SOYA TÜREVLERİ İLE SÜT VE SÜT ÜRÜNLERİ İÇERİR.</p><p><strong>Net Miktar (g/ml)</strong><br>250</p><p><strong>Saklama Koşulları</strong><br>0-4 °C muhafaza ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR 41 - 0027</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>NAMET GIDA SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>024840</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>AKSE MAH.FEVZİ ÇAKMAK CADDESİ NO.134 ÇAYIROVA KOCAELİ</p><p><strong>Kullanım Önerileri</strong><br>0/+4 DERECEDE ORJİNAL AMBALAJINDA STT YE KADAR TÜKETİLMELİ.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 790,
            "brand": {
              "name": "Namet",
              "id": 790,
              "prettyName": "namet-b-316"
            },
            "categoryId": 40000000070299,
            "category": {
              "name": "Et Şarküteri",
              "id": 40000000070299,
              "stockLegalAmount": 50,
              "prettyName": "et-sarkuteri-c-1129b"
            },
            "categoryAscendants": [
              {
                "name": "Süt & Kahvaltılık",
                "id": 40000000070285,
                "stockLegalAmount": 50,
                "prettyName": "sut-kahvaltilik-c-1128d"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "dana",
                "id": 40000000072637,
                "stockLegalAmount": 50,
                "prettyName": "dana-c-11bbd"
              },
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
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/14209464/14209464_1-1cc00d-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/14209464/14209464_1-1cc00d.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/14209464/14209464_1-1cc00d-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/14209464/14209464_1-1cc00d-46x46.jpg"
                },
                "productId": 40000014209464
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/14209464/14209464_bicakizi-a30c0c.jpg"
                },
                "productId": 40000014209464
              }
            ],
            "energyImages": [],
            "prettyName": "namet-dana-kasap-sucuk-250-g-p-d8d1b8",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "300"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "DANA ETİ VE YAĞI BAHARAT KARIŞIMI TUZ SARIMSAK ANTİOKSİDAN KORUYUCU"
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "SOYA VE SOYA TÜREVLERİ İLE SÜT VE SÜT ÜRÜNLERİ İÇERİR."
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "250"
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
                  "value": "TR 41 - 0027"
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
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "AKSE MAH.FEVZİ ÇAKMAK CADDESİ NO.134 ÇAYIROVA KOCAELİ"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "0/+4 DERECEDE ORJİNAL AMBALAJINDA STT YE KADAR TÜKETİLMELİ."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "440.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "1820.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "40.0"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "21.0"
                },
                {
                  "id": 40000000000070,
                  "type": "NUTRITIONAL",
                  "name": "Trans yağ (g)",
                  "priority": 5,
                  "value": "0.0"
                },
                {
                  "id": 40000000000071,
                  "type": "NUTRITIONAL",
                  "name": "Tekli doymamış yağ (g)",
                  "priority": 6,
                  "value": "0.0"
                },
                {
                  "id": 40000000000072,
                  "type": "NUTRITIONAL",
                  "name": "Çoklu doymamış yağ (g)",
                  "priority": 7,
                  "value": "0.0"
                },
                {
                  "id": 40000000000032,
                  "type": "NUTRITIONAL",
                  "name": "Kolesterol (mg)",
                  "priority": 8,
                  "value": "0.0"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "4.0"
                },
                {
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "0.5"
                },
                {
                  "id": 40000000000073,
                  "type": "NUTRITIONAL",
                  "name": "Şeker Alkolü (g)",
                  "priority": 11,
                  "value": "0.0"
                },
                {
                  "id": 40000000000074,
                  "type": "NUTRITIONAL",
                  "name": "Nişasta (g)",
                  "priority": 12,
                  "value": "0.0"
                },
                {
                  "id": 40000000000035,
                  "type": "NUTRITIONAL",
                  "name": "Lif (g)",
                  "priority": 13,
                  "value": "0.0"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "16.0"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "2.0"
                },
                {
                  "id": 40000000000037,
                  "type": "NUTRITIONAL",
                  "name": "Sodyum (g)",
                  "priority": 16,
                  "value": "0.0"
                },
                {
                  "id": 40000000000049,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin A (µg)",
                  "priority": 17,
                  "value": "0.0"
                },
                {
                  "id": 40000000000050,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin D (µg)",
                  "priority": 18,
                  "value": "0.0"
                },
                {
                  "id": 40000000000075,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin E (mg)",
                  "priority": 19,
                  "value": "0.0"
                },
                {
                  "id": 40000000000076,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin K (µg)",
                  "priority": 20,
                  "value": "0.0"
                },
                {
                  "id": 40000000000077,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin C (mg)",
                  "priority": 21,
                  "value": "0.0"
                },
                {
                  "id": 40000000000078,
                  "type": "NUTRITIONAL",
                  "name": "Tiamin (mg)",
                  "priority": 22,
                  "value": "0.0"
                },
                {
                  "id": 40000000000042,
                  "type": "NUTRITIONAL",
                  "name": "Riboflavin (mg)",
                  "priority": 23,
                  "value": "0.0"
                },
                {
                  "id": 40000000000043,
                  "type": "NUTRITIONAL",
                  "name": "Niacin (mg)",
                  "priority": 24,
                  "value": "0.0"
                },
                {
                  "id": 40000000000041,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin B6 (mg)",
                  "priority": 25,
                  "value": "0.0"
                },
                {
                  "id": 40000000000044,
                  "type": "NUTRITIONAL",
                  "name": "Folik asit (µg)",
                  "priority": 26,
                  "value": "0.0"
                },
                {
                  "id": 40000000000040,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin B12 (µg)",
                  "priority": 27,
                  "value": "0.0"
                },
                {
                  "id": 40000000000079,
                  "type": "NUTRITIONAL",
                  "name": "Biotin (µg)",
                  "priority": 28,
                  "value": "0.0"
                },
                {
                  "id": 40000000000080,
                  "type": "NUTRITIONAL",
                  "name": "Pantotenik Asit (mg)",
                  "priority": 29,
                  "value": "0.0"
                },
                {
                  "id": 40000000000046,
                  "type": "NUTRITIONAL",
                  "name": "Potasyum (mg)",
                  "priority": 30,
                  "value": "0.0"
                },
                {
                  "id": 40000000000081,
                  "type": "NUTRITIONAL",
                  "name": "Klorur (mg)",
                  "priority": 31,
                  "value": "0.0"
                },
                {
                  "id": 40000000000047,
                  "type": "NUTRITIONAL",
                  "name": "Kalsiyum (mg)",
                  "priority": 32,
                  "value": "0.0"
                },
                {
                  "id": 40000000000048,
                  "type": "NUTRITIONAL",
                  "name": "Fosfor (mg)",
                  "priority": 33,
                  "value": "0.0"
                },
                {
                  "id": 40000000000082,
                  "type": "NUTRITIONAL",
                  "name": "Magnezyum (mg)",
                  "priority": 34,
                  "value": "0.0"
                },
                {
                  "id": 40000000000045,
                  "type": "NUTRITIONAL",
                  "name": "Demir (mg)",
                  "priority": 35,
                  "value": "0.0"
                },
                {
                  "id": 40000000000083,
                  "type": "NUTRITIONAL",
                  "name": "Çinko (mg)",
                  "priority": 36,
                  "value": "0.0"
                },
                {
                  "id": 40000000000084,
                  "type": "NUTRITIONAL",
                  "name": "Bakır (mg)",
                  "priority": 37,
                  "value": "0.0"
                },
                {
                  "id": 40000000000085,
                  "type": "NUTRITIONAL",
                  "name": "Manganez (mg)",
                  "priority": 38,
                  "value": "0.0"
                },
                {
                  "id": 40000000000086,
                  "type": "NUTRITIONAL",
                  "name": "Florur (mg)",
                  "priority": 39,
                  "value": "0.0"
                },
                {
                  "id": 40000000000087,
                  "type": "NUTRITIONAL",
                  "name": "Selenyum (µg)",
                  "priority": 40,
                  "value": "0.0"
                },
                {
                  "id": 40000000000088,
                  "type": "NUTRITIONAL",
                  "name": "Krom (µg)",
                  "priority": 41,
                  "value": "0.0"
                },
                {
                  "id": 40000000000089,
                  "type": "NUTRITIONAL",
                  "name": "Molibden (µg)",
                  "priority": 42,
                  "value": "0.0"
                },
                {
                  "id": 40000000000090,
                  "type": "NUTRITIONAL",
                  "name": "İyot (µg)",
                  "priority": 43,
                  "value": "0.0"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 179 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 20000,
            "salePrice": 20000,
            "loyaltyPrice": 20000,
            "shownPrice": 20000,
            "unitPrice": "(800,00 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178453",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000030569718,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "30569718",
            "name": "Vanish Kosla Multipower Sıvı Leke Çıkarıcı ve Deterjan Güçlendirici 1000 ml Beyazlar İçin",
            "description": "<p>Vanish Kosla Kristal Gold Beyaz, beyazlarınız için en iyisi! Vanish Kosla Kristal Gold Beyaz, güçlü formülü sayesinde beyazlarınız hep bembeyaz. Üstelik 50.yıkamada bile! Güçlü ve güvenli formülü sayesinde beyazlarınızdaki lekeleri tek seferde çıkarır ve beyazlıklarını korur.</p><p>Vanish ile asla sararma olmaz!</p><p>Kullanım Talimatı:</p><p>Ön İşlem:</p><p>1. Lekelerin üzerine 1 çay kaşığı (2 ml.) Vanish Oxi Action Kristal Beyaz Sıvı dökün.</p><p>2. En fazla 10 dakika çamaşırlarınızı bu şekilde bekletin.</p><p>3. Daha sonra çamaşır makinenizin deterjan bölümüne deterjanınıza Vanish Kosla Oxi Action Kristal Beyaz Sıvı ekleyip normal yıkamanıza devam edin.</p><p>Suya Bastırma:</p><p>1. 4 litre suya (en fazla 40°C) 1,5 çay bardağı (100 ml.) Vanish Oxi Action Kristal Beyaz Sıvı dökün.</p><p>2. Beyazlarınızı en fazla 6 saat bu suda bekletin.</p><p>3. Çamaşırlarınızı sudan çıkarttıktan sonra makinede yıkayın veya iyice durulayın.</p><p>Çamaşır Makinesinde Yıkama:</p><p>1.Deterjan gözüne deterjana ek olarak kullanıma uygundur.</p><p>2.Normal lekeler için 50ml, zorlu ve kurumuş lekeler için 100ml</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>RECKITT BENCKISER EV VE HİJYEN ÜRÜNLERİ A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>036069</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENTEPE MAH.BUYUKDERE CD. TEKFEN TOWER NO;209/2 4.LEVENT/ŞİŞLİ İSTANBUL</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p>Vanish Kosla Kristal Gold Beyaz, beyazlarınız için en iyisi! Vanish Kosla Kristal Gold Beyaz, güçlü formülü sayesinde beyazlarınız hep bembeyaz. Üstelik 50.yıkamada bile! Güçlü ve güvenli formülü sayesinde beyazlarınızdaki lekeleri tek seferde çıkarır ve beyazlıklarını korur.</p><p>Vanish ile asla sararma olmaz!</p><p>Kullanım Talimatı:</p><p>Ön İşlem:</p><p>1. Lekelerin üzerine 1 çay kaşığı (2 ml.) Vanish Oxi Action Kristal Beyaz Sıvı dökün.</p><p>2. En fazla 10 dakika çamaşırlarınızı bu şekilde bekletin.</p><p>3. Daha sonra çamaşır makinenizin deterjan bölümüne deterjanınıza Vanish Kosla Oxi Action Kristal Beyaz Sıvı ekleyip normal yıkamanıza devam edin.</p><p>Suya Bastırma:</p><p>1. 4 litre suya (en fazla 40°C) 1,5 çay bardağı (100 ml.) Vanish Oxi Action Kristal Beyaz Sıvı dökün.</p><p>2. Beyazlarınızı en fazla 6 saat bu suda bekletin.</p><p>3. Çamaşırlarınızı sudan çıkarttıktan sonra makinede yıkayın veya iyice durulayın.</p><p>Çamaşır Makinesinde Yıkama:</p><p>1.Deterjan gözüne deterjana ek olarak kullanıma uygundur.</p><p>2.Normal lekeler için 50ml, zorlu ve kurumuş lekeler için 100ml</p>",
            "information": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>RECKITT BENCKISER EV VE HİJYEN ÜRÜNLERİ A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>036069</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENTEPE MAH.BUYUKDERE CD. TEKFEN TOWER NO;209/2 4.LEVENT/ŞİŞLİ İSTANBUL</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 1833,
            "brand": {
              "name": "Vanish",
              "id": 1833,
              "prettyName": "vanish-b-729"
            },
            "categoryId": 40000000070321,
            "category": {
              "name": "Çamaşır",
              "id": 40000000070321,
              "stockLegalAmount": 20,
              "prettyName": "camasir-c-112b1"
            },
            "categoryAscendants": [
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Çamaşır",
                "id": 40000000070321,
                "stockLegalAmount": 20,
                "prettyName": "camasir-c-112b1"
              },
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              },
              {
                "name": "Tertemiz Çarşamba\uD83E\uDDFC",
                "id": 40000196901528,
                "prettyName": "tertemiz-carsamba-l-bbc7a98"
              },
              {
                "name": "Geniş Portföy",
                "id": 40000196892911,
                "prettyName": "genis-portfoy-l-bbc58ef"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569718/30569718_1-d77e71-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569718/30569718_1-d77e71.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569718/30569718_1-d77e71-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569718/30569718_1-d77e71-46x46.jpg"
                },
                "productId": 40000030569718
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569718/30569718_2-3ef703-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569718/30569718_2-3ef703.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569718/30569718_2-3ef703-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569718/30569718_2-3ef703-46x46.jpg"
                },
                "productId": 40000030569718
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569718/30569718_3-47cd73-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569718/30569718_3-47cd73.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569718/30569718_3-47cd73-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569718/30569718_3-47cd73-46x46.jpg"
                },
                "productId": 40000030569718
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569718/30569718_4-7643ba-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569718/30569718_4-7643ba.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569718/30569718_4-7643ba-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569718/30569718_4-7643ba-46x46.jpg"
                },
                "productId": 40000030569718
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30569718/30569718_5-edf0bf-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30569718/30569718_5-edf0bf.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30569718/30569718_5-edf0bf-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30569718/30569718_5-edf0bf-46x46.jpg"
                },
                "productId": 40000030569718
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/30569718/30569718_bicakizi-731fa7.jpg"
                },
                "productId": 40000030569718
              }
            ],
            "energyImages": [],
            "prettyName": "vanish-kosla-multipower-sivi-leke-cikarici-ve-deterjan-guclendirici-1000-ml-beyazlar-icin-p-1d274f6",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 3,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "1000"
                }
              ],
              "MISC": [
                {
                  "id": 40000000000051,
                  "type": "MISC",
                  "name": "Ürün Özellikleri",
                  "priority": 0,
                  "customId": "productDetailsImage",
                  "value": "https://images.migrosone.com/hemen/custom/30569718_rc-7a66a500.jpg"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "RECKITT BENCKISER EV VE HİJYEN ÜRÜNLERİ A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "036069"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "ESENTEPE MAH.BUYUKDERE CD. TEKFEN TOWER NO;209/2 4.LEVENT/ŞİŞLİ İSTANBUL"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 149,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 6,
            "maxAmountDescription": "Bu üründen en fazla 6 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 20 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 28095,
            "salePrice": 28095,
            "loyaltyPrice": 28095,
            "shownPrice": 28095,
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178453",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000010100025,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "10100025",
            "name": "Altınkılıç Tam Yağlı Taze Kaşar 600 G",
            "description": "<p><strong>İçindekiler</strong><br>Pastörize İnek Sütü, Tuz, Peynir Kültürü ve  Peynir Mayası</p><p><strong>Alerjen Uyarısı</strong><br>Laktoz içerir</p><p><strong>Net Miktar (g/ml)</strong><br>600</p><p><strong>Saklama Koşulları</strong><br>0-4 °C muhafaza ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>ALTINKILIÇ GIDA VE SÜT SAN.TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>030580</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>KOCATEPE MAH.GÜMRÜK İSKELESİ CD. 89 77 BAYRAMPAŞA İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Soğukta muhafaza ediniz.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Pastörize İnek Sütü, Tuz, Peynir Kültürü ve  Peynir Mayası</p><p><strong>Alerjen Uyarısı</strong><br>Laktoz içerir</p><p><strong>Net Miktar (g/ml)</strong><br>600</p><p><strong>Saklama Koşulları</strong><br>0-4 °C muhafaza ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>ALTINKILIÇ GIDA VE SÜT SAN.TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>030580</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>KOCATEPE MAH.GÜMRÜK İSKELESİ CD. 89 77 BAYRAMPAŞA İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Soğukta muhafaza ediniz.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 172,
            "brand": {
              "name": "Altınkılıç",
              "id": 172,
              "prettyName": "altinkilic-b-ac"
            },
            "categoryId": 40000000070290,
            "category": {
              "name": "Peynir",
              "id": 40000000070290,
              "stockLegalAmount": 50,
              "prettyName": "peynir-c-11292"
            },
            "categoryAscendants": [
              {
                "name": "Süt & Kahvaltılık",
                "id": 40000000070285,
                "stockLegalAmount": 50,
                "prettyName": "sut-kahvaltilik-c-1128d"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Kaşar Peynir",
                "id": 40000000073715,
                "stockLegalAmount": 50,
                "prettyName": "kasar-peynir-c-11ff3"
              },
              {
                "name": "Peynir",
                "id": 40000000070290,
                "stockLegalAmount": 50,
                "prettyName": "peynir-c-11292"
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
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              },
              {
                "name": "Geniş Portföy",
                "id": 40000196892911,
                "prettyName": "genis-portfoy-l-bbc58ef"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/10100025/10100025_1-4c7cb8-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/10100025/10100025_1-4c7cb8.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/10100025/10100025_1-4c7cb8-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/10100025/10100025_1-4c7cb8-46x46.jpg"
                },
                "productId": 40000010100025
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "altinkilic-tam-yagli-taze-kasar-600-g-p-9a1d39",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "600"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Pastörize İnek Sütü, Tuz, Peynir Kültürü ve  Peynir Mayası"
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "Laktoz içerir"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "600"
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
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "ALTINKILIÇ GIDA VE SÜT SAN.TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "030580"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "KOCATEPE MAH.GÜMRÜK İSKELESİ CD. 89 77 BAYRAMPAŞA İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Soğukta muhafaza ediniz."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "321.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "1333.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "25.0"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "16.0"
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
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "2.0"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "22.0"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "1.5"
                },
                {
                  "id": 40000000000047,
                  "type": "NUTRITIONAL",
                  "name": "Kalsiyum (mg)",
                  "priority": 32,
                  "value": "550.0"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 189,9 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 32995,
            "salePrice": 32995,
            "loyaltyPrice": 32995,
            "shownPrice": 32995,
            "unitPrice": "(549,91 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178453",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000046040053,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "46040053",
            "name": "Banvit Piliç Nugget 700 G",
            "description": "<p><strong>Banvit Piliç Nugget</strong>, şekillendirilmiş taze piliç etinin önce özel bir harçla ardından ekmek kırıntılarıyla kaplanması ile elde edilir.  Pratik bir şekilde hazırlanabilen ürün, size lezzetli bir öğün alternatifi sunar. </p><p><br></p><p>Ürün, pişmiş olup sadece ısıtılarak tüketilebilir. </p><p><br></p><p><br></p><p><strong>İçindekiler</strong><br>Piliç eti ve yağı, galeta unu (buğday unu içerir), nişasta, bitkisel lif (selüloz), tuz, baharat karışımı, stabilizör (sodyum polifosfat), koruyucu (sodyum laktat, sodyumasetat), kaplama malzemesi %30 (buğday unu, buğday nişastası, tuz, baharat karışımı, maya, tatlı kırmızı biber, kereviz, zerdeçal).Eser miktarda hardal, susam, süt, yumurta içerebilir.</p><p><strong>Alerjen Uyarısı</strong><br>Eser miktarda hardal, susam, süt, yumurta içerebilir.\r\nGaleta unu, buğday unu, buğday nişastası ve kereviz içerir.</p><p><strong>Net Miktar (g/ml)</strong><br>700</p><p><strong>Saklama Koşulları</strong><br>0-4 °C muhafaza ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR10-0024</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>BANVİT BANDIRMA VİTAMİNLİ YEM SAN.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>702900</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BALIKESİR ASFALTI 8.KM.  BANDIRMA BALIKESİR</p><p><strong>Kullanım Önerileri</strong><br>Fırın (Önceden ısıtılmış, 200C): 6 dakika ısıtınız.\r\nTava (önceden ısıtılmış, yağlanmış): Her bir  yüzünü 2,5'ar dakika ısıtınız.\r\nDerinyağ: Kızgın yağda (180C)1,5 dakika ısıtınız.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p><strong>Banvit Piliç Nugget</strong>, şekillendirilmiş taze piliç etinin önce özel bir harçla ardından ekmek kırıntılarıyla kaplanması ile elde edilir.  Pratik bir şekilde hazırlanabilen ürün, size lezzetli bir öğün alternatifi sunar. </p><p><br></p><p>Ürün, pişmiş olup sadece ısıtılarak tüketilebilir. </p><p><br></p><p><br></p>",
            "information": "<p><strong>İçindekiler</strong><br>Piliç eti ve yağı, galeta unu (buğday unu içerir), nişasta, bitkisel lif (selüloz), tuz, baharat karışımı, stabilizör (sodyum polifosfat), koruyucu (sodyum laktat, sodyumasetat), kaplama malzemesi %30 (buğday unu, buğday nişastası, tuz, baharat karışımı, maya, tatlı kırmızı biber, kereviz, zerdeçal).Eser miktarda hardal, susam, süt, yumurta içerebilir.</p><p><strong>Alerjen Uyarısı</strong><br>Eser miktarda hardal, susam, süt, yumurta içerebilir.\r\nGaleta unu, buğday unu, buğday nişastası ve kereviz içerir.</p><p><strong>Net Miktar (g/ml)</strong><br>700</p><p><strong>Saklama Koşulları</strong><br>0-4 °C muhafaza ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR10-0024</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>BANVİT BANDIRMA VİTAMİNLİ YEM SAN.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>702900</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BALIKESİR ASFALTI 8.KM.  BANDIRMA BALIKESİR</p><p><strong>Kullanım Önerileri</strong><br>Fırın (Önceden ısıtılmış, 200C): 6 dakika ısıtınız.\r\nTava (önceden ısıtılmış, yağlanmış): Her bir  yüzünü 2,5'ar dakika ısıtınız.\r\nDerinyağ: Kızgın yağda (180C)1,5 dakika ısıtınız.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 1817,
            "brand": {
              "name": "Banvit",
              "id": 1817,
              "prettyName": "banvit-b-719"
            },
            "categoryId": 40000000070298,
            "category": {
              "name": "Beyaz Et",
              "id": 40000000070298,
              "stockLegalAmount": 50,
              "prettyName": "beyaz-et-c-1129a"
            },
            "categoryAscendants": [
              {
                "name": "Et & Tavuk & Balık",
                "id": 40000000070296,
                "stockLegalAmount": 50,
                "prettyName": "et-tavuk-balik-c-11298"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Beyaz Et",
                "id": 40000000070298,
                "stockLegalAmount": 50,
                "prettyName": "beyaz-et-c-1129a"
              },
              {
                "name": "Et & Tavuk & Balık",
                "id": 40000000070296,
                "stockLegalAmount": 50,
                "prettyName": "et-tavuk-balik-c-11298"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/46040053/46040053_1-9186b2-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/46040053/46040053_1-9186b2.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/46040053/46040053_1-9186b2-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/46040053/46040053_1-9186b2-46x46.jpg"
                },
                "productId": 40000046040053
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "banvit-pilic-nugget-700-g-p-2be83f5",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "735"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Piliç eti ve yağı, galeta unu (buğday unu içerir), nişasta, bitkisel lif (selüloz), tuz, baharat karışımı, stabilizör (sodyum polifosfat), koruyucu (sodyum laktat, sodyumasetat), kaplama malzemesi %30 (buğday unu, buğday nişastası, tuz, baharat karışımı, maya, tatlı kırmızı biber, kereviz, zerdeçal).Eser miktarda hardal, susam, süt, yumurta içerebilir."
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "Eser miktarda hardal, susam, süt, yumurta içerebilir.\r\nGaleta unu, buğday unu, buğday nişastası ve kereviz içerir."
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "700"
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
                  "value": "TR10-0024"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "BANVİT BANDIRMA VİTAMİNLİ YEM SAN.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "702900"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BALIKESİR ASFALTI 8.KM.  BANDIRMA BALIKESİR"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Fırın (Önceden ısıtılmış, 200C): 6 dakika ısıtınız.\r\nTava (önceden ısıtılmış, yağlanmış): Her bir  yüzünü 2,5'ar dakika ısıtınız.\r\nDerinyağ: Kızgın yağda (180C)1,5 dakika ısıtınız."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "270.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "1128.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "14.5"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "4.1"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "24.3"
                },
                {
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "1.1"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "10.0"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "1.1"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 89,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 4,
            "maxAmountDescription": "Bu üründen en fazla 4 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 13795,
            "salePrice": 13795,
            "loyaltyPrice": 13795,
            "shownPrice": 13795,
            "unitPrice": "(197,07 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178453",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000030980063,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "30980063",
            "name": "Fairy Mucize 30'lu 494 G",
            "description": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>PROCTER & GAMBLE TÜKETİM MALLARI SAN.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>022803</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>NİDAKULE ATAŞEHİR KUZEY SİT. C KAPISI BARBAROS MH. NO:3 E ATAŞEHİR İSTANBUL</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>PROCTER & GAMBLE TÜKETİM MALLARI SAN.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>022803</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>NİDAKULE ATAŞEHİR KUZEY SİT. C KAPISI BARBAROS MH. NO:3 E ATAŞEHİR İSTANBUL</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 884,
            "brand": {
              "name": "Fairy",
              "id": 884,
              "prettyName": "fairy-b-374"
            },
            "categoryId": 40000000070322,
            "category": {
              "name": "Bulaşık",
              "id": 40000000070322,
              "stockLegalAmount": 20,
              "prettyName": "bulasik-c-112b2"
            },
            "categoryAscendants": [
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Tablet",
                "id": 40000000072828,
                "stockLegalAmount": 20,
                "prettyName": "tablet-c-11c7c"
              },
              {
                "name": "Bulaşık",
                "id": 40000000070322,
                "stockLegalAmount": 20,
                "prettyName": "bulasik-c-112b2"
              },
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901501,
                "prettyName": "sec-al-kampanyasi-l-bbc7a7d"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30980063/30980063_1-9fa534-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30980063/30980063_1-9fa534.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30980063/30980063_1-9fa534-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30980063/30980063_1-9fa534-46x46.jpg"
                },
                "productId": 40000030980063
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30980063/30980063_2-6d562a-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30980063/30980063_2-6d562a.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30980063/30980063_2-6d562a-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30980063/30980063_2-6d562a-46x46.jpg"
                },
                "productId": 40000030980063
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30980063/30980063_3-ddfb62-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30980063/30980063_3-ddfb62.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30980063/30980063_3-ddfb62-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30980063/30980063_3-ddfb62-46x46.jpg"
                },
                "productId": 40000030980063
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30980063/30980063_4-2ce3d2-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30980063/30980063_4-2ce3d2.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30980063/30980063_4-2ce3d2-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30980063/30980063_4-2ce3d2-46x46.jpg"
                },
                "productId": 40000030980063
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30980063/30980063_5-0e47e0-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30980063/30980063_5-0e47e0.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30980063/30980063_5-0e47e0-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30980063/30980063_5-0e47e0-46x46.jpg"
                },
                "productId": 40000030980063
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/30980063/30980063_6-578e92-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/30980063/30980063_6-578e92.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/30980063/30980063_6-578e92-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/30980063/30980063_6-578e92-46x46.jpg"
                },
                "productId": 40000030980063
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/30980063/30980063_bicakizi-c82b4e.jpg"
                },
                "productId": 40000030980063
              }
            ],
            "energyImages": [],
            "prettyName": "fairy-mucize-30lu-494-g-p-1d8b7df",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 3,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "MISC": [
                {
                  "id": 40000000000051,
                  "type": "MISC",
                  "name": "Ürün Özellikleri",
                  "priority": 0,
                  "customId": "productDetailsImage",
                  "value": "https://images.migrosone.com/hemen/custom/thumbnail_30980063rich-95821383.jpg"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "PROCTER & GAMBLE TÜKETİM MALLARI SAN.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "022803"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "NİDAKULE ATAŞEHİR KUZEY SİT. C KAPISI BARBAROS MH. NO:3 E ATAŞEHİR İSTANBUL"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 299,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 6,
            "maxAmountDescription": "Bu üründen en fazla 6 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 20 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 69995,
            "salePrice": 69995,
            "loyaltyPrice": 69995,
            "shownPrice": 69995,
            "unitPrice": "(23,33 TL/Adet)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178453",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          }
        ]
      },
      {
        "title": "Seç Al Ürünleri!",
        "name": "Seç Al Ürünleri!",
        "description": "12- 22 Eylül 2025 tarihleri arasında 50 TL ve üzeri alışverişlerde farklı ürünlerde farklı indirim oranları uygulanacaktır. Kampanyadan faydalanabilmek için kampanyalı ürünler haricinde 50 TL'lik sepet oluşturman gerekmektedir. Her 50 TL'lik alışverişte seç al kampanyası geçerli olacaktır. İndirim sepette düşecektir. Kampanyalı ürünler mağaza stoklarıyla sınırlıdır. Ürünler dönemsel olarak değişmektedir. Ürün stoklarının anlık değişkenlik göstermesi nedeniyle siparişinizde tedarik edilemeyen ürünler bulunabilir. Bu durumunda, kampanya koşullarını sağladığınız ölçüde indirimden faydalanabilirsiniz. Satın almış olduğunuz ürün/ürünlerde iade talebinde bulunduğunuzda; sipariş içerisinde yararlanmış olduğunuz kampanya koşullarına uygun olarak indirim tutarı, iadesi talep edilen ürünlere bedeli oranında yansıtılacak olup iade ettiğiniz üründen söz konusu indirim tutarı düşülerek ücret iadesi gerçekleştirilecektir.",
        "storeProductInfos": [
          {
            "id": 40000008010905,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "08010905",
            "name": "Coca-Cola Orijinal Tat Pet 4x1 L",
            "description": "<p><strong style=\"background-color: transparent;\">Coca-Cola</strong>, 4'lü litrelik paketi ile aile boyu tüketim ve kalabalık misafirler için uygun bir seçenek olmasının yanında Coca-Cola lezzetini doyasıya yaşamanızı sağlar.&nbsp;</p><p><br></p><p>Soğuk içilmesi tavsiye edilir.&nbsp;</p><p><strong>İçindekiler</strong><br>su, şeker (S) veya fruktoz-glukoz şurubu (F), karbondioksit, renklendirici (karamel), asitliği düzenleyici (fosforik asit), doğal aroma vericiler, kafein (max 0,150 g/l)</p><p><strong>Net Miktar (g/ml)</strong><br>4000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-59-K-002244</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>COCA-COLA SATIŞ VE DAĞITIM A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>026318</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Soğuk içiniz.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p><strong style=\"background-color: transparent;\">Coca-Cola</strong>, 4'lü litrelik paketi ile aile boyu tüketim ve kalabalık misafirler için uygun bir seçenek olmasının yanında Coca-Cola lezzetini doyasıya yaşamanızı sağlar.&nbsp;</p><p><br></p><p>Soğuk içilmesi tavsiye edilir.&nbsp;</p>",
            "information": "<p><strong>İçindekiler</strong><br>su, şeker (S) veya fruktoz-glukoz şurubu (F), karbondioksit, renklendirici (karamel), asitliği düzenleyici (fosforik asit), doğal aroma vericiler, kafein (max 0,150 g/l)</p><p><strong>Net Miktar (g/ml)</strong><br>4000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-59-K-002244</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>COCA-COLA SATIŞ VE DAĞITIM A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>026318</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Soğuk içiniz.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 4716,
            "brand": {
              "name": "Coca-Cola",
              "id": 4716,
              "prettyName": "coca-cola-b-126c"
            },
            "categoryId": 40000000070255,
            "category": {
              "name": "Gazlı İçecek",
              "id": 40000000070255,
              "stockLegalAmount": 100,
              "prettyName": "gazli-icecek-c-1126f"
            },
            "categoryAscendants": [
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Kolalı",
                "id": 40000000072541,
                "stockLegalAmount": 100,
                "prettyName": "kolali-c-11b5d"
              },
              {
                "name": "Gazlı İçecek",
                "id": 40000000070255,
                "stockLegalAmount": 100,
                "prettyName": "gazli-icecek-c-1126f"
              },
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              },
              {
                "name": "Geniş Portföy",
                "id": 40000196892911,
                "prettyName": "genis-portfoy-l-bbc58ef"
              },
              {
                "name": "Yaz İhtiyaçları Migros Hemen'de",
                "id": 40000196898287,
                "prettyName": "yaz-ihtiyaclari-migros-hemende-l-bbc6def"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08010905/08010905_1-d39a2b-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08010905/08010905_1-d39a2b.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08010905/08010905_1-d39a2b-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08010905/08010905_1-d39a2b-46x46.jpg"
                },
                "productId": 40000008010905
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08010905/8010905_yan-d97a68-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08010905/8010905_yan-d97a68.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08010905/8010905_yan-d97a68-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08010905/8010905_yan-d97a68-46x46.jpg"
                },
                "productId": 40000008010905
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "coca-cola-orijinal-tat-pet-4x1-l-p-7a3c99",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "4280"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "su, şeker (S) veya fruktoz-glukoz şurubu (F), karbondioksit, renklendirici (karamel), asitliği düzenleyici (fosforik asit), doğal aroma vericiler, kafein (max 0,150 g/l)"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "4000"
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
                  "value": "TR-59-K-002244"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "COCA-COLA SATIŞ VE DAĞITIM A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "026318"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Soğuk içiniz."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "45.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "188.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "0.0"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.0"
                },
                {
                  "id": 40000000000070,
                  "type": "NUTRITIONAL",
                  "name": "Trans yağ (g)",
                  "priority": 5,
                  "value": "0.0"
                },
                {
                  "id": 40000000000071,
                  "type": "NUTRITIONAL",
                  "name": "Tekli doymamış yağ (g)",
                  "priority": 6,
                  "value": "0.0"
                },
                {
                  "id": 40000000000072,
                  "type": "NUTRITIONAL",
                  "name": "Çoklu doymamış yağ (g)",
                  "priority": 7,
                  "value": "0.0"
                },
                {
                  "id": 40000000000032,
                  "type": "NUTRITIONAL",
                  "name": "Kolesterol (mg)",
                  "priority": 8,
                  "value": "0.0"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "11.2"
                },
                {
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "11.2"
                },
                {
                  "id": 40000000000073,
                  "type": "NUTRITIONAL",
                  "name": "Şeker Alkolü (g)",
                  "priority": 11,
                  "value": "0.0"
                },
                {
                  "id": 40000000000074,
                  "type": "NUTRITIONAL",
                  "name": "Nişasta (g)",
                  "priority": 12,
                  "value": "0.0"
                },
                {
                  "id": 40000000000035,
                  "type": "NUTRITIONAL",
                  "name": "Lif (g)",
                  "priority": 13,
                  "value": "0.0"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "0.0"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.0"
                },
                {
                  "id": 40000000000037,
                  "type": "NUTRITIONAL",
                  "name": "Sodyum (g)",
                  "priority": 16,
                  "value": "0.0"
                },
                {
                  "id": 40000000000049,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin A (µg)",
                  "priority": 17,
                  "value": "0.0"
                },
                {
                  "id": 40000000000050,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin D (µg)",
                  "priority": 18,
                  "value": "0.0"
                },
                {
                  "id": 40000000000075,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin E (mg)",
                  "priority": 19,
                  "value": "0.0"
                },
                {
                  "id": 40000000000076,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin K (µg)",
                  "priority": 20,
                  "value": "0.0"
                },
                {
                  "id": 40000000000077,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin C (mg)",
                  "priority": 21,
                  "value": "0.0"
                },
                {
                  "id": 40000000000078,
                  "type": "NUTRITIONAL",
                  "name": "Tiamin (mg)",
                  "priority": 22,
                  "value": "0.0"
                },
                {
                  "id": 40000000000042,
                  "type": "NUTRITIONAL",
                  "name": "Riboflavin (mg)",
                  "priority": 23,
                  "value": "0.0"
                },
                {
                  "id": 40000000000043,
                  "type": "NUTRITIONAL",
                  "name": "Niacin (mg)",
                  "priority": 24,
                  "value": "0.0"
                },
                {
                  "id": 40000000000041,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin B6 (mg)",
                  "priority": 25,
                  "value": "0.0"
                },
                {
                  "id": 40000000000044,
                  "type": "NUTRITIONAL",
                  "name": "Folik asit (µg)",
                  "priority": 26,
                  "value": "0.0"
                },
                {
                  "id": 40000000000040,
                  "type": "NUTRITIONAL",
                  "name": "Vitamin B12 (µg)",
                  "priority": 27,
                  "value": "0.0"
                },
                {
                  "id": 40000000000079,
                  "type": "NUTRITIONAL",
                  "name": "Biotin (µg)",
                  "priority": 28,
                  "value": "0.0"
                },
                {
                  "id": 40000000000080,
                  "type": "NUTRITIONAL",
                  "name": "Pantotenik Asit (mg)",
                  "priority": 29,
                  "value": "0.0"
                },
                {
                  "id": 40000000000046,
                  "type": "NUTRITIONAL",
                  "name": "Potasyum (mg)",
                  "priority": 30,
                  "value": "0.0"
                },
                {
                  "id": 40000000000081,
                  "type": "NUTRITIONAL",
                  "name": "Klorur (mg)",
                  "priority": 31,
                  "value": "0.0"
                },
                {
                  "id": 40000000000047,
                  "type": "NUTRITIONAL",
                  "name": "Kalsiyum (mg)",
                  "priority": 32,
                  "value": "0.0"
                },
                {
                  "id": 40000000000048,
                  "type": "NUTRITIONAL",
                  "name": "Fosfor (mg)",
                  "priority": 33,
                  "value": "0.0"
                },
                {
                  "id": 40000000000082,
                  "type": "NUTRITIONAL",
                  "name": "Magnezyum (mg)",
                  "priority": 34,
                  "value": "0.0"
                },
                {
                  "id": 40000000000045,
                  "type": "NUTRITIONAL",
                  "name": "Demir (mg)",
                  "priority": 35,
                  "value": "0.0"
                },
                {
                  "id": 40000000000083,
                  "type": "NUTRITIONAL",
                  "name": "Çinko (mg)",
                  "priority": 36,
                  "value": "0.0"
                },
                {
                  "id": 40000000000084,
                  "type": "NUTRITIONAL",
                  "name": "Bakır (mg)",
                  "priority": 37,
                  "value": "0.0"
                },
                {
                  "id": 40000000000085,
                  "type": "NUTRITIONAL",
                  "name": "Manganez (mg)",
                  "priority": 38,
                  "value": "0.0"
                },
                {
                  "id": 40000000000086,
                  "type": "NUTRITIONAL",
                  "name": "Florur (mg)",
                  "priority": 39,
                  "value": "0.0"
                },
                {
                  "id": 40000000000087,
                  "type": "NUTRITIONAL",
                  "name": "Selenyum (µg)",
                  "priority": 40,
                  "value": "0.0"
                },
                {
                  "id": 40000000000088,
                  "type": "NUTRITIONAL",
                  "name": "Krom (µg)",
                  "priority": 41,
                  "value": "0.0"
                },
                {
                  "id": 40000000000089,
                  "type": "NUTRITIONAL",
                  "name": "Molibden (µg)",
                  "priority": 42,
                  "value": "0.0"
                },
                {
                  "id": 40000000000090,
                  "type": "NUTRITIONAL",
                  "name": "İyot (µg)",
                  "priority": 43,
                  "value": "0.0"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 135 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 2,
            "maxAmountDescription": "Bu üründen en fazla 2 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 100 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 19290,
            "salePrice": 19290,
            "loyaltyPrice": 19290,
            "shownPrice": 19290,
            "unitPrice": "(48,22 TL/Litre)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000031015391,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "31015391",
            "name": "Selpak Kaşmir Katkılı Tuvalet Kağıdı 16'lı",
            "description": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>SANİPAK SAĞLIKLI YAŞAM ÜRÜNLERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705562</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>RÜZGARLI BAHÇE MH. ÇAM PINARI SK NO:3-1 KAVACIK OFİS. BEYKOZ İSTANBUL</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>SANİPAK SAĞLIKLI YAŞAM ÜRÜNLERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705562</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>RÜZGARLI BAHÇE MH. ÇAM PINARI SK NO:3-1 KAVACIK OFİS. BEYKOZ İSTANBUL</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 894,
            "brand": {
              "name": "Selpak",
              "id": 894,
              "prettyName": "selpak-b-37e"
            },
            "categoryId": 40000000070326,
            "category": {
              "name": "Kağıt",
              "id": 40000000070326,
              "stockLegalAmount": 20,
              "prettyName": "kagit-c-112b6"
            },
            "categoryAscendants": [
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Kağıt",
                "id": 40000000070326,
                "stockLegalAmount": 20,
                "prettyName": "kagit-c-112b6"
              },
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/31015391/31015391_1-bea52a-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/31015391/31015391_1-bea52a.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/31015391/31015391_1-bea52a-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/31015391/31015391_1-bea52a-46x46.jpg"
                },
                "productId": 40000031015391
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/31015391/31015391_bicakizi-a125d5.jpeg"
                },
                "productId": 40000031015391
              }
            ],
            "energyImages": [],
            "prettyName": "selpak-kasmir-katkili-tuvalet-kagidi-16li-p-1d941df",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 3,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "MAIN": [
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "SANİPAK SAĞLIKLI YAŞAM ÜRÜNLERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "705562"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "RÜZGARLI BAHÇE MH. ÇAM PINARI SK NO:3-1 KAVACIK OFİS. BEYKOZ İSTANBUL"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 129,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 2,
            "maxAmountDescription": "Bu üründen en fazla 2 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 20 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 27995,
            "salePrice": 27995,
            "loyaltyPrice": 27995,
            "shownPrice": 27995,
            "unitPrice": "(17,49 TL/Adet)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [
              {
                "name": "GREAT_PRICE",
                "value": "İyi Fiyat",
                "colorCodes": []
              }
            ],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000007151718,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "07151718",
            "name": "Milka Sürülebilir Fındık Ezmesi 600 G",
            "description": "<p><strong>İçindekiler</strong><br>Şeker, kanola yağı (%25), peyniraltı suyu tozu (SÜT içerir), FINDIK ezmesi (%5), yağı azaltılmış kakao tozu (%4,5), yağsız SÜT tozu, kakao yağı, ayçiçek yağı, emülgatör (ayçiçeği lesitini), tuz, aroma vericiler.  DİĞER SERT KABUKLU MEYVELER, BUĞDAY VE YERFISTIĞI İÇEREBİLİR.</p><p><strong>Alerjen Uyarısı</strong><br>SÜT VE SÜT ÜRÜNÜ, FINDIK İÇERİR. DİĞER SERT KABUKLU MEYVELER, BUĞDAY VE YER FISTIĞI İÇEREBİLİR</p><p><strong>Net Miktar (g/ml)</strong><br>600</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>BELÇİKA</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>KENT GIDA MAD.SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>706855</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ÇAYIROVA MAH.ANKARA ASFALTI ÜZERİ İST.CAD.NO.111 GEBZE KOCAELİ</p><p><strong>Kullanım Önerileri</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>Şeker, kanola yağı (%25), peyniraltı suyu tozu (SÜT içerir), FINDIK ezmesi (%5), yağı azaltılmış kakao tozu (%4,5), yağsız SÜT tozu, kakao yağı, ayçiçek yağı, emülgatör (ayçiçeği lesitini), tuz, aroma vericiler.  DİĞER SERT KABUKLU MEYVELER, BUĞDAY VE YERFISTIĞI İÇEREBİLİR.</p><p><strong>Alerjen Uyarısı</strong><br>SÜT VE SÜT ÜRÜNÜ, FINDIK İÇERİR. DİĞER SERT KABUKLU MEYVELER, BUĞDAY VE YER FISTIĞI İÇEREBİLİR</p><p><strong>Net Miktar (g/ml)</strong><br>600</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>BELÇİKA</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>KENT GIDA MAD.SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>706855</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ÇAYIROVA MAH.ANKARA ASFALTI ÜZERİ İST.CAD.NO.111 GEBZE KOCAELİ</p><p><strong>Kullanım Önerileri</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 591,
            "brand": {
              "name": "Milka",
              "id": 591,
              "prettyName": "milka-b-24f"
            },
            "categoryId": 40000000070294,
            "category": {
              "name": "Çikolata & Kahvaltı",
              "id": 40000000070294,
              "stockLegalAmount": 50,
              "prettyName": "cikolata-kahvalti-c-11296"
            },
            "categoryAscendants": [
              {
                "name": "Süt & Kahvaltılık",
                "id": 40000000070285,
                "stockLegalAmount": 50,
                "prettyName": "sut-kahvaltilik-c-1128d"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "kakao krema",
                "id": 40000000072654,
                "stockLegalAmount": 50,
                "prettyName": "kakao-krema-c-11bce"
              },
              {
                "name": "Çikolata & Kahvaltı",
                "id": 40000000070294,
                "stockLegalAmount": 50,
                "prettyName": "cikolata-kahvalti-c-11296"
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
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/07151718/07151718_1-125a59-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/07151718/07151718_1-125a59.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/07151718/07151718_1-125a59-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/07151718/07151718_1-125a59-46x46.jpg"
                },
                "productId": 40000007151718
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/07151718/07151718_bicakizi-6b560f.jpeg"
                },
                "productId": 40000007151718
              }
            ],
            "energyImages": [],
            "prettyName": "milka-surulebilir-findik-ezmesi-600-g-p-6d2066",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Şeker, kanola yağı (%25), peyniraltı suyu tozu (SÜT içerir), FINDIK ezmesi (%5), yağı azaltılmış kakao tozu (%4,5), yağsız SÜT tozu, kakao yağı, ayçiçek yağı, emülgatör (ayçiçeği lesitini), tuz, aroma vericiler.  DİĞER SERT KABUKLU MEYVELER, BUĞDAY VE YERFISTIĞI İÇEREBİLİR."
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "SÜT VE SÜT ÜRÜNÜ, FINDIK İÇERİR. DİĞER SERT KABUKLU MEYVELER, BUĞDAY VE YER FISTIĞI İÇEREBİLİR"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "600"
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
                  "value": "BELÇİKA"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "KENT GIDA MAD.SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "706855"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "ÇAYIROVA MAH.ANKARA ASFALTI ÜZERİ İST.CAD.NO.111 GEBZE KOCAELİ"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Serin ve Kuru Yerde Muhafaza Ediniz"
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "555.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "2316.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "34.0"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "4.6"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "58.0"
                },
                {
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "57.0"
                },
                {
                  "id": 40000000000035,
                  "type": "NUTRITIONAL",
                  "name": "Lif (g)",
                  "priority": 13,
                  "value": "2.1"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "3.8"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.18"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 169,9 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 29995,
            "salePrice": 29995,
            "loyaltyPrice": 29995,
            "shownPrice": 29995,
            "unitPrice": "(499,91 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000004130057,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "04130057",
            "name": "Yudum Egemden Sızma Zeytinyağı Yumuşak Lezzet 1 L",
            "description": "<p>Özenle seçilen Güney Ege zeytinlerinin ilk preslenmesiyle <strong>&nbsp;Yudum Ege Sızma Zeytinyağı</strong>&nbsp;elde edilir. Hiçbir işlem geçirilmeden, saf ve doğal olarak üretilir. Tat, doku ve aroma bakımından uzmanlar tarafından test edilir.&nbsp;</p><p><br></p><p>Yoğun bir tada sahip olan Yudum Ege Naturel Sızma Zeytinyağı, en fazla yüzde 0.8 asit oranına sahiptir. Yemeklerde, özellikle salata ve kahvaltıda zeytinyağını afiyetle kullanabilirsiniz.</p><p><br></p><p>Hava ve ısı zeytinyağına zarar verir. Zeytinyağını doğrudan güneş ışığı görmeyen serin yerlerde saklamaya özen gösterin. Zeytinyağı her türlü kokuyu çeker. Bu nedenle yabancı koku olmayan yerlerde ağzı kapalı olarak muhafaza edilmelidir.</p><p><br></p><p>Atık yağlarınızı Sanal Market teslimatlarında ilgili görevliye teslim ederek geri dönüşüme katkı sağlayabilirsiniz.</p><p><strong>İçindekiler</strong><br>Naturel Sızma Zeytinyağı</p><p><strong>Alerjen Uyarısı</strong><br>Alerjen içermemektedir</p><p><strong>Net Miktar (g/ml)</strong><br>1000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-10-K-000058</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>SAVOLA GIDA SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>703806</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>DEĞİRMENYOLU CAD.HUZUR HOCA SK NO.84 K.23 İÇERENKÖY İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Bitkisel atık yağları lavaboya veya su , toprak gibi alıcı ortamlara dökmeyiniz</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p>Özenle seçilen Güney Ege zeytinlerinin ilk preslenmesiyle <strong>&nbsp;Yudum Ege Sızma Zeytinyağı</strong>&nbsp;elde edilir. Hiçbir işlem geçirilmeden, saf ve doğal olarak üretilir. Tat, doku ve aroma bakımından uzmanlar tarafından test edilir.&nbsp;</p><p><br></p><p>Yoğun bir tada sahip olan Yudum Ege Naturel Sızma Zeytinyağı, en fazla yüzde 0.8 asit oranına sahiptir. Yemeklerde, özellikle salata ve kahvaltıda zeytinyağını afiyetle kullanabilirsiniz.</p><p><br></p><p>Hava ve ısı zeytinyağına zarar verir. Zeytinyağını doğrudan güneş ışığı görmeyen serin yerlerde saklamaya özen gösterin. Zeytinyağı her türlü kokuyu çeker. Bu nedenle yabancı koku olmayan yerlerde ağzı kapalı olarak muhafaza edilmelidir.</p><p><br></p><p>Atık yağlarınızı Sanal Market teslimatlarında ilgili görevliye teslim ederek geri dönüşüme katkı sağlayabilirsiniz.</p>",
            "information": "<p><strong>İçindekiler</strong><br>Naturel Sızma Zeytinyağı</p><p><strong>Alerjen Uyarısı</strong><br>Alerjen içermemektedir</p><p><strong>Net Miktar (g/ml)</strong><br>1000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-10-K-000058</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>SAVOLA GIDA SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>703806</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>DEĞİRMENYOLU CAD.HUZUR HOCA SK NO.84 K.23 İÇERENKÖY İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Bitkisel atık yağları lavaboya veya su , toprak gibi alıcı ortamlara dökmeyiniz</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 465,
            "brand": {
              "name": "Yudum",
              "id": 465,
              "prettyName": "yudum-b-1d1"
            },
            "categoryId": 40000000070307,
            "category": {
              "name": "Sıvı Yağ",
              "id": 40000000070307,
              "stockLegalAmount": 50,
              "prettyName": "sivi-yag-c-112a3"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Sızma Zeytinyağları",
                "id": 40000000072964,
                "stockLegalAmount": 50,
                "prettyName": "sizma-zeytinyaglari-c-11d04"
              },
              {
                "name": "Sıvı Yağ",
                "id": 40000000070307,
                "stockLegalAmount": 50,
                "prettyName": "sivi-yag-c-112a3"
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
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/04130057/04130057_1-d8bfcf-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/04130057/04130057_1-d8bfcf.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/04130057/04130057_1-d8bfcf-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/04130057/04130057_1-d8bfcf-46x46.jpg"
                },
                "productId": 40000004130057
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "yudum-egemden-sizma-zeytinyagi-yumusak-lezzet-1-l-p-3f0509",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "1000"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Naturel Sızma Zeytinyağı"
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "Alerjen içermemektedir"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "1000"
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
                  "value": "TR-10-K-000058"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "SAVOLA GIDA SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "703806"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "DEĞİRMENYOLU CAD.HUZUR HOCA SK NO.84 K.23 İÇERENKÖY İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Bitkisel atık yağları lavaboya veya su , toprak gibi alıcı ortamlara dökmeyiniz"
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "819.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "3367.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "91.0"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "15.0"
                },
                {
                  "id": 40000000000071,
                  "type": "NUTRITIONAL",
                  "name": "Tekli doymamış yağ (g)",
                  "priority": 6,
                  "value": "67.0"
                },
                {
                  "id": 40000000000072,
                  "type": "NUTRITIONAL",
                  "name": "Çoklu doymamış yağ (g)",
                  "priority": 7,
                  "value": "9.0"
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
                  "value": "0.0"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.0"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 250 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 6,
            "maxAmountDescription": "Bu üründen en fazla 6 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 39495,
            "salePrice": 39495,
            "loyaltyPrice": 39495,
            "shownPrice": 39495,
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000003231310,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "03231310",
            "name": "Nescafé Gold Ekonomik Paket 100 G",
            "description": "<p><strong>Kampanyalı ambalajlar seçili bölge ve mağazalarda bulunmakta olup, stoklarla sınırlıdır. Mağaza ve bölge stoğunda mevcut olması durumunda kampanyalı ambalajlı ürün teslimi yapılabilecektir.</strong></p><p>• Nescafé Gold ile premium kahve deneyimi</p><p>• %100 Kahve çekirdeklerinden paylaşılacak anlara dokunan öğütülmüş kahveli çözünebilir kahve</p><p>• Yumuşak içim, ideal yoğunlukta kahve tadı ve zengin aroma</p><p>• Özenle seçilmiş, yüksek kalite Arabica ve Robusta çekirdeklerinin Türkiye’ye özel harmanı</p><p>NESCAFÉ GOLD’un Hikayesi</p><p>NESCAFÉ GOLD'un eşsiz yumuşak içimi, şimdi daha da zengin kahve kokusu ve dolgun kahve tadı ile birleşti...Bu mükemmel dengeyi yeni NESCAFÉ GOLD ile keşfedin. İşin sırrı, 10 kez daha ince* öğüttüğümüz Arabica çekirdeklerinde. Bu yöntemle yüksek rakımlarda yetişen Arabica çekirdeklerindeki gizli kalmış tadı ve aroma notalarını ortaya çıkarıyoruz. Kahve çekirdeklerinin özünden gelen bu zenginliğin keyfini doyasıya çıkarmanız için.</p><p>• Nescafé Gold ile premium kahve deneyimi</p><p>• %100 Kahve çekirdeklerinden paylaşılacak anlara dokunan öğütülmüş kahveli çözünebilir kahve</p><p>• Yumuşak içim, ideal yoğunlukta kahve tadı ve zengin aroma</p><p>• Özenle seçilmiş, yüksek kalite Arabica ve Robusta çekirdeklerinin Türkiye’ye özel harmanı</p><p>NESCAFÉ GOLD’un Hikayesi</p><p>NESCAFÉ GOLD'un eşsiz yumuşak içimi, şimdi daha da zengin kahve kokusu ve dolgun kahve tadı ile birleşti...Bu mükemmel dengeyi yeni NESCAFÉ GOLD ile keşfedin. İşin sırrı, 10 kez daha ince* öğüttüğümüz Arabica çekirdeklerinde. Bu yöntemle yüksek rakımlarda yetişen Arabica çekirdeklerindeki gizli kalmış tadı ve aroma notalarını ortaya çıkarıyoruz. Kahve çekirdeklerinin özünden gelen bu zenginliğin keyfini doyasıya çıkarmanız için.</p><p>NESCAFÉ GOLD, Türkiye'ye özel geliştirilen reçetesi ile eşsiz yumuşak içimi, daha da zengin kahve kokusu ve ideal dolgunlukta kahve tadı ile şimdi DAHA GOLD!&nbsp;</p><p>Kahve severlerin yaşam stilleri ve alışkanlıkları seçkin deneyimlere doğru değişiyor.Ustalıkla hazırlanmış yüksek kalitede, kolay ulaşılabilir ürünler bekliyorlar, Yeni NESCAFÉ GOLD paylaşılacak anlar için özen ve ustalıkla üretildi.</p><p>NESCAFÉ PLANI</p><p>Bütün dünyada 80. Yılını kutlayan NESCAFÉ, %100 Robusta ve Arabica çekirdeklerinden üretilir. 1960'lardan beri kahve çiftçileri ile çalışıyor, mahsul üretim metotlarının geliştirilmesine yardımcı olarak sürdürülebilir kahve üretimine katkıda bulunuyoruz.</p><p>Bugüne kadar 500.000 çiftçiye eğitim verdik ve değer zincirimiz ile 1 milyondan fazla kahve çiftçisine dokunduk.</p><p>Daha iyi yetiştiricilik yöntemleri kullanmaları için desteklediğimiz yerel çiftçiler ile birlikte gelecek jenerasyonların da Lezzetli NESCAFÉ'nin tadını çıkarmalarını garanti altına alıyoruz.</p><p>Hazırlanışı: Bir tatlı kaşığı (2 g) NESCAFÉ® Gold’un üzerine kaynatılıp 1 dakika bekletilmiş 200 ml sıcak suyu ekleyin. Arzu ederseniz, NESTLÉ® Coffee Mate veya süt ekleyebilirsiniz.&nbsp;</p><p>Saklama Önerisi: Kuru ve serin yerde muhafaza ediniz.</p><p><strong>İçindekiler</strong><br>%100 ÇÖZÜLEBİLİR KAHVE</p><p><strong>Net Miktar (g/ml)</strong><br>100</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>FRANSA/İSVİÇRE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>NESTLE TÜRKİYE GIDA SAN.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>700150</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CAD.NO.71 NUROL PLAZA A BLOK KAT.5 MASLAK İSTANBUL</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p><strong>Kampanyalı ambalajlar seçili bölge ve mağazalarda bulunmakta olup, stoklarla sınırlıdır. Mağaza ve bölge stoğunda mevcut olması durumunda kampanyalı ambalajlı ürün teslimi yapılabilecektir.</strong></p><p>• Nescafé Gold ile premium kahve deneyimi</p><p>• %100 Kahve çekirdeklerinden paylaşılacak anlara dokunan öğütülmüş kahveli çözünebilir kahve</p><p>• Yumuşak içim, ideal yoğunlukta kahve tadı ve zengin aroma</p><p>• Özenle seçilmiş, yüksek kalite Arabica ve Robusta çekirdeklerinin Türkiye’ye özel harmanı</p><p>NESCAFÉ GOLD’un Hikayesi</p><p>NESCAFÉ GOLD'un eşsiz yumuşak içimi, şimdi daha da zengin kahve kokusu ve dolgun kahve tadı ile birleşti...Bu mükemmel dengeyi yeni NESCAFÉ GOLD ile keşfedin. İşin sırrı, 10 kez daha ince* öğüttüğümüz Arabica çekirdeklerinde. Bu yöntemle yüksek rakımlarda yetişen Arabica çekirdeklerindeki gizli kalmış tadı ve aroma notalarını ortaya çıkarıyoruz. Kahve çekirdeklerinin özünden gelen bu zenginliğin keyfini doyasıya çıkarmanız için.</p><p>• Nescafé Gold ile premium kahve deneyimi</p><p>• %100 Kahve çekirdeklerinden paylaşılacak anlara dokunan öğütülmüş kahveli çözünebilir kahve</p><p>• Yumuşak içim, ideal yoğunlukta kahve tadı ve zengin aroma</p><p>• Özenle seçilmiş, yüksek kalite Arabica ve Robusta çekirdeklerinin Türkiye’ye özel harmanı</p><p>NESCAFÉ GOLD’un Hikayesi</p><p>NESCAFÉ GOLD'un eşsiz yumuşak içimi, şimdi daha da zengin kahve kokusu ve dolgun kahve tadı ile birleşti...Bu mükemmel dengeyi yeni NESCAFÉ GOLD ile keşfedin. İşin sırrı, 10 kez daha ince* öğüttüğümüz Arabica çekirdeklerinde. Bu yöntemle yüksek rakımlarda yetişen Arabica çekirdeklerindeki gizli kalmış tadı ve aroma notalarını ortaya çıkarıyoruz. Kahve çekirdeklerinin özünden gelen bu zenginliğin keyfini doyasıya çıkarmanız için.</p><p>NESCAFÉ GOLD, Türkiye'ye özel geliştirilen reçetesi ile eşsiz yumuşak içimi, daha da zengin kahve kokusu ve ideal dolgunlukta kahve tadı ile şimdi DAHA GOLD!&nbsp;</p><p>Kahve severlerin yaşam stilleri ve alışkanlıkları seçkin deneyimlere doğru değişiyor.Ustalıkla hazırlanmış yüksek kalitede, kolay ulaşılabilir ürünler bekliyorlar, Yeni NESCAFÉ GOLD paylaşılacak anlar için özen ve ustalıkla üretildi.</p><p>NESCAFÉ PLANI</p><p>Bütün dünyada 80. Yılını kutlayan NESCAFÉ, %100 Robusta ve Arabica çekirdeklerinden üretilir. 1960'lardan beri kahve çiftçileri ile çalışıyor, mahsul üretim metotlarının geliştirilmesine yardımcı olarak sürdürülebilir kahve üretimine katkıda bulunuyoruz.</p><p>Bugüne kadar 500.000 çiftçiye eğitim verdik ve değer zincirimiz ile 1 milyondan fazla kahve çiftçisine dokunduk.</p><p>Daha iyi yetiştiricilik yöntemleri kullanmaları için desteklediğimiz yerel çiftçiler ile birlikte gelecek jenerasyonların da Lezzetli NESCAFÉ'nin tadını çıkarmalarını garanti altına alıyoruz.</p><p>Hazırlanışı: Bir tatlı kaşığı (2 g) NESCAFÉ® Gold’un üzerine kaynatılıp 1 dakika bekletilmiş 200 ml sıcak suyu ekleyin. Arzu ederseniz, NESTLÉ® Coffee Mate veya süt ekleyebilirsiniz.&nbsp;</p><p>Saklama Önerisi: Kuru ve serin yerde muhafaza ediniz.</p>",
            "information": "<p><strong>İçindekiler</strong><br>%100 ÇÖZÜLEBİLİR KAHVE</p><p><strong>Net Miktar (g/ml)</strong><br>100</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>FRANSA/İSVİÇRE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>NESTLE TÜRKİYE GIDA SAN.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>700150</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>BÜYÜKDERE CAD.NO.71 NUROL PLAZA A BLOK KAT.5 MASLAK İSTANBUL</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 452,
            "brand": {
              "name": "Nescafe",
              "id": 452,
              "prettyName": "nescafe-b-1c4"
            },
            "categoryId": 40000000070262,
            "category": {
              "name": "Kahve",
              "id": 40000000070262,
              "stockLegalAmount": 100,
              "prettyName": "kahve-c-11276"
            },
            "categoryAscendants": [
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Kahve",
                "id": 40000000070262,
                "stockLegalAmount": 100,
                "prettyName": "kahve-c-11276"
              },
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              },
              {
                "name": "Nescafe Ürünleri",
                "id": 40000196882505,
                "prettyName": "nescafe-urunleri-l-bbc3049"
              },
              {
                "name": "Şehre Dönüş!",
                "id": 40000196900998,
                "prettyName": "sehre-donus-l-bbc7886"
              },
              {
                "name": "Perşembe Yıldızı - Nestle",
                "id": 40000196899612,
                "prettyName": "persembe-yildizi-nestle-l-bbc731c"
              },
              {
                "name": "Yaz İhtiyaçları Migros Hemen'de",
                "id": 40000196898287,
                "prettyName": "yaz-ihtiyaclari-migros-hemende-l-bbc6def"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/03231310/03231310_1-20e0aa-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/03231310/03231310_1-20e0aa.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/03231310/03231310_1-20e0aa-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/03231310/03231310_1-20e0aa-46x46.jpg"
                },
                "productId": 40000003231310
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "nescaf-gold-ekonomik-paket-100-g-p-314e4e",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "107"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "%100 ÇÖZÜLEBİLİR KAHVE"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "100"
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
                  "value": "FRANSA/İSVİÇRE"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "NESTLE TÜRKİYE GIDA SAN.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "700150"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "BÜYÜKDERE CAD.NO.71 NUROL PLAZA A BLOK KAT.5 MASLAK İSTANBUL"
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "0.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "0.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "0.0"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.0"
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
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "0.0"
                },
                {
                  "id": 40000000000035,
                  "type": "NUTRITIONAL",
                  "name": "Lif (g)",
                  "priority": 13,
                  "value": "0.0"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "0.0"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.0"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 159,5 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 4,
            "maxAmountDescription": "Bu üründen en fazla 4 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 100 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 25995,
            "salePrice": 25995,
            "loyaltyPrice": 25995,
            "shownPrice": 25995,
            "unitPrice": "(2599,50 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000008010909,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "08010909",
            "name": "Coca-Cola Zero Sugar Pet 4x1 L",
            "description": "<p><strong>Coca-Cola Zero,&nbsp;</strong>klasik ve gerçek Coca-Cola tadını&nbsp;şekersiz bir şekilde sunar. Yemeklerin ya da atıştırmalıkların yanına çok yakışır. 1 litrelik şişelerden oluşan 4'lü paketi ile aile içi tüketime ve kalabalık misafirleri ağırlamak için idealdir.&nbsp;</p><p><br></p><p>Soğuk içilmesi tavsiye edilir.&nbsp;</p><p><strong>İçindekiler</strong><br>Su, karbondioksit , renklendirici karamel , asitliği düzenleyiciler ( fosforik asit, sodyum sitrat ) tatlandırıcılar ( sukraloz , asesulfam K) aroma vericiler koruyucu ( sodyum benzoat) kafein ( max 0,150 g/l)</p><p><strong>Net Miktar (g/ml)</strong><br>4000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-59-K00244</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>COCA-COLA SATIŞ VE DAĞITIM A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>026318</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Direkt kullanım içindir. Soğuk içilmesi tavsiye edilir.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p><strong>Coca-Cola Zero,&nbsp;</strong>klasik ve gerçek Coca-Cola tadını&nbsp;şekersiz bir şekilde sunar. Yemeklerin ya da atıştırmalıkların yanına çok yakışır. 1 litrelik şişelerden oluşan 4'lü paketi ile aile içi tüketime ve kalabalık misafirleri ağırlamak için idealdir.&nbsp;</p><p><br></p><p>Soğuk içilmesi tavsiye edilir.&nbsp;</p>",
            "information": "<p><strong>İçindekiler</strong><br>Su, karbondioksit , renklendirici karamel , asitliği düzenleyiciler ( fosforik asit, sodyum sitrat ) tatlandırıcılar ( sukraloz , asesulfam K) aroma vericiler koruyucu ( sodyum benzoat) kafein ( max 0,150 g/l)</p><p><strong>Net Miktar (g/ml)</strong><br>4000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-59-K00244</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>COCA-COLA SATIŞ VE DAĞITIM A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>026318</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Direkt kullanım içindir. Soğuk içilmesi tavsiye edilir.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 4716,
            "brand": {
              "name": "Coca-Cola",
              "id": 4716,
              "prettyName": "coca-cola-b-126c"
            },
            "categoryId": 40000000070255,
            "category": {
              "name": "Gazlı İçecek",
              "id": 40000000070255,
              "stockLegalAmount": 100,
              "prettyName": "gazli-icecek-c-1126f"
            },
            "categoryAscendants": [
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Kolalı",
                "id": 40000000072541,
                "stockLegalAmount": 100,
                "prettyName": "kolali-c-11b5d"
              },
              {
                "name": "Gazlı İçecek",
                "id": 40000000070255,
                "stockLegalAmount": 100,
                "prettyName": "gazli-icecek-c-1126f"
              },
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              },
              {
                "name": "Geniş Portföy",
                "id": 40000196892911,
                "prettyName": "genis-portfoy-l-bbc58ef"
              },
              {
                "name": "Yaz İhtiyaçları Migros Hemen'de",
                "id": 40000196898287,
                "prettyName": "yaz-ihtiyaclari-migros-hemende-l-bbc6def"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08010909/08010909_1-d0c5be-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08010909/08010909_1-d0c5be.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08010909/08010909_1-d0c5be-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08010909/08010909_1-d0c5be-46x46.jpg"
                },
                "productId": 40000008010909
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "coca-cola-zero-sugar-pet-4x1-l-p-7a3c9d",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "4100"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Su, karbondioksit , renklendirici karamel , asitliği düzenleyiciler ( fosforik asit, sodyum sitrat ) tatlandırıcılar ( sukraloz , asesulfam K) aroma vericiler koruyucu ( sodyum benzoat) kafein ( max 0,150 g/l)"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "4000"
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
                  "value": "TR-59-K00244"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "COCA-COLA SATIŞ VE DAĞITIM A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "026318"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Direkt kullanım içindir. Soğuk içilmesi tavsiye edilir."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "0.7"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "0.2"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "0.0"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.0"
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
                  "value": "0.0"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.0"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 135 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 2,
            "maxAmountDescription": "Bu üründen en fazla 2 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 100 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 19290,
            "salePrice": 19290,
            "loyaltyPrice": 19290,
            "shownPrice": 19290,
            "unitPrice": "(48,22 TL/Litre)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000008010907,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "08010907",
            "name": "Fanta Portakal Aromalı Pet 4x1 L",
            "description": "<p>C vitaminli Fanta C ile hem lezzetli hem de ferahlatan bir mola ver.</p><p>Hemen ürünü sePetine ekle!</p><p>• Portakal aromalı gazoz</p><p>• 4X1 L </p><p>• Pet</p><p>Kap Bi' Fanta Eğlence Eve Gelsin</p><p>Muhteşem C Vitaminli Fanta C, bir bardakta günlük C Vitamini ihtiyacının az %50'sini karşılar. </p><p>Cazibesi lezzetinde, çıkış noktası eğlence. Kıpır kıpır portakalın tadı ve Fanta C'nin baloncuklarıyla eğlenceyi eve taşı!</p><p> </p><p><strong>İçindekiler</strong><br>Su, şeker (S)  veya fruktoz glukoz şurubu ( F) , karbondioksit , portakal suyu konsantresi ( meyve oranı en az %3 ) , asitliği düzenleyiciler ( sitrik asit, malik asit , sodyum sitrat ), c vitamini koruyucu ( potasyum sorbat ) , aroma vericiler ,tatlandırıcılar ( sodyum siklamat, sakkarin ) renklendirici ( beta karoten ) kıvam arttırıcılar ( keçi boynuzu gamı )</p><p><strong>Net Miktar (g/ml)</strong><br>4000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-59-K00244</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>COCA-COLA SATIŞ VE DAĞITIM A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>026318</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Direkt kullanım içindir. Soğuk içilmesi tavsiye edilir.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p>C vitaminli Fanta C ile hem lezzetli hem de ferahlatan bir mola ver.</p><p>Hemen ürünü sePetine ekle!</p><p>• Portakal aromalı gazoz</p><p>• 4X1 L </p><p>• Pet</p><p>Kap Bi' Fanta Eğlence Eve Gelsin</p><p>Muhteşem C Vitaminli Fanta C, bir bardakta günlük C Vitamini ihtiyacının az %50'sini karşılar. </p><p>Cazibesi lezzetinde, çıkış noktası eğlence. Kıpır kıpır portakalın tadı ve Fanta C'nin baloncuklarıyla eğlenceyi eve taşı!</p><p> </p>",
            "information": "<p><strong>İçindekiler</strong><br>Su, şeker (S)  veya fruktoz glukoz şurubu ( F) , karbondioksit , portakal suyu konsantresi ( meyve oranı en az %3 ) , asitliği düzenleyiciler ( sitrik asit, malik asit , sodyum sitrat ), c vitamini koruyucu ( potasyum sorbat ) , aroma vericiler ,tatlandırıcılar ( sodyum siklamat, sakkarin ) renklendirici ( beta karoten ) kıvam arttırıcılar ( keçi boynuzu gamı )</p><p><strong>Net Miktar (g/ml)</strong><br>4000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-59-K00244</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>COCA-COLA SATIŞ VE DAĞITIM A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>026318</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL</p><p><strong>Kullanım Önerileri</strong><br>Direkt kullanım içindir. Soğuk içilmesi tavsiye edilir.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 656,
            "brand": {
              "name": "Fanta",
              "id": 656,
              "prettyName": "fanta-b-290"
            },
            "categoryId": 40000000070255,
            "category": {
              "name": "Gazlı İçecek",
              "id": 40000000070255,
              "stockLegalAmount": 100,
              "prettyName": "gazli-icecek-c-1126f"
            },
            "categoryAscendants": [
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Meyveli",
                "id": 40000000072542,
                "stockLegalAmount": 100,
                "prettyName": "meyveli-c-11b5e"
              },
              {
                "name": "Gazlı İçecek",
                "id": 40000000070255,
                "stockLegalAmount": 100,
                "prettyName": "gazli-icecek-c-1126f"
              },
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08010907/08010907_1-a179f1-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08010907/08010907_1-a179f1.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08010907/08010907_1-a179f1-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08010907/08010907_1-a179f1-46x46.jpg"
                },
                "productId": 40000008010907
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08010907/8010907_yan-631aca-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08010907/8010907_yan-631aca.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08010907/8010907_yan-631aca-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08010907/8010907_yan-631aca-46x46.jpg"
                },
                "productId": 40000008010907
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "fanta-portakal-aromali-pet-4x1-l-p-7a3c9b",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "4300"
                }
              ],
              "MISC": [
                {
                  "id": 40000000000051,
                  "type": "MISC",
                  "name": "Ürün Özellikleri",
                  "priority": 0,
                  "customId": "productDetailsImage",
                  "value": "https://images.migrosone.com/hemen/custom/08010907-df1dea9e.jpg"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "Su, şeker (S)  veya fruktoz glukoz şurubu ( F) , karbondioksit , portakal suyu konsantresi ( meyve oranı en az %3 ) , asitliği düzenleyiciler ( sitrik asit, malik asit , sodyum sitrat ), c vitamini koruyucu ( potasyum sorbat ) , aroma vericiler ,tatlandırıcılar ( sodyum siklamat, sakkarin ) renklendirici ( beta karoten ) kıvam arttırıcılar ( keçi boynuzu gamı )"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "4000"
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
                  "value": "TR-59-K00244"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "COCA-COLA SATIŞ VE DAĞITIM A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "026318"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "ESENKENT MAH.DENİZ FENERİ SOK. NO.4 ÜMRANİYE İSTANBUL"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Direkt kullanım içindir. Soğuk içilmesi tavsiye edilir."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "127.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "30.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "0.0"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.0"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "7.3"
                },
                {
                  "id": 40000000000034,
                  "type": "NUTRITIONAL",
                  "name": "Şeker (g)",
                  "priority": 10,
                  "customId": "glucose",
                  "value": "7.3"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "0.0"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.0"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 135 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 6,
            "maxAmountDescription": "Bu üründen en fazla 6 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 100 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 19290,
            "salePrice": 19290,
            "loyaltyPrice": 19290,
            "shownPrice": 19290,
            "unitPrice": "(48,22 TL/Litre)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000031162840,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "31162840",
            "name": "Sleepy Yüzey Temizlik Havlusu Okyanus 100'lü",
            "description": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>ERUSLU SAĞLIK ÜRÜNLERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705863</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>4.ORGANİZE SAN.BÖL. 83424 NOLU CD. NO:3 ŞEHİTKAMİL GAZİANTEP</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>ERUSLU SAĞLIK ÜRÜNLERİ SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>705863</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>4.ORGANİZE SAN.BÖL. 83424 NOLU CD. NO:3 ŞEHİTKAMİL GAZİANTEP</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 5176,
            "brand": {
              "name": "Sleepy",
              "id": 5176,
              "prettyName": "sleepy-b-1438"
            },
            "categoryId": 40000000070326,
            "category": {
              "name": "Kağıt",
              "id": 40000000070326,
              "stockLegalAmount": 20,
              "prettyName": "kagit-c-112b6"
            },
            "categoryAscendants": [
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Kağıt Temizlik Bezi",
                "id": 40000000072854,
                "stockLegalAmount": 20,
                "prettyName": "kagit-temizlik-bezi-c-11c96"
              },
              {
                "name": "Kağıt",
                "id": 40000000070326,
                "stockLegalAmount": 20,
                "prettyName": "kagit-c-112b6"
              },
              {
                "name": "Temizlik & Ev Gereçleri",
                "id": 40000000070320,
                "stockLegalAmount": 20,
                "prettyName": "temizlik-ev-gerecleri-c-112b0"
              }
            ],
            "lists": [
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/31162840/31162840_1-3cfe55-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/31162840/31162840_1-3cfe55.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/31162840/31162840_1-3cfe55-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/31162840/31162840_1-3cfe55-46x46.jpg"
                },
                "productId": 40000031162840
              }
            ],
            "legalImages": [],
            "energyImages": [],
            "prettyName": "sleepy-yuzey-temizlik-havlusu-okyanus-100lu-p-1db81d8",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "200"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "ERUSLU SAĞLIK ÜRÜNLERİ SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "705863"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "4.ORGANİZE SAN.BÖL. 83424 NOLU CD. NO:3 ŞEHİTKAMİL GAZİANTEP"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 69,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 2,
            "maxAmountDescription": "Bu üründen en fazla 2 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 20 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 13350,
            "salePrice": 13350,
            "loyaltyPrice": 13350,
            "shownPrice": 13350,
            "unitPrice": "(1,33 TL/Adet)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000001010288,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "01010288",
            "name": "Mg Mutlu Baldo Pirinç 2,5 Kg",
            "description": "<p><strong>İçindekiler</strong><br>baldo pirinç</p><p><strong>Net Miktar (g/ml)</strong><br>2500</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>MUTLULAR NAKLİYE AKARYAKIT GIDA OTOMOTİV TARIM VE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>038566</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>100.YIL MAH.İSTİKLAL BLV. NO:146 GÖNEN BALIKESİR</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "",
            "information": "<p><strong>İçindekiler</strong><br>baldo pirinç</p><p><strong>Net Miktar (g/ml)</strong><br>2500</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>MUTLULAR NAKLİYE AKARYAKIT GIDA OTOMOTİV TARIM VE</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>038566</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>100.YIL MAH.İSTİKLAL BLV. NO:146 GÖNEN BALIKESİR</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 5779,
            "brand": {
              "name": "Mutlu",
              "id": 5779,
              "prettyName": "mutlu-b-1693"
            },
            "categoryId": 40000000070301,
            "category": {
              "name": "Bakliyat",
              "id": 40000000070301,
              "stockLegalAmount": 50,
              "prettyName": "bakliyat-c-1129d"
            },
            "categoryAscendants": [
              {
                "name": "Temel Gıda",
                "id": 40000000070300,
                "stockLegalAmount": 50,
                "prettyName": "temel-gida-c-1129c"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Baldo Pirinç",
                "id": 40000000072881,
                "stockLegalAmount": 50,
                "prettyName": "baldo-pirinc-c-11cb1"
              },
              {
                "name": "Bakliyat",
                "id": 40000000070301,
                "stockLegalAmount": 50,
                "prettyName": "bakliyat-c-1129d"
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
                "name": "Seç Al Kampanyası!",
                "id": 40000196901202,
                "prettyName": "sec-al-kampanyasi-l-bbc7952"
              },
              {
                "name": "Seç Al Kampanyası!",
                "id": 40000196901201,
                "prettyName": "sec-al-kampanyasi-l-bbc7951"
              }
            ],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/01010288/01010288_1-0d8104-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/01010288/01010288_1-0d8104.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/01010288/01010288_1-0d8104-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/01010288/01010288_1-0d8104-46x46.jpg"
                },
                "productId": 40000001010288
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/01010288/01010288_bicakizi-cf61a9.jpg"
                },
                "productId": 40000001010288
              }
            ],
            "energyImages": [],
            "prettyName": "mg-mutlu-baldo-pirinc-25-kg-p-f6a70",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "2500"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "baldo pirinç"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "2500"
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
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "MUTLULAR NAKLİYE AKARYAKIT GIDA OTOMOTİV TARIM VE"
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "038566"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "100.YIL MAH.İSTİKLAL BLV. NO:146 GÖNEN BALIKESİR"
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "336.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "1404.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "0.8"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.0"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "78.0"
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
                  "value": "7.3"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "0.29"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [
              {
                "type": "CRM_DISCOUNT",
                "tag": "50 TL Sepette 179,95 TL"
              }
            ],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 50 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 23995,
            "salePrice": 23995,
            "loyaltyPrice": 23995,
            "shownPrice": 23995,
            "unitPrice": "(95,98 TL/Kg)",
            "discountRate": 0,
            "discounts": {},
            "discountDescriptions": [],
            "badges": [],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178454",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          }
        ]
      },
      {
        "title": "Doğanay Ürünleri!",
        "name": "Doğanay Ürünleri!",
        "description": "Doğanay Ürünleri!",
        "storeProductInfos": [
          {
            "id": 40000008078920,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "08078920",
            "name": "Doğanay Şalgam Suyu Acılı 1 L",
            "description": "<p>Özel yetiştirilen mor havuçlar, özenle temizlenerek; su, kaya tuzu ve bulgurla tam 35 gün boyunca mayalanıyor ve fermentasyon süresini tamamladığında Doğanay Şalgam’ı eşsiz lezzetine kavuşturuyor.&nbsp;</p><p>Etli yemekler, köfteli yemekler, dolmalar hatta tavuk ve balık yanına da çok yakışan Doğanay Şalgam yemeğin lezzetine lezzet katmasının yanında gazsız ve şekersiz olduğu için de şişkinlik yapmıyor, kolay içiliyor.</p><p>Hijyen ve gıda güvenliğine maksimum önem verilerek üretilen Doğanay ürünlerini gönül rahatlığıyla tüketebilirsiniz.</p><p><strong>İçindekiler</strong><br>SU, MOR HAVUÇ, TUZ,BULGUR (BUĞDAY ÜRÜNÜ), ŞALGAM TURBU, KORUYUCU(SODYUM BENZOAT), SÜS BİBERİ</p><p><strong>Alerjen Uyarısı</strong><br>bulgur içerir.</p><p><strong>Net Miktar (g/ml)</strong><br>1000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-01-K-000049</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>DOĞANAY GIDA TARIM VE HAYVANCILIK SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>025553</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>HACI SABANCI ORG.SAN.BÖLGESİ S.DEMİREL BULV. NO.13 SARIÇAM ADANA</p><p><strong>Kullanım Önerileri</strong><br>Açıldıktan sonra buzdolabında muhafaza ediniz ve bir hafta içinde tüketiniz.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p>Özel yetiştirilen mor havuçlar, özenle temizlenerek; su, kaya tuzu ve bulgurla tam 35 gün boyunca mayalanıyor ve fermentasyon süresini tamamladığında Doğanay Şalgam’ı eşsiz lezzetine kavuşturuyor.&nbsp;</p><p>Etli yemekler, köfteli yemekler, dolmalar hatta tavuk ve balık yanına da çok yakışan Doğanay Şalgam yemeğin lezzetine lezzet katmasının yanında gazsız ve şekersiz olduğu için de şişkinlik yapmıyor, kolay içiliyor.</p><p>Hijyen ve gıda güvenliğine maksimum önem verilerek üretilen Doğanay ürünlerini gönül rahatlığıyla tüketebilirsiniz.</p>",
            "information": "<p><strong>İçindekiler</strong><br>SU, MOR HAVUÇ, TUZ,BULGUR (BUĞDAY ÜRÜNÜ), ŞALGAM TURBU, KORUYUCU(SODYUM BENZOAT), SÜS BİBERİ</p><p><strong>Alerjen Uyarısı</strong><br>bulgur içerir.</p><p><strong>Net Miktar (g/ml)</strong><br>1000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-01-K-000049</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>DOĞANAY GIDA TARIM VE HAYVANCILIK SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>025553</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>HACI SABANCI ORG.SAN.BÖLGESİ S.DEMİREL BULV. NO.13 SARIÇAM ADANA</p><p><strong>Kullanım Önerileri</strong><br>Açıldıktan sonra buzdolabında muhafaza ediniz ve bir hafta içinde tüketiniz.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 564,
            "brand": {
              "name": "Doğanay",
              "id": 564,
              "prettyName": "doganay-b-234"
            },
            "categoryId": 40000000070264,
            "category": {
              "name": "Şalgam",
              "id": 40000000070264,
              "stockLegalAmount": 100,
              "prettyName": "salgam-c-11278"
            },
            "categoryAscendants": [
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Şalgam",
                "id": 40000000070264,
                "stockLegalAmount": 100,
                "prettyName": "salgam-c-11278"
              },
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08078920/8078920_1-d368c9-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08078920/8078920_1-d368c9.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08078920/8078920_1-d368c9-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08078920/8078920_1-d368c9-46x46.jpg"
                },
                "productId": 40000008078920
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08078920/8078920_2-3d7f31-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08078920/8078920_2-3d7f31.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08078920/8078920_2-3d7f31-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08078920/8078920_2-3d7f31-46x46.jpg"
                },
                "productId": 40000008078920
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/08078920/08078920_bicakizi-d98b3c.jpg"
                },
                "productId": 40000008078920
              }
            ],
            "energyImages": [],
            "prettyName": "doganay-salgam-suyu-acili-1-l-p-7b4648",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "1000"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "SU, MOR HAVUÇ, TUZ,BULGUR (BUĞDAY ÜRÜNÜ), ŞALGAM TURBU, KORUYUCU(SODYUM BENZOAT), SÜS BİBERİ"
                },
                {
                  "id": 40000000000055,
                  "type": "MAIN",
                  "name": "Alerjen Uyarısı",
                  "priority": 2,
                  "value": "bulgur içerir."
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "1000"
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
                  "value": "TR-01-K-000049"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "DOĞANAY GIDA TARIM VE HAYVANCILIK SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "025553"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "HACI SABANCI ORG.SAN.BÖLGESİ S.DEMİREL BULV. NO.13 SARIÇAM ADANA"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Açıldıktan sonra buzdolabında muhafaza ediniz ve bir hafta içinde tüketiniz."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "3.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "12.6"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "0.12"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.12"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "0.16"
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
                  "id": 40000000000035,
                  "type": "NUTRITIONAL",
                  "name": "Lif (g)",
                  "priority": 13,
                  "value": "0.1"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "0.24"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "1.7"
                },
                {
                  "id": 40000000000037,
                  "type": "NUTRITIONAL",
                  "name": "Sodyum (g)",
                  "priority": 16,
                  "value": "0.76"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 100 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 4500,
            "salePrice": 4500,
            "loyaltyPrice": 4500,
            "shownPrice": 4500,
            "discountRate": 0,
            "discounts": {
              "CROSS_DISCOUNT": ["Sepetine 2. Ürünü Eklemeyi Unutma"]
            },
            "discountDescriptions": ["Sepetine 2. Ürünü Eklemeyi Unutma"],
            "badges": [
              {
                "name": "CROSS_PROMOTED",
                "value": "2.si %50",
                "colorCodes": ["#4C437A", "#12D180"]
              }
            ],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178455",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          },
          {
            "id": 40000008078930,
            "storeId": 40000000006371,
            "storeGroupId": 1,
            "warehouseId": 6371,
            "sku": "08078930",
            "name": "Doğanay Şalgam Suyu Sade 1 L",
            "description": "<p>Özel yetiştirilen mor havuçlar, özenle temizlenerek; su, kaya tuzu ve bulgurla tam 35 gün boyunca mayalanıyor ve fermentasyon süresini tamamladığında Doğanay Şalgam’ı eşsiz lezzetine kavuşturuyor.&nbsp;</p><p>\tEtli yemekler, köfteli yemekler, dolmalar hatta tavuk ve balık yanına da çok yakışan Doğanay Şalgam yemeğin lezzetine lezzet katmasının yanında gazsız ve şekersiz olduğu için de şişkinlik yapmıyor, kolay içiliyor.</p><p>\tHijyen ve gıda güvenliğine maksimum önem verilerek üretilen Doğanay ürünlerini gönül rahatlığıyla tüketebilirsiniz.</p><p><br></p><p><strong>İçindekiler</strong><br>SU, MOR HAVUÇ, TUZ, BULGUR(BUĞDAY ÜRÜNÜ), ŞALGAM TURBU, KORUYUCU(SODYUM BENZOAT)</p><p><strong>Net Miktar (g/ml)</strong><br>1000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-01-K-000049</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>DOĞANAY GIDA TARIM VE HAYVANCILIK SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>025553</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>HACI SABANCI ORG.SAN.BÖLGESİ S.DEMİREL BULV. NO.13 SARIÇAM ADANA</p><p><strong>Kullanım Önerileri</strong><br>Açıldıktan sonra buzdolabında muhafaza ediniz ve 1 hafta içerisinde tüketiniz.</p><p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "shortDescription": "<p>Özel yetiştirilen mor havuçlar, özenle temizlenerek; su, kaya tuzu ve bulgurla tam 35 gün boyunca mayalanıyor ve fermentasyon süresini tamamladığında Doğanay Şalgam’ı eşsiz lezzetine kavuşturuyor.&nbsp;</p><p>\tEtli yemekler, köfteli yemekler, dolmalar hatta tavuk ve balık yanına da çok yakışan Doğanay Şalgam yemeğin lezzetine lezzet katmasının yanında gazsız ve şekersiz olduğu için de şişkinlik yapmıyor, kolay içiliyor.</p><p>\tHijyen ve gıda güvenliğine maksimum önem verilerek üretilen Doğanay ürünlerini gönül rahatlığıyla tüketebilirsiniz.</p><p><br></p>",
            "information": "<p><strong>İçindekiler</strong><br>SU, MOR HAVUÇ, TUZ, BULGUR(BUĞDAY ÜRÜNÜ), ŞALGAM TURBU, KORUYUCU(SODYUM BENZOAT)</p><p><strong>Net Miktar (g/ml)</strong><br>1000</p><p><strong>Saklama Koşulları</strong><br>Serin ve Kuru Yerde Muhafaza Ediniz</p><p><strong>Menşei</strong><br>TÜRKİYE</p><p><strong>İşletme Kayıt No</strong><br>TR-01-K-000049</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı</strong><br>DOĞANAY GIDA TARIM VE HAYVANCILIK SAN.VE TİC.A.Ş.</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası</strong><br>025553</p><p><strong>İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi</strong><br>HACI SABANCI ORG.SAN.BÖLGESİ S.DEMİREL BULV. NO.13 SARIÇAM ADANA</p><p><strong>Kullanım Önerileri</strong><br>Açıldıktan sonra buzdolabında muhafaza ediniz ve 1 hafta içerisinde tüketiniz.</p>",
            "propertyLegalText": "<p><strong>Ürün Bilgilerini Kullanma Hakkında</strong><br>İnternet sitemizde ve online satış kanallarımızda yer alan ürün etiket bilgileri, ürünün tedarikçisi tarafından Migros Ticaret A.Ş.’ye iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile internet sitemiz ve online satış kanallarımızda bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.</p>",
            "brandId": 564,
            "brand": {
              "name": "Doğanay",
              "id": 564,
              "prettyName": "doganay-b-234"
            },
            "categoryId": 40000000070264,
            "category": {
              "name": "Şalgam",
              "id": 40000000070264,
              "stockLegalAmount": 100,
              "prettyName": "salgam-c-11278"
            },
            "categoryAscendants": [
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "categoriesForSorting": [
              {
                "name": "Şalgam",
                "id": 40000000070264,
                "stockLegalAmount": 100,
                "prettyName": "salgam-c-11278"
              },
              {
                "name": "Su & İçecek",
                "id": 40000000070254,
                "stockLegalAmount": 100,
                "prettyName": "su-icecek-c-1126e"
              }
            ],
            "lists": [],
            "images": [
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08078930/8078930_1-d0ba15-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08078930/8078930_1-d0ba15.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08078930/8078930_1-d0ba15-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08078930/8078930_1-d0ba15-46x46.jpg"
                },
                "productId": 40000008078930
              },
              {
                "urls": {
                  "PRODUCT_LIST": "https://images.migrosone.com/hemen/product/08078930/8078930_2-0ffa78-105x105.jpg",
                  "PRODUCT_DETAIL": "https://images.migrosone.com/hemen/product/08078930/8078930_2-0ffa78.jpg",
                  "PRODUCT_HD": "https://images.migrosone.com/hemen/product/08078930/8078930_2-0ffa78-1650x1650.jpg",
                  "CART": "https://images.migrosone.com/hemen/product/08078930/8078930_2-0ffa78-46x46.jpg"
                },
                "productId": 40000008078930
              }
            ],
            "legalImages": [
              {
                "urls": {
                  "LEGAL": "https://images.migrosone.com/hemen/product-legal/08078930/08078930_bicakizi-7f804a.jpg"
                },
                "productId": 40000008078930
              }
            ],
            "energyImages": [],
            "prettyName": "doganay-salgam-suyu-sade-1-l-p-7b4652",
            "productInstallmentInfo": {
              "installmentApplicable": false,
              "maxInstallmentCount": 1,
              "installmentDescription": "<p><strong>Ödeme ve Taksit Seçenekleri Hakkında</strong><br>Sepetinizde taksit seçeneği birbirinden farklı ürünlerin yer alması halinde, uygulanabilecek taksit sayısı, taksit seçeneği en düşük olan ürün baz alınarak belirlenir.<br>Taksit ve vade farkı uygulamalarında tek taraflı değişiklik yapılması hakkı saklıdır.</p>"
            },
            "productOptionInfos": [],
            "propertyInfosMap": {
              "LEGAL": [
                {
                  "id": 40000000000422,
                  "type": "LEGAL",
                  "name": "Kurye İçin Ağırlık",
                  "priority": 3,
                  "customId": "courier_weight",
                  "value": "1100"
                }
              ],
              "MAIN": [
                {
                  "id": 40000000000054,
                  "type": "MAIN",
                  "name": "İçindekiler",
                  "priority": 1,
                  "value": "SU, MOR HAVUÇ, TUZ, BULGUR(BUĞDAY ÜRÜNÜ), ŞALGAM TURBU, KORUYUCU(SODYUM BENZOAT)"
                },
                {
                  "id": 40000000000056,
                  "type": "MAIN",
                  "name": "Net Miktar (g/ml)",
                  "priority": 3,
                  "customId": "netKg",
                  "value": "1000"
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
                  "value": "TR-01-K-000049"
                },
                {
                  "id": 40000000000059,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı",
                  "priority": 7,
                  "customId": "productSupplier",
                  "value": "DOĞANAY GIDA TARIM VE HAYVANCILIK SAN.VE TİC.A.Ş."
                },
                {
                  "id": 40000000000294,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Numarası",
                  "priority": 8,
                  "customId": "productSupplierId",
                  "value": "025553"
                },
                {
                  "id": 40000000000378,
                  "type": "MAIN",
                  "name": "İşletmeci / Üretici / İthalatçı / Dağıtıcı Adresi",
                  "priority": 10,
                  "customId": "productSupplierAddress",
                  "value": "HACI SABANCI ORG.SAN.BÖLGESİ S.DEMİREL BULV. NO.13 SARIÇAM ADANA"
                },
                {
                  "id": 40000000000060,
                  "type": "MAIN",
                  "name": "Kullanım Önerileri",
                  "priority": 11,
                  "value": "Açıldıktan sonra buzdolabında muhafaza ediniz ve 1 hafta içerisinde tüketiniz."
                }
              ],
              "NUTRITIONAL": [
                {
                  "id": 40000000000029,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kcal)",
                  "priority": 1,
                  "customId": "energyKcal",
                  "value": "3.0"
                },
                {
                  "id": 40000000000065,
                  "type": "NUTRITIONAL",
                  "name": "Enerji (kJ)",
                  "priority": 2,
                  "customId": "energyKj",
                  "value": "13.0"
                },
                {
                  "id": 40000000000030,
                  "type": "NUTRITIONAL",
                  "name": "Yağ (g)",
                  "priority": 3,
                  "customId": "fat",
                  "value": "0.1"
                },
                {
                  "id": 40000000000031,
                  "type": "NUTRITIONAL",
                  "name": "Doymuş yağ (g)",
                  "priority": 4,
                  "customId": "saturatedFat",
                  "value": "0.1"
                },
                {
                  "id": 40000000000033,
                  "type": "NUTRITIONAL",
                  "name": "Karbonhidrat (g)",
                  "priority": 9,
                  "customId": "carbohydrate",
                  "value": "0.5"
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
                  "id": 40000000000035,
                  "type": "NUTRITIONAL",
                  "name": "Lif (g)",
                  "priority": 13,
                  "value": "0.5"
                },
                {
                  "id": 40000000000036,
                  "type": "NUTRITIONAL",
                  "name": "Protein (g)",
                  "priority": 14,
                  "customId": "protein",
                  "value": "0.5"
                },
                {
                  "id": 40000000000038,
                  "type": "NUTRITIONAL",
                  "name": "Tuz (g)",
                  "priority": 15,
                  "customId": "salt",
                  "value": "1.7"
                },
                {
                  "id": 40000000000037,
                  "type": "NUTRITIONAL",
                  "name": "Sodyum (g)",
                  "priority": 16,
                  "value": "0.7"
                }
              ]
            },
            "specialDietTags": [],
            "crmDiscountTags": [],
            "attributeTags": [],
            "status": "IN_SALE",
            "saleable": true,
            "unit": "PIECE",
            "initialIncrementAmount": 1,
            "incrementAmount": 1,
            "maxAmount": 10,
            "maxAmountDescription": "Bu üründen en fazla 10 adet sipariş verilebilir. Belirtilen adet üzerindeki siparişlerin iptal edilmesi hakkı saklıdır.",
            "stockLegalAmountDescription": "Bu fiyattan satılmak üzere toplam 100 adet stok bulunmaktadır.",
            "unitAmount": 1,
            "regularPrice": 4500,
            "salePrice": 4500,
            "loyaltyPrice": 4500,
            "shownPrice": 4500,
            "discountRate": 0,
            "discounts": {
              "CROSS_DISCOUNT": ["Sepetine 2. Ürünü Eklemeyi Unutma"]
            },
            "discountDescriptions": ["Sepetine 2. Ürünü Eklemeyi Unutma"],
            "badges": [
              {
                "name": "CROSS_PROMOTED",
                "value": "2.si %50",
                "colorCodes": ["#4C437A", "#12D180"]
              }
            ],
            "storePortfolio": "MARKET",
            "referrerEventId": "1758058376322178455",
            "sponsored": false,
            "productNoteAppendable": false,
            "buyNowApplicable": false,
            "generalInformation": "Ürünün stok, fiyat ve kampanya bilgisi, teslimatı gerçekleştirecek mağazanın stok, fiyat ve kampanya bilgilerine göre belirlenmektedir.",
            "sortedProperties": {},
            "properties": {}
          }
        ]
      }
    ],
    "specialDiscountCampaigns": [],
    "popUpCampaigns": [],
    "bannersMap": {},
    "remainingRevenueRecommendations": [],
    "eventInfo": {
      "eventId": 1758058376324030696,
      "screenName": "Shopping Cart"
    },
    "cartCampaignSuggestions": [],
    "foodProductDiscountSuggestions": []
  }
}
```
