// بيانات المنتجات
const products = [
    { id: 1, name: "الأرز بجميع أنواعه", unit: "كيلو", quantity: 4500, price: 6, category: "food" },
    { id: 2, name: "المكرونة بجميع أنواعها وشعيرية", unit: "كيلو", quantity: 600, price: 1, category: "food" },
    { id: 3, name: "د قيق ناعم بنوعيه", unit: "كيلو", quantity: 1012, price: 2.5, category: "food" },
    { id: 4, name: "نشا ذرة", unit: "كيلو", quantity: 216, price: 2.5, category: "food" },
    { id: 5, name: "العدس بنوعية اخضر", unit: "كيلو", quantity: 282, price: 2.5, category: "food" },
    { id: 6, name: "سميد مطحون/برغل/فريكة", unit: "كيلو", quantity: 57, price: 5, category: "food" },
    { id: 7, name: "فاصوليا جافة/لوبيا بعين سوداء, حب /علب", unit: "كيلو", quantity: 170, price: 3, category: "food" },
    { id: 8, name: "سكر بأنواعه/ناعم /خشن /حصص", unit: "كيلو", quantity: 675, price: 3, category: "food" },
    { id: 9, name: "شاهي بأنواعه", unit: "كيلو", quantity: 102, price: 15, category: "food" },
    { id: 10, name: "بن مطحون", unit: "كيلو", quantity: 112, price: 10, category: "food" },
    { id: 11, name: "هيل", unit: "كيلو", quantity: 40, price: 10, category: "food" },
    { id: 12, name: "قهوة سريعة الذوبان حصص", unit: "كيلو", quantity: 90, price: 5, category: "food" },
    { id: 13, name: "مبيض قهوة حصص", unit: "كيلو", quantity: 45, price: 3, category: "food" },
    { id: 14, name: "حليب بودرة كامل /قليل الدسم", unit: "كيلو", quantity: 192, price: 1.25, category: "food" },
    { id: 15, name: "حليب سائل مركز", unit: "لتر", quantity: 770, price: 1, category: "food" },
    { id: 16, name: "قشطة علب", unit: "كيلو", quantity: 185, price: 4, category: "food" },
    { id: 17, name: "زبدة قوالب/حصص", unit: "كيلو", quantity: 132, price: 1.25, category: "food" },
    { id: 18, name: "سمن نباتي", unit: "كيلو", quantity: 105, price: 1, category: "food" },
    { id: 19, name: "زيت للطهي", unit: "لتر", quantity: 1012, price: 5, category: "food" },
    { id: 20, name: "زيت للقلي", unit: "لتر", quantity: 1912, price: 5, category: "food" },
    { id: 21, name: "زيت زيتون", unit: "لتر", quantity: 140, price: 3, category: "food" },
    { id: 22, name: "جبن أبيض كامل/قليل الدسم", unit: "كيلو", quantity: 135, price: 3, category: "food" },
    { id: 23, name: "جين أصفر قوالب كامل /قليل الدسم", unit: "كيلو", quantity: 80, price: 3, category: "food" },
    { id: 24, name: "جبن أصفر شرائح/مثلثات", unit: "كيلو", quantity: 450, price: 17, category: "food" },
    { id: 25, name: "جبنة بارميزان", unit: "كيلو", quantity: 30, price: 4, category: "food" },
    { id: 26, name: "جبنة كريم", unit: "كيلو", quantity: 101, price: 5, category: "food" },
    { id: 27, name: "مربى بأنواعها /علب/حصص", unit: "كيلو", quantity: 112, price: 1.25, category: "food" },
    { id: 28, name: "عسل نحل/علب /حصص", unit: "كيلو", quantity: 180, price: 2, category: "food" },
    { id: 29, name: "حلاوة طحينية سادة/وبالمكسرات علب/ حصص", unit: "كيلو", quantity: 112, price: 1.25, category: "food" },
    { id: 30, name: "زيتون", unit: "كيلو", quantity: 135, price: 2, category: "food" },
    { id: 31, name: "زيتون بدون نوى (محشى/شرائح/حبات)", unit: "كيلو", quantity: 45, price: 1, category: "food" },
    { id: 32, name: "فول مدمس علب", unit: "كيلو", quantity: 810, price: 3, category: "food" },
    { id: 33, name: "طحينة سائلة", unit: "كيلو", quantity: 135, price: 3, category: "food" },
    { id: 34, name: "حمص بالطحينة", unit: "كيلو", quantity: 170, price: 2, category: "food" },
    { id: 35, name: "مايونيز_علب/حصص", unit: "كيلو", quantity: 210, price: 1, category: "food" },
    { id: 36, name: "خل بأنواعه(قوارير)", unit: "لتر", quantity: 212, price: 1.25, category: "food" },
    { id: 37, name: "الخردل (مستردا)", unit: "كيلو", quantity: 102, price: 2.5, category: "food" },
    { id: 38, name: "فطر شرائح/كامل", unit: "كيلو", quantity: 180, price: 1, category: "food" },
    { id: 39, name: "حبوب الذرة الصفراء", unit: "كيلو", quantity: 273, price: 5, category: "food" },
    { id: 40, name: "فاصوليا حمراء/علب", unit: "كيلو", quantity: 190, price: 1, category: "food" },
    { id: 41, name: "مكعبات مرق الدجاج/اللحم", unit: "كيلو", quantity: 86, price: 2.5, category: "food" },
    { id: 42, name: "شوربة الشوفان/الخضار", unit: "كيلو", quantity: 135, price: 3, category: "food" },
    { id: 43, name: "كاتشب/قوارير/حصص", unit: "كيلو", quantity: 300, price: 1, category: "food" },
    { id: 44, name: "معجون الطماطم", unit: "كيلو", quantity: 560, price: 6, category: "food" },
    { id: 45, name: "حبوب الطماطم مقشرة/علب", unit: "كيلو", quantity: 288, price: 1.25, category: "food" },
    { id: 46, name: "صلصلة الصويا", unit: "كيلو", quantity: 52, price: 1.25, category: "food" },
    { id: 47, name: "فواكه منوعة معلبة / مجففة", unit: "كيلو", quantity: 114, price: 5, category: "food" },
    { id: 48, name: "شوكولاته بسكر للطهي قوالب", unit: "كيلو", quantity: 112, price: 5, category: "food" },
    { id: 49, name: "بودرة الجلي و", unit: "كيلو", quantity: 102, price: 5, category: "food" },
    { id: 50, name: "الكسترد والكريم كرامل", unit: "كيلو", quantity: 204, price: 1.25, category: "food" },
    { id: 51, name: "فانيليا", unit: "كيلو", quantity: 54, price: 2.5, category: "food" },
    { id: 52, name: "خميرة جافة بالصود", unit: "كيلو", quantity: 27, price: 5, category: "food" },
    { id: 53, name: "بيكنج باودر", unit: "كيلو", quantity: 27, price: 5, category: "food" },
    { id: 54, name: "شراب محلي الفطيرة", unit: "كيلو", quantity: 101, price: 5, category: "food" },
    { id: 55, name: "ماء ورد", unit: "كيلو", quantity: 22, price: 2.5, category: "food" },
    { id: 56, name: "معجنات (سنبوسه/كنافة/قطايف/بقلاوة/سبرنج رول/أخرى)", unit: "كيلو", quantity: 1000, price: 5, category: "food" },
    { id: 57, name: "جوز هند مبشور", unit: "كيلو", quantity: 18, price: 2.5, category: "food" },
    { id: 58, name: "مكسرات (لوز/جوز/فستق/كاجو/أخرى)", unit: "كيلو", quantity: 40, price: 5, category: "food" },
    { id: 59, name: "زبيب جاف", unit: "كيلو", quantity: 120, price: 2, category: "food" },
    { id: 60, name: "صنوبر", unit: "كيلو", quantity: 22, price: 2.5, category: "food" },
    { id: 61, name: "ملح ناعم باليود/علب/حصص", unit: "كيلو", quantity: 390, price: 3.5, category: "food" },
    { id: 62, name: "فلفل أسود/أبيض/حب/مطحون/حصص", unit: "كيلو", quantity: 68, price: 2.5, category: "food" },
    { id: 63, name: "كزبرة/كمون/بهارات", unit: "كيلو", quantity: 72, price: 2.5, category: "food" },
    { id: 64, name: "قرفة اصابع", unit: "كيلو", quantity: 10, price: 2, category: "food" },
    { id: 65, name: "كركم ناعم", unit: "كيلو", quantity: 44, price: 2.5, category: "food" },
    { id: 66, name: "ليمون ناشف", unit: "كيلو", quantity: 10, price: 1, category: "food" },
    { id: 67, name: "قرنفل ناعم", unit: "كيلو", quantity: 15, price: 4, category: "food" },
    { id: 68, name: "أطعمة أطفال منوعة", unit: "كيلو", quantity: 45, price: 3, category: "food" },
    { id: 69, name: "بودرة ثوم", unit: "كيلو", quantity: 54, price: 2.5, category: "food" },
    { id: 70, name: "زعفران فاخر", unit: "كيلو", quantity: 3, price: 5, category: "food" },
    { id: 71, name: "بودرة قورما", unit: "كيلو", quantity: 45, price: 1, category: "food" },
    { id: 72, name: "بودرة الشبلي", unit: "كيلو", quantity: 35, price: 3, category: "food" },
    { id: 73, name: "بودرة السماق", unit: "كيلو", quantity: 12, price: 5, category: "food" },
    { id: 74, name: "أعشاب متنوعة (أوراق الريحان/الزعتر/الروزماري)", unit: "كيلو", quantity: 12, price: 2.5, category: "food" },
    { id: 75, name: "تونه علب", unit: "كيلو", quantity: 198, price: 5, category: "food" },
    { id: 76, name: "شطة قوارير", unit: "كيلو", quantity: 45, price: 1, category: "food" },
    { id: 77, name: "رقائق ذرة", unit: "كيلو", quantity: 90, price: 2, category: "food" },
    { id: 78, name: "لبنة قليلة الدسم", unit: "كيلو", quantity: 330, price: 2, category: "food" },
    { id: 79, name: "تمر غلف حصص / رطب", unit: "كيلو", quantity: 275, price: 3, category: "food" },
    { id: 80, name: "زنجبيل مطحون/ طازج", unit: "كيلو", quantity: 338, price: 5, category: "food" },
    { id: 81, name: "بيض", unit: "كيلو", quantity: 60700, price: 0.75, category: "food" },
    { id: 82, name: "الخبز", unit: "كيلو", quantity: 4200, price: 3.5, category: "food" },
    { id: 83, name: "توست لوزين", unit: "كيلو", quantity: 1400, price: 3, category: "food" },
    { id: 84, name: "كب كيك", unit: "كيلو", quantity: 800, price: 1, category: "food" },
    { id: 85, name: "سبانخ", unit: "كيلو", quantity: 300, price: 2, category: "vegetables" },
    { id: 86, name: "ملوخية", unit: "كيلو", quantity: 300, price: 0.5, category: "vegetables" },
    { id: 87, name: "رجلة", unit: "كيلو", quantity: 300, price: 0.5, category: "vegetables" },
    { id: 88, name: "بطاطس", unit: "كيلو", quantity: 1500, price: 6, category: "vegetables" },
    { id: 89, name: "باذنجان", unit: "كيلو", quantity: 1125, price: 5, category: "vegetables" },
    { id: 90, name: "كوسة", unit: "كيلو", quantity: 1837, price: 10, category: "vegetables" },
    { id: 91, name: "قرع أمريكي + أخضر", unit: "كيلو", quantity: 1500, price: 6, category: "vegetables" },
    { id: 92, name: "ملفوف أخضر", unit: "كيلو", quantity: 300, price: 0.5, category: "vegetables" },
    { id: 93, name: "ملفوف أحمر", unit: "كيلو", quantity: 75, price: 1, category: "vegetables" },
    { id: 94, name: "زهرة", unit: "كيلو", quantity: 1350, price: 9, category: "vegetables" },
    { id: 95, name: "بروكلي", unit: "كيلو", quantity: 600, price: 0.5, category: "vegetables" },
    { id: 96, name: "تفاح سكري", unit: "كيلو", quantity: 675, price: 7, category: "fruits" },
    { id: 97, name: "تفاح أصفر", unit: "كيلو", quantity: 675, price: 7, category: "fruits" },
    { id: 98, name: "تفاح أخضر", unit: "كيلو", quantity: 600, price: 7, category: "fruits" },
    { id: 99, name: "مشمش", unit: "كيلو", quantity: 600, price: 3, category: "fruits" },
    { id: 100, name: "موز", unit: "كيلو", quantity: 840, price: 7, category: "fruits" },
    { id: 101, name: "كرز", unit: "كيلو", quantity: 75, price: 1, category: "fruits" },
    { id: 102, name: "جوافة", unit: "كيلو", quantity: 75, price: 1, category: "fruits" },
    { id: 103, name: "عنب أسود", unit: "كيلو", quantity: 112, price: 1.25, category: "fruits" },
    { id: 104, name: "عنب أخضر", unit: "كيلو", quantity: 112, price: 1.25, category: "fruits" },
    { id: 105, name: "عنب أحمر", unit: "كيلو", quantity: 112, price: 1.25, category: "fruits" },
    { id: 106, name: "تين", unit: "كيلو", quantity: 562, price: 2.5, category: "fruits" },
    { id: 107, name: "كيوي", unit: "كيلو", quantity: 675, price: 5, category: "fruits" },
    { id: 108, name: "يوسفي", unit: "كيلو", quantity: 525, price: 1, category: "fruits" },
    { id: 109, name: "مانجو", unit: "كيلو", quantity: 188, price: 1.25, category: "fruits" },
    { id: 110, name: "أناناس", unit: "كيلو", quantity: 225, price: 1, category: "fruits" },
    { id: 111, name: "برتقال", unit: "كيلو", quantity: 1425, price: 9, category: "fruits" },
    { id: 112, name: "خوخ", unit: "كيلو", quantity: 225, price: 1, category: "fruits" },
    { id: 113, name: "كمثرى", unit: "كيلو", quantity: 450, price: 0.5, category: "fruits" },
    { id: 114, name: "بخارة/برقوق", unit: "كيلو", quantity: 375, price: 1, category: "fruits" },
    { id: 115, name: "فراولة", unit: "كيلو", quantity: 45, price: 1, category: "fruits" },
    { id: 116, name: "رمان", unit: "كيلو", quantity: 75, price: 1, category: "fruits" },
    { id: 117, name: "شمام", unit: "كيلو", quantity: 180, price: 0.5, category: "fruits" },
    { id: 118, name: "بطيخ", unit: "كيلو", quantity: 225, price: 3, category: "fruits" },
    { id: 119, name: "طماطم طازجة", unit: "كيلو", quantity: 2062, price: 10, category: "vegetables" },
    { id: 120, name: "خيار", unit: "كيلو", quantity: 1680, price: 7, category: "vegetables" },
    { id: 121, name: "قثاء", unit: "كيلو", quantity: 75, price: 1, category: "vegetables" },
    { id: 122, name: "جزر", unit: "كيلو", quantity: 1680, price: 7, category: "vegetables" },
    { id: 123, name: "فلفل أخضر", unit: "كيلو", quantity: 300, price: 1, category: "vegetables" },
    { id: 124, name: "فلفل أحمر", unit: "كيلو", quantity: 130, price: 1, category: "vegetables" },
    { id: 125, name: "فلفل أصفر", unit: "كيلو", quantity: 130, price: 1, category: "vegetables" },
    { id: 126, name: "فلفل حار", unit: "كيلو", quantity: 75, price: 1, category: "vegetables" },
    { id: 127, name: "خس", unit: "كيلو", quantity: 560, price: 4, category: "vegetables" },
    { id: 128, name: "بقدونس", unit: "كيلو", quantity: 300, price: 1, category: "vegetables" },
    { id: 129, name: "كزبرة", unit: "كيلو", quantity: 150, price: 1, category: "vegetables" },
    { id: 130, name: "نعناع", unit: "كيلو", quantity: 112, price: 2.5, category: "vegetables" },
    { id: 131, name: "شبث", unit: "كيلو", quantity: 60, price: 1, category: "vegetables" },
    { id: 132, name: "جرجير", unit: "كيلو", quantity: 115, price: 1, category: "vegetables" },
    { id: 133, name: "بصل أخضر", unit: "كيلو", quantity: 225, price: 5, category: "vegetables" },
    { id: 134, name: "كراث", unit: "كيلو", quantity: 56, price: 1.25, category: "vegetables" },
    { id: 135, name: "باميا", unit: "كيلو", quantity: 150, price: 1, category: "vegetables" },
    { id: 136, name: "فاصوليا خضراء", unit: "كيلو", quantity: 60, price: 1, category: "vegetables" },
    { id: 137, name: "بازلا", unit: "كيلو", quantity: 60, price: 1, category: "vegetables" },
    { id: 138, name: "ليمون أصفر", unit: "كيلو", quantity: 1320, price: 2, category: "fruits" },
    { id: 139, name: "بصل جاف", unit: "كيلو", quantity: 1800, price: 10, category: "vegetables" },
    { id: 140, name: "ثوم", unit: "كيلو", quantity: 300, price: 5, category: "vegetables" },
    { id: 141, name: "كرفس", unit: "كيلو", quantity: 75, price: 1, category: "vegetables" },
    { id: 142, name: "لحم غنم طازج بالعظم", unit: "كيلو", quantity: 2812, price: 70, category: "meat" },
    { id: 143, name: "كبدة غنم طازجة", unit: "كيلو", quantity: 168, price: 1.25, category: "meat" },
    { id: 144, name: "لحم بقربوتيلو طازج", unit: "كيلو", quantity: 940, price: 15, category: "meat" },
    { id: 145, name: "سمك طازج حمور سلمون", unit: "كيلو", quantity: 1120, price: 10, category: "meat" },
    { id: 146, name: "روبيان طازج كبير", unit: "كيلو", quantity: 900, price: 10, category: "meat" },
    { id: 147, name: "لحم تركي مدخن", unit: "كيلو", quantity: 375, price: 1, category: "meat" },
    { id: 148, name: "لحم همبرجر بقري", unit: "كيلو", quantity: 170, price: 1, category: "meat" },
    { id: 149, name: "قطع دجاج/همبرجر دجاج", unit: "كيلو", quantity: 170, price: 2, category: "meat" },
    { id: 150, name: "صدور دجاج بدون عظم", unit: "كيلو", quantity: 1120, price: 5, category: "meat" },
    { id: 151, name: "ربيان مجمد كبير", unit: "كيلو", quantity: 1120, price: 3, category: "meat" },
    { id: 152, name: "سمك فيليه مجمد", unit: "كيلو", quantity: 1120, price: 15, category: "meat" },
    { id: 153, name: "مارتديلا (دجاج/رومي/بقري)", unit: "كيلو", quantity: 188, price: 1.25, category: "meat" },
    { id: 154, name: "نقانق بقري/دجاج", unit: "كيلو", quantity: 135, price: 1, category: "meat" },
    { id: 155, name: "لحم مفروم دجاج وطني", unit: "كيلو", quantity: 225, price: 2, category: "meat" },
    { id: 156, name: "لحم مفروم غنم وطني", unit: "كيلو", quantity: 225, price: 2, category: "meat" },
    { id: 157, name: "لحم مفروم بقري وطني", unit: "كيلو", quantity: 225, price: 2, category: "meat" },
    { id: 158, name: "جبنة موزوريلا", unit: "كيلو", quantity: 180, price: 2, category: "food" },
    { id: 159, name: "خضروات مجمدة", unit: "كيلو", quantity: 900, price: 4, category: "food" },
    { id: 160, name: "بطاطس أصابع مجمدة", unit: "كيلو", quantity: 1120, price: 2, category: "food" },
    { id: 161, name: "لحم دجاج وطني طازج/مجمد", unit: "كيلو", quantity: 9075, price: 25, category: "meat" },
    { id: 162, name: "ايسكريم بجميع النكهات", unit: "كيلو", quantity: 187, price: 5, category: "food" },
    { id: 163, name: "حليب طازج مبستر كامل/قليل الدسم", unit: "حبة", quantity: 9375, price: 1.4, category: "food" },
    { id: 164, name: "لبن طازج مبستر كامل/قليل الدسم", unit: "حبة", quantity: 14625, price: 1.4, category: "food" },
    { id: 165, name: "زبادي بجميع أنواعه", unit: "كيلو", quantity: 1500, price: 1, category: "food" },
    { id: 166, name: "عصيرات طبيعية طازج (-180-200 مل)", unit: "حبة", quantity: 11250, price: 1.3, category: "food" },
    { id: 167, name: "عصيرات طبيعية تفاح (200-180 مل)", unit: "حبة", quantity: 11250, price: 1.4, category: "food" },
    { id: 168, name: "عصيرات طبيعية بدون سكر بأنواعها (200-180 مل)", unit: "حبة", quantity: 13500, price: 1.4, category: "food" },
    { id: 169, name: "حليب معقم سائل طويل الأجل (200-180)", unit: "حبة", quantity: 7500, price: 1.4, category: "food" },
    { id: 170, name: "كريمة طازجة", unit: "لتر", quantity: 270, price: 1, category: "food" },
    { id: 171, name: "ماء صحة", unit: "لتر", quantity: 34650, price: 2, category: "food" }
];

