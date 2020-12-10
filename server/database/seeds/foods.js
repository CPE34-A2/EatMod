const foods = [
    {
        id: '1',
        name: 'กาแฟสด',
        type: 'beverage',
        price: '10',
        shop_id: '1',
        tag: "กาแฟ,น้ำ,เครื่องดื่ม"
    },
    {
        id: '2',
        name: 'ชาเขียว',
        type: 'beverage',
        price: '10',
        shop_id: '1',
        tag: "ชา,ชาเขียว,ชาเย็น,น้ำ,เครื่องดื่ม"
    },
    {
        id: '3',
        name: 'ชาเย็น',
        type: 'beverage',
        price: '10',
        shop_id: '2',
        tag: "ชา,ชาเย็น,น้ำ,เครื่องดื่ม"
    },
    {
        id: '4',
        name: 'ชามะนาว',
        type: 'beverage',
        price: '10',
        shop_id: '2',
        tag: "ชา,ชามะนาว,ชาเย็น,น้ำ,เครื่องดื่ม"
    },
    {
        id: '5',
        name: 'น้ำใบเตย',
        type: 'beverage',
        price: '10',
        shop_id: '2',
        tag: "น้ำใบเตย,น้ำ,เครื่องดื่ม"
    },
    {
        id: '6',
        name: 'น้ำลำใย',
        type: 'beverage',
        price: '10',
        shop_id: '2',
        tag: "ลำไย,น้ำ,เครื่องดื่ม"
    },
    {
        id: '7',
        name: 'น้ำกระเจี๊ยบ',
        type: 'beverage',
        price: '10',
        shop_id: '2',
        tag: "กระเจี๊ยบ,น้ำ,เครื่องดื่ม"
    },
    {
        id: '8',
        name: 'แกงเขียวหวานไก่',
        type: 'food',
        price: '25',
        shop_id: '3',
        tag: "แกง,ไก่,แกงเขียนหวาน"
    },
    {
        id: '9',
        name: 'แกงข่า',
        type: 'food',
        price: '25',
        shop_id: '3',
        tag: "แกง,ไก่,ข่า,แกงเขียนหวาน"
    },
    {
        id: '10',
        name: 'ข้าวหมูกรอบ',
        type: 'food',
        price: '30',
        shop_id: '4',
        tag: "ข้าว,หมู,หมูกรอบ"
    },
    {
        id: '11',
        name: 'บะหมี่เกี๊ยวหมูกรอบ/หมูแดง',
        type: 'noodle',
        price: '25',
        shop_id: '4',
        tag: "บะหมี่,เกี๋ยว,หมู,หมูกรอบ,หมูแดง,อาหารจีน"
    },
    {
        id: '12',
        name: 'ก๋วยเตี๋ยวต้มยำ',
        type: 'noodle',
        price: '25',
        shop_id: '4',
        tag: "ก๋วยเตี๋ยว,ต้มยำ,อาหารจีน,เผ็ด"
    },
    {
        id: '13',
        name: 'ก๋วยเตี๊ยวเย็นตาโฟ',
        type: 'noodle',
        price: '25',
        shop_id: '4',
        tag: "ก๋วยเตี๋ยว,เย็นตาโฟ,อาหารจีน"
    },
    {
        id: '14',
        name: 'หมูสามชั้นทอด',
        type: 'rice',
        price: '30',
        shop_id: '5',
        tag: "หมู,หมูสามชั้น,ทอด"
    },
    {
        id: '15',
        name: 'ผัดเผ็ดปลาดุกใบยี่หร่า',
        type: 'rice',
        price: '30',
        shop_id: '5',
        tag: "ผัดเผ็ด,ปลา,ปลาดุก,ใบยี่หร่า,เผ็ด"
    },
    {
        id: '16',
        name: 'ข้าวไก่ทอดราดแกงกะหรี่',
        type: 'rice',
        price: '30',
        shop_id: '6',
        tag: "ข้าว,ไก่,ไก่ทอด,แกงกะหรี่,อาหารญีี่ปุ่น"
    },
    {
        id: '17',
        name: 'มัสมั่น',
        type: 'rice',
        price: '30',
        shop_id: '6',
        tag: "แกง,มัสมั่น,ไก่"
    },
    {
        id: '18',
        name: 'ไก่ย่างซอสกะเพรา',
        type: 'rice',
        price: '30',
        shop_id: '6',
        tag: "ไก่,ไก่ย่าง,กะเพรา"
    },
    {
        id: '19',
        name: 'ไก่ย่างมัสมั่นไก่',
        type: 'rice',
        price: '30',
        shop_id: '6',
        tag: "ไก่,ไก่ย่าง,มัสมั่น,แกง"
    },
    {
        id: '20',
        name: 'ข้าวหมกไก่',
        type: 'rice',
        price: '30',
        shop_id: '6',
        tag: "ข้าว,ไก่,หมก"
    },
    {
        id: '21',
        name: 'หมูเกาหลี',
        type: 'rice',
        price: '35',
        shop_id: '7',
        tag: "ข้าว,หมู,อาหารเกาหลี"
    },
    {
        id: '22',
        name: 'แกงกะหรี่',
        type: 'rice',
        price: '35',
        shop_id: '7',
        tag: "แกง,แกงกะหรี่,อาหารญี่ปุ่น"
    },
    {
        id: '23',
        name: 'ไก่แซ่บ',
        type: 'rice',
        price: '30',
        shop_id: '7',
        tag: "ไก่,เผ็ด"
    },
    {
        id: '24',
        name: 'ไก่ทอดผัดซอส',
        type: 'rice',
        price: '25',
        shop_id: '8',
        tag: "ไก่,ไก่ทอด,ผัด"
    },
    {
        id: '25',
        name: 'ยำผักรวมทอด',
        type: 'rice',
        price: '25',
        shop_id: '8',
        tag: "ยำ,ผัก,ทอด"
    },
    {
        id: '26',
        name: 'ปลานึ่งมะนาว',
        type: 'rice',
        price: '20',
        shop_id: '8',
        tag: "ปลา,นึ่ง,มะนาว"
    },
    {
        id: '27',
        name: 'ไก่ทอด',
        type: 'rice',
        price: '25',
        shop_id: '8',
        tag: "ไก่,ไก่ทอด,ไก่ทอด"
    },
    {
        id: '28',
        name: 'แกงยอดมะพร้าว',
        type: 'rice',
        price: '25',
        shop_id: '8',
        tag: "แกง,ยอดมะพร้าว"
    },
    {
        id: '29',
        name: 'ไข่ตุ๋น',
        type: 'rice',
        price: '25',
        shop_id: '8',
        tag: "ไข่,ตุ๋น"
    },
    {
        id: '30',
        name: 'ข้าวไก่ย่างน้ำจิ้มแจ่ว',
        type: 'rice',
        price: '30',
        shop_id: '9',
        tag: "ข้าว,ไก่,ไก่ย่าง,นำจิ้มแจ่ว"
    },
    {
        id: '31',
        name: 'ข้าวแกงกะหรี่ไก่ทอด',
        type: 'rice',
        price: '30',
        shop_id: '9',
        tag: "ข้าว,แกงกะหรี่,ไก่,ไก่ทอด"
    },
    {
        id: '32',
        name: 'ขนมจีนแกงเขียวหวานไก่',
        type: 'rice',
        price: '25',
        shop_id: '9',
        tag: "ขนมจีน,แกงเขียวหวาน,ไก่"
    },
    {
        id: '33',
        name: 'ไก่ทอดซอสเปรี้ยวหวาน',
        type: 'rice',
        price: '25',
        shop_id: '9',
        tag: "ไก่,ไก่ทอด,เปรี้ยวหวาน"
    },
    {
        id: '34',
        name: 'ผัดเผ็ดปลาดุก',
        type: 'rice',
        price: '25',
        shop_id: '10',
        tag: "ปลา,ปลาดุก,ผัดเผ็ด"
    },
    {
        id: '35',
        name: 'ไก่คั่วพริก',
        type: 'rice',
        price: '25',
        shop_id: '10',
        tag: "ไก่,คั่วพริก"
    },
    {
        id: '36',
        name: 'ผัดกะเพราหมูสับ',
        type: 'rice',
        price: '25',
        shop_id: '10',
        tag: "ผัด,กะเพรา,หมู,หมูสับ"
    },
    {
        id: '37',
        name: 'น้ำส้ม',
        type: 'beverage',
        price: '10',
        shop_id: '11',
        tag: "น้ำ,น้ำผลไม้,ส้ม"
    },
    {
        id: '38',
        name: 'น้ำมะนาว',
        type: 'beverage',
        price: '10',
        shop_id: '11',
        tag: "น้ำ,น้ำผลไม้,มะนาว"
    },
    {
        id: '39',
        name: 'น้ำมะพร้าว',
        type: 'beverage',
        price: '10',
        shop_id: '11',
        tag: "น้ำ,น้ำผลไม้,มะพร้าว"
    }
]

exports.seed = function (knex) {
    return knex('foods').del().then(function () {
        return knex('foods').insert(foods);
    });
};
