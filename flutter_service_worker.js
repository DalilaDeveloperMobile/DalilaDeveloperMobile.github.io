'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7c04dfb1da564f84978b18c3517427a4",
"assets/AssetManifest.bin.json": "390e98cefc5c211c1e2f54067e74013d",
"assets/AssetManifest.json": "b11d7410459b9733292f212c696cea30",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/windows.svg": "c9ff169f516405a33bd3618063ee8431",
"assets/assets/imgs/02.png": "c69fe1c71fb22e80db20de3a666ff1de",
"assets/assets/imgs/03.png": "dc2ab9bf1dc7b655c283b4238c7f75b8",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/1.png": "2db860ed6caf711f9ba977b46c005148",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/audioplayer.png": "08e07b2fccc19e599f04481ff783d22b",
"assets/assets/imgs/banners/1.png": "cadb03afef618d4f69d58629da7b9cea",
"assets/assets/imgs/banners/10.png": "b063157a2ee9a53b16a63d99bfdc62b1",
"assets/assets/imgs/banners/11.png": "175d8326725a4478fd7448fa72b6ae23",
"assets/assets/imgs/banners/12.png": "e433a0b71a482d59633a95051da17245",
"assets/assets/imgs/banners/13.png": "6b7db3e19d381eb99e494a2d4d7b7111",
"assets/assets/imgs/banners/14.png": "bb88ce5c6cb5d9588ace6c72ad033d54",
"assets/assets/imgs/banners/15.png": "f4a3ead41ce1b45e3e1282a5ea2c494a",
"assets/assets/imgs/banners/16.png": "4e3cb718862ccdabaa11f232c750dd17",
"assets/assets/imgs/banners/17.png": "4bfa3e82836e8ada99afbfe65c65dea1",
"assets/assets/imgs/banners/18.png": "49f2e0cfae37293294caa4b28d54cdbf",
"assets/assets/imgs/banners/19.png": "05d3f68aea2bed211ccd9464f28b3d4b",
"assets/assets/imgs/banners/2.png": "f394aba4e5ee8f78a80879bb78cfd921",
"assets/assets/imgs/banners/20.png": "0708af1fa89f2c053a8be44694df6147",
"assets/assets/imgs/banners/21.png": "9dea2e8bbd33bab28b2c024a0646bc9c",
"assets/assets/imgs/banners/22.png": "75815dd34f9bbf303eea39947f1ec202",
"assets/assets/imgs/banners/23.png": "b7487c2c4cf2540db83cd39fe8b144fc",
"assets/assets/imgs/banners/24.png": "1c97017a1617a519b2b422797d4e4699",
"assets/assets/imgs/banners/25.png": "e31a16d7f0c682e4fb112328c0026ff4",
"assets/assets/imgs/banners/26.png": "b2ebffd2d1254fd3b7421760ac27c546",
"assets/assets/imgs/banners/27.png": "9289f6650ec0bcf8faafed2bc719a3d4",
"assets/assets/imgs/banners/28.png": "46a56589e4273e7544489908b710387c",
"assets/assets/imgs/banners/29.png": "c5b5aa0ef8df5b45885dc42e5e233c9a",
"assets/assets/imgs/banners/3.png": "bed1c7061b86bb1007a541e1839a8d15",
"assets/assets/imgs/banners/30.png": "e76caa8be2f26d514739f8076e6c8dee",
"assets/assets/imgs/banners/31.png": "e3ea47d83047b0350c3754005d70f093",
"assets/assets/imgs/banners/32.png": "d25d105cec2bae90fca7ac5ce68fdc87",
"assets/assets/imgs/banners/33.png": "370ef53206ea74d2e04c8e5990b81afe",
"assets/assets/imgs/banners/4.png": "a352be2ad20d5f9ed585fa432db79b2a",
"assets/assets/imgs/banners/5.png": "e7cec381b9dc7f08f0e9706c12e560b1",
"assets/assets/imgs/banners/6.png": "6f947bea8a338716639bbfa0318520d4",
"assets/assets/imgs/banners/7.png": "fcfa7628204946bacfdb319335ff24d3",
"assets/assets/imgs/banners/8.png": "ea083c06a2d5f6ff9510eb8e584ec72a",
"assets/assets/imgs/banners/9.png": "a7eec032db4c42efae2230f7af217683",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/bibligibis.png": "5967546b7442c12b203d9846277e64f7",
"assets/assets/imgs/brickbreaker.png": "e5c997523ca4eec23e4257d2774d0d7f",
"assets/assets/imgs/campo_minado_logo.png": "1ff585bef07d2602e75bb647462fb19a",
"assets/assets/imgs/celular1.png": "b8cabc5e0e8fd67b0f09c1c6a48a553c",
"assets/assets/imgs/celular2.png": "11842c567158b38e0c5d492c4699fc34",
"assets/assets/imgs/celular3.png": "cfc777039c18c87710e85f57eb46aa73",
"assets/assets/imgs/celular4.png": "cf60251668ca7305126193ea62fec122",
"assets/assets/imgs/celular5.png": "6e7753d582d652c25de6cef559dca1b6",
"assets/assets/imgs/celular6.png": "d2a93a92b0785ce6735785860234dbc1",
"assets/assets/imgs/celular7.png": "6434776d1e8f1181aa8b33e0ecfc4889",
"assets/assets/imgs/colorbook.png": "84420400b2672a3766dd01bd53ea57d6",
"assets/assets/imgs/cripto.png": "7f08aa57b193b76c184ec4b5099dc9f0",
"assets/assets/imgs/damas.png": "db706a950dd6063329c916185acc0d11",
"assets/assets/imgs/dinogame.png": "c2a4b0772b4043c08709af2d1a82bc06",
"assets/assets/imgs/dizimos_ofertas_logo.png": "d8bbe739489e567637652c14b2665a11",
"assets/assets/imgs/domin%25C3%25B3.png": "1df73cd2c9ccc2d84d9a29f3a0f5c897",
"assets/assets/imgs/fitnessapp.png": "f525d3ac1767a840bfc774c5cc9e35e8",
"assets/assets/imgs/flix_believer_logo.png": "b3c43b3ff7bbda90bff04e88b9a14954",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/futbolsports.png": "d87d0072cac8fcd9d08fa11eea96c230",
"assets/assets/imgs/futebolsocial.png": "70277776d1de8ccdf1aad4641cb7b02f",
"assets/assets/imgs/gibisrandom.png": "b90de0a074c2c56c06a0d94e7751170d",
"assets/assets/imgs/imgs_pages/audioplayer/img_audioplayer/1.png": "315895e9de9caee8a3b93a5de74c3b14",
"assets/assets/imgs/imgs_pages/audioplayer/img_audioplayer/2.png": "0479595fde420827312c123b4680d631",
"assets/assets/imgs/imgs_pages/audioplayer/img_audioplayer/3.png": "43d827f10e9985e7029cba57323d8f0d",
"assets/assets/imgs/imgs_pages/bibligibis/img_bibligibis/1.png": "1901299905cfaa65e18aa31366b39bd4",
"assets/assets/imgs/imgs_pages/bibligibis/img_bibligibis/2.png": "2cae00016251ec2590eb24d573d0e261",
"assets/assets/imgs/imgs_pages/bibligibis/img_bibligibis/3.png": "a565f4ffff5139b3befbe79aa41343c5",
"assets/assets/imgs/imgs_pages/brickbreaker/img_brickbreaker/1.png": "2f35afe1ccf36ddd5be57bfb111a815a",
"assets/assets/imgs/imgs_pages/brickbreaker/img_brickbreaker/2.png": "807922aa7c0badb228fdae346bd35e9e",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/1.png": "9af8d53f4cf27eb03c3bb107528bcf21",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/2.png": "ee54caf209a003e099db18a40dd32da1",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/3.png": "22faf31dc8ae2c74885032812cf618a3",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/4.png": "2d56af8f1f29bbd23f92e0866358c98f",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/5.png": "4e32df970dac7a68d85195e1e2f3673c",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/6.png": "b65fd223986cc6ace12f4a67e8bf0bee",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/7.png": "294c046341dc746afb6bfaa96b6f706b",
"assets/assets/imgs/imgs_pages/colorbook/img_colorbook/1.png": "ac4616108247c8871dc1b331a25cb61b",
"assets/assets/imgs/imgs_pages/colorbook/img_colorbook/2.png": "5921be12ee515d0d13c971df24f9010d",
"assets/assets/imgs/imgs_pages/colorbook/img_colorbook/3.png": "f3bc18fbdc71377f449eb17c20370725",
"assets/assets/imgs/imgs_pages/criptoapp/img_criptoapp/1.png": "97ba238d910d29d1720b2e475033070d",
"assets/assets/imgs/imgs_pages/criptoapp/img_criptoapp/2.png": "e1084193b4cb4a007227a1f46432a8c8",
"assets/assets/imgs/imgs_pages/criptoapp/img_criptoapp/3.png": "4ddf14ba2aa02b122fa3a194f5b792c9",
"assets/assets/imgs/imgs_pages/criptoapp/img_criptoapp/4.png": "faf6a03174302572731d02d941b7dec0",
"assets/assets/imgs/imgs_pages/criptoapp/img_criptoapp/5.png": "f6ab97fbec6949c45450cb2c5184b7a3",
"assets/assets/imgs/imgs_pages/criptoapp/img_criptoapp/6.png": "d54ead1c7e02dec3bc586c6f20f60813",
"assets/assets/imgs/imgs_pages/damasgame/img_damasgame/1.png": "5194e59f836c2b251b9a2c8e7557df09",
"assets/assets/imgs/imgs_pages/damasgame/img_damasgame/2.png": "634189b3d4d1c9ee0533d0bdb3253acb",
"assets/assets/imgs/imgs_pages/damasgame/img_damasgame/3.png": "a890afb6f833623aabb482af61f3b6d0",
"assets/assets/imgs/imgs_pages/dinogame/img_dinogame/1.png": "ecd9908117c8bb19c5ee884c365970c4",
"assets/assets/imgs/imgs_pages/dinogame/img_dinogame/2.png": "dc3ccd2076f18ad001fbe2f3302f1700",
"assets/assets/imgs/imgs_pages/dinogame/img_dinogame/3.png": "9a43622e7fcea319024c9606341d7fc9",
"assets/assets/imgs/imgs_pages/dinogame/img_dinogame/4.png": "8046dfb503cf3257fd2a126b084928b2",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/1.png": "da499be50559e01d6793b8582f762876",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/2.png": "cd9ceae0831ee54c5c092ee6032fe397",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/3.png": "8c0d649987edcdaae204376d3f6ffc64",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/4.png": "a9565d32a451985abbbb0d4626b9b76e",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/5.png": "a60a737454cb94ed7bd5c0b8ff564207",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/6.png": "1558cd22ec3902b879a14ca17fcca663",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/7.png": "a1b2bd806083210cd81950cb5b337740",
"assets/assets/imgs/imgs_pages/domino_game/img_domino_game/1.png": "757a3a514350b3cabf03a9dac38e4ad3",
"assets/assets/imgs/imgs_pages/domino_game/img_domino_game/2.png": "91f6ef6f1afddf99a5979c590c1b1259",
"assets/assets/imgs/imgs_pages/domino_game/img_domino_game/3.png": "55ef852b123305c77a7c46f927044918",
"assets/assets/imgs/imgs_pages/fitnessapp/img_fitnessapp/1.png": "7bbec9b377809d5800d47c4d45dea8af",
"assets/assets/imgs/imgs_pages/fitnessapp/img_fitnessapp/2.png": "918e884da6c6362743459a694ec038c4",
"assets/assets/imgs/imgs_pages/fitnessapp/img_fitnessapp/3.png": "f3d3bf42f6b024a374cb7610f0feee8f",
"assets/assets/imgs/imgs_pages/fitnessapp/img_fitnessapp/4.png": "3cefeb70df23ac2fb504947547431920",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/1.png": "fa3adc60feedc4b152e12d1e1bf3a495",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/2.png": "f71879692ea45b973b220c5c076f0cff",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/3.png": "fb8b12abb16e50722008918b7dfbbfb7",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/4.png": "3efb2f5e34854f9f56b17b2385112aa1",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/5.png": "a3bbb9bbbcc88edcd0232e8230390478",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/6.png": "b2b575819a3940f3b057584c80dec489",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/7.png": "30e3ea2a68d142918b13f204317b8198",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/8.png": "50bca9dcf11d4595370ac9be3c5a131a",
"assets/assets/imgs/imgs_pages/flix_move/img_flix_move/1.png": "c556e090e43a97c7b5b7196d468ee362",
"assets/assets/imgs/imgs_pages/flix_move/img_flix_move/2.png": "e10e1091f0e86e29868af0424555b439",
"assets/assets/imgs/imgs_pages/flix_move/img_flix_move/3.png": "1994a242f9dd665ee710cb28f3db0bfa",
"assets/assets/imgs/imgs_pages/flix_move/img_flix_move/4.png": "087e82d5d32aa9a97e16e6a1eff74a45",
"assets/assets/imgs/imgs_pages/fultebolsocial/img_futebolsocial/1.png": "57d7eddc3699f5d5fd03b19998600a1a",
"assets/assets/imgs/imgs_pages/fultebolsocial/img_futebolsocial/2.png": "cd36e8714a5df44a7a0eb38f96855703",
"assets/assets/imgs/imgs_pages/fultebolsocial/img_futebolsocial/3.png": "09dcc2e8f7edc463630f5b9e5a486cf2",
"assets/assets/imgs/imgs_pages/futebolsports/img_futebolsports/1.png": "45712207a61e81d28f59694bbb801a6a",
"assets/assets/imgs/imgs_pages/futebolsports/img_futebolsports/2.png": "72bb1c01f79542318f1b1de50b665227",
"assets/assets/imgs/imgs_pages/futebolsports/img_futebolsports/3.png": "b53d30ecbeee5f9bafe04864660dcbcb",
"assets/assets/imgs/imgs_pages/futebolsports/img_futebolsports/4.png": "5478a178067a02aaa19d595604c896f2",
"assets/assets/imgs/imgs_pages/futebolsports/img_futebolsports/5.png": "062af7ed78fc324f4ed6c5137a02cbc6",
"assets/assets/imgs/imgs_pages/gibisrandom/img_gibisrandom/1.png": "feafadf4185f90f7d56494e97fb265bb",
"assets/assets/imgs/imgs_pages/gibisrandom/img_gibisrandom/2.png": "e9dfa96b4ffae3106dd685e2504f6e3b",
"assets/assets/imgs/imgs_pages/gibisrandom/img_gibisrandom/3.png": "2eed757a7e6cbe57d709ae1b836cd7c6",
"assets/assets/imgs/imgs_pages/livropdf/img_livropdf/1.png": "8758bf57bfa209674d4fb3026441a2cb",
"assets/assets/imgs/imgs_pages/livropdf/img_livropdf/2.png": "b7212e94a4659f19c9d8eb591601a6d2",
"assets/assets/imgs/imgs_pages/livropdf/img_livropdf/3.png": "40c681322ca0571cdc8904d6b7601c89",
"assets/assets/imgs/imgs_pages/lojamoveis/img_lojamoveis/1.png": "2d86468b1cade61142b82c74c9026bea",
"assets/assets/imgs/imgs_pages/lojamoveis/img_lojamoveis/2.png": "aee490a73e6333080a46c4aa0c92d57e",
"assets/assets/imgs/imgs_pages/loja_celulares/img_loja_celulares/1.png": "f27e758cdc193c8ad345ef7200bc2241",
"assets/assets/imgs/imgs_pages/loja_celulares/img_loja_celulares/2.png": "e2163ab230b3021659420fbfd6ece29f",
"assets/assets/imgs/imgs_pages/loja_celulares/img_loja_celulares/3.png": "2d882fb693b7447fe637e9bd4a6bc3f8",
"assets/assets/imgs/imgs_pages/loja_celulares/img_loja_celulares/4.png": "5eb5564ad018ce1b0ca18e9427989154",
"assets/assets/imgs/imgs_pages/loja_cmb/img_loja_cmb/1.png": "4dcd0c4802969a96f516344aa927118b",
"assets/assets/imgs/imgs_pages/loja_cmb/img_loja_cmb/2.png": "5954142dcff190159e4341b6dfdc7d30",
"assets/assets/imgs/imgs_pages/loja_cmb/img_loja_cmb/3.png": "78c3dd464b8955b0ce89371d225a8c66",
"assets/assets/imgs/imgs_pages/loja_cmb/img_loja_cmb/4.png": "b0d855709d0592148dd297a93344055f",
"assets/assets/imgs/imgs_pages/loja_cmb/img_loja_cmb/5.png": "fbd0e439d4a75a029469dc753d6367d7",
"assets/assets/imgs/imgs_pages/loja_cmb/img_loja_cmb/6.png": "c17a8e5a643f51610e698290e98e82cb",
"assets/assets/imgs/imgs_pages/market_multi/img_market_multi/1.png": "8764ba7a51cc4f50b2bf103945f2f42c",
"assets/assets/imgs/imgs_pages/market_multi/img_market_multi/2.png": "84748ab7f0f14d6144abbb2ada06b202",
"assets/assets/imgs/imgs_pages/market_multi/img_market_multi/3.png": "82fe943b4c143e7fed5bec92e9840626",
"assets/assets/imgs/imgs_pages/market_multi/img_market_multi/4.png": "1d18d783632dae7a4bab6c45c6d63a4e",
"assets/assets/imgs/imgs_pages/market_multi/img_market_multi/5.png": "fd719e83fd0fc1dba490553be1f2ff2b",
"assets/assets/imgs/imgs_pages/meals/img_meals/1.png": "2f786b1867e918a12c4ceaf07e670dec",
"assets/assets/imgs/imgs_pages/meals/img_meals/10.png": "eb3077cb9bed3007871a288c6897355c",
"assets/assets/imgs/imgs_pages/meals/img_meals/11.png": "31f10c15798d3b1ccea0e839ae51f916",
"assets/assets/imgs/imgs_pages/meals/img_meals/12.png": "be41410826c6e78061ed01744ff992dc",
"assets/assets/imgs/imgs_pages/meals/img_meals/13.png": "cf970d82b1aaabd100001e7c6e6cb2f9",
"assets/assets/imgs/imgs_pages/meals/img_meals/14.png": "66ee826465644254a012718bc60007ea",
"assets/assets/imgs/imgs_pages/meals/img_meals/15.png": "2e786b92d470031e5bd2b0d445ff84a9",
"assets/assets/imgs/imgs_pages/meals/img_meals/2.png": "8f71b232582b43a713d011913f5fb915",
"assets/assets/imgs/imgs_pages/meals/img_meals/3.png": "f555bcc2b78e16463178a88675540dfd",
"assets/assets/imgs/imgs_pages/meals/img_meals/4.png": "10c429cdb876ca95b6cb162b4ddff16c",
"assets/assets/imgs/imgs_pages/meals/img_meals/5.png": "a41c6a3d24b51221df3b6844977ff984",
"assets/assets/imgs/imgs_pages/meals/img_meals/6.png": "0fac20c572e0812cc23a5caa576161bd",
"assets/assets/imgs/imgs_pages/meals/img_meals/7.png": "b913bad515178ac4b1f6e6761270c0b3",
"assets/assets/imgs/imgs_pages/meals/img_meals/8.png": "bb21c88a7b579c967f058ebc90f63ee3",
"assets/assets/imgs/imgs_pages/meals/img_meals/9.png": "867df566625387f221ac915af48035b3",
"assets/assets/imgs/imgs_pages/money/img_money/1.png": "91c1408fc95125331909186e7f6deae5",
"assets/assets/imgs/imgs_pages/money/img_money/2.png": "bc6a56198c342ccc29e57c15422006fc",
"assets/assets/imgs/imgs_pages/money/img_money/3.png": "bc1e943848f7fd60c31b4b503f695fbb",
"assets/assets/imgs/imgs_pages/money/img_money/4.png": "f1fcd21ed38bb6abb39a013ba9356d6c",
"assets/assets/imgs/imgs_pages/money/img_money/5.png": "ecdb7ce0ffd7ca5157b49acebe30e5d2",
"assets/assets/imgs/imgs_pages/money/img_money/6.png": "f20e29f626c6dc1235bf69c0c137f011",
"assets/assets/imgs/imgs_pages/navecosmic/img_navecosmic/1.png": "b8c375003b078f5c5970b2265e8d1b34",
"assets/assets/imgs/imgs_pages/navecosmic/img_navecosmic/2.png": "e27258a34f81b4aefa38bc4151b0e889",
"assets/assets/imgs/imgs_pages/navecosmic/img_navecosmic/3.png": "8b5f90f066656db7c92b37178b081a13",
"assets/assets/imgs/imgs_pages/navecosmic/img_navecosmic/4.png": "b30dd1a0f56787285da1bbcb341df097",
"assets/assets/imgs/imgs_pages/noteapp/img_noteapp/1.png": "66e9bfa6056d5c1db695b2fb31b01068",
"assets/assets/imgs/imgs_pages/noteapp/img_noteapp/2.png": "2d8849b658b4809c0777ba9cac9e3c25",
"assets/assets/imgs/imgs_pages/noteapp/img_noteapp/3.png": "d256b6a094b4527d036cf679fa3d8c0e",
"assets/assets/imgs/imgs_pages/noteapp/img_noteapp/4.png": "0a1f41aa89d27385b050c22ec6a4dde5",
"assets/assets/imgs/imgs_pages/petmania/img_petmania/1.png": "1ac060a0d0cc638e23fc87ef93c4a969",
"assets/assets/imgs/imgs_pages/petmania/img_petmania/2.png": "591c469be75438a095c1513841d0e970",
"assets/assets/imgs/imgs_pages/petmania/img_petmania/3.png": "a08d0720b3bbfc8060ab4030c99d8f26",
"assets/assets/imgs/imgs_pages/petmania/img_petmania/4.png": "198cde26a7234b981cf1e871ef1bd1c4",
"assets/assets/imgs/imgs_pages/projeto_ecoar/img_projeto_ecoar/1.png": "dc228d3cf25d107b044b88325072e673",
"assets/assets/imgs/imgs_pages/projeto_ecoar/img_projeto_ecoar/2.png": "c91e6a4f9a5d9d2b73e563b042714b4c",
"assets/assets/imgs/imgs_pages/projeto_ecoar/img_projeto_ecoar/3.png": "72d8b1d7af69e51a4c6cfc101a860672",
"assets/assets/imgs/imgs_pages/projeto_ecoar/img_projeto_ecoar/4.png": "1e163600b327218ca727363e5674c92e",
"assets/assets/imgs/imgs_pages/projeto_ecoar/img_projeto_ecoar/5.png": "0c4774c088c4bf047f4f49b92c217d32",
"assets/assets/imgs/imgs_pages/projeto_ecoar/img_projeto_ecoar/6.png": "8242e926e020a4840f9dc1a3da94ed54",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/1.png": "a27c8d5636d43e75d6ae0cf073ed59b5",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/10.png": "2514b09b9a397c8e55aca822b9676839",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/11.png": "ea167c61c361bc1424e095baae515ec4",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/12.png": "44b797f38f5edda117756f90484352e6",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/13.png": "fea22abe10c94fb2ee15511c71c2eef9",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/14.png": "773713ac029989f1d26a7a402e37ee28",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/15.png": "3c34ca4b4ec435a548184300a23903f5",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/16.png": "8b802b9d3ba29766cd7baa020d351425",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/17.png": "da924af2349bad25919f42ded8284a06",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/18.png": "a2b47070521a217414659a9d5b89d6cd",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/19.png": "20d7e9f1e0dbd4251b2f526e85b95828",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/2.png": "d98c390cf5f07d49c44c2080ee28cfd8",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/20.png": "7bd96f4eb1482644ca1014b9f4eb8fc0",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/3.png": "af4f4d875ebee049b74dea5f352cd256",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/4.png": "de0df6ac02e56f2eb4694820ea756f92",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/5.png": "f6c423c4d2c466d550ccbc9818bf3363",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/6.png": "b8cb660c699b730ccf2318ed6584aedc",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/7.png": "714b288c91ad5d9927b2ecccf3a20248",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/8.png": "8eaeebbcc249d0bba9aeeb23d0be596a",
"assets/assets/imgs/imgs_pages/quiz_biblico/img_quiz_biblico/9.png": "c01a503ddeeff91b6af80aed66b31a6a",
"assets/assets/imgs/imgs_pages/snakegame/img_snakegame/1.png": "b3e16cac7253184dafa6889f2e63e343",
"assets/assets/imgs/imgs_pages/snakegame/img_snakegame/2.png": "a5c5bcf3125e799f55ae29114e96f7f3",
"assets/assets/imgs/imgs_pages/tetrisgame/img_tetrisgame/1.png": "43f81fa4caeaa2c94d1311e267ff4925",
"assets/assets/imgs/imgs_pages/tetrisgame/img_tetrisgame/2.png": "9385c65f6146909e353ce47c3d0b6234",
"assets/assets/imgs/imgs_pages/violaotablatura/img_violaotablatura/1.png": "05b47935bada7c606a79b946f5151824",
"assets/assets/imgs/imgs_pages/weatherapp/img_weatherapp/1.png": "502042fc55c3ea5939270599c60fd638",
"assets/assets/imgs/imgs_pages/weatherapp/img_weatherapp/2.png": "5a15bdcea64de997bd781cfc8e3f3a0b",
"assets/assets/imgs/imgs_pages/weatherapp/img_weatherapp/3.png": "4bd8cb67c625b537bc2b508ee9b0d3fb",
"assets/assets/imgs/imgs_pages/worshipradio/img_worshipradio/1.png": "a73ba51c4373e2557bab1b3d0a624460",
"assets/assets/imgs/imgs_pages/worshipradio/img_worshipradio/2.png": "0cedb69332543ca63ddbb411e3990e3f",
"assets/assets/imgs/imgs_pages/worshipradio/img_worshipradio/3.png": "6ab9b693c940437ec1adb4cac0e105cb",
"assets/assets/imgs/IMG_0107.jpg": "815acd4de17e3f053e4518d8e884c286",
"assets/assets/imgs/livropdf.png": "58ebce4756cae0c93f088e28a1c69b59",
"assets/assets/imgs/logo.png": "b537beb56fa73d409f8c1b0bc247be3c",
"assets/assets/imgs/logo1.png": "267c3166e02c02d15491f8eac020c1ff",
"assets/assets/imgs/lojamoveis.png": "7abe366f2879de063487a589aa266290",
"assets/assets/imgs/loja_celulares.png": "b7182aced5800c4f93ba460c2a1c10f4",
"assets/assets/imgs/loja_cmb.png": "7d94fffc14c38dc8f3640c88145daabc",
"assets/assets/imgs/market_multi_logo.png": "313753ec875f7bd2eb3ea1321209b563",
"assets/assets/imgs/meals_logo.png": "d57d900a4104d6fcaef51ed82ed31cfc",
"assets/assets/imgs/money.png": "396199b464ca1caf2f4e82eb455f6119",
"assets/assets/imgs/navecosmic.png": "bbd547a159edde7cacd82b4910f5b358",
"assets/assets/imgs/noteapp.png": "a4ed0d7967588ca360088bcef6c025aa",
"assets/assets/imgs/petmania.png": "0c7643a5e1ce094ddd75010b4c2cf1b0",
"assets/assets/imgs/posters_pages/posters_audioplayer/1.png": "47463926dbdf2cf881dc29618254ba12",
"assets/assets/imgs/posters_pages/posters_bibligibis/1.png": "40aa73bfa6f62b326700ef4e54954650",
"assets/assets/imgs/posters_pages/posters_bibligibis/2.png": "65c83ee674abbca390b6df046ac7dee1",
"assets/assets/imgs/posters_pages/posters_bibligibis/3.png": "e5fa38bd53f21e86c60f0b554353b1d6",
"assets/assets/imgs/posters_pages/posters_bibligibis/4.png": "297bfabc82c09033090333d39a9d0c93",
"assets/assets/imgs/posters_pages/posters_bibligibis/5.png": "95d60cc0c99eb6b0cf1bfee2eff092ef",
"assets/assets/imgs/posters_pages/posters_bibligibis/6.png": "185f11a8839464771f2a4fadec51ed33",
"assets/assets/imgs/posters_pages/posters_bibligibis/7.png": "4409149253db8afc0074290164d0e5ae",
"assets/assets/imgs/posters_pages/posters_bibligibis/8.png": "884a8ada0ffd15f7d1a3a2342a011624",
"assets/assets/imgs/posters_pages/posters_brickbreacker/1.png": "256eb48a863d43b7a931b3adfd0c4f39",
"assets/assets/imgs/posters_pages/posters_campo_minado/1.jpg": "c325e6513062fd04c43f10c4b20719a1",
"assets/assets/imgs/posters_pages/posters_campo_minado/2.jpg": "10bc889f298e6dbed6e41091f54c1b90",
"assets/assets/imgs/posters_pages/posters_campo_minado/3.jpg": "bb9e2bd589166c57060bb512f1d38bb9",
"assets/assets/imgs/posters_pages/posters_campo_minado/4.jpg": "ddd9a7300ce7b2c878aea1743e187827",
"assets/assets/imgs/posters_pages/posters_campo_minado/5.jpg": "771be2bff1e405f94b2a27be262e459c",
"assets/assets/imgs/posters_pages/posters_campo_minado/6.jpg": "64fd8b61479589b18cb2739b547c2897",
"assets/assets/imgs/posters_pages/posters_campo_minado/7.jpg": "fbadeec012f059d24be2321b0a6f245a",
"assets/assets/imgs/posters_pages/posters_colorbook/1.png": "411f6685481d2956cc3c09b3593f34d8",
"assets/assets/imgs/posters_pages/posters_colorbook/2.png": "de0f6542dc6be0bce682e9bb4e9ce77c",
"assets/assets/imgs/posters_pages/posters_colorbook/3.png": "13c4e99952a8206beca5ff885f4e2b6a",
"assets/assets/imgs/posters_pages/posters_criptoapp/1.png": "04a47d038132b4cc94d898308e4fe586",
"assets/assets/imgs/posters_pages/posters_criptoapp/2.png": "90a51cd81998802efdbda66e3ea9fd25",
"assets/assets/imgs/posters_pages/posters_criptoapp/3.png": "d35fa0b077d4549ba140445ef07ffb35",
"assets/assets/imgs/posters_pages/posters_criptoapp/4.png": "1f4417a1bd1d8c5de816b3b40a3ef6f7",
"assets/assets/imgs/posters_pages/posters_criptoapp/5.png": "d1c2995e28e21194d4ff2d05a3a2a220",
"assets/assets/imgs/posters_pages/posters_criptoapp/6.png": "c81d858f134dbe591399021fc0c714ab",
"assets/assets/imgs/posters_pages/posters_criptoapp/7.png": "9b94c94eba5cbfdefeb69de02d4852f2",
"assets/assets/imgs/posters_pages/posters_criptoapp/8.png": "e50f0203a3a5a4f8efcf2502de5ee306",
"assets/assets/imgs/posters_pages/posters_damasgame/1.png": "94fa12d6600d600fa7af5a41e0a4a085",
"assets/assets/imgs/posters_pages/posters_damasgame/2.png": "05d6bf64476211bca522ac4da55b8312",
"assets/assets/imgs/posters_pages/posters_dinogame/1.png": "52d1251cd8712dd68ebd02685f629951",
"assets/assets/imgs/posters_pages/posters_dinogame/2.png": "40a86d7cb82949ddf3d8fbd26e9bd464",
"assets/assets/imgs/posters_pages/posters_dinogame/3.png": "f72fa84cb26f2a8477d43dd6aa3b8d49",
"assets/assets/imgs/posters_pages/posters_dinogame/4.png": "6e81cf9f400eb886c3bed8da64f3dd5c",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/1.png": "79f304a940668e031d9c8e216edc0a2f",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/2.png": "debebeae3b97c8a1624b249dc313a899",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/3.png": "831077902795a186e38aa4f4e2421912",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/4.png": "de14419f3005e364a2f43355029040cd",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/5.png": "45094dd37c1144741b1f27e4e0a04827",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/6.png": "f0906f88b5a980025513c7f609ed8ebe",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/7.png": "81b00af1ddd5aa0bf892bb7658f4cfbf",
"assets/assets/imgs/posters_pages/posters_domino_game/1.png": "e636cc9c8ee92d46bede84a6dc9e9ecf",
"assets/assets/imgs/posters_pages/posters_fitness_app/1.png": "c7548189c352c5cb1bf628298094352c",
"assets/assets/imgs/posters_pages/posters_fitness_app/2.png": "5e56a968fb2445332d7398d0639318f2",
"assets/assets/imgs/posters_pages/posters_fitness_app/3.png": "fc931c544140070b525c5979fefaef0c",
"assets/assets/imgs/posters_pages/posters_fitness_app/4.png": "1f5408e0daf260733a0b2bf5acdda192",
"assets/assets/imgs/posters_pages/posters_fitness_app/5.png": "916f9a94b39b82b41fa59d445cdd1991",
"assets/assets/imgs/posters_pages/posters_fitness_app/6.png": "cc910921119665c6f79e96dd49a6711b",
"assets/assets/imgs/posters_pages/posters_fitness_app/7.png": "72c091b0a195cee095ef9d363db960cb",
"assets/assets/imgs/posters_pages/posters_fitness_app/8.png": "ac32924f2258854366718c678d97bdfb",
"assets/assets/imgs/posters_pages/posters_flix_believer/1.png": "ad2c461b873ee971215dd53f08420306",
"assets/assets/imgs/posters_pages/posters_flix_believer/2.png": "860e1633434bef651020d5c7cf759bf5",
"assets/assets/imgs/posters_pages/posters_flix_believer/3.png": "f4c00144532dd4e6537e64c3273f7fb7",
"assets/assets/imgs/posters_pages/posters_flix_believer/4.png": "2f2ffa46117258df4ca61e1110fa90cd",
"assets/assets/imgs/posters_pages/posters_flix_believer/5.png": "cee450237c96ce991527fe4ca238d34c",
"assets/assets/imgs/posters_pages/posters_flix_believer/6.png": "9da66999ea55f28e4681a228b0936c82",
"assets/assets/imgs/posters_pages/posters_flix_believer/7.png": "d31e719ab26f09689c3ce430aff96a14",
"assets/assets/imgs/posters_pages/posters_flix_believer/8.png": "88d18539f882fe2ab6f71d1894368dbb",
"assets/assets/imgs/posters_pages/posters_flix_move/1.jpg": "6b1961aa0f8aeff985fa1f440826f047",
"assets/assets/imgs/posters_pages/posters_flix_move/2.jpg": "98be38cac2776c7b4402c0f328f62128",
"assets/assets/imgs/posters_pages/posters_flix_move/3.jpg": "a787032593c43970883f176d8c446f60",
"assets/assets/imgs/posters_pages/posters_futebolsocial/1.png": "609164bf76ba55cbf1fc73f34011990b",
"assets/assets/imgs/posters_pages/posters_futebolsocial/2.png": "c7dc34a46f6867cae60f9407a8b7dc8c",
"assets/assets/imgs/posters_pages/posters_futebolsocial/3.png": "f4176c63d0df45f5f3031b673a635468",
"assets/assets/imgs/posters_pages/posters_futebolsports/1.png": "d05a67d4f84c900d42b35f21dfcc773a",
"assets/assets/imgs/posters_pages/posters_futebolsports/2.png": "0173d20a1ec4783c4e737237fa2d4ffa",
"assets/assets/imgs/posters_pages/posters_futebolsports/3.png": "81563c09aa705c22424326dea4a7ab29",
"assets/assets/imgs/posters_pages/posters_futebolsports/4.png": "8d3659aba6d303f6bcee666e89513e3f",
"assets/assets/imgs/posters_pages/posters_futebolsports/5.png": "207e3dcdf4f1abf00bf6f510f1550931",
"assets/assets/imgs/posters_pages/posters_futebolsports/6.png": "4a04dbdd8305bd379dafc0601aa628da",
"assets/assets/imgs/posters_pages/posters_futebolsports/7.png": "ebda25c645ddd6e608bb3e8dbd637369",
"assets/assets/imgs/posters_pages/posters_futebolsports/8.png": "ce8e8f72328de31388c00baf40eaab6a",
"assets/assets/imgs/posters_pages/posters_gibisrandom/1.png": "61d130817bdce4a4d85b688ede258a10",
"assets/assets/imgs/posters_pages/posters_gibisrandom/2.png": "663f1f7acbde5e7f0a88f38cfe1cb15c",
"assets/assets/imgs/posters_pages/posters_gibisrandom/3.png": "c142dc98d1ce445e1aca04890a9b94e4",
"assets/assets/imgs/posters_pages/posters_livropdf/1.png": "01fe7b886790810202ae9ffd3086bdad",
"assets/assets/imgs/posters_pages/posters_livropdf/2.png": "92bc4a279d736c62e804875e7ae4d7f2",
"assets/assets/imgs/posters_pages/posters_livropdf/3.png": "4ca6cc680cdc827a09f48ddbb14b9bd3",
"assets/assets/imgs/posters_pages/posters_livropdf/4.png": "49836898201d9f9a33acef79c8827260",
"assets/assets/imgs/posters_pages/posters_livropdf/5.png": "fa0d55ccb3b1eef8fa3ff4dab65c5035",
"assets/assets/imgs/posters_pages/posters_livropdf/6.png": "19964b9763fdb6894951a757758e47bd",
"assets/assets/imgs/posters_pages/posters_livropdf/7.png": "2b78a76656cc3c3966c8c069c3d04516",
"assets/assets/imgs/posters_pages/posters_lojamoveis/1.png": "153823c5b85adce1bdfa275af859d210",
"assets/assets/imgs/posters_pages/posters_lojamoveis/2.png": "8474fc4ebc4dab0a728a896053bc66ec",
"assets/assets/imgs/posters_pages/posters_lojamoveis/3.png": "18b887eaa997ceebf160f8a4ecaa0485",
"assets/assets/imgs/posters_pages/posters_lojamoveis/4.png": "780986f13a5d7d5e8ae74a654931c7ea",
"assets/assets/imgs/posters_pages/posters_lojamoveis/5.png": "06ec65b958b1cc76f623f9c108364b58",
"assets/assets/imgs/posters_pages/posters_loja_celulares/1.png": "d71a49146bc43cf53f941ad18513a8f9",
"assets/assets/imgs/posters_pages/posters_loja_cmb/1.png": "01b8c226b8f2054e68fd273e61830f7f",
"assets/assets/imgs/posters_pages/posters_loja_cmb/2.png": "4d7963a567b43d263a0b9681fe7e9cf8",
"assets/assets/imgs/posters_pages/posters_loja_cmb/3.png": "1a9fac7348e8faa9cc0498404add9725",
"assets/assets/imgs/posters_pages/posters_loja_cmb/4.png": "24be9deb3878fad70357448628b04bae",
"assets/assets/imgs/posters_pages/posters_loja_cmb/5.png": "122b20f3a7f8bd51c952348ce79f5b94",
"assets/assets/imgs/posters_pages/posters_market_multi/1.png": "eb9c5bd49c8ef22d0b57facb7204638a",
"assets/assets/imgs/posters_pages/posters_market_multi/10.png": "6c938c8bb544ff9e0df06d0998ca2b18",
"assets/assets/imgs/posters_pages/posters_market_multi/2.png": "eb38934cff07864cf331e690490a99e3",
"assets/assets/imgs/posters_pages/posters_market_multi/3.png": "b12a4a7031a36b01dada9f00ac0cf483",
"assets/assets/imgs/posters_pages/posters_market_multi/4.png": "9387a865d01c2e69c8f7a931b8d9c93e",
"assets/assets/imgs/posters_pages/posters_market_multi/5.png": "38a33e0cfb686a05385f1f54a55c6725",
"assets/assets/imgs/posters_pages/posters_market_multi/6.png": "a0cc6a5e90d6d70bf10e5ba8bff4f387",
"assets/assets/imgs/posters_pages/posters_market_multi/7.png": "d3cae33b35fb0ba0401db7807b580f44",
"assets/assets/imgs/posters_pages/posters_market_multi/8.png": "d3deba9c6a536b1daf9792181e813935",
"assets/assets/imgs/posters_pages/posters_market_multi/9.png": "e8393dcd9e5c4922ddd9b06049d0d9c2",
"assets/assets/imgs/posters_pages/posters_meals/1.png": "148cba769424e7cec5eef90b9f52b30f",
"assets/assets/imgs/posters_pages/posters_meals/10.png": "cc587cdcacbc41baf73fb6507feeef9c",
"assets/assets/imgs/posters_pages/posters_meals/11.png": "46eeca3041f8dd1f6f445812940f1243",
"assets/assets/imgs/posters_pages/posters_meals/12.png": "82f5f1bbd47fbdc3ea830eb83506a609",
"assets/assets/imgs/posters_pages/posters_meals/13.png": "a16c89422ed76a7801e20bee6c2bc06f",
"assets/assets/imgs/posters_pages/posters_meals/14.png": "38a6b704fb2ac4359d452b13caf630ae",
"assets/assets/imgs/posters_pages/posters_meals/15.png": "aa90a5adebfb370273a93c1bcd129787",
"assets/assets/imgs/posters_pages/posters_meals/2.png": "ebfde7cce73a45e082acab04a11be157",
"assets/assets/imgs/posters_pages/posters_meals/3.png": "532ba769b9529abe0cb0aeda040e7f10",
"assets/assets/imgs/posters_pages/posters_meals/4.png": "6bdaa4d549cb629c7cb6f5947c783cd1",
"assets/assets/imgs/posters_pages/posters_meals/5.png": "38717b1b4f6f91f0e980dba140495264",
"assets/assets/imgs/posters_pages/posters_meals/6.png": "321a96412dfae5ac58f103621ac60829",
"assets/assets/imgs/posters_pages/posters_meals/7.png": "2f0a014cc193a56101788a0bd76f7008",
"assets/assets/imgs/posters_pages/posters_meals/8.png": "0a60b4781fddc0904e93dfb5c337c1a5",
"assets/assets/imgs/posters_pages/posters_meals/9.png": "269ca371210b1e5c4c02696883b53483",
"assets/assets/imgs/posters_pages/posters_money/1.png": "243b02c59b2cfc1d44eb7975b76e5c5f",
"assets/assets/imgs/posters_pages/posters_money/2.png": "c944b8f194f7e933c360a0c62a801192",
"assets/assets/imgs/posters_pages/posters_money/3.png": "7c30a4293e57619959f57e729a6ecf4b",
"assets/assets/imgs/posters_pages/posters_money/4.png": "97b805dea903d7875f8618a2128657ea",
"assets/assets/imgs/posters_pages/posters_money/5.png": "f7167c794704a5a1d6ff01ffc3d21f8d",
"assets/assets/imgs/posters_pages/posters_money/6.png": "8ab0b5679908544f569f25f42d1ca581",
"assets/assets/imgs/posters_pages/posters_navecosmic/1.png": "2e08135609b24bee942d2aedd6d534a0",
"assets/assets/imgs/posters_pages/posters_navecosmic/2.png": "ebf103586fc437c7b2181678f6f591f4",
"assets/assets/imgs/posters_pages/posters_navecosmic/3.png": "1dfcc52c1f6933b456686e8bc1ef05d4",
"assets/assets/imgs/posters_pages/posters_noteapp/1.png": "6a97685520907d399e50615937db305e",
"assets/assets/imgs/posters_pages/posters_noteapp/2.png": "10c7112514de636e3292bd4aadf05629",
"assets/assets/imgs/posters_pages/posters_noteapp/3.png": "d160a6a6849e734a561118d0c109bcbe",
"assets/assets/imgs/posters_pages/posters_noteapp/4.png": "f0fa817ca5270c8fafc963b0ddba8057",
"assets/assets/imgs/posters_pages/posters_noteapp/5.png": "61f0cf35c8aa68398f8f621d0fe1920b",
"assets/assets/imgs/posters_pages/posters_petmania/1.png": "f3fc84b13d9763d1b238fe96fb257210",
"assets/assets/imgs/posters_pages/posters_petmania/2.png": "cd418e64bb6afc9b04b899bf2d04995a",
"assets/assets/imgs/posters_pages/posters_petmania/3.png": "2a3075bab72f04c8bc82d688c55a3ea5",
"assets/assets/imgs/posters_pages/posters_petmania/4.png": "12459c36f9517747315d910d89fbefbd",
"assets/assets/imgs/posters_pages/posters_projeto_ecoar/1.png": "3223a3e7390886f07037cc9157933ee8",
"assets/assets/imgs/posters_pages/posters_projeto_ecoar/2.png": "8fbb92cdf84a9761e78fe9c6b019ffd9",
"assets/assets/imgs/posters_pages/posters_projeto_ecoar/3.png": "8aaa03c818238cddc655c3e236dd5335",
"assets/assets/imgs/posters_pages/posters_projeto_ecoar/4.png": "06c46450d2f6ba75292080b19cd97436",
"assets/assets/imgs/posters_pages/posters_projeto_ecoar/5.png": "d1ba78ac491badc969ee0a449526429d",
"assets/assets/imgs/posters_pages/posters_projeto_ecoar/6.png": "980439924a351b0406d83f0cc12abdd7",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/1.png": "5a74b50ce13fdc0d53d681b276272bb1",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/10.png": "842016c25e61d6a7fb847db3be9162ad",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/2.png": "63d33d025be84395ee6e39657858b481",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/3.png": "7f30d36638193339379cd83faf42aa64",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/4.png": "33b499f00f4b4dd3d15369470e92f055",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/5.png": "f877dfc84ff0b252a490cda9b86b9944",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/6.png": "e65550dedd6ba17ba61e955b825cee4e",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/7.png": "a27e7ae5e7af468f85e6e41c0bb9de00",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/8.png": "ab107835efdd650a654dc355de818683",
"assets/assets/imgs/posters_pages/posters_quiz_biblico/9.png": "11279ece0703214a5f5a12cbfb80ca20",
"assets/assets/imgs/posters_pages/posters_snakegame/1.png": "a73242b659ad421ca52ac26d3bdcccd0",
"assets/assets/imgs/posters_pages/posters_snakegame/2.png": "31401333f7498a7ceb0b1facb835fe3c",
"assets/assets/imgs/posters_pages/posters_tetrisgame/1.png": "6cf16dfae29d74535d28d1077e02e838",
"assets/assets/imgs/posters_pages/posters_tetrisgame/2.png": "c82254224b98c2dad41a38ad6360364c",
"assets/assets/imgs/posters_pages/posters_tetrisgame/3.png": "000108b20fab7af04647398de79d0c03",
"assets/assets/imgs/posters_pages/posters_violaotablatura/1.png": "458bfb03671843fbbe544069a4818dfe",
"assets/assets/imgs/posters_pages/posters_weatherapp/1.png": "1b5a567ec2e42b9793f3e19619c7e950",
"assets/assets/imgs/posters_pages/posters_weatherapp/2.png": "a44f7c924f8c65630066baa79ee10118",
"assets/assets/imgs/posters_pages/posters_weatherapp/3.png": "740e6d452945e689eb2eb874249d1e2a",
"assets/assets/imgs/posters_pages/posters_weatherapp/4.png": "ff9ab7c9d5cf5c76e73d0f387364947e",
"assets/assets/imgs/posters_pages/posters_weatherapp/5.png": "c771dde21babe7b69318fad133a0d7e8",
"assets/assets/imgs/posters_pages/posters_worshipradio/1.png": "e756ed4e6ee4be74aa2b588148ad3d5b",
"assets/assets/imgs/posters_pages/posters_worshipradio/2.png": "9e6af94d400ac8bdb28889132c0668e1",
"assets/assets/imgs/projeto_ecoar_logo.png": "cd4e4d35d6b6dfc75ece24429510bd5a",
"assets/assets/imgs/quiz_biblico_logo.png": "1714c94c614432987dea13b85b6d5922",
"assets/assets/imgs/site_projeto_ecoar.png": "2498b13d404b95a59e2326a4957167f1",
"assets/assets/imgs/snakegame.png": "8ad3cdf56a646e57640c4682f31c30c5",
"assets/assets/imgs/tetris.png": "3a363434a41f5284bc1ecc594833e23d",
"assets/assets/imgs/viol%25C3%25A3otablatura.png": "dd2d31158fd1d236139acf65739b6e5b",
"assets/assets/imgs/weatherapp.png": "b36a067b54c84d5151a41c11fc4f8488",
"assets/assets/imgs/web.png": "d2cc6ab6eb23a87df2ca5ea5448fc566",
"assets/assets/imgs/worshipradio.png": "9728014ae9d1f16d1bc08a87fb445675",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/fonts/MaterialIcons-Regular.otf": "8acb59ae8a9cb978d17c90b65b5e03a6",
"assets/NOTICES": "98d9ea8aa9ce1fa918fd72654f3638b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "a387fac701caea4058b4600c64a111d9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "988fe36906c75e240f4b1f33e77352b0",
"icons/Icon-192.png": "86f1fcd7bc9089efa3c434981a4886d7",
"icons/Icon-512.png": "c2339f9fee5824b2b11d9561b3d00a89",
"icons/Icon-maskable-192.png": "86f1fcd7bc9089efa3c434981a4886d7",
"icons/Icon-maskable-512.png": "c2339f9fee5824b2b11d9561b3d00a89",
"index.html": "21708721142d08e43a990af7273248e0",
"/": "21708721142d08e43a990af7273248e0",
"main.dart.js": "fef6df287178795d032caa7b04b0ae69",
"manifest.json": "f3bebc325b056a9df01d7e7769e67581",
"version.json": "1b83942212e76150b82a3230de6d29e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
