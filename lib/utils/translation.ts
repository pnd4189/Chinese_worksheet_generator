/**
 * Translation utility for Chinese character definitions
 * Supports multiple languages beyond English
 */

// Simple Vietnamese translations for common Chinese characters
// In production, this would be a comprehensive database or API
const VIETNAMESE_TRANSLATIONS: Record<string, string> = {
  // Common characters
  "你": "bạn, ngươi",
  "好": "tốt, hay",
  "我": "tôi",
  "爱": "yêu, thương",
  "情": "tình cảm, cảm xúc",
  "人": "người",
  "他": "anh ấy, người đó",
  "她": "cô ấy, chị ấy",
  "们": "các (số nhiều)",
  "有": "có",
  "是": "là",
  "不": "không",
  "在": "ở, tại",
  "了": "rồi (hoàn thành)",
  "和": "và",
  "的": "của",
  "一": "một",
  "二": "hai",
  "三": "ba",
  "四": "bốn",
  "五": "năm",
  "六": "sáu",
  "七": "bảy",
  "八": "tám",
  "九": "chín",
  "十": "mười",
  "大": "lớn",
  "小": "nhỏ",
  "多": "nhiều",
  "少": "ít",
  "上": "trên",
  "下": "dưới",
  "中": "giữa, Trung",
  "国": "nước, quốc gia",
  "学": "học",
  "生": "sinh, sống",
  "会": "biết, hội",
  "说": "nói",
  "话": "nói, lời nói",
  "看": "xem, nhìn",
  "书": "sách",
  "吃": "ăn",
  "喝": "uống",
  "水": "nước",
  "饭": "cơm, bữa ăn",
  "天": "trời, ngày",
  "年": "năm",
  "月": "tháng, mặt trăng",
  "日": "ngày, mặt trời",
  "时": "giờ, thời",
  "分": "phút, phân",
  "秒": "giây",
  "今": "nay",
  "明": "sáng, rõ",
  "昨": "hôm qua",
  "前": "trước",
  "后": "sau",
  "来": "đến",
  "去": "đi",
  "回": "về, quay lại",
  "到": "đến",
  "想": "nghĩ, muốn",
  "知": "biết",
  "道": "đường, đạo",
  "做": "làm",
  "买": "mua",
  "卖": "bán",
  "钱": "tiền",
  "元": "đồng (tiền)",
  "块": "đồng (tiền, thông tục)",
  "家": "nhà, gia đình",
  "房": "phòng",
  "门": "cửa",
  "窗": "cửa sổ",
  "桌": "bàn",
  "椅": "ghế",
  "床": "giường",
  "车": "xe",
  "路": "đường",
  "站": "trạm, đứng",
  "医": "y, chữa bệnh",
  "院": "viện",
  "店": "cửa hàng",
  "场": "trường, sân",
  "馆": "quán",
  "校": "trường",
  "高": "cao",
  "低": "thấp",
  "长": "dài",
  "短": "ngắn",
  "新": "mới",
  "旧": "cũ",
  "快": "nhanh",
  "慢": "chậm",
  "冷": "lạnh",
  "热": "nóng",
  "白": "trắng",
  "黑": "đen",
  "红": "đỏ",
  "绿": "xanh lá",
  "蓝": "xanh dương",
  "黄": "vàng",
  "美": "đẹp",
  "丽": "đẹp, lệ",
  "帅": "đẹp trai",
  "漂": "trôi, đẹp",
  "亮": "sáng",
  "对": "đúng, đối",
  "错": "sai",
  "真": "thật",
  "假": "giả",
  "好吃": "ngon",
  "难吃": "dở",
  "好看": "đẹp",
  "难看": "xấu",
  "世": "đời, thế",
  "界": "giới",
  "世界": "thế giới",
  "爱情": "tình yêu",
  "中国": "Trung Quốc",
  "学生": "học sinh",
  "老师": "giáo viên",
  "朋友": "bạn bè",
  "家人": "gia đình",
  "父": "cha",
  "母": "mẹ",
  "哥": "anh (trai)",
  "姐": "chị (gái)",
  "弟": "em (trai)",
  "妹": "em (gái)",
};

export type SupportedLanguage = 'en' | 'vi' | 'zh' | 'ja' | 'ko' | 'th' | 'id' | 'ms' | 'tl' | 'hi' | 'bn' | 'ta' | 'te' | 'ur' | 'fa' | 'ar' | 'he' | 'tr' | 'kk' | 'uz' | 'mn' | 'my' | 'km' | 'lo' | 'ne' | 'si' | 'fr' | 'de' | 'es' | 'it' | 'pt' | 'ru' | 'pl' | 'nl' | 'sv' | 'no' | 'da' | 'fi' | 'el' | 'cs' | 'ro' | 'hu' | 'bg' | 'hr' | 'sr' | 'sk' | 'sl' | 'sq' | 'lt' | 'lv' | 'et' | 'uk' | 'be' | 'ka' | 'hy' | 'az' | 'kn' | 'ml' | 'mr' | 'gu' | 'pa' | 'or' | 'as' | 'sd' | 'ps' | 'ku' | 'yi' | 'am' | 'ti' | 'om' | 'so' | 'sw' | 'rw' | 'zu' | 'xh' | 'st' | 'tn' | 'sn' | 'ny' | 'mg' | 'yo' | 'ig' | 'ha' | 'ff' | 'wo' | 'ln' | 'kg' | 'lu' | 'mt' | 'is' | 'fo' | 'ga' | 'gd' | 'cy' | 'br' | 'eu' | 'ca' | 'gl' | 'ast' | 'oc' | 'rm' | 'la' | 'eo';

