 const materials = {

    PET: {
        name: "PET",
        image: "pet.png",
        fullName: "Polyethylene Terephthalate",

        description:
            "PET เป็นพอลิเมอร์เทอร์โมพลาสติกที่พบได้มากในชีวิตประจำวัน โดยเฉพาะในขวดเครื่องดื่มและบรรจุภัณฑ์อาหาร",

        highlight:
            "จุดเด่นของ PET คือมีน้ำหนักเบา แข็งแรง และขึ้นรูปได้ง่าย จึงเหมาะกับการผลิตบรรจุภัณฑ์และขวดเครื่องดื่ม อีกทั้งยังสามารถนำกลับมารีไซเคิลได้",

        type:
            "พอลิเมอร์เทอร์โมพลาสติก",

        structure:
            "เกิดจากหน่วยย่อยที่เชื่อมต่อกันเป็นสายโซ่พอลิเมอร์ โดยมีหมู่เอสเทอร์เป็นส่วนหนึ่งของโครงสร้าง",

        properties:
            "น้ำหนักเบา แข็งแรง โปร่งใส และสามารถขึ้นรูปเป็นผลิตภัณฑ์ได้หลากหลาย",

        uses:
            "ขวดเครื่องดื่ม บรรจุภัณฑ์อาหาร และเส้นใยสังเคราะห์",

        environment:
            "สามารถนำกลับมารีไซเคิลได้ แต่ควรคัดแยกและจัดการอย่างเหมาะสม",

        limitations:
            "สมบัติของวัสดุอาจเปลี่ยนแปลงจากความร้อนและการใช้งานบางรูปแบบ",

        future:
            "มีการพัฒนาเทคโนโลยีรีไซเคิลเพื่อเพิ่มประสิทธิภาพการนำ PET กลับมาใช้ใหม่"
    },


    PLA: {
        name: "PLA",
        image: "pla.png",
        fullName: "Polylactic Acid",

        description:
            "PLA เป็นพอลิเมอร์ชีวภาพที่สามารถผลิตจากวัตถุดิบจากพืช เช่น แป้งหรือพืชที่มีน้ำตาล",

        highlight:
            "จุดเด่นของ PLA คือสามารถผลิตจากวัตถุดิบชีวภาพ เช่น แป้งข้าวโพดหรืออ้อย และขึ้นรูปได้ง่าย จึงได้รับความสนใจในงานพลาสติกชีวภาพและการพิมพ์สามมิติ",

        type:
            "พอลิเมอร์ชีวภาพ",

        structure:
            "ประกอบด้วยหน่วยซ้ำของกรดแลกติกที่เชื่อมต่อกันเป็นสายโซ่พอลิเมอร์",

        properties:
            "น้ำหนักเบา ขึ้นรูปง่าย และเหมาะกับงานที่ต้องการความแข็งในระดับหนึ่ง",

        uses:
            "งานพิมพ์สามมิติ บรรจุภัณฑ์ และผลิตภัณฑ์พลาสติกชีวภาพบางประเภท",

        environment:
            "มีวัตถุดิบตั้งต้นจากชีวมวล แต่การย่อยสลายไม่ได้เกิดขึ้นอย่างรวดเร็วในสภาพแวดล้อมทั่วไป",

        limitations:
            "ทนความร้อนได้จำกัดเมื่อเทียบกับพลาสติกบางชนิด",

        future:
            "มีการพัฒนาพอลิเมอร์ชีวภาพให้มีความแข็งแรงและทนความร้อนมากขึ้น"
    },


    Glass: {
        name: "Glass",
        image: "glass.png",
        fullName: "แก้ว",

        description:
            "แก้วเป็นวัสดุอนินทรีย์ที่มีความแข็ง สามารถผลิตให้โปร่งใส และถูกใช้งานอย่างแพร่หลาย",

        highlight:
            "จุดเด่นของแก้วคือมีความแข็ง ทนสารเคมี และไม่ดูดซึมน้ำ จึงเหมาะกับภาชนะและงานที่ต้องการความคงทนทางเคมี",

        type:
            "วัสดุอนินทรีย์",

        structure:
            "อะตอมภายในแก้วเชื่อมต่อกันเป็นโครงข่าย แต่ไม่มีการเรียงตัวเป็นระเบียบระยะไกลแบบวัสดุผลึก",

        properties:
            "แข็ง โปร่งใส ทนต่อสารเคมี และไม่ดูดซึมน้ำ",

        uses:
            "ขวด ภาชนะ หน้าต่าง เลนส์ และอุปกรณ์ทางวิทยาศาสตร์",

        environment:
            "สามารถนำกลับมาใช้ซ้ำและรีไซเคิลได้ โดยการนำกลับมาใช้ใหม่ช่วยลดการใช้วัตถุดิบ",

        limitations:
            "มีน้ำหนักมากและมีความเปราะ จึงแตกได้เมื่อได้รับแรงกระแทก",

        future:
            "มีการพัฒนาแก้วสำหรับงานด้านพลังงาน อิเล็กทรอนิกส์ และเทคโนโลยีขั้นสูง"
    },


    Aluminium: {
        name: "Aluminium",
        image: "aluminium.png",
        fullName: "อะลูมิเนียม",

        description:
            "อะลูมิเนียมเป็นโลหะที่มีน้ำหนักเบาและถูกใช้อย่างแพร่หลายในอุตสาหกรรมและชีวิตประจำวัน",

        highlight:
            "จุดเด่นของอะลูมิเนียมคือมีน้ำหนักเบา นำไฟฟ้าได้ และสามารถรีไซเคิลกลับมาใช้ใหม่ได้หลายครั้ง จึงมีบทบาทในบรรจุภัณฑ์และอุตสาหกรรม",

        type:
            "โลหะ",

        structure:
            "อะตอมของอะลูมิเนียมจัดเรียงตัวเป็นโครงสร้างผลึกของโลหะ",

        properties:
            "น้ำหนักเบา นำไฟฟ้าและความร้อนได้ดี สามารถขึ้นรูปได้ และมีความต้านทานการกัดกร่อน",

        uses:
            "กระป๋อง เครื่องใช้ไฟฟ้า ยานพาหนะ โครงสร้าง และบรรจุภัณฑ์",

        environment:
            "สามารถรีไซเคิลได้ และการรีไซเคิลช่วยลดการใช้ทรัพยากรและพลังงานเมื่อเทียบกับการผลิตจากวัตถุดิบใหม่",

        limitations:
            "การผลิตอะลูมิเนียมจากแร่ต้องใช้พลังงานค่อนข้างสูง",

        future:
            "การเพิ่มประสิทธิภาพระบบรีไซเคิลเป็นแนวทางสำคัญในการลดการใช้ทรัพยากร"
    },


    Ceramic: {
        name: "Ceramic",
        image: "ceramic.png",
        fullName: "เซรามิก",

        description:
            "เซรามิกเป็นวัสดุอนินทรีย์ที่มีความแข็งสูงและสามารถทนต่ออุณหภูมิสูงได้",

        highlight:
            "จุดเด่นของเซรามิกคือทนความร้อนและการสึกหรอได้ดี จึงเหมาะกับงานที่ต้องเผชิญอุณหภูมิสูงหรือการใช้งานเป็นเวลานาน",

        type:
            "วัสดุเซรามิก",

        structure:
            "ประกอบด้วยอะตอมที่ยึดเหนี่ยวกันด้วยพันธะที่มีความแข็งแรง เช่น พันธะไอออนิกและโคเวเลนต์",

        properties:
            "แข็ง ทนความร้อน ทนการสึกหรอ และทนต่อสารเคมีบางชนิด",

        uses:
            "จาน กระเบื้อง เครื่องสุขภัณฑ์ วัสดุทนความร้อน และชิ้นส่วนทางวิศวกรรม",

        environment:
            "มีอายุการใช้งานยาวนาน แต่การนำกลับมาใช้ใหม่ขึ้นอยู่กับชนิดและกระบวนการจัดการ",

        limitations:
            "มีความเปราะและสามารถแตกได้เมื่อได้รับแรงกระแทก",

        future:
            "มีการพัฒนาเซรามิกขั้นสูงสำหรับงานอิเล็กทรอนิกส์ การแพทย์ และวิศวกรรม"
    },


    Graphene: {
    name: "Graphene",
    image: "graphene.png",

    fullName: "กราฟีน (Graphene)",

    description:
        "กราฟีนเป็นวัสดุคาร์บอนที่มีโครงสร้างเป็นแผ่นบางระดับอะตอม โดยอะตอมคาร์บอนเรียงตัวเป็นโครงข่ายหกเหลี่ยม จึงเป็นวัสดุที่ได้รับความสนใจอย่างมากในด้านวัสดุศาสตร์และนาโนเทคโนโลยี",
    highlight:
        "จุดเด่นของกราฟีนมาจากโครงสร้างคาร์บอนแบบสองมิติ ทำให้มีสมบัติทางไฟฟ้า ความร้อน และความแข็งแรงที่น่าสนใจ จึงเป็นวัสดุสำคัญในการศึกษาด้านนาโนเทคโนโลยี",
    type:
        "วัสดุคาร์บอนระดับนาโน",

    structure:
        "อะตอมคาร์บอนเรียงตัวเป็นโครงข่ายหกเหลี่ยมแบบสองมิติ โดยมีความหนาเพียงระดับอะตอม",

    properties:
        "มีความแข็งแรงสูง น้ำหนักเบา นำไฟฟ้าและความร้อนได้ดี และมีพื้นที่ผิวต่อมวลสูง",

    uses:
        "ใช้ศึกษาสำหรับเซนเซอร์ อุปกรณ์อิเล็กทรอนิกส์ วัสดุคอมโพสิต และเทคโนโลยีพลังงาน",

    environment:
        "กำลังมีการศึกษาการนำกราฟีนไปประยุกต์ใช้ในเทคโนโลยีที่ช่วยเพิ่มประสิทธิภาพของวัสดุและระบบต่าง ๆ",

    limitations:
        "การผลิตกราฟีนที่มีคุณภาพสม่ำเสมอในปริมาณมากยังมีความท้าทายด้านกระบวนการและต้นทุน",

    future:
        "มีศักยภาพในการพัฒนาเซนเซอร์ อุปกรณ์อิเล็กทรอนิกส์ วัสดุคอมโพสิต และเทคโนโลยีด้านพลังงาน"
    }

};

   function showMaterial(material) {

    const data = materials[material];

    document.getElementById("materialImage").src =
        data.image;

    document.getElementById("materialName").textContent =
        data.name;

    document.getElementById("materialDescription").textContent =
        data.description;

    document.getElementById("materialHighlight").textContent =
        data.highlight;

    document.getElementById("materialFullName").textContent =
        data.fullName;

    document.getElementById("materialType").textContent =
        data.type;

    document.getElementById("materialStructure").textContent =
        data.structure;

    document.getElementById("materialProperties").textContent =
        data.properties;

    document.getElementById("materialUses").textContent =
        data.uses;

    document.getElementById("materialEnvironment").textContent =
        data.environment;

    document.getElementById("materialLimitations").textContent =
        data.limitations;

    document.getElementById("materialFuture").textContent =
        data.future;

    document.getElementById("materialInfo")
        .classList.remove("hidden");

    document.getElementById("materialInfo")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}


function closeMaterial() {

    document.getElementById("materialInfo")
        .classList.add("hidden");

}


function scrollToMaterials() {

    document.getElementById("materials")
        .scrollIntoView({
            behavior: "smooth"
        });

}
function compareMaterials() {

    const material1 =
        document.getElementById("material1").value;

    const material2 =
        document.getElementById("material2").value;


    const data1 = materials[material1];
    const data2 = materials[material2];


    document.getElementById("compareName1").textContent =
        data1.name;

    document.getElementById("compareType1").textContent =
        data1.type;

    document.getElementById("compareProperties1").textContent =
        data1.properties;

    document.getElementById("compareUses1").textContent =
        data1.uses;

    document.getElementById("compareEnvironment1").textContent =
        data1.environment;


    document.getElementById("compareName2").textContent =
        data2.name;

    document.getElementById("compareType2").textContent =
        data2.type;

    document.getElementById("compareProperties2").textContent =
        data2.properties;

    document.getElementById("compareUses2").textContent =
        data2.uses;

    document.getElementById("compareEnvironment2").textContent =
        data2.environment;


    document.getElementById("comparisonResult")
        .classList.remove("hidden");

    document.getElementById("comparisonResult")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}
