import { concatStrings } from '../services/UtilsService';
export const BOT_NAME: string = 'น้องโควิด';
export const DDC: string = 'กรมควบคุมโรค';
export const HEALTH_FACILITY: string = 'กระทรวงสาธารณสุข';


export const PLUS_SIGN: string = '+';
export const EMPTY_STRING: string = '';
export const TOTAL_CONFIRMED_PEOPLE: string = 'ยอดผู้ติดเชื้อทั้งหมด';
export const TOTAL_DEATH_PEOPLE: string = 'ยอดผู้เสียชีวิตทั้งหมด';
export const TOTAL_RECOVERED_PEOPLE: string = 'ยอดผู้หายป่วยทั้งหมด';
export const VACCINE_REPLY: string =
    'จำนวนการได้รับวัคซีนโควิด 19 ของประเทศไทย';
export const DISPLAY_PREVIOUS_DATA: string = 'แสดงสถิติย้อนหลัง';
export const REQUEST_COVID19_UPDATE: string =
    'เช็คจำนวนผู้ติดเชื้อโควิด-19ล่าสุดให้หน่อย';
export const REQUEST_COVID19_HISTORICAL_DATA: string =
    'เช็คสถิติย้อนหลังผู้ติดเชื้อโควิด-19ให้หน่อย';
export const REQUEST_VACCINE_INFO: string =
    'เช็คข้อมูลวัคซีนโควิด-19ล่าสุดให้หน่อย';
export const RECEIVED_FIRST_DOSES_LABEL: string =
    'จำนวนผู้ได้รับวัคซีคโดสที่ 1 จากประชากรทั้งประเทศ';
export const RECEIVED_SECOND_DOSES_LABEL: string =
    'จำนวนผู้ได้รับวัคซีคโดสที่ 2 จากประชากรทั้งประเทศ';
export const RECEIVED_ALL_DOSES_LABEL: string =
    'จำนวนผู้ได้รับวัคซีคทั้ง 2 โดส จากประชากรทั้งประเทศ';
export const RECEIVED_FIRST_DOSES_PERCENT_LABEL: string =
    'เปอร์เซ็นต์สะสมผู้ได้รับวัคซีนโดสที่ 1 จากประชากรทั้งประเทศ';
export const RECEIVED_SECOND_DOSES_PERCENT_LABEL: string =
    'เปอร์เซ็นต์สะสมผู้ได้รับวัคซีนโดสที่ 2 จากประชากรทั้งประเทศ';
export const RECEIVED_ALL_DOSES_PERCENT_LABEL: string =
    'เปอร์เซ็นต์สะสมผู้ได้รับวัคซีนครบทั้ง 2 โดสจากประชากรทั้งประเทศ';
export const LATEST_UPDATE: string = 'อัพเดตล่าสุดเมื่อ';
export const PEOPLE: string = 'คน';
export const AMOUNT_DECIMAL: number = 2;
export const NEW_CONFIRMED_PEOPLE: string = 'จำนวนผู้ติดเชื้อ';
export const NEW_DEATH_PEOPLE: string = 'จำนวนผู้เสียชีวิต';
export const NEW_HOSPITALIZED_PEOPLE: string = 'จำนวนผู้เข้ารับการรักษา';
export const NEW_RECOVERED_PEOPLE: string = 'จำนวนผู้หายป่วย';
export const AMOUNT_HISTORICAL_DAY: number = 7;
export const ASK_HISTORICAL_DAYS: string =
    'สวัสดีครับ ต้องการดูข้อมูลย้อนหลังกี่วันครับ (ย้อนหลังได้ไม่เกิน' +
    AMOUNT_HISTORICAL_DAY +
    'วันนับจากวันที่ปัจุบัน)';
export const APOLOGIZE_MESSAGE: string = concatStrings(
    'ขณะนี้เกิดข้อผิดพลาดขึ้นที่ระบบของ',
    BOT_NAME,
    'จึงไม่สามารถให้บริการได้ในขณะนี้'
);
export const DATA_MODIFICATION: string =
    'กำลังปรับปรุงข้อมูลอยู่ในขณะนี้ จึงไม่สามารถเรียกดูข้อมูลได้';
export const DDC_MODIFYING_DATA: string = concatStrings(DDC, DATA_MODIFICATION);
export const NOT_SERVE: string = concatStrings(
    'สวัสดีครับ ตอนนี้',
    BOT_NAME,
    'ยังไม่รองรับการสนทนาประเภทอื่น ๆ นอกเหนือจากข้อความครับ'
);
export const REFERENCE: string = 'แหล่งที่มา';
export const DAY: string = 'วัน';
export const DATE: string = 'วันที่';
export const NEEDED_HISTORY_WORD: string = 'ต้องการดูย้อนหลัง';
export const DISPLAY_CAROUSEL_MESSAGE: string = 'แสดงข้อมูลย้อนหลัง';
export const HTTP_STATUS_200: Number = 200;
export const NUMBER_OBJECT: any = {
    ONE: '1',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
};
export const BUBBLE_HEADER: string = 'รายงานสถานการณ์โควิด-19';
export const WHITE_SPACE: string = ' ';
export const ONE_PREVIOUS_DAY: string = concatStrings(
    NEEDED_HISTORY_WORD,
    WHITE_SPACE,
    NUMBER_OBJECT.ONE,
    WHITE_SPACE,
    DAY
);
export const TWO_PREVIOUS_DAYS: string = concatStrings(
    NEEDED_HISTORY_WORD,
    WHITE_SPACE,
    NUMBER_OBJECT.TWO,
    WHITE_SPACE,
    DAY
);
export const THREE_PREVIOUS_DAYS: string = concatStrings(
    NEEDED_HISTORY_WORD,
    WHITE_SPACE,
    NUMBER_OBJECT.THREE,
    WHITE_SPACE,
    DAY
);
export const FOUR_PREVIOUS_DAYS: string = concatStrings(
    NEEDED_HISTORY_WORD,
    WHITE_SPACE,
    NUMBER_OBJECT.FOUR,
    WHITE_SPACE,
    DAY
);
export const FIVE_PREVIOUS_DAYS: string = concatStrings(
    NEEDED_HISTORY_WORD,
    WHITE_SPACE,
    NUMBER_OBJECT.FIVE,
    WHITE_SPACE,
    DAY
);
export const SIX_PREVIOUS_DAYS: string = concatStrings(
    NEEDED_HISTORY_WORD,
    WHITE_SPACE,
    NUMBER_OBJECT.SIX,
    WHITE_SPACE,
    DAY
);
export const SEVEN_PREVIOUS_DAYS: string = concatStrings(
    NEEDED_HISTORY_WORD,
    WHITE_SPACE,
    NUMBER_OBJECT.SEVEN,
    WHITE_SPACE,
    DAY
);
export const PERCENT_SYMBOL: string = '%';
export const COLOR_CODES: any = {
    White: '#fff3e6',
    LIGHT_GREEN: '#eff7e1',
    LINE: '#1DB446',
    LIGHT_BLUE: '#007580',
    DARK_GREEN: '#206a5d',
    BLACK: '#151515',
    DEEP_BLUE: '#007580',
};
export const TOTAL_THAI_POPULATIONS: number = 66186727;
export const DEVELOPING: string =
    'กำลังถูกพัฒนาเพื่อรองรับฟีทเจอร์นี้ อดใจรอสักครู่น้า';
export const DEVELOPING_MESSAGE: string = concatStrings(BOT_NAME, DEVELOPING);
