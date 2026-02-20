'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6b3f43b84f4814362e923065eb8bf6b1",
"assets/AssetManifest.bin.json": "c87e26b97c40836f67849d92f68cc65a",
"assets/AssetManifest.json": "cf1b742200e8953e3dce31e34c191498",
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
"assets/assets/imgs/banners/1.png": "cadb03afef618d4f69d58629da7b9cea",
"assets/assets/imgs/banners/2.png": "f394aba4e5ee8f78a80879bb78cfd921",
"assets/assets/imgs/banners/3.png": "bed1c7061b86bb1007a541e1839a8d15",
"assets/assets/imgs/banners/4.png": "a352be2ad20d5f9ed585fa432db79b2a",
"assets/assets/imgs/banners/5.png": "e7cec381b9dc7f08f0e9706c12e560b1",
"assets/assets/imgs/banners/6.png": "6f947bea8a338716639bbfa0318520d4",
"assets/assets/imgs/banners/7.png": "fcfa7628204946bacfdb319335ff24d3",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/campo_minado_logo.png": "1ff585bef07d2602e75bb647462fb19a",
"assets/assets/imgs/celular1.png": "b8cabc5e0e8fd67b0f09c1c6a48a553c",
"assets/assets/imgs/celular2.png": "11842c567158b38e0c5d492c4699fc34",
"assets/assets/imgs/celular3.png": "cfc777039c18c87710e85f57eb46aa73",
"assets/assets/imgs/celular4.png": "cf60251668ca7305126193ea62fec122",
"assets/assets/imgs/celular5.png": "6e7753d582d652c25de6cef559dca1b6",
"assets/assets/imgs/celular6.png": "d2a93a92b0785ce6735785860234dbc1",
"assets/assets/imgs/celular7.png": "6434776d1e8f1181aa8b33e0ecfc4889",
"assets/assets/imgs/dizimos_ofertas_logo.png": "d8bbe739489e567637652c14b2665a11",
"assets/assets/imgs/flix_believer_logo.png": "b3c43b3ff7bbda90bff04e88b9a14954",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/1.png": "8be9aeb129ef10e02a7bf7afdadbd43a",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/2.png": "f1a17fbc58a731d39edd6df02240f3e8",
"assets/assets/imgs/imgs_pages/campo_minado/img_campo_minado/3.png": "095fde3b5b0efbc0de59547aab3994ba",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/1.png": "da499be50559e01d6793b8582f762876",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/2.png": "cd9ceae0831ee54c5c092ee6032fe397",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/3.png": "8c0d649987edcdaae204376d3f6ffc64",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/4.png": "a9565d32a451985abbbb0d4626b9b76e",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/5.png": "a60a737454cb94ed7bd5c0b8ff564207",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/6.png": "1558cd22ec3902b879a14ca17fcca663",
"assets/assets/imgs/imgs_pages/dizimos_ofertas/img_dizimos_ofertas/7.png": "a1b2bd806083210cd81950cb5b337740",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/1.png": "fa3adc60feedc4b152e12d1e1bf3a495",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/2.png": "f71879692ea45b973b220c5c076f0cff",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/3.png": "fb8b12abb16e50722008918b7dfbbfb7",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/4.png": "3efb2f5e34854f9f56b17b2385112aa1",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/5.png": "a3bbb9bbbcc88edcd0232e8230390478",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/6.png": "b2b575819a3940f3b057584c80dec489",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/7.png": "30e3ea2a68d142918b13f204317b8198",
"assets/assets/imgs/imgs_pages/flix_believer/img_flix_believer/8.png": "50bca9dcf11d4595370ac9be3c5a131a",
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
"assets/assets/imgs/IMG_0107.jpg": "815acd4de17e3f053e4518d8e884c286",
"assets/assets/imgs/logo1.png": "267c3166e02c02d15491f8eac020c1ff",
"assets/assets/imgs/market_multi_logo.png": "313753ec875f7bd2eb3ea1321209b563",
"assets/assets/imgs/meals_logo.png": "d57d900a4104d6fcaef51ed82ed31cfc",
"assets/assets/imgs/posters_pages/posters_campo_minado/1.png": "36dfcdcf612ae9b1945cda509dad35dd",
"assets/assets/imgs/posters_pages/posters_campo_minado/2.png": "31641eab018d29326161f596d2724ea6",
"assets/assets/imgs/posters_pages/posters_campo_minado/3.png": "579a6151c3a873f7bcfd137b391edb25",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/1.png": "79f304a940668e031d9c8e216edc0a2f",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/2.png": "debebeae3b97c8a1624b249dc313a899",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/3.png": "831077902795a186e38aa4f4e2421912",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/4.png": "de14419f3005e364a2f43355029040cd",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/5.png": "45094dd37c1144741b1f27e4e0a04827",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/6.png": "f0906f88b5a980025513c7f609ed8ebe",
"assets/assets/imgs/posters_pages/posters_dizimos_ofertas/7.png": "81b00af1ddd5aa0bf892bb7658f4cfbf",
"assets/assets/imgs/posters_pages/posters_flix_believer/1.png": "ad2c461b873ee971215dd53f08420306",
"assets/assets/imgs/posters_pages/posters_flix_believer/2.png": "860e1633434bef651020d5c7cf759bf5",
"assets/assets/imgs/posters_pages/posters_flix_believer/3.png": "f4c00144532dd4e6537e64c3273f7fb7",
"assets/assets/imgs/posters_pages/posters_flix_believer/4.png": "2f2ffa46117258df4ca61e1110fa90cd",
"assets/assets/imgs/posters_pages/posters_flix_believer/5.png": "cee450237c96ce991527fe4ca238d34c",
"assets/assets/imgs/posters_pages/posters_flix_believer/6.png": "9da66999ea55f28e4681a228b0936c82",
"assets/assets/imgs/posters_pages/posters_flix_believer/7.png": "d31e719ab26f09689c3ce430aff96a14",
"assets/assets/imgs/posters_pages/posters_flix_believer/8.png": "88d18539f882fe2ab6f71d1894368dbb",
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
"assets/assets/imgs/projeto_ecoar_logo.png": "cd4e4d35d6b6dfc75ece24429510bd5a",
"assets/assets/imgs/quiz_biblico_logo.png": "1714c94c614432987dea13b85b6d5922",
"assets/assets/imgs/site_projeto_ecoar.png": "2498b13d404b95a59e2326a4957167f1",
"assets/assets/imgs/web.png": "d2cc6ab6eb23a87df2ca5ea5448fc566",
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
"flutter_bootstrap.js": "5c90244553fc70e12a1a4484897f47d4",
"icons/Icon-192.png": "86f1fcd7bc9089efa3c434981a4886d7",
"icons/Icon-512.png": "c2339f9fee5824b2b11d9561b3d00a89",
"icons/Icon-maskable-192.png": "86f1fcd7bc9089efa3c434981a4886d7",
"icons/Icon-maskable-512.png": "c2339f9fee5824b2b11d9561b3d00a89",
"index.html": "bd399e02ca5ea0db87e731e9e7cb938d",
"/": "bd399e02ca5ea0db87e731e9e7cb938d",
"main.dart.js": "ddad0acd48d953a34bcacc36e5d84ecc",
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
