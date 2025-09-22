# Migros Hemen Estimated Delivery Time

### Estimated Delivery Time

```bash
curl 'https://www.migros.com.tr/rest/delivery-bff/hemen/deliveries/estimated-delivery-time?latitude=40.899563458382595&longitude=29.20427966862917&reid=1758059656411000002' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'Referer: https://www.migros.com.tr/hemen' \
  -H 'Accept-Language: tr' \
  -H 'X-FORWARDED-REST: true' \
  -H 'sec-ch-ua: "Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'X-Device-PWA: true' \
  -H 'X-PWA: true' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36' \
  -H 'Accept: application/json'
  
```

### Estimated Delivery Time Response (Success)

```json
// TODO: Add success response when available
```

### Estimated Delivery Time Response (Error)

```json
{
  "type": "about:blank",
  "title": "İşlem Başarısız",
  "status": 400,
  "detail": "08:30 - 22:00 saatleri arasında hizmetinizdeyiz.",
  "instance": "/deliveries/estimated-delivery-time",
  "errorCode": "99003"
}
```