export const LANGUAGE_OPTIONS = [
  // Default & Asian Languages
  { value: 'en', label: 'English', flag: '🇬🇧' },
  { value: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { value: 'zh', label: '中文', flag: '🇨🇳' },
  { value: 'ja', label: '日本語', flag: '🇯🇵' },
  { value: 'ko', label: '한국어', flag: '🇰🇷' },
  { value: 'th', label: 'ไทย', flag: '🇹🇭' },
  { value: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
  { value: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾' },
  { value: 'tl', label: 'Filipino', flag: '🇵🇭' },
  { value: 'my', label: 'မြန်မာ', flag: '🇲🇲' },
  { value: 'km', label: 'ភាសាខ្មែរ', flag: '🇰🇭' },
  { value: 'lo', label: 'ລາວ', flag: '🇱🇦' },
  { value: 'mn', label: 'Монгол', flag: '🇲🇳' },

  // South Asian Languages
  { value: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { value: 'bn', label: 'বাংলা', flag: '🇧🇩' },
  { value: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
  { value: 'te', label: 'తెలుగు', flag: '🇮🇳' },
  { value: 'mr', label: 'मराठी', flag: '🇮🇳' },
  { value: 'gu', label: 'ગુજરાતી', flag: '🇮🇳' },
  { value: 'kn', label: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { value: 'ml', label: 'മലയാളം', flag: '🇮🇳' },
  { value: 'pa', label: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { value: 'ur', label: 'اردو', flag: '🇵🇰' },
  { value: 'ne', label: 'नेपाली', flag: '🇳🇵' },
  { value: 'si', label: 'සිංහල', flag: '🇱🇰' },

  // Middle Eastern Languages
  { value: 'ar', label: 'العربية', flag: '🇸🇦' },
  { value: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { value: 'he', label: 'עברית', flag: '🇮🇱' },
  { value: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { value: 'ku', label: 'Kurdî', flag: '🏴' },
  { value: 'ps', label: 'پښتو', flag: '🇦🇫' },

  // European Languages - Western
  { value: 'fr', label: 'Français', flag: '🇫🇷' },
  { value: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
  { value: 'it', label: 'Italiano', flag: '🇮🇹' },
  { value: 'pt', label: 'Português', flag: '🇵🇹' },
  { value: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { value: 'ca', label: 'Català', flag: '🇪🇸' },
  { value: 'gl', label: 'Galego', flag: '🇪🇸' },
  { value: 'eu', label: 'Euskara', flag: '🇪🇸' },

  // European Languages - Northern
  { value: 'sv', label: 'Svenska', flag: '🇸🇪' },
  { value: 'no', label: 'Norsk', flag: '🇳🇴' },
  { value: 'da', label: 'Dansk', flag: '🇩🇰' },
  { value: 'fi', label: 'Suomi', flag: '🇫🇮' },
  { value: 'is', label: 'Íslenska', flag: '🇮🇸' },

  // European Languages - Eastern
  { value: 'ru', label: 'Русский', flag: '🇷🇺' },
  { value: 'pl', label: 'Polski', flag: '🇵🇱' },
  { value: 'cs', label: 'Čeština', flag: '🇨🇿' },
  { value: 'sk', label: 'Slovenčina', flag: '🇸🇰' },
  { value: 'uk', label: 'Українська', flag: '🇺🇦' },
  { value: 'be', label: 'Беларуская', flag: '🇧🇾' },
  { value: 'bg', label: 'Български', flag: '🇧🇬' },
  { value: 'ro', label: 'Română', flag: '🇷🇴' },
  { value: 'hu', label: 'Magyar', flag: '🇭🇺' },

  // European Languages - Southern
  { value: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
  { value: 'hr', label: 'Hrvatski', flag: '🇭🇷' },
  { value: 'sr', label: 'Српски', flag: '🇷🇸' },
  { value: 'sl', label: 'Slovenščina', flag: '🇸🇮' },
  { value: 'sq', label: 'Shqip', flag: '🇦🇱' },
  { value: 'mk', label: 'Македонски', flag: '🇲🇰' },

  // Baltic & Other European
  { value: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
  { value: 'lv', label: 'Latviešu', flag: '🇱🇻' },
  { value: 'et', label: 'Eesti', flag: '🇪🇪' },
  { value: 'mt', label: 'Malti', flag: '🇲🇹' },
  { value: 'ga', label: 'Gaeilge', flag: '🇮🇪' },
  { value: 'gd', label: 'Gàidhlig', flag: '🏴󐁧󐁢󐁳󐁣󐁴󐁿' },
  { value: 'cy', label: 'Cymraeg', flag: '🏴󐁧󐁢󐁷󐁬󐁳󐁿' },

  // Caucasus & Central Asia
  { value: 'ka', label: 'ქართული', flag: '🇬🇪' },
  { value: 'hy', label: 'Հայերեն', flag: '🇦🇲' },
  { value: 'az', label: 'Azərbaycan', flag: '🇦🇿' },
  { value: 'kk', label: 'Қазақ', flag: '🇰🇿' },
  { value: 'uz', label: 'Oʻzbek', flag: '🇺🇿' },
  { value: 'ky', label: 'Кыргызча', flag: '🇰🇬' },
  { value: 'tg', label: 'Тоҷикӣ', flag: '🇹🇯' },
  { value: 'tk', label: 'Türkmen', flag: '🇹🇲' },

  // African Languages
  { value: 'sw', label: 'Kiswahili', flag: '🇰🇪' },
  { value: 'am', label: 'አማርኛ', flag: '🇪🇹' },
  { value: 'ti', label: 'ትግርኛ', flag: '🇪🇷' },
  { value: 'so', label: 'Soomaali', flag: '🇸🇴' },
  { value: 'om', label: 'Afaan Oromoo', flag: '🇪🇹' },
  { value: 'ha', label: 'Hausa', flag: '🇳🇬' },
  { value: 'yo', label: 'Yorùbá', flag: '🇳🇬' },
  { value: 'ig', label: 'Igbo', flag: '🇳🇬' },
  { value: 'zu', label: 'isiZulu', flag: '🇿🇦' },
  { value: 'xh', label: 'isiXhosa', flag: '🇿🇦' },
  { value: 'af', label: 'Afrikaans', flag: '🇿🇦' },
  { value: 'rw', label: 'Kinyarwanda', flag: '🇷🇼' },
  { value: 'mg', label: 'Malagasy', flag: '🇲🇬' },

  // Other
  { value: 'eo', label: 'Esperanto', flag: '🌍' },
  { value: 'la', label: 'Latin', flag: '🏛️' },
] as const;

/**
 * Translates a character or word to the specified language
 * Falls back to English if translation not available
 *
 * @param char - Chinese character or word
 * @param englishDefinition - English definition from dictionary
 * @param targetLang - Target language code
 * @returns Translated definition
 */
export function translateDefinition(
  char: string,
  englishDefinition: string,
  targetLang: SupportedLanguage
): string {
  if (targetLang === 'en') {
    return englishDefinition;
  }

  if (targetLang === 'zh') {
    // For Chinese, we could show traditional form or etymology
    return char; // For now, just return the character
  }

  if (targetLang === 'vi') {
    // Check if we have a Vietnamese translation
    const vietnamese = VIETNAMESE_TRANSLATIONS[char];
    if (vietnamese) {
      return vietnamese;
    }

    // Try to translate common English words to Vietnamese
    return translateEnglishToVietnamese(englishDefinition);
  }

  return englishDefinition;
}

/**
 * Basic English to Vietnamese translation for common words
 * This is a fallback when character-specific translation is not available
 */
function translateEnglishToVietnamese(englishText: string): string {
  const commonTranslations: Record<string, string> = {
    'love': 'yêu',
    'you': 'bạn',
    'good': 'tốt',
    'bad': 'xấu',
    'big': 'lớn',
    'small': 'nhỏ',
    'person': 'người',
    'people': 'người',
    'I': 'tôi',
    'me': 'tôi',
    'he': 'anh ấy',
    'she': 'cô ấy',
    'they': 'họ',
    'have': 'có',
    'to be': 'là',
    'not': 'không',
    'and': 'và',
    'to eat': 'ăn',
    'to drink': 'uống',
    'water': 'nước',
    'food': 'thức ăn',
    'book': 'sách',
    'to look': 'xem',
    'to see': 'nhìn',
    'to say': 'nói',
    'to speak': 'nói',
    'to study': 'học',
    'to learn': 'học',
    'day': 'ngày',
    'year': 'năm',
    'month': 'tháng',
    'time': 'thời gian',
    'now': 'bây giờ',
    'today': 'hôm nay',
    'tomorrow': 'ngày mai',
    'yesterday': 'hôm qua',
    'to come': 'đến',
    'to go': 'đi',
    'to want': 'muốn',
    'to think': 'nghĩ',
    'to know': 'biết',
    'to do': 'làm',
    'to make': 'làm',
    'house': 'nhà',
    'home': 'nhà',
    'car': 'xe',
    'road': 'đường',
    'hot': 'nóng',
    'cold': 'lạnh',
    'new': 'mới',
    'old': 'cũ',
    'beautiful': 'đẹp',
    'ugly': 'xấu',
  };

  // Simple word-by-word replacement
  let translated = englishText.toLowerCase();
  for (const [eng, viet] of Object.entries(commonTranslations)) {
    translated = translated.replace(new RegExp(`\\b${eng}\\b`, 'gi'), viet);
  }

  return translated || englishText;
}
