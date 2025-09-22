# Migros Hemen Users

### Users

```bash
curl 'https://www.migros.com.tr/rest/user-bff/hemen/users' \
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

### Users Response

```json
{
  "user": {
    "masterId": 2002300514,
    "companyGroup": "MIGROS",
    "email": "zatende@gmail.com",
    "emailVerified": true,
    "firstName": "Ali Burak",
    "lastName": "Özden",
    "gender": "",
    "phoneNumber": "5310134718",
    "phoneNumberVerified": true,
    "crmId": 107376218,
    "crmGroupId": 117721210,
    "crmStatus": "VERIFIED",
    "loyaltyCard": "6002085783414514",
    "loyaltySubscriptions": [],
    "permitEmail": true,
    "permitSms": true,
    "permitCall": true,
    "permitNotification": false,
    "anonymous": false,
    "createdAt": 1573796869000,
    "id": 40002002854868,
    "companyId": 40,
    "isStudent": false
  },
  "stateInfo": {
    "cartMode": "MAIN",
    "showEmailVerificationReminder": false,
    "showLocationPermissionRequest": true,
    "showAgreementAcceptReminder": true
  },
  "agreementInfo": {
    "membershipAgreementEnforcementAction": "NONE",
    "privacyAgreementEnforcementAction": "NONE",
    "token": "016659"
  }
}
```
