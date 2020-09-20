const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/api/user');
const like = require('./routes/api/like');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB is Connected...'))
    .catch(err => console.log(err))

app.use('/api/user', user)
app.use('/api/like', like)


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is connected to port ${port}`));





// [{ "domain": ".hotstar.com", "expirationDate": 1540648139, "hostOnly": false, "httpOnly": false, "name": "_fbp", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "fb.1.1540640226326.51867962", "id": 1 }, { "domain": ".hotstar.com", "expirationDate": 1603712363, "hostOnly": false, "httpOnly": false, "name": "_ga", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "GA1.2.19261169.1540640226", "id": 2 }, { "domain": ".hotstar.com", "expirationDate": 1540640423, "hostOnly": false, "httpOnly": false, "name": "_gat_UA-53733575-1", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "1", "id": 3 }, { "domain": ".hotstar.com", "expirationDate": 1548416226, "hostOnly": false, "httpOnly": false, "name": "_gcl_au", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "1.1.853832924.1540640226", "id": 4 }, { "domain": ".hotstar.com", "expirationDate": 1540726763, "hostOnly": false, "httpOnly": false, "name": "_gid", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "GA1.2.393548790.1540640226", "id": 5 }, { "domain": ".hotstar.com", "expirationDate": 1572176251, "hostOnly": false, "httpOnly": false, "name": "ajs_anonymous_id", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "%227e1f8477-85c5-4338-a308-477255d93b66%22", "id": 6 }, { "domain": ".hotstar.com", "expirationDate": 1572176351, "hostOnly": false, "httpOnly": false, "name": "ajs_group_id", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "null", "id": 7 }, { "domain": ".hotstar.com", "expirationDate": 1572176351, "hostOnly": false, "httpOnly": false, "name": "ajs_user_id", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "%2222b94667-0a53-4f1d-847e-56726c52c14a%22", "id": 8 }, { "domain": ".hotstar.com", "expirationDate": 1572176363, "hostOnly": false, "httpOnly": false, "name": "mp_2db74d7ac94b0e2cd6e49b34b48b04a0_mixpanel", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "%7B%22distinct_id%22%3A%20%2222b94667-0a53-4f1d-847e-56726c52c14a%22%2C%22%24device_id%22%3A%20%22166b55037a11d2-062a619ecc3cce-52235773-49a10-166b55037a22aa%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22%24user_id%22%3A%20%2222b94667-0a53-4f1d-847e-56726c52c14a%22%2C%22web_app_version%22%3A%20%225.0.96.1%22%2C%22platform%22%3A%20%22mweb%22%2C%22subscription_status%22%3A%20%22Cancelled%22%2C%22p_id%22%3A%20%2222b94667-0a53-4f1d-847e-56726c52c14a%22%2C%22h_id%22%3A%20%22acn%7Cjalaj.bvb%40gmail.com%22%2C%22logged_in_status%22%3A%20true%2C%22cookie_id%22%3A%20%22e5a65a79-9a32-4d76-b2f9-4e71af5187c5%22%2C%22device_id%22%3A%20%22e5a65a79-9a32-4d76-b2f9-4e71af5187c5%22%2C%22plan_type%22%3A%20%22Premium%22%2C%22utm_source_last_touch%22%3A%20%22%22%2C%22utm_medium_last_touch%22%3A%20%22%22%2C%22utm_campaign_last_touch%22%3A%20%22%22%2C%22utm_term_last_touch%22%3A%20%22%22%2C%22utm_content_last_touch%22%3A%20%22%22%2C%22country%22%3A%20%22IN%22%2C%22state%22%3A%20%22MH%22%2C%22city%22%3A%20%22MUMBAI%22%2C%22lat%22%3A%20%2218.98%22%2C%22long%22%3A%20%2272.83%22%2C%22utm_source_first_touch%22%3A%20%22%22%2C%22utm_medium_first_touch%22%3A%20%22%22%2C%22utm_campaign_first_touch%22%3A%20%22%22%2C%22utm_term_first_touch%22%3A%20%22%22%2C%22utm_content_first_touch%22%3A%20%22%22%2C%22login_method%22%3A%20%22Email%22%2C%22email%22%3A%20%22jalaj.bvb%40gmail.com%22%2C%22gender%22%3A%20%22%22%7D", "id": 9 }, { "domain": ".hotstar.com", "expirationDate": 1856000351, "hostOnly": false, "httpOnly": false, "name": "WZRK_G", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "4bdfd5aaa4704afbbd41512e5771c6e6", "id": 10 }, { "domain": ".hotstar.com", "expirationDate": 1540641556, "hostOnly": false, "httpOnly": false, "name": "WZRK_S_6ZW-45W-W84Z", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "%7B%22p%22%3A5%2C%22s%22%3A1540640228%2C%22t%22%3A1540640356%7D", "id": 11 }, { "domain": "www.hotstar.com", "expirationDate": 1540640403.638162, "hostOnly": true, "httpOnly": false, "name": "AK_SERVER_TIME", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "1540640344", "id": 12 }, { "domain": "www.hotstar.com", "expirationDate": 4696313815, "hostOnly": true, "httpOnly": false, "name": "device_id", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "e5a65a79-9a32-4d76-b2f9-4e71af5187c5", "id": 13 }, { "domain": "www.hotstar.com", "expirationDate": 4696313851, "hostOnly": true, "httpOnly": false, "name": "facebookCookie", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "{}", "id": 14 }, { "domain": "www.hotstar.com", "expirationDate": 1572176218, "hostOnly": true, "httpOnly": false, "name": "gr_reco", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "166b5501bd9-3da4ae923fb3e60d", "id": 15 }, { "domain": "www.hotstar.com", "hostOnly": true, "httpOnly": false, "name": "gr_rt", "path": "/", "sameSite": "no_restriction", "secure": false, "session": true, "storeId": "0", "value": "166b5501bd9-3da4ae923fb3e60d", "id": 16 }, { "domain": "www.hotstar.com", "expirationDate": 4696313818, "hostOnly": true, "httpOnly": false, "name": "guest_pid", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "bf445cec-4574-4aeb-9db7-a924e3fa5138", "id": 17 }, { "domain": "www.hotstar.com", "expirationDate": 4696313851, "hostOnly": true, "httpOnly": false, "name": "registered_pid", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "22b94667-0a53-4f1d-847e-56726c52c14a", "id": 18 }, { "domain": "www.hotstar.com", "expirationDate": 1572176224, "hostOnly": true, "httpOnly": false, "name": "stv_hotcookie", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "e5a65a79-9a32-4d76-b2f9-4e71af5187c5", "id": 19 }, { "domain": "www.hotstar.com", "expirationDate": 4696313851, "hostOnly": true, "httpOnly": false, "name": "userMemberCoockieObj", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "{\"userMemberEmail\":\"jalaj.bvb@gmail.com\",\"userMemberState\":\"SC\",\"userMemberName\":\"JALAJ KUMAR\",\"fbId\":\"\",\"crmAccountId\":\"acn|jalaj.bvb@gmail.com\",\"DOB\":\"\",\"gender\":\"\",\"loginMethod\":\"email\",\"subscriptions\":{\"in\":{\"HotstarPremium\":{\"expiry\":\"2018-11-09T13:12:40.000Z\",\"status\":\"C\"}}},\"pId\":\"22b94667-0a53-4f1d-847e-56726c52c14a\",\"hId\":\"acn|jalaj.bvb@gmail.com\",\"deviceId\":\"e5a65a79-9a32-4d76-b2f9-4e71af5187c5\",\"version\":\"v2\"}", "id": 20 }, { "domain": "www.hotstar.com", "expirationDate": 4696313851, "hostOnly": true, "httpOnly": false, "name": "userMemberHID", "path": "/", "sameSite": "no_restriction", "secure": false, "session": false, "storeId": "0", "value": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJoSWRcIjpcImFjbnxqYWxhai5idmJAZ21haWwuY29tXCIsXCJwSWRcIjpcIjIyYjk0NjY3LTBhNTMtNGYxZC04NDdlLTU2NzI2YzUyYzE0YVwiLFwibmFtZVwiOlwiSkFMQUogS1VNQVJcIixcImVtYWlsXCI6XCJqYWxhai5idmJAZ21haWwuY29tXCIsXCJpcFwiOlwiMTgwLjE0OS4yNDEuMTkxXCIsXCJjb3VudHJ5Q29kZVwiOlwiaW5cIixcImN1c3RvbWVyVHlwZVwiOlwibnVcIixcInR5cGVcIjpcImVtYWlsXCIsXCJkZXZpY2VJZFwiOlwiZTVhNjVhNzktOWEzMi00ZDc2LWIyZjktNGU3MWFmNTE4N2M1XCIsXCJ2ZXJzaW9uXCI6XCJ2MlwiLFwic3Vic2NyaXB0aW9uc1wiOntcImluXCI6e1wiSG90c3RhclByZW1pdW1cIjp7XCJleHBpcnlcIjpcIjIwMTgtMTEtMDlUMTM6MTI6NDAuMDAwWlwiLFwic3RhdHVzXCI6XCJDXCJ9fX19IiwiaXNzIjoiVU0iLCJleHAiOjE1NDA3MjY2NTJ9.Rea39kEU2aKqEQXL9-7M59AKW1lNjI8UrhVX2JkJ2-c", "id": 21 }]
