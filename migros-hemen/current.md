## Migros Hemen Current (Get Current Location)

### Get Current Location

```bash
curl 'https://www.migros.com.tr/rest/delivery-bff/hemen/locations/info/current' \
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

### Get Current Location Response

```json
{
  "serviceAreaObjectType": "POLYGON",
  "serviceAreaObjectId": 7275,
  "fullServiceAreaObjectName": "İstanbul,Kartal",
  "storeDeliveryModel": "LAST_MILE",
  "addressId": 40000107210382,
  "selectedDeliveryAddressInfo": {
    "id": 40000107210382,
    "addressName": "Uniarch",
    "latitude": 40.899563458382595,
    "longitude": 29.20427966862917,
    "fullAddress": "Çavuşoğlu Mh. Yakacık Cd. Bina No:130 Kat:1 Daire No:1 Kartal/İstanbul",
    "storeId": 40000000006371,
    "storeDeliveryModel": "LAST_MILE",
    "minimumCartAmount": 10000,
    "deliveryFee": 4499,
    "deliveryFeeTiersRange": "0,00-44,99 TL"
  }
}
```
