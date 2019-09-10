const cities  = [
    {
        "label": "Hà Nội",
        "value": "ha-noi",
        "type": "thanh-pho",
        "label_with_type": "Thành phố Hà Nội",
        "code": "01"
    },
    {
        "label": "Hồ Chí Minh",
        "value": "ho-chi-minh",
        "type": "thanh-pho",
        "label_with_type": "Thành phố Hồ Chí Minh",
        "code": "79"
    },
    {
        "label": "Đà Nẵng",
        "value": "da-nang",
        "type": "thanh-pho",
        "label_with_type": "Thành phố Đà Nẵng",
        "code": "48"
    },
    {
        "label": "An Giang",
        "value": "an-giang",
        "type": "tinh",
        "label_with_type": "Tỉnh An Giang",
        "code": "89"
    },
    {
        "label": "Kon Tum",
        "value": "kon-tum",
        "type": "tinh",
        "label_with_type": "Tỉnh Kon Tum",
        "code": "62"
    },
    {
        "label": "Đắk Nông",
        "value": "dak-nong",
        "type": "tinh",
        "label_with_type": "Tỉnh Đắk Nông",
        "code": "67"
    },
    {
        "label": "Sóc Trăng",
        "value": "soc-trang",
        "type": "tinh",
        "label_with_type": "Tỉnh Sóc Trăng",
        "code": "94"
    },
    {
        "label": "Bình Phước",
        "value": "binh-phuoc",
        "type": "tinh",
        "label_with_type": "Tỉnh Bình Phước",
        "code": "70"
    },
    {
        "label": "Hưng Yên",
        "value": "hung-yen",
        "type": "tinh",
        "label_with_type": "Tỉnh Hưng Yên",
        "code": "33"
    },
    {
        "label": "Thanh Hóa",
        "value": "thanh-hoa",
        "type": "tinh",
        "label_with_type": "Tỉnh Thanh Hóa",
        "code": "38"
    },
    {
        "label": "Quảng Trị",
        "value": "quang-tri",
        "type": "tinh",
        "label_with_type": "Tỉnh Quảng Trị",
        "code": "45"
    },
    {
        "label": "Tuyên Quang",
        "value": "tuyen-quang",
        "type": "tinh",
        "label_with_type": "Tỉnh Tuyên Quang",
        "code": "08"
    },
    {
        "label": "Quảng Ngãi",
        "value": "quang-ngai",
        "type": "tinh",
        "label_with_type": "Tỉnh Quảng Ngãi",
        "code": "51"
    },
    {
        "label": "Lào Cai",
        "value": "lao-cai",
        "type": "tinh",
        "label_with_type": "Tỉnh Lào Cai",
        "code": "10"
    },
    {
        "label": "Vĩnh Long",
        "value": "vinh-long",
        "type": "tinh",
        "label_with_type": "Tỉnh Vĩnh Long",
        "code": "86"
    },
    {
        "label": "Lâm Đồng",
        "value": "lam-dong",
        "type": "tinh",
        "label_with_type": "Tỉnh Lâm Đồng",
        "code": "68"
    },
    {
        "label": "Bình Định",
        "value": "binh-dinh",
        "type": "tinh",
        "label_with_type": "Tỉnh Bình Định",
        "code": "52"
    },
    {
        "label": "Nghệ An",
        "value": "nghe-an",
        "type": "tinh",
        "label_with_type": "Tỉnh Nghệ An",
        "code": "40"
    },
    {
        "label": "Kiên Giang",
        "value": "kien-giang",
        "type": "tinh",
        "label_with_type": "Tỉnh Kiên Giang",
        "code": "91"
    },
    {
        "label": "Hà Giang",
        "value": "ha-giang",
        "type": "tinh",
        "label_with_type": "Tỉnh Hà Giang",
        "code": "02"
    },
    {
        "label": "Phú Yên",
        "value": "phu-yen",
        "type": "tinh",
        "label_with_type": "Tỉnh Phú Yên",
        "code": "54"
    },
    {
        "label": "Lạng Sơn",
        "value": "lang-son",
        "type": "tinh",
        "label_with_type": "Tỉnh Lạng Sơn",
        "code": "20"
    },
    {
        "label": "Sơn La",
        "value": "son-la",
        "type": "tinh",
        "label_with_type": "Tỉnh Sơn La",
        "code": "14"
    },
    {
        "label": "Tây Ninh",
        "value": "tay-ninh",
        "type": "tinh",
        "label_with_type": "Tỉnh Tây Ninh",
        "code": "72"
    },
    {
        "label": "Nam Định",
        "value": "nam-dinh",
        "type": "tinh",
        "label_with_type": "Tỉnh Nam Định",
        "code": "36"
    },
    {
        "label": "Lai Châu",
        "value": "lai-chau",
        "type": "tinh",
        "label_with_type": "Tỉnh Lai Châu",
        "code": "12"
    },
    {
        "label": "Bến Tre",
        "value": "ben-tre",
        "type": "tinh",
        "label_with_type": "Tỉnh Bến Tre",
        "code": "83"
    },
    {
        "label": "Khánh Hòa",
        "value": "khanh-hoa",
        "type": "tinh",
        "label_with_type": "Tỉnh Khánh Hòa",
        "code": "56"
    },
    {
        "label": "Bình Thuận",
        "value": "binh-thuan",
        "type": "tinh",
        "label_with_type": "Tỉnh Bình Thuận",
        "code": "60"
    },
    {
        "label": "Cao Bằng",
        "value": "cao-bang",
        "type": "tinh",
        "label_with_type": "Tỉnh Cao Bằng",
        "code": "04"
    },
    {
        "label": "Hải Phòng",
        "value": "hai-phong",
        "type": "thanh-pho",
        "label_with_type": "Thành phố Hải Phòng",
        "code": "31"
    },
    {
        "label": "Ninh Bình",
        "value": "ninh-binh",
        "type": "tinh",
        "label_with_type": "Tỉnh Ninh Bình",
        "code": "37"
    },
    {
        "label": "Yên Bái",
        "value": "yen-bai",
        "type": "tinh",
        "label_with_type": "Tỉnh Yên Bái",
        "code": "15"
    },
    {
        "label": "Gia Lai",
        "value": "gia-lai",
        "type": "tinh",
        "label_with_type": "Tỉnh Gia Lai",
        "code": "64"
    },
    {
        "label": "Hoà Bình",
        "value": "hoa-binh",
        "type": "tinh",
        "label_with_type": "Tỉnh Hoà Bình",
        "code": "17"
    },
    {
        "label": "Bà Rịa - Vũng Tàu",
        "value": "ba-ria-vung-tau",
        "type": "tinh",
        "label_with_type": "Tỉnh Bà Rịa - Vũng Tàu",
        "code": "77"
    },
    {
        "label": "Cà Mau",
        "value": "ca-mau",
        "type": "tinh",
        "label_with_type": "Tỉnh Cà Mau",
        "code": "96"
    },
    {
        "label": "Bình Dương",
        "value": "binh-duong",
        "type": "tinh",
        "label_with_type": "Tỉnh Bình Dương",
        "code": "74"
    },
    {
        "label": "Cần Thơ",
        "value": "can-tho",
        "type": "thanh-pho",
        "label_with_type": "Thành phố Cần Thơ",
        "code": "92"
    },
    {
        "label": "Thừa Thiên Huế",
        "value": "thua-thien-hue",
        "type": "tinh",
        "label_with_type": "Tỉnh Thừa Thiên Huế",
        "code": "46"
    },
    {
        "label": "Đồng Nai",
        "value": "dong-nai",
        "type": "tinh",
        "label_with_type": "Tỉnh Đồng Nai",
        "code": "75"
    },
    {
        "label": "Tiền Giang",
        "value": "tien-giang",
        "type": "tinh",
        "label_with_type": "Tỉnh Tiền Giang",
        "code": "82"
    },
    {
        "label": "Điện Biên",
        "value": "dien-bien",
        "type": "tinh",
        "label_with_type": "Tỉnh Điện Biên",
        "code": "11"
    },
    {
        "label": "Vĩnh Phúc",
        "value": "vinh-phuc",
        "type": "tinh",
        "label_with_type": "Tỉnh Vĩnh Phúc",
        "code": "26"
    },
    {
        "label": "Quảng Nam",
        "value": "quang-nam",
        "type": "tinh",
        "label_with_type": "Tỉnh Quảng Nam",
        "code": "49"
    },
    {
        "label": "Đắk Lắk",
        "value": "dak-lak",
        "type": "tinh",
        "label_with_type": "Tỉnh Đắk Lắk",
        "code": "66"
    },
    {
        "label": "Thái Nguyên",
        "value": "thai-nguyen",
        "type": "tinh",
        "label_with_type": "Tỉnh Thái Nguyên",
        "code": "19"
    },
    {
        "label": "Hải Dương",
        "value": "hai-duong",
        "type": "tinh",
        "label_with_type": "Tỉnh Hải Dương",
        "code": "30"
    },
    {
        "label": "Bạc Liêu",
        "value": "bac-lieu",
        "type": "tinh",
        "label_with_type": "Tỉnh Bạc Liêu",
        "code": "95"
    },
    {
        "label": "Trà Vinh",
        "value": "tra-vinh",
        "type": "tinh",
        "label_with_type": "Tỉnh Trà Vinh",
        "code": "84"
    },
    {
        "label": "Thái Bình",
        "value": "thai-binh",
        "type": "tinh",
        "label_with_type": "Tỉnh Thái Bình",
        "code": "34"
    },
    {
        "label": "Hà Tĩnh",
        "value": "ha-tinh",
        "type": "tinh",
        "label_with_type": "Tỉnh Hà Tĩnh",
        "code": "42"
    },
    {
        "label": "Ninh Thuận",
        "value": "ninh-thuan",
        "type": "tinh",
        "label_with_type": "Tỉnh Ninh Thuận",
        "code": "58"
    },
    {
        "label": "Đồng Tháp",
        "value": "dong-thap",
        "type": "tinh",
        "label_with_type": "Tỉnh Đồng Tháp",
        "code": "87"
    },
    {
        "label": "Long An",
        "value": "long-an",
        "type": "tinh",
        "label_with_type": "Tỉnh Long An",
        "code": "80"
    },
    {
        "label": "Hậu Giang",
        "value": "hau-giang",
        "type": "tinh",
        "label_with_type": "Tỉnh Hậu Giang",
        "code": "93"
    },
    {
        "label": "Quảng Ninh",
        "value": "quang-ninh",
        "type": "tinh",
        "label_with_type": "Tỉnh Quảng Ninh",
        "code": "22"
    },
    {
        "label": "Phú Thọ",
        "value": "phu-tho",
        "type": "tinh",
        "label_with_type": "Tỉnh Phú Thọ",
        "code": "25"
    },
    {
        "label": "Quảng Bình",
        "value": "quang-binh",
        "type": "tinh",
        "label_with_type": "Tỉnh Quảng Bình",
        "code": "44"
    },
    {
        "label": "Hà Nam",
        "value": "ha-nam",
        "type": "tinh",
        "label_with_type": "Tỉnh Hà Nam",
        "code": "35"
    },
    {
        "label": "Bắc Ninh",
        "value": "bac-ninh",
        "type": "tinh",
        "label_with_type": "Tỉnh Bắc Ninh",
        "code": "27"
    },
    {
        "label": "Bắc Giang",
        "value": "bac-giang",
        "type": "tinh",
        "label_with_type": "Tỉnh Bắc Giang",
        "code": "24"
    },
    {
        "label": "Bắc Kạn",
        "value": "bac-kan",
        "type": "tinh",
        "label_with_type": "Tỉnh Bắc Kạn",
        "code": "06"
    }
]

export default cities;