// الدوال المساعدة
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;

    card.innerHTML = `
        <div class="product-header">
            <span class="product-number">${product.id}</span>
            <h3>${product.name}</h3>
        </div>
        <div class="product-details">
            <div>الوحدة: ${product.unit}</div>
            <div class="quantity-badge">الكمية: ${product.quantity}</div>
        </div>
        <div class="product-price">
            <span class="price-label">السعر الفردي:</span>
            ${product.price ? 
                `<span class="price-value">${product.price} ريال</span>` :
                `<span class="no-price">غير مسعر</span>`
            }
        </div>
    `;

    return card;
}

// تهيئة العرض
function initializeDisplay() {
    const productsGrid = document.getElementById('productsGrid');
    products.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });
}

// البحث
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// تصفية الفئات
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // إزالة الفئة النشطة من جميع الأزرار
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // إضافة الفئة النشطة للزر المحدد
        button.classList.add('active');

        const category = button.dataset.category;
        const cards = document.querySelectorAll('.product-card');

        if (category === 'financial') {
            // عرض المنتجات المالية (عرض جميع المنتجات دون تعديل)
            cards.forEach(card => {
                card.style.display = 'block';
            });
        } else if (category === 'technical') {
            // عرض فني: لا توجد منتجات فنية حالياً
            cards.forEach(card => {
                card.style.display = 'none';
            });
        }
    });
});

// تهيئة العرض عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeDisplay);
