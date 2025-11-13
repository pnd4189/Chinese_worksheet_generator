/**
 * Chinese-English Dictionary Data
 * Source: https://github.com/drkameleon/complete-hsk-vocabulary
 */

export interface DictionaryEntry {
  pinyin: string;
  definition: string;
}

export const DICTIONARY: Record<string, DictionaryEntry> = {
  // Common Single Characters (HSK 1-3)
  "你": { "pinyin": "nǐ", "definition": "you" },
  "好": { "pinyin": "hǎo", "definition": "good; well" },
  "我": { "pinyin": "wǒ", "definition": "I; me" },
  "是": { "pinyin": "shì", "definition": "to be; yes" },
  "的": { "pinyin": "de", "definition": "possessive particle" },
  "了": { "pinyin": "le", "definition": "completed action particle" },
  "不": { "pinyin": "bù", "definition": "no; not" },
  "在": { "pinyin": "zài", "definition": "at; in; on" },
  "人": { "pinyin": "rén", "definition": "person; people" },
  "有": { "pinyin": "yǒu", "definition": "to have; there is" },
  "他": { "pinyin": "tā", "definition": "he; him" },
  "这": { "pinyin": "zhè", "definition": "this" },
  "中": { "pinyin": "zhōng", "definition": "middle; center; China" },
  "大": { "pinyin": "dà", "definition": "big; large" },
  "来": { "pinyin": "lái", "definition": "to come" },
  "上": { "pinyin": "shàng", "definition": "on; above; up" },
  "国": { "pinyin": "guó", "definition": "country; nation" },
  "个": { "pinyin": "gè", "definition": "general measure word" },
  "到": { "pinyin": "dào", "definition": "to arrive; to reach" },
  "说": { "pinyin": "shuō", "definition": "to say; to speak" },
  "们": { "pinyin": "men", "definition": "plural marker" },
  "为": { "pinyin": "wèi", "definition": "for; because of" },
  "子": { "pinyin": "zǐ", "definition": "son; child; seed" },
  "和": { "pinyin": "hé", "definition": "and; with" },
  "地": { "pinyin": "dì", "definition": "earth; ground" },
  "出": { "pinyin": "chū", "definition": "to go out; to come out" },
  "道": { "pinyin": "dào", "definition": "way; road; path" },
  "也": { "pinyin": "yě", "definition": "also; too" },
  "时": { "pinyin": "shí", "definition": "time; when" },
  "年": { "pinyin": "nián", "definition": "year" },
  "得": { "pinyin": "de", "definition": "to get; complement marker" },
  "就": { "pinyin": "jiù", "definition": "then; just" },
  "那": { "pinyin": "nà", "definition": "that" },
  "要": { "pinyin": "yào", "definition": "to want; to need" },
  "下": { "pinyin": "xià", "definition": "down; below; under" },
  "以": { "pinyin": "yǐ", "definition": "by means of; with" },
  "生": { "pinyin": "shēng", "definition": "to give birth; life" },
  "会": { "pinyin": "huì", "definition": "can; to meet" },
  "自": { "pinyin": "zì", "definition": "self; from" },
  "着": { "pinyin": "zhe", "definition": "continuous aspect particle" },
  "去": { "pinyin": "qù", "definition": "to go" },
  "之": { "pinyin": "zhī", "definition": "possessive particle (classical)" },
  "过": { "pinyin": "guò", "definition": "to pass; to cross; experience particle" },
  "家": { "pinyin": "jiā", "definition": "home; family" },
  "学": { "pinyin": "xué", "definition": "to study; to learn" },
  "对": { "pinyin": "duì", "definition": "correct; to face; towards" },
  "可": { "pinyin": "kě", "definition": "can; may; but" },
  "她": { "pinyin": "tā", "definition": "she; her" },
  "里": { "pinyin": "lǐ", "definition": "inside; within" },
  "后": { "pinyin": "hòu", "definition": "after; behind; later" },
  "小": { "pinyin": "xiǎo", "definition": "small; little" },
  "么": { "pinyin": "me", "definition": "question particle" },
  "心": { "pinyin": "xīn", "definition": "heart; mind" },
  "多": { "pinyin": "duō", "definition": "many; much; more" },
  "天": { "pinyin": "tiān", "definition": "sky; heaven; day" },
  "而": { "pinyin": "ér", "definition": "and; but; yet" },
  "能": { "pinyin": "néng", "definition": "can; to be able to" },
  "都": { "pinyin": "dōu", "definition": "all; both" },
  "然": { "pinyin": "rán", "definition": "right; so; correct" },
  "没": { "pinyin": "méi", "definition": "not have; without" },
  "日": { "pinyin": "rì", "definition": "sun; day" },
  "于": { "pinyin": "yú", "definition": "in; at; to" },
  "起": { "pinyin": "qǐ", "definition": "to rise; to get up" },
  "还": { "pinyin": "hái", "definition": "still; yet; also" },
  "发": { "pinyin": "fā", "definition": "to send out; to emit" },
  "成": { "pinyin": "chéng", "definition": "to become; to succeed" },
  "事": { "pinyin": "shì", "definition": "matter; affair; thing" },
  "只": { "pinyin": "zhǐ", "definition": "only; just" },
  "作": { "pinyin": "zuò", "definition": "to do; to make" },
  "当": { "pinyin": "dāng", "definition": "to be; to serve as; when" },
  "想": { "pinyin": "xiǎng", "definition": "to think; to want" },
  "看": { "pinyin": "kàn", "definition": "to see; to look; to watch" },
  "文": { "pinyin": "wén", "definition": "writing; language; culture" },
  "无": { "pinyin": "wú", "definition": "without; not have" },
  "开": { "pinyin": "kāi", "definition": "to open; to start" },
  "手": { "pinyin": "shǒu", "definition": "hand" },
  "十": { "pinyin": "shí", "definition": "ten" },
  "用": { "pinyin": "yòng", "definition": "to use" },
  "主": { "pinyin": "zhǔ", "definition": "main; master; host" },
  "行": { "pinyin": "xíng", "definition": "to walk; to go; capable" },
  "方": { "pinyin": "fāng", "definition": "square; direction; method" },
  "又": { "pinyin": "yòu", "definition": "again; also" },
  "如": { "pinyin": "rú", "definition": "like; as; if" },
  "前": { "pinyin": "qián", "definition": "front; before; ahead" },
  "所": { "pinyin": "suǒ", "definition": "place; that which" },
  "本": { "pinyin": "běn", "definition": "root; origin; basis; book" },
  "见": { "pinyin": "jiàn", "definition": "to see; to meet" },
  "经": { "pinyin": "jīng", "definition": "to pass through; classic" },
  "头": { "pinyin": "tóu", "definition": "head" },
  "面": { "pinyin": "miàn", "definition": "face; surface; side" },
  "公": { "pinyin": "gōng", "definition": "public; official" },
  "同": { "pinyin": "tóng", "definition": "same; together; with" },
  "三": { "pinyin": "sān", "definition": "three" },
  "已": { "pinyin": "yǐ", "definition": "already" },
  "老": { "pinyin": "lǎo", "definition": "old; aged" },
  "从": { "pinyin": "cóng", "definition": "from; to follow" },
  "动": { "pinyin": "dòng", "definition": "to move; motion" },
  "两": { "pinyin": "liǎng", "definition": "two; both" },
  "长": { "pinyin": "cháng", "definition": "long; length" },
  "把": { "pinyin": "bǎ", "definition": "to hold; object marker" },
  "第": { "pinyin": "dì", "definition": "ordinal prefix" },
  "样": { "pinyin": "yàng", "definition": "appearance; shape; kind" },
  "别": { "pinyin": "bié", "definition": "other; don't; to separate" },
  "员": { "pinyin": "yuán", "definition": "member; personnel" },
  "话": { "pinyin": "huà", "definition": "speech; language; words" },
  "分": { "pinyin": "fēn", "definition": "to divide; minute; point" },
  "情": { "pinyin": "qíng", "definition": "feeling; emotion; affection" },
  "世": { "pinyin": "shì", "definition": "world; generation; era" },
  "界": { "pinyin": "jiè", "definition": "boundary; world; scope" },
  "月": { "pinyin": "yuè", "definition": "moon; month" },
  "明": { "pinyin": "míng", "definition": "bright; clear; tomorrow" },
  "今": { "pinyin": "jīn", "definition": "today; now; modern" },
  "回": { "pinyin": "huí", "definition": "to return; to reply; classifier" },
  "水": { "pinyin": "shuǐ", "definition": "water" },
  "门": { "pinyin": "mén", "definition": "door; gate; way" },
  "书": { "pinyin": "shū", "definition": "book; letter; writing" },
  "车": { "pinyin": "chē", "definition": "vehicle; car" },
  "吃": { "pinyin": "chī", "definition": "to eat" },
  "喝": { "pinyin": "hē", "definition": "to drink" },
  "做": { "pinyin": "zuò", "definition": "to do; to make" },
  "买": { "pinyin": "mǎi", "definition": "to buy" },
  "东": { "pinyin": "dōng", "definition": "east" },
  "西": { "pinyin": "xī", "definition": "west" },
  "南": { "pinyin": "nán", "definition": "south" },
  "北": { "pinyin": "běi", "definition": "north" },
  "一": { "pinyin": "yī", "definition": "one" },
  "二": { "pinyin": "èr", "definition": "two" },
  "四": { "pinyin": "sì", "definition": "four" },
  "五": { "pinyin": "wǔ", "definition": "five" },
  "六": { "pinyin": "liù", "definition": "six" },
  "七": { "pinyin": "qī", "definition": "seven" },
  "八": { "pinyin": "bā", "definition": "eight" },
  "九": { "pinyin": "jiǔ", "definition": "nine" },
  "百": { "pinyin": "bǎi", "definition": "hundred" },
  "千": { "pinyin": "qiān", "definition": "thousand" },
  "万": { "pinyin": "wàn", "definition": "ten thousand" },

  "阿拉伯语": {
    "pinyin": "Ā lā bó yǔ",
    "definition": "Arabic (language)"
  },
  "阿姨": {
    "pinyin": "ā yí",
    "definition": "maternal aunt; step-mother; childcare worker; nursemaid; woman of similar age to one's parents (term of address used by child)"
  },
  "呵": {
    "pinyin": "ā",
    "definition": "variant of 啊"
  },
  "呵护": {
    "pinyin": "hē hù",
    "definition": "to bless; to cherish; to take good care of; to conserve"
  },
  "啊": {
    "pinyin": "ā",
    "definition": "interjection of surprise; Ah!; Oh!"
  },
  "哎": {
    "pinyin": "āi",
    "definition": "hey!; (interjection used to attract attention or to express surprise or disapprobation)"
  },
  "哎呀": {
    "pinyin": "āi yā",
    "definition": "interjection of wonder, shock or admiration"
  },
  "哎哟": {
    "pinyin": "āi yō",
    "definition": "hey; ow; ouch; interjection of pain or surprise"
  },
  "哀求": {
    "pinyin": "āi qiú",
    "definition": "to entreat; to implore; to plead"
  },
  "唉": {
    "pinyin": "āi",
    "definition": "interjection or grunt of agreement or recognition (e.g. yes, it's me!); to sigh"
  },
  "挨": {
    "pinyin": "āi",
    "definition": "in order; in sequence; close to; adjacent to"
  },
  "挨打": {
    "pinyin": "ái dǎ",
    "definition": "to take a beating; to get thrashed; to come under attack"
  },
  "挨家挨户": {
    "pinyin": "āi jiā āi hù",
    "definition": "to go from house to house"
  },
  "挨着": {
    "pinyin": "āi zhe",
    "definition": "near"
  },
  "癌": {
    "pinyin": "ái",
    "definition": "cancer; carcinoma; also pr. [yán]"
  },
  "癌症": {
    "pinyin": "ái zhèng",
    "definition": "cancer"
  },
  "矮": {
    "pinyin": "ǎi",
    "definition": "low; short (in length)"
  },
  "矮小": {
    "pinyin": "ǎi xiǎo",
    "definition": "short and small; low and small; undersized"
  },
  "艾滋病": {
    "pinyin": "ài zī bìng",
    "definition": "AIDS (loanword)"
  },
  "爱": {
    "pinyin": "ài",
    "definition": "to love; to be fond of; to like; affection; to be inclined (to do sth); to tend to (happen)"
  },
  "爱不释手": {
    "pinyin": "ài bù shì shǒu",
    "definition": "(idiom) to like sth so much that one is reluctant to put it down; to find sth utterly irresistible"
  },
  "爱戴": {
    "pinyin": "ài dài",
    "definition": "to love and respect; love and respect"
  },
  "爱国": {
    "pinyin": "ài guó",
    "definition": "to love one's country; patriotic"
  },
  "爱好": {
    "pinyin": "ài hào",
    "definition": "to like; to be fond of; to take pleasure in; to be keen on; interest; hobby"
  },
  "爱护": {
    "pinyin": "ài hù",
    "definition": "to cherish; to treasure; to take care of; to love and protect"
  },
  "爱理不理": {
    "pinyin": "ài lǐ bù lǐ",
    "definition": "(idiom) standoffish; indifferent"
  },
  "爱面子": {
    "pinyin": "ài miàn zi",
    "definition": "to like to look good in the eyes of others; sensitive about how one is regarded by others; proud"
  },
  "爱情": {
    "pinyin": "ài qíng",
    "definition": "romance; love (romantic)"
  },
  "爱人": {
    "pinyin": "ài ren",
    "definition": "spouse (PRC); lover (non-PRC)"
  },
  "爱惜": {
    "pinyin": "ài xī",
    "definition": "to cherish; to treasure; to use sparingly"
  },
  "爱心": {
    "pinyin": "ài xīn",
    "definition": "compassion; kindness; care for others; love; charity (bazaar, golf day etc); heart (the symbol ♥)"
  },
  "碍事": {
    "pinyin": "ài shì",
    "definition": "to be in the way; to be a hindrance; (usu. in the negative) to be of consequence; to matter"
  },
  "暧昧": {
    "pinyin": "ài mèi",
    "definition": "vague; ambiguous; equivocal; dubious"
  },
  "安": {
    "pinyin": "Ān",
    "definition": "surname An"
  },
  "安定": {
    "pinyin": "Ān dìng",
    "definition": "Anting township in Tainan county 台南县, Taiwan"
  },
  "安抚": {
    "pinyin": "ān fǔ",
    "definition": "to placate; to pacify; to appease"
  },
  "安检": {
    "pinyin": "ān jiǎn",
    "definition": "security check (abbr. for 安全检查); to do a security check"
  },
  "安静": {
    "pinyin": "ān jìng",
    "definition": "quiet; peaceful; calm"
  },
  "安居乐业": {
    "pinyin": "ān jū lè yè",
    "definition": "to live in peace and work happily (idiom)"
  },
  "安眠药": {
    "pinyin": "ān mián yào",
    "definition": "sleeping pill"
  },
  "安宁": {
    "pinyin": "Ān níng",
    "definition": "Anning District of Lanzhou City 兰州市, Gansu; Anning City, to the west of Kunming 明, Yunnan"
  },
  "安排": {
    "pinyin": "ān pái",
    "definition": "to arrange; to plan; to set up; arrangements; plans"
  },
  "安全": {
    "pinyin": "ān quán",
    "definition": "safe; secure; safety; security"
  },
  "安慰": {
    "pinyin": "ān wèi",
    "definition": "to comfort; to console"
  },
  "安稳": {
    "pinyin": "ān wěn",
    "definition": "steady; stable; sedate; calm; (of sleep) sound; (of a transition) smooth"
  },
  "安详": {
    "pinyin": "ān xiáng",
    "definition": "serene"
  },
  "安心": {
    "pinyin": "ān xīn",
    "definition": "at ease; to feel relieved; to set one's mind at rest; to keep one's mind on sth"
  },
  "安逸": {
    "pinyin": "ān yì",
    "definition": "easy and comfortable; easy"
  },
  "安置": {
    "pinyin": "ān zhì",
    "definition": "to find a place for; to help settle down; to arrange for; to get into bed; placement"
  },
  "安装": {
    "pinyin": "ān zhuāng",
    "definition": "to install; to erect; to fix; to mount; installation"
  },
  "岸": {
    "pinyin": "àn",
    "definition": "variant of 岸"
  },
  "岸上": {
    "pinyin": "àn shàng",
    "definition": "ashore; on the riverbank"
  },
  "按": {
    "pinyin": "àn",
    "definition": "to press; to push; to leave aside or shelve; to control; to restrain; to keep one's hand on; to check or refer to; according to; in the light of; (of an editor or author) to make a comment"
  },
  "按键": {
    "pinyin": "àn jiàn",
    "definition": "button or key (on a device); keystroke; to press a button"
  },
  "按理说": {
    "pinyin": "àn lǐ shuō",
    "definition": "it is reasonable to say that..."
  },
  "按摩": {
    "pinyin": "àn mó",
    "definition": "massage; to massage"
  },
  "按时": {
    "pinyin": "àn shí",
    "definition": "on time; before deadline; on schedule"
  },
  "按说": {
    "pinyin": "àn shuō",
    "definition": "in the ordinary course of events; ordinarily; normally"
  },
  "按照": {
    "pinyin": "àn zhào",
    "definition": "according to; in accordance with; in the light of; on the basis of"
  },
  "案件": {
    "pinyin": "àn jiàn",
    "definition": "case; instance"
  },
  "案例": {
    "pinyin": "àn lì",
    "definition": "case (of fraud, hepatitis, international cooperation etc); instance; example"
  },
  "暗": {
    "pinyin": "àn",
    "definition": "variant of 暗"
  },
  "暗地里": {
    "pinyin": "àn dì li",
    "definition": "secretly; inwardly; on the sly"
  },
  "暗杀": {
    "pinyin": "àn shā",
    "definition": "to assassinate"
  },
  "暗示": {
    "pinyin": "àn shì",
    "definition": "to hint; to suggest; hint; suggestion"
  },
  "暗中": {
    "pinyin": "àn zhōng",
    "definition": "in the dark; in secret; on the sly; surreptitiously"
  },
  "昂贵": {
    "pinyin": "áng guì",
    "definition": "expensive; costly"
  },
  "凹": {
    "pinyin": "āo",
    "definition": "depressed; sunken; indented; concave; female (connector etc)"
  },
  "凹凸": {
    "pinyin": "āo tū",
    "definition": "concave or convex; bumps and holes; uneven (surface); rugged"
  },
  "熬": {
    "pinyin": "āo",
    "definition": "to boil; to simmer"
  },
  "熬夜": {
    "pinyin": "áo yè",
    "definition": "to stay up late or all night"
  },
  "傲": {
    "pinyin": "ào",
    "definition": "proud; arrogant; to despise; unyielding; to defy"
  },
  "傲慢": {
    "pinyin": "ào màn",
    "definition": "arrogant; haughty"
  },
  "奥秘": {
    "pinyin": "ào mì",
    "definition": "secret; mystery"
  },
  "奥运会": {
    "pinyin": "Aò yùn huì",
    "definition": "abbr. for 奥林匹克运动会; Olympic Games; the Olympics"
  },
  "八卦": {
    "pinyin": "bā guà",
    "definition": "the eight divinatory trigrams of the Book of Changes 易经; gossip; gossipy"
  },
  "扒": {
    "pinyin": "bā",
    "definition": "to peel; to skin; to tear; to pull down; to cling to (sth on which one is climbing); to dig"
  },
  "芭蕾": {
    "pinyin": "bā lěi",
    "definition": "ballet (loanword)"
  },
  "疤": {
    "pinyin": "bā",
    "definition": "scar; scab"
  },
  "拔": {
    "pinyin": "bá",
    "definition": "to pull up; to pull out; to draw out by suction; to select; to pick; to stand out (above level); to surpass; to seize"
  },
  "拔苗助长": {
    "pinyin": "bá miáo zhù zhǎng",
    "definition": "to spoil things through excessive enthusiasm (idiom)"
  },
  "把柄": {
    "pinyin": "bǎ bǐng",
    "definition": "handle; (fig.) information that can be used against sb"
  },
  "把关": {
    "pinyin": "bǎ guān",
    "definition": "to guard a pass; to check on sth"
  },
  "把手": {
    "pinyin": "bǎ shǒu",
    "definition": "to shake hands"
  },
  "把握": {
    "pinyin": "bǎ wò",
    "definition": "to grasp (also fig.); to seize; to hold; assurance; certainty; sure (of the outcome)"
  },
  "把戏": {
    "pinyin": "bǎ xì",
    "definition": "acrobatics; jugglery; trick; ploy"
  },
  "靶子": {
    "pinyin": "bǎ zi",
    "definition": "target"
  },
  "坝": {
    "pinyin": "bà",
    "definition": "dam; dike; embankment"
  },
  "爸": {
    "pinyin": "bà",
    "definition": "father; dad; pa; papa"
  },
  "爸爸": {
    "pinyin": "bà ba",
    "definition": "(coll.) father; dad"
  },
  "霸道": {
    "pinyin": "bà dào",
    "definition": "the Way of the Hegemon; abbr. for 霸王之道; despotic rule; rule by might; evil as opposed to the Way of the King 王道; overbearing; tyranny; (of liquor, medicine etc) strong; potent"
  },
  "霸占": {
    "pinyin": "bà zhàn",
    "definition": "to occupy by force; to seize; to dominate"
  },
  "巴不得": {
    "pinyin": "bā bu de",
    "definition": "(coll.) to be eager for; to long for; to look forward to"
  },
  "巴结": {
    "pinyin": "bā jie",
    "definition": "to fawn on; to curry favor with; to make up to"
  },
  "巴士": {
    "pinyin": "bā shì",
    "definition": "bus (loanword); motor coach"
  },
  "吧": {
    "pinyin": "bā",
    "definition": "bar (loanword) (serving drinks, or providing Internet access etc); to puff (on a pipe etc); (onom.) bang; abbr. for 贴吧"
  },
  "罢工": {
    "pinyin": "bà gōng",
    "definition": "a strike; to go on strike"
  },
  "罢了": {
    "pinyin": "bà le",
    "definition": "a modal particle indicating (that's all, only, nothing much)"
  },
  "罢免": {
    "pinyin": "bà miǎn",
    "definition": "to remove sb from their post; to dismiss"
  },
  "罢休": {
    "pinyin": "bà xiū",
    "definition": "to give up; to abandon (a goal etc); to let sth go; forget it; let the matter drop"
  },
  "掰": {
    "pinyin": "bāi",
    "definition": "to break off or break open sth with one's hands; (fig.) to break off (a relationship)"
  },
  "白": {
    "pinyin": "Bái",
    "definition": "surname Bai"
  },
  "白白": {
    "pinyin": "bái bái",
    "definition": "in vain; to no purpose; for nothing; white"
  },
  "白菜": {
    "pinyin": "bái cài",
    "definition": "Chinese cabbage; pak choi"
  },
  "白酒": {
    "pinyin": "bái jiǔ",
    "definition": "baijiu, a spirit usually distilled from sorghum; (Tw) white wine (abbr. for 酒)"
  },
  "白领": {
    "pinyin": "bái lǐng",
    "definition": "white-collar; white-collar worker"
  },
  "白色": {
    "pinyin": "bái sè",
    "definition": "white; fig. reactionary; anti-communist"
  },
  "白天": {
    "pinyin": "bái tiān",
    "definition": "daytime; during the day; day"
  },
  "百分比": {
    "pinyin": "bǎi fēn bǐ",
    "definition": "percentage"
  },
  "百分点": {
    "pinyin": "bǎi fēn diǎn",
    "definition": "percentage point"
  },
  "百合": {
    "pinyin": "bǎi hé",
    "definition": "lily"
  },
  "百货": {
    "pinyin": "bǎi huò",
    "definition": "general merchandise"
  },
  "百科全书": {
    "pinyin": "bǎi kē quán shū",
    "definition": "encyclopedia"
  },
  "柏树": {
    "pinyin": "bǎi shù",
    "definition": "cypress tree; Taiwan pr. [bó shù]"
  },
  "摆": {
    "pinyin": "bǎi",
    "definition": "to arrange; to exhibit; to move to and fro; a pendulum"
  },
  "摆动": {
    "pinyin": "bǎi dòng",
    "definition": "to sway; to swing; to move back and forth; to oscillate"
  },
  "摆放": {
    "pinyin": "bǎi fàng",
    "definition": "to set up; to arrange; to lay out"
  },
  "摆平": {
    "pinyin": "bǎi píng",
    "definition": "to be fair; to be impartial; to settle (a matter etc)"
  },
  "摆设": {
    "pinyin": "bǎi shè",
    "definition": "to set out; to display; to furnish (a room or house)"
  },
  "摆脱": {
    "pinyin": "bǎi tuō",
    "definition": "to break away from; to cast off (old ideas etc); to get rid of; to break away (from); to break out (of); to free oneself from; to extricate oneself"
  },
  "败": {
    "pinyin": "bài",
    "definition": "to defeat; to damage; to lose (to an opponent); to fail; to wither"
  },
  "败坏": {
    "pinyin": "bài huài",
    "definition": "to ruin; to corrupt; to undermine"
  },
  "拜访": {
    "pinyin": "bài fǎng",
    "definition": "to pay a visit; to call on"
  },
  "拜会": {
    "pinyin": "bài huì",
    "definition": "(often used in the context of diplomacy) to meet with; to pay a visit to; to call on"
  },
  "拜见": {
    "pinyin": "bài jiàn",
    "definition": "to pay a formal visit; to call to pay respects; to meet one's senior or superior"
  },
  "拜年": {
    "pinyin": "bài nián",
    "definition": "to pay a New Year call; to wish sb a Happy New Year"
  },
  "拜托": {
    "pinyin": "bài tuō",
    "definition": "to request sb to do sth; please!"
  },
  "扳": {
    "pinyin": "bān",
    "definition": "to pull; to turn (sth) around; to turn around (a situation); to recoup"
  },
  "班": {
    "pinyin": "Bān",
    "definition": "surname Ban"
  },
  "班级": {
    "pinyin": "bān jí",
    "definition": "class (group of students); grade (in school)"
  },
  "班长": {
    "pinyin": "bān zhǎng",
    "definition": "class monitor; squad leader; team leader"
  },
  "班主任": {
    "pinyin": "bān zhǔ rèn",
    "definition": "teacher in charge of a class"
  },
  "颁布": {
    "pinyin": "bān bù",
    "definition": "to issue; to proclaim; to enact (laws, decrees etc)"
  },
  "颁发": {
    "pinyin": "bān fā",
    "definition": "to issue; to promulgate; to award"
  },
  "颁奖": {
    "pinyin": "bān jiǎng",
    "definition": "to confer an award"
  },
  "斑点": {
    "pinyin": "bān diǎn",
    "definition": "spot; stain; speckle"
  },
  "斑纹": {
    "pinyin": "bān wén",
    "definition": "stripe; streak"
  },
  "搬": {
    "pinyin": "bān",
    "definition": "to move (i.e. relocate oneself); to move (sth relatively heavy or bulky); to shift; to copy indiscriminately"
  },
  "搬家": {
    "pinyin": "bān jiā",
    "definition": "to move house; to relocate; to remove (sth)"
  },
  "搬迁": {
    "pinyin": "bān qiān",
    "definition": "to move; to relocate; removal"
  },
  "板": {
    "pinyin": "bǎn",
    "definition": "board; plank; plate; shutter; table tennis bat; clappers (music); accented beat in Chinese music; hard; stiff; to stop smiling or look serious"
  },
  "板块": {
    "pinyin": "bǎn kuài",
    "definition": "slab; (geology) tectonic plate; (fig.) sector (of the stock market or of industry); (economic) bloc"
  },
  "版": {
    "pinyin": "bǎn",
    "definition": "a register; block of printing; edition; version; page"
  },
  "版本": {
    "pinyin": "bǎn běn",
    "definition": "version; edition; release"
  },
  "办": {
    "pinyin": "bàn",
    "definition": "to do; to manage; to handle; to go about; to run; to set up; to deal with"
  },
  "办不到": {
    "pinyin": "bàn bu dào",
    "definition": "impossible; can't be done; no can do; unable to accomplish"
  },
  "办法": {
    "pinyin": "bàn fǎ",
    "definition": "means; method; way (of doing sth)"
  },
  "办公": {
    "pinyin": "bàn gōng",
    "definition": "to handle official business; to work (esp. in an office)"
  },
  "办公室": {
    "pinyin": "bàn gōng shì",
    "definition": "office; business premises; bureau"
  },
  "办理": {
    "pinyin": "bàn lǐ",
    "definition": "to handle; to transact; to conduct"
  },
  "办事": {
    "pinyin": "bàn shì",
    "definition": "to handle (affairs); to work"
  },
  "办事处": {
    "pinyin": "bàn shì chù",
    "definition": "office; agency"
  },
  "办学": {
    "pinyin": "bàn xué",
    "definition": "to run a school"
  },
  "半": {
    "pinyin": "bàn",
    "definition": "half; semi-; incomplete; (after a number) and a half"
  },
  "半边天": {
    "pinyin": "bàn biān tiān",
    "definition": "half the sky; women of the new society; womenfolk"
  },
  "半场": {
    "pinyin": "bàn chǎng",
    "definition": "half of a game or contest; half-court"
  },
  "半岛": {
    "pinyin": "bàn dǎo",
    "definition": "peninsula"
  },
  "半决赛": {
    "pinyin": "bàn jué sài",
    "definition": "semifinals"
  },
  "半路": {
    "pinyin": "bàn lù",
    "definition": "halfway; midway; on the way"
  },
  "半年": {
    "pinyin": "bàn nián",
    "definition": "half a year"
  },
  "半数": {
    "pinyin": "bàn shù",
    "definition": "half the number; half"
  },
  "半天": {
    "pinyin": "bàn tiān",
    "definition": "half of the day; a long time; quite a while; midair"
  },
  "半途而废": {
    "pinyin": "bàn tú ér fèi",
    "definition": "to give up halfway (idiom); leave sth unfinished"
  },
  "半信半疑": {
    "pinyin": "bàn xìn bàn yí",
    "definition": "half doubting; dubious; skeptical"
  },
  "半夜": {
    "pinyin": "bàn yè",
    "definition": "midnight; in the middle of the night"
  },
  "半真半假": {
    "pinyin": "bàn zhēn bàn jiǎ",
    "definition": "(idiom) half true and half false"
  },
  "伴": {
    "pinyin": "bàn",
    "definition": "partner; companion; comrade; associate; to accompany"
  },
  "伴侣": {
    "pinyin": "bàn lu:3",
    "definition": "companion; mate; partner"
  },
  "伴随": {
    "pinyin": "bàn suí",
    "definition": "to accompany; to follow; to occur together with; concomitant"
  },
  "伴奏": {
    "pinyin": "bàn zòu",
    "definition": "to accompany (musically)"
  },
  "拌": {
    "pinyin": "bàn",
    "definition": "to mix; to mix in; to toss (a salad)"
  },
  "扮": {
    "pinyin": "bàn",
    "definition": "to disguise oneself as; to dress up; to play (a role); to put on (an expression)"
  },
  "扮演": {
    "pinyin": "bàn yǎn",
    "definition": "to play the role of; to act"
  },
  "帮": {
    "pinyin": "bāng",
    "definition": "old variant of 帮"
  },
  "帮忙": {
    "pinyin": "bāng máng",
    "definition": "to help; to lend a hand; to do a favor; to do a good turn"
  },
  "帮手": {
    "pinyin": "bāng shǒu",
    "definition": "helper; assistant"
  },
  "帮助": {
    "pinyin": "bāng zhù",
    "definition": "assistance; aid; to help; to assist"
  },
  "绑": {
    "pinyin": "bǎng",
    "definition": "to tie; bind or fasten together; to kidnap"
  },
  "绑架": {
    "pinyin": "bǎng jià",
    "definition": "to kidnap; to abduct; to hijack; a kidnapping; abduction; staking"
  },
  "榜样": {
    "pinyin": "bǎng yàng",
    "definition": "example; model"
  },
  "傍晚": {
    "pinyin": "bàng wǎn",
    "definition": "in the evening; when night falls; towards evening; at night fall; at dusk"
  },
  "棒": {
    "pinyin": "bàng",
    "definition": "stick; club; cudgel; smart; capable; strong; wonderful; classifier for legs of a relay race"
  },
  "棒球": {
    "pinyin": "bàng qiú",
    "definition": "baseball"
  },
  "磅": {
    "pinyin": "bàng",
    "definition": "scale (instrument for weighing); to weigh; (loanword) pound (unit of weight, about 454 grams); (printing) point (unit used to measure the size of type)"
  },
  "包": {
    "pinyin": "Bāo",
    "definition": "surname Bao"
  },
  "包庇": {
    "pinyin": "bāo bì",
    "definition": "to shield; to harbor; to cover up"
  },
  "包袱": {
    "pinyin": "bāo fu",
    "definition": "wrapping cloth; a bundle wrapped in cloth; load; weight; burden; funny part; punchline"
  },
  "包裹": {
    "pinyin": "bāo guǒ",
    "definition": "to wrap up; to bind up; bundle; parcel; package"
  },
  "包含": {
    "pinyin": "bāo hán",
    "definition": "to contain; to embody; to include"
  },
  "包括": {
    "pinyin": "bāo kuò",
    "definition": "to comprise; to include; to involve; to incorporate; to consist of"
  },
  "包容": {
    "pinyin": "bāo róng",
    "definition": "to pardon; to forgive; to show tolerance; to contain; to hold; inclusive"
  },
  "包围": {
    "pinyin": "bāo wéi",
    "definition": "to surround; to encircle; to hem in"
  },
  "包扎": {
    "pinyin": "bāo zā",
    "definition": "variant of 包扎"
  },
  "包装": {
    "pinyin": "bāo zhuāng",
    "definition": "to pack; to package; to wrap; packaging"
  },
  "包子": {
    "pinyin": "bāo zi",
    "definition": "bao (steamed stuffed bun)"
  },
  "煲": {
    "pinyin": "bāo",
    "definition": "to cook slowly over a low flame; pot; saucepan"
  },
  "薄": {
    "pinyin": "Bó",
    "definition": "surname Bo"
  },
  "薄弱": {
    "pinyin": "bó ruò",
    "definition": "weak; frail"
  },
  "宝": {
    "pinyin": "bǎo",
    "definition": "variant of 宝"
  },
  "宝宝": {
    "pinyin": "bǎo bao",
    "definition": "darling; baby"
  },
  "宝贝": {
    "pinyin": "bǎo bèi",
    "definition": "treasured object; treasure; darling; baby; cowry; good-for-nothing or queer character"
  },
  "宝藏": {
    "pinyin": "bǎo zàng",
    "definition": "precious mineral deposits; hidden treasure; (fig.) treasure; (Buddhism) the treasure of Buddha's law"
  },
  "宝贵": {
    "pinyin": "bǎo guì",
    "definition": "valuable; precious; to value; to treasure; to set store by"
  },
  "宝库": {
    "pinyin": "bǎo kù",
    "definition": "treasure-house; treasury; treasure-trove (often fig., book of treasured wisdom)"
  },
  "宝石": {
    "pinyin": "bǎo shí",
    "definition": "precious stone; gem"
  },
  "饱": {
    "pinyin": "bǎo",
    "definition": "to eat till full; satisfied"
  },
  "饱和": {
    "pinyin": "bǎo hé",
    "definition": "saturated; filled to capacity"
  },
  "饱经沧桑": {
    "pinyin": "bǎo jīng cāng sāng",
    "definition": "having lived through many changes"
  },
  "饱满": {
    "pinyin": "bǎo mǎn",
    "definition": "full; plump"
  },
  "保": {
    "pinyin": "Bǎo",
    "definition": "Bulgaria; Bulgarian; abbr. for 保加利亚"
  },
  "保安": {
    "pinyin": "bǎo ān",
    "definition": "to ensure public security; to ensure safety (for workers engaged in production); public security; security guard"
  },
  "保持": {
    "pinyin": "bǎo chí",
    "definition": "to keep; to maintain; to hold; to preserve"
  },
  "保存": {
    "pinyin": "bǎo cún",
    "definition": "to conserve; to preserve; to keep; to save (a file etc) (computing)"
  },
  "保管": {
    "pinyin": "bǎo guǎn",
    "definition": "to hold in safekeeping; to have in one's care; to guarantee; certainly; surely; custodian; curator"
  },
  "保护": {
    "pinyin": "bǎo hù",
    "definition": "to protect; to defend; to safeguard; protection"
  },
  "保健": {
    "pinyin": "bǎo jiàn",
    "definition": "health protection; health care; to maintain in good health"
  },
  "保留": {
    "pinyin": "bǎo liú",
    "definition": "to keep; to retain; to have reservations (about sth); to hold back (from saying sth); to put aside for later"
  },
  "保密": {
    "pinyin": "bǎo mì",
    "definition": "to keep sth confidential; to maintain secrecy"
  },
  "保姆": {
    "pinyin": "bǎo mǔ",
    "definition": "nanny; housekeeper"
  },
  "保暖": {
    "pinyin": "bǎo nuǎn",
    "definition": "to keep warm"
  },
  "保守": {
    "pinyin": "bǎo shǒu",
    "definition": "conservative; to guard; to keep"
  },
  "保卫": {
    "pinyin": "bǎo wèi",
    "definition": "to defend; to safeguard"
  },
  "保鲜": {
    "pinyin": "bǎo xiān",
    "definition": "to keep fresh"
  },
  "保险": {
    "pinyin": "bǎo xiǎn",
    "definition": "insurance; to insure; safe; secure; be sure; be bound to"
  },
  "保修": {
    "pinyin": "bǎo xiū",
    "definition": "to promise to keep sth in good repair; guarantee; warranty"
  },
  "保养": {
    "pinyin": "bǎo yǎng",
    "definition": "to take good care of (or conserve) one's health; to keep in good repair; to maintain; maintenance"
  },
  "保佑": {
    "pinyin": "bǎo yòu",
    "definition": "to bless and protect; blessing"
  },
  "保障": {
    "pinyin": "bǎo zhàng",
    "definition": "to ensure; to guarantee; to safeguard"
  },
  "保证": {
    "pinyin": "bǎo zhèng",
    "definition": "guarantee; to guarantee; to ensure; to safeguard; to pledge"
  },
  "保质期": {
    "pinyin": "bǎo zhì qī",
    "definition": "shelf life; expiration date"
  },
  "保重": {
    "pinyin": "bǎo zhòng",
    "definition": "to take care of oneself"
  },
  "堡垒": {
    "pinyin": "bǎo lěi",
    "definition": "fort"
  },
  "报": {
    "pinyin": "bào",
    "definition": "to announce; to inform; report; newspaper; recompense; revenge"
  },
  "报仇": {
    "pinyin": "bào chóu",
    "definition": "to take revenge; to avenge"
  },
  "报酬": {
    "pinyin": "bào chou",
    "definition": "reward; remuneration"
  },
  "报答": {
    "pinyin": "bào dá",
    "definition": "to repay; to requite"
  },
  "报到": {
    "pinyin": "bào dào",
    "definition": "to report for duty; to check in; to register"
  },
  "报道": {
    "pinyin": "bào dào",
    "definition": "to report (news); report"
  },
  "报废": {
    "pinyin": "bào fèi",
    "definition": "to scrap; to dispose of (sth worn-out or damaged)"
  },
  "报复": {
    "pinyin": "bào fù",
    "definition": "to make reprisals; to retaliate; revenge; retaliation"
  },
  "报告": {
    "pinyin": "bào gào",
    "definition": "to inform; to report; to make known; report; speech; talk; lecture"
  },
  "报警": {
    "pinyin": "bào jǐng",
    "definition": "to sound an alarm; to report sth to the police"
  },
  "报刊": {
    "pinyin": "bào kān",
    "definition": "newspapers and periodicals; the press"
  },
  "报考": {
    "pinyin": "bào kǎo",
    "definition": "to enter oneself for an examination"
  },
  "报名": {
    "pinyin": "bào míng",
    "definition": "to sign up; to enter one's name; to apply; to register; to enroll; to enlist"
  },
  "报社": {
    "pinyin": "bào shè",
    "definition": "newspaper (i.e. a company)"
  },
  "报亭": {
    "pinyin": "bào tíng",
    "definition": "kiosk; newsstand"
  },
  "报销": {
    "pinyin": "bào xiāo",
    "definition": "to submit an expense account; to apply for reimbursement; to write off; to wipe out"
  },
  "报纸": {
    "pinyin": "bào zhǐ",
    "definition": "newspaper; newsprint"
  },
  "抱": {
    "pinyin": "bào",
    "definition": "to hold; to carry (in one's arms); to hug; to embrace; to surround; to cherish; (coll.) (of clothes) to fit nicely"
  },
  "抱负": {
    "pinyin": "bào fù",
    "definition": "aspiration; ambition"
  },
  "抱歉": {
    "pinyin": "bào qiàn",
    "definition": "to be sorry; to feel apologetic; sorry!"
  },
  "抱怨": {
    "pinyin": "bào yuàn",
    "definition": "to complain; to grumble; to harbor a complaint; to feel dissatisfied"
  },
  "豹": {
    "pinyin": "bào",
    "definition": "leopard; panther"
  },
  "暴风雨": {
    "pinyin": "bào fēng yǔ",
    "definition": "rainstorm; storm; tempest"
  },
  "暴风骤雨": {
    "pinyin": "bào fēng zhòu yǔ",
    "definition": "violent wind and rainstorm; hurricane; tempest"
  },
  "暴力": {
    "pinyin": "bào lì",
    "definition": "violence; force; violent"
  },
  "暴利": {
    "pinyin": "bào lì",
    "definition": "sudden huge profits"
  },
  "暴露": {
    "pinyin": "bào lù",
    "definition": "to expose; to reveal; to lay bare; also pr. [pù lù]"
  },
  "暴雨": {
    "pinyin": "bào yǔ",
    "definition": "torrential rain; rainstorm"
  },
  "暴躁": {
    "pinyin": "bào zào",
    "definition": "irascible; irritable; violent"
  },
  "爆": {
    "pinyin": "bào",
    "definition": "to explode or burst; to quick fry or quick boil"
  },
  "爆发": {
    "pinyin": "bào fā",
    "definition": "to break out; to erupt; to explode; to burst out"
  },
  "爆冷门": {
    "pinyin": "bào lěng mén",
    "definition": "an upset (esp. in sports); unexpected turn of events; to pull off a coup; a breakthrough"
  },
  "爆满": {
    "pinyin": "bào mǎn",
    "definition": "filled to capacity (of theater, stadium, gymnasium etc)"
  },
  "爆炸": {
    "pinyin": "bào zhà",
    "definition": "explosion; to explode; to blow up; to detonate"
  },
  "爆竹": {
    "pinyin": "bào zhú",
    "definition": "firecracker"
  },
  "卑鄙": {
    "pinyin": "bēi bǐ",
    "definition": "base; mean; contemptible; despicable"
  },
  "杯": {
    "pinyin": "bēi",
    "definition": "cup; trophy cup; classifier for certain containers of liquids: glass, cup"
  },
  "杯子": {
    "pinyin": "bēi zi",
    "definition": "cup; glass"
  },
  "悲哀": {
    "pinyin": "bēi āi",
    "definition": "grieved; sorrowful"
  },
  "悲惨": {
    "pinyin": "bēi cǎn",
    "definition": "miserable; tragic"
  },
  "悲观": {
    "pinyin": "bēi guān",
    "definition": "pessimistic"
  },
  "悲欢离合": {
    "pinyin": "bēi huān lí hé",
    "definition": "joys and sorrows; partings and reunions; the vicissitudes of life"
  },
  "悲剧": {
    "pinyin": "bēi jù",
    "definition": "tragedy"
  },
  "悲伤": {
    "pinyin": "bēi shāng",
    "definition": "sad; sorrowful"
  },
  "悲痛": {
    "pinyin": "bēi tòng",
    "definition": "grieved; sorrowful"
  },
  "碑": {
    "pinyin": "bēi",
    "definition": "a monument; an upright stone tablet; stele"
  },
  "北边": {
    "pinyin": "běi biān",
    "definition": "north; north side; northern part; to the north of"
  },
  "北部": {
    "pinyin": "běi bù",
    "definition": "northern part"
  },
  "北方": {
    "pinyin": "běi fāng",
    "definition": "north; the northern part a country; China north of the Yellow River"
  },
  "北极": {
    "pinyin": "běi jí",
    "definition": "the North Pole; the Arctic Pole; the north magnetic pole"
  },
  "北京": {
    "pinyin": "Běi jīng",
    "definition": "Beijing, capital of the People's Republic of China"
  },
  "贝壳": {
    "pinyin": "bèi ké",
    "definition": "shell; conch; cowry; mother of pearl; hard outer skin; also pr. [bèi qiào]"
  },
  "备份": {
    "pinyin": "bèi fèn",
    "definition": "backup"
  },
  "备课": {
    "pinyin": "bèi kè",
    "definition": "(of a teacher) to prepare lessons"
  },
  "备受": {
    "pinyin": "bèi shòu",
    "definition": "to fully experience (good or bad)"
  },
  "备忘录": {
    "pinyin": "bèi wàng lù",
    "definition": "memorandum; aide-memoire; memorandum book"
  },
  "备用": {
    "pinyin": "bèi yòng",
    "definition": "reserve; spare; alternate; backup"
  },
  "背": {
    "pinyin": "bēi",
    "definition": "variant of 背"
  },
  "背包": {
    "pinyin": "bēi bāo",
    "definition": "knapsack; rucksack; infantry pack; field pack; blanket roll"
  },
  "背后": {
    "pinyin": "bèi hòu",
    "definition": "behind; at the back; in the rear; behind sb's back"
  },
  "背景": {
    "pinyin": "bèi jǐng",
    "definition": "background; backdrop; context; (fig.) powerful backer"
  },
  "背面": {
    "pinyin": "bèi miàn",
    "definition": "the back; the reverse side; the wrong side"
  },
  "背叛": {
    "pinyin": "bèi pàn",
    "definition": "to betray"
  },
  "背诵": {
    "pinyin": "bèi sòng",
    "definition": "to recite; to repeat from memory"
  },
  "背心": {
    "pinyin": "bèi xīn",
    "definition": "sleeveless garment (vest, waistcoat, singlet, tank top etc)"
  },
  "背着": {
    "pinyin": "bēi zhe",
    "definition": "carrying on one's back"
  },
  "倍": {
    "pinyin": "bèi",
    "definition": "(two, three etc) -fold; times (multiplier); double; to increase or multiply"
  },
  "被": {
    "pinyin": "bèi",
    "definition": "quilt; to cover (with); (literary) to suffer (a misfortune); used to indicate passive voice (placed before the doer of the action like \"by\" in English passive-voice sentences, or, if the doer is not mentioned, before the verb); (since c. 2009) (sarcastic or jocular) used to indicate that the following word should be regarded as being in air quotes (as in 被旅游 to \"go on a trip\", for example)"
  },
  "被捕": {
    "pinyin": "bèi bǔ",
    "definition": "to be arrested; under arrest"
  },
  "被动": {
    "pinyin": "bèi dòng",
    "definition": "passive"
  },
  "被告": {
    "pinyin": "bèi gào",
    "definition": "defendant"
  },
  "被迫": {
    "pinyin": "bèi pò",
    "definition": "to be compelled; to be forced"
  },
  "被子": {
    "pinyin": "bèi zi",
    "definition": "quilt"
  },
  "辈": {
    "pinyin": "bèi",
    "definition": "lifetime; generation; group of people; class; classifier for generations; (literary) classifier for people"
  },
  "奔": {
    "pinyin": "bēn",
    "definition": "to hurry; to rush; to run quickly; to elope"
  },
  "奔波": {
    "pinyin": "bēn bō",
    "definition": "to rush about; to be constantly on the move"
  },
  "奔驰": {
    "pinyin": "Bēn chí",
    "definition": "Benz (name); Mercedes-Benz, German car maker"
  },
  "奔赴": {
    "pinyin": "bēn fù",
    "definition": "to rush to; to hurry to"
  },
  "奔跑": {
    "pinyin": "bēn pǎo",
    "definition": "to run"
  },
  "本地": {
    "pinyin": "běn dì",
    "definition": "local; this locality"
  },
  "本分": {
    "pinyin": "běn fèn",
    "definition": "(to play) one's part; one's role; one's duty; (to stay within) one's bounds; dutiful; keeping to one's role"
  },
  "本科": {
    "pinyin": "běn kē",
    "definition": "undergraduate course; undergraduate (attributive)"
  },
  "本来": {
    "pinyin": "běn lái",
    "definition": "original; originally; at first; it goes without saying; of course"
  },
  "本领": {
    "pinyin": "běn lǐng",
    "definition": "skill; ability; capability"
  },
  "本能": {
    "pinyin": "běn néng",
    "definition": "instinct"
  },
  "本期": {
    "pinyin": "běn qī",
    "definition": "the current period; this term (usually in finance)"
  },
  "本钱": {
    "pinyin": "běn qián",
    "definition": "capital; (fig.) asset; advantage; the means (to do sth)"
  },
  "本人": {
    "pinyin": "běn rén",
    "definition": "I; me; myself; oneself; yourself; himself; herself; the person concerned"
  },
  "本色": {
    "pinyin": "běn sè",
    "definition": "inherent qualities; natural qualities; distinctive character; true qualities"
  },
  "本身": {
    "pinyin": "běn shēn",
    "definition": "itself; in itself; per se"
  },
  "本事": {
    "pinyin": "běn shì",
    "definition": "source material; original story"
  },
  "本土": {
    "pinyin": "běn tǔ",
    "definition": "one's native country; native; local; metropolitan territory"
  },
  "本性": {
    "pinyin": "běn xìng",
    "definition": "natural instincts; nature; inherent quality"
  },
  "本意": {
    "pinyin": "běn yì",
    "definition": "original idea; real intention; etymon"
  },
  "本着": {
    "pinyin": "běn zhe",
    "definition": "based on...; in conformance with..; taking as one's main principle"
  },
  "本质": {
    "pinyin": "běn zhì",
    "definition": "essence; nature; innate character; intrinsic quality"
  },
  "本子": {
    "pinyin": "běn zi",
    "definition": "book; notebook; Japanese-style self-published comic (esp. an erotic one), aka \"dōjinshi\"; edition"
  },
  "笨": {
    "pinyin": "bèn",
    "definition": "stupid; foolish; silly; slow-witted; clumsy"
  },
  "笨蛋": {
    "pinyin": "bèn dàn",
    "definition": "fool; idiot"
  },
  "笨重": {
    "pinyin": "bèn zhòng",
    "definition": "heavy; cumbersome; unwieldy"
  },
  "笨拙": {
    "pinyin": "bèn zhuō",
    "definition": "clumsy; awkward; stupid"
  },
  "崩溃": {
    "pinyin": "bēng kuì",
    "definition": "to collapse; to crumble; to fall apart"
  },
  "甭": {
    "pinyin": "béng",
    "definition": "(contraction of 用) need not; please don't"
  },
  "绷": {
    "pinyin": "bēng",
    "definition": "variant of 绷; variant of 绷"
  },
  "绷带": {
    "pinyin": "bēng dài",
    "definition": "bandage (loanword)"
  },
  "迸发": {
    "pinyin": "bèng fā",
    "definition": "to burst forth"
  },
  "蹦": {
    "pinyin": "bèng",
    "definition": "to jump; to bounce; to hop"
  },
  "逼": {
    "pinyin": "bī",
    "definition": "variant of 逼; to compel; to pressure"
  },
  "逼近": {
    "pinyin": "bī jìn",
    "definition": "to press on towards; to close in on; to approach; to draw near"
  },
  "逼迫": {
    "pinyin": "bī pò",
    "definition": "to force; to compel; to coerce"
  },
  "逼真": {
    "pinyin": "bī zhēn",
    "definition": "lifelike; true to life; distinctly; clearly"
  },
  "鼻涕": {
    "pinyin": "bí tì",
    "definition": "nasal mucus; snivel; snot"
  },
  "鼻子": {
    "pinyin": "bí zi",
    "definition": "nose"
  },
  "比": {
    "pinyin": "Bǐ",
    "definition": "Belgium; Belgian; abbr. for 比利时"
  },
  "比比皆是": {
    "pinyin": "bǐ bǐ jiē shì",
    "definition": "can be found everywhere"
  },
  "比不上": {
    "pinyin": "bǐ bù shàng",
    "definition": "can't compare with"
  },
  "比方": {
    "pinyin": "bǐ fang",
    "definition": "analogy; instance; for instance"
  },
  "比分": {
    "pinyin": "bǐ fēn",
    "definition": "score"
  },
  "比较": {
    "pinyin": "bǐ jiào",
    "definition": "to compare; to contrast; comparatively; relatively; quite; comparison"
  },
  "比例": {
    "pinyin": "bǐ lì",
    "definition": "proportion; scale"
  },
  "比起": {
    "pinyin": "bǐ qǐ",
    "definition": "compared with"
  },
  "比如": {
    "pinyin": "bǐ rú",
    "definition": "for example; for instance; such as"
  },
  "比如说": {
    "pinyin": "bǐ rú shuō",
    "definition": "for example"
  },
  "比赛": {
    "pinyin": "bǐ sài",
    "definition": "competition (sports etc); match; to compete"
  },
  "比试": {
    "pinyin": "bǐ shì",
    "definition": "to have a competition; to measure with one's hand or arm; to make a gesture of measuring"
  },
  "比喻": {
    "pinyin": "bǐ yù",
    "definition": "to compare; to liken to; metaphor; analogy; figure of speech; figuratively"
  },
  "比重": {
    "pinyin": "bǐ zhòng",
    "definition": "proportion; specific gravity"
  },
  "彼此": {
    "pinyin": "bǐ cǐ",
    "definition": "each other; one another"
  },
  "笔": {
    "pinyin": "bǐ",
    "definition": "pen; pencil; writing brush; to write or compose; the strokes of Chinese characters; classifier for sums of money, deals"
  },
  "笔记": {
    "pinyin": "bǐ jì",
    "definition": "to take down (in writing); notes; a type of literature consisting mainly of short sketches"
  },
  "笔记本": {
    "pinyin": "bǐ jì běn",
    "definition": "notebook (stationery); notebook (computing)"
  },
  "笔试": {
    "pinyin": "bǐ shì",
    "definition": "written examination; paper test (for an applicant)"
  },
  "鄙视": {
    "pinyin": "bǐ shì",
    "definition": "to despise; to disdain; to look down upon"
  },
  "必": {
    "pinyin": "bì",
    "definition": "certainly; must; will; necessarily"
  },
  "必不可少": {
    "pinyin": "bì bù kě shǎo",
    "definition": "absolutely necessary; indispensable; essential"
  },
  "必定": {
    "pinyin": "bì dìng",
    "definition": "to be bound to; to be sure to"
  },
  "必将": {
    "pinyin": "bì jiāng",
    "definition": "inevitably"
  },
  "必然": {
    "pinyin": "bì rán",
    "definition": "inevitable; certain; necessity"
  },
  "必修": {
    "pinyin": "bì xiū",
    "definition": "(of an academic course) required; compulsory"
  },
  "必须": {
    "pinyin": "bì xū",
    "definition": "to have to; must; compulsory; necessarily"
  },
  "必需": {
    "pinyin": "bì xū",
    "definition": "to need; to require; essential; indispensable"
  },
  "必要": {
    "pinyin": "bì yào",
    "definition": "necessary; essential; indispensable; required"
  },
  "毕竟": {
    "pinyin": "bì jìng",
    "definition": "after all; all in all; when all is said and done; in the final analysis"
  },
  "毕业": {
    "pinyin": "bì yè",
    "definition": "graduation; to graduate; to finish school"
  },
  "毕业生": {
    "pinyin": "bì yè shēng",
    "definition": "graduate"
  },
  "闭": {
    "pinyin": "bì",
    "definition": "to close; to stop up; to shut; to obstruct"
  },
  "闭幕": {
    "pinyin": "bì mù",
    "definition": "the curtain falls; lower the curtain; to come to an end (of a meeting)"
  },
  "闭幕式": {
    "pinyin": "bì mù shì",
    "definition": "closing ceremony"
  },
  "闭塞": {
    "pinyin": "bì sè",
    "definition": "to stop up; to close up; hard to get to; out of the way; inaccessible; unenlightened; blocking"
  },
  "弊病": {
    "pinyin": "bì bìng",
    "definition": "malady; evil; malpractice; drawback; disadvantage"
  },
  "弊端": {
    "pinyin": "bì duān",
    "definition": "systemic problem (sometimes refers specifically to corrupt practices)"
  },
  "碧绿": {
    "pinyin": "bì lu:4",
    "definition": "dark green"
  },
  "碧玉": {
    "pinyin": "bì yù",
    "definition": "jasper"
  },
  "壁画": {
    "pinyin": "bì huà",
    "definition": "mural (painting); fresco"
  },
  "避": {
    "pinyin": "bì",
    "definition": "to avoid; to shun; to flee; to escape; to keep away from; to leave; to hide from"
  },
  "避免": {
    "pinyin": "bì miǎn",
    "definition": "to avert; to prevent; to avoid; to refrain from"
  },
  "避难": {
    "pinyin": "bì nàn",
    "definition": "refuge; to take refuge; to seek asylum (political etc)"
  },
  "避暑": {
    "pinyin": "bì shǔ",
    "definition": "to be away for the summer holidays; to spend a holiday at a summer resort; to prevent sunstroke"
  },
  "臂": {
    "pinyin": "bì",
    "definition": "arm"
  },
  "边": {
    "pinyin": "biān",
    "definition": "side; edge; margin; border; boundary; simultaneously"
  },
  "边疆": {
    "pinyin": "biān jiāng",
    "definition": "border area; borderland; frontier; frontier region"
  },
  "边界": {
    "pinyin": "biān jiè",
    "definition": "boundary; border"
  },
  "边境": {
    "pinyin": "biān jìng",
    "definition": "frontier; border"
  },
  "边缘": {
    "pinyin": "biān yuán",
    "definition": "edge; fringe; verge; brink; periphery; marginal; borderline"
  },
  "边远": {
    "pinyin": "biān yuǎn",
    "definition": "far from the center; remote; outlying"
  },
  "编": {
    "pinyin": "biān",
    "definition": "to weave; to plait; to organize; to group; to arrange; to edit; to compile; to write; to compose; to fabricate; to make up"
  },
  "编号": {
    "pinyin": "biān hào",
    "definition": "to number; numbering; serial number"
  },
  "编辑": {
    "pinyin": "biān jí",
    "definition": "to edit; to compile; editor; compiler"
  },
  "编剧": {
    "pinyin": "biān jù",
    "definition": "to write a play; scenario; dramatist; screenwriter"
  },
  "编排": {
    "pinyin": "biān pái",
    "definition": "to arrange; to lay out"
  },
  "编写": {
    "pinyin": "biān xiě",
    "definition": "to compile"
  },
  "编造": {
    "pinyin": "biān zào",
    "definition": "to compile; to draw up; to fabricate; to invent; to concoct; to make up; to cook up"
  },
  "编织": {
    "pinyin": "biān zhī",
    "definition": "to weave; to knit; to plait; to braid; (fig.) to create (sth abstract, e.g. a dream, a lie etc)"
  },
  "编制": {
    "pinyin": "biān zhì",
    "definition": "to establish (a unit or department); staffing structure (excluding temporary and casual staff)"
  },
  "鞭策": {
    "pinyin": "biān cè",
    "definition": "to spur on; to urge on; to encourage sb (e.g. to make progress)"
  },
  "鞭炮": {
    "pinyin": "biān pào",
    "definition": "firecrackers; string of small firecrackers"
  },
  "贬低": {
    "pinyin": "biǎn dī",
    "definition": "to belittle; to disparage; to play down; to demean; to degrade; to devalue"
  },
  "贬义": {
    "pinyin": "biǎn yì",
    "definition": "derogatory sense; negative connotation"
  },
  "贬值": {
    "pinyin": "biǎn zhí",
    "definition": "to become devaluated; to devaluate; to depreciate"
  },
  "扁": {
    "pinyin": "Piān",
    "definition": "surname Pian"
  },
  "变": {
    "pinyin": "biàn",
    "definition": "to change; to become different; to transform; to vary; rebellion"
  },
  "变成": {
    "pinyin": "biàn chéng",
    "definition": "to change into; to turn into; to become"
  },
  "变动": {
    "pinyin": "biàn dòng",
    "definition": "to change; to fluctuate; change; fluctuation"
  },
  "变革": {
    "pinyin": "biàn gé",
    "definition": "to transform; to change"
  },
  "变更": {
    "pinyin": "biàn gēng",
    "definition": "to change; to alter; to modify"
  },
  "变故": {
    "pinyin": "biàn gù",
    "definition": "an unforeseen event; accident; misfortune"
  },
  "变化": {
    "pinyin": "biàn huà",
    "definition": "(intransitive) to change; to vary; change; variation"
  },
  "变幻莫测": {
    "pinyin": "biàn huàn mò cè",
    "definition": "to change unpredictably; unpredictable; erratic; treacherous"
  },
  "变换": {
    "pinyin": "biàn huàn",
    "definition": "to transform; to convert; to vary; to alternate; a transformation"
  },
  "变迁": {
    "pinyin": "biàn qiān",
    "definition": "changes; vicissitudes"
  },
  "变为": {
    "pinyin": "biàn wéi",
    "definition": "to change into"
  },
  "变形": {
    "pinyin": "biàn xíng",
    "definition": "to become deformed; to change shape; to morph"
  },
  "变异": {
    "pinyin": "biàn yì",
    "definition": "variation"
  },
  "变质": {
    "pinyin": "biàn zhì",
    "definition": "to degenerate; to deteriorate; (of food) to go bad; to go off; (geology) metamorphism"
  },
  "便": {
    "pinyin": "biàn",
    "definition": "plain; informal; suitable; convenient; opportune; to urinate or defecate; equivalent to 就: then; in that case; even if; soon afterwards"
  },
  "便道": {
    "pinyin": "biàn dào",
    "definition": "pavement; sidewalk; shortcut; makeshift road"
  },
  "便饭": {
    "pinyin": "biàn fàn",
    "definition": "an ordinary meal; simple home cooking"
  },
  "便捷": {
    "pinyin": "biàn jié",
    "definition": "convenient and fast"
  },
  "便利": {
    "pinyin": "biàn lì",
    "definition": "convenient; easy; to facilitate"
  },
  "便利店": {
    "pinyin": "biàn lì diàn",
    "definition": "convenience store"
  },
  "便是": {
    "pinyin": "biàn shì",
    "definition": "(emphasizes that sth is precisely or exactly as stated); precisely; exactly; even; if; just like; in the same way as"
  },
  "便条": {
    "pinyin": "biàn tiáo",
    "definition": "(informal) note"
  },
  "便宜": {
    "pinyin": "biàn yí",
    "definition": "convenient"
  },
  "便于": {
    "pinyin": "biàn yú",
    "definition": "easy to; convenient for"
  },
  "遍": {
    "pinyin": "biàn",
    "definition": "variant of 遍"
  },
  "遍布": {
    "pinyin": "biàn bù",
    "definition": "to cover the whole (area); to be found throughout"
  },
  "遍地": {
    "pinyin": "biàn dì",
    "definition": "everywhere; all over"
  },
  "辨别": {
    "pinyin": "biàn bié",
    "definition": "to distinguish; to differentiate; to discern; to recognize; to tell"
  },
  "辨认": {
    "pinyin": "biàn rèn",
    "definition": "to recognize; to identify"
  },
  "辩": {
    "pinyin": "biàn",
    "definition": "to dispute; to debate; to argue; to discuss"
  },
  "辩护": {
    "pinyin": "biàn hù",
    "definition": "to speak in defense of; to argue in favor of; to defend; to plead"
  },
  "辩解": {
    "pinyin": "biàn jiě",
    "definition": "to explain; to justify; to defend (a point of view etc); to provide an explanation; to try to defend oneself"
  },
  "辩论": {
    "pinyin": "biàn lùn",
    "definition": "debate; argument; to argue over"
  },
  "辩证": {
    "pinyin": "biàn zhèng",
    "definition": "to investigate; dialectical"
  },
  "辫子": {
    "pinyin": "biàn zi",
    "definition": "plait; braid; pigtail; a mistake or shortcoming that may be exploited by an opponent; handle"
  },
  "标": {
    "pinyin": "biāo",
    "definition": "mark; sign; label; to mark with a symbol, label, lettering etc; to bear (a brand name, registration number etc); prize; award; bid; target; quota; (old) the topmost branches of a tree; visible symptom; classifier for military units"
  },
  "标榜": {
    "pinyin": "biāo bǎng",
    "definition": "to flaunt; to advertise; to parade; boost; excessive praise"
  },
  "标本": {
    "pinyin": "biāo běn",
    "definition": "specimen; sample; the root cause and symptoms of a disease"
  },
  "标点": {
    "pinyin": "biāo diǎn",
    "definition": "punctuation; a punctuation mark; to punctuate"
  },
  "标记": {
    "pinyin": "biāo jì",
    "definition": "sign; mark; symbol; to mark up; (computing) token"
  },
  "标签": {
    "pinyin": "biāo qiān",
    "definition": "label; tag; (computing) tab (GUI element)"
  },
  "标示": {
    "pinyin": "biāo shì",
    "definition": "to indicate"
  },
  "标题": {
    "pinyin": "biāo tí",
    "definition": "title; heading; headline; caption; subject"
  },
  "标语": {
    "pinyin": "biāo yǔ",
    "definition": "written slogan; placard"
  },
  "标志": {
    "pinyin": "biāo zhì",
    "definition": "sign; mark; symbol; logo; to symbolize; to indicate; to mark"
  },
  "标致": {
    "pinyin": "Biāo zhì",
    "definition": "Peugeot"
  },
  "标准": {
    "pinyin": "biāo zhǔn",
    "definition": "standard; norm; criterion; (adjective) standard; good; correct; conforming to a standard"
  },
  "飙升": {
    "pinyin": "biāo shēng",
    "definition": "to rise rapidly; to soar"
  },
  "表": {
    "pinyin": "biǎo",
    "definition": "exterior surface; family relationship via females; to show (one's opinion); a model; a table (listing information); a form; a meter (measuring sth)"
  },
  "表白": {
    "pinyin": "biǎo bái",
    "definition": "to explain oneself; to express; to reveal one's thoughts or feelings; declaration; confession"
  },
  "表达": {
    "pinyin": "biǎo dá",
    "definition": "to express; to convey"
  },
  "表格": {
    "pinyin": "biǎo gé",
    "definition": "form; table"
  },
  "表决": {
    "pinyin": "biǎo jué",
    "definition": "to decide by vote; to vote"
  },
  "表率": {
    "pinyin": "biǎo shuài",
    "definition": "example; model"
  },
  "表面": {
    "pinyin": "biǎo miàn",
    "definition": "surface; face; outside; appearance"
  },
  "表面上": {
    "pinyin": "biǎo miàn shang",
    "definition": "outwardly; superficially; on the face of it"
  },
  "表明": {
    "pinyin": "biǎo míng",
    "definition": "to make clear; to make known; to state clearly; to indicate; known"
  },
  "表情": {
    "pinyin": "biǎo qíng",
    "definition": "(facial) expression; to express one's feelings"
  },
  "表示": {
    "pinyin": "biǎo shì",
    "definition": "to express; to show; to say; to state; to indicate; to mean"
  },
  "表述": {
    "pinyin": "biǎo shù",
    "definition": "to formulate; enunciation; to explain sth precisely"
  },
  "表态": {
    "pinyin": "biǎo tài",
    "definition": "to declare one's position; to say where one stands"
  },
  "表现": {
    "pinyin": "biǎo xiàn",
    "definition": "to show; to show off; to display; to manifest; expression; manifestation; show; display; performance (at work etc); behavior"
  },
  "表演": {
    "pinyin": "biǎo yǎn",
    "definition": "play; show; performance; exhibition; to perform; to act; to demonstrate"
  },
  "表扬": {
    "pinyin": "biǎo yáng",
    "definition": "to praise; to commend"
  },
  "表彰": {
    "pinyin": "biǎo zhāng",
    "definition": "to honor; to commend; to cite (in dispatches)"
  },
  "憋": {
    "pinyin": "biē",
    "definition": "to choke; to stifle; to restrain; to hold back; to hold in (urine); to hold (one's breath)"
  },
  "别的": {
    "pinyin": "bié de",
    "definition": "else; other"
  },
  "别具匠心": {
    "pinyin": "bié jù jiàng xīn",
    "definition": "to show ingenuity; (of a design) clever; brilliantly conceived"
  },
  "别看": {
    "pinyin": "bié kàn",
    "definition": "don't be fooled by the fact that"
  },
  "别扭": {
    "pinyin": "biè niu",
    "definition": "awkward; difficult; uncomfortable; not agreeing; at loggerheads; gauche"
  },
  "别人": {
    "pinyin": "bié ren",
    "definition": "other people; others; other person"
  },
  "别墅": {
    "pinyin": "bié shù",
    "definition": "villa"
  },
  "别说": {
    "pinyin": "bié shuō",
    "definition": "to say nothing of; not to mention; let alone"
  },
  "别提了": {
    "pinyin": "bié tí le",
    "definition": "say no more; don't bring it up; drop the subject"
  },
  "别致": {
    "pinyin": "bié zhì",
    "definition": "unusual; unique"
  },
  "宾馆": {
    "pinyin": "bīn guǎn",
    "definition": "guesthouse; lodge; hotel"
  },
  "彬彬有礼": {
    "pinyin": "bīn bīn yǒu lǐ",
    "definition": "refined and courteous; urbane"
  },
  "滨海": {
    "pinyin": "Bīn hǎi",
    "definition": "Binhai (place name); Binhai New District, subprovincial district of Tianjin; Binhai county in Yancheng 盐城, Jiangsu; fictitious city Binhai in political satire; Primorsky, a territory in the far east of Russia"
  },
  "缤纷": {
    "pinyin": "bīn fēn",
    "definition": "vast and various; rich and diverse"
  },
  "濒临": {
    "pinyin": "bīn lín",
    "definition": "on the edge of; (fig.) on the verge of; close to"
  },
  "冰": {
    "pinyin": "bīng",
    "definition": "ice; to chill sth; (of an object or substance) to feel cold; (of a person) cold; unfriendly; (slang) methamphetamine"
  },
  "冰雹": {
    "pinyin": "bīng báo",
    "definition": "hail; hailstone"
  },
  "冰棍儿": {
    "pinyin": "bīng gùn r",
    "definition": "ice lolly; popsicle"
  },
  "冰山": {
    "pinyin": "bīng shān",
    "definition": "iceberg"
  },
  "冰箱": {
    "pinyin": "bīng xiāng",
    "definition": "icebox; freezer cabinet; refrigerator"
  },
  "冰雪": {
    "pinyin": "bīng xuě",
    "definition": "ice and snow"
  },
  "兵": {
    "pinyin": "bīng",
    "definition": "soldiers; a force; an army; weapons; arms; military; warlike"
  },
  "丙": {
    "pinyin": "bǐng",
    "definition": "third of the ten Heavenly Stems 干; third in order; letter \"C\" or Roman \"III\" in list \"A, B, C\", or \"I, II, III\" etc; ancient Chinese compass point: 165°; propyl"
  },
  "秉承": {
    "pinyin": "bǐng chéng",
    "definition": "to take orders; to receive commands; to carry on (a tradition)"
  },
  "饼": {
    "pinyin": "bǐng",
    "definition": "round flat cake; cookie; cake; pastry"
  },
  "饼干": {
    "pinyin": "bǐng gān",
    "definition": "biscuit; cracker; cookie"
  },
  "并": {
    "pinyin": "bìng",
    "definition": "and; furthermore; also; together with; (not) at all; simultaneously; to combine; to join; to merge"
  },
  "并存": {
    "pinyin": "bìng cún",
    "definition": "to exist at the same time; to coexist"
  },
  "并非": {
    "pinyin": "bìng fēi",
    "definition": "really isn't"
  },
  "并购": {
    "pinyin": "bìng gòu",
    "definition": "merger and acquisition (M and A); acquisition; to take over"
  },
  "并列": {
    "pinyin": "bìng liè",
    "definition": "to stand side by side; to be juxtaposed"
  },
  "并且": {
    "pinyin": "bìng qiě",
    "definition": "and; besides; moreover; furthermore; in addition"
  },
  "并行": {
    "pinyin": "bìng xíng",
    "definition": "to proceed in parallel; side by side (of two processes, developments, thoughts etc)"
  },
  "病": {
    "pinyin": "bìng",
    "definition": "illness; disease; to fall ill; defect"
  },
  "病床": {
    "pinyin": "bìng chuáng",
    "definition": "hospital bed; sickbed"
  },
  "病毒": {
    "pinyin": "bìng dú",
    "definition": "virus"
  },
  "病房": {
    "pinyin": "bìng fáng",
    "definition": "ward (of a hospital); sickroom"
  },
  "病情": {
    "pinyin": "bìng qíng",
    "definition": "state of an illness; patient's condition"
  },
  "病人": {
    "pinyin": "bìng rén",
    "definition": "sick person; patient; invalid"
  },
  "病症": {
    "pinyin": "bìng zhèng",
    "definition": "disease; illness"
  },
  "拨": {
    "pinyin": "bō",
    "definition": "to push aside with the hand, foot, a stick etc; to dial; to allocate; to set aside (money); to poke (the fire); to pluck (a string instrument); to turn round; classifier: group, batch"
  },
  "拨打": {
    "pinyin": "bō dǎ",
    "definition": "to call; to dial"
  },
  "拨款": {
    "pinyin": "bō kuǎn",
    "definition": "to allocate funds; appropriation"
  },
  "拨通": {
    "pinyin": "bō tōng",
    "definition": "to get through to sb on the phone"
  },
  "波动": {
    "pinyin": "bō dòng",
    "definition": "to undulate; to fluctuate; wave motion; rise and fall"
  },
  "波及": {
    "pinyin": "bō jí",
    "definition": "to spread to; to involve; to affect"
  },
  "波澜": {
    "pinyin": "bō lán",
    "definition": "billows; great waves (fig. of a story with great momentum)"
  },
  "波浪": {
    "pinyin": "bō làng",
    "definition": "wave"
  },
  "波涛": {
    "pinyin": "bō tāo",
    "definition": "great waves; billows"
  },
  "波涛汹涌": {
    "pinyin": "bō tāo xiōng yǒng",
    "definition": "waves surging forth; roaring sea"
  },
  "波折": {
    "pinyin": "bō zhé",
    "definition": "twists and turns"
  },
  "玻璃": {
    "pinyin": "bō li",
    "definition": "glass; (slang) male homosexual"
  },
  "剥": {
    "pinyin": "bāo",
    "definition": "to peel; to skin; to shell; to shuck"
  },
  "剥夺": {
    "pinyin": "bō duó",
    "definition": "to deprive; to expropriate; to strip (sb of his property)"
  },
  "剥削": {
    "pinyin": "bō xuē",
    "definition": "to exploit; exploitation"
  },
  "播": {
    "pinyin": "bō",
    "definition": "to sow; to scatter; to spread; to broadcast; Taiwan pr. [bò]"
  },
  "播出": {
    "pinyin": "bō chū",
    "definition": "to broadcast; to air (a TV program etc)"
  },
  "播放": {
    "pinyin": "bō fàng",
    "definition": "to broadcast; to transmit (by radio or TV)"
  },
  "播种": {
    "pinyin": "bō zhǒng",
    "definition": "to sow seeds"
  },
  "伯伯": {
    "pinyin": "bó bo",
    "definition": "father's elder brother; uncle"
  },
  "伯父": {
    "pinyin": "bó fù",
    "definition": "father's elder brother; term of respect for older man"
  },
  "伯母": {
    "pinyin": "bó mǔ",
    "definition": "wife of father's elder brother; aunt; (polite form of address for a woman who is about the age of one's mother)"
  },
  "驳回": {
    "pinyin": "bó huí",
    "definition": "to reject; to turn down; to overrule"
  },
  "脖子": {
    "pinyin": "bó zi",
    "definition": "neck"
  },
  "博大精深": {
    "pinyin": "bó dà jīng shēn",
    "definition": "wide-ranging and profound; broad and deep"
  },
  "博客": {
    "pinyin": "bó kè",
    "definition": "blog (loanword); weblog; blogger"
  },
  "博览会": {
    "pinyin": "bó lǎn huì",
    "definition": "exposition; international fair"
  },
  "博士": {
    "pinyin": "bó shì",
    "definition": "doctor; court academician (in feudal China); Ph.D."
  },
  "博物馆": {
    "pinyin": "bó wù guǎn",
    "definition": "museum"
  },
  "搏斗": {
    "pinyin": "bó dòu",
    "definition": "to wrestle; to fight; to struggle"
  },
  "补": {
    "pinyin": "bǔ",
    "definition": "to repair; to patch; to mend; to make up for; to fill (a vacancy); to supplement"
  },
  "补偿": {
    "pinyin": "bǔ cháng",
    "definition": "to compensate; to make up"
  },
  "补充": {
    "pinyin": "bǔ chōng",
    "definition": "to replenish; to supplement; to complement; additional; supplementary"
  },
  "补给": {
    "pinyin": "bǔ jǐ",
    "definition": "supply; replenishment; to replenish"
  },
  "补救": {
    "pinyin": "bǔ jiù",
    "definition": "to remedy"
  },
  "补考": {
    "pinyin": "bǔ kǎo",
    "definition": "to sit for a makeup exam; to resit an exam; makeup exam; resit"
  },
  "补课": {
    "pinyin": "bǔ kè",
    "definition": "to make up missed lesson; to reschedule a class"
  },
  "补贴": {
    "pinyin": "bǔ tiē",
    "definition": "to subsidize; subsidy; allowance; to supplement (one's salary etc); benefit"
  },
  "补习": {
    "pinyin": "bǔ xí",
    "definition": "to take extra lessons in a cram school or with a private tutor"
  },
  "补助": {
    "pinyin": "bǔ zhù",
    "definition": "to subsidize; subsidy; allowance"
  },
  "哺乳": {
    "pinyin": "bǔ rǔ",
    "definition": "breastfeeding; to suckle; to nurse"
  },
  "哺育": {
    "pinyin": "bǔ yù",
    "definition": "to feed; (fig.) to nurture; to foster"
  },
  "捕": {
    "pinyin": "bǔ",
    "definition": "to catch; to seize; to capture"
  },
  "捕捉": {
    "pinyin": "bǔ zhuō",
    "definition": "to catch; to seize; to capture"
  },
  "不安": {
    "pinyin": "bù ān",
    "definition": "unpeaceful; unstable; uneasy; disturbed; restless; worried"
  },
  "不必": {
    "pinyin": "bù bì",
    "definition": "need not; does not have to; not necessarily"
  },
  "不便": {
    "pinyin": "bù biàn",
    "definition": "inconvenient; inappropriate; unsuitable; short of cash"
  },
  "不曾": {
    "pinyin": "bù céng",
    "definition": "hasn't yet; hasn't ever"
  },
  "不成": {
    "pinyin": "bù chéng",
    "definition": "won't do; unable to; (at the end of a rhetorical question) can that be?"
  },
  "不耻下问": {
    "pinyin": "bù chǐ xià wèn",
    "definition": "not feel ashamed to ask and learn from one's subordinates"
  },
  "不辞而别": {
    "pinyin": "bù cí ér bié",
    "definition": "to leave without saying good-bye"
  },
  "不错": {
    "pinyin": "bù cuò",
    "definition": "correct; right; not bad; pretty good"
  },
  "不大": {
    "pinyin": "bù dà",
    "definition": "not very; not too; not often"
  },
  "不但": {
    "pinyin": "bù dàn",
    "definition": "not only (... but also ...)"
  },
  "不得不": {
    "pinyin": "bù dé bù",
    "definition": "have no choice or option but to; cannot but; have to; can't help it; can't avoid"
  },
  "不得而知": {
    "pinyin": "bù dé ér zhī",
    "definition": "unknown; unable to find out"
  },
  "不得了": {
    "pinyin": "bù dé liǎo",
    "definition": "desperately serious; disastrous; extremely; exceedingly"
  },
  "不得已": {
    "pinyin": "bù dé yǐ",
    "definition": "to act against one's will; to have no alternative but to; to have to; to have no choice; must"
  },
  "不定": {
    "pinyin": "bù dìng",
    "definition": "indefinite; indeterminate; (botany) adventitious"
  },
  "不断": {
    "pinyin": "bù duàn",
    "definition": "unceasing; uninterrupted; continuous; constant"
  },
  "不对": {
    "pinyin": "bù duì",
    "definition": "incorrect; wrong; amiss; abnormal; queer"
  },
  "不妨": {
    "pinyin": "bù fáng",
    "definition": "there is no harm in; might as well"
  },
  "不服": {
    "pinyin": "bù fú",
    "definition": "not to accept sth; to want to have sth overruled or changed; to refuse to obey or comply; to refuse to accept as final; to remain unconvinced by; not to give in to"
  },
  "不服气": {
    "pinyin": "bù fú qì",
    "definition": "unwilling to concede; defiant; indignant; to find it galling"
  },
  "不敢当": {
    "pinyin": "bù gǎn dāng",
    "definition": "lit. I dare not (accept the honor); fig. I don't deserve your praise; you flatter me"
  },
  "不够": {
    "pinyin": "bù gòu",
    "definition": "not enough; insufficient; inadequate"
  },
  "不顾": {
    "pinyin": "bù gù",
    "definition": "in spite of; regardless of"
  },
  "不管": {
    "pinyin": "bù guǎn",
    "definition": "not to be concerned; regardless of; no matter"
  },
  "不光": {
    "pinyin": "bù guāng",
    "definition": "not the only one; not only"
  },
  "不过": {
    "pinyin": "bù guò",
    "definition": "only; merely; no more than; but; however; anyway (to get back to a previous topic); cannot be more (after adjectival)"
  },
  "不好意思": {
    "pinyin": "bù hǎo yì si",
    "definition": "to feel embarrassed; to find it embarrassing; to be sorry (for inconveniencing sb)"
  },
  "不假思索": {
    "pinyin": "bù jiǎ sī suǒ",
    "definition": "(idiom) to act without taking time to think; to react instantly; to fire from the hip"
  },
  "不见": {
    "pinyin": "bù jiàn",
    "definition": "not to see; not to meet; to have disappeared; to be missing"
  },
  "不见得": {
    "pinyin": "bù jiàn de",
    "definition": "not necessarily; not likely"
  },
  "不解": {
    "pinyin": "bù jiě",
    "definition": "to not understand; to be puzzled by; indissoluble"
  },
  "不仅": {
    "pinyin": "bù jǐn",
    "definition": "not just; not limited to; (as a correlative conjunction) not only (..., but also ...)"
  },
  "不仅仅": {
    "pinyin": "bù jǐn jǐn",
    "definition": "not only; not just"
  },
  "不禁": {
    "pinyin": "bù jīn",
    "definition": "can't help (doing sth); can't refrain from"
  },
  "不经意": {
    "pinyin": "bù jīng yì",
    "definition": "not paying attention; carelessly; by accident"
  },
  "不景气": {
    "pinyin": "bù jǐng qì",
    "definition": "slack; in a slump"
  },
  "不久": {
    "pinyin": "bù jiǔ",
    "definition": "not long (after); before too long; soon; soon after"
  },
  "不堪": {
    "pinyin": "bù kān",
    "definition": "cannot bear; cannot stand; utterly; extremely"
  },
  "不可避免": {
    "pinyin": "bù kě bì miǎn",
    "definition": "unavoidably"
  },
  "不可思议": {
    "pinyin": "bù kě sī yì",
    "definition": "inconceivable (idiom); unimaginable; unfathomable"
  },
  "不客气": {
    "pinyin": "bù kè qi",
    "definition": "you're welcome; don't mention it; impolite; rude; blunt"
  },
  "不肯": {
    "pinyin": "bù kěn",
    "definition": "Refuse"
  },
  "不愧": {
    "pinyin": "bù kuì",
    "definition": "to be worthy of; to deserve to be called; to prove oneself to be"
  },
  "不了了之": {
    "pinyin": "bù liǎo liǎo zhī",
    "definition": "to settle a matter by leaving it unsettled; to end up with nothing definite"
  },
  "不理": {
    "pinyin": "bù lǐ",
    "definition": "to refuse to acknowledge; to pay no attention to; to take no notice of; to ignore"
  },
  "不利": {
    "pinyin": "bù lì",
    "definition": "unfavorable; disadvantageous; harmful; detrimental"
  },
  "不利于": {
    "pinyin": "bù lìyú",
    "definition": "is harmful to"
  },
  "不良": {
    "pinyin": "bù liáng",
    "definition": "bad; harmful; unhealthy"
  },
  "不料": {
    "pinyin": "bù liào",
    "definition": "unexpectedly; to one's surprise"
  },
  "不论": {
    "pinyin": "bù lùn",
    "definition": "whatever; no matter what (who, how etc); regardless of; not to discuss"
  },
  "不满": {
    "pinyin": "bù mǎn",
    "definition": "resentful; discontented; dissatisfied"
  },
  "不免": {
    "pinyin": "bù miǎn",
    "definition": "inevitably"
  },
  "不耐烦": {
    "pinyin": "bù nài fán",
    "definition": "impatient; to lose patience"
  },
  "不难": {
    "pinyin": "bù nán",
    "definition": "Not difficult"
  },
  "不能不": {
    "pinyin": "bù néng bù",
    "definition": "have to; cannot but"
  },
  "不平": {
    "pinyin": "bù píng",
    "definition": "uneven; injustice; unfairness; wrong; grievance; indignant; dissatisfied"
  },
  "不起眼": {
    "pinyin": "bù qǐ yǎn",
    "definition": "unremarkable; nothing out of the ordinary"
  },
  "不然": {
    "pinyin": "bù rán",
    "definition": "not so; no; or else; otherwise; if not; How about ...?"
  },
  "不容": {
    "pinyin": "bù róng",
    "definition": "must not; cannot; to not allow; cannot tolerate"
  },
  "不如": {
    "pinyin": "bù rú",
    "definition": "not equal to; not as good as; inferior to; it would be better to"
  },
  "不如说": {
    "pinyin": "bùrú shuō",
    "definition": "rather say"
  },
  "不少": {
    "pinyin": "bù shǎo",
    "definition": "many; a lot; not few"
  },
  "不慎": {
    "pinyin": "bù shèn",
    "definition": "incautious; inattentive"
  },
  "不时": {
    "pinyin": "bù shí",
    "definition": "from time to time; now and then; occasionally; frequently"
  },
  "不适": {
    "pinyin": "bù shì",
    "definition": "unwell; indisposed; out of sorts"
  },
  "不算": {
    "pinyin": "bù suàn",
    "definition": "to not calculate; to not count; to not be considered (as); to have no weight"
  },
  "不太": {
    "pinyin": "bù tài",
    "definition": "Not too"
  },
  "不停": {
    "pinyin": "bù tíng",
    "definition": "incessant"
  },
  "不通": {
    "pinyin": "bù tōng",
    "definition": "to be obstructed; to be blocked up; to be impassable; to make no sense; to be illogical"
  },
  "不同": {
    "pinyin": "bù tóng",
    "definition": "different; distinct; not the same; not alike"
  },
  "不同寻常": {
    "pinyin": "bù tóng xún cháng",
    "definition": "out of the ordinary; unusual"
  },
  "不为人知": {
    "pinyin": "bù wéi rén zhī",
    "definition": "not known to anyone; secret; unknown"
  },
  "不惜": {
    "pinyin": "bù xī",
    "definition": "not stint; not spare; not hesitate (to do sth); not scruple (to do sth)"
  },
  "不相上下": {
    "pinyin": "bù xiāng shàng xià",
    "definition": "equally matched; about the same"
  },
  "不像话": {
    "pinyin": "bù xiàng huà",
    "definition": "unreasonable; shocking; outrageous"
  },
  "不屑": {
    "pinyin": "bù xiè",
    "definition": "to disdain to do sth; to think sth not worth doing; to feel it beneath one's dignity"
  },
  "不屑一顾": {
    "pinyin": "bù xiè yī gù",
    "definition": "to disdain as beneath contempt (idiom)"
  },
  "不懈": {
    "pinyin": "bù xiè",
    "definition": "untiring; unremitting; indefatigable"
  },
  "不行": {
    "pinyin": "bù xíng",
    "definition": "won't do; be out of the question; be no good; not work; not be capable"
  },
  "不幸": {
    "pinyin": "bù xìng",
    "definition": "misfortune; adversity; unfortunate; sad; unfortunately"
  },
  "不许": {
    "pinyin": "bù xǔ",
    "definition": "not to allow; must not; can't"
  },
  "不亚于": {
    "pinyin": "bù yà yú",
    "definition": "no less than; not inferior to"
  },
  "不言而喻": {
    "pinyin": "bù yán ér yù",
    "definition": "it goes without saying; it is self-evident"
  },
  "不要": {
    "pinyin": "bù yào",
    "definition": "don't!; must not"
  },
  "不要紧": {
    "pinyin": "bù yào jǐn",
    "definition": "unimportant; not serious; it doesn't matter; never mind; it looks all right, but"
  },
  "不一定": {
    "pinyin": "bù yī dìng",
    "definition": "not necessarily; maybe"
  },
  "不一会儿": {
    "pinyin": "bù yīhuǐr5",
    "definition": "Take a short while"
  },
  "不已": {
    "pinyin": "bù yǐ",
    "definition": "endlessly; incessantly"
  },
  "不以为然": {
    "pinyin": "bù yǐ wéi rán",
    "definition": "not to accept as correct (idiom); to object; to disapprove; to take exception to"
  },
  "不亦乐乎": {
    "pinyin": "bù yì lè hū",
    "definition": "lit. isn't that a joy? (quote from Confucius); fig. (jocular) extremely; awfully"
  },
  "不易": {
    "pinyin": "bù yì",
    "definition": "not easy to do sth; difficult; unchanging"
  },
  "不翼而飞": {
    "pinyin": "bù yì ér fēi",
    "definition": "to disappear without trace; to vanish all of a sudden; to spread fast; to spread like wildfire"
  },
  "不宜": {
    "pinyin": "bù yí",
    "definition": "not suitable; inadvisable; inappropriate"
  },
  "不用": {
    "pinyin": "bù yòng",
    "definition": "need not"
  },
  "不用说": {
    "pinyin": "bù yòng shuō",
    "definition": "needless to say; it goes without saying"
  },
  "不由得": {
    "pinyin": "bù yóu de",
    "definition": "can't help; cannot but"
  },
  "不由自主": {
    "pinyin": "bù yóu zì zhǔ",
    "definition": "can't help; involuntarily (idiom)"
  },
  "不予": {
    "pinyin": "bùyǔ",
    "definition": "to withhold, to refuse"
  },
  "不约而同": {
    "pinyin": "bù yuē ér tóng",
    "definition": "to agree by chance (idiom); taking the same action without prior consultation"
  },
  "不再": {
    "pinyin": "bù zài",
    "definition": "no more; no longer"
  },
  "不在乎": {
    "pinyin": "bù zài hu",
    "definition": "not to care"
  },
  "不择手段": {
    "pinyin": "bù zé shǒu duàn",
    "definition": "by fair means or foul; by hook or by crook; unscrupulously"
  },
  "不怎么": {
    "pinyin": "bù zěn me",
    "definition": "not very; not particularly"
  },
  "不怎么样": {
    "pinyin": "bù zěn me yàng",
    "definition": "not up to much; very indifferent; nothing great about it; nothing good to be said about it"
  },
  "不正之风": {
    "pinyin": "bù zhèng zhī fēng",
    "definition": "unhealthy tendency"
  },
  "不知": {
    "pinyin": "bù zhī",
    "definition": "not to know; unaware; unknowingly; fig. not to admit (defeat, hardships, tiredness etc)"
  },
  "不知不觉": {
    "pinyin": "bù zhī bù jué",
    "definition": "unconsciously; unwittingly"
  },
  "不值": {
    "pinyin": "bù zhí",
    "definition": "not worth"
  },
  "不止": {
    "pinyin": "bù zhǐ",
    "definition": "incessantly; without end; more than; not limited to"
  },
  "不至于": {
    "pinyin": "bù zhì yú",
    "definition": "unlikely to go so far as to; not as bad as"
  },
  "不准": {
    "pinyin": "bù zhǔn",
    "definition": "not to allow; to forbid; to prohibit"
  },
  "不足": {
    "pinyin": "bù zú",
    "definition": "insufficient; lacking; deficiency; not enough; inadequate; not worth; cannot; should not"
  },
  "布": {
    "pinyin": "bù",
    "definition": "variant of 布; to announce; to spread"
  },
  "布告": {
    "pinyin": "bù gào",
    "definition": "posting on a bulletin board; notice; bulletin; to announce"
  },
  "布局": {
    "pinyin": "bù jú",
    "definition": "arrangement; composition; layout; opening (chess jargon)"
  },
  "布满": {
    "pinyin": "bù mǎn",
    "definition": "to be covered with; to be filled with"
  },
  "布置": {
    "pinyin": "bù zhì",
    "definition": "to put in order; to arrange; to decorate; to fix up; to deploy"
  },
  "步": {
    "pinyin": "Bù",
    "definition": "surname Bu"
  },
  "步伐": {
    "pinyin": "bù fá",
    "definition": "pace; (measured) step; march"
  },
  "步入": {
    "pinyin": "bù rù",
    "definition": "to step into; to enter"
  },
  "步行": {
    "pinyin": "bù xíng",
    "definition": "to go on foot; to walk"
  },
  "步骤": {
    "pinyin": "bù zhòu",
    "definition": "procedure; step"
  },
  "部": {
    "pinyin": "bù",
    "definition": "ministry; department; section; part; division; troops; board; classifier for works of literature, films, machines etc"
  },
  "部队": {
    "pinyin": "bù duì",
    "definition": "army; armed forces; troops; force; unit"
  },
  "部分": {
    "pinyin": "bù fen",
    "definition": "part; share; section; piece"
  },
  "部件": {
    "pinyin": "bù jiàn",
    "definition": "part; component"
  },
  "部门": {
    "pinyin": "bù mén",
    "definition": "department; branch; section; division"
  },
  "部署": {
    "pinyin": "bù shǔ",
    "definition": "to dispose; to deploy; deployment"
  },
  "部位": {
    "pinyin": "bù wèi",
    "definition": "part (esp. of the body, but also of a vegetable (e.g. the root), or a garment (e.g. the sleeve) etc)"
  },
  "部长": {
    "pinyin": "bù zhǎng",
    "definition": "head of a (government etc) department; section chief; section head; secretary; minister"
  },
  "擦": {
    "pinyin": "cā",
    "definition": "to rub; to scratch; to towel; to wipe with a towel; to apply (lipstick, lotion etc); to touch; to brush (past); to shred (vegetables etc)"
  },
  "猜": {
    "pinyin": "cāi",
    "definition": "to guess"
  },
  "猜测": {
    "pinyin": "cāi cè",
    "definition": "to guess; to conjecture; to surmise"
  },
  "猜谜": {
    "pinyin": "cāi mí",
    "definition": "to answer a riddle; to guess (i.e. form an opinion without much evidence)"
  },
  "猜想": {
    "pinyin": "cāi xiǎng",
    "definition": "to guess; to conjecture; to suppose; (math.) hypothesis"
  },
  "才": {
    "pinyin": "cái",
    "definition": "ability; talent; sb of a certain type; a capable individual; then and only then; just now; (before an expression of quantity) only"
  },
  "才干": {
    "pinyin": "cái gàn",
    "definition": "ability; competence"
  },
  "才华": {
    "pinyin": "cái huá",
    "definition": "talent"
  },
  "才能": {
    "pinyin": "cái néng",
    "definition": "talent; ability; capacity"
  },
  "材料": {
    "pinyin": "cái liào",
    "definition": "(raw) material; data; (fig.) person who has the potential to do the job"
  },
  "财产": {
    "pinyin": "cái chǎn",
    "definition": "property; assets; estate"
  },
  "财富": {
    "pinyin": "cái fù",
    "definition": "wealth; riches"
  },
  "财经": {
    "pinyin": "cái jīng",
    "definition": "finance and economics"
  },
  "财力": {
    "pinyin": "cái lì",
    "definition": "financial resources"
  },
  "财物": {
    "pinyin": "cái wù",
    "definition": "property; belongings"
  },
  "财务": {
    "pinyin": "cái wù",
    "definition": "financial affairs"
  },
  "财政": {
    "pinyin": "cái zhèng",
    "definition": "finances (public); financial"
  },
  "裁": {
    "pinyin": "cái",
    "definition": "to cut out (as a dress); to cut; to trim; to reduce; to diminish; to cut back (e.g. on staff); decision; judgment"
  },
  "裁定": {
    "pinyin": "cái dìng",
    "definition": "ruling"
  },
  "裁缝": {
    "pinyin": "cái féng",
    "definition": "to make an item of clothing; to tailor"
  },
  "裁决": {
    "pinyin": "cái jué",
    "definition": "ruling; adjudication"
  },
  "裁判": {
    "pinyin": "cái pàn",
    "definition": "judgment; to referee; umpire; judge; referee"
  },
  "裁员": {
    "pinyin": "cái yuán",
    "definition": "to cut staff; to lay off employees"
  },
  "采": {
    "pinyin": "cǎi",
    "definition": "to pick; to pluck; to collect; to select; to choose; to gather"
  },
  "采访": {
    "pinyin": "cǎi fǎng",
    "definition": "to interview; to gather news; to hunt for and collect; to cover"
  },
  "采购": {
    "pinyin": "cǎi gòu",
    "definition": "to procure (for an enterprise etc); to purchase"
  },
  "采集": {
    "pinyin": "cǎi jí",
    "definition": "to gather; to collect; to harvest"
  },
  "采矿": {
    "pinyin": "cǎi kuàng",
    "definition": "mining"
  },
  "采纳": {
    "pinyin": "cǎi nà",
    "definition": "to accept; to adopt"
  },
  "采取": {
    "pinyin": "cǎi qǔ",
    "definition": "to adopt or carry out (measures, policies, course of action); to take"
  },
  "采用": {
    "pinyin": "cǎi yòng",
    "definition": "to adopt; to employ; to use"
  },
  "彩电": {
    "pinyin": "cǎi diàn",
    "definition": "color TV"
  },
  "彩虹": {
    "pinyin": "cǎi hóng",
    "definition": "rainbow"
  },
  "彩票": {
    "pinyin": "cǎi piào",
    "definition": "lottery ticket"
  },
  "彩色": {
    "pinyin": "cǎi sè",
    "definition": "color; multicolored"
  },
  "彩霞": {
    "pinyin": "cǎi xiá",
    "definition": "clouds tinged with sunset hues"
  },
  "踩": {
    "pinyin": "cǎi",
    "definition": "variant of 踩"
  },
  "菜": {
    "pinyin": "cài",
    "definition": "dish (type of food); vegetable; cuisine; (coll.) (one's) type; (of one's skills etc) weak; poor"
  },
  "菜单": {
    "pinyin": "cài dān",
    "definition": "menu"
  },
  "菜市场": {
    "pinyin": "cài shì chǎng",
    "definition": "food market"
  },
  "参观": {
    "pinyin": "cān guān",
    "definition": "to look around; to tour; to visit"
  },
  "参加": {
    "pinyin": "cān jiā",
    "definition": "to participate; to take part; to join"
  },
  "参见": {
    "pinyin": "cān jiàn",
    "definition": "to refer to; see also; compare (cf.); to pay respect to"
  },
  "参军": {
    "pinyin": "cān jūn",
    "definition": "to join the army"
  },
  "参考": {
    "pinyin": "cān kǎo",
    "definition": "consultation; reference; to consult; to refer"
  },
  "参谋": {
    "pinyin": "cān móu",
    "definition": "staff officer; to give advice"
  },
  "参赛": {
    "pinyin": "cān sài",
    "definition": "to compete; to take part in a competition"
  },
  "参与": {
    "pinyin": "cān yù",
    "definition": "to participate (in sth)"
  },
  "参展": {
    "pinyin": "cān zhǎn",
    "definition": "to exhibit at or take part in a trade show etc"
  },
  "参照": {
    "pinyin": "cān zhào",
    "definition": "to consult a reference; to refer to (another document)"
  },
  "餐": {
    "pinyin": "cān",
    "definition": "meal; to eat; classifier for meals"
  },
  "餐馆": {
    "pinyin": "cān guǎn",
    "definition": "restaurant"
  },
  "餐厅": {
    "pinyin": "cān tīng",
    "definition": "dining hall; dining room; restaurant"
  },
  "餐饮": {
    "pinyin": "cān yǐn",
    "definition": "food and beverage; catering; repast"
  },
  "餐桌": {
    "pinyin": "cān zhuō",
    "definition": "dining table; dinner table"
  },
  "残": {
    "pinyin": "cán",
    "definition": "to destroy; to spoil; to ruin; to injure; cruel; oppressive; savage; brutal; incomplete; disabled; to remain; to survive; remnant; surplus"
  },
  "残疾": {
    "pinyin": "cán jí",
    "definition": "disabled; handicapped; deformity on a person or animal"
  },
  "残疾人": {
    "pinyin": "cán jí rén",
    "definition": "disabled person"
  },
  "残酷": {
    "pinyin": "cán kù",
    "definition": "cruel; cruelty"
  },
  "残留": {
    "pinyin": "cán liú",
    "definition": "to remain; to be left over; residual; remnant; residue"
  },
  "残缺": {
    "pinyin": "cán quē",
    "definition": "badly damaged; shattered"
  },
  "残忍": {
    "pinyin": "cán rěn",
    "definition": "cruel; mean; merciless; ruthless"
  },
  "惭愧": {
    "pinyin": "cán kuì",
    "definition": "ashamed"
  },
  "惨": {
    "pinyin": "cǎn",
    "definition": "miserable; wretched; cruel; inhuman; disastrous; tragic; dim; gloomy"
  },
  "惨白": {
    "pinyin": "cǎn bái",
    "definition": "deathly pale"
  },
  "惨痛": {
    "pinyin": "cǎn tòng",
    "definition": "bitter; painful; deeply distressed"
  },
  "惨重": {
    "pinyin": "cǎn zhòng",
    "definition": "disastrous"
  },
  "灿烂": {
    "pinyin": "càn làn",
    "definition": "to glitter; brilliant; splendid"
  },
  "掺": {
    "pinyin": "chān",
    "definition": "variant of 搀; to mix"
  },
  "仓促": {
    "pinyin": "cāng cù",
    "definition": "all of a sudden; hurriedly"
  },
  "仓库": {
    "pinyin": "cāng kù",
    "definition": "depot; storehouse; warehouse"
  },
  "沧桑": {
    "pinyin": "cāng sāng",
    "definition": "great changes; ups and downs; vicissitudes; abbr. of 沧海桑田"
  },
  "苍白": {
    "pinyin": "cāng bái",
    "definition": "pale; wan"
  },
  "苍蝇": {
    "pinyin": "cāng ying",
    "definition": "housefly"
  },
  "舱": {
    "pinyin": "cāng",
    "definition": "cabin; the hold of a ship or airplane"
  },
  "藏": {
    "pinyin": "Zàng",
    "definition": "Tibet; abbr. for Xizang or Tibet Autonomous Region 藏"
  },
  "藏匿": {
    "pinyin": "cáng nì",
    "definition": "to cover up; to conceal; to go into hiding"
  },
  "藏品": {
    "pinyin": "cáng pǐn",
    "definition": "museum piece; collector's item; precious object"
  },
  "藏身": {
    "pinyin": "cáng shēn",
    "definition": "to hide; to go into hiding; to take refuge"
  },
  "操场": {
    "pinyin": "cāo chǎng",
    "definition": "playground; sports field; drill ground"
  },
  "操控": {
    "pinyin": "cāo kòng",
    "definition": "to control; to manipulate"
  },
  "操劳": {
    "pinyin": "cāo láo",
    "definition": "to work hard; to look after"
  },
  "操练": {
    "pinyin": "cāo liàn",
    "definition": "drill; practice"
  },
  "操心": {
    "pinyin": "cāo xīn",
    "definition": "to worry about"
  },
  "操纵": {
    "pinyin": "cāo zòng",
    "definition": "to operate; to control; to rig; to manipulate"
  },
  "操作": {
    "pinyin": "cāo zuò",
    "definition": "to work; to operate; to manipulate"
  },
  "嘈杂": {
    "pinyin": "cáo zá",
    "definition": "noisy; clamorous"
  },
  "槽": {
    "pinyin": "cáo",
    "definition": "trough; manger; groove; channel; (Tw) (computing) hard drive"
  },
  "草": {
    "pinyin": "cǎo",
    "definition": "variant of 草"
  },
  "草案": {
    "pinyin": "cǎo àn",
    "definition": "draft (legislation, proposal etc)"
  },
  "草地": {
    "pinyin": "cǎo dì",
    "definition": "lawn; meadow; sod; turf"
  },
  "草率": {
    "pinyin": "cǎo shuài",
    "definition": "careless; negligent; sloppy; not serious"
  },
  "草坪": {
    "pinyin": "cǎo píng",
    "definition": "lawn"
  },
  "草原": {
    "pinyin": "cǎo yuán",
    "definition": "grassland; prairie"
  },
  "册": {
    "pinyin": "cè",
    "definition": "book; booklet; classifier for books"
  },
  "侧": {
    "pinyin": "cè",
    "definition": "the side; to incline towards; to lean; inclined; lateral; side"
  },
  "侧面": {
    "pinyin": "cè miàn",
    "definition": "lateral side; side; aspect; profile"
  },
  "侧重": {
    "pinyin": "cè zhòng",
    "definition": "to place particular emphasis on"
  },
  "厕所": {
    "pinyin": "cè suǒ",
    "definition": "toilet; lavatory"
  },
  "测": {
    "pinyin": "cè",
    "definition": "to survey; to measure; to conjecture"
  },
  "测定": {
    "pinyin": "cè dìng",
    "definition": "to determine (by measuring or surveying)"
  },
  "测量": {
    "pinyin": "cè liáng",
    "definition": "survey; to measure; to gauge; to determine"
  },
  "测试": {
    "pinyin": "cè shì",
    "definition": "to test (machinery etc); to test (a person's skill in a particular area); a test; (computing) beta (version of software)"
  },
  "测算": {
    "pinyin": "cè suàn",
    "definition": "to take measurements and calculate"
  },
  "测验": {
    "pinyin": "cè yàn",
    "definition": "test; to test"
  },
  "策略": {
    "pinyin": "cè lu:è",
    "definition": "strategy; tactics; crafty; adroit"
  },
  "策划": {
    "pinyin": "cè huà",
    "definition": "to plot; to scheme; to bring about; to engineer; planning; producer; planner"
  },
  "层": {
    "pinyin": "céng",
    "definition": "to pile on top of one another; layer; stratum; floor (of a building); story; (math.) sheaf; classifier for layers"
  },
  "层出不穷": {
    "pinyin": "céng chū bù qióng",
    "definition": "more and more emerge; innumerable succession; breeding like flies (idiom)"
  },
  "层次": {
    "pinyin": "céng cì",
    "definition": "layer; level; gradation; arrangement of ideas; (a person's) standing"
  },
  "层面": {
    "pinyin": "céng miàn",
    "definition": "aspect; facet; level (political, psychological, spiritual etc); (geology) bedding plane"
  },
  "曾": {
    "pinyin": "Zēng",
    "definition": "surname Zeng"
  },
  "曾经": {
    "pinyin": "céng jīng",
    "definition": "once; already; former; previously; ever; (past tense marker used before verb or clause)"
  },
  "蹭": {
    "pinyin": "cèng",
    "definition": "to rub against; to walk slowly; (coll.) to freeload"
  },
  "叉": {
    "pinyin": "chā",
    "definition": "fork; pitchfork; prong; pick; cross; intersect; \"X\""
  },
  "叉子": {
    "pinyin": "chā zi",
    "definition": "fork"
  },
  "插": {
    "pinyin": "chā",
    "definition": "to insert; stick in; pierce; to take part in; to interfere; to interpose"
  },
  "插手": {
    "pinyin": "chā shǒu",
    "definition": "to get involved in; to meddle; interference"
  },
  "插图": {
    "pinyin": "chā tú",
    "definition": "illustration"
  },
  "插嘴": {
    "pinyin": "chā zuǐ",
    "definition": "to interrupt (sb talking); to butt in; to cut into a conversation"
  },
  "查": {
    "pinyin": "Zhā",
    "definition": "surname Zha"
  },
  "查出": {
    "pinyin": "chá chū",
    "definition": "to find out; to discover"
  },
  "查处": {
    "pinyin": "chá chǔ",
    "definition": "to investigate and handle (a criminal case)"
  },
  "查获": {
    "pinyin": "chá huò",
    "definition": "to track down and seize (a criminal suspect, contraband etc)"
  },
  "查看": {
    "pinyin": "chá kàn",
    "definition": "to look over; to examine; to check up; to ferret out"
  },
  "查明": {
    "pinyin": "chá míng",
    "definition": "to investigate and find out; to ascertain"
  },
  "查询": {
    "pinyin": "chá xún",
    "definition": "to check; to inquire; to consult (a document etc); inquiry; query"
  },
  "查找": {
    "pinyin": "chá zhǎo",
    "definition": "to search for; to look up"
  },
  "茶": {
    "pinyin": "chá",
    "definition": "tea; tea plant"
  },
  "茶道": {
    "pinyin": "chá dào",
    "definition": "Japanese tea ceremony; sado"
  },
  "茶馆儿": {
    "pinyin": "chá guǎn r",
    "definition": "a teashop"
  },
  "茶叶": {
    "pinyin": "chá yè",
    "definition": "tea; tea leaves"
  },
  "察觉": {
    "pinyin": "chá jué",
    "definition": "to sense; to perceive; to become aware of; to detect"
  },
  "察看": {
    "pinyin": "chá kàn",
    "definition": "to watch; to look carefully at"
  },
  "岔": {
    "pinyin": "chà",
    "definition": "fork in road; bifurcation; branch in road, river, mountain range etc; to branch off; to turn off; to diverge; to stray (from the path); to change the subject; to interrupt; to stagger (times)"
  },
  "诧异": {
    "pinyin": "chà yì",
    "definition": "flabbergasted; astonished"
  },
  "差": {
    "pinyin": "chā",
    "definition": "difference; discrepancy; (math.) difference (amount remaining after a subtraction); (literary) a little; somewhat; slightly"
  },
  "差别": {
    "pinyin": "chā bié",
    "definition": "difference; distinction; disparity"
  },
  "差不多": {
    "pinyin": "chà bu duō",
    "definition": "almost; nearly; more or less; about the same; good enough; not bad"
  },
  "差错": {
    "pinyin": "chā cuò",
    "definition": "mistake; slip-up; fault; error; accident; mishap"
  },
  "差点儿": {
    "pinyin": "chà diǎn r",
    "definition": "erhua variant of 差点"
  },
  "差额": {
    "pinyin": "chā é",
    "definition": "balance (financial); discrepancy (in a sum or quota); difference"
  },
  "差距": {
    "pinyin": "chā jù",
    "definition": "disparity; gap"
  },
  "差一点儿": {
    "pinyin": "chà yī diǎn r",
    "definition": "erhua variant of 差一点"
  },
  "差异": {
    "pinyin": "chā yì",
    "definition": "difference; discrepancy"
  },
  "拆": {
    "pinyin": "chāi",
    "definition": "to tear open; to tear down; to tear apart; to open"
  },
  "拆除": {
    "pinyin": "chāi chú",
    "definition": "to tear down; to demolish; to dismantle; to remove"
  },
  "拆迁": {
    "pinyin": "chāi qiān",
    "definition": "to demolish a building and relocate the inhabitants"
  },
  "柴油": {
    "pinyin": "chái yóu",
    "definition": "diesel fuel"
  },
  "搀": {
    "pinyin": "chān",
    "definition": "to take by the arm and assist; to mix; to blend; to dilute; to adulterate"
  },
  "禅杖": {
    "pinyin": "chán zhàng",
    "definition": "the staff of a Buddhist monk"
  },
  "馋": {
    "pinyin": "chán",
    "definition": "gluttonous; greedy; to have a craving"
  },
  "缠": {
    "pinyin": "chán",
    "definition": "to wind around; to wrap round; to coil; tangle; to involve; to bother; to annoy"
  },
  "缠绕": {
    "pinyin": "chán rào",
    "definition": "twisting; to twine; to wind; to pester; to bother"
  },
  "产": {
    "pinyin": "chǎn",
    "definition": "to give birth; to reproduce; to produce; product; resource; estate; property"
  },
  "产地": {
    "pinyin": "chǎn dì",
    "definition": "source (of a product); place of origin; manufacturing location"
  },
  "产量": {
    "pinyin": "chǎn liàng",
    "definition": "output"
  },
  "产品": {
    "pinyin": "chǎn pǐn",
    "definition": "goods; merchandise; product"
  },
  "产生": {
    "pinyin": "chǎn shēng",
    "definition": "to arise; to come into being; to come about; to give rise to; to bring into being; to bring about; to produce; to engender; to generate"
  },
  "产物": {
    "pinyin": "chǎn wù",
    "definition": "product; result (of)"
  },
  "产业": {
    "pinyin": "chǎn yè",
    "definition": "industry; estate; property; industrial"
  },
  "产值": {
    "pinyin": "chǎn zhí",
    "definition": "value of output; output value"
  },
  "铲": {
    "pinyin": "chǎn",
    "definition": "to level off; to root up"
  },
  "铲子": {
    "pinyin": "chǎn zi",
    "definition": "shovel; spade; trowel; spatula (kitchen utensil)"
  },
  "阐述": {
    "pinyin": "chǎn shù",
    "definition": "to expound (a position); to elaborate (on a topic); to treat (a subject)"
  },
  "颤抖": {
    "pinyin": "chàn dǒu",
    "definition": "to shudder; to shiver; to shake; to tremble"
  },
  "昌盛": {
    "pinyin": "chāng shèng",
    "definition": "prosperous"
  },
  "猖狂": {
    "pinyin": "chāng kuáng",
    "definition": "savage; furious"
  },
  "肠": {
    "pinyin": "cháng",
    "definition": "intestines"
  },
  "尝": {
    "pinyin": "cháng",
    "definition": "to taste; to try (food); to experience; (literary) ever; once"
  },
  "尝试": {
    "pinyin": "cháng shì",
    "definition": "to try; to attempt"
  },
  "偿还": {
    "pinyin": "cháng huán",
    "definition": "to repay; to reimburse"
  },
  "常": {
    "pinyin": "Cháng",
    "definition": "surname Chang"
  },
  "常常": {
    "pinyin": "cháng cháng",
    "definition": "frequently; often"
  },
  "常规": {
    "pinyin": "cháng guī",
    "definition": "code of conduct; conventions; common practice; routine (medical procedure etc)"
  },
  "常见": {
    "pinyin": "cháng jiàn",
    "definition": "commonly seen; common; to see sth frequently"
  },
  "常理": {
    "pinyin": "cháng lǐ",
    "definition": "common sense; conventional reasoning and morals"
  },
  "常年": {
    "pinyin": "cháng nián",
    "definition": "all year round; for years on end; average year"
  },
  "常人": {
    "pinyin": "cháng rén",
    "definition": "ordinary person"
  },
  "常识": {
    "pinyin": "cháng shí",
    "definition": "common sense; general knowledge"
  },
  "常态": {
    "pinyin": "cháng tài",
    "definition": "normal state"
  },
  "常温": {
    "pinyin": "cháng wēn",
    "definition": "room temperature; ordinary temperatures"
  },
  "常务": {
    "pinyin": "cháng wù",
    "definition": "routine; everyday business; daily operation (of a company)"
  },
  "常用": {
    "pinyin": "cháng yòng",
    "definition": "in common usage"
  },
  "嫦娥": {
    "pinyin": "Cháng é",
    "definition": "Chang'e, the lady in the moon (Chinese mythology); one of the Chang'e series of PRC lunar spacecraft"
  },
  "厂": {
    "pinyin": "hǎn",
    "definition": "\"cliff\" radical in Chinese characters (Kangxi radical 27), occurring in 原, 历, 压 etc"
  },
  "厂家": {
    "pinyin": "chǎng jiā",
    "definition": "factory; manufacturer; (coll.) a factory owner; the factory management"
  },
  "厂商": {
    "pinyin": "chǎng shāng",
    "definition": "manufacturer; producer"
  },
  "厂长": {
    "pinyin": "chǎng zhǎng",
    "definition": "factory director"
  },
  "场": {
    "pinyin": "cháng",
    "definition": "threshing floor; classifier for events and happenings: spell, episode, bout"
  },
  "场地": {
    "pinyin": "chǎng dì",
    "definition": "space; site; place; sports pitch"
  },
  "场馆": {
    "pinyin": "chǎng guǎn",
    "definition": "sporting venue; arena"
  },
  "场合": {
    "pinyin": "chǎng hé",
    "definition": "situation; occasion; context; setting; location; venue"
  },
  "场景": {
    "pinyin": "chǎng jǐng",
    "definition": "scene; scenario; situation; setting"
  },
  "场面": {
    "pinyin": "chǎng miàn",
    "definition": "scene; spectacle; occasion; situation"
  },
  "场所": {
    "pinyin": "chǎng suǒ",
    "definition": "location; place"
  },
  "畅谈": {
    "pinyin": "chàng tán",
    "definition": "to talk freely; to discuss without inhibition"
  },
  "畅通": {
    "pinyin": "chàng tōng",
    "definition": "unimpeded; free-flowing; straight path; unclogged; move without obstruction"
  },
  "畅销": {
    "pinyin": "chàng xiāo",
    "definition": "to sell well; bestselling; chart-topping"
  },
  "倡导": {
    "pinyin": "chàng dǎo",
    "definition": "to advocate; to initiate; to propose; to be a proponent of (an idea or school of thought)"
  },
  "倡议": {
    "pinyin": "chàng yì",
    "definition": "to suggest; to initiate; proposal; initiative"
  },
  "唱": {
    "pinyin": "chàng",
    "definition": "to sing; to call loudly; to chant"
  },
  "唱歌": {
    "pinyin": "chàng gē",
    "definition": "to sing a song"
  },
  "唱片": {
    "pinyin": "chàng piàn",
    "definition": "gramophone record; LP; music CD; musical album"
  },
  "敞开": {
    "pinyin": "chǎng kāi",
    "definition": "to open wide; unrestrictedly"
  },
  "抄": {
    "pinyin": "chāo",
    "definition": "to make a copy; to plagiarize; to search and seize; to raid; to grab; to go off with; to take a shortcut; to make a turning move; to fold one's arms"
  },
  "抄袭": {
    "pinyin": "chāo xí",
    "definition": "to plagiarize; to copy; to attack the flank or rear of an enemy"
  },
  "抄写": {
    "pinyin": "chāo xiě",
    "definition": "to copy; to transcribe"
  },
  "钞票": {
    "pinyin": "chāo piào",
    "definition": "paper money; a bill (e.g. 100 yuan)"
  },
  "超": {
    "pinyin": "chāo",
    "definition": "to exceed; to overtake; to surpass; to transcend; to pass; to cross; ultra-; super-"
  },
  "超标": {
    "pinyin": "chāo biāo",
    "definition": "to cross the limit; to be over the accepted norm; excessive"
  },
  "超车": {
    "pinyin": "chāo chē",
    "definition": "to overtake (another car)"
  },
  "超出": {
    "pinyin": "chāo chū",
    "definition": "to exceed; to overstep; to go too far; to encroach"
  },
  "超过": {
    "pinyin": "chāo guò",
    "definition": "to surpass; to exceed; to outstrip"
  },
  "超级": {
    "pinyin": "chāo jí",
    "definition": "super-; ultra-; hyper-"
  },
  "超前": {
    "pinyin": "chāo qián",
    "definition": "to be ahead of one's time; to surpass or outdo one's predecessors; to be ahead of the pack; to take the lead; advanced"
  },
  "超市": {
    "pinyin": "chāo shì",
    "definition": "supermarket (abbr. for 超级市场)"
  },
  "超速": {
    "pinyin": "chāo sù",
    "definition": "to exceed the speed limit; to speed; high-speed"
  },
  "超越": {
    "pinyin": "chāo yuè",
    "definition": "to surpass; to exceed; to transcend"
  },
  "朝": {
    "pinyin": "Cháo",
    "definition": "abbr. for 朝鲜 Korea"
  },
  "朝代": {
    "pinyin": "cháo dài",
    "definition": "dynasty; reign (of a king)"
  },
  "朝气蓬勃": {
    "pinyin": "zhāo qì péng bó",
    "definition": "full of youthful energy (idiom); vigorous; energetic; a bright spark"
  },
  "朝三暮四": {
    "pinyin": "zhāo sān mù sì",
    "definition": "lit. say three in the morning but four in the evening (idiom); to change sth that is already settled upon; indecisive; to blow hot and cold"
  },
  "朝夕相处": {
    "pinyin": "zhāo xī xiāng chǔ",
    "definition": "to spend all one's time together (idiom)"
  },
  "朝着": {
    "pinyin": "cháo zhe",
    "definition": "towards"
  },
  "嘲弄": {
    "pinyin": "cháo nòng",
    "definition": "to tease; to poke fun at; to make fun of"
  },
  "嘲笑": {
    "pinyin": "cháo xiào",
    "definition": "to jeer at; to deride; to ridicule; mockery; derision"
  },
  "潮": {
    "pinyin": "cháo",
    "definition": "tide; damp; moist; humid; fashionable; trendy; (coll.) inferior; substandard"
  },
  "潮流": {
    "pinyin": "cháo liú",
    "definition": "tide; current; trend"
  },
  "潮湿": {
    "pinyin": "cháo shī",
    "definition": "damp; moist"
  },
  "吵": {
    "pinyin": "chǎo",
    "definition": "to quarrel; to make a noise; noisy; to disturb by making a noise"
  },
  "吵架": {
    "pinyin": "chǎo jià",
    "definition": "to quarrel; to have a row; quarrel"
  },
  "吵嘴": {
    "pinyin": "chǎo zuǐ",
    "definition": "to quarrel"
  },
  "炒": {
    "pinyin": "chǎo",
    "definition": "to sauté; to stir-fry; to speculate; to hype; to fire (sb)"
  },
  "炒股": {
    "pinyin": "chǎo gǔ",
    "definition": "(coll.) to speculate in stocks"
  },
  "炒作": {
    "pinyin": "chǎo zuò",
    "definition": "to hype; to promote (in the media)"
  },
  "车道": {
    "pinyin": "chē dào",
    "definition": "traffic lane; driveway"
  },
  "车号": {
    "pinyin": "chē hào",
    "definition": "vehicle number (license plate number, taxi number, bus number, train car number)"
  },
  "车祸": {
    "pinyin": "chē huò",
    "definition": "traffic accident; car crash"
  },
  "车间": {
    "pinyin": "chē jiān",
    "definition": "workshop"
  },
  "车库": {
    "pinyin": "chē kù",
    "definition": "garage"
  },
  "车辆": {
    "pinyin": "chē liàng",
    "definition": "vehicle"
  },
  "车轮": {
    "pinyin": "chē lún",
    "definition": "wheel"
  },
  "车牌": {
    "pinyin": "chē pái",
    "definition": "license plate"
  },
  "车票": {
    "pinyin": "chē piào",
    "definition": "ticket (for a bus or train)"
  },
  "车上": {
    "pinyin": "chē shàng",
    "definition": "Car"
  },
  "车速": {
    "pinyin": "chē sù",
    "definition": "vehicle speed"
  },
  "车位": {
    "pinyin": "chē wèi",
    "definition": "parking spot; unloading point; garage place; stand for taxi"
  },
  "车厢": {
    "pinyin": "chē xiāng",
    "definition": "carriage"
  },
  "车型": {
    "pinyin": "chē xíng",
    "definition": "vehicle model (i.e. particular version of a car or motorcycle etc)"
  },
  "车展": {
    "pinyin": "chē zhǎn",
    "definition": "motor show"
  },
  "车站": {
    "pinyin": "chē zhàn",
    "definition": "rail station; bus stop"
  },
  "车轴": {
    "pinyin": "chē zhóu",
    "definition": "axle"
  },
  "车主": {
    "pinyin": "chē zhǔ",
    "definition": "vehicle owner"
  },
  "扯": {
    "pinyin": "chě",
    "definition": "to pull; to tear; (of cloth, thread etc) to buy; to chat; to gossip; (coll.) (Tw) ridiculous; hokey"
  },
  "彻底": {
    "pinyin": "chè dǐ",
    "definition": "thorough; thoroughly; complete"
  },
  "彻夜": {
    "pinyin": "chè yè",
    "definition": "the whole night"
  },
  "撤": {
    "pinyin": "chè",
    "definition": "to remove; to take away"
  },
  "撤换": {
    "pinyin": "chè huàn",
    "definition": "to dismiss and replace (sb); to replace (sb or sth)"
  },
  "撤离": {
    "pinyin": "chè lí",
    "definition": "to withdraw from; to evacuate"
  },
  "撤退": {
    "pinyin": "chè tuì",
    "definition": "to retreat"
  },
  "撤销": {
    "pinyin": "chè xiāo",
    "definition": "to repeal; to revoke; (computing) to undo"
  },
  "沉": {
    "pinyin": "chén",
    "definition": "to submerge; to immerse; to sink; to keep down; to lower; to drop; deep; profound; heavy"
  },
  "沉甸甸": {
    "pinyin": "chén diàn diàn",
    "definition": "heavy"
  },
  "沉淀": {
    "pinyin": "chén diàn",
    "definition": "to settle; to precipitate; sedimentation"
  },
  "沉浸": {
    "pinyin": "chén jìn",
    "definition": "to soak; to permeate; to immerse"
  },
  "沉闷": {
    "pinyin": "chén mèn",
    "definition": "oppressive (of weather); heavy; depressed; not happy; (of sound) dull; muffled"
  },
  "沉迷": {
    "pinyin": "chén mí",
    "definition": "to be engrossed; to be absorbed with; to lose oneself in; to be addicted to"
  },
  "沉默": {
    "pinyin": "chén mò",
    "definition": "taciturn; uncommunicative; silent"
  },
  "沉思": {
    "pinyin": "chén sī",
    "definition": "to contemplate; to ponder; contemplation; meditation"
  },
  "沉稳": {
    "pinyin": "chén wěn",
    "definition": "steady; calm; unflustered"
  },
  "沉着": {
    "pinyin": "chén zhuó",
    "definition": "steady; calm and collected; not nervous"
  },
  "沉重": {
    "pinyin": "chén zhòng",
    "definition": "heavy; hard; serious; critical"
  },
  "陈旧": {
    "pinyin": "chén jiù",
    "definition": "old-fashioned"
  },
  "陈列": {
    "pinyin": "chén liè",
    "definition": "to display; to exhibit"
  },
  "陈述": {
    "pinyin": "chén shù",
    "definition": "an assertion; to declare; to state"
  },
  "衬衫": {
    "pinyin": "chèn shān",
    "definition": "shirt; blouse"
  },
  "衬托": {
    "pinyin": "chèn tuō",
    "definition": "to set off"
  },
  "衬衣": {
    "pinyin": "chèn yī",
    "definition": "shirt"
  },
  "趁": {
    "pinyin": "chèn",
    "definition": "to avail oneself of; to take advantage of"
  },
  "趁机": {
    "pinyin": "chèn jī",
    "definition": "to seize an opportunity; to take advantage of situation"
  },
  "趁早": {
    "pinyin": "chèn zǎo",
    "definition": "as soon as possible; at the first opportunity; the sooner the better; before it's too late"
  },
  "趁着": {
    "pinyin": "chènzhe",
    "definition": "while"
  },
  "称": {
    "pinyin": "chèn",
    "definition": "to fit; balanced; suitable"
  },
  "称号": {
    "pinyin": "chēng hào",
    "definition": "name; term of address; title"
  },
  "称呼": {
    "pinyin": "chēng hu",
    "definition": "to call; to address as; form of address; appellation"
  },
  "称为": {
    "pinyin": "chēng wéi",
    "definition": "to be called; to be known as; to call it \"...\""
  },
  "称心如意": {
    "pinyin": "chèn xīn rú yì",
    "definition": "(idiom) after one's own heart; gratifying; satisfactory; everything one could wish"
  },
  "称赞": {
    "pinyin": "chēng zàn",
    "definition": "to praise; to acclaim; to commend; to compliment"
  },
  "称作": {
    "pinyin": "chēng zuò",
    "definition": "to be called; to be known as"
  },
  "撑": {
    "pinyin": "chēng",
    "definition": "to support; to prop up; to push or move with a pole; to maintain; to open or unfurl; to fill to bursting point; brace; stay; support"
  },
  "成本": {
    "pinyin": "chéng běn",
    "definition": "(manufacturing, production etc) costs"
  },
  "成才": {
    "pinyin": "chéng cái",
    "definition": "to make sth of oneself; to become a person who is worthy of respect"
  },
  "成分": {
    "pinyin": "chéng fèn",
    "definition": "composition; ingredient; element; component; one's social status"
  },
  "成功": {
    "pinyin": "Chéng gōng",
    "definition": "Chenggong or Chengkung town in Taitung County 台东县, southeast Taiwan"
  },
  "成果": {
    "pinyin": "chéng guǒ",
    "definition": "result; achievement; gain; profit"
  },
  "成绩": {
    "pinyin": "chéng jì",
    "definition": "achievement; performance records; grades"
  },
  "成家": {
    "pinyin": "chéng jiā",
    "definition": "to settle down and get married (of a man); to become a recognized expert"
  },
  "成交": {
    "pinyin": "chéng jiāo",
    "definition": "to complete a contract; to reach a deal"
  },
  "成就": {
    "pinyin": "chéng jiù",
    "definition": "accomplishment; success; achievement; to achieve (a result); to create; to bring about"
  },
  "成立": {
    "pinyin": "chéng lì",
    "definition": "to establish; to set up; to be tenable; to hold water"
  },
  "成年": {
    "pinyin": "chéng nián",
    "definition": "to grow to adulthood; fully grown; adult; the whole year"
  },
  "成品": {
    "pinyin": "chéng pǐn",
    "definition": "finished goods; a finished product"
  },
  "成千上万": {
    "pinyin": "chéng qiān shàng wàn",
    "definition": "lit. by the thousands and tens of thousands (idiom); untold numbers; innumerable; thousands upon thousands"
  },
  "成群结队": {
    "pinyin": "chéng qún jié duì",
    "definition": "making up a group, forming a troupe (idiom); in large numbers; as a large crowd"
  },
  "成人": {
    "pinyin": "chéng rén",
    "definition": "adult"
  },
  "成熟": {
    "pinyin": "chéng shú",
    "definition": "mature; ripe; to mature; to ripen; Taiwan pr. [chéng shóu]"
  },
  "成天": {
    "pinyin": "chéng tiān",
    "definition": "(coll.) all day long; all the time"
  },
  "成为": {
    "pinyin": "chéng wéi",
    "definition": "to become; to turn into"
  },
  "成问题": {
    "pinyin": "chéng wèn tí",
    "definition": "to be a problem; problematic; questionable"
  },
  "成效": {
    "pinyin": "chéng xiào",
    "definition": "effect; result"
  },
  "成心": {
    "pinyin": "chéng xīn",
    "definition": "intentional; deliberate; on purpose"
  },
  "成型": {
    "pinyin": "chéng xíng",
    "definition": "to become shaped; to become formed"
  },
  "成语": {
    "pinyin": "chéng yǔ",
    "definition": "Chinese set expression, typically of 4 characters, often alluding to a story or historical quotation; idiom; proverb; saying; adage"
  },
  "成员": {
    "pinyin": "chéng yuán",
    "definition": "member"
  },
  "成长": {
    "pinyin": "chéng zhǎng",
    "definition": "to mature; to grow; growth"
  },
  "呈现": {
    "pinyin": "chéng xiàn",
    "definition": "to appear; to emerge; to present (a certain appearance); to demonstrate"
  },
  "承办": {
    "pinyin": "chéng bàn",
    "definition": "to undertake; to accept a contract"
  },
  "承包": {
    "pinyin": "chéng bāo",
    "definition": "to contract; to undertake (a job)"
  },
  "承担": {
    "pinyin": "chéng dān",
    "definition": "to undertake; to assume (responsibility etc)"
  },
  "承诺": {
    "pinyin": "chéng nuò",
    "definition": "to promise; to undertake to do something; commitment"
  },
  "承认": {
    "pinyin": "chéng rèn",
    "definition": "to admit; to concede; to recognize; recognition (diplomatic, artistic etc); to acknowledge"
  },
  "承受": {
    "pinyin": "chéng shòu",
    "definition": "to bear; to support; to inherit"
  },
  "承载": {
    "pinyin": "chéng zài",
    "definition": "to bear the weight; to sustain"
  },
  "诚恳": {
    "pinyin": "chéng kěn",
    "definition": "sincere; honest; cordial"
  },
  "诚实": {
    "pinyin": "chéng shí",
    "definition": "honest"
  },
  "诚心诚意": {
    "pinyin": "chéng xīn chéng yì",
    "definition": "earnestly and sincerely (idiom); with all sincerity"
  },
  "诚信": {
    "pinyin": "chéng xìn",
    "definition": "genuine; honest; in good faith; honesty; integrity"
  },
  "诚意": {
    "pinyin": "chéng yì",
    "definition": "sincerity; good faith"
  },
  "诚挚": {
    "pinyin": "chéng zhì",
    "definition": "sincere; cordial"
  },
  "城": {
    "pinyin": "chéng",
    "definition": "city walls; city; town"
  },
  "城堡": {
    "pinyin": "chéng bǎo",
    "definition": "castle; rook (chess piece)"
  },
  "城里": {
    "pinyin": "chénglǐ",
    "definition": "In the city"
  },
  "城墙": {
    "pinyin": "chéng qiáng",
    "definition": "city wall"
  },
  "城区": {
    "pinyin": "chéng qū",
    "definition": "city district; urban area"
  },
  "城市": {
    "pinyin": "chéng shì",
    "definition": "city; town"
  },
  "城乡": {
    "pinyin": "chéng xiāng",
    "definition": "city and countryside"
  },
  "城镇": {
    "pinyin": "chéng zhèn",
    "definition": "town; cities and towns"
  },
  "乘": {
    "pinyin": "Chéng",
    "definition": "surname Cheng"
  },
  "乘车": {
    "pinyin": "chéng chē",
    "definition": "to ride (in a car or carriage); to drive; to motor"
  },
  "乘客": {
    "pinyin": "chéng kè",
    "definition": "passenger"
  },
  "乘人之危": {
    "pinyin": "chéng rén zhī wēi",
    "definition": "to take advantage of sb's precarious position"
  },
  "乘务员": {
    "pinyin": "chéng wù yuán",
    "definition": "attendant on an airplane, train, boat etc"
  },
  "乘坐": {
    "pinyin": "chéng zuò",
    "definition": "to ride (in a vehicle)"
  },
  "惩处": {
    "pinyin": "chéng chǔ",
    "definition": "to punish; to administer justice"
  },
  "惩罚": {
    "pinyin": "chéng fá",
    "definition": "penalty; punishment; to punish"
  },
  "程度": {
    "pinyin": "chéng dù",
    "definition": "degree; level; extent"
  },
  "程序": {
    "pinyin": "chéng xù",
    "definition": "procedures; sequence; order; computer program"
  },
  "澄清": {
    "pinyin": "chéng qīng",
    "definition": "clear (of liquid); limpid; to clarify; to make sth clear; to be clear (about the facts)"
  },
  "橙": {
    "pinyin": "chéng",
    "definition": "orange tree; orange (color)"
  },
  "橙汁": {
    "pinyin": "chéng zhī",
    "definition": "orange juice"
  },
  "逞能": {
    "pinyin": "chěng néng",
    "definition": "to show off one's ability; to boast one's merits"
  },
  "逞强": {
    "pinyin": "chěng qiáng",
    "definition": "to show off; to try to be brave"
  },
  "秤": {
    "pinyin": "chēng",
    "definition": "variant of 称, to weigh"
  },
  "吃不上": {
    "pinyin": "chī bu shàng",
    "definition": "unable to get anything to eat; to miss a meal"
  },
  "吃饭": {
    "pinyin": "chī fàn",
    "definition": "to have a meal; to eat; to make a living"
  },
  "吃喝玩乐": {
    "pinyin": "chī hē wán lè",
    "definition": "to eat, drink and be merry (idiom); to abandon oneself to a life of pleasure"
  },
  "吃惊": {
    "pinyin": "chī jīng",
    "definition": "to be startled; to be shocked; to be amazed"
  },
  "吃苦": {
    "pinyin": "chī kǔ",
    "definition": "to bear hardships"
  },
  "吃亏": {
    "pinyin": "chī kuī",
    "definition": "to suffer losses; to come to grief; to lose out; to get the worst of it; to be at a disadvantage; unfortunately"
  },
  "吃力": {
    "pinyin": "chī lì",
    "definition": "to entail strenuous effort; to toil at a task; strenuous; laborious; strain"
  },
  "痴呆": {
    "pinyin": "chī dāi",
    "definition": "imbecility; dementia"
  },
  "痴迷": {
    "pinyin": "chī mí",
    "definition": "infatuated; obsessed"
  },
  "痴心": {
    "pinyin": "chī xīn",
    "definition": "infatuation"
  },
  "池塘": {
    "pinyin": "chí táng",
    "definition": "pool; pond"
  },
  "池子": {
    "pinyin": "chí zi",
    "definition": "pond; bathhouse pool; dance floor of a ballroom; (old) stalls (front rows in a theater)"
  },
  "驰名": {
    "pinyin": "chí míng",
    "definition": "famous"
  },
  "迟": {
    "pinyin": "Chí",
    "definition": "surname Chi"
  },
  "迟迟": {
    "pinyin": "chí chí",
    "definition": "late (with a task etc); slow"
  },
  "迟到": {
    "pinyin": "chí dào",
    "definition": "to arrive late"
  },
  "迟缓": {
    "pinyin": "chí huǎn",
    "definition": "slow; sluggish"
  },
  "迟疑": {
    "pinyin": "chí yí",
    "definition": "to hesitate"
  },
  "迟早": {
    "pinyin": "chí zǎo",
    "definition": "sooner or later"
  },
  "持": {
    "pinyin": "chí",
    "definition": "to hold; to grasp; to support; to maintain; to persevere; to manage; to run (i.e. administer); to control"
  },
  "持久": {
    "pinyin": "chí jiǔ",
    "definition": "lasting; enduring; persistent; permanent; protracted; endurance; persistence; to last long"
  },
  "持续": {
    "pinyin": "chí xù",
    "definition": "to continue; to persist; to last; sustainable; preservation"
  },
  "持有": {
    "pinyin": "chí yǒu",
    "definition": "to hold (passport, views etc)"
  },
  "持之以恒": {
    "pinyin": "chí zhī yǐ héng",
    "definition": "to pursue unremittingly (idiom); to persevere"
  },
  "尺": {
    "pinyin": "chě",
    "definition": "one of the characters used to represent a musical note in gongche notation, 工尺谱"
  },
  "尺寸": {
    "pinyin": "chǐ cun",
    "definition": "size; dimensions; measurements (esp. of clothes); (coll.) propriety"
  },
  "尺度": {
    "pinyin": "chǐ dù",
    "definition": "scale; yardstick"
  },
  "尺子": {
    "pinyin": "chǐ zi",
    "definition": "ruler (measuring instrument)"
  },
  "耻辱": {
    "pinyin": "chǐ rǔ",
    "definition": "disgrace; shame; humiliation"
  },
  "耻笑": {
    "pinyin": "chǐ xiào",
    "definition": "to sneer at sb; to ridicule"
  },
  "赤道": {
    "pinyin": "chì dào",
    "definition": "equator (of the earth or a celestial body); celestial equator"
  },
  "赤字": {
    "pinyin": "chì zì",
    "definition": "(financial) deficit; red letter"
  },
  "翅膀": {
    "pinyin": "chì bǎng",
    "definition": "wing"
  },
  "充": {
    "pinyin": "chōng",
    "definition": "sufficient; full; to fill; to serve as; to act as; to act falsely as; to pose as"
  },
  "充当": {
    "pinyin": "chōng dāng",
    "definition": "to serve as; to act as; to play the role of"
  },
  "充电": {
    "pinyin": "chōng diàn",
    "definition": "to recharge (a battery); (fig.) to recharge one's batteries (through leisure); to update one's skills and knowledge"
  },
  "充电器": {
    "pinyin": "chōng diàn qì",
    "definition": "battery charger"
  },
  "充分": {
    "pinyin": "chōng fèn",
    "definition": "ample; sufficient; adequate; full; fully; to the full"
  },
  "充满": {
    "pinyin": "chōng mǎn",
    "definition": "full of; brimming with; very full; permeated"
  },
  "充沛": {
    "pinyin": "chōng pèi",
    "definition": "abundant; plentiful; vigorous"
  },
  "充实": {
    "pinyin": "chōng shí",
    "definition": "rich; full; substantial; to enrich; to augment; to substantiate (an argument)"
  },
  "充足": {
    "pinyin": "chōng zú",
    "definition": "adequate; sufficient; abundant"
  },
  "冲": {
    "pinyin": "chōng",
    "definition": "(of water) to dash against; to mix with water; to infuse; to rinse; to flush; to develop (a film); to rise in the air; to clash; to collide with"
  },
  "冲刺": {
    "pinyin": "chōng cì",
    "definition": "(sports) to sprint; to spurt; to dash; to put in a big effort to achieve a goal as the deadline approaches"
  },
  "冲动": {
    "pinyin": "chōng dòng",
    "definition": "to have an urge; to be impetuous; impulse; urge"
  },
  "冲击": {
    "pinyin": "chōng jī",
    "definition": "variant of 冲击"
  },
  "冲浪": {
    "pinyin": "chōng làng",
    "definition": "to surf; surfing"
  },
  "冲突": {
    "pinyin": "chōng tū",
    "definition": "conflict; to conflict; clash of opposing forces; collision (of interests); contention"
  },
  "冲洗": {
    "pinyin": "chōng xǐ",
    "definition": "to rinse; to wash; to develop (photographic film)"
  },
  "冲撞": {
    "pinyin": "chōng zhuàng",
    "definition": "to collide; jerking motion; to impinge; to offend; to provoke"
  },
  "虫子": {
    "pinyin": "chóng zi",
    "definition": "insect; bug; worm"
  },
  "崇拜": {
    "pinyin": "chóng bài",
    "definition": "to worship; adoration"
  },
  "崇高": {
    "pinyin": "chóng gāo",
    "definition": "majestic; sublime"
  },
  "崇敬": {
    "pinyin": "chóng jìng",
    "definition": "to revere; to venerate; high esteem"
  },
  "崇尚": {
    "pinyin": "chóng shàng",
    "definition": "to hold up (as an model); to hold in esteem; to revere; to advocate"
  },
  "宠": {
    "pinyin": "chǒng",
    "definition": "to love; to pamper; to spoil; to favor"
  },
  "宠爱": {
    "pinyin": "chǒng ài",
    "definition": "to dote on sb"
  },
  "宠物": {
    "pinyin": "chǒng wù",
    "definition": "house pet"
  },
  "抽": {
    "pinyin": "chōu",
    "definition": "to draw out; to pull out from in between; to remove part of the whole; (of certain plants) to sprout or bud; to whip or thrash"
  },
  "抽奖": {
    "pinyin": "chōu jiǎng",
    "definition": "to draw a prize; a lottery; a raffle"
  },
  "抽空": {
    "pinyin": "chōu kòng",
    "definition": "to find the time to do sth"
  },
  "抽签": {
    "pinyin": "chōu qiān",
    "definition": "to perform divination with sticks; to draw lots; a ballot (in share dealing)"
  },
  "抽屉": {
    "pinyin": "chōu ti",
    "definition": "drawer"
  },
  "抽象": {
    "pinyin": "chōu xiàng",
    "definition": "abstract; abstraction"
  },
  "抽烟": {
    "pinyin": "chōu yān",
    "definition": "to smoke (a cigarette, tobacco)"
  },
  "仇": {
    "pinyin": "Qiú",
    "definition": "surname Qiu"
  },
  "仇恨": {
    "pinyin": "chóu hèn",
    "definition": "to hate; hatred; enmity; hostility"
  },
  "仇人": {
    "pinyin": "chóu rén",
    "definition": "foe; one's personal enemy"
  },
  "愁": {
    "pinyin": "chóu",
    "definition": "to worry about"
  },
  "愁眉苦脸": {
    "pinyin": "chóu méi kǔ liǎn",
    "definition": "to look anxious (idiom); to look miserable"
  },
  "稠": {
    "pinyin": "chóu",
    "definition": "dense; crowded; thick; many"
  },
  "稠密": {
    "pinyin": "chóu mì",
    "definition": "dense"
  },
  "筹": {
    "pinyin": "chóu",
    "definition": "chip (in gambling); token (for counting); ticket; to prepare; to plan; to raise (funds); resource; way; means"
  },
  "筹办": {
    "pinyin": "chóu bàn",
    "definition": "to arrange; to make preparations"
  },
  "筹备": {
    "pinyin": "chóu bèi",
    "definition": "preparations; to get ready for sth"
  },
  "筹措": {
    "pinyin": "chóu cuò",
    "definition": "to raise (money)"
  },
  "筹划": {
    "pinyin": "chóu huà",
    "definition": "to plan and prepare"
  },
  "筹集": {
    "pinyin": "chóu jí",
    "definition": "to collect money; to raise funds"
  },
  "筹码": {
    "pinyin": "chóu mǎ",
    "definition": "bargaining chip; gaming chip; casino token"
  },
  "踌躇": {
    "pinyin": "chóu chú",
    "definition": "to hesitate"
  },
  "丑": {
    "pinyin": "Chǒu",
    "definition": "surname Chou"
  },
  "丑恶": {
    "pinyin": "chǒu è",
    "definition": "ugly; repulsive"
  },
  "丑陋": {
    "pinyin": "chǒu lòu",
    "definition": "ugly"
  },
  "丑闻": {
    "pinyin": "chǒu wén",
    "definition": "scandal"
  },
  "瞅": {
    "pinyin": "chǒu",
    "definition": "(dialect) to look at"
  },
  "臭": {
    "pinyin": "chòu",
    "definition": "stench; smelly; to smell (bad); repulsive; loathsome; terrible; bad; severely; ruthlessly; dud (ammunition)"
  },
  "出版": {
    "pinyin": "chū bǎn",
    "definition": "to publish"
  },
  "出版社": {
    "pinyin": "chū bǎn shè",
    "definition": "publishing house"
  },
  "出差": {
    "pinyin": "chū chāi",
    "definition": "to go on an official or business trip"
  },
  "出厂": {
    "pinyin": "chū chǎng",
    "definition": "to leave the factory (of finished goods)"
  },
  "出场": {
    "pinyin": "chū chǎng",
    "definition": "(of a performer) to come onto the stage to perform; (of an athlete) to enter the arena to compete; (fig.) to enter the scene (e.g. a new product); (of an examinee etc) to leave the venue"
  },
  "出丑": {
    "pinyin": "chū chǒu",
    "definition": "shameful; scandalous; to be humiliated; to make a fool of sb or oneself; to make sb lose face"
  },
  "出道": {
    "pinyin": "chū dào",
    "definition": "to start one's career; (of an entertainer) to make one's debut"
  },
  "出动": {
    "pinyin": "chū dòng",
    "definition": "to start out on a trip; to dispatch troops"
  },
  "出发": {
    "pinyin": "chū fā",
    "definition": "to set off; to start (on a journey)"
  },
  "出发点": {
    "pinyin": "chū fā diǎn",
    "definition": "starting point; (fig.) basis; motive"
  },
  "出访": {
    "pinyin": "chū fǎng",
    "definition": "to go and visit in an official capacity or for investigation"
  },
  "出风头": {
    "pinyin": "chū fēng tou",
    "definition": "to push oneself forward; to seek fame; to be in the limelight; same as 出锋头"
  },
  "出国": {
    "pinyin": "chū guó",
    "definition": "to go abroad; to leave the country"
  },
  "出汗": {
    "pinyin": "chū hàn",
    "definition": "to perspire; to sweat"
  },
  "出境": {
    "pinyin": "chū jìng",
    "definition": "to leave a country or region; outbound (tourism)"
  },
  "出局": {
    "pinyin": "chū jú",
    "definition": "(of a batter) to be put out (in baseball); to be dismissed (in cricket); (of a player or team) to be eliminated from a competition; (fig.) to be weeded out; to get the chop (in a competitive environment)"
  },
  "出具": {
    "pinyin": "chū jù",
    "definition": "to issue (document, certificate etc); to provide"
  },
  "出口": {
    "pinyin": "chū kǒu",
    "definition": "an exit; to speak; to export; (of a ship) to leave port"
  },
  "出口成章": {
    "pinyin": "chū kǒu chéng zhāng",
    "definition": "(idiom) (of one's speech) eloquent; articulate"
  },
  "出来": {
    "pinyin": "chū lái",
    "definition": "to come out; to appear; to arise"
  },
  "出路": {
    "pinyin": "chū lù",
    "definition": "a way out (lit. and fig.); opportunity for advancement; a way forward; outlet (for one's products)"
  },
  "出卖": {
    "pinyin": "chū mài",
    "definition": "to offer for sale; to sell; to sell out; to betray"
  },
  "出毛病": {
    "pinyin": "chū máo bìng",
    "definition": "a problem appears; to break down"
  },
  "出门": {
    "pinyin": "chū mén",
    "definition": "to go out; to leave home; to go on a journey; away from home; (of a woman) to get married"
  },
  "出面": {
    "pinyin": "chū miàn",
    "definition": "to appear personally; to step in; to step forth; to show up"
  },
  "出名": {
    "pinyin": "chū míng",
    "definition": "well-known for sth; to become well known; to make one's mark; to lend one's name (to an event, endeavor etc)"
  },
  "出难题": {
    "pinyin": "chū nán tí",
    "definition": "to raise a tough question"
  },
  "出去": {
    "pinyin": "chū qù",
    "definition": "to go out"
  },
  "出人意料": {
    "pinyin": "chū rén yì liào",
    "definition": "unexpected (idiom); surprising"
  },
  "出任": {
    "pinyin": "chū rèn",
    "definition": "to take up a post; to start in a new job"
  },
  "出入": {
    "pinyin": "chū rù",
    "definition": "to go out and come in; entrance and exit; expenditure and income; discrepancy; inconsistent"
  },
  "出色": {
    "pinyin": "chū sè",
    "definition": "remarkable; outstanding"
  },
  "出山": {
    "pinyin": "chū shān",
    "definition": "to leave the mountain (of a hermit); to come out of obscurity to a government job; to take a leading position"
  },
  "出身": {
    "pinyin": "chū shēn",
    "definition": "to be born of; to come from; family background; class origin"
  },
  "出神": {
    "pinyin": "chū shén",
    "definition": "spellbound; entranced; lost in thought"
  },
  "出生": {
    "pinyin": "chū shēng",
    "definition": "to be born"
  },
  "出示": {
    "pinyin": "chū shì",
    "definition": "to show; to take out and show to others; to display"
  },
  "出事": {
    "pinyin": "chū shì",
    "definition": "to have an accident; to meet with a mishap"
  },
  "出手": {
    "pinyin": "chū shǒu",
    "definition": "to dispose of; to spend (money); to undertake a task"
  },
  "出售": {
    "pinyin": "chū shòu",
    "definition": "to sell; to offer for sale; to put on the market"
  },
  "出台": {
    "pinyin": "chū tái",
    "definition": "to officially launch (a policy, program etc); to appear on stage; to appear publicly; (of a bar girl) to leave with a client"
  },
  "出头": {
    "pinyin": "chū tóu",
    "definition": "to get out of a predicament; to stick out; to take the initiative; remaining odd fraction after a division; a little more than"
  },
  "出土": {
    "pinyin": "chū tǔ",
    "definition": "to dig up; to appear in an excavation; unearthed; to come up out of the ground"
  },
  "出席": {
    "pinyin": "chū xí",
    "definition": "to attend; to participate; present"
  },
  "出息": {
    "pinyin": "chū xī",
    "definition": "to yield interest, profit etc; to exhale (Buddhism)"
  },
  "出现": {
    "pinyin": "chū xiàn",
    "definition": "to appear; to arise; to emerge; to show up"
  },
  "出行": {
    "pinyin": "chū xíng",
    "definition": "to go out somewhere (relatively short trip); to set off on a journey (longer trip)"
  },
  "出血": {
    "pinyin": "chū xuè",
    "definition": "to bleed; bleeding; (fig.) to spend money in large amounts"
  },
  "出演": {
    "pinyin": "chū yǎn",
    "definition": "to appear (in a show etc); an appearance (on stage etc)"
  },
  "出洋相": {
    "pinyin": "chū yáng xiàng",
    "definition": "to make a fool of oneself"
  },
  "出游": {
    "pinyin": "chū yóu",
    "definition": "to go on a tour; to have an outing"
  },
  "出于": {
    "pinyin": "chū yú",
    "definition": "due to; to stem from"
  },
  "出院": {
    "pinyin": "chū yuàn",
    "definition": "to leave hospital; to be discharged from hospital"
  },
  "出众": {
    "pinyin": "chū zhòng",
    "definition": "to stand out; outstanding"
  },
  "出主意": {
    "pinyin": "chū zhǔ yi",
    "definition": "to come up with ideas; to make suggestions; to offer advice"
  },
  "出资": {
    "pinyin": "chū zī",
    "definition": "to fund; to put money into sth; to invest"
  },
  "出自": {
    "pinyin": "chū zì",
    "definition": "to come from"
  },
  "出走": {
    "pinyin": "chū zǒu",
    "definition": "to leave home; to go off; to run away"
  },
  "出租": {
    "pinyin": "chū zū",
    "definition": "to rent"
  },
  "出租车": {
    "pinyin": "chū zū chē",
    "definition": "taxi; (Tw) rental car"
  },
  "初": {
    "pinyin": "chū",
    "definition": "at first; (at the) beginning; first; junior; basic"
  },
  "初步": {
    "pinyin": "chū bù",
    "definition": "initial; preliminary; tentative"
  },
  "初次": {
    "pinyin": "chū cì",
    "definition": "for the first time; first (meeting, attempt etc)"
  },
  "初等": {
    "pinyin": "chū děng",
    "definition": "elementary (i.e. easy)"
  },
  "初级": {
    "pinyin": "chū jí",
    "definition": "junior; primary"
  },
  "初期": {
    "pinyin": "chū qī",
    "definition": "initial stage; beginning period"
  },
  "初一": {
    "pinyin": "chū yī",
    "definition": "first day of lunar month; New Year's Day; first year in junior middle school"
  },
  "初中": {
    "pinyin": "chū zhōng",
    "definition": "junior high school (abbr. for 初级中学)"
  },
  "初衷": {
    "pinyin": "chū zhōng",
    "definition": "original intention"
  },
  "除": {
    "pinyin": "chú",
    "definition": "to get rid of; to remove; to exclude; to eliminate; to wipe out; to divide; except; not including"
  },
  "除此之外": {
    "pinyin": "chú cǐ zhī wài",
    "definition": "apart from this; in addition to this"
  },
  "除非": {
    "pinyin": "chú fēi",
    "definition": "only if (..., or otherwise, ...); only when; only in the case that; unless"
  },
  "除了": {
    "pinyin": "chú le",
    "definition": "besides; apart from (... also...); in addition to; except (for)"
  },
  "除去": {
    "pinyin": "chú qù",
    "definition": "to eliminate; to remove; except for; apart from"
  },
  "除外": {
    "pinyin": "chú wài",
    "definition": "to exclude; not including sth (when counting or listing); except for"
  },
  "除夕": {
    "pinyin": "Chú xī",
    "definition": "lunar New Year's Eve"
  },
  "厨房": {
    "pinyin": "chú fáng",
    "definition": "kitchen"
  },
  "厨师": {
    "pinyin": "chú shī",
    "definition": "cook; chef"
  },
  "储备": {
    "pinyin": "chǔ bèi",
    "definition": "reserves; to store up"
  },
  "储存": {
    "pinyin": "chǔ cún",
    "definition": "stockpile; to store; to stockpile; storage"
  },
  "储蓄": {
    "pinyin": "chǔ xù",
    "definition": "to deposit money; to save; savings"
  },
  "处": {
    "pinyin": "chǔ",
    "definition": "to reside; to live; to dwell; to be in; to be situated at; to stay; to get along with; to be in a position of; to deal with; to discipline; to punish"
  },
  "处处": {
    "pinyin": "chù chù",
    "definition": "everywhere; in all respects"
  },
  "处罚": {
    "pinyin": "chǔ fá",
    "definition": "to penalize; to punish"
  },
  "处方": {
    "pinyin": "chǔ fāng",
    "definition": "medical prescription; to write out a prescription; (fig.) recommendation; advice"
  },
  "处分": {
    "pinyin": "chǔ fèn",
    "definition": "to discipline sb; to punish; disciplinary action; to deal with (a matter)"
  },
  "处境": {
    "pinyin": "chǔ jìng",
    "definition": "situation (of a person)"
  },
  "处理": {
    "pinyin": "chǔ lǐ",
    "definition": "to handle; to deal with; to punish; to treat sth by a special process; to process; to sell at reduced prices"
  },
  "处于": {
    "pinyin": "chǔ yú",
    "definition": "to be in (some state, position, or condition)"
  },
  "处在": {
    "pinyin": "chǔ zài",
    "definition": "to be situated at; to find oneself at"
  },
  "处长": {
    "pinyin": "chù zhǎng",
    "definition": "department head; section chief"
  },
  "处置": {
    "pinyin": "chǔ zhì",
    "definition": "to handle; to take care of; to punish"
  },
  "畜牧": {
    "pinyin": "xù mù",
    "definition": "to raise animals"
  },
  "触动": {
    "pinyin": "chù dòng",
    "definition": "to touch; to stir up (trouble or emotions); to move (sb's emotions or worry)"
  },
  "触犯": {
    "pinyin": "chù fàn",
    "definition": "to violate; to offend"
  },
  "触觉": {
    "pinyin": "chù jué",
    "definition": "sense of touch; tactile sensation"
  },
  "触摸": {
    "pinyin": "chù mō",
    "definition": "to touch"
  },
  "触目惊心": {
    "pinyin": "chù mù jīng xīn",
    "definition": "lit. shocks the eye, astonishes the heart (idiom); shocking; horrible to see; a ghastly sight"
  },
  "揣": {
    "pinyin": "chuāi",
    "definition": "to put into (one's pockets, clothes); Taiwan pr. [chuǎi]"
  },
  "揣测": {
    "pinyin": "chuǎi cè",
    "definition": "to guess; to conjecture"
  },
  "揣摩": {
    "pinyin": "chuǎi mó",
    "definition": "to analyze; to try to figure out; to try to fathom"
  },
  "踹": {
    "pinyin": "chuài",
    "definition": "to kick; to trample; to tread on"
  },
  "川流不息": {
    "pinyin": "chuān liú bù xī",
    "definition": "the stream flows without stopping (idiom); unending flow"
  },
  "穿": {
    "pinyin": "chuān",
    "definition": "to wear; to put on; to dress; to bore through; to pierce; to perforate; to penetrate; to pass through; to thread"
  },
  "穿过": {
    "pinyin": "chuān guò",
    "definition": "to pass through"
  },
  "穿上": {
    "pinyin": "chuān shang",
    "definition": "to put on (clothes etc)"
  },
  "穿小鞋": {
    "pinyin": "chuān xiǎo xié",
    "definition": "lit. to make sb wear tight shoes (idiom); to make life difficult for sb"
  },
  "穿越": {
    "pinyin": "chuān yuè",
    "definition": "to pass through; to traverse; to cross"
  },
  "穿着": {
    "pinyin": "chuān zhuó",
    "definition": "attire; clothes; dress"
  },
  "传": {
    "pinyin": "chuán",
    "definition": "to pass on; to spread; to transmit; to infect; to transfer; to circulate; to conduct (electricity)"
  },
  "传播": {
    "pinyin": "chuán bō",
    "definition": "to disseminate; to propagate; to spread"
  },
  "传承": {
    "pinyin": "chuán chéng",
    "definition": "to pass on (to future generations); passed on (from former times); a continued tradition; an inheritance"
  },
  "传出": {
    "pinyin": "chuán chū",
    "definition": "to transmit outwards; to disseminate; efferent (nerve)"
  },
  "传达": {
    "pinyin": "chuán dá",
    "definition": "to pass on; to convey; to relay; to transmit; transmission"
  },
  "传单": {
    "pinyin": "chuán dān",
    "definition": "leaflet; flier; pamphlet"
  },
  "传递": {
    "pinyin": "chuán dì",
    "definition": "to transmit; to pass on to sb else; (math.) transitive"
  },
  "传记": {
    "pinyin": "zhuàn jì",
    "definition": "biography"
  },
  "传来": {
    "pinyin": "chuán lái",
    "definition": "(of a sound) to come through; to be heard; (of news) to arrive"
  },
  "传媒": {
    "pinyin": "chuán méi",
    "definition": "media"
  },
  "传奇": {
    "pinyin": "chuán qí",
    "definition": "legendary; fantasy saga; romance; short stories of the Tang and Song Dynasty"
  },
  "传染": {
    "pinyin": "chuán rǎn",
    "definition": "to infect; contagious"
  },
  "传染病": {
    "pinyin": "chuán rǎn bìng",
    "definition": "infectious disease; contagious disease; pestilence"
  },
  "传人": {
    "pinyin": "chuán rén",
    "definition": "to teach; to impart; a disciple; descendant"
  },
  "传授": {
    "pinyin": "chuán shòu",
    "definition": "to impart; to pass on; to teach"
  },
  "传输": {
    "pinyin": "chuán shū",
    "definition": "to transmit; transmission"
  },
  "传说": {
    "pinyin": "chuán shuō",
    "definition": "legend; folk tale; to repeat from mouth to mouth; they say that..."
  },
  "传统": {
    "pinyin": "chuán tǒng",
    "definition": "tradition; traditional; convention; conventional"
  },
  "传闻": {
    "pinyin": "chuán wén",
    "definition": "rumor"
  },
  "传言": {
    "pinyin": "chuán yán",
    "definition": "rumor; hearsay"
  },
  "传真": {
    "pinyin": "chuán zhēn",
    "definition": "fax; facsimile"
  },
  "船": {
    "pinyin": "chuán",
    "definition": "variant of 船"
  },
  "船舶": {
    "pinyin": "chuán bó",
    "definition": "shipping; boats"
  },
  "船桨": {
    "pinyin": "chuán jiǎng",
    "definition": "oar"
  },
  "船员": {
    "pinyin": "chuán yuán",
    "definition": "sailor; crew member"
  },
  "船长": {
    "pinyin": "chuán zhǎng",
    "definition": "captain (of a boat); skipper"
  },
  "船只": {
    "pinyin": "chuán zhī",
    "definition": "ship; boat; vessel"
  },
  "喘": {
    "pinyin": "chuǎn",
    "definition": "to gasp; to pant; asthma"
  },
  "喘气": {
    "pinyin": "chuǎn qì",
    "definition": "to breathe deeply; to pant; to gasp; to take a breather; to catch one's breath"
  },
  "喘息": {
    "pinyin": "chuǎn xī",
    "definition": "to gasp for breath; to take a breather"
  },
  "串": {
    "pinyin": "chuàn",
    "definition": "to string together; to skewer; to connect wrongly; to gang up; to rove; string; bunch; skewer; classifier for things that are strung together, or in a bunch, or in a row: string of, bunch of, series of; to make a swift or abrupt linear movement (like a bead on an abacus); to move across"
  },
  "串门": {
    "pinyin": "chuàn mén",
    "definition": "to call on sb; to drop in; to visit sb's home"
  },
  "窗户": {
    "pinyin": "chuāng hu",
    "definition": "window"
  },
  "窗口": {
    "pinyin": "chuāng kǒu",
    "definition": "window; opening providing restricted access (e.g. customer service window); computer operating system window; fig. medium; intermediary; showpiece; testing ground"
  },
  "窗帘": {
    "pinyin": "chuāng lián",
    "definition": "window curtains"
  },
  "窗台": {
    "pinyin": "chuāng tái",
    "definition": "window sill; window ledge"
  },
  "窗子": {
    "pinyin": "chuāng zi",
    "definition": "window"
  },
  "床": {
    "pinyin": "chuáng",
    "definition": "bed; couch; classifier for beds"
  },
  "床单": {
    "pinyin": "chuáng dān",
    "definition": "bed sheet"
  },
  "床位": {
    "pinyin": "chuáng wèi",
    "definition": "bed (in hospital, hotel, train etc); berth; bunk"
  },
  "幢": {
    "pinyin": "chuáng",
    "definition": "banner"
  },
  "闯": {
    "pinyin": "chuǎng",
    "definition": "to rush; to charge; to dash; to break through; to temper oneself (through battling hardships)"
  },
  "创": {
    "pinyin": "chuàng",
    "definition": "variant of 创"
  },
  "创办": {
    "pinyin": "chuàng bàn",
    "definition": "to establish; to found; to launch"
  },
  "创建": {
    "pinyin": "chuàng jiàn",
    "definition": "to found; to establish"
  },
  "创立": {
    "pinyin": "chuàng lì",
    "definition": "to establish; to set up; to found"
  },
  "创伤": {
    "pinyin": "chuāng shāng",
    "definition": "wound; injury; trauma"
  },
  "创始人": {
    "pinyin": "chuàng shǐ rén",
    "definition": "creator; founder; initiator"
  },
  "创新": {
    "pinyin": "chuàng xīn",
    "definition": "to bring forth new ideas; to blaze new trails; innovation"
  },
  "创业": {
    "pinyin": "chuàng yè",
    "definition": "to begin an undertaking; to start a major task; to initiate; to venture; venture; entrepreneurship"
  },
  "创意": {
    "pinyin": "chuàng yì",
    "definition": "creative; creativity"
  },
  "创造": {
    "pinyin": "chuàng zào",
    "definition": "to create; to bring about; to produce; to set (a record)"
  },
  "创作": {
    "pinyin": "chuàng zuò",
    "definition": "to create; to produce; to write; creative work; creation"
  },
  "吹": {
    "pinyin": "chuī",
    "definition": "to blow; to play a wind instrument; to blast; to puff; to boast; to brag; to end in failure; to fall through"
  },
  "吹了": {
    "pinyin": "chuī le",
    "definition": "failed; busted; to have not succeeded; to have died; to have parted company; to have chilled (of a relationship)"
  },
  "吹牛": {
    "pinyin": "chuī niú",
    "definition": "to talk big; to shoot off one's mouth; to chat (dialect)"
  },
  "吹捧": {
    "pinyin": "chuī pěng",
    "definition": "to flatter; to laud sb's accomplishments; adulation"
  },
  "垂": {
    "pinyin": "chuí",
    "definition": "to hang (down); droop; dangle; bend down; hand down; bequeath; nearly; almost; to approach"
  },
  "垂头丧气": {
    "pinyin": "chuí tóu sàng qì",
    "definition": "hanging one's head dispiritedly (idiom); dejected; crestfallen"
  },
  "垂直": {
    "pinyin": "chuí zhí",
    "definition": "perpendicular; vertical"
  },
  "捶": {
    "pinyin": "chuí",
    "definition": "to beat (with a stick or one's fist); to thump; to pound"
  },
  "锤": {
    "pinyin": "chuí",
    "definition": "hammer; to hammer into shape; weight (e.g. of a steelyard or balance); to strike with a hammer"
  },
  "锤子": {
    "pinyin": "chuí zi",
    "definition": "hammer"
  },
  "春": {
    "pinyin": "chūn",
    "definition": "old variant of 春"
  },
  "春季": {
    "pinyin": "chūn jì",
    "definition": "springtime"
  },
  "春节": {
    "pinyin": "Chūn jié",
    "definition": "Spring Festival (Chinese New Year)"
  },
  "春天": {
    "pinyin": "chūn tiān",
    "definition": "spring (season)"
  },
  "纯": {
    "pinyin": "chún",
    "definition": "pure; simple; unmixed; genuine"
  },
  "纯粹": {
    "pinyin": "chún cuì",
    "definition": "pure; unadulterated; purely; completely"
  },
  "纯洁": {
    "pinyin": "chún jié",
    "definition": "pure; clean and honest; to purify"
  },
  "纯净水": {
    "pinyin": "chún jìng shuǐ",
    "definition": "purified water"
  },
  "纯朴": {
    "pinyin": "chún pǔ",
    "definition": "variant of 淳朴"
  },
  "醇厚": {
    "pinyin": "chún hòu",
    "definition": "mellow and rich; simple and kind"
  },
  "蠢": {
    "pinyin": "chǔn",
    "definition": "variant of 蠢; stupid"
  },
  "戳": {
    "pinyin": "chuō",
    "definition": "to jab; to poke; to stab; (coll.) to sprain; to blunt; to fuck (vulgar); to stand; to stand (sth) upright; stamp; seal"
  },
  "绰号": {
    "pinyin": "chuò hào",
    "definition": "nickname"
  },
  "词": {
    "pinyin": "cí",
    "definition": "old variant of 词"
  },
  "词典": {
    "pinyin": "cí diǎn",
    "definition": "dictionary; also written 辞典"
  },
  "词汇": {
    "pinyin": "cí huì",
    "definition": "variant of 词汇"
  },
  "词语": {
    "pinyin": "cí yǔ",
    "definition": "word (general term including monosyllables through to short phrases); term (e.g. technical term); expression"
  },
  "瓷": {
    "pinyin": "cí",
    "definition": "chinaware; porcelain; china"
  },
  "瓷器": {
    "pinyin": "cí qì",
    "definition": "chinaware; porcelain"
  },
  "慈善": {
    "pinyin": "cí shàn",
    "definition": "benevolent; charitable"
  },
  "慈祥": {
    "pinyin": "cí xiáng",
    "definition": "kindly; benevolent (often of older person)"
  },
  "辞": {
    "pinyin": "cí",
    "definition": "old variant of 辞"
  },
  "辞呈": {
    "pinyin": "cí chéng",
    "definition": "(written) resignation"
  },
  "辞典": {
    "pinyin": "cí diǎn",
    "definition": "dictionary (variant of 词典)"
  },
  "辞去": {
    "pinyin": "cí qù",
    "definition": "to resign; to quit"
  },
  "辞退": {
    "pinyin": "cí tuì",
    "definition": "to dismiss; to discharge; to fire"
  },
  "辞职": {
    "pinyin": "cí zhí",
    "definition": "to resign"
  },
  "磁带": {
    "pinyin": "cí dài",
    "definition": "magnetic tape"
  },
  "磁卡": {
    "pinyin": "cí kǎ",
    "definition": "magnetic card; IC Card (telephone)"
  },
  "磁盘": {
    "pinyin": "cí pán",
    "definition": "(computer) disk"
  },
  "雌雄": {
    "pinyin": "cí xióng",
    "definition": "male and female"
  },
  "此": {
    "pinyin": "cǐ",
    "definition": "this; these"
  },
  "此处": {
    "pinyin": "cǐ chù",
    "definition": "this place; here (literary)"
  },
  "此次": {
    "pinyin": "cǐ cì",
    "definition": "this time"
  },
  "此后": {
    "pinyin": "cǐ hòu",
    "definition": "after this; afterwards; hereafter"
  },
  "此刻": {
    "pinyin": "cǐ kè",
    "definition": "this moment; now; at present"
  },
  "此起彼伏": {
    "pinyin": "cǐ qǐ bǐ fú",
    "definition": "up here, down there (idiom); to rise and fall in succession; no sooner one subsides, the next arises; repeating continuously; occurring again and again (of applause, fires, waves, protests, conflicts, uprisings etc)"
  },
  "此前": {
    "pinyin": "cǐ qián",
    "definition": "before this; before then; previously"
  },
  "此时": {
    "pinyin": "cǐ shí",
    "definition": "now; this moment"
  },
  "此事": {
    "pinyin": "cǐ shì",
    "definition": "this matter"
  },
  "此外": {
    "pinyin": "cǐ wài",
    "definition": "besides; in addition; moreover; furthermore"
  },
  "此致": {
    "pinyin": "cǐ zhì",
    "definition": "(used at the end of a letter to introduce a polite salutation)"
  },
  "次": {
    "pinyin": "cì",
    "definition": "next in sequence; second; the second (day, time etc); secondary; vice-; sub-; infra-; inferior quality; substandard; order; sequence; hypo- (chemistry); classifier for enumerated events: time"
  },
  "次品": {
    "pinyin": "cì pǐn",
    "definition": "substandard products; defective; seconds"
  },
  "次日": {
    "pinyin": "cì rì",
    "definition": "next day; the morrow"
  },
  "次数": {
    "pinyin": "cì shù",
    "definition": "number of times; frequency; order number (in a series); power (math.); degree of a polynomial (math.)"
  },
  "次序": {
    "pinyin": "cì xù",
    "definition": "sequence; order"
  },
  "次要": {
    "pinyin": "cì yào",
    "definition": "secondary"
  },
  "伺候": {
    "pinyin": "cì hou",
    "definition": "to serve; to wait upon"
  },
  "伺机": {
    "pinyin": "sì jī",
    "definition": "to wait for an opportunity; to watch for one's chance"
  },
  "刺": {
    "pinyin": "cī",
    "definition": "(onom.) whoosh"
  },
  "刺耳": {
    "pinyin": "cì ěr",
    "definition": "ear-piercing"
  },
  "刺骨": {
    "pinyin": "cì gǔ",
    "definition": "piercing; cutting; bone-chilling; penetrating (cold)"
  },
  "刺激": {
    "pinyin": "cì jī",
    "definition": "to provoke; to irritate; to upset; to stimulate; to excite; irritant"
  },
  "刺绣": {
    "pinyin": "cì xiù",
    "definition": "to embroider; embroidery"
  },
  "赐": {
    "pinyin": "cì",
    "definition": "to confer; to bestow; to grant; Taiwan pr. [sì]"
  },
  "赐教": {
    "pinyin": "cì jiào",
    "definition": "(honorific) to impart one's wisdom; to enlighten"
  },
  "匆匆": {
    "pinyin": "cōng cōng",
    "definition": "hurriedly"
  },
  "匆忙": {
    "pinyin": "cōng máng",
    "definition": "hasty; hurried"
  },
  "葱": {
    "pinyin": "cōng",
    "definition": "scallion; green onion"
  },
  "聪明": {
    "pinyin": "cōng ming",
    "definition": "intelligent; clever; bright; smart; acute (of sight and hearing)"
  },
  "从不": {
    "pinyin": "cóng bù",
    "definition": "never"
  },
  "从此": {
    "pinyin": "cóng cǐ",
    "definition": "from now on; since then; henceforth"
  },
  "从而": {
    "pinyin": "cóng ér",
    "definition": "thus; thereby"
  },
  "从今以后": {
    "pinyin": "cóng jīn yǐ hòu",
    "definition": "from now on; henceforward"
  },
  "从来": {
    "pinyin": "cóng lái",
    "definition": "always; at all times; never (if used in negative sentence)"
  },
  "从来不": {
    "pinyin": "cóng lái bù",
    "definition": "never"
  },
  "从没": {
    "pinyin": "cóng méi",
    "definition": "never (in the past); never did"
  },
  "从前": {
    "pinyin": "cóng qián",
    "definition": "previously; formerly; once upon a time"
  },
  "从容": {
    "pinyin": "cóng róng",
    "definition": "to go easy; unhurried; calm; Taiwan pr. [cōng róng]"
  },
  "从容不迫": {
    "pinyin": "cóng róng bù pò",
    "definition": "calm; unruffled"
  },
  "从事": {
    "pinyin": "cóng shì",
    "definition": "to go for; to engage in; to undertake; to deal with; to handle; to do"
  },
  "从头": {
    "pinyin": "cóng tóu",
    "definition": "anew; from the start"
  },
  "从未": {
    "pinyin": "cóng wèi",
    "definition": "never"
  },
  "从小": {
    "pinyin": "cóng xiǎo",
    "definition": "from childhood; from a young age"
  },
  "从业": {
    "pinyin": "cóng yè",
    "definition": "to practice (a trade)"
  },
  "从早到晚": {
    "pinyin": "cóng zǎo dào wǎn",
    "definition": "from morning till night; from dawn to dusk; all day long"
  },
  "从中": {
    "pinyin": "cóng zhōng",
    "definition": "from within; therefrom"
  },
  "丛": {
    "pinyin": "cóng",
    "definition": "cluster; collection; collection of books; thicket"
  },
  "丛林": {
    "pinyin": "cóng lín",
    "definition": "jungle; thicket; forest; Buddhist monastery"
  },
  "凑": {
    "pinyin": "còu",
    "definition": "to gather together, pool or collect; to happen by chance; to move close to; to exploit an opportunity"
  },
  "凑合": {
    "pinyin": "còu he",
    "definition": "to bring together; to make do in a bad situation; to just get by; to improvise; passable; not too bad"
  },
  "凑巧": {
    "pinyin": "còu qiǎo",
    "definition": "fortuitously; luckily; as chance has it"
  },
  "粗": {
    "pinyin": "cū",
    "definition": "coarse; rough; thick (for cylindrical objects); unfinished; vulgar; rude; crude"
  },
  "粗暴": {
    "pinyin": "cū bào",
    "definition": "rough; cruel"
  },
  "粗糙": {
    "pinyin": "cū cāo",
    "definition": "crude; gruff; rough; coarse"
  },
  "粗略": {
    "pinyin": "cū lu:è",
    "definition": "rough (not precise or accurate); cursory"
  },
  "粗鲁": {
    "pinyin": "cū lǔ",
    "definition": "coarse; crude (in one's manner); boorish"
  },
  "粗心": {
    "pinyin": "cū xīn",
    "definition": "careless; thoughtless"
  },
  "粗心大意": {
    "pinyin": "cū xīn dà yì",
    "definition": "negligent; careless; inadvertent"
  },
  "促成": {
    "pinyin": "cù chéng",
    "definition": "to facilitate; to effect"
  },
  "促进": {
    "pinyin": "cù jìn",
    "definition": "to promote (an idea or cause); to advance; boost"
  },
  "促使": {
    "pinyin": "cù shǐ",
    "definition": "to induce; to promote; to urge; to impel; to bring about; to provoke; to drive (sb to do sth); to catalyze; to actuate; to contribute to (some development)"
  },
  "促销": {
    "pinyin": "cù xiāo",
    "definition": "to promote sales"
  },
  "醋": {
    "pinyin": "cù",
    "definition": "vinegar; jealousy (in love rivalry)"
  },
  "簇拥": {
    "pinyin": "cù yōng",
    "definition": "to crowd around; to escort"
  },
  "窜": {
    "pinyin": "cuàn",
    "definition": "to flee; to scuttle; to exile or banish; to amend or edit"
  },
  "催": {
    "pinyin": "cuī",
    "definition": "to urge; to press; to prompt; to rush sb; to hasten sth; to expedite"
  },
  "催促": {
    "pinyin": "cuī cù",
    "definition": "to urge"
  },
  "催眠": {
    "pinyin": "cuī mián",
    "definition": "hypnosis"
  },
  "摧残": {
    "pinyin": "cuī cán",
    "definition": "to ravage; to ruin"
  },
  "摧毁": {
    "pinyin": "cuī huǐ",
    "definition": "to destroy; to wreck"
  },
  "脆": {
    "pinyin": "cuì",
    "definition": "old variant of 脆"
  },
  "脆弱": {
    "pinyin": "cuì ruò",
    "definition": "weak; frail"
  },
  "翠绿": {
    "pinyin": "cuì lu:4",
    "definition": "greenish-blue; emerald green"
  },
  "村": {
    "pinyin": "cūn",
    "definition": "village"
  },
  "村庄": {
    "pinyin": "cūn zhuāng",
    "definition": "village; hamlet"
  },
  "存": {
    "pinyin": "cún",
    "definition": "to exist; to deposit; to store; to keep; to survive"
  },
  "存放": {
    "pinyin": "cún fàng",
    "definition": "to deposit; to store; to leave in sb's care"
  },
  "存款": {
    "pinyin": "cún kuǎn",
    "definition": "to deposit money (in a bank etc); bank savings; bank deposit"
  },
  "存心": {
    "pinyin": "cún xīn",
    "definition": "deliberately"
  },
  "存在": {
    "pinyin": "cún zài",
    "definition": "to exist; to be; existence"
  },
  "存折": {
    "pinyin": "cún zhé",
    "definition": "passbook; bankbook"
  },
  "寸": {
    "pinyin": "cùn",
    "definition": "a unit of length; inch; thumb"
  },
  "搓": {
    "pinyin": "cuō",
    "definition": "to rub or roll between the hands or fingers; to twist"
  },
  "磋商": {
    "pinyin": "cuō shāng",
    "definition": "to consult; to discuss seriously; to negotiate; to confer; negotiations; consultations"
  },
  "挫折": {
    "pinyin": "cuò zhé",
    "definition": "setback; reverse; check; defeat; frustration; disappointment; to frustrate; to discourage; to set sb back; to blunt; to subdue"
  },
  "措施": {
    "pinyin": "cuò shī",
    "definition": "measure; step"
  },
  "措手不及": {
    "pinyin": "cuò shǒu bù jí",
    "definition": "no time to deal with it (idiom); caught unprepared"
  },
  "错": {
    "pinyin": "Cuò",
    "definition": "surname Cuo"
  },
  "错别字": {
    "pinyin": "cuò bié zì",
    "definition": "incorrectly written or mispronounced characters"
  },
  "错过": {
    "pinyin": "cuò guò",
    "definition": "to miss (train, opportunity etc)"
  },
  "错觉": {
    "pinyin": "cuò jué",
    "definition": "misconception; illusion; misperception"
  },
  "错位": {
    "pinyin": "cuò wèi",
    "definition": "to be wrongly positioned; to be dislocated; to be misplaced; (medicine) to be in malposition; (fig.) erroneous; eccentric"
  },
  "错误": {
    "pinyin": "cuò wù",
    "definition": "mistaken; false; wrong; error; mistake"
  },
  "错综复杂": {
    "pinyin": "cuò zōng fù zá",
    "definition": "tangled and complicated (idiom)"
  },
  "搭": {
    "pinyin": "dā",
    "definition": "to put up; to build (scaffolding); to hang (clothes on a pole); to connect; to join; to arrange in pairs; to match; to add; to throw in (resources); to take (boat, train); variant of 褡"
  },
  "搭乘": {
    "pinyin": "dā chéng",
    "definition": "to ride as a passenger; to travel by (car, plane etc)"
  },
  "搭档": {
    "pinyin": "dā dàng",
    "definition": "to cooperate; partner"
  },
  "搭建": {
    "pinyin": "dā jiàn",
    "definition": "to build (esp. with simple materials); to knock together (a temporary shed); to rig up"
  },
  "搭配": {
    "pinyin": "dā pèi",
    "definition": "to pair up; to match; to arrange in pairs; to add sth into a group"
  },
  "达标": {
    "pinyin": "dá biāo",
    "definition": "to reach a set standard"
  },
  "达成": {
    "pinyin": "dá chéng",
    "definition": "to reach (an agreement); to accomplish"
  },
  "达到": {
    "pinyin": "dá dào",
    "definition": "to reach; to achieve; to attain"
  },
  "答": {
    "pinyin": "dā",
    "definition": "bound form having the same meaning as the free word 答, used in 答应, 理 etc"
  },
  "答案": {
    "pinyin": "dá àn",
    "definition": "answer; solution"
  },
  "答辩": {
    "pinyin": "dá biàn",
    "definition": "to reply (to an accusation); to defend one's dissertation"
  },
  "答复": {
    "pinyin": "dá fù",
    "definition": "variant of 答复"
  },
  "答应": {
    "pinyin": "dā ying",
    "definition": "to answer; to respond; to answer positively; to agree; to accept; to promise"
  },
  "打": {
    "pinyin": "dá",
    "definition": "dozen (loanword)"
  },
  "打败": {
    "pinyin": "dǎ bài",
    "definition": "to defeat; to overpower; to beat; to be defeated"
  },
  "打扮": {
    "pinyin": "dǎ ban",
    "definition": "to decorate; to dress; to make up; to adorn; manner of dressing; style of dress"
  },
  "打包": {
    "pinyin": "dǎ bāo",
    "definition": "to wrap; to pack; to put leftovers in a doggy bag for take-out; (computing) to package (i.e. create an archive file)"
  },
  "打岔": {
    "pinyin": "dǎ chà",
    "definition": "interruption; to interrupt (esp. talk); to change the subject"
  },
  "打车": {
    "pinyin": "dǎ chē",
    "definition": "to take a taxi (in town); to hitch a lift"
  },
  "打倒": {
    "pinyin": "dǎ dǎo",
    "definition": "to overthrow; to knock down; Down with ... !"
  },
  "打电话": {
    "pinyin": "dǎ diàn huà",
    "definition": "to make a telephone call"
  },
  "打动": {
    "pinyin": "dǎ dòng",
    "definition": "to move (to pity); arousing (sympathy); touching"
  },
  "打断": {
    "pinyin": "dǎ duàn",
    "definition": "to interrupt; to break off; to break (a bone)"
  },
  "打盹儿": {
    "pinyin": "dǎ dǔn r",
    "definition": "erhua variant of 盹"
  },
  "打发": {
    "pinyin": "dǎ fa",
    "definition": "to dispatch sb to do sth; to make sb leave; to pass (the time); (old) to make arrangements; (old) to bestow (alms etc)"
  },
  "打工": {
    "pinyin": "dǎ gōng",
    "definition": "to work a temporary or casual job; (of students) to have a job outside of class time, or during vacation"
  },
  "打官司": {
    "pinyin": "dǎ guān si",
    "definition": "to file a lawsuit; to sue; to dispute"
  },
  "打击": {
    "pinyin": "dǎ jī",
    "definition": "to hit; to strike; to attack; to crack down on sth; blow; (psychological) shock; percussion (music)"
  },
  "打架": {
    "pinyin": "dǎ jià",
    "definition": "to fight; to scuffle; to come to blows"
  },
  "打交道": {
    "pinyin": "dǎ jiāo dào",
    "definition": "to come into contact with; to have dealings"
  },
  "打搅": {
    "pinyin": "dǎ jiǎo",
    "definition": "to disturb; to trouble; to bother"
  },
  "打开": {
    "pinyin": "dǎ kāi",
    "definition": "to open; to show (a ticket); to turn on; to switch on"
  },
  "打篮球": {
    "pinyin": "dǎ lán qiú",
    "definition": "to play basketball"
  },
  "打捞": {
    "pinyin": "dǎ lāo",
    "definition": "to salvage; to dredge; to fish out (person or object from the sea)"
  },
  "打雷": {
    "pinyin": "dǎ léi",
    "definition": "to rumble with thunder; clap of thunder"
  },
  "打量": {
    "pinyin": "dǎ liang",
    "definition": "to size sb up; to look sb up and down; to take the measure of; to suppose; to reckon"
  },
  "打猎": {
    "pinyin": "dǎ liè",
    "definition": "to go hunting"
  },
  "打磨": {
    "pinyin": "dǎ mó",
    "definition": "to polish; to burnish; to shine"
  },
  "打牌": {
    "pinyin": "dǎ pái",
    "definition": "to play mahjong or cards"
  },
  "打喷嚏": {
    "pinyin": "dǎ pēn tì",
    "definition": "to sneeze"
  },
  "打破": {
    "pinyin": "dǎ pò",
    "definition": "to break; to smash"
  },
  "打球": {
    "pinyin": "dǎ qiú",
    "definition": "to play ball; to play with a ball"
  },
  "打扰": {
    "pinyin": "dǎ rǎo",
    "definition": "to disturb; to bother; to trouble"
  },
  "打扫": {
    "pinyin": "dǎ sǎo",
    "definition": "to clean; to sweep"
  },
  "打算": {
    "pinyin": "dǎ suàn",
    "definition": "to plan; to intend; to calculate; plan; intention; calculation"
  },
  "打听": {
    "pinyin": "dǎ ting",
    "definition": "to ask about; to make some inquiries; to ask around"
  },
  "打通": {
    "pinyin": "dǎ tōng",
    "definition": "to open access; to establish contact; to remove a block; to put through (a phone connection)"
  },
  "打印": {
    "pinyin": "dǎ yìn",
    "definition": "to affix a seal; to stamp; to print out (with a printer)"
  },
  "打印机": {
    "pinyin": "dǎ yìn jī",
    "definition": "printer"
  },
  "打造": {
    "pinyin": "dǎ zào",
    "definition": "to create; to build; to develop; to forge (of metal)"
  },
  "打仗": {
    "pinyin": "dǎ zhàng",
    "definition": "to fight a battle; to go to war"
  },
  "打招呼": {
    "pinyin": "dǎ zhāo hu",
    "definition": "to greet sb by word or action; to give prior notice"
  },
  "打折": {
    "pinyin": "dǎ zhé",
    "definition": "to give a discount"
  },
  "打针": {
    "pinyin": "dǎ zhēn",
    "definition": "to give or have an injection"
  },
  "大巴": {
    "pinyin": "dà bā",
    "definition": "(coll.) large bus; coach; (abbr. for 大型巴士)"
  },
  "大包大揽": {
    "pinyin": "dà bāo dà lǎn",
    "definition": "to take complete charge (idiom)"
  },
  "大笔": {
    "pinyin": "dàbǐ",
    "definition": "Large"
  },
  "大不了": {
    "pinyin": "dà bù liǎo",
    "definition": "at worst; if worst comes to worst; (usu. in the negative) serious; alarming"
  },
  "大部分": {
    "pinyin": "dà bù fen",
    "definition": "in large part; the greater part; the majority"
  },
  "大臣": {
    "pinyin": "dà chén",
    "definition": "chancellor (of a monarchy); cabinet minister"
  },
  "大吃一惊": {
    "pinyin": "dà chī yī jīng",
    "definition": "to have a surprise (idiom); shocked or startled; gobsmacked"
  },
  "大大": {
    "pinyin": "dà dà",
    "definition": "greatly; enormously; (dialect) dad; uncle"
  },
  "大大咧咧": {
    "pinyin": "dà dà liē liē",
    "definition": "carefree; offhand; casual"
  },
  "大胆": {
    "pinyin": "dà dǎn",
    "definition": "brazen; audacious; outrageous; bold; daring; fearless"
  },
  "大道": {
    "pinyin": "dà dào",
    "definition": "main street; avenue"
  },
  "大地": {
    "pinyin": "dà dì",
    "definition": "earth; mother earth"
  },
  "大都": {
    "pinyin": "Dà dū",
    "definition": "Dadu, capital of China during the Yuan Dynasty (1280-1368), modern day Beijing"
  },
  "大队": {
    "pinyin": "dà duì",
    "definition": "group; a large body of; production brigade; military group"
  },
  "大多": {
    "pinyin": "dà duō",
    "definition": "for the most part; many; most; the greater part; mostly"
  },
  "大多数": {
    "pinyin": "dà duō shù",
    "definition": "(great) majority"
  },
  "大方": {
    "pinyin": "dà fāng",
    "definition": "expert; scholar; mother earth; a type of green tea"
  },
  "大幅度": {
    "pinyin": "dà fú dù",
    "definition": "by a wide margin; substantial"
  },
  "大夫": {
    "pinyin": "dà fū",
    "definition": "senior official (in imperial China)"
  },
  "大概": {
    "pinyin": "dà gài",
    "definition": "roughly; probably; rough; approximate; about; general idea"
  },
  "大纲": {
    "pinyin": "dà gāng",
    "definition": "synopsis; outline; program; leading principles"
  },
  "大哥": {
    "pinyin": "dà gē",
    "definition": "eldest brother; big brother (polite address for a man of about the same age as oneself); gang leader; boss"
  },
  "大公无私": {
    "pinyin": "dà gōng wú sī",
    "definition": "selfless; impartial"
  },
  "大规模": {
    "pinyin": "dà guī mó",
    "definition": "large scale; extensive; wide scale; broad scale"
  },
  "大海": {
    "pinyin": "dà hǎi",
    "definition": "sea; ocean"
  },
  "大会": {
    "pinyin": "dà huì",
    "definition": "general assembly; general meeting; convention"
  },
  "大伙儿": {
    "pinyin": "dà huǒ r",
    "definition": "erhua variant of 伙"
  },
  "大家": {
    "pinyin": "dà jiā",
    "definition": "everyone; influential family; great expert"
  },
  "大家庭": {
    "pinyin": "dà jiā tíng",
    "definition": "extended family; big family; harmonious group"
  },
  "大奖赛": {
    "pinyin": "dà jiǎng sài",
    "definition": "grand prix"
  },
  "大街": {
    "pinyin": "dà jiē",
    "definition": "street; main street"
  },
  "大街小巷": {
    "pinyin": "dà jiē xiǎo xiàng",
    "definition": "great streets and small alleys (idiom); everywhere in the city"
  },
  "大姐": {
    "pinyin": "dà jiě",
    "definition": "big sister; elder sister; older sister (also polite term of address for a girl or woman slightly older than the speaker)"
  },
  "大惊小怪": {
    "pinyin": "dà jīng xiǎo guài",
    "definition": "to make a fuss about nothing (idiom)"
  },
  "大局": {
    "pinyin": "dà jú",
    "definition": "overall situation; the big picture"
  },
  "大款": {
    "pinyin": "dà kuǎn",
    "definition": "very wealthy person"
  },
  "大力": {
    "pinyin": "dà lì",
    "definition": "energetically; vigorously"
  },
  "大量": {
    "pinyin": "dà liàng",
    "definition": "great amount; large quantity; bulk; numerous; generous; magnanimous"
  },
  "大楼": {
    "pinyin": "dà lóu",
    "definition": "building (a relatively large, multistory one)"
  },
  "大陆": {
    "pinyin": "Dà lù",
    "definition": "mainland China (reference to the PRC)"
  },
  "大妈": {
    "pinyin": "dà mā",
    "definition": "father's elder brother's wife; aunt (affectionate term for an elderly woman)"
  },
  "大门": {
    "pinyin": "Dà mén",
    "definition": "the Doors, US rock band"
  },
  "大米": {
    "pinyin": "dà mǐ",
    "definition": "(husked) rice"
  },
  "大面积": {
    "pinyin": "dà miàn jī",
    "definition": "large area; (fig.) (of a problem) (occurring) on a massive scale"
  },
  "大名鼎鼎": {
    "pinyin": "dà míng dǐng dǐng",
    "definition": "grand reputation; renowned; famous"
  },
  "大模大样": {
    "pinyin": "dà mú dà yàng",
    "definition": "boldly; ostentatiously; poised; self-assured; Taiwan pr. [dà mó dà yàng]"
  },
  "大脑": {
    "pinyin": "dà nǎo",
    "definition": "brain; cerebrum"
  },
  "大棚": {
    "pinyin": "dà péng",
    "definition": "greenhouse; polytunnel"
  },
  "大批": {
    "pinyin": "dà pī",
    "definition": "large quantities of"
  },
  "大片": {
    "pinyin": "dà piàn",
    "definition": "wide expanse; large area; vast stretch; extending widely; blockbuster movie"
  },
  "大气": {
    "pinyin": "dà qì",
    "definition": "atmosphere (surrounding the earth); imposing; impressive; stylish"
  },
  "大人": {
    "pinyin": "dà ren",
    "definition": "adult; grownup; title of respect toward superiors"
  },
  "大赛": {
    "pinyin": "dà sài",
    "definition": "grand contest"
  },
  "大厦": {
    "pinyin": "dà shà",
    "definition": "(used in the names of grand buildings such as 百老汇大厦 Broadway Mansions (in Shanghai) or 帝国大厦 Empire State Building etc)"
  },
  "大声": {
    "pinyin": "dà shēng",
    "definition": "loud voice; in a loud voice; loudly"
  },
  "大师": {
    "pinyin": "dà shī",
    "definition": "great master; master"
  },
  "大使": {
    "pinyin": "dà shǐ",
    "definition": "ambassador; envoy"
  },
  "大使馆": {
    "pinyin": "dà shǐ guǎn",
    "definition": "embassy"
  },
  "大事": {
    "pinyin": "dà shì",
    "definition": "major event; major political event (war or change of regime); major social event (wedding or funeral); (do sth) in a big way"
  },
  "大数据": {
    "pinyin": "dà shù jù",
    "definition": "big data (computing)"
  },
  "大肆": {
    "pinyin": "dà sì",
    "definition": "wantonly; without restraint (of enemy or malefactor); unbridled"
  },
  "大体": {
    "pinyin": "dà tǐ",
    "definition": "in general; more or less; in rough terms; basically; on the whole; overall situation; the big picture; cadaver for dissection in training medical students"
  },
  "大体上": {
    "pinyin": "dà tǐ shàng",
    "definition": "overall; in general terms"
  },
  "大厅": {
    "pinyin": "dà tīng",
    "definition": "hall; lounge"
  },
  "大同小异": {
    "pinyin": "dà tóng xiǎo yì",
    "definition": "virtually the same; differing only on small points"
  },
  "大腕儿": {
    "pinyin": "dà wàn r",
    "definition": "erhua variant of 腕"
  },
  "大象": {
    "pinyin": "dà xiàng",
    "definition": "elephant"
  },
  "大小": {
    "pinyin": "dà xiǎo",
    "definition": "dimension; magnitude; size; measurement; large and small; at any rate; adults and children; consideration of seniority"
  },
  "大型": {
    "pinyin": "dà xíng",
    "definition": "large; large-scale"
  },
  "大熊猫": {
    "pinyin": "dà xióng māo",
    "definition": "giant panda (Ailuropoda melanoleuca)"
  },
  "大选": {
    "pinyin": "dà xuǎn",
    "definition": "general election"
  },
  "大学": {
    "pinyin": "Dà xué",
    "definition": "the Great Learning, one of the Four Books 四书 in Confucianism"
  },
  "大学生": {
    "pinyin": "dà xué shēng",
    "definition": "university student; college student"
  },
  "大雁": {
    "pinyin": "dà yàn",
    "definition": "wild goose"
  },
  "大爷": {
    "pinyin": "dà yé",
    "definition": "arrogant idler; self-centered show-off"
  },
  "大衣": {
    "pinyin": "dà yī",
    "definition": "overcoat; topcoat; cloak"
  },
  "大意": {
    "pinyin": "dà yì",
    "definition": "general idea; main idea"
  },
  "大有可为": {
    "pinyin": "dà yǒu kě wéi",
    "definition": "with great prospects for the future (idiom); well worth doing"
  },
  "大于": {
    "pinyin": "dà yú",
    "definition": "greater than; bigger than; more than"
  },
  "大约": {
    "pinyin": "dà yuē",
    "definition": "approximately; probably"
  },
  "大致": {
    "pinyin": "dà zhì",
    "definition": "more or less; roughly; approximately"
  },
  "大众": {
    "pinyin": "Dà zhòng",
    "definition": "Volkswagen (automobile manufacturer)"
  },
  "大自然": {
    "pinyin": "dà zì rán",
    "definition": "nature (the natural world)"
  },
  "大宗": {
    "pinyin": "dà zōng",
    "definition": "large amount; staple; influential family of long standing"
  },
  "呆": {
    "pinyin": "dāi",
    "definition": "foolish; stupid; expressionless; blank; to stay"
  },
  "歹徒": {
    "pinyin": "dǎi tú",
    "definition": "evildoer; malefactor; gangster; hoodlum"
  },
  "逮": {
    "pinyin": "dǎi",
    "definition": "(coll.) to catch; to seize"
  },
  "逮捕": {
    "pinyin": "dài bǔ",
    "definition": "to arrest; to apprehend; an arrest"
  },
  "代": {
    "pinyin": "dài",
    "definition": "to substitute; to act on behalf of others; to replace; generation; dynasty; age; period; (historical) era; (geological) eon"
  },
  "代表": {
    "pinyin": "dài biǎo",
    "definition": "representative; delegate; to represent; to stand for; on behalf of; in the name of"
  },
  "代表团": {
    "pinyin": "dài biǎo tuán",
    "definition": "delegation"
  },
  "代号": {
    "pinyin": "dài hào",
    "definition": "code name"
  },
  "代价": {
    "pinyin": "dài jià",
    "definition": "price; cost; consideration (in share dealing)"
  },
  "代理": {
    "pinyin": "dài lǐ",
    "definition": "to act on behalf of sb in a responsible position; to act as an agent or proxy; surrogate; (computing) proxy"
  },
  "代理人": {
    "pinyin": "dài lǐ rén",
    "definition": "agent"
  },
  "代替": {
    "pinyin": "dài tì",
    "definition": "to replace; to take the place of"
  },
  "代言人": {
    "pinyin": "dài yán rén",
    "definition": "spokesperson"
  },
  "带": {
    "pinyin": "dài",
    "definition": "band; belt; girdle; ribbon; tire; area; zone; region; to wear; to carry; to take along; to bear (i.e. to have); to lead; to bring; to look after; to raise"
  },
  "带动": {
    "pinyin": "dài dòng",
    "definition": "to spur; to provide impetus; to drive"
  },
  "带队": {
    "pinyin": "dài duì",
    "definition": "to lead a team; to lead a group; group leader; (tourism) tour guide"
  },
  "带来": {
    "pinyin": "dài lái",
    "definition": "to bring; (fig.) to bring about; to produce"
  },
  "带领": {
    "pinyin": "dài lǐng",
    "definition": "to guide; to lead"
  },
  "带路": {
    "pinyin": "dài lù",
    "definition": "to lead the way; to guide; to show the way; (fig.) to instruct"
  },
  "带头": {
    "pinyin": "dài tóu",
    "definition": "to take the lead; to be the first; to set an example"
  },
  "带头人": {
    "pinyin": "dài tóu rén",
    "definition": "leader"
  },
  "带有": {
    "pinyin": "dài yǒu",
    "definition": "to have as a feature or characteristic; to have an element of (confidence, sweetness, malevolence etc); to carry (a pathogen, connotation etc)"
  },
  "待": {
    "pinyin": "dāi",
    "definition": "to stay"
  },
  "待会儿": {
    "pinyin": "dāi huì r",
    "definition": "in a moment; later; also pr. [dāi huǐ r] or [dāi hui r]"
  },
  "待遇": {
    "pinyin": "dài yù",
    "definition": "treatment; pay; salary; status; rank"
  },
  "怠工": {
    "pinyin": "dài gōng",
    "definition": "to slacken off in one's work; to go slow (as a form of strike)"
  },
  "怠慢": {
    "pinyin": "dài màn",
    "definition": "to slight; to neglect"
  },
  "贷款": {
    "pinyin": "dài kuǎn",
    "definition": "a loan; to provide a loan (e.g. bank); to raise a loan (from e.g. a bank)"
  },
  "袋": {
    "pinyin": "dài",
    "definition": "pouch; bag; sack; pocket"
  },
  "戴": {
    "pinyin": "Dài",
    "definition": "surname Dai"
  },
  "单": {
    "pinyin": "Shàn",
    "definition": "surname Shan"
  },
  "单薄": {
    "pinyin": "dān bó",
    "definition": "weak; frail; thin; flimsy"
  },
  "单边": {
    "pinyin": "dān biān",
    "definition": "unilateral"
  },
  "单纯": {
    "pinyin": "dān chún",
    "definition": "simple; pure; unsophisticated; merely; purely"
  },
  "单打": {
    "pinyin": "dān dǎ",
    "definition": "singles (in sports)"
  },
  "单调": {
    "pinyin": "dān diào",
    "definition": "monotonous"
  },
  "单独": {
    "pinyin": "dān dú",
    "definition": "alone; by oneself; on one's own"
  },
  "单方面": {
    "pinyin": "dān fāng miàn",
    "definition": "unilateral"
  },
  "单身": {
    "pinyin": "dān shēn",
    "definition": "unmarried; single"
  },
  "单位": {
    "pinyin": "dān wèi",
    "definition": "unit (of measure); unit (group of people as a whole); work unit (place of employment, esp. in the PRC prior to economic reform)"
  },
  "单一": {
    "pinyin": "dān yī",
    "definition": "single; only; sole"
  },
  "单元": {
    "pinyin": "dān yuán",
    "definition": "unit (forming an entity); element; (in a residential building) entrance or staircase"
  },
  "担": {
    "pinyin": "dān",
    "definition": "to undertake; to carry; to shoulder; to take responsibility"
  },
  "担保": {
    "pinyin": "dān bǎo",
    "definition": "to guarantee; to vouch for"
  },
  "担当": {
    "pinyin": "dān dāng",
    "definition": "to take upon oneself; to assume"
  },
  "担负": {
    "pinyin": "dān fù",
    "definition": "to shoulder; to bear; to undertake"
  },
  "担任": {
    "pinyin": "dān rèn",
    "definition": "to hold a governmental office or post; to assume office of; to take charge of; to serve as"
  },
  "担心": {
    "pinyin": "dān xīn",
    "definition": "anxious; worried; uneasy; to worry; to be anxious"
  },
  "担忧": {
    "pinyin": "dān yōu",
    "definition": "to worry; to be concerned"
  },
  "担子": {
    "pinyin": "dàn zi",
    "definition": "carrying pole and the loads on it; burden; task; responsibility"
  },
  "耽搁": {
    "pinyin": "dān ge",
    "definition": "to tarry; to delay; to stop over"
  },
  "耽误": {
    "pinyin": "dān wu",
    "definition": "to delay; to hold up; to waste time; to interfere with"
  },
  "胆": {
    "pinyin": "dǎn",
    "definition": "gall bladder; courage; guts; gall; inner container (e.g. bladder of a football, inner container of a thermos)"
  },
  "胆怯": {
    "pinyin": "dǎn qiè",
    "definition": "timidity; timid; cowardly"
  },
  "胆小": {
    "pinyin": "dǎn xiǎo",
    "definition": "cowardice; timid"
  },
  "胆小鬼": {
    "pinyin": "dǎn xiǎo guǐ",
    "definition": "coward"
  },
  "胆子": {
    "pinyin": "dǎn zi",
    "definition": "courage; nerve; guts"
  },
  "但": {
    "pinyin": "dàn",
    "definition": "but; yet; however; still; merely; only; just"
  },
  "但是": {
    "pinyin": "dàn shì",
    "definition": "but; however"
  },
  "但愿": {
    "pinyin": "dàn yuàn",
    "definition": "if only (sth were possible); I wish (that)"
  },
  "诞辰": {
    "pinyin": "dàn chén",
    "definition": "birthday"
  },
  "诞生": {
    "pinyin": "dàn shēng",
    "definition": "to be born"
  },
  "弹": {
    "pinyin": "dàn",
    "definition": "crossball; bullet; shot; shell; ball"
  },
  "弹性": {
    "pinyin": "tán xìng",
    "definition": "flexibility; elasticity"
  },
  "淡": {
    "pinyin": "dàn",
    "definition": "insipid; diluted; weak; mild; light in color; tasteless; indifferent; (variant of 氮) nitrogen"
  },
  "淡化": {
    "pinyin": "dàn huà",
    "definition": "to water down; to play down; to trivialize; to weaken; to become dull with time; to desalinate; desalination"
  },
  "淡季": {
    "pinyin": "dàn jì",
    "definition": "off season; slow business season; see also 季"
  },
  "淡水": {
    "pinyin": "Dàn shuǐ",
    "definition": "Tamsui or Danshui, district of New Taipei City 市, Taiwan"
  },
  "蛋": {
    "pinyin": "Dàn",
    "definition": "variant of 蜑"
  },
  "蛋白质": {
    "pinyin": "dàn bái zhì",
    "definition": "protein"
  },
  "蛋糕": {
    "pinyin": "dàn gāo",
    "definition": "cake"
  },
  "当场": {
    "pinyin": "dāng chǎng",
    "definition": "at the scene; on the spot"
  },
  "当成": {
    "pinyin": "dàng chéng",
    "definition": "to consider as; to take to be"
  },
  "当初": {
    "pinyin": "dāng chū",
    "definition": "at that time; originally"
  },
  "当代": {
    "pinyin": "dāng dài",
    "definition": "the present age; the contemporary era"
  },
  "当地": {
    "pinyin": "dāng dì",
    "definition": "local"
  },
  "当即": {
    "pinyin": "dāng jí",
    "definition": "at once; on the spot"
  },
  "当今": {
    "pinyin": "dāng jīn",
    "definition": "current; present; now; nowadays"
  },
  "当面": {
    "pinyin": "dāng miàn",
    "definition": "to sb's face; in sb's presence"
  },
  "当年": {
    "pinyin": "dāng nián",
    "definition": "in those days; then; in those years; during that time"
  },
  "当前": {
    "pinyin": "dāng qián",
    "definition": "the present time; to be faced with"
  },
  "当然": {
    "pinyin": "dāng rán",
    "definition": "only natural; as it should be; certainly; of course; without doubt"
  },
  "当日": {
    "pinyin": "dāng rì",
    "definition": "on that day"
  },
  "当时": {
    "pinyin": "dāng shí",
    "definition": "then; at that time; while"
  },
  "当事人": {
    "pinyin": "dāng shì rén",
    "definition": "persons involved or implicated; party (to an affair)"
  },
  "当天": {
    "pinyin": "dāng tiān",
    "definition": "on that day"
  },
  "当晚": {
    "pinyin": "dāng wǎn",
    "definition": "on that evening"
  },
  "当务之急": {
    "pinyin": "dāng wù zhī jí",
    "definition": "top priority job; matter of vital importance"
  },
  "当下": {
    "pinyin": "dāng xià",
    "definition": "immediately; at once; at that moment; at the moment"
  },
  "当心": {
    "pinyin": "dāng xīn",
    "definition": "to take care; to look out"
  },
  "当选": {
    "pinyin": "dāng xuǎn",
    "definition": "to be elected; to be selected"
  },
  "当着": {
    "pinyin": "dāng zhe",
    "definition": "in front of; in the presence of"
  },
  "当真": {
    "pinyin": "dàng zhēn",
    "definition": "to take seriously; serious; No joking, really!"
  },
  "当之无愧": {
    "pinyin": "dāng zhī wú kuì",
    "definition": "fully deserving, without any reservations (idiom); entirely worthy (of a title, honor etc)"
  },
  "当中": {
    "pinyin": "dāng zhōng",
    "definition": "among; in the middle; in the center"
  },
  "当众": {
    "pinyin": "dāng zhòng",
    "definition": "in public; in front of everybody"
  },
  "当作": {
    "pinyin": "dàng zuò",
    "definition": "to treat as; to regard as"
  },
  "挡": {
    "pinyin": "dǎng",
    "definition": "to resist; to obstruct; to hinder; to keep off; to block (a blow); to get in the way of; cover; gear (e.g. in a car's transmission)"
  },
  "党": {
    "pinyin": "Dǎng",
    "definition": "surname Dang"
  },
  "荡漾": {
    "pinyin": "dàng yàng",
    "definition": "to ripple; to undulate; also written 荡漾"
  },
  "档": {
    "pinyin": "dǎng",
    "definition": "(Tw) variant of 挡, gear"
  },
  "档案": {
    "pinyin": "dàng àn",
    "definition": "file; record; archive"
  },
  "档次": {
    "pinyin": "dàng cì",
    "definition": "grade; class; quality; level"
  },
  "刀": {
    "pinyin": "Dāo",
    "definition": "surname Dao"
  },
  "导弹": {
    "pinyin": "dǎo dàn",
    "definition": "(guided) missile"
  },
  "导航": {
    "pinyin": "dǎo háng",
    "definition": "navigation"
  },
  "导火索": {
    "pinyin": "dǎo huǒ suǒ",
    "definition": "fuse (for explosive)"
  },
  "导师": {
    "pinyin": "dǎo shī",
    "definition": "tutor; teacher; academic advisor"
  },
  "导向": {
    "pinyin": "dǎo xiàng",
    "definition": "to be oriented towards; orientation"
  },
  "导演": {
    "pinyin": "dǎo yǎn",
    "definition": "to direct; director (film etc)"
  },
  "导游": {
    "pinyin": "dǎo yóu",
    "definition": "tour guide; guidebook; to conduct a tour"
  },
  "导致": {
    "pinyin": "dǎo zhì",
    "definition": "to lead to; to create; to cause; to bring about"
  },
  "岛": {
    "pinyin": "dǎo",
    "definition": "variant of 岛"
  },
  "岛屿": {
    "pinyin": "dǎo yǔ",
    "definition": "island"
  },
  "捣乱": {
    "pinyin": "dǎo luàn",
    "definition": "to disturb; to look for trouble; to stir up a row; to bother sb intentionally"
  },
  "到处": {
    "pinyin": "dào chù",
    "definition": "everywhere"
  },
  "到达": {
    "pinyin": "dào dá",
    "definition": "to reach; to arrive"
  },
  "到底": {
    "pinyin": "dào dǐ",
    "definition": "finally; in the end; when all is said and done; after all; to the end; to the last"
  },
  "到来": {
    "pinyin": "dào lái",
    "definition": "to arrive; arrival; advent"
  },
  "到期": {
    "pinyin": "dào qī",
    "definition": "to fall due (loan etc); to expire (visa etc); to mature (investment bond etc)"
  },
  "到头来": {
    "pinyin": "dào tóu lái",
    "definition": "in the end; finally; as a result"
  },
  "到位": {
    "pinyin": "dào wèi",
    "definition": "to get to the intended location; to be in place; to be in position; precise; well (done)"
  },
  "倒": {
    "pinyin": "dǎo",
    "definition": "to fall; to collapse; to lie horizontally; to fail; to go bankrupt; to overthrow; to change (trains or buses); to move around; to resell at a profit"
  },
  "倒闭": {
    "pinyin": "dǎo bì",
    "definition": "to go bankrupt; to close down"
  },
  "倒车": {
    "pinyin": "dǎo chē",
    "definition": "to change buses, trains etc"
  },
  "倒计时": {
    "pinyin": "dào jì shí",
    "definition": "to count down; countdown"
  },
  "倒卖": {
    "pinyin": "dǎo mài",
    "definition": "to resell at a profit; to speculate"
  },
  "倒霉": {
    "pinyin": "dǎo méi",
    "definition": "to have bad luck; to be out of luck"
  },
  "倒是": {
    "pinyin": "dào shi",
    "definition": "contrary to what one might expect; actually; contrariwise; why don't you"
  },
  "倒数": {
    "pinyin": "dào shǔ",
    "definition": "to count backwards (from 10 down to 0); to count down; from the bottom (lines on a page); from the back (rows of seats)"
  },
  "倒塌": {
    "pinyin": "dǎo tā",
    "definition": "to collapse (of building); to topple over"
  },
  "倒下": {
    "pinyin": "dǎo xià",
    "definition": "to collapse; to topple over"
  },
  "悼念": {
    "pinyin": "dào niàn",
    "definition": "to grieve"
  },
  "盗": {
    "pinyin": "dào",
    "definition": "to steal; to rob; to plunder; thief; bandit; robber"
  },
  "盗版": {
    "pinyin": "dào bǎn",
    "definition": "pirated; illegal; see also 版"
  },
  "盗窃": {
    "pinyin": "dào qiè",
    "definition": "to steal"
  },
  "道德": {
    "pinyin": "dào dé",
    "definition": "virtue; morality; ethics"
  },
  "道教": {
    "pinyin": "Dào jiào",
    "definition": "Taoism; Daoism (Chinese system of beliefs)"
  },
  "道具": {
    "pinyin": "dào jù",
    "definition": "prop (theater); paraphernalia; (gaming) item; artifact"
  },
  "道理": {
    "pinyin": "dào li",
    "definition": "reason; argument; sense; principle; basis; justification"
  },
  "道路": {
    "pinyin": "dào lù",
    "definition": "road; path; way"
  },
  "道歉": {
    "pinyin": "dào qiàn",
    "definition": "to apologize"
  },
  "稻草": {
    "pinyin": "dào cǎo",
    "definition": "rice straw"
  },
  "稻谷": {
    "pinyin": "dào gǔ",
    "definition": "unhusked rice; paddy"
  },
  "德": {
    "pinyin": "Dé",
    "definition": "Germany; German; abbr. for 德国"
  },
  "地板": {
    "pinyin": "dì bǎn",
    "definition": "floor"
  },
  "地步": {
    "pinyin": "dì bù",
    "definition": "stage; degree (to which a situation has evolved); situation; leeway"
  },
  "地带": {
    "pinyin": "dì dài",
    "definition": "zone"
  },
  "地道": {
    "pinyin": "dì dào",
    "definition": "tunnel; causeway"
  },
  "地点": {
    "pinyin": "dì diǎn",
    "definition": "place; site; location; venue"
  },
  "地段": {
    "pinyin": "dì duàn",
    "definition": "section; district"
  },
  "地方": {
    "pinyin": "dì fāng",
    "definition": "region; regional (away from the central administration); local"
  },
  "地理": {
    "pinyin": "dì lǐ",
    "definition": "geography"
  },
  "地面": {
    "pinyin": "dì miàn",
    "definition": "floor; ground; surface"
  },
  "地名": {
    "pinyin": "dì míng",
    "definition": "place name; toponym"
  },
  "地球": {
    "pinyin": "dì qiú",
    "definition": "the earth"
  },
  "地区": {
    "pinyin": "dì qū",
    "definition": "local; regional; district (not necessarily formal administrative unit); region; area; as suffix to city name, means prefecture or county (area administered by a prefecture-level city or, county-level city)"
  },
  "地上": {
    "pinyin": "dì shang",
    "definition": "on the ground; on the floor"
  },
  "地势": {
    "pinyin": "dì shì",
    "definition": "terrain; topography relief"
  },
  "地毯": {
    "pinyin": "dì tǎn",
    "definition": "carpet; rug"
  },
  "地铁": {
    "pinyin": "dì tiě",
    "definition": "underground railway; subway; subway train"
  },
  "地铁站": {
    "pinyin": "dì tiě zhàn",
    "definition": "subway station"
  },
  "地图": {
    "pinyin": "dì tú",
    "definition": "map"
  },
  "地位": {
    "pinyin": "dì wèi",
    "definition": "position; status; place"
  },
  "地下": {
    "pinyin": "dì xià",
    "definition": "underground; subterranean; covert"
  },
  "地下室": {
    "pinyin": "dì xià shì",
    "definition": "basement; cellar"
  },
  "地下水": {
    "pinyin": "dì xià shuǐ",
    "definition": "groundwater"
  },
  "地形": {
    "pinyin": "dì xíng",
    "definition": "topography; terrain; landform"
  },
  "地狱": {
    "pinyin": "dì yù",
    "definition": "hell; infernal; underworld; (Buddhism) Naraka"
  },
  "地域": {
    "pinyin": "dì yù",
    "definition": "area; district; region"
  },
  "地震": {
    "pinyin": "dì zhèn",
    "definition": "earthquake"
  },
  "地址": {
    "pinyin": "dì zhǐ",
    "definition": "address"
  },
  "地质": {
    "pinyin": "dì zhì",
    "definition": "geology"
  },
  "的话": {
    "pinyin": "de huà",
    "definition": "if (coming after a conditional clause)"
  },
  "的确": {
    "pinyin": "dí què",
    "definition": "really; indeed"
  },
  "得不偿失": {
    "pinyin": "dé bù cháng shī",
    "definition": "the gains do not make up for the losses (idiom)"
  },
  "得出": {
    "pinyin": "dé chū",
    "definition": "to obtain (a result); to arrive at (a conclusion)"
  },
  "得当": {
    "pinyin": "dé dàng",
    "definition": "appropriate; suitable"
  },
  "得到": {
    "pinyin": "dé dào",
    "definition": "to get; to obtain; to receive"
  },
  "得分": {
    "pinyin": "dé fēn",
    "definition": "to score"
  },
  "得了": {
    "pinyin": "dé le",
    "definition": "all right!; that's enough!"
  },
  "得力": {
    "pinyin": "dé lì",
    "definition": "able; capable; competent; efficient"
  },
  "得失": {
    "pinyin": "dé shī",
    "definition": "gains and losses; success and failure; merits and demerits"
  },
  "得手": {
    "pinyin": "dé shǒu",
    "definition": "to go smoothly; to come off; to succeed"
  },
  "得体": {
    "pinyin": "dé tǐ",
    "definition": "appropriate to the occasion; fitting"
  },
  "得天独厚": {
    "pinyin": "dé tiān dú hòu",
    "definition": "blessed by heaven (idiom); enjoying exceptional advantages; favored by nature"
  },
  "得以": {
    "pinyin": "dé yǐ",
    "definition": "able to; so that sb can; enabling; in order to; finally in a position to; with sth in view"
  },
  "得益于": {
    "pinyin": "dé yì yú",
    "definition": "to benefit from; thanks to"
  },
  "得意": {
    "pinyin": "dé yì",
    "definition": "proud of oneself; pleased with oneself; complacent"
  },
  "得意扬扬": {
    "pinyin": "dé yì yáng yáng",
    "definition": "variant of 洋"
  },
  "得知": {
    "pinyin": "dé zhī",
    "definition": "to find out; to learn of"
  },
  "得罪": {
    "pinyin": "dé zuì",
    "definition": "to commit an offense; to violate the law; excuse me! (formal); see also 罪"
  },
  "灯": {
    "pinyin": "dēng",
    "definition": "lamp; light; lantern"
  },
  "灯光": {
    "pinyin": "dēng guāng",
    "definition": "(stage) lighting; light"
  },
  "灯笼": {
    "pinyin": "dēng lóng",
    "definition": "lantern"
  },
  "灯泡": {
    "pinyin": "dēng pào",
    "definition": "light bulb; see also 电灯泡; third-wheel or unwanted third party spoiling a couple's date (slang)"
  },
  "登": {
    "pinyin": "dēng",
    "definition": "to scale (a height); to ascend; to mount; to publish or record; to enter (e.g. in a register); to press down with the foot; to step or tread on; to put on (shoes or trousers) (dialect); to be gathered and taken to the threshing ground (old)"
  },
  "登机": {
    "pinyin": "dēng jī",
    "definition": "to board a plane"
  },
  "登机牌": {
    "pinyin": "dēng jī pái",
    "definition": "boarding pass"
  },
  "登记": {
    "pinyin": "dēng jì",
    "definition": "to register (one's name)"
  },
  "登陆": {
    "pinyin": "dēng lù",
    "definition": "to land; to come ashore; to make landfall (of typhoon etc); to log in (frequently used erroneous variant of 登录)"
  },
  "登录": {
    "pinyin": "dēng lù",
    "definition": "to register; to log in"
  },
  "登山": {
    "pinyin": "dēng shān",
    "definition": "to climb a mountain; climbing; mountaineering"
  },
  "蹬": {
    "pinyin": "dēng",
    "definition": "to step on; to tread on; to wear (shoes); (slang) to dump (sb); Taiwan pr. [dèng]"
  },
  "等": {
    "pinyin": "děng",
    "definition": "class; rank; grade; equal to; same as; to wait for; to await; et cetera; and so on; et al. (and other authors); after; as soon as; once"
  },
  "等待": {
    "pinyin": "děng dài",
    "definition": "to wait; to wait for"
  },
  "等到": {
    "pinyin": "děng dào",
    "definition": "to wait until; by the time when (sth is ready etc)"
  },
  "等候": {
    "pinyin": "děng hòu",
    "definition": "to wait; to wait for"
  },
  "等级": {
    "pinyin": "děng jí",
    "definition": "grade; rank; status"
  },
  "等于": {
    "pinyin": "děng yú",
    "definition": "to equal; to be tantamount to"
  },
  "凳子": {
    "pinyin": "dèng zi",
    "definition": "stool; small seat"
  },
  "瞪": {
    "pinyin": "dèng",
    "definition": "to open (one's eyes) wide; to stare at; to glare at"
  },
  "低": {
    "pinyin": "dī",
    "definition": "low; beneath; to lower (one's head); to let droop; to hang down; to incline"
  },
  "低调": {
    "pinyin": "dī diào",
    "definition": "low pitch; quiet (voice); subdued; low-key; low-profile"
  },
  "低估": {
    "pinyin": "dī gū",
    "definition": "to underestimate; to underrate"
  },
  "低谷": {
    "pinyin": "dī gǔ",
    "definition": "valley; trough (as opposed to peaks); fig. low point; lowest ebb; nadir of one's fortunes"
  },
  "低价": {
    "pinyin": "dī jià",
    "definition": "low price"
  },
  "低迷": {
    "pinyin": "dī mí",
    "definition": "blurred (landscape etc); low (spirits); in a slump (economy)"
  },
  "低碳": {
    "pinyin": "dī tàn",
    "definition": "(attributive) low-carbon; low-carb (diet)"
  },
  "低头": {
    "pinyin": "dī tóu",
    "definition": "to bow the head; to yield; to give in"
  },
  "低温": {
    "pinyin": "dī wēn",
    "definition": "low temperature"
  },
  "低下": {
    "pinyin": "dī xià",
    "definition": "low status; lowly; to lower (one's head)"
  },
  "低于": {
    "pinyin": "dī yú",
    "definition": "to be lower than"
  },
  "堤": {
    "pinyin": "dī",
    "definition": "dike; Taiwan pr. [tí]"
  },
  "堤坝": {
    "pinyin": "dī bà",
    "definition": "dam; dike"
  },
  "滴": {
    "pinyin": "dī",
    "definition": "a drop; to drip"
  },
  "敌人": {
    "pinyin": "dí rén",
    "definition": "enemy"
  },
  "敌视": {
    "pinyin": "dí shì",
    "definition": "hostile; malevolence; antagonism; to view as enemy; to stand against"
  },
  "笛子": {
    "pinyin": "dí zi",
    "definition": "bamboo flute"
  },
  "底": {
    "pinyin": "de",
    "definition": "(equivalent to 的 as possessive particle)"
  },
  "底层": {
    "pinyin": "dǐ céng",
    "definition": "ground or first floor; bottom (of a pile); lowest rung (of society)"
  },
  "底下": {
    "pinyin": "dǐ xia",
    "definition": "the location below sth; afterwards"
  },
  "底线": {
    "pinyin": "dǐ xiàn",
    "definition": "bottom line; the limit of what one is prepared to accept; (sports) baseline; (sewing) under thread; spy; informer; plant"
  },
  "底蕴": {
    "pinyin": "dǐ yùn",
    "definition": "inside information; concrete details"
  },
  "底子": {
    "pinyin": "dǐ zi",
    "definition": "base; foundation; bottom"
  },
  "抵触": {
    "pinyin": "dǐ chù",
    "definition": "to conflict; to contradict"
  },
  "抵达": {
    "pinyin": "dǐ dá",
    "definition": "to arrive; to reach (a destination)"
  },
  "抵挡": {
    "pinyin": "dǐ dǎng",
    "definition": "to resist; to hold back; to stop; to ward off; to withstand"
  },
  "抵抗": {
    "pinyin": "dǐ kàng",
    "definition": "to resist; resistance"
  },
  "抵消": {
    "pinyin": "dǐ xiāo",
    "definition": "to counteract; to cancel out; to offset"
  },
  "抵押": {
    "pinyin": "dǐ yā",
    "definition": "to provide (an asset) as security for a loan; to put up collateral"
  },
  "抵御": {
    "pinyin": "dǐ yù",
    "definition": "to resist; to withstand"
  },
  "抵制": {
    "pinyin": "dǐ zhì",
    "definition": "to resist; to boycott; to refuse (to cooperate); to reject; resistance; refusal"
  },
  "弟": {
    "pinyin": "dì",
    "definition": "younger brother; junior male; I (modest word in letter)"
  },
  "弟弟": {
    "pinyin": "dì di",
    "definition": "younger brother"
  },
  "弟子": {
    "pinyin": "dì zǐ",
    "definition": "disciple; follower"
  },
  "帝国": {
    "pinyin": "dì guó",
    "definition": "empire; imperial"
  },
  "帝国主义": {
    "pinyin": "dì guó zhǔ yì",
    "definition": "imperialism"
  },
  "递": {
    "pinyin": "dì",
    "definition": "to hand over; to pass on; to deliver; (bound form) progressively; in the proper order"
  },
  "递给": {
    "pinyin": "dì gěi",
    "definition": "to hand it (i.e. the aforementioned item) to (sb)"
  },
  "递交": {
    "pinyin": "dì jiāo",
    "definition": "to present; to give; to hand over; to hand in; to lay before"
  },
  "递增": {
    "pinyin": "dì zēng",
    "definition": "to increase by degrees; in increasing order; incremental; progressive"
  },
  "第二": {
    "pinyin": "dì èr",
    "definition": "second; number two; next; secondary"
  },
  "第一": {
    "pinyin": "dì yī",
    "definition": "first; number one; primary"
  },
  "第一手": {
    "pinyin": "dì yī shǒu",
    "definition": "first-hand"
  },
  "第一线": {
    "pinyin": "dì yī xiàn",
    "definition": "front line; forefront"
  },
  "颠簸": {
    "pinyin": "diān bǒ",
    "definition": "to be jolted around (car on a bumpy road, boat on a rough sea, aircraft experiencing turbulence); (fig.) to undergo a rough experience"
  },
  "颠倒": {
    "pinyin": "diān dǎo",
    "definition": "to turn upside down; to reverse; back to front; confused; deranged; crazy"
  },
  "颠覆": {
    "pinyin": "diān fù",
    "definition": "to topple (i.e. knock over); to capsize; fig. to overturn (a regime, by plotting or subversion); to undermine; to subvert"
  },
  "巅峰": {
    "pinyin": "diān fēng",
    "definition": "summit; apex; pinnacle (of one's career etc); peak (of a civilization etc)"
  },
  "典范": {
    "pinyin": "diǎn fàn",
    "definition": "model; example; paragon"
  },
  "典礼": {
    "pinyin": "diǎn lǐ",
    "definition": "celebration; ceremony"
  },
  "典型": {
    "pinyin": "diǎn xíng",
    "definition": "model; typical case; archetype; typical; representative"
  },
  "点": {
    "pinyin": "diǎn",
    "definition": "point; dot; drop; speck; o'clock; point (in space or time); to draw a dot; to check on a list; to choose; to order (food in a restaurant); to touch briefly; to hint; to light; to ignite; to pour a liquid drop by drop; (old) one fifth of a two-hour watch 更; dot stroke in Chinese characters; classifier for items"
  },
  "点火": {
    "pinyin": "diǎn huǒ",
    "definition": "to ignite; to light a fire; to agitate; to start an engine; ignition; fig. to stir up trouble"
  },
  "点击率": {
    "pinyin": "diǎn jī lu:4",
    "definition": "click-through rate (CTR) (Internet)"
  },
  "点名": {
    "pinyin": "diǎn míng",
    "definition": "roll call; to mention sb by name; (to call or praise or criticize sb) by name"
  },
  "点评": {
    "pinyin": "diǎn píng",
    "definition": "to comment; a point by point commentary"
  },
  "点燃": {
    "pinyin": "diǎn rán",
    "definition": "to ignite; to set on fire; aflame"
  },
  "点头": {
    "pinyin": "diǎn tóu",
    "definition": "to nod"
  },
  "点心": {
    "pinyin": "diǎn xin",
    "definition": "light refreshments; pastry; dim sum (in Cantonese cooking); dessert"
  },
  "点缀": {
    "pinyin": "diǎn zhuì",
    "definition": "to decorate; to adorn; sprinkled; studded; only for show"
  },
  "点子": {
    "pinyin": "diǎn zi",
    "definition": "spot; point; dot; speck; drop (of liquid); droplet; point (of argument); idea; crux; indication; pointer"
  },
  "电": {
    "pinyin": "diàn",
    "definition": "lightning; electricity; electric (bound form); to get (or give) an electric shock; phone call or telegram etc; to send via telephone or telegram etc"
  },
  "电报": {
    "pinyin": "diàn bào",
    "definition": "telegram; cable; telegraph"
  },
  "电车": {
    "pinyin": "diàn chē",
    "definition": "trolleybus"
  },
  "电池": {
    "pinyin": "diàn chí",
    "definition": "battery"
  },
  "电灯": {
    "pinyin": "diàn dēng",
    "definition": "electric light"
  },
  "电动": {
    "pinyin": "diàn dòng",
    "definition": "electric-powered; (Tw) video game"
  },
  "电动车": {
    "pinyin": "diàndòngchē",
    "definition": "Electric vehicle"
  },
  "电饭锅": {
    "pinyin": "diàn fàn guō",
    "definition": "electric rice cooker"
  },
  "电话": {
    "pinyin": "diàn huà",
    "definition": "telephone; phone call; phone number"
  },
  "电力": {
    "pinyin": "diàn lì",
    "definition": "electrical power; electricity"
  },
  "电铃": {
    "pinyin": "diàn líng",
    "definition": "electric bell"
  },
  "电脑": {
    "pinyin": "diàn nǎo",
    "definition": "computer"
  },
  "电器": {
    "pinyin": "diàn qì",
    "definition": "(electrical) appliance; device"
  },
  "电视": {
    "pinyin": "diàn shì",
    "definition": "television; TV"
  },
  "电视机": {
    "pinyin": "diàn shì jī",
    "definition": "television set"
  },
  "电视剧": {
    "pinyin": "diàn shì jù",
    "definition": "TV series; TV drama"
  },
  "电视台": {
    "pinyin": "diàn shì tái",
    "definition": "television station"
  },
  "电台": {
    "pinyin": "diàn tái",
    "definition": "transmitter-receiver; broadcasting station; radio station"
  },
  "电梯": {
    "pinyin": "diàn tī",
    "definition": "elevator; escalator"
  },
  "电网": {
    "pinyin": "diàn wǎng",
    "definition": "electricity grid; power grid; electrified wire netting"
  },
  "电线": {
    "pinyin": "diàn xiàn",
    "definition": "wire; power cord"
  },
  "电信": {
    "pinyin": "diàn xìn",
    "definition": "telecommunications"
  },
  "电讯": {
    "pinyin": "diàn xùn",
    "definition": "telecommunications; telecom"
  },
  "电影": {
    "pinyin": "diàn yǐng",
    "definition": "movie; film"
  },
  "电影院": {
    "pinyin": "diàn yǐng yuàn",
    "definition": "cinema; movie theater"
  },
  "电源": {
    "pinyin": "diàn yuán",
    "definition": "electric power source"
  },
  "电子": {
    "pinyin": "diàn zǐ",
    "definition": "electronic; electron (particle physics)"
  },
  "电子版": {
    "pinyin": "diàn zǐ bǎn",
    "definition": "electronic edition; digital version"
  },
  "电子邮件": {
    "pinyin": "diàn zǐ yóu jiàn",
    "definition": "email"
  },
  "店": {
    "pinyin": "diàn",
    "definition": "inn; old-style hotel; (bound form) shop; store"
  },
  "垫": {
    "pinyin": "diàn",
    "definition": "pad; cushion; mat; to pad out; to fill a gap; to pay for sb; to advance (money)"
  },
  "垫底": {
    "pinyin": "diàn dǐ",
    "definition": "to put sth on the bottom; to eat sth to tide oneself over until mealtime; to lay the foundation; to come last in the rankings"
  },
  "垫子": {
    "pinyin": "diàn zi",
    "definition": "cushion; mat; pad"
  },
  "惦记": {
    "pinyin": "diàn jì",
    "definition": "to think of; to keep thinking about; to be concerned about"
  },
  "淀粉": {
    "pinyin": "diàn fěn",
    "definition": "starch; amylum (C6H10O5)n"
  },
  "奠定": {
    "pinyin": "diàn dìng",
    "definition": "to establish; to fix; to settle"
  },
  "殿堂": {
    "pinyin": "diàn táng",
    "definition": "palace; hall; temple buildings"
  },
  "刁难": {
    "pinyin": "diāo nàn",
    "definition": "to be hard on sb; to deliberately make things difficult; Taiwan pr. [diāo nán]"
  },
  "叼": {
    "pinyin": "diāo",
    "definition": "to hold with one's mouth (as a smoker with a cigarette or a dog with a bone)"
  },
  "雕": {
    "pinyin": "diāo",
    "definition": "variant of 雕, to engrave"
  },
  "雕刻": {
    "pinyin": "diāo kè",
    "definition": "to carve; to engrave; carving"
  },
  "雕塑": {
    "pinyin": "diāo sù",
    "definition": "a statue; a Buddhist image; sculpture; to carve"
  },
  "吊": {
    "pinyin": "diào",
    "definition": "to suspend; to hang up; to hang a person"
  },
  "吊销": {
    "pinyin": "diào xiāo",
    "definition": "to suspend (an agreement); to revoke"
  },
  "钓": {
    "pinyin": "diào",
    "definition": "to fish with a hook and bait"
  },
  "钓鱼": {
    "pinyin": "diào yú",
    "definition": "to fish (with line and hook); to dupe"
  },
  "调": {
    "pinyin": "diào",
    "definition": "to transfer; to move (troops or cadres); to investigate; to enquire into; accent; view; argument; key (in music); mode (music); tune; tone; melody"
  },
  "调查": {
    "pinyin": "diào chá",
    "definition": "investigation; inquiry; to investigate; to survey; survey; (opinion) poll"
  },
  "调动": {
    "pinyin": "diào dòng",
    "definition": "to transfer; to maneuver (troops etc); movement of personnel; to mobilize; to bring into play"
  },
  "调度": {
    "pinyin": "diào dù",
    "definition": "to dispatch (vehicles, staff etc); to schedule; to manage; dispatcher; scheduler"
  },
  "调和": {
    "pinyin": "tiáo hé",
    "definition": "harmonious; to mediate; to reconcile; mediation; to compromise; to mix; to blend; blended; to season; seasoning; to placate"
  },
  "调剂": {
    "pinyin": "tiáo jì",
    "definition": "to adjust; to balance; to make up a medical prescription"
  },
  "调节": {
    "pinyin": "tiáo jié",
    "definition": "to adjust; to regulate; to harmonize; to reconcile (accountancy etc)"
  },
  "调解": {
    "pinyin": "tiáo jiě",
    "definition": "to mediate; to bring parties to an agreement"
  },
  "调侃": {
    "pinyin": "tiáo kǎn",
    "definition": "to ridicule; to tease; to mock; idle talk; chitchat"
  },
  "调控": {
    "pinyin": "tiáo kòng",
    "definition": "to regulate; to control"
  },
  "调料": {
    "pinyin": "tiáo liào",
    "definition": "condiment; seasoning; flavoring"
  },
  "调皮": {
    "pinyin": "tiáo pí",
    "definition": "naughty; mischievous; unruly"
  },
  "调试": {
    "pinyin": "tiáo shì",
    "definition": "to debug; to adjust components during testing; debugging"
  },
  "调研": {
    "pinyin": "diào yán",
    "definition": "to investigate and research; research; investigation"
  },
  "调整": {
    "pinyin": "tiáo zhěng",
    "definition": "to adjust; adjustment; revision"
  },
  "掉": {
    "pinyin": "diào",
    "definition": "to fall; to drop; to lag behind; to lose; to go missing; to reduce; fall (in prices); to lose (value, weight etc); to wag; to swing; to turn; to change; to exchange; to swap; to show off; to shed (hair); (used after certain verbs to express completion, fulfillment, removal etc)"
  },
  "掉队": {
    "pinyin": "diào duì",
    "definition": "to fall behind; to drop out"
  },
  "掉头": {
    "pinyin": "diào tóu",
    "definition": "to turn one's head; to turn round; to turn about"
  },
  "爹": {
    "pinyin": "diē",
    "definition": "dad"
  },
  "跌": {
    "pinyin": "diē",
    "definition": "to fall; to tumble; to trip; (of prices etc) to drop; Taiwan pr. [dié]"
  },
  "迭起": {
    "pinyin": "dié qǐ",
    "definition": "continuously arising; to arise repeatedly"
  },
  "叠": {
    "pinyin": "dié",
    "definition": "variant of 叠"
  },
  "丁": {
    "pinyin": "Dīng",
    "definition": "surname Ding"
  },
  "叮嘱": {
    "pinyin": "dīng zhǔ",
    "definition": "to warn repeatedly; to urge; to exhort again and again"
  },
  "盯": {
    "pinyin": "dīng",
    "definition": "to watch attentively; to fix one's attention on; to stare at; to gaze at"
  },
  "钉": {
    "pinyin": "dīng",
    "definition": "nail; to follow closely; to keep at sb (to do sth); variant of 盯"
  },
  "钉子": {
    "pinyin": "dīng zi",
    "definition": "nail; snag; saboteur"
  },
  "顶": {
    "pinyin": "dǐng",
    "definition": "apex; crown of the head; top; roof; most; to carry on the head; to push to the top; to go against; to replace; to substitute; to be subjected to (an aerial bombing, hailstorm etc); (slang) to \"bump\" a forum thread to raise its profile; classifier for headwear, hats, veils etc"
  },
  "顶多": {
    "pinyin": "dǐng duō",
    "definition": "at most; at best"
  },
  "顶级": {
    "pinyin": "dǐng jí",
    "definition": "top-notch; first-rate"
  },
  "顶尖": {
    "pinyin": "dǐng jiān",
    "definition": "peak; apex; world best; number one; finest (competitors); top (figures in a certain field)"
  },
  "订": {
    "pinyin": "dìng",
    "definition": "to agree; to conclude; to draw up; to subscribe to (a newspaper etc); to order"
  },
  "订单": {
    "pinyin": "dìng dān",
    "definition": "(purchase) order"
  },
  "订购": {
    "pinyin": "dìng gòu",
    "definition": "to place an order; to subscribe"
  },
  "订婚": {
    "pinyin": "dìng hūn",
    "definition": "to get engaged"
  },
  "订立": {
    "pinyin": "dìng lì",
    "definition": "to conclude (treaty, contract, agreement etc); to set up (a rule etc)"
  },
  "定": {
    "pinyin": "dìng",
    "definition": "to set; to fix; to determine; to decide; to order"
  },
  "定价": {
    "pinyin": "dìng jià",
    "definition": "to set a price; to fix a price"
  },
  "定金": {
    "pinyin": "dìng jīn",
    "definition": "down payment; advance payment"
  },
  "定居": {
    "pinyin": "dìng jū",
    "definition": "to settle (in some city, country etc); to take up residence"
  },
  "定论": {
    "pinyin": "dìng lùn",
    "definition": "final conclusion; accepted argument"
  },
  "定期": {
    "pinyin": "dìng qī",
    "definition": "at set dates; at regular intervals; periodic; limited to a fixed period of time; fixed term"
  },
  "定时": {
    "pinyin": "dìng shí",
    "definition": "to fix a time; fixed time; timed (of explosive etc)"
  },
  "定为": {
    "pinyin": "dìng wèi",
    "definition": "set to"
  },
  "定位": {
    "pinyin": "dìng wèi",
    "definition": "to orientate; to position; to categorize (as); to characterize (as); positioning; position; niche"
  },
  "定向": {
    "pinyin": "dìng xiàng",
    "definition": "to orientate; directional; directed; orienteering"
  },
  "定心丸": {
    "pinyin": "dìng xīn wán",
    "definition": "tranquilizer; sth that sets one's mind at ease"
  },
  "定义": {
    "pinyin": "dìng yì",
    "definition": "definition; to define"
  },
  "定做": {
    "pinyin": "dìng zuò",
    "definition": "to have something made to order"
  },
  "丢": {
    "pinyin": "diū",
    "definition": "to lose; to put aside; to throw"
  },
  "丢掉": {
    "pinyin": "diū diào",
    "definition": "to lose; to throw away; to discard; to cast away"
  },
  "丢脸": {
    "pinyin": "diū liǎn",
    "definition": "to lose face; humiliation"
  },
  "丢弃": {
    "pinyin": "diū qì",
    "definition": "to discard; to abandon"
  },
  "丢人": {
    "pinyin": "diū rén",
    "definition": "to lose face"
  },
  "丢三落四": {
    "pinyin": "diū sān là sì",
    "definition": "forgetful; empty-headed"
  },
  "丢失": {
    "pinyin": "diū shī",
    "definition": "to lose; to misplace"
  },
  "东北": {
    "pinyin": "Dōng běi",
    "definition": "Northeast China; Manchuria"
  },
  "东奔西走": {
    "pinyin": "dōng bēn xī zǒu",
    "definition": "to run this way and that (idiom); to rush about busily; to bustle about; to hopscotch; also 东跑西颠"
  },
  "东边": {
    "pinyin": "dōng bian",
    "definition": "east; east side; eastern part; to the east of"
  },
  "东部": {
    "pinyin": "dōng bù",
    "definition": "the east; eastern part"
  },
  "东道主": {
    "pinyin": "dōng dào zhǔ",
    "definition": "host; official host (e.g. venue for games or a conference)"
  },
  "东方": {
    "pinyin": "Dōng fāng",
    "definition": "the East; the Orient; two-character surname Dongfang"
  },
  "东南": {
    "pinyin": "dōng nán",
    "definition": "southeast"
  },
  "东西": {
    "pinyin": "dōng xī",
    "definition": "east and west"
  },
  "东张西望": {
    "pinyin": "dōng zhāng xī wàng",
    "definition": "to look in all directions (idiom); to glance around"
  },
  "冬": {
    "pinyin": "dōng",
    "definition": "winter"
  },
  "冬季": {
    "pinyin": "dōng jì",
    "definition": "winter"
  },
  "冬天": {
    "pinyin": "dōng tiān",
    "definition": "winter"
  },
  "董事": {
    "pinyin": "dǒng shì",
    "definition": "board member"
  },
  "董事会": {
    "pinyin": "dǒng shì huì",
    "definition": "board of directors"
  },
  "董事长": {
    "pinyin": "dǒng shì zhǎng",
    "definition": "chairman of the board of directors"
  },
  "懂": {
    "pinyin": "dǒng",
    "definition": "to understand; to comprehend"
  },
  "懂得": {
    "pinyin": "dǒng de",
    "definition": "to understand; to know; to comprehend"
  },
  "懂事": {
    "pinyin": "dǒng shì",
    "definition": "to grow beyond the naivete of childhood; to be aware of what is going on in the world; (esp. of a child) sensible; thoughtful; intelligent"
  },
  "动不动": {
    "pinyin": "dòng bu dòng",
    "definition": "(typically followed by 就) apt to (lose one's temper, catch a cold etc); at the drop of a hat"
  },
  "动弹": {
    "pinyin": "dòng tan",
    "definition": "to budge"
  },
  "动荡": {
    "pinyin": "dòng dàng",
    "definition": "variant of 动荡"
  },
  "动感": {
    "pinyin": "dòng gǎn",
    "definition": "sense of movement (often in a static work of art); dynamic; vivid; lifelike"
  },
  "动工": {
    "pinyin": "dòng gōng",
    "definition": "to start (a building project)"
  },
  "动画": {
    "pinyin": "dòng huà",
    "definition": "animation; cartoon"
  },
  "动画片": {
    "pinyin": "dòng huà piàn",
    "definition": "animated film"
  },
  "动机": {
    "pinyin": "dòng jī",
    "definition": "motive; motivation"
  },
  "动静": {
    "pinyin": "dòng jìng",
    "definition": "(detectable) movement; (sign of) activity; movement and stillness"
  },
  "动力": {
    "pinyin": "dòng lì",
    "definition": "motive power; force; (fig.) motivation; impetus"
  },
  "动脉": {
    "pinyin": "dòng mài",
    "definition": "artery"
  },
  "动人": {
    "pinyin": "dòng rén",
    "definition": "touching; moving"
  },
  "动身": {
    "pinyin": "dòng shēn",
    "definition": "to go on a journey; to leave"
  },
  "动手": {
    "pinyin": "dòng shǒu",
    "definition": "to set about (a task); to hit; to punch; to touch"
  },
  "动态": {
    "pinyin": "dòng tài",
    "definition": "movement; motion; development; trend; dynamic (science)"
  },
  "动听": {
    "pinyin": "dòng tīng",
    "definition": "pleasant to listen to"
  },
  "动物": {
    "pinyin": "dòng wù",
    "definition": "animal"
  },
  "动物园": {
    "pinyin": "dòng wù yuán",
    "definition": "zoo"
  },
  "动向": {
    "pinyin": "dòng xiàng",
    "definition": "trend; tendency"
  },
  "动摇": {
    "pinyin": "dòng yáo",
    "definition": "to sway; to waver; to rock; to rattle; to destabilize; to pose a challenge to"
  },
  "动用": {
    "pinyin": "dòng yòng",
    "definition": "to utilize; to put sth to use"
  },
  "动员": {
    "pinyin": "dòng yuán",
    "definition": "to mobilize; mobilization"
  },
  "动作": {
    "pinyin": "dòng zuò",
    "definition": "movement; motion; action; to act; to move"
  },
  "冻": {
    "pinyin": "dòng",
    "definition": "to freeze; to feel very cold; aspic or jelly"
  },
  "冻结": {
    "pinyin": "dòng jié",
    "definition": "to freeze (water etc); (fig.) to freeze (assets, prices etc)"
  },
  "栋": {
    "pinyin": "dòng",
    "definition": "classifier for houses or buildings; ridgepole (old)"
  },
  "栋梁": {
    "pinyin": "dòng liáng",
    "definition": "ridgepole; ridgepole and beams; person able to bear heavy responsibility; mainstay (of organization); pillar (of state)"
  },
  "洞": {
    "pinyin": "dòng",
    "definition": "cave; hole; zero (unambiguous spoken form when spelling out numbers)"
  },
  "洞穴": {
    "pinyin": "dòng xué",
    "definition": "cave; cavern"
  },
  "都会": {
    "pinyin": "dū huì",
    "definition": "city; metropolis"
  },
  "都市": {
    "pinyin": "dū shì",
    "definition": "city; metropolis"
  },
  "兜": {
    "pinyin": "dōu",
    "definition": "pocket; bag; to wrap up or hold in a bag; to move in a circle; to canvas or solicit; to take responsibility for; to disclose in detail; combat armor (old)"
  },
  "兜儿": {
    "pinyin": "dōu r",
    "definition": "erhua variant of 兜"
  },
  "兜售": {
    "pinyin": "dōu shòu",
    "definition": "to hawk; to peddle"
  },
  "抖": {
    "pinyin": "dǒu",
    "definition": "to tremble; to shake out; to reveal; to make it in the world"
  },
  "陡": {
    "pinyin": "dǒu",
    "definition": "steep; precipitous; abrubtly; suddenly; unexpectedly"
  },
  "陡峭": {
    "pinyin": "dǒu qiào",
    "definition": "precipitous"
  },
  "斗": {
    "pinyin": "Dǒu",
    "definition": "abbr. for the Big Dipper constellation 星"
  },
  "斗争": {
    "pinyin": "dòu zhēng",
    "definition": "a struggle; fight; battle"
  },
  "斗志": {
    "pinyin": "dòu zhì",
    "definition": "will to fight; fighting spirit"
  },
  "豆腐": {
    "pinyin": "dòu fu",
    "definition": "tofu; bean curd"
  },
  "豆浆": {
    "pinyin": "dòu jiāng",
    "definition": "soy milk"
  },
  "豆制品": {
    "pinyin": "dòu zhì pǐn",
    "definition": "legume-based product; soybean product"
  },
  "豆子": {
    "pinyin": "dòu zi",
    "definition": "bean; pea"
  },
  "逗": {
    "pinyin": "dòu",
    "definition": "to tease (playfully); to entice; (coll.) to joke; (coll.) funny; amusing; to stay; to sojourn; brief pause at the end of a phrase (variant of 读)"
  },
  "督促": {
    "pinyin": "dū cù",
    "definition": "to supervise and urge completion of a task; to urge on"
  },
  "毒": {
    "pinyin": "dú",
    "definition": "poison; to poison; poisonous; malicious; cruel; fierce; narcotics"
  },
  "毒品": {
    "pinyin": "dú pǐn",
    "definition": "drugs; narcotics; poison"
  },
  "独": {
    "pinyin": "dú",
    "definition": "alone; independent; single; sole; only"
  },
  "独裁": {
    "pinyin": "dú cái",
    "definition": "dictatorship"
  },
  "独唱": {
    "pinyin": "dú chàng",
    "definition": "(in singing) solo; to solo"
  },
  "独家": {
    "pinyin": "dú jiā",
    "definition": "exclusive"
  },
  "独立": {
    "pinyin": "dú lì",
    "definition": "independent; independence; to stand alone"
  },
  "独立自主": {
    "pinyin": "dú lì zì zhǔ",
    "definition": "independent and autonomous (idiom); self-determination; to act independently; to maintain control over one's own affairs"
  },
  "独身": {
    "pinyin": "dú shēn",
    "definition": "unmarried; single"
  },
  "独特": {
    "pinyin": "dú tè",
    "definition": "unique; distinctive"
  },
  "独一无二": {
    "pinyin": "dú yī wú èr",
    "definition": "unique and unmatched (idiom); unrivalled; nothing compares with it"
  },
  "独自": {
    "pinyin": "dú zì",
    "definition": "alone"
  },
  "读": {
    "pinyin": "dòu",
    "definition": "comma; phrase marked by pause"
  },
  "读书": {
    "pinyin": "dú shū",
    "definition": "to read a book; to study; to attend school"
  },
  "读音": {
    "pinyin": "dú yīn",
    "definition": "pronunciation; literary (rather than colloquial) pronunciation of a Chinese character"
  },
  "读者": {
    "pinyin": "dú zhě",
    "definition": "reader"
  },
  "堵": {
    "pinyin": "dǔ",
    "definition": "to block up (a road, pipe etc); to stop up (a hole); (fig.) (of a person) choked up with anxiety or stress; wall (literary); (classifier for walls)"
  },
  "堵车": {
    "pinyin": "dǔ chē",
    "definition": "traffic jam; (of traffic) to get congested"
  },
  "堵塞": {
    "pinyin": "dǔ sè",
    "definition": "to clog up; blockage"
  },
  "赌": {
    "pinyin": "dǔ",
    "definition": "to bet; to gamble"
  },
  "赌博": {
    "pinyin": "dǔ bó",
    "definition": "to gamble"
  },
  "妒忌": {
    "pinyin": "dù jì",
    "definition": "to be jealous of (sb's achievements etc); to be envious; envy"
  },
  "杜绝": {
    "pinyin": "dù jué",
    "definition": "to put an end to"
  },
  "肚子": {
    "pinyin": "dù zi",
    "definition": "belly; abdomen; stomach"
  },
  "度": {
    "pinyin": "dù",
    "definition": "to pass; to spend (time); measure; limit; extent; degree of intensity; degree (angles, temperature etc); kilowatt-hour; classifier for events and occurrences"
  },
  "度过": {
    "pinyin": "dù guò",
    "definition": "to pass; to spend (time); to survive; to get through"
  },
  "度假": {
    "pinyin": "dù jià",
    "definition": "to go on holidays; to spend one's vacation"
  },
  "渡": {
    "pinyin": "dù",
    "definition": "to cross; to pass through; to ferry"
  },
  "渡过": {
    "pinyin": "dù guò",
    "definition": "to cross over; to pass through"
  },
  "端": {
    "pinyin": "duān",
    "definition": "end; extremity; item; port; to hold sth level with both hands; to carry; regular"
  },
  "端午节": {
    "pinyin": "Duān wǔ jié",
    "definition": "Dragon Boat Festival (5th day of the 5th lunar month)"
  },
  "端正": {
    "pinyin": "duān zhèng",
    "definition": "upright; regular; proper; correct"
  },
  "短": {
    "pinyin": "duǎn",
    "definition": "short; brief; to lack; weak point; fault"
  },
  "短处": {
    "pinyin": "duǎn chù",
    "definition": "shortcoming; defect; fault; one's weak points"
  },
  "短促": {
    "pinyin": "duǎn cù",
    "definition": "short in time; fleeting; brief; gasping (breath); curt (tone of voice)"
  },
  "短裤": {
    "pinyin": "duǎn kù",
    "definition": "short pants; shorts"
  },
  "短片": {
    "pinyin": "duǎn piàn",
    "definition": "short film; video clip"
  },
  "短期": {
    "pinyin": "duǎn qī",
    "definition": "short term; short-term"
  },
  "短缺": {
    "pinyin": "duǎn quē",
    "definition": "shortage"
  },
  "短信": {
    "pinyin": "duǎn xìn",
    "definition": "text message; SMS"
  },
  "短暂": {
    "pinyin": "duǎn zàn",
    "definition": "of short duration; brief; momentary"
  },
  "段": {
    "pinyin": "Duàn",
    "definition": "surname Duan"
  },
  "段落": {
    "pinyin": "duàn luò",
    "definition": "phase; time interval; paragraph; (written) passage"
  },
  "断": {
    "pinyin": "duàn",
    "definition": "to break; to snap; to cut off; to give up or abstain from sth; to judge; (usu. used in the negative) absolutely; definitely; decidedly"
  },
  "断定": {
    "pinyin": "duàn dìng",
    "definition": "to conclude; to determine; to come to a judgment"
  },
  "断断续续": {
    "pinyin": "duàn duàn xù xù",
    "definition": "intermittent; off and on; discontinuous; stop-go; stammering; disjointed; inarticulate"
  },
  "断绝": {
    "pinyin": "duàn jué",
    "definition": "to sever; to break off"
  },
  "断裂": {
    "pinyin": "duàn liè",
    "definition": "fracture; rupture; to break apart"
  },
  "锻炼": {
    "pinyin": "duàn liàn",
    "definition": "to toughen; to temper; to engage in physical exercise; to work out; (fig.) to develop one's skills; to train oneself"
  },
  "堆": {
    "pinyin": "duī",
    "definition": "to pile up; to heap up; a mass; pile; heap; stack; large amount"
  },
  "堆积": {
    "pinyin": "duī jī",
    "definition": "to pile up; to heap; accumulation"
  },
  "堆砌": {
    "pinyin": "duī qì",
    "definition": "lit. to pile up (bricks); to pack; fig. to pad out (writing with fancy phrases); ornate rhetoric"
  },
  "队": {
    "pinyin": "duì",
    "definition": "squadron; team; group"
  },
  "队伍": {
    "pinyin": "duì wǔ",
    "definition": "ranks; troops; queue; line; procession"
  },
  "队形": {
    "pinyin": "duì xíng",
    "definition": "formation"
  },
  "队员": {
    "pinyin": "duì yuán",
    "definition": "team member"
  },
  "队长": {
    "pinyin": "duì zhǎng",
    "definition": "captain; team leader"
  },
  "对白": {
    "pinyin": "duì bái",
    "definition": "dialogue (in a movie or a play)"
  },
  "对比": {
    "pinyin": "duì bǐ",
    "definition": "to contrast; contrast; ratio"
  },
  "对不起": {
    "pinyin": "duì bu qǐ",
    "definition": "I'm sorry; excuse me; I beg your pardon; to let (sb) down; to disappoint"
  },
  "对策": {
    "pinyin": "duì cè",
    "definition": "countermeasure for dealing with a situation"
  },
  "对称": {
    "pinyin": "duì chèn",
    "definition": "symmetry; symmetrical"
  },
  "对待": {
    "pinyin": "duì dài",
    "definition": "to treat; treatment"
  },
  "对得起": {
    "pinyin": "duì de qǐ",
    "definition": "not to let sb down; to treat sb fairly; be worthy of"
  },
  "对方": {
    "pinyin": "duì fāng",
    "definition": "the other person; the other side; the other party"
  },
  "对付": {
    "pinyin": "duì fu",
    "definition": "to handle; to deal with; to tackle; to get by with; to make do; (dialect) (usu. used in the negative) to get along with (sb)"
  },
  "对话": {
    "pinyin": "duì huà",
    "definition": "to talk (with sb); dialogue; conversation"
  },
  "对抗": {
    "pinyin": "duì kàng",
    "definition": "to withstand; to resist; to stand off; antagonism; confrontation"
  },
  "对立": {
    "pinyin": "duì lì",
    "definition": "to oppose; to set sth against; to be antagonistic to; antithetical; relative opposite; opposing; diametrical"
  },
  "对联": {
    "pinyin": "duì lián",
    "definition": "rhyming couplet; pair of lines of verse written vertically down the sides of a doorway"
  },
  "对面": {
    "pinyin": "duì miàn",
    "definition": "(sitting) opposite; across (the street); directly in front; to be face to face"
  },
  "对手": {
    "pinyin": "duì shǒu",
    "definition": "opponent; rival; competitor; (well-matched) adversary; match"
  },
  "对外": {
    "pinyin": "duì wài",
    "definition": "external; foreign; pertaining to external or foreign (affairs)"
  },
  "对象": {
    "pinyin": "duì xiàng",
    "definition": "target; object; partner; boyfriend; girlfriend"
  },
  "对弈": {
    "pinyin": "duì yì",
    "definition": "to play go, chess etc"
  },
  "对应": {
    "pinyin": "duì yìng",
    "definition": "to correspond (to); to be equivalent to; to be a counterpart to"
  },
  "对于": {
    "pinyin": "duì yú",
    "definition": "regarding; as far as (sth) is concerned; with regard to"
  },
  "对照": {
    "pinyin": "duì zhào",
    "definition": "to contrast; to compare; to place side by side for comparison (as parallel texts); to check"
  },
  "对峙": {
    "pinyin": "duì zhì",
    "definition": "to stand opposite; to confront; confrontation"
  },
  "对准": {
    "pinyin": "duì zhǔn",
    "definition": "to aim at; to target; to point at; to be directed at; registration; alignment (mechanical engineering)"
  },
  "兑换": {
    "pinyin": "duì huàn",
    "definition": "to convert; to exchange"
  },
  "兑现": {
    "pinyin": "duì xiàn",
    "definition": "(of a check etc) to cash; to honor a commitment"
  },
  "吨": {
    "pinyin": "dūn",
    "definition": "ton (loanword); Taiwan pr. [dùn]"
  },
  "敦促": {
    "pinyin": "dūn cù",
    "definition": "to press; to urge; to hasten"
  },
  "敦厚": {
    "pinyin": "dūn hòu",
    "definition": "genuine; honest and sincere"
  },
  "蹲": {
    "pinyin": "dūn",
    "definition": "to crouch; to squat; to stay (somewhere)"
  },
  "炖": {
    "pinyin": "dùn",
    "definition": "to stew"
  },
  "顿": {
    "pinyin": "dùn",
    "definition": "to stop; to pause; to arrange; to lay out; to kowtow; to stamp (one's foot); at once; classifier for meals, beatings, scoldings etc: time, bout, spell, meal"
  },
  "顿时": {
    "pinyin": "dùn shí",
    "definition": "immediately; suddenly"
  },
  "多半": {
    "pinyin": "duō bàn",
    "definition": "most; mostly; most likely"
  },
  "多边": {
    "pinyin": "duō biān",
    "definition": "multilateral"
  },
  "多次": {
    "pinyin": "duō cì",
    "definition": "many times; repeatedly"
  },
  "多方面": {
    "pinyin": "duō fāng miàn",
    "definition": "many-sided; in many aspects"
  },
  "多功能": {
    "pinyin": "duō gōng néng",
    "definition": "multifunctional; multifunction"
  },
  "多久": {
    "pinyin": "duō jiǔ",
    "definition": "(of time) how long?; (not) a long time"
  },
  "多亏": {
    "pinyin": "duō kuī",
    "definition": "thanks to; luckily"
  },
  "多劳多得": {
    "pinyin": "duō láo duō dé",
    "definition": "work more and get more"
  },
  "多么": {
    "pinyin": "duō me",
    "definition": "how (wonderful etc); what (a great idea etc); however (difficult it may be etc); (in interrogative sentences) how (much etc); to what extent"
  },
  "多媒体": {
    "pinyin": "duō méi tǐ",
    "definition": "multimedia"
  },
  "多年": {
    "pinyin": "duō nián",
    "definition": "many years; for many years; longstanding"
  },
  "多年来": {
    "pinyin": "duō nián lái",
    "definition": "for the past many years"
  },
  "多少": {
    "pinyin": "duō shǎo",
    "definition": "number; amount; somewhat"
  },
  "多数": {
    "pinyin": "duō shù",
    "definition": "majority; most"
  },
  "多心": {
    "pinyin": "duō xīn",
    "definition": "oversensitive; suspicious"
  },
  "多样": {
    "pinyin": "duō yàng",
    "definition": "diverse; diversity; manifold"
  },
  "多余": {
    "pinyin": "duō yú",
    "definition": "superfluous; unnecessary; surplus"
  },
  "多元": {
    "pinyin": "duō yuán",
    "definition": "poly-; multi-; multielement; multivariant; multivariate (math.)"
  },
  "多元化": {
    "pinyin": "duō yuán huà",
    "definition": "diversification; pluralism; to diversify"
  },
  "多云": {
    "pinyin": "duō yún",
    "definition": "cloudy (meteorology)"
  },
  "多种": {
    "pinyin": "duō zhǒng",
    "definition": "many kinds of; multiple; diverse; multi-"
  },
  "哆嗦": {
    "pinyin": "duō suo",
    "definition": "to tremble; to shiver; uncontrolled shaking of the body"
  },
  "夺": {
    "pinyin": "duó",
    "definition": "to seize; to take away forcibly; to wrest control of; to compete or strive for; to force one's way through; to leave out; to lose"
  },
  "夺冠": {
    "pinyin": "duó guàn",
    "definition": "to seize the crown; fig. to win a championship; to win gold medal"
  },
  "夺魁": {
    "pinyin": "duó kuí",
    "definition": "to seize; to win"
  },
  "夺取": {
    "pinyin": "duó qǔ",
    "definition": "to seize; to capture; to wrest control of"
  },
  "躲": {
    "pinyin": "duǒ",
    "definition": "to hide; to dodge; to avoid"
  },
  "躲避": {
    "pinyin": "duǒ bì",
    "definition": "to hide; to evade; to dodge; to take shelter; to avoid (difficulties)"
  },
  "躲藏": {
    "pinyin": "duǒ cáng",
    "definition": "to conceal oneself; to go into hiding; to take cover"
  },
  "堕落": {
    "pinyin": "duò luò",
    "definition": "to degrade; to degenerate; to become depraved; corrupt; a fall from grace"
  },
  "舵手": {
    "pinyin": "duò shǒu",
    "definition": "helmsman"
  },
  "朵": {
    "pinyin": "duǒ",
    "definition": "flower; earlobe; fig. item on both sides; classifier for flowers, clouds etc"
  },
  "讹诈": {
    "pinyin": "é zhà",
    "definition": "to extort under false pretenses; to blackmail; to bluff; to defraud"
  },
  "俄语": {
    "pinyin": "É yǔ",
    "definition": "Russian (language)"
  },
  "鹅": {
    "pinyin": "é",
    "definition": "variant of 鹅"
  },
  "额外": {
    "pinyin": "é wài",
    "definition": "extra; added; additional"
  },
  "厄运": {
    "pinyin": "è yùn",
    "definition": "bad luck; misfortune; adversity"
  },
  "恶": {
    "pinyin": "ě",
    "definition": "used in 恶心"
  },
  "恶化": {
    "pinyin": "è huà",
    "definition": "to worsen"
  },
  "恶劣": {
    "pinyin": "è liè",
    "definition": "vile; nasty; of very poor quality"
  },
  "恶心": {
    "pinyin": "ě xīn",
    "definition": "variant of 恶心"
  },
  "恶性": {
    "pinyin": "è xìng",
    "definition": "malignant; wicked; vicious (circle); producing evil; rapid (decline); runaway (inflation)"
  },
  "恶意": {
    "pinyin": "è yì",
    "definition": "malice; evil intention"
  },
  "饿": {
    "pinyin": "è",
    "definition": "to be hungry; hungry; to starve (sb)"
  },
  "掠夺": {
    "pinyin": "lu:è duó",
    "definition": "to plunder; to rob"
  },
  "略": {
    "pinyin": "lu:è",
    "definition": "brief; sketchy; outline; summary; to omit; (bound form before a single-character verb) a bit; somewhat; slightly; plan; strategy; to capture (territory)"
  },
  "略微": {
    "pinyin": "lu:è wēi",
    "definition": "a little bit; slightly"
  },
  "遏制": {
    "pinyin": "è zhì",
    "definition": "to check; to contain; to hold back; to keep within limits; to constrain; to restrain"
  },
  "鳄鱼": {
    "pinyin": "è yú",
    "definition": "alligator; crocodile"
  },
  "恩赐": {
    "pinyin": "ēn cì",
    "definition": "favor; to give charity to sb out of pity"
  },
  "恩惠": {
    "pinyin": "ēn huì",
    "definition": "favor; grace"
  },
  "恩情": {
    "pinyin": "ēn qíng",
    "definition": "kindness; affection; grace; favor"
  },
  "恩人": {
    "pinyin": "ēn rén",
    "definition": "a benefactor; a person who has significantly helped sb else"
  },
  "恩怨": {
    "pinyin": "ēn yuàn",
    "definition": "gratitude and grudges; resentment; grudges; grievances"
  },
  "儿科": {
    "pinyin": "ér kē",
    "definition": "pediatrics"
  },
  "儿女": {
    "pinyin": "ér nu:3",
    "definition": "children; sons and daughters; a young man and a young woman (in love)"
  },
  "儿童": {
    "pinyin": "ér tóng",
    "definition": "child"
  },
  "儿子": {
    "pinyin": "ér zi",
    "definition": "son"
  },
  "而且": {
    "pinyin": "ér qiě",
    "definition": "(not only ...) but also; moreover; in addition; furthermore"
  },
  "而是": {
    "pinyin": "ér shì",
    "definition": "rather"
  },
  "而已": {
    "pinyin": "ér yǐ",
    "definition": "that's all; nothing more"
  },
  "耳朵": {
    "pinyin": "ěr duo",
    "definition": "ear; handle (on a cup)"
  },
  "耳光": {
    "pinyin": "ěr guāng",
    "definition": "a slap on the face"
  },
  "耳环": {
    "pinyin": "ěr huán",
    "definition": "earring"
  },
  "耳机": {
    "pinyin": "ěr jī",
    "definition": "headphones; earphones; telephone receiver"
  },
  "耳目一新": {
    "pinyin": "ěr mù yī xīn",
    "definition": "a pleasant change; a breath of fresh air; refreshing"
  },
  "耳熟能详": {
    "pinyin": "ěr shú néng xiáng",
    "definition": "what's frequently heard can be repeated in detail (idiom)"
  },
  "耳闻目睹": {
    "pinyin": "ěr wén mù dǔ",
    "definition": "to witness personally"
  },
  "二手": {
    "pinyin": "èr shǒu",
    "definition": "indirectly acquired; second-hand (information, equipment etc); assistant"
  },
  "二手车": {
    "pinyin": "èr shǒu chē",
    "definition": "second-hand car"
  },
  "二维码": {
    "pinyin": "èr wéi mǎ",
    "definition": "two-dimensional barcode; QR code"
  },
  "二氧化碳": {
    "pinyin": "èr yǎng huà tàn",
    "definition": "carbon dioxide CO2"
  },
  "发表": {
    "pinyin": "fā biǎo",
    "definition": "to issue; to publish"
  },
  "发病": {
    "pinyin": "fā bìng",
    "definition": "(of an illness) to occur; (of a person) to get sick; to fall ill; onset (of a medical condition)"
  },
  "发布": {
    "pinyin": "fā bù",
    "definition": "to release; to issue; to announce; to distribute; also written 发布"
  },
  "发布会": {
    "pinyin": "fā bù huì",
    "definition": "news conference; briefing"
  },
  "发财": {
    "pinyin": "fā cái",
    "definition": "to get rich"
  },
  "发愁": {
    "pinyin": "fā chóu",
    "definition": "to worry; to fret; to be anxious; to become sad"
  },
  "发出": {
    "pinyin": "fā chū",
    "definition": "to issue (an order, decree etc); to send out; to dispatch; to produce (a sound); to let out (a laugh)"
  },
  "发达": {
    "pinyin": "fā dá",
    "definition": "well-developed; flourishing; to develop; to promote; to expand; (literary) to achieve fame and fortune; to prosper"
  },
  "发呆": {
    "pinyin": "fā dāi",
    "definition": "to stare blankly; to be stunned; to be lost in thought"
  },
  "发电": {
    "pinyin": "fā diàn",
    "definition": "to generate electricity; to send a telegram"
  },
  "发电机": {
    "pinyin": "fā diàn jī",
    "definition": "electricity generator; dynamo"
  },
  "发动": {
    "pinyin": "fā dòng",
    "definition": "to start; to launch; to unleash; to mobilize; to arouse"
  },
  "发抖": {
    "pinyin": "fā dǒu",
    "definition": "to tremble; to shake; to shiver"
  },
  "发放": {
    "pinyin": "fā fàng",
    "definition": "to provide; to give; to grant"
  },
  "发愤图强": {
    "pinyin": "fā fèn tú qiáng",
    "definition": "to be strongly determined to succeed (idiom)"
  },
  "发光": {
    "pinyin": "fā guāng",
    "definition": "to emit light; to shine; to glow; to glisten; to be luminous"
  },
  "发挥": {
    "pinyin": "fā huī",
    "definition": "to display; to exhibit; to bring out implicit or innate qualities; to express (a thought or moral); to develop (an idea); to elaborate (on a theme)"
  },
  "发火": {
    "pinyin": "fā huǒ",
    "definition": "to catch fire; to ignite; to detonate; to get angry"
  },
  "发酵": {
    "pinyin": "fā jiào",
    "definition": "to ferment; (fig.) (of trends, emotions or repercussions etc) to bubble away; to simmer; to develop"
  },
  "发觉": {
    "pinyin": "fā jué",
    "definition": "to become aware; to detect; to realize; to perceive"
  },
  "发掘": {
    "pinyin": "fā jué",
    "definition": "to excavate; to explore; (fig.) to unearth; to tap into"
  },
  "发愣": {
    "pinyin": "fā lèng",
    "definition": "to stare blankly; to be in a daze"
  },
  "发明": {
    "pinyin": "fā míng",
    "definition": "to invent; an invention"
  },
  "发怒": {
    "pinyin": "fā nù",
    "definition": "to get angry"
  },
  "发脾气": {
    "pinyin": "fā pí qì",
    "definition": "to get angry"
  },
  "发票": {
    "pinyin": "fā piào",
    "definition": "invoice; receipt or bill for purchase"
  },
  "发起": {
    "pinyin": "fā qǐ",
    "definition": "to originate; to initiate; to launch (an attack, an initiative etc); to start; to propose sth (for the first time)"
  },
  "发起人": {
    "pinyin": "fā qǐ rén",
    "definition": "proposer; initiator; founding member"
  },
  "发热": {
    "pinyin": "fā rè",
    "definition": "to have a high temperature; feverish; unable to think calmly; to emit heat"
  },
  "发烧": {
    "pinyin": "fā shāo",
    "definition": "to have a high temperature (from illness); to have a fever"
  },
  "发射": {
    "pinyin": "fā shè",
    "definition": "to shoot (a projectile); to fire (a rocket); to launch; to emit (a particle); to discharge; emanation; emission"
  },
  "发生": {
    "pinyin": "fā shēng",
    "definition": "to happen; to occur; to take place; to break out"
  },
  "发誓": {
    "pinyin": "fā shì",
    "definition": "to vow; to pledge; to swear"
  },
  "发送": {
    "pinyin": "fā sòng",
    "definition": "to transmit; to dispatch; to issue (an official document or credential)"
  },
  "发现": {
    "pinyin": "fā xiàn",
    "definition": "to notice; to become aware of; to discover; to find; to detect; a discovery"
  },
  "发泄": {
    "pinyin": "fā xiè",
    "definition": "to give vent to (one's feelings)"
  },
  "发行": {
    "pinyin": "fā xíng",
    "definition": "to publish; to issue (stocks, currency etc); to release; to distribute (a film)"
  },
  "发型": {
    "pinyin": "fà xíng",
    "definition": "hairstyle; coiffure; hairdo"
  },
  "发言": {
    "pinyin": "fā yán",
    "definition": "to make a speech; statement; utterance"
  },
  "发言人": {
    "pinyin": "fā yán rén",
    "definition": "spokesperson"
  },
  "发炎": {
    "pinyin": "fā yán",
    "definition": "to become inflamed; inflammation"
  },
  "发扬": {
    "pinyin": "fā yáng",
    "definition": "to develop; to make full use of"
  },
  "发扬光大": {
    "pinyin": "fā yáng guāng dà",
    "definition": "to develop and promote; to carry forward; to bring to great height of development"
  },
  "发育": {
    "pinyin": "fā yù",
    "definition": "to develop; to mature; growth; development; (sexually) mature"
  },
  "发源地": {
    "pinyin": "fā yuán dì",
    "definition": "place of origin; birthplace; source"
  },
  "发展": {
    "pinyin": "fā zhǎn",
    "definition": "development; growth; to develop; to grow; to expand"
  },
  "发作": {
    "pinyin": "fā zuò",
    "definition": "to flare up; to break out"
  },
  "罚": {
    "pinyin": "fá",
    "definition": "to punish; to penalize"
  },
  "罚款": {
    "pinyin": "fá kuǎn",
    "definition": "to fine; penalty; fine (monetary)"
  },
  "阀门": {
    "pinyin": "fá mén",
    "definition": "valve (mechanical)"
  },
  "法": {
    "pinyin": "fǎ",
    "definition": "variant of 法"
  },
  "法官": {
    "pinyin": "fǎ guān",
    "definition": "judge (in court)"
  },
  "法规": {
    "pinyin": "fǎ guī",
    "definition": "legislation; statute"
  },
  "法律": {
    "pinyin": "fǎ lu:4",
    "definition": "law"
  },
  "法人": {
    "pinyin": "fǎ rén",
    "definition": "legal person; corporation; see also 人"
  },
  "法庭": {
    "pinyin": "fǎ tíng",
    "definition": "court of law"
  },
  "法语": {
    "pinyin": "Fǎ yǔ",
    "definition": "French (language)"
  },
  "法院": {
    "pinyin": "fǎ yuàn",
    "definition": "court of law; court"
  },
  "法制": {
    "pinyin": "fǎ zhì",
    "definition": "legal system and institutions"
  },
  "帆": {
    "pinyin": "fān",
    "definition": "variant of 帆"
  },
  "帆船": {
    "pinyin": "fān chuán",
    "definition": "sailboat"
  },
  "番": {
    "pinyin": "Pān",
    "definition": "surname Pan"
  },
  "番茄": {
    "pinyin": "fān qié",
    "definition": "tomato"
  },
  "翻": {
    "pinyin": "fān",
    "definition": "to turn over; to flip over; to overturn; to rummage through; to translate; to decode; to double; to climb over or into; to cross"
  },
  "翻番": {
    "pinyin": "fān fān",
    "definition": "to double; to increase by a certain number of times"
  },
  "翻来覆去": {
    "pinyin": "fān lái fù qù",
    "definition": "to toss and turn (sleeplessly); again and again"
  },
  "翻天覆地": {
    "pinyin": "fān tiān fù dì",
    "definition": "sky and the earth turning upside down (idiom); fig. complete confusion; everything turned on its head"
  },
  "翻译": {
    "pinyin": "fān yì",
    "definition": "to translate; to interpret; translator; interpreter; translation; interpretation"
  },
  "凡": {
    "pinyin": "fán",
    "definition": "ordinary; commonplace; mundane; temporal; of the material world (as opposed to supernatural or immortal levels); every; all; whatever; altogether; gist; outline; note of Chinese musical scale"
  },
  "凡是": {
    "pinyin": "fán shì",
    "definition": "each and every; every; all; any"
  },
  "烦": {
    "pinyin": "fán",
    "definition": "to feel vexed; to bother; to trouble; superfluous and confusing; edgy"
  },
  "烦闷": {
    "pinyin": "fán mèn",
    "definition": "moody; gloomy"
  },
  "烦恼": {
    "pinyin": "fán nǎo",
    "definition": "to be worried; to be distressed; worries"
  },
  "烦躁": {
    "pinyin": "fán zào",
    "definition": "jittery; twitchy; fidgety"
  },
  "繁华": {
    "pinyin": "fán huá",
    "definition": "flourishing; bustling"
  },
  "繁忙": {
    "pinyin": "fán máng",
    "definition": "busy; bustling"
  },
  "繁荣": {
    "pinyin": "fán róng",
    "definition": "prosperous; booming (economy)"
  },
  "繁体字": {
    "pinyin": "fán tǐ zì",
    "definition": "traditional Chinese character"
  },
  "繁殖": {
    "pinyin": "fán zhí",
    "definition": "to breed; to reproduce; to propagate"
  },
  "繁重": {
    "pinyin": "fán zhòng",
    "definition": "heavy; burdensome; heavy-duty; arduous; onerous"
  },
  "反": {
    "pinyin": "fǎn",
    "definition": "contrary; in reverse; inside out or upside down; to reverse; to return; to oppose; opposite; against; anti-; to rebel; to use analogy; instead; abbr. for 切 phonetic system"
  },
  "反驳": {
    "pinyin": "fǎn bó",
    "definition": "to retort; to refute"
  },
  "反差": {
    "pinyin": "fǎn chā",
    "definition": "contrast; discrepancy"
  },
  "反常": {
    "pinyin": "fǎn cháng",
    "definition": "unusual; abnormal"
  },
  "反弹": {
    "pinyin": "fǎn tán",
    "definition": "to bounce; to bounce back; to boomerang; to ricochet; rebound (of stock market etc); bounce; backlash; negative repercussions"
  },
  "反倒": {
    "pinyin": "fǎn dào",
    "definition": "but on the contrary; but expectedly"
  },
  "反动": {
    "pinyin": "fǎn dòng",
    "definition": "reaction; reactionary"
  },
  "反对": {
    "pinyin": "fǎn duì",
    "definition": "to oppose; to be against; to object to"
  },
  "反而": {
    "pinyin": "fǎn ér",
    "definition": "on the contrary; instead"
  },
  "反复": {
    "pinyin": "fǎn fù",
    "definition": "variant of 反复"
  },
  "反感": {
    "pinyin": "fǎn gǎn",
    "definition": "to be disgusted with; to dislike; bad reaction; antipathy"
  },
  "反过来": {
    "pinyin": "fǎn guo lái",
    "definition": "conversely; in reverse order; in an opposite direction"
  },
  "反击": {
    "pinyin": "fǎn jī",
    "definition": "to strike back; to beat back; to counterattack"
  },
  "反抗": {
    "pinyin": "fǎn kàng",
    "definition": "to resist; to rebel"
  },
  "反馈": {
    "pinyin": "fǎn kuì",
    "definition": "to send back information; feedback"
  },
  "反面": {
    "pinyin": "fǎn miàn",
    "definition": "reverse side; backside; the other side (of a problem etc); negative; bad"
  },
  "反射": {
    "pinyin": "fǎn shè",
    "definition": "to reflect; reflection (from a mirror etc); reflex (i.e. automatic reaction of organism)"
  },
  "反省": {
    "pinyin": "fǎn xǐng",
    "definition": "to reflect upon oneself; to examine one's conscience; to question oneself; to search one's soul"
  },
  "反思": {
    "pinyin": "fǎn sī",
    "definition": "to think back over sth; to review; to revisit; to rethink; reflection; reassessment"
  },
  "反问": {
    "pinyin": "fǎn wèn",
    "definition": "to ask (a question) in reply; to answer a question with a question; rhetorical question"
  },
  "反响": {
    "pinyin": "fǎn xiǎng",
    "definition": "repercussions; reaction; echo"
  },
  "反应": {
    "pinyin": "fǎn yìng",
    "definition": "to react; to respond; reaction; response; reply; chemical reaction"
  },
  "反映": {
    "pinyin": "fǎn yìng",
    "definition": "to mirror; to reflect; mirror image; reflection; (fig.) to report; to make known; to render"
  },
  "反正": {
    "pinyin": "fǎn zhèng",
    "definition": "anyway; in any case; to come over from the enemy's side"
  },
  "反之": {
    "pinyin": "fǎn zhī",
    "definition": "on the other hand...; conversely..."
  },
  "返还": {
    "pinyin": "fǎn huán",
    "definition": "restitution; return of something to its original owner; remittance"
  },
  "返回": {
    "pinyin": "fǎn huí",
    "definition": "to return to; to come (or go) back"
  },
  "犯": {
    "pinyin": "fàn",
    "definition": "to violate; to offend; to assault; criminal; crime; to make a mistake; recurrence (of mistake or sth bad)"
  },
  "犯愁": {
    "pinyin": "fàn chóu",
    "definition": "to worry; to be anxious"
  },
  "犯规": {
    "pinyin": "fàn guī",
    "definition": "to break the rules; an illegality; a foul"
  },
  "犯罪": {
    "pinyin": "fàn zuì",
    "definition": "to commit a crime; crime; offense"
  },
  "泛滥": {
    "pinyin": "fàn làn",
    "definition": "to be in flood; to overflow (the banks); to inundate; to spread unchecked"
  },
  "饭": {
    "pinyin": "fàn",
    "definition": "cooked rice; meal; (loanword) fan; devotee"
  },
  "饭店": {
    "pinyin": "fàn diàn",
    "definition": "restaurant; hotel"
  },
  "饭馆": {
    "pinyin": "fàn guǎn",
    "definition": "restaurant"
  },
  "饭碗": {
    "pinyin": "fàn wǎn",
    "definition": "rice bowl; fig. livelihood; job; way of making a living"
  },
  "范畴": {
    "pinyin": "fàn chóu",
    "definition": "category"
  },
  "范围": {
    "pinyin": "fàn wéi",
    "definition": "range; scope; limit; extent"
  },
  "贩卖": {
    "pinyin": "fàn mài",
    "definition": "to sell; to peddle; to traffic"
  },
  "方案": {
    "pinyin": "fāng àn",
    "definition": "plan; program (for action etc); proposal; proposed bill"
  },
  "方便": {
    "pinyin": "fāng biàn",
    "definition": "convenient; suitable; to facilitate; to make things easy; having money to spare; (euphemism) to relieve oneself"
  },
  "方便面": {
    "pinyin": "fāng biàn miàn",
    "definition": "instant noodles"
  },
  "方法": {
    "pinyin": "fāng fǎ",
    "definition": "method; way; means"
  },
  "方方面面": {
    "pinyin": "fāng fāng miàn miàn",
    "definition": "all sides; all aspects; multifaceted"
  },
  "方面": {
    "pinyin": "fāng miàn",
    "definition": "respect; aspect; field; side"
  },
  "方式": {
    "pinyin": "fāng shì",
    "definition": "way; manner; style; mode; pattern"
  },
  "方位": {
    "pinyin": "fāng wèi",
    "definition": "direction; points of the compass; bearing; position; azimuth"
  },
  "方向": {
    "pinyin": "fāng xiàng",
    "definition": "direction; orientation"
  },
  "方向盘": {
    "pinyin": "fāng xiàng pán",
    "definition": "steering wheel"
  },
  "方言": {
    "pinyin": "Fāng yán",
    "definition": "the first Chinese dialect dictionary, edited by Yang Xiong 扬雄 in 1st century, containing over 9000 characters"
  },
  "方针": {
    "pinyin": "fāng zhēn",
    "definition": "policy; guidelines"
  },
  "防": {
    "pinyin": "fáng",
    "definition": "to protect; to defend; to guard against; to prevent"
  },
  "防盗": {
    "pinyin": "fáng dào",
    "definition": "to guard against theft; anti-theft"
  },
  "防盗门": {
    "pinyin": "fáng dào mén",
    "definition": "security door"
  },
  "防范": {
    "pinyin": "fáng fàn",
    "definition": "to be on guard; wariness; to guard against; preventive"
  },
  "防护": {
    "pinyin": "fáng hù",
    "definition": "to defend; to protect"
  },
  "防火墙": {
    "pinyin": "fáng huǒ qiáng",
    "definition": "firewall"
  },
  "防守": {
    "pinyin": "fáng shǒu",
    "definition": "to defend; to protect (against)"
  },
  "防卫": {
    "pinyin": "fáng wèi",
    "definition": "to defend; defensive; defense"
  },
  "防汛": {
    "pinyin": "fáng xùn",
    "definition": "flood control; anti-flood (precautions)"
  },
  "防疫": {
    "pinyin": "fáng yì",
    "definition": "to prevent epidemics"
  },
  "防御": {
    "pinyin": "fáng yù",
    "definition": "defense; to defend"
  },
  "防止": {
    "pinyin": "fáng zhǐ",
    "definition": "to prevent; to guard against; to take precautions"
  },
  "防治": {
    "pinyin": "fáng zhì",
    "definition": "to prevent and cure; prevention and cure"
  },
  "妨碍": {
    "pinyin": "fáng ài",
    "definition": "to hinder; to obstruct"
  },
  "妨害": {
    "pinyin": "fáng hài",
    "definition": "to jeopardize; to be harmful to; to undermine"
  },
  "房地产": {
    "pinyin": "fáng dì chǎn",
    "definition": "real estate"
  },
  "房东": {
    "pinyin": "fáng dōng",
    "definition": "landlord"
  },
  "房价": {
    "pinyin": "fáng jià",
    "definition": "house price; cost of housing"
  },
  "房间": {
    "pinyin": "fáng jiān",
    "definition": "room"
  },
  "房屋": {
    "pinyin": "fáng wū",
    "definition": "house; building"
  },
  "房子": {
    "pinyin": "fáng zi",
    "definition": "house; building (single- or two-story); apartment; room"
  },
  "房租": {
    "pinyin": "fáng zū",
    "definition": "rent for a room or house"
  },
  "仿": {
    "pinyin": "fǎng",
    "definition": "to imitate; to copy"
  },
  "仿佛": {
    "pinyin": "fǎng fú",
    "definition": "variant of 仿佛"
  },
  "仿制": {
    "pinyin": "fǎng zhì",
    "definition": "to copy; to imitate; to make by imitating a model"
  },
  "访谈": {
    "pinyin": "fǎng tán",
    "definition": "to visit and discuss; to interview"
  },
  "访问": {
    "pinyin": "fǎng wèn",
    "definition": "to visit; to call on; to interview"
  },
  "纺织": {
    "pinyin": "fǎng zhī",
    "definition": "spinning and weaving"
  },
  "放": {
    "pinyin": "fàng",
    "definition": "to put; to place; to release; to free; to let go; to let out; to set off (fireworks)"
  },
  "放大": {
    "pinyin": "fàng dà",
    "definition": "to enlarge; to magnify"
  },
  "放到": {
    "pinyin": "fàng dào",
    "definition": "Put in"
  },
  "放过": {
    "pinyin": "fàng guò",
    "definition": "to let off; to let slip by; to let sb get away with sth"
  },
  "放假": {
    "pinyin": "fàng jià",
    "definition": "to have a holiday or vacation"
  },
  "放弃": {
    "pinyin": "fàng qì",
    "definition": "to renounce; to abandon; to give up"
  },
  "放射": {
    "pinyin": "fàng shè",
    "definition": "to radiate; radioactive"
  },
  "放手": {
    "pinyin": "fàng shǒu",
    "definition": "to let go one's hold; to give up; to have a free hand"
  },
  "放暑假": {
    "pinyin": "fàng shǔ jià",
    "definition": "to be on summer vacation"
  },
  "放水": {
    "pinyin": "fàng shuǐ",
    "definition": "to turn on the water; to let water out; (sports) to throw a game"
  },
  "放肆": {
    "pinyin": "fàng sì",
    "definition": "wanton; unbridled; presumptuous; impudent"
  },
  "放松": {
    "pinyin": "fàng sōng",
    "definition": "to relax; to slacken; to loosen"
  },
  "放下": {
    "pinyin": "fàng xià",
    "definition": "to lay down; to put down; to let go of; to relinquish; to set aside; to lower (the blinds etc)"
  },
  "放心": {
    "pinyin": "fàng xīn",
    "definition": "to feel relieved; to feel reassured; to be at ease"
  },
  "放学": {
    "pinyin": "fàng xué",
    "definition": "to dismiss students at the end of the school day"
  },
  "放映": {
    "pinyin": "fàng yìng",
    "definition": "to show (a movie); to screen"
  },
  "放置": {
    "pinyin": "fàng zhì",
    "definition": "to put"
  },
  "放纵": {
    "pinyin": "fàng zòng",
    "definition": "to indulge; to pamper; to connive at; permissive; indulgent; self-indulgent; unrestrained; undisciplined; uncultured; boorish"
  },
  "飞": {
    "pinyin": "fēi",
    "definition": "to fly"
  },
  "飞船": {
    "pinyin": "fēi chuán",
    "definition": "spaceship; spacecraft; dirigible; airship"
  },
  "飞机": {
    "pinyin": "fēi jī",
    "definition": "airplane"
  },
  "飞禽走兽": {
    "pinyin": "fēi qín zǒu shòu",
    "definition": "birds and animals; the beasts of the field and the birds of the air"
  },
  "飞速": {
    "pinyin": "fēi sù",
    "definition": "swift; rapidly"
  },
  "飞往": {
    "pinyin": "fēi wǎng",
    "definition": "Go to"
  },
  "飞翔": {
    "pinyin": "fēi xiáng",
    "definition": "to circle in the air; to soar"
  },
  "飞行": {
    "pinyin": "fēi xíng",
    "definition": "(of planes etc) to fly; flying; flight; aviation"
  },
  "飞行员": {
    "pinyin": "fēi xíng yuán",
    "definition": "pilot; aviator"
  },
  "飞跃": {
    "pinyin": "fēi yuè",
    "definition": "to leap"
  },
  "非": {
    "pinyin": "Fēi",
    "definition": "abbr. for 洲, Africa"
  },
  "非常": {
    "pinyin": "fēi cháng",
    "definition": "very; really; unusual; extraordinary"
  },
  "非得": {
    "pinyin": "fēi děi",
    "definition": "(followed by a verb phrase, then – optionally – 不可, or 不行 etc) must"
  },
  "非法": {
    "pinyin": "fēi fǎ",
    "definition": "illegal"
  },
  "非凡": {
    "pinyin": "fēi fán",
    "definition": "out of the ordinary; unusually (good, talented etc)"
  },
  "非金属": {
    "pinyin": "fēi jīn shǔ",
    "definition": "nonmetal (chemistry)"
  },
  "绯闻": {
    "pinyin": "fēi wén",
    "definition": "sex scandal"
  },
  "肥": {
    "pinyin": "féi",
    "definition": "fat; fertile; loose-fitting or large; to fertilize; to become rich by illegal means; fertilizer; manure"
  },
  "肥料": {
    "pinyin": "féi liào",
    "definition": "fertilizer; manure"
  },
  "肥胖": {
    "pinyin": "féi pàng",
    "definition": "fat; obese"
  },
  "肥沃": {
    "pinyin": "féi wò",
    "definition": "fertile"
  },
  "肥皂": {
    "pinyin": "féi zào",
    "definition": "soap"
  },
  "匪徒": {
    "pinyin": "fěi tú",
    "definition": "gangster; bandit"
  },
  "诽谤": {
    "pinyin": "fěi bàng",
    "definition": "to slander; to libel"
  },
  "废": {
    "pinyin": "fèi",
    "definition": "to abolish; to abandon; to abrogate; to discard; to depose; to oust; crippled; abandoned; waste"
  },
  "废除": {
    "pinyin": "fèi chú",
    "definition": "to abolish; to abrogate; to repeal"
  },
  "废话": {
    "pinyin": "fèi huà",
    "definition": "nonsense; rubbish; superfluous words; You don't say!; No kidding! (gently sarcastic)"
  },
  "废品": {
    "pinyin": "fèi pǐn",
    "definition": "production rejects; seconds; scrap; discarded material"
  },
  "废寝忘食": {
    "pinyin": "fèi qǐn wàng shí",
    "definition": "to neglect sleep and forget about food (idiom); to skip one's sleep and meals; to be completely wrapped up in one's work"
  },
  "废物": {
    "pinyin": "fèi wù",
    "definition": "rubbish; waste material; useless person"
  },
  "废墟": {
    "pinyin": "fèi xū",
    "definition": "ruins"
  },
  "沸沸扬扬": {
    "pinyin": "fèi fèi yáng yáng",
    "definition": "bubbling and gurgling; hubbubing; abuzz"
  },
  "沸腾": {
    "pinyin": "fèi téng",
    "definition": "(of a liquid) to boil; (of sentiments etc) to boil over; to flare up; to be impassioned"
  },
  "肺": {
    "pinyin": "fèi",
    "definition": "lung"
  },
  "费": {
    "pinyin": "Fèi",
    "definition": "surname Fei"
  },
  "费劲": {
    "pinyin": "fèi jìn",
    "definition": "to require effort; strenuous"
  },
  "费用": {
    "pinyin": "fèi yòng",
    "definition": "cost; expenditure; expense"
  },
  "分辨": {
    "pinyin": "fēn biàn",
    "definition": "to distinguish; to differentiate; to resolve"
  },
  "分别": {
    "pinyin": "fēn bié",
    "definition": "to part; to leave each other; to distinguish; to tell apart; difference; distinction; in different ways; differently; separately; individually"
  },
  "分布": {
    "pinyin": "fēn bù",
    "definition": "to scatter; to distribute; to be distributed (over an area etc); (statistical, geographic) distribution"
  },
  "分成": {
    "pinyin": "fēn chéng",
    "definition": "to divide (into); to split a bonus; to break into; tenths; percentage allotment"
  },
  "分寸": {
    "pinyin": "fēn cun",
    "definition": "propriety; appropriate behavior; proper speech or action; within the norms"
  },
  "分担": {
    "pinyin": "fēn dān",
    "definition": "to share (a burden, a cost, a responsibility)"
  },
  "分割": {
    "pinyin": "fēn gē",
    "definition": "to cut up; to break up"
  },
  "分工": {
    "pinyin": "fēn gōng",
    "definition": "to divide up the work; division of labor"
  },
  "分红": {
    "pinyin": "fēn hóng",
    "definition": "dividend; to award a bonus"
  },
  "分化": {
    "pinyin": "fēn huà",
    "definition": "to split apart; differentiation"
  },
  "分解": {
    "pinyin": "fēn jiě",
    "definition": "to resolve; to decompose; to break down"
  },
  "分开": {
    "pinyin": "fēn kāi",
    "definition": "to separate; to part"
  },
  "分类": {
    "pinyin": "fēn lèi",
    "definition": "to classify"
  },
  "分离": {
    "pinyin": "fēn lí",
    "definition": "to separate"
  },
  "分量": {
    "pinyin": "fēn liàng",
    "definition": "(vector) component"
  },
  "分裂": {
    "pinyin": "fēn liè",
    "definition": "to split up; to divide; to break up; fission; schism"
  },
  "分泌": {
    "pinyin": "fēn mì",
    "definition": "to secrete; secretion"
  },
  "分明": {
    "pinyin": "fēn míng",
    "definition": "clear; distinct; evidently; clearly"
  },
  "分配": {
    "pinyin": "fēn pèi",
    "definition": "to distribute; to assign; to allocate; to partition (a hard drive)"
  },
  "分歧": {
    "pinyin": "fēn qí",
    "definition": "divergent; difference (of opinion, position); disagreement; (math.) bifurcation"
  },
  "分散": {
    "pinyin": "fēn sàn",
    "definition": "to scatter; to disperse; to distribute"
  },
  "分手": {
    "pinyin": "fēn shǒu",
    "definition": "to part company; to split up; to break up"
  },
  "分数": {
    "pinyin": "fēn shù",
    "definition": "(exam) grade; mark; score; fraction"
  },
  "分外": {
    "pinyin": "fèn wài",
    "definition": "exceptionally; not one's responsibility or job"
  },
  "分为": {
    "pinyin": "fēn wéi",
    "definition": "to divide sth into (parts); to subdivide"
  },
  "分析": {
    "pinyin": "fēn xī",
    "definition": "to analyze; analysis"
  },
  "分享": {
    "pinyin": "fēn xiǎng",
    "definition": "to share (let others have some of sth good)"
  },
  "分赃": {
    "pinyin": "fēn zāng",
    "definition": "to share the booty; to divide ill-gotten gains"
  },
  "分之": {
    "pinyin": "fēn zhī",
    "definition": "(indicating a fraction)"
  },
  "分支": {
    "pinyin": "fēn zhī",
    "definition": "branch (of company, river etc); to branch; to diverge; to ramify; to subdivide"
  },
  "分钟": {
    "pinyin": "fēn zhōng",
    "definition": "minute"
  },
  "分组": {
    "pinyin": "fēn zǔ",
    "definition": "to divide into groups; group (formed from a larger group); subgroup; (computer networking) packet"
  },
  "吩咐": {
    "pinyin": "fēn fù",
    "definition": "to tell; to instruct; to command"
  },
  "纷纷": {
    "pinyin": "fēn fēn",
    "definition": "one after another; in succession; one by one; continuously; diverse; in profusion; numerous and confused; pell-mell"
  },
  "芬芳": {
    "pinyin": "fēn fāng",
    "definition": "perfume; fragrant"
  },
  "氛围": {
    "pinyin": "fēn wéi",
    "definition": "ambience; atmosphere"
  },
  "坟": {
    "pinyin": "fén",
    "definition": "grave; tomb; embankment; mound; ancient book"
  },
  "坟墓": {
    "pinyin": "fén mù",
    "definition": "grave; tomb"
  },
  "焚烧": {
    "pinyin": "fén shāo",
    "definition": "to burn; to set on fire"
  },
  "粉": {
    "pinyin": "fěn",
    "definition": "powder; cosmetic face powder; food prepared from starch; noodles or pasta made from any kind of flour; to turn to powder; (dialect) to whitewash; white; pink; (suffix) fan (abbr. for 粉丝); to be a fan of"
  },
  "粉末": {
    "pinyin": "fěn mò",
    "definition": "fine powder; dust"
  },
  "粉色": {
    "pinyin": "fěn sè",
    "definition": "pink; white; erotic; beautiful woman; powdered (with make-up)"
  },
  "粉丝": {
    "pinyin": "fěn sī",
    "definition": "bean vermicelli; mung bean starch noodles; Chinese vermicelli; cellophane noodles; fan (loanword); enthusiast for sb or sth"
  },
  "粉碎": {
    "pinyin": "fěn suì",
    "definition": "to crush; to smash; to shatter"
  },
  "份": {
    "pinyin": "fèn",
    "definition": "classifier for gifts, newspaper, magazine, papers, reports, contracts etc; variant of 分"
  },
  "份额": {
    "pinyin": "fèn é",
    "definition": "share; portion"
  },
  "奋斗": {
    "pinyin": "fèn dòu",
    "definition": "to strive; to struggle"
  },
  "奋力": {
    "pinyin": "fèn lì",
    "definition": "to do everything one can; to spare no effort; to strive"
  },
  "奋勇": {
    "pinyin": "fèn yǒng",
    "definition": "dauntless; to summon up courage and determination; using extreme force of will"
  },
  "愤怒": {
    "pinyin": "fèn nù",
    "definition": "angry; indignant; wrath; ire"
  },
  "粪": {
    "pinyin": "fèn",
    "definition": "manure; dung"
  },
  "粪便": {
    "pinyin": "fèn biàn",
    "definition": "excrement; feces; night soil"
  },
  "丰富": {
    "pinyin": "fēng fù",
    "definition": "to enrich; rich; plentiful; abundant"
  },
  "丰富多彩": {
    "pinyin": "fēng fù duō cǎi",
    "definition": "richly colorful"
  },
  "丰厚": {
    "pinyin": "fēng hòu",
    "definition": "generous; ample"
  },
  "丰满": {
    "pinyin": "Fēng mǎn",
    "definition": "Fengman district of Jilin city 吉林市, Jilin province"
  },
  "丰盛": {
    "pinyin": "fēng shèng",
    "definition": "rich; sumptuous"
  },
  "丰收": {
    "pinyin": "fēng shōu",
    "definition": "bumper harvest"
  },
  "丰硕": {
    "pinyin": "fēng shuò",
    "definition": "plentiful; substantial; rich (in resources etc)"
  },
  "风": {
    "pinyin": "fēng",
    "definition": "wind; news; style; custom; manner"
  },
  "风暴": {
    "pinyin": "fēng bào",
    "definition": "storm; violent commotion; fig. crisis (e.g. revolution, uprising, financial crisis etc)"
  },
  "风波": {
    "pinyin": "fēng bō",
    "definition": "disturbance; crisis; disputes; restlessness"
  },
  "风采": {
    "pinyin": "fēng cǎi",
    "definition": "svelte; elegant manner; graceful bearing"
  },
  "风餐露宿": {
    "pinyin": "fēng cān lù sù",
    "definition": "lit. to eat in the open air and sleep outdoors (idiom); fig. to rough it"
  },
  "风度": {
    "pinyin": "fēng dù",
    "definition": "elegance (for men); elegant demeanor; grace; poise"
  },
  "风范": {
    "pinyin": "fēng fàn",
    "definition": "air; manner; model; paragon; demeanor"
  },
  "风风雨雨": {
    "pinyin": "fēng fēng yǔ yǔ",
    "definition": "trials and tribulations; ups and downs"
  },
  "风格": {
    "pinyin": "fēng gé",
    "definition": "style"
  },
  "风光": {
    "pinyin": "fēng guāng",
    "definition": "scene; view; sight; landscape; to be well-regarded; to be well-off; grand (dialect); impressive (dialect)"
  },
  "风和日丽": {
    "pinyin": "fēng hé rì lì",
    "definition": "moderate wind, beautiful sun (idiom); fine sunny weather, esp. in springtime"
  },
  "风景": {
    "pinyin": "fēng jǐng",
    "definition": "scenery; landscape"
  },
  "风浪": {
    "pinyin": "fēng làng",
    "definition": "wind and waves; rough waters; (fig.) hardship"
  },
  "风力": {
    "pinyin": "fēng lì",
    "definition": "wind force; wind power"
  },
  "风流": {
    "pinyin": "fēng liú",
    "definition": "distinguished and accomplished; outstanding; talented in letters and unconventional in lifestyle; romantic; dissolute; loose"
  },
  "风貌": {
    "pinyin": "fēng mào",
    "definition": "style; manner; ethos"
  },
  "风气": {
    "pinyin": "fēng qì",
    "definition": "general mood; atmosphere; common practice"
  },
  "风情": {
    "pinyin": "fēng qíng",
    "definition": "mien; bearing; grace; amorous feelings; flirtatious expressions; local conditions and customs; wind force, direction etc"
  },
  "风趣": {
    "pinyin": "fēng qù",
    "definition": "charm; humor; wit; humorous; witty"
  },
  "风沙": {
    "pinyin": "fēng shā",
    "definition": "sand blown by wind; sandstorm"
  },
  "风尚": {
    "pinyin": "fēng shàng",
    "definition": "current custom; current way of doing things"
  },
  "风水": {
    "pinyin": "fēng shuǐ",
    "definition": "feng shui; geomancy"
  },
  "风俗": {
    "pinyin": "fēng sú",
    "definition": "social custom"
  },
  "风土人情": {
    "pinyin": "fēng tǔ rén qíng",
    "definition": "local conditions and customs (idiom)"
  },
  "风味": {
    "pinyin": "fēng wèi",
    "definition": "distinctive flavor; distinctive style"
  },
  "风险": {
    "pinyin": "fēng xiǎn",
    "definition": "risk; hazard"
  },
  "风雨": {
    "pinyin": "fēng yǔ",
    "definition": "wind and rain; the elements; (fig.) trials and hardships"
  },
  "风云": {
    "pinyin": "fēng yún",
    "definition": "weather; unstable situation"
  },
  "风筝": {
    "pinyin": "fēng zhēng",
    "definition": "kite"
  },
  "封": {
    "pinyin": "Fēng",
    "definition": "surname Feng"
  },
  "封闭": {
    "pinyin": "fēng bì",
    "definition": "to close; to seal off; to close down (an illegal venue); closed (i.e. isolated from outside input)"
  },
  "封顶": {
    "pinyin": "fēng dǐng",
    "definition": "to put a roof (on a building); to cap the roof (finishing a building project); fig. to put a ceiling (on spending, prize, ambition etc); to top off; fig. to reach the highest point (of growth, profit, interest rates); to stop growing (of plant bud or branch)"
  },
  "封建": {
    "pinyin": "fēng jiàn",
    "definition": "system of enfeoffment; feudalism; feudal; feudalistic"
  },
  "封面": {
    "pinyin": "fēng miàn",
    "definition": "cover (of a publication)"
  },
  "封锁": {
    "pinyin": "fēng suǒ",
    "definition": "to blockade; to seal off; to lock down"
  },
  "疯": {
    "pinyin": "fēng",
    "definition": "insane; mad; wild"
  },
  "疯狂": {
    "pinyin": "fēng kuáng",
    "definition": "crazy; frenzied; wild"
  },
  "疯子": {
    "pinyin": "fēng zi",
    "definition": "madman; lunatic"
  },
  "峰回路转": {
    "pinyin": "fēng huí lù zhuǎn",
    "definition": "the mountain road twists around each new peak (idiom); (of a mountain road) twisting and turning; fig. an opportunity has come unexpectedly; things have taken a new turn"
  },
  "峰会": {
    "pinyin": "fēng huì",
    "definition": "summit meeting"
  },
  "锋利": {
    "pinyin": "fēng lì",
    "definition": "sharp (e.g. knife blade); incisive; to the point"
  },
  "蜂蜜": {
    "pinyin": "fēng mì",
    "definition": "honey"
  },
  "逢": {
    "pinyin": "féng",
    "definition": "to meet by chance; to come across; (of a calendar event) to come along; (of an event) to fall on (a particular day); to fawn upon"
  },
  "讽刺": {
    "pinyin": "fěng cì",
    "definition": "to satirize; to mock; irony; satire; sarcasm"
  },
  "凤凰": {
    "pinyin": "Fèng huáng",
    "definition": "Fenghuang County in Xiangxi Tujia and Miao Autonomous Prefecture 州"
  },
  "奉献": {
    "pinyin": "fèng xiàn",
    "definition": "to offer respectfully; to consecrate; to dedicate; to devote"
  },
  "缝": {
    "pinyin": "féng",
    "definition": "to sew; to stitch"
  },
  "缝合": {
    "pinyin": "féng hé",
    "definition": "to sew together; suture (in surgery); to sew up (a wound)"
  },
  "否定": {
    "pinyin": "fǒu dìng",
    "definition": "to negate; to deny; to reject; negative (answer); negation"
  },
  "否决": {
    "pinyin": "fǒu jué",
    "definition": "to veto; to overrule"
  },
  "否认": {
    "pinyin": "fǒu rèn",
    "definition": "to declare to be untrue; to deny"
  },
  "否则": {
    "pinyin": "fǒu zé",
    "definition": "otherwise; if not; or (else)"
  },
  "孵化": {
    "pinyin": "fū huà",
    "definition": "breeding; to incubate; innovation (esp. in commerce and marketing)"
  },
  "敷": {
    "pinyin": "fū",
    "definition": "to spread; to lay out; to apply (powder, ointment etc); sufficient (to cover); enough"
  },
  "敷衍": {
    "pinyin": "fū yǎn",
    "definition": "to elaborate (on a theme); to expound (the classics); perfunctory; to skimp; to botch; to do sth half-heartedly or just for show; barely enough to get by"
  },
  "佛": {
    "pinyin": "Fó",
    "definition": "Buddha; Buddhism (abbr. for 陀)"
  },
  "佛教": {
    "pinyin": "Fó jiào",
    "definition": "Buddhism"
  },
  "扶": {
    "pinyin": "fú",
    "definition": "to support with the hand; to help sb up; to support oneself by holding onto something; to help"
  },
  "扶持": {
    "pinyin": "fú chí",
    "definition": "to help; to assist"
  },
  "服": {
    "pinyin": "fú",
    "definition": "clothes; dress; garment; to serve (in the military, a prison sentence etc); to obey; to be convinced (by an argument); to convince; to admire; to acclimatize; to take (medicine); mourning clothes; to wear mourning clothes"
  },
  "服从": {
    "pinyin": "fú cóng",
    "definition": "to obey (an order); to comply; to defer"
  },
  "服气": {
    "pinyin": "fú qì",
    "definition": "to be convinced; to accept"
  },
  "服饰": {
    "pinyin": "fú shì",
    "definition": "apparel; clothing and personal adornment"
  },
  "服务": {
    "pinyin": "fú wù",
    "definition": "to serve; service"
  },
  "服务器": {
    "pinyin": "fú wù qì",
    "definition": "server (computer)"
  },
  "服务员": {
    "pinyin": "fú wù yuán",
    "definition": "waiter; waitress; attendant; customer service personnel"
  },
  "服用": {
    "pinyin": "fú yòng",
    "definition": "to take (medicine)"
  },
  "服装": {
    "pinyin": "fú zhuāng",
    "definition": "dress; clothing; costume; clothes"
  },
  "俘获": {
    "pinyin": "fú huò",
    "definition": "to capture (enemy property or personnel); capture (physics: absorption of subatomic particle by an atom or nucleus)"
  },
  "俘虏": {
    "pinyin": "fú lǔ",
    "definition": "captive"
  },
  "浮": {
    "pinyin": "fú",
    "definition": "to float; superficial; floating; unstable; movable; provisional; temporary; transient; impetuous; hollow; inflated; to exceed; superfluous; excessive; surplus"
  },
  "浮力": {
    "pinyin": "fú lì",
    "definition": "buoyancy"
  },
  "浮现": {
    "pinyin": "fú xiàn",
    "definition": "to appear before one's eyes; to come into view; to float into appearance; to come back (of images from the past); to emerge; it emerges; it occurs (to me that..)"
  },
  "浮躁": {
    "pinyin": "fú zào",
    "definition": "fickle and impatient; restless; giddy; scatterbrained"
  },
  "符号": {
    "pinyin": "fú hào",
    "definition": "symbol; mark; sign"
  },
  "符合": {
    "pinyin": "fú hé",
    "definition": "in keeping with; in accordance with; tallying with; in line with; to agree with; to accord with; to conform to; to correspond with; to manage; to handle"
  },
  "幅": {
    "pinyin": "fú",
    "definition": "width; roll; classifier for textiles or pictures"
  },
  "幅度": {
    "pinyin": "fú dù",
    "definition": "width; extent; range; scope"
  },
  "福": {
    "pinyin": "Fú",
    "definition": "surname Fu; abbr. for Fujian province 省"
  },
  "福利": {
    "pinyin": "fú lì",
    "definition": "material benefit; benefit in kind; (social) welfare"
  },
  "福气": {
    "pinyin": "fú qi",
    "definition": "good fortune; a blessing"
  },
  "辐射": {
    "pinyin": "fú shè",
    "definition": "radiation"
  },
  "抚摸": {
    "pinyin": "fǔ mō",
    "definition": "to gently caress and stroke; to pet; to fondle"
  },
  "抚恤": {
    "pinyin": "fǔ xù",
    "definition": "(of an organization that has a duty of care) to give financial support to relatives of sb who has died or suffered serious injury"
  },
  "抚养": {
    "pinyin": "fǔ yǎng",
    "definition": "to foster; to bring up; to raise"
  },
  "抚养费": {
    "pinyin": "fǔ yǎng fèi",
    "definition": "child support payment (after a divorce)"
  },
  "斧子": {
    "pinyin": "fǔ zi",
    "definition": "axe; hatchet"
  },
  "俯首": {
    "pinyin": "fǔ shǒu",
    "definition": "to bend one's head"
  },
  "俯仰": {
    "pinyin": "fǔ yǎng",
    "definition": "lowering and raising of the head; (fig.) small move; pitch (position angle)"
  },
  "辅导": {
    "pinyin": "fǔ dǎo",
    "definition": "to give guidance; to mentor; to counsel; to coach; to tutor"
  },
  "辅助": {
    "pinyin": "fǔ zhù",
    "definition": "to assist; to aid; supplementary; auxiliary"
  },
  "腐败": {
    "pinyin": "fǔ bài",
    "definition": "corruption; to corrupt; to rot; rotten"
  },
  "腐化": {
    "pinyin": "fǔ huà",
    "definition": "to rot; to decay; to become corrupt"
  },
  "腐烂": {
    "pinyin": "fǔ làn",
    "definition": "to rot; to putrefy; (fig.) corrupt"
  },
  "腐蚀": {
    "pinyin": "fǔ shí",
    "definition": "corrosion; to corrode (degrade chemically); to rot; corruption"
  },
  "腐朽": {
    "pinyin": "fǔ xiǔ",
    "definition": "rotten; decayed; decadent; degenerate"
  },
  "父母": {
    "pinyin": "fù mǔ",
    "definition": "father and mother; parents"
  },
  "父女": {
    "pinyin": "fù nu:3",
    "definition": "father and daughter"
  },
  "父亲": {
    "pinyin": "fù qīn",
    "definition": "father; also pr. [fù qin]"
  },
  "父子": {
    "pinyin": "fù zǐ",
    "definition": "father and son"
  },
  "付": {
    "pinyin": "Fù",
    "definition": "surname Fu"
  },
  "付出": {
    "pinyin": "fù chū",
    "definition": "to pay; to expend; to invest (energy or time)"
  },
  "付费": {
    "pinyin": "fù fèi",
    "definition": "to pay; to cover the costs"
  },
  "付款": {
    "pinyin": "fù kuǎn",
    "definition": "to pay a sum of money; payment"
  },
  "妇女": {
    "pinyin": "fù nu:3",
    "definition": "woman"
  },
  "负": {
    "pinyin": "fù",
    "definition": "to bear; to carry (on one's back); to turn one's back on; to be defeated; negative (math. etc)"
  },
  "负担": {
    "pinyin": "fù dān",
    "definition": "to bear (an expense, a responsibility etc); burden"
  },
  "负面": {
    "pinyin": "fù miàn",
    "definition": "negative; the negative side"
  },
  "负有": {
    "pinyin": "fù yǒu",
    "definition": "to be responsible for"
  },
  "负责": {
    "pinyin": "fù zé",
    "definition": "to be in charge of; to take responsibility for; to be to blame; conscientious"
  },
  "负责人": {
    "pinyin": "fù zé rén",
    "definition": "person in charge"
  },
  "附": {
    "pinyin": "fù",
    "definition": "variant of 附"
  },
  "附带": {
    "pinyin": "fù dài",
    "definition": "supplementary; incidentally; in parentheses; by chance; in passing; additionally; secondary; subsidiary; to attach"
  },
  "附和": {
    "pinyin": "fù hè",
    "definition": "to agree; to go along with; to echo (what sb says)"
  },
  "附加": {
    "pinyin": "fù jiā",
    "definition": "additional; annex"
  },
  "附件": {
    "pinyin": "fù jiàn",
    "definition": "enclosure; attachment (email); appendix"
  },
  "附近": {
    "pinyin": "fù jìn",
    "definition": "nearby; neighboring; (in the) vicinity (of); neighborhood"
  },
  "附属": {
    "pinyin": "fù shǔ",
    "definition": "subsidiary; auxiliary; attached; affiliated; subordinate; subordinating"
  },
  "复查": {
    "pinyin": "fù chá",
    "definition": "to check again; to re-examine"
  },
  "复发": {
    "pinyin": "fù fā",
    "definition": "to recur (of a disease); to reappear; to relapse (into a former bad state)"
  },
  "复合": {
    "pinyin": "fù hé",
    "definition": "(of people who were estranged) to be reconciled; (of a couple) to get back together"
  },
  "复活": {
    "pinyin": "fù huó",
    "definition": "to revive; (lit. and fig.) to come back to life; (religion) resurrection"
  },
  "复苏": {
    "pinyin": "fù sū",
    "definition": "to recover (health, economic); to resuscitate; anabiosis"
  },
  "复习": {
    "pinyin": "fù xí",
    "definition": "to review; revision"
  },
  "复兴": {
    "pinyin": "Fù xīng",
    "definition": "Fuxing district of Handan city 邯郸市, Hebei; Fuxing or Fuhsing township in Taoyuan county 桃园县, north Taiwan"
  },
  "复印": {
    "pinyin": "fù yìn",
    "definition": "to photocopy; to duplicate a document"
  },
  "复原": {
    "pinyin": "fù yuán",
    "definition": "to restore (sth) to (its) former condition; to recover from illness; recovery"
  },
  "复杂": {
    "pinyin": "fù zá",
    "definition": "complicated; complex"
  },
  "复制": {
    "pinyin": "fù zhì",
    "definition": "to duplicate; to make a copy of; to copy; to reproduce; to clone"
  },
  "赴": {
    "pinyin": "fù",
    "definition": "to go; to visit (e.g. another country); to attend (a banquet etc)"
  },
  "副": {
    "pinyin": "fù",
    "definition": "secondary; auxiliary; deputy; assistant; vice-; abbr. for 副词 adverb; classifier for pairs, sets of things & facial expressions"
  },
  "副作用": {
    "pinyin": "fù zuò yòng",
    "definition": "side effect"
  },
  "富": {
    "pinyin": "Fù",
    "definition": "surname Fu"
  },
  "富含": {
    "pinyin": "fù hán",
    "definition": "to contain in great quantities; rich in"
  },
  "富豪": {
    "pinyin": "fù háo",
    "definition": "rich and powerful person"
  },
  "富强": {
    "pinyin": "fù qiáng",
    "definition": "rich and powerful"
  },
  "富人": {
    "pinyin": "fù rén",
    "definition": "rich person; the rich"
  },
  "富翁": {
    "pinyin": "fù wēng",
    "definition": "rich person; millionaire; billionaire"
  },
  "富有": {
    "pinyin": "fù yǒu",
    "definition": "rich; wealthy; affluent; to be rich in; to be replete with"
  },
  "富裕": {
    "pinyin": "Fù yù",
    "definition": "Fuyu county in Qiqihar 齐齐哈尔, Heilongjiang"
  },
  "富足": {
    "pinyin": "fù zú",
    "definition": "rich; plentiful"
  },
  "赋予": {
    "pinyin": "fù yǔ",
    "definition": "to assign; to entrust (a task); to give; to bestow"
  },
  "腹部": {
    "pinyin": "fù bù",
    "definition": "abdomen; belly; flank"
  },
  "腹泻": {
    "pinyin": "fù xiè",
    "definition": "diarrhea; to have the runs"
  },
  "覆盖": {
    "pinyin": "fù gài",
    "definition": "to cover"
  },
  "夫妇": {
    "pinyin": "fū fù",
    "definition": "a (married) couple; husband and wife"
  },
  "夫妻": {
    "pinyin": "fū qī",
    "definition": "husband and wife; married couple"
  },
  "夫人": {
    "pinyin": "fū ren",
    "definition": "lady; madam; Mrs."
  },
  "该": {
    "pinyin": "gāi",
    "definition": "should; ought to; probably; must be; to deserve; to owe; to be sb's turn to do sth; that; the above-mentioned"
  },
  "改": {
    "pinyin": "gǎi",
    "definition": "to change; to alter; to transform; to correct"
  },
  "改版": {
    "pinyin": "gǎi bǎn",
    "definition": "to revise the current edition; revised edition"
  },
  "改编": {
    "pinyin": "gǎi biān",
    "definition": "to adapt; to rearrange; to revise"
  },
  "改变": {
    "pinyin": "gǎi biàn",
    "definition": "to change; to alter; to transform"
  },
  "改动": {
    "pinyin": "gǎi dòng",
    "definition": "to alter; to modify; to revise"
  },
  "改革": {
    "pinyin": "gǎi gé",
    "definition": "reform; to reform"
  },
  "改革开放": {
    "pinyin": "gǎi gé kāi fàng",
    "definition": "to reform and open to the outside world; refers to Deng Xiaoping's policies from around 1980"
  },
  "改进": {
    "pinyin": "gǎi jìn",
    "definition": "to improve; to make better; improvement"
  },
  "改良": {
    "pinyin": "gǎi liáng",
    "definition": "to improve (sth); to reform (a system)"
  },
  "改名": {
    "pinyin": "gǎi míng",
    "definition": "to change one's name"
  },
  "改日": {
    "pinyin": "gǎi rì",
    "definition": "another day; some other day"
  },
  "改善": {
    "pinyin": "gǎi shàn",
    "definition": "to make better; to improve"
  },
  "改为": {
    "pinyin": "gǎi wéi",
    "definition": "to change into"
  },
  "改邪归正": {
    "pinyin": "gǎi xié guī zhèng",
    "definition": "to mend one's ways (idiom); to turn over a new leaf"
  },
  "改造": {
    "pinyin": "gǎi zào",
    "definition": "to transform; to reform; to remodel; to remold"
  },
  "改正": {
    "pinyin": "gǎi zhèng",
    "definition": "to correct; to amend; to put right; correction"
  },
  "改装": {
    "pinyin": "gǎi zhuāng",
    "definition": "to change one's costume; to repackage; to remodel; to refit; to modify; to convert"
  },
  "钙": {
    "pinyin": "gài",
    "definition": "calcium (chemistry)"
  },
  "盖": {
    "pinyin": "Gě",
    "definition": "surname Ge"
  },
  "盖章": {
    "pinyin": "gài zhāng",
    "definition": "to affix a seal; to stamp (a document); to sign off on sth"
  },
  "盖子": {
    "pinyin": "gài zi",
    "definition": "cover; lid; shell"
  },
  "概况": {
    "pinyin": "gài kuàng",
    "definition": "general situation; summary"
  },
  "概括": {
    "pinyin": "gài kuò",
    "definition": "to summarize; to generalize; briefly; in broad outline"
  },
  "概率": {
    "pinyin": "gài lu:4",
    "definition": "probability (math.)"
  },
  "概论": {
    "pinyin": "gài lùn",
    "definition": "outline; introduction; survey; general discussion"
  },
  "概念": {
    "pinyin": "gài niàn",
    "definition": "concept; idea"
  },
  "甘心": {
    "pinyin": "gān xīn",
    "definition": "to be willing to; to resign oneself to"
  },
  "杆": {
    "pinyin": "gān",
    "definition": "pole"
  },
  "肝": {
    "pinyin": "gān",
    "definition": "liver; (slang) to put in long hours, typically late into the night, playing (a video game); (of a video game) involving a lot of repetition in order to progress; grindy"
  },
  "肝脏": {
    "pinyin": "gān zàng",
    "definition": "liver"
  },
  "尴尬": {
    "pinyin": "gān gà",
    "definition": "awkward; embarrassed"
  },
  "赶": {
    "pinyin": "gǎn",
    "definition": "to overtake; to catch up with; to hurry; to rush; to try to catch (the bus etc); to drive (cattle etc) forward; to drive (sb) away; to avail oneself of (an opportunity); until; by (a certain time)"
  },
  "赶不上": {
    "pinyin": "gǎn bù shàng",
    "definition": "can't keep up with; can't catch up with; cannot overtake"
  },
  "赶到": {
    "pinyin": "gǎn dào",
    "definition": "to hurry (to some place)"
  },
  "赶赴": {
    "pinyin": "gǎn fù",
    "definition": "to hurry; to rush"
  },
  "赶紧": {
    "pinyin": "gǎn jǐn",
    "definition": "hurriedly; without delay"
  },
  "赶快": {
    "pinyin": "gǎn kuài",
    "definition": "quickly; at once"
  },
  "赶忙": {
    "pinyin": "gǎn máng",
    "definition": "to hurry; to hasten; to make haste"
  },
  "赶上": {
    "pinyin": "gǎn shàng",
    "definition": "to keep up with; to catch up with; to overtake; to chance upon; in time for"
  },
  "赶往": {
    "pinyin": "gǎn wǎng",
    "definition": "to hurry to (somewhere)"
  },
  "敢": {
    "pinyin": "gǎn",
    "definition": "to dare; daring; (polite) may I venture"
  },
  "敢情": {
    "pinyin": "gǎn qing",
    "definition": "actually; as it turns out; indeed; of course"
  },
  "敢于": {
    "pinyin": "gǎn yú",
    "definition": "to have the courage to do sth; to dare to; bold in"
  },
  "感": {
    "pinyin": "gǎn",
    "definition": "to feel; to move; to touch; to affect; feeling; emotion; (suffix) sense of ~"
  },
  "感触": {
    "pinyin": "gǎn chù",
    "definition": "one's thoughts and feelings; emotional stirring; moved; touched"
  },
  "感到": {
    "pinyin": "gǎn dào",
    "definition": "to feel; to sense; to perceive"
  },
  "感动": {
    "pinyin": "gǎn dòng",
    "definition": "to move (sb); to touch (sb emotionally); moving"
  },
  "感恩": {
    "pinyin": "gǎn ēn",
    "definition": "to be grateful"
  },
  "感激": {
    "pinyin": "gǎn jī",
    "definition": "to be grateful; to appreciate; thankful"
  },
  "感觉": {
    "pinyin": "gǎn jué",
    "definition": "feeling; impression; sensation; to feel; to perceive"
  },
  "感慨": {
    "pinyin": "gǎn kǎi",
    "definition": "to sigh with sorrow, regret etc; rueful; deeply moved"
  },
  "感冒": {
    "pinyin": "gǎn mào",
    "definition": "to catch cold; (common) cold; (coll.) to be interested in (often used in the negative); (Tw) to detest; can't stand"
  },
  "感情": {
    "pinyin": "gǎn qíng",
    "definition": "emotion; sentiment; affection; feelings between two persons"
  },
  "感染": {
    "pinyin": "gǎn rǎn",
    "definition": "to infect; infection; (fig.) to influence"
  },
  "感染力": {
    "pinyin": "gǎn rǎn lì",
    "definition": "infectiousness (of a disease); appeal; power; impact (of an image, marketing message, performance etc)"
  },
  "感人": {
    "pinyin": "gǎn rén",
    "definition": "touching; moving"
  },
  "感受": {
    "pinyin": "gǎn shòu",
    "definition": "to sense; perception; to feel (through the senses); to experience; a feeling; an impression; an experience"
  },
  "感叹": {
    "pinyin": "gǎn tàn",
    "definition": "to sigh (with feeling); to lament"
  },
  "感想": {
    "pinyin": "gǎn xiǎng",
    "definition": "impressions; reflections; thoughts"
  },
  "感谢": {
    "pinyin": "gǎn xiè",
    "definition": "(express) thanks; gratitude; grateful; thankful; thanks"
  },
  "感兴趣": {
    "pinyin": "gǎn xìng qù",
    "definition": "to be interested"
  },
  "感性": {
    "pinyin": "gǎn xìng",
    "definition": "perception; perceptual; sensibility; sensitive; emotional; sentimental"
  },
  "干": {
    "pinyin": "gān",
    "definition": "old variant of 干"
  },
  "干杯": {
    "pinyin": "gān bēi",
    "definition": "to drink a toast; Cheers! (proposing a toast); Here's to you!; Bottoms up!; lit. dry cup"
  },
  "干部": {
    "pinyin": "gàn bù",
    "definition": "cadre; official; officer; manager"
  },
  "干脆": {
    "pinyin": "gān cuì",
    "definition": "candid; direct and to the point; simply; just; might as well"
  },
  "干戈": {
    "pinyin": "gān gē",
    "definition": "weapons of war; arms"
  },
  "干旱": {
    "pinyin": "gān hàn",
    "definition": "drought; arid; dry"
  },
  "干活儿": {
    "pinyin": "gàn huó r",
    "definition": "erhua variant of 干活"
  },
  "干劲": {
    "pinyin": "gàn jìn",
    "definition": "enthusiasm for doing sth"
  },
  "干净": {
    "pinyin": "gān jìng",
    "definition": "clean; neat"
  },
  "干吗": {
    "pinyin": "gàn má",
    "definition": "see 干嘛"
  },
  "干扰": {
    "pinyin": "gān rǎo",
    "definition": "to disturb; to interfere; perturbation; interference (physics)"
  },
  "干涉": {
    "pinyin": "gān shè",
    "definition": "to interfere; to meddle; interference"
  },
  "干什么": {
    "pinyin": "gàn shén me",
    "definition": "what are you doing?; what's he up to?"
  },
  "干事": {
    "pinyin": "gàn shi",
    "definition": "administrator; executive secretary"
  },
  "干预": {
    "pinyin": "gān yù",
    "definition": "to meddle; to intervene; intervention"
  },
  "干燥": {
    "pinyin": "gān zào",
    "definition": "to dry (of weather, paint, cement etc); desiccation; dull; uninteresting; arid"
  },
  "刚": {
    "pinyin": "gāng",
    "definition": "hard; firm; strong; just; barely; exactly"
  },
  "刚才": {
    "pinyin": "gāng cái",
    "definition": "just now; a moment ago"
  },
  "刚刚": {
    "pinyin": "gāng gang",
    "definition": "just recently; just a moment ago"
  },
  "刚好": {
    "pinyin": "gāng hǎo",
    "definition": "just; exactly; to happen to be"
  },
  "刚毅": {
    "pinyin": "gāng yì",
    "definition": "resolute; steadfast; stalwart"
  },
  "杠杆": {
    "pinyin": "gàng gǎn",
    "definition": "lever; pry bar; crowbar; financial leverage"
  },
  "杠铃": {
    "pinyin": "gàng líng",
    "definition": "barbell"
  },
  "纲领": {
    "pinyin": "gāng lǐng",
    "definition": "program (i.e. plan of action); guiding principle"
  },
  "纲要": {
    "pinyin": "gāng yào",
    "definition": "outline; essential points"
  },
  "缸": {
    "pinyin": "gāng",
    "definition": "jar; vat; classifier for loads of laundry"
  },
  "钢": {
    "pinyin": "gāng",
    "definition": "steel"
  },
  "钢笔": {
    "pinyin": "gāng bǐ",
    "definition": "fountain pen"
  },
  "钢琴": {
    "pinyin": "gāng qín",
    "definition": "piano"
  },
  "钢铁": {
    "pinyin": "gāng tiě",
    "definition": "steel"
  },
  "岗位": {
    "pinyin": "gǎng wèi",
    "definition": "a post; a job"
  },
  "港": {
    "pinyin": "Gǎng",
    "definition": "Hong Kong (abbr. for 港); surname Gang"
  },
  "港口": {
    "pinyin": "gǎng kǒu",
    "definition": "port; harbor"
  },
  "港湾": {
    "pinyin": "gǎng wān",
    "definition": "bay serving as a harbor"
  },
  "高": {
    "pinyin": "Gāo",
    "definition": "surname Gao"
  },
  "高昂": {
    "pinyin": "gāo áng",
    "definition": "to hold (one's head) high; expensive; high (spirits etc)"
  },
  "高傲": {
    "pinyin": "gāo ào",
    "definition": "arrogant; haughty; proud"
  },
  "高层": {
    "pinyin": "gāo céng",
    "definition": "high-rise; high level; high class"
  },
  "高超": {
    "pinyin": "gāo chāo",
    "definition": "excellent; superlative"
  },
  "高潮": {
    "pinyin": "gāo cháo",
    "definition": "high tide; high water; upsurge; peak of activity; climax (of a story, a competition etc); to have an orgasm"
  },
  "高大": {
    "pinyin": "gāo dà",
    "definition": "tall; lofty; towering"
  },
  "高档": {
    "pinyin": "gāo dàng",
    "definition": "superior quality; high grade; top grade"
  },
  "高等": {
    "pinyin": "gāo děng",
    "definition": "high-level; higher (animals, education etc); advanced (math etc)"
  },
  "高低": {
    "pinyin": "gāo dī",
    "definition": "height; altitude (aviation); pitch (music); ups and downs (success or failure); whether sth is right or wrong; comparative strength, weight, depth, stature; (spoken interjection) anyway, whatever; eventually, in the end"
  },
  "高调": {
    "pinyin": "gāo diào",
    "definition": "high-sounding speech; bombast; high-profile"
  },
  "高度": {
    "pinyin": "gāo dù",
    "definition": "height; altitude; elevation; high degree; highly"
  },
  "高额": {
    "pinyin": "gāo é",
    "definition": "high quota; large amount"
  },
  "高尔夫球": {
    "pinyin": "gāo ěr fū qiú",
    "definition": "golf; golf ball"
  },
  "高峰": {
    "pinyin": "gāo fēng",
    "definition": "peak; summit; height"
  },
  "高峰期": {
    "pinyin": "gāo fēng qī",
    "definition": "peak period; rush hour"
  },
  "高跟鞋": {
    "pinyin": "gāo gēn xié",
    "definition": "high-heeled shoes"
  },
  "高贵": {
    "pinyin": "gāo guì",
    "definition": "grandeur; noble"
  },
  "高级": {
    "pinyin": "gāo jí",
    "definition": "high level; high grade; advanced; high-ranking"
  },
  "高价": {
    "pinyin": "gāo jià",
    "definition": "high price"
  },
  "高考": {
    "pinyin": "gāo kǎo",
    "definition": "college entrance exam (especially as abbr. for 普通高等学校招生全国统一考试); (Tw) entrance exam for senior government service posts (abbr. for 公务人员高等考试)"
  },
  "高科技": {
    "pinyin": "gāo kē jì",
    "definition": "high tech; high technology"
  },
  "高空": {
    "pinyin": "gāo kōng",
    "definition": "high altitude"
  },
  "高龄": {
    "pinyin": "gāo líng",
    "definition": "elderly"
  },
  "高明": {
    "pinyin": "Gāo míng",
    "definition": "Gaoming District of Foshan City 市, Guangdong"
  },
  "高山": {
    "pinyin": "gāo shān",
    "definition": "high mountain; alpine mountain"
  },
  "高尚": {
    "pinyin": "gāo shàng",
    "definition": "noble; lofty; refined; exquisite"
  },
  "高手": {
    "pinyin": "gāo shǒu",
    "definition": "expert; past master; dab hand"
  },
  "高速": {
    "pinyin": "gāo sù",
    "definition": "high speed; expressway (abbr. for 路)"
  },
  "高速公路": {
    "pinyin": "gāo sù gōng lù",
    "definition": "expressway; highway; freeway"
  },
  "高铁": {
    "pinyin": "gāo tiě",
    "definition": "high speed rail"
  },
  "高温": {
    "pinyin": "gāo wēn",
    "definition": "high temperature"
  },
  "高效": {
    "pinyin": "gāo xiào",
    "definition": "efficient; highly effective"
  },
  "高新技术": {
    "pinyin": "gāo xīn jì shù",
    "definition": "high tech; high technology"
  },
  "高兴": {
    "pinyin": "gāo xìng",
    "definition": "happy; glad; willing (to do sth); in a cheerful mood"
  },
  "高血压": {
    "pinyin": "gāo xuè yā",
    "definition": "high blood pressure; hypertension"
  },
  "高压": {
    "pinyin": "gāo yā",
    "definition": "high pressure; high-handed"
  },
  "高雅": {
    "pinyin": "gāo yǎ",
    "definition": "dainty; elegance; elegant"
  },
  "高于": {
    "pinyin": "gāo yú",
    "definition": "greater than; to exceed"
  },
  "高原": {
    "pinyin": "gāo yuán",
    "definition": "plateau"
  },
  "高涨": {
    "pinyin": "gāo zhǎng",
    "definition": "to surge up; to rise; (of tensions etc) to run high"
  },
  "高中": {
    "pinyin": "gāo zhōng",
    "definition": "senior high school; abbr. for 高级中学"
  },
  "搞": {
    "pinyin": "gǎo",
    "definition": "to do; to make; to go in for; to set up; to get hold of; to take care of"
  },
  "搞鬼": {
    "pinyin": "gǎo guǐ",
    "definition": "to make mischief; to play tricks"
  },
  "搞好": {
    "pinyin": "gǎo hǎo",
    "definition": "to do well at; to do a good job"
  },
  "搞笑": {
    "pinyin": "gǎo xiào",
    "definition": "to get people to laugh; funny; hilarious"
  },
  "稿件": {
    "pinyin": "gǎo jiàn",
    "definition": "piece of writing submitted for publication; manuscript; article"
  },
  "稿子": {
    "pinyin": "gǎo zi",
    "definition": "draft of a document; script; manuscript; mental plan; precedent"
  },
  "告": {
    "pinyin": "gào",
    "definition": "to say; to tell; to announce; to report; to denounce; to file a lawsuit; to sue"
  },
  "告别": {
    "pinyin": "gào bié",
    "definition": "to leave; to part from; to bid farewell to; to say goodbye to"
  },
  "告辞": {
    "pinyin": "gào cí",
    "definition": "to say goodbye; to take one's leave"
  },
  "告诫": {
    "pinyin": "gào jiè",
    "definition": "to warn; to admonish"
  },
  "告示": {
    "pinyin": "gào shi",
    "definition": "announcement"
  },
  "告诉": {
    "pinyin": "gào sù",
    "definition": "to press charges; to file a complaint"
  },
  "告知": {
    "pinyin": "gào zhī",
    "definition": "to inform"
  },
  "告状": {
    "pinyin": "gào zhuàng",
    "definition": "to tell on sb; to complain (to a teacher, a superior etc); to bring a lawsuit"
  },
  "戈壁": {
    "pinyin": "Gē bì",
    "definition": "Gobi (desert)"
  },
  "疙瘩": {
    "pinyin": "gē da",
    "definition": "swelling or lump on skin; pimple; knot; lump; preoccupation; problem"
  },
  "哥": {
    "pinyin": "gē",
    "definition": "elder brother"
  },
  "哥哥": {
    "pinyin": "gē ge",
    "definition": "older brother"
  },
  "胳膊": {
    "pinyin": "gē bo",
    "definition": "arm"
  },
  "鸽子": {
    "pinyin": "gē zi",
    "definition": "pigeon; dove; various birds of the family Columbidae"
  },
  "割": {
    "pinyin": "gē",
    "definition": "to cut; to cut apart"
  },
  "搁": {
    "pinyin": "gē",
    "definition": "to place; to put aside; to shelve"
  },
  "搁浅": {
    "pinyin": "gē qiǎn",
    "definition": "to be stranded (of ship); to run aground; fig. to run into difficulties and stop"
  },
  "搁置": {
    "pinyin": "gē zhì",
    "definition": "to shelve; to set aside"
  },
  "歌": {
    "pinyin": "gē",
    "definition": "song; to sing"
  },
  "歌唱": {
    "pinyin": "gē chàng",
    "definition": "to sing"
  },
  "歌词": {
    "pinyin": "gē cí",
    "definition": "song lyric; lyrics"
  },
  "歌剧": {
    "pinyin": "gē jù",
    "definition": "Western opera"
  },
  "歌迷": {
    "pinyin": "gē mí",
    "definition": "fan of a singer"
  },
  "歌曲": {
    "pinyin": "gē qǔ",
    "definition": "song"
  },
  "歌声": {
    "pinyin": "gē shēng",
    "definition": "singing voice; fig. original voice of a poet"
  },
  "歌手": {
    "pinyin": "gē shǒu",
    "definition": "singer"
  },
  "歌颂": {
    "pinyin": "gē sòng",
    "definition": "to sing the praises of; to extol; to eulogize"
  },
  "歌舞": {
    "pinyin": "gē wǔ",
    "definition": "singing and dancing"
  },
  "歌星": {
    "pinyin": "gē xīng",
    "definition": "singing star; famous singer"
  },
  "歌咏": {
    "pinyin": "gē yǒng",
    "definition": "to sing"
  },
  "革命": {
    "pinyin": "gé mìng",
    "definition": "to withdraw the mandate of heaven (and transition to a new dynasty) (original meaning); revolution; revolutionary; to revolt (against sb or sth); to revolutionize (sth); (separable verb sometimes used in the pattern 革noun的命)"
  },
  "革新": {
    "pinyin": "gé xīn",
    "definition": "to innovate; innovation"
  },
  "格": {
    "pinyin": "gé",
    "definition": "square; frame; rule; (legal) case; style; character; standard; pattern; (grammar) case; (classical) to obstruct; to hinder; (classical) to arrive; to come; (classical) to investigate; to study exhaustively"
  },
  "格格不入": {
    "pinyin": "gé gé bù rù",
    "definition": "(idiom) inharmonious; incompatible"
  },
  "格局": {
    "pinyin": "gé jú",
    "definition": "structure; pattern; layout"
  },
  "格式": {
    "pinyin": "gé shì",
    "definition": "form; specification; format"
  },
  "格外": {
    "pinyin": "gé wài",
    "definition": "especially; particularly"
  },
  "隔": {
    "pinyin": "gé",
    "definition": "to separate; to partition; to stand or lie between; at a distance from; after or at an interval of"
  },
  "隔壁": {
    "pinyin": "gé bì",
    "definition": "next door; neighbor"
  },
  "隔阂": {
    "pinyin": "gé hé",
    "definition": "misunderstanding; estrangement; (language etc) barrier"
  },
  "隔开": {
    "pinyin": "gé kāi",
    "definition": "to separate"
  },
  "隔离": {
    "pinyin": "gé lí",
    "definition": "to separate; to isolate"
  },
  "个案": {
    "pinyin": "gè àn",
    "definition": "individual case; special case"
  },
  "个别": {
    "pinyin": "gè bié",
    "definition": "individually; one by one; just one or two; exceptional; rare"
  },
  "个儿": {
    "pinyin": "gè r",
    "definition": "size; height; stature"
  },
  "个人": {
    "pinyin": "gè rén",
    "definition": "individual; personal; oneself"
  },
  "个体": {
    "pinyin": "gè tǐ",
    "definition": "individual"
  },
  "个头儿": {
    "pinyin": "gè tóu r",
    "definition": "size; height; stature"
  },
  "个性": {
    "pinyin": "gè xìng",
    "definition": "individuality; personality"
  },
  "个子": {
    "pinyin": "gè zi",
    "definition": "height; stature; build; size"
  },
  "各": {
    "pinyin": "gè",
    "definition": "each; every"
  },
  "各奔前程": {
    "pinyin": "gè bèn qián chéng",
    "definition": "each goes his own way (idiom); each person has his own life to lead"
  },
  "各地": {
    "pinyin": "gè dì",
    "definition": "in all parts of (a country); various regions"
  },
  "各个": {
    "pinyin": "gè gè",
    "definition": "every; various; separately, one by one"
  },
  "各式各样": {
    "pinyin": "gè shì gè yàng",
    "definition": "(of) all kinds and sorts; various"
  },
  "各抒己见": {
    "pinyin": "gè shū jǐ jiàn",
    "definition": "everyone gives their own view"
  },
  "各位": {
    "pinyin": "gè wèi",
    "definition": "everybody; all (guests, colleagues etc); all of you"
  },
  "各种": {
    "pinyin": "gè zhǒng",
    "definition": "every kind of; all kinds of; various"
  },
  "各自": {
    "pinyin": "gè zì",
    "definition": "each; respective; apiece"
  },
  "给": {
    "pinyin": "gěi",
    "definition": "to; for; for the benefit of; to give; to allow; to do sth (for sb); (grammatical equivalent of 被); (grammatical equivalent of 把); (sentence intensifier)"
  },
  "给予": {
    "pinyin": "jǐ yǔ",
    "definition": "(literary) to give; to accord; to render"
  },
  "根": {
    "pinyin": "gēn",
    "definition": "root; basis; classifier for long slender objects, e.g. cigarettes, guitar strings; radical (chemistry)"
  },
  "根本": {
    "pinyin": "gēn běn",
    "definition": "fundamental; basic; root; simply; absolutely (not); (not) at all"
  },
  "根基": {
    "pinyin": "gēn jī",
    "definition": "foundation"
  },
  "根据": {
    "pinyin": "gēn jù",
    "definition": "according to; based on; basis; foundation"
  },
  "根深蒂固": {
    "pinyin": "gēn shēn dì gù",
    "definition": "deep-rooted (problem etc)"
  },
  "根源": {
    "pinyin": "gēn yuán",
    "definition": "origin; root (cause)"
  },
  "根治": {
    "pinyin": "gēn zhì",
    "definition": "to bring under permanent control; to effect a radical cure"
  },
  "跟": {
    "pinyin": "gēn",
    "definition": "heel; to follow closely; to go with; (of a woman) to marry sb; with; compared with; to; towards; and (joining two nouns)"
  },
  "跟不上": {
    "pinyin": "gēn bu shàng",
    "definition": "not able to keep up with"
  },
  "跟前": {
    "pinyin": "gēn qián",
    "definition": "the front (of); (in) front; (in) sb's presence; just before (a date)"
  },
  "跟上": {
    "pinyin": "gēn shàng",
    "definition": "to catch up with; to keep pace with"
  },
  "跟随": {
    "pinyin": "gēn suí",
    "definition": "to follow"
  },
  "跟踪": {
    "pinyin": "gēn zōng",
    "definition": "to follow sb's tracks; to tail; to shadow; tracking"
  },
  "耕地": {
    "pinyin": "gēng dì",
    "definition": "arable land; to plow land"
  },
  "耿直": {
    "pinyin": "gěng zhí",
    "definition": "honest; frank; candid"
  },
  "更": {
    "pinyin": "gēng",
    "definition": "to change or replace; to experience; one of the five two-hour periods into which the night was formerly divided; watch (e.g. of a sentry or guard)"
  },
  "更改": {
    "pinyin": "gēng gǎi",
    "definition": "to alter"
  },
  "更换": {
    "pinyin": "gēng huàn",
    "definition": "to replace (a worn-out tire etc); to change (one's address etc)"
  },
  "更加": {
    "pinyin": "gèng jiā",
    "definition": "more (than sth else); even more"
  },
  "更是": {
    "pinyin": "gèng shì",
    "definition": "even more (so)"
  },
  "更新": {
    "pinyin": "gēng xīn",
    "definition": "to replace the old with new; to renew; to renovate; to upgrade; to update; to regenerate"
  },
  "更衣室": {
    "pinyin": "gēng yī shì",
    "definition": "change room; dressing room; locker room; (euphemism) toilet"
  },
  "更正": {
    "pinyin": "gēng zhèng",
    "definition": "to correct; to make a correction"
  },
  "工厂": {
    "pinyin": "gōng chǎng",
    "definition": "factory"
  },
  "工程": {
    "pinyin": "gōng chéng",
    "definition": "engineering; an engineering project; project; undertaking"
  },
  "工程师": {
    "pinyin": "gōng chéng shī",
    "definition": "engineer"
  },
  "工地": {
    "pinyin": "gōng dì",
    "definition": "construction site"
  },
  "工夫": {
    "pinyin": "gōng fū",
    "definition": "(old) laborer"
  },
  "工会": {
    "pinyin": "gōng huì",
    "definition": "labor union; trade union"
  },
  "工具": {
    "pinyin": "gōng jù",
    "definition": "tool; instrument; utensil; means (to achieve a goal etc)"
  },
  "工科": {
    "pinyin": "gōng kē",
    "definition": "engineering as an academic subject"
  },
  "工人": {
    "pinyin": "gōng rén",
    "definition": "worker"
  },
  "工商": {
    "pinyin": "gōng shāng",
    "definition": "industry and commerce"
  },
  "工商界": {
    "pinyin": "gōng shāng jiè",
    "definition": "industry; the world of business"
  },
  "工序": {
    "pinyin": "gōng xù",
    "definition": "working procedure; process"
  },
  "工业": {
    "pinyin": "gōng yè",
    "definition": "industry"
  },
  "工艺": {
    "pinyin": "gōng yì",
    "definition": "arts and crafts; industrial arts"
  },
  "工艺品": {
    "pinyin": "gōng yì pǐn",
    "definition": "handicraft article; handiwork"
  },
  "工整": {
    "pinyin": "gōng zhěng",
    "definition": "fine work; carefully and neatly done"
  },
  "工资": {
    "pinyin": "gōng zī",
    "definition": "wages; pay"
  },
  "工作": {
    "pinyin": "gōng zuò",
    "definition": "to work; (of a machine) to operate; job; work; task"
  },
  "工作量": {
    "pinyin": "gōng zuò liàng",
    "definition": "workload; volume of work"
  },
  "工作日": {
    "pinyin": "gōng zuò rì",
    "definition": "workday; working day; weekday"
  },
  "弓": {
    "pinyin": "Gōng",
    "definition": "surname Gong"
  },
  "公安": {
    "pinyin": "gōng ān",
    "definition": "(Ministry of) Public Security; public safety; public security"
  },
  "公安局": {
    "pinyin": "gōng ān jú",
    "definition": "public security bureau (government office similar in function to a police station)"
  },
  "公布": {
    "pinyin": "gōng bù",
    "definition": "to announce; to make public; to publish"
  },
  "公车": {
    "pinyin": "gōng chē",
    "definition": "bus; abbr. for 公共汽车; car belonging to an organization and used by its members (government car, police car, company car etc); abbr. for 公务用车"
  },
  "公道": {
    "pinyin": "gōng dào",
    "definition": "justice; fairness; public highway"
  },
  "公费": {
    "pinyin": "gōng fèi",
    "definition": "at public expense"
  },
  "公告": {
    "pinyin": "gōng gào",
    "definition": "post; announcement"
  },
  "公共": {
    "pinyin": "gōng gòng",
    "definition": "public; common; communal"
  },
  "公共场所": {
    "pinyin": "gōng gòng chǎng suǒ",
    "definition": "public place"
  },
  "公共汽车": {
    "pinyin": "gōng gòng qì chē",
    "definition": "bus"
  },
  "公关": {
    "pinyin": "gōng guān",
    "definition": "public relations"
  },
  "公函": {
    "pinyin": "gōng hán",
    "definition": "official letter"
  },
  "公鸡": {
    "pinyin": "gōng jī",
    "definition": "cock; rooster"
  },
  "公积金": {
    "pinyin": "gōng jī jīn",
    "definition": "official reserves; accumulated fund"
  },
  "公交车": {
    "pinyin": "gōng jiāo chē",
    "definition": "public transport vehicle; town bus"
  },
  "公斤": {
    "pinyin": "gōng jīn",
    "definition": "kilogram (kg)"
  },
  "公开": {
    "pinyin": "gōng kāi",
    "definition": "open; overt; public; to make public; to release"
  },
  "公开信": {
    "pinyin": "gōng kāi xìn",
    "definition": "open letter"
  },
  "公款": {
    "pinyin": "gōng kuǎn",
    "definition": "public money"
  },
  "公里": {
    "pinyin": "gōng lǐ",
    "definition": "kilometer"
  },
  "公立": {
    "pinyin": "gōng lì",
    "definition": "public (e.g. school, hospital)"
  },
  "公路": {
    "pinyin": "gōng lù",
    "definition": "highway; road"
  },
  "公民": {
    "pinyin": "gōng mín",
    "definition": "citizen"
  },
  "公墓": {
    "pinyin": "gōng mù",
    "definition": "public cemetery"
  },
  "公平": {
    "pinyin": "gōng píng",
    "definition": "fair; impartial"
  },
  "公婆": {
    "pinyin": "gōng pó",
    "definition": "husband's parents; parents-in-law"
  },
  "公仆": {
    "pinyin": "gōng pú",
    "definition": "public servant"
  },
  "公顷": {
    "pinyin": "gōng qǐng",
    "definition": "hectare"
  },
  "公然": {
    "pinyin": "gōng rán",
    "definition": "openly; publicly; undisguised"
  },
  "公认": {
    "pinyin": "gōng rèn",
    "definition": "publicly known (to be); accepted (as)"
  },
  "公示": {
    "pinyin": "gōng shì",
    "definition": "to make known to the public (for information or to seek comments); public notification"
  },
  "公式": {
    "pinyin": "gōng shì",
    "definition": "formula"
  },
  "公事": {
    "pinyin": "gōng shì",
    "definition": "work-related matters; documents"
  },
  "公司": {
    "pinyin": "gōng sī",
    "definition": "company; firm; corporation"
  },
  "公务": {
    "pinyin": "gōng wù",
    "definition": "official business"
  },
  "公务员": {
    "pinyin": "gōng wù yuán",
    "definition": "functionary; office-bearer"
  },
  "公益": {
    "pinyin": "gōng yì",
    "definition": "public good; public welfare; public interest"
  },
  "公益性": {
    "pinyin": "gōngyì xìng",
    "definition": "Public welfare"
  },
  "公用": {
    "pinyin": "gōng yòng",
    "definition": "public; for public use"
  },
  "公寓": {
    "pinyin": "gōng yù",
    "definition": "apartment building; block of flats"
  },
  "公元": {
    "pinyin": "gōng yuán",
    "definition": "CE (Common Era); Christian Era; AD (Anno Domini)"
  },
  "公园": {
    "pinyin": "gōng yuán",
    "definition": "park (for public recreation)"
  },
  "公约": {
    "pinyin": "gōng yuē",
    "definition": "convention (i.e. international agreement)"
  },
  "公正": {
    "pinyin": "gōng zhèng",
    "definition": "just; fair; equitable"
  },
  "公证": {
    "pinyin": "gōng zhèng",
    "definition": "notarization; notarized; acknowledgement"
  },
  "公职": {
    "pinyin": "gōng zhí",
    "definition": "civil service; public office; government job"
  },
  "公众": {
    "pinyin": "gōng zhòng",
    "definition": "public"
  },
  "公主": {
    "pinyin": "gōng zhǔ",
    "definition": "princess"
  },
  "功": {
    "pinyin": "gōng",
    "definition": "meritorious deed or service; achievement; result; service; accomplishment; work (physics)"
  },
  "功臣": {
    "pinyin": "gōng chén",
    "definition": "minister who has given outstanding service"
  },
  "功底": {
    "pinyin": "gōng dǐ",
    "definition": "training in the basic skills; knowledge of the fundamentals"
  },
  "功夫": {
    "pinyin": "gōng fu",
    "definition": "skill; art; kung fu; labor; effort"
  },
  "功课": {
    "pinyin": "gōng kè",
    "definition": "homework; assignment; task; classwork; lesson; study"
  },
  "功劳": {
    "pinyin": "gōng láo",
    "definition": "contribution; meritorious service; credit"
  },
  "功力": {
    "pinyin": "gōng lì",
    "definition": "merit; efficacy; competence; skill; power"
  },
  "功率": {
    "pinyin": "gōng lu:4",
    "definition": "rate of work; power (output)"
  },
  "功能": {
    "pinyin": "gōng néng",
    "definition": "function; capability"
  },
  "功效": {
    "pinyin": "gōng xiào",
    "definition": "efficacy"
  },
  "攻": {
    "pinyin": "gōng",
    "definition": "to attack; to accuse; to study"
  },
  "攻读": {
    "pinyin": "gōng dú",
    "definition": "to major (in a field); to study a specialty to obtain a higher degree"
  },
  "攻关": {
    "pinyin": "gōng guān",
    "definition": "to storm a strategic pass; fig. to tackle a key problem"
  },
  "攻击": {
    "pinyin": "gōng jī",
    "definition": "to attack; to accuse; to charge; an attack (terrorist or military)"
  },
  "攻克": {
    "pinyin": "gōng kè",
    "definition": "to capture; to take; to overcome; to solve"
  },
  "供": {
    "pinyin": "gōng",
    "definition": "to provide; to supply"
  },
  "供不应求": {
    "pinyin": "gōng bù yìng qiú",
    "definition": "supply does not meet demand"
  },
  "供奉": {
    "pinyin": "gòng fèng",
    "definition": "to consecrate; to enshrine and worship; an offering (to one's ancestors); a sacrifice (to a god)"
  },
  "供给": {
    "pinyin": "gōng jǐ",
    "definition": "to furnish; to provide; supply (as in supply and demand)"
  },
  "供暖": {
    "pinyin": "gōng nuǎn",
    "definition": "to supply heating (in a building); heating"
  },
  "供求": {
    "pinyin": "gōng qiú",
    "definition": "supply and demand (economics)"
  },
  "供应": {
    "pinyin": "gōng yìng",
    "definition": "to supply; to provide; to offer"
  },
  "宫": {
    "pinyin": "Gōng",
    "definition": "surname Gong"
  },
  "宫殿": {
    "pinyin": "gōng diàn",
    "definition": "palace"
  },
  "宫廷": {
    "pinyin": "gōng tíng",
    "definition": "court (of king or emperor)"
  },
  "恭敬": {
    "pinyin": "gōng jìng",
    "definition": "deferential; respectful"
  },
  "恭维": {
    "pinyin": "gōng wei",
    "definition": "to praise; to speak highly of; compliment; praise"
  },
  "恭喜": {
    "pinyin": "gōng xǐ",
    "definition": "to congratulate; (interj.) congratulations!"
  },
  "巩固": {
    "pinyin": "gǒng gù",
    "definition": "to consolidate; consolidation; to strengthen"
  },
  "拱": {
    "pinyin": "gǒng",
    "definition": "to cup one's hands in salute; to surround; to arch; to dig earth with the snout; arched"
  },
  "共": {
    "pinyin": "gòng",
    "definition": "common; general; to share; together; total; altogether; abbr. for 共产党, Communist party"
  },
  "共和国": {
    "pinyin": "gòng hé guó",
    "definition": "republic"
  },
  "共计": {
    "pinyin": "gòng jì",
    "definition": "to sum up to; to total"
  },
  "共鸣": {
    "pinyin": "gòng míng",
    "definition": "(physics) to resonate; resonance; sympathetic response"
  },
  "共识": {
    "pinyin": "gòng shí",
    "definition": "common understanding; consensus"
  },
  "共同": {
    "pinyin": "gòng tóng",
    "definition": "common; joint; jointly; together; collaborative"
  },
  "共同体": {
    "pinyin": "gòng tóng tǐ",
    "definition": "community"
  },
  "共享": {
    "pinyin": "gòng xiǎng",
    "definition": "to share; to enjoy together"
  },
  "共性": {
    "pinyin": "gòng xìng",
    "definition": "overall character"
  },
  "共有": {
    "pinyin": "gòng yǒu",
    "definition": "to have altogether; in all"
  },
  "贡献": {
    "pinyin": "gòng xiàn",
    "definition": "to contribute; to dedicate; to devote; contribution"
  },
  "勾": {
    "pinyin": "Gōu",
    "definition": "surname Gou"
  },
  "勾画": {
    "pinyin": "gōu huà",
    "definition": "to sketch out; to delineate"
  },
  "勾结": {
    "pinyin": "gōu jié",
    "definition": "to collude with; to collaborate with; to gang up with"
  },
  "沟": {
    "pinyin": "gōu",
    "definition": "ditch; gutter; groove; gully; ravine"
  },
  "沟通": {
    "pinyin": "gōu tōng",
    "definition": "to join; to connect; to link up; to communicate"
  },
  "钩": {
    "pinyin": "gōu",
    "definition": "variant of 钩"
  },
  "钩子": {
    "pinyin": "gōu zi",
    "definition": "hook"
  },
  "狗": {
    "pinyin": "gǒu",
    "definition": "dog"
  },
  "构成": {
    "pinyin": "gòu chéng",
    "definition": "to constitute; to form; to compose; to make up; to configure (computing)"
  },
  "构建": {
    "pinyin": "gòu jiàn",
    "definition": "to construct (sth abstract)"
  },
  "构思": {
    "pinyin": "gòu sī",
    "definition": "to design; to plot; to plan out; to compose; to draw a mental sketch; conception; plan; idea; composition"
  },
  "构想": {
    "pinyin": "gòu xiǎng",
    "definition": "to conceive; concept"
  },
  "构造": {
    "pinyin": "gòu zào",
    "definition": "structure; composition; tectonic (geology)"
  },
  "购": {
    "pinyin": "gòu",
    "definition": "to buy; to purchase"
  },
  "购买": {
    "pinyin": "gòu mǎi",
    "definition": "to purchase; to buy"
  },
  "购物": {
    "pinyin": "gòu wù",
    "definition": "shopping"
  },
  "够": {
    "pinyin": "gòu",
    "definition": "enough (sufficient); enough (too much); (coll.) (before adj.) really; (coll.) to reach by stretching out"
  },
  "够呛": {
    "pinyin": "gòu qiàng",
    "definition": "unbearable; terrible; enough; unlikely"
  },
  "估计": {
    "pinyin": "gū jì",
    "definition": "to estimate; to reckon; (coll.) to suppose"
  },
  "估算": {
    "pinyin": "gū suàn",
    "definition": "assessment; evaluation"
  },
  "姑姑": {
    "pinyin": "gū gu",
    "definition": "paternal aunt"
  },
  "姑娘": {
    "pinyin": "gū niang",
    "definition": "girl; young woman; young lady; daughter; paternal aunt (old)"
  },
  "姑且": {
    "pinyin": "gū qiě",
    "definition": "for the time being; tentatively"
  },
  "孤单": {
    "pinyin": "gū dān",
    "definition": "lone; lonely; loneliness"
  },
  "孤独": {
    "pinyin": "gū dú",
    "definition": "lonely; solitary"
  },
  "孤儿": {
    "pinyin": "gū ér",
    "definition": "orphan"
  },
  "孤立": {
    "pinyin": "gū lì",
    "definition": "isolated; to isolate"
  },
  "孤零零": {
    "pinyin": "gū líng líng",
    "definition": "lone; isolated and without help; all alone; solitary"
  },
  "孤陋寡闻": {
    "pinyin": "gū lòu guǎ wén",
    "definition": "ignorant and inexperienced; ill-informed and narrow-minded"
  },
  "沽名钓誉": {
    "pinyin": "gū míng diào yù",
    "definition": "to angle for fame (idiom); to fish for compliments"
  },
  "辜负": {
    "pinyin": "gū fù",
    "definition": "to fail to live up (to expectations); unworthy (of trust); to let down; to betray (hopes); to disappoint"
  },
  "古": {
    "pinyin": "Gǔ",
    "definition": "surname Gu"
  },
  "古代": {
    "pinyin": "gǔ dài",
    "definition": "ancient times"
  },
  "古典": {
    "pinyin": "gǔ diǎn",
    "definition": "classical"
  },
  "古董": {
    "pinyin": "gǔ dǒng",
    "definition": "curio; antique"
  },
  "古怪": {
    "pinyin": "gǔ guài",
    "definition": "strange; weird; eccentric; bizarre"
  },
  "古迹": {
    "pinyin": "gǔ jì",
    "definition": "places of historic interest; historical sites"
  },
  "古今中外": {
    "pinyin": "gǔ jīn zhōng wài",
    "definition": "at all times and in all places (idiom)"
  },
  "古老": {
    "pinyin": "gǔ lǎo",
    "definition": "ancient; old; age-old"
  },
  "古朴": {
    "pinyin": "gǔ pǔ",
    "definition": "simple and unadorned (of art, architecture etc)"
  },
  "古人": {
    "pinyin": "gǔ rén",
    "definition": "people of ancient times; the ancients; extinct human species such as Homo erectus or Homo neanderthalensis; (literary) deceased person"
  }
};

export function lookupCharacter(char: string): DictionaryEntry | null {
  return DICTIONARY[char] || null;
}

export function lookupWord(word: string): DictionaryEntry | null {
  return DICTIONARY[word] || null;
}
