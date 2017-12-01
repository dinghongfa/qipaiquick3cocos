/**
 * 麻将牌常量定义
 * @author ""
 */

// 万子
exports.WZ_1 = 101;
exports.WZ_2 = 102;
exports.WZ_3 = 103;
exports.WZ_4 = 104;
exports.WZ_5 = 105;
exports.WZ_6 = 106;
exports.WZ_7 = 107;
exports.WZ_8 = 108;
exports.WZ_9 = 109;

// 条子
exports.TZ_1 = 201;
exports.TZ_2 = 202;
exports.TZ_3 = 203;
exports.TZ_4 = 204;
exports.TZ_5 = 205;
exports.TZ_6 = 206;
exports.TZ_7 = 207;
exports.TZ_8 = 208;
exports.TZ_9 = 209;

// 饼子
exports.BZ_1 = 301;
exports.BZ_2 = 302;
exports.BZ_3 = 303;
exports.BZ_4 = 304;
exports.BZ_5 = 305;
exports.BZ_6 = 306;
exports.BZ_7 = 307;
exports.BZ_8 = 308;
exports.BZ_9 = 309;

// 字牌
exports.DF = 501;
exports.NF = 503;
exports.XF = 505;
exports.BF = 507;
exports.HZ = 509;
exports.FC = 511;
exports.BB = 513;

// 一幅完整牌(包含字牌)
exports.ALL = [
	// 万子(一万到九万)
	101, 102, 103, 104, 105, 106, 107, 108, 109,
	101, 102, 103, 104, 105, 106, 107, 108, 109,
	101, 102, 103, 104, 105, 106, 107, 108, 109,
	101, 102, 103, 104, 105, 106, 107, 108, 109,
	// 饼子(一饼到九饼)
	201, 202, 203, 204, 205, 206, 207, 208, 209,
	201, 202, 203, 204, 205, 206, 207, 208, 209,
	201, 202, 203, 204, 205, 206, 207, 208, 209,
	201, 202, 203, 204, 205, 206, 207, 208, 209,
	// 条子(一条到九条)
	301, 302, 303, 304, 305, 306, 307, 308, 309,
	301, 302, 303, 304, 305, 306, 307, 308, 309,
	301, 302, 303, 304, 305, 306, 307, 308, 309,
	301, 302, 303, 304, 305, 306, 307, 308, 309,
	// 东风,南风,西风,北风,红中,发财,白板
	501, 503, 505, 507, 509, 511, 513,
	501, 503, 505, 507, 509, 511, 513,
	501, 503, 505, 507, 509, 511, 513,
	501, 503, 505, 507, 509, 511, 513
];

// 一幅精简牌(没有字牌)
exports.SIMPLE = [
	// 万子(一万到九万)
	101, 102, 103, 104, 105, 106, 107, 108, 109,
	101, 102, 103, 104, 105, 106, 107, 108, 109,
	101, 102, 103, 104, 105, 106, 107, 108, 109,
	101, 102, 103, 104, 105, 106, 107, 108, 109,
	// 饼子(一饼到九饼)
	201, 202, 203, 204, 205, 206, 207, 208, 209,
	201, 202, 203, 204, 205, 206, 207, 208, 209,
	201, 202, 203, 204, 205, 206, 207, 208, 209,
	201, 202, 203, 204, 205, 206, 207, 208, 209,
	// 条子(一条到九条)
	301, 302, 303, 304, 305, 306, 307, 308, 309,
	301, 302, 303, 304, 305, 306, 307, 308, 309,
	301, 302, 303, 304, 305, 306, 307, 308, 309,
	301, 302, 303, 304, 305, 306, 307, 308, 309
];