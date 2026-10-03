// Translations: en | fr | es | de | pt | ar | zh
const L=['en','fr','es','de','pt','ar','zh'],NM=['English','Français','Español','Deutsch','Português','العربية','中文'],SH=['EN','FR','ES','DE','PT','ع','中'];
const T={
home:"Home|Accueil|Inicio|Start|Início|الرئيسية|首页",
track:"Track Shipment|Suivre un colis|Rastrear envío|Sendung verfolgen|Rastrear encomenda|تتبع الشحنة|查询包裹",
svc:"Services|Services|Servicios|Leistungen|Serviços|الخدمات|服务",
about:"About|À propos|Nosotros|Über uns|Sobre|من نحن|关于我们",
contact:"Contact|Contact|Contacto|Kontakt|Contato|اتصل بنا|联系我们",
tag:"FAST • SECURE • RELIABLE|RAPIDE • SÛR • FIABLE|RÁPIDO • SEGURO • CONFIABLE|SCHNELL • SICHER • ZUVERLÄSSIG|RÁPIDO • SEGURO • CONFIÁVEL|سريع • آمن • موثوق|快速 • 安全 • 可靠",
h1:"Track your shipment with ease.|Suivez votre colis en toute simplicité.|Rastrea tu envío con facilidad.|Verfolgen Sie Ihre Sendung ganz einfach.|Rastreie sua encomenda com facilidade.|تتبّع شحنتك بكل سهولة.|轻松追踪您的包裹。",
sub:"Enter your tracking number to see the current location and status of your parcel.|Saisissez votre numéro de suivi pour voir la position et le statut de votre colis.|Introduce tu número de seguimiento para ver la ubicación y el estado de tu paquete.|Geben Sie Ihre Sendungsnummer ein, um Standort und Status Ihres Pakets zu sehen.|Digite seu código de rastreio para ver a localização e o status da sua encomenda.|أدخل رقم التتبع لمعرفة موقع طردك وحالته الحالية.|输入运单号，查看包裹当前位置与状态。",
ph:"Enter your tracking number|Saisissez votre numéro de suivi|Introduce tu número de seguimiento|Sendungsnummer eingeben|Digite seu código de rastreio|أدخل رقم التتبع|输入运单号",
busy:"Tracking…|Recherche…|Buscando…|Suche läuft…|Buscando…|جارٍ التتبع…|查询中…",
try:"Try|Essayez|Pruebe|Beispiel|Teste|جرّب|试试",
th:"Track your shipment|Suivez votre colis|Rastrea tu envío|Sendung verfolgen|Rastreie sua encomenda|تتبّع شحنتك|追踪您的包裹",
empty:"Enter your tracking number above to see your shipment information.|Saisissez votre numéro de suivi ci-dessus pour voir les informations de votre colis.|Introduce arriba tu número de seguimiento para ver la información de tu envío.|Geben Sie oben Ihre Sendungsnummer ein, um Informationen zu sehen.|Digite acima seu código de rastreio para ver as informações da encomenda.|أدخل رقم التتبع أعلاه لعرض معلومات شحنتك.|请在上方输入运单号查看包裹信息。",
ship:"Shipment|Colis|Envío|Sendung|Encomenda|الشحنة|包裹",
cur:"Current status|Statut actuel|Estado actual|Aktueller Status|Status atual|الحالة الحالية|当前状态",
loc:"Current location|Position actuelle|Ubicación actual|Aktueller Standort|Localização atual|الموقع الحالي|当前位置",
eta:"Estimated delivery|Livraison estimée|Entrega estimada|Voraussichtliche Zustellung|Entrega estimada|موعد التسليم المتوقع|预计送达",
from:"From|De|Origen|Von|Origem|من|寄件地",
to:"To|À|Destino|Nach|Destino|إلى|收件地",
det:"Shipment details|Détails de l'envoi|Detalles del envío|Sendungsdetails|Detalhes da encomenda|تفاصيل الشحنة|包裹详情",
hist:"Tracking history|Historique de suivi|Historial de seguimiento|Sendungsverlauf|Histórico de rastreio|سجل التتبع|物流轨迹",
id:"Tracking ID|N° de suivi|N.º de seguimiento|Sendungsnummer|Código de rastreio|رقم التتبع|运单号",
pkg:"Package|Colis|Paquete|Paket|Pacote|الطرد|包裹类型",
pkgv:"Standard Parcel|Colis standard|Paquete estándar|Standardpaket|Encomenda padrão|طرد عادي|标准包裹",
s_pend:"Pending|En attente|Pendiente|Ausstehend|Pendente|قيد الانتظار|待处理",
s_created:"Shipment created|Envoi créé|Envío creado|Sendung angelegt|Encomenda criada|تم إنشاء الشحنة|已创建运单",
s_picked:"Picked up|Pris en charge|Recogido|Abgeholt|Coletado|تم الاستلام|已揽收",
s_dep:"Departed facility|A quitté le centre|Salió del centro|Hat Zentrum verlassen|Saiu da unidade|غادرت المركز|已离开分拨中心",
s_fac:"At facility|Au centre de tri|En el centro|Im Zentrum|Na unidade|في المركز|在分拨中心",
s_transit:"In transit|En transit|En tránsito|Unterwegs|Em trânsito|قيد النقل|运输中",
s_out:"Out for delivery|En cours de livraison|En reparto|In Zustellung|Saiu para entrega|خرجت للتسليم|派送中",
s_del:"Delivered|Livré|Entregado|Zugestellt|Entregue|تم التسليم|已送达",
s_hold:"On hold|En attente|En pausa|Angehalten|Em espera|متوقفة مؤقتًا|已暂停",
d_hold:"Your shipment is temporarily on hold. Details below.|Votre colis est temporairement en attente. Détails ci-dessous.|Tu envío está en pausa temporalmente. Detalles abajo.|Ihre Sendung ist vorübergehend angehalten. Details unten.|Sua encomenda está temporariamente em espera. Detalhes abaixo.|شحنتك متوقفة مؤقتًا. التفاصيل أدناه.|您的包裹暂时被搁置，详情见下方。",
hold_h:"Message from Nux Express|Message de Nux Express|Mensaje de Nux Express|Nachricht von Nux Express|Mensagem da Nux Express|رسالة من Nux Express|来自 Nux Express 的消息",
hold_since:"On hold since|En attente depuis|En pausa desde|Angehalten seit|Em espera desde|متوقفة منذ|暂停时间",
h_customs:"Held at customs|Retenu en douane|Retenido en aduana|Beim Zoll festgehalten|Retido na alfândega|محتجزة في الجمارك|海关扣留",
h_immigration:"Immigration review|Contrôle d'immigration|Revisión de inmigración|Einwanderungsprüfung|Análise de imigração|مراجعة الهجرة|移民审查",
h_weather:"Weather delay|Retard météo|Retraso por clima|Wetterverzögerung|Atraso por clima|تأخير بسبب الطقس|天气延误",
h_docs:"Documents required|Documents requis|Documentos requeridos|Dokumente erforderlich|Documentos necessários|مستندات مطلوبة|需要文件",
h_address:"Address issue|Problème d'adresse|Problema de dirección|Adressproblem|Problema de endereço|مشكلة في العنوان|地址问题",
h_other:"Delayed|Retardé|Retrasado|Verzögert|Atrasado|متأخرة|延误",
s_ex:"Exception|Incident|Incidencia|Problem|Ocorrência|استثناء|异常",
d_proc:"Your package is being processed.|Votre colis est en cours de traitement.|Tu paquete se está procesando.|Ihr Paket wird bearbeitet.|Sua encomenda está sendo processada.|يجري تجهيز طردك.|您的包裹正在处理中。",
d_transit:"Your package is on its way to the destination.|Votre colis est en route vers sa destination.|Tu paquete va de camino a su destino.|Ihr Paket ist auf dem Weg zum Ziel.|Sua encomenda está a caminho do destino.|طردك في الطريق إلى وجهته.|您的包裹正在运往目的地。",
d_out:"Your courier is bringing it to you today.|Le livreur vous l'apporte aujourd'hui.|El repartidor lo lleva hoy a tu puerta.|Der Zusteller liefert heute an Sie.|O entregador levará até você hoje.|المندوب في طريقه إليك اليوم.|快递员今天将为您送达。",
d_del:"Your package was delivered safely.|Votre colis a été livré en toute sécurité.|Tu paquete se entregó correctamente.|Ihr Paket wurde sicher zugestellt.|Sua encomenda foi entregue com segurança.|تم تسليم طردك بأمان.|您的包裹已安全送达。",
d_ex:"There is a delivery problem. Contact support.|Un problème de livraison est survenu. Contactez le support.|Hubo un problema con la entrega. Contacta con soporte.|Es gab ein Zustellproblem. Kontaktieren Sie den Support.|Houve um problema na entrega. Fale com o suporte.|حدثت مشكلة في التسليم. تواصل مع الدعم.|配送出现问题，请联系客服。",
nf:"Tracking number not found|Numéro de suivi introuvable|Número de seguimiento no encontrado|Sendungsnummer nicht gefunden|Código de rastreio não encontrado|لم يتم العثور على رقم التتبع|未找到该运单号",
nfd:"We couldn't find a shipment for this number. Check it and try again.|Aucun envoi ne correspond à ce numéro. Vérifiez-le et réessayez.|No encontramos un envío con este número. Revísalo e inténtalo de nuevo.|Zu dieser Nummer gibt es keine Sendung. Prüfen Sie sie und versuchen Sie es erneut.|Não encontramos uma encomenda com este código. Verifique e tente novamente.|لم نجد شحنة بهذا الرقم. تحقق منه وحاول مرة أخرى.|未找到对应包裹，请核对运单号后重试。",
retry:"Try again|Réessayer|Intentar de nuevo|Erneut versuchen|Tentar novamente|حاول مرة أخرى|重试",
svc_h:"Our services|Nos services|Nuestros servicios|Unsere Leistungen|Nossos serviços|خدماتنا|我们的服务",
sv1:"Standard delivery|Livraison standard|Entrega estándar|Standardversand|Entrega padrão|توصيل عادي|标准配送",
sv1d:"Reliable delivery for everyday shipments.|Une livraison fiable pour vos envois courants.|Entrega fiable para envíos cotidianos.|Zuverlässiger Versand für den Alltag.|Entrega confiável para o dia a dia.|توصيل موثوق للشحنات اليومية.|日常包裹，稳妥送达。",
sv2:"Express delivery|Livraison express|Entrega exprés|Expressversand|Entrega expressa|توصيل سريع|快速配送",
sv2d:"Faster delivery for urgent parcels.|Plus rapide pour les colis urgents.|Más rápido para paquetes urgentes.|Schneller für eilige Pakete.|Mais rápido para encomendas urgentes.|توصيل أسرع للطرود العاجلة.|加急包裹，更快送达。",
sv3:"International shipping|Envoi international|Envío internacional|Internationaler Versand|Envio internacional|الشحن الدولي|国际快递",
sv3d:"Ship parcels across borders.|Expédiez vos colis à l'étranger.|Envía paquetes a otros países.|Pakete grenzüberschreitend versenden.|Envie encomendas para outros países.|أرسل طرودك عبر الحدود.|包裹可寄往海外。",
sv4:"Business logistics|Logistique d'entreprise|Logística empresarial|Geschäftslogistik|Logística empresarial|خدمات الأعمال اللوجستية|企业物流",
sv4d:"Solutions for businesses and large shipments.|Des solutions pour entreprises et gros volumes.|Soluciones para empresas y grandes envíos.|Lösungen für Unternehmen und Großsendungen.|Soluções para empresas e grandes volumes.|حلول للشركات والشحنات الكبيرة.|为企业与大宗货运提供方案。",
how_h:"How it works|Comment ça marche|Cómo funciona|So funktioniert's|Como funciona|كيف يعمل|使用流程",
b1:"Book|Réservez|Reserva|Buchen|Reserve|احجز|寄件",
b1d:"Send your package with us.|Confiez-nous votre colis.|Envía tu paquete con nosotros.|Senden Sie Ihr Paket mit uns.|Envie sua encomenda conosco.|أرسل طردك معنا.|把包裹交给我们。",
b2:"Track|Suivez|Rastrea|Verfolgen|Rastreie|تتبّع|追踪",
b2d:"Use your tracking number to follow your shipment.|Suivez votre envoi avec votre numéro de suivi.|Sigue tu envío con el número de seguimiento.|Verfolgen Sie Ihre Sendung mit der Sendungsnummer.|Acompanhe com o código de rastreio.|تابع شحنتك برقم التتبع.|用运单号随时查看进度。",
b3:"Receive|Recevez|Recibe|Empfangen|Receba|استلم|签收",
b3d:"Get your package delivered safely.|Recevez votre colis en toute sécurité.|Recibe tu paquete sin problemas.|Erhalten Sie Ihr Paket sicher.|Receba sua encomenda com segurança.|استلم طردك بأمان.|安全收到您的包裹。",
tr1:"Fast delivery|Livraison rapide|Entrega rápida|Schnelle Zustellung|Entrega rápida|توصيل سريع|快速送达",
tr2:"Secure handling|Manipulation sécurisée|Manejo seguro|Sichere Handhabung|Manuseio seguro|مناولة آمنة|安全处理",
tr3:"Real-time tracking|Suivi en temps réel|Seguimiento en tiempo real|Live-Verfolgung|Rastreio em tempo real|تتبع لحظي|实时追踪",
about_h:"We make shipping simple, reliable, and transparent.|Nous rendons l'expédition simple, fiable et transparente.|Hacemos el envío simple, fiable y transparente.|Wir machen Versand einfach, zuverlässig und transparent.|Tornamos o envio simples, confiável e transparente.|نجعل الشحن بسيطًا وموثوقًا وشفافًا.|让寄递简单、可靠、透明。",
about_d:"Across town or across borders, you stay informed at every step.|En ville ou à l'étranger, vous restez informé à chaque étape.|En tu ciudad o al otro lado del mundo, sigues informado en cada paso.|Durch die Stadt oder über Grenzen: Sie bleiben bei jedem Schritt informiert.|Na cidade ou além das fronteiras, você acompanha cada etapa.|داخل المدينة أو عبر الحدود، تبقى على اطلاع في كل خطوة.|无论同城还是跨境，每一步进度都清晰可见。",
ct_d:"Have a question about your shipment?|Une question sur votre envoi ?|¿Tienes dudas sobre tu envío?|Fragen zu Ihrer Sendung?|Dúvidas sobre sua encomenda?|هل لديك سؤال عن شحنتك؟|对包裹有疑问？",
em:"Email|E-mail|Correo|E-Mail|E-mail|البريد الإلكتروني|邮箱",
tel:"Phone|Téléphone|Teléfono|Telefon|Telefone|الهاتف|电话",
ad:"Address|Adresse|Dirección|Adresse|Endereço|العنوان|地址",
quick:"Quick links|Liens rapides|Enlaces rápidos|Schnellzugriff|Links rápidos|روابط سريعة|快速链接",
langs:"Languages|Langues|Idiomas|Sprachen|Idiomas|اللغات|语言",
sup:"Support|Assistance|Soporte|Support|Suporte|الدعم|支持",
help:"Help Center|Centre d'aide|Centro de ayuda|Hilfecenter|Central de ajuda|مركز المساعدة|帮助中心",
rights:"All rights reserved.|Tous droits réservés.|Todos los derechos reservados.|Alle Rechte vorbehalten.|Todos os direitos reservados.|جميع الحقوق محفوظة.|版权所有。",
svc_d:"From a single envelope to a full pallet, pick the speed and reach that fits.|D'une simple enveloppe à une palette complète, choisissez la vitesse et la portée qui vous conviennent.|De un sobre a un palé completo, elige la velocidad y el alcance que necesitas.|Vom Brief bis zur Palette: Wählen Sie Tempo und Reichweite, die zu Ihnen passen.|De um envelope a um palete inteiro, escolha a velocidade e o alcance ideais.|من مظروف واحد إلى منصّة كاملة، اختر السرعة والنطاق المناسبين.|从一封文件到整托盘货物，按需选择时效与范围。",
tr1d:"From pickup to doorstep, with no needless stops.|De l'enlèvement à la porte, sans détour inutile.|De la recogida a tu puerta, sin paradas innecesarias.|Von der Abholung bis zur Haustür, ohne unnötige Stopps.|Da coleta até a porta, sem paradas desnecessárias.|من الاستلام حتى باب منزلك دون توقفات غير ضرورية.|从取件到送上门，不多一次中转。",
tr2d:"Every parcel is scanned and sealed at each handover.|Chaque colis est scanné et scellé à chaque transfert.|Cada paquete se escanea y sella en cada traspaso.|Jedes Paket wird bei jeder Übergabe gescannt und versiegelt.|Cada encomenda é escaneada e lacrada a cada transferência.|يُمسح كل طرد ويُختم عند كل عملية تسليم.|每次交接都会扫描并封签。",
tr3d:"Updates appear the moment your parcel moves.|Les mises à jour s'affichent dès que votre colis bouge.|Las actualizaciones aparecen en cuanto tu paquete se mueve.|Updates erscheinen, sobald sich Ihr Paket bewegt.|As atualizações aparecem assim que sua encomenda se move.|تظهر التحديثات فور تحرك طردك.|包裹一有动态，信息立即更新。",
tr4d:"One tracking number, door to door across borders.|Un seul numéro de suivi, de porte à porte, au-delà des frontières.|Un solo número de seguimiento, de puerta a puerta entre países.|Eine Sendungsnummer, von Haus zu Haus über Grenzen hinweg.|Um único código, de porta a porta entre países.|رقم تتبع واحد من الباب إلى الباب عبر الحدود.|一个运单号，跨境门到门。",
about_d2:"Every parcel is scanned at each handover, so your timeline updates as it moves. Our couriers are trained in careful handling, and support replies in your language.|Chaque colis est scanné à chaque transfert : votre suivi se met à jour en direct. Nos livreurs sont formés à la manipulation soigneuse et l'assistance répond dans votre langue.|Cada paquete se escanea en cada traspaso, así tu seguimiento se actualiza al instante. Nuestros repartidores están formados en manejo cuidadoso y soporte responde en tu idioma.|Jedes Paket wird bei jeder Übergabe gescannt, sodass Ihr Verlauf live aktualisiert wird. Unsere Zusteller sind für sorgsames Handling geschult, der Support antwortet in Ihrer Sprache.|Cada encomenda é escaneada a cada transferência, e seu histórico atualiza em tempo real. Nossos entregadores são treinados para manuseio cuidadoso e o suporte responde no seu idioma.|يُمسح كل طرد عند كل عملية تسليم فيتحدّث سجل التتبع فورًا. مندوبونا مدرّبون على التعامل الحذر مع الطرود، ويردّ الدعم بلغتك.|每次交接都会扫描包裹，物流轨迹实时更新。快递员经过规范操作培训，客服可用您的语言回复。",
cta_h:"Ready to follow your parcel?|Prêt à suivre votre colis ?|¿Listo para seguir tu paquete?|Bereit, Ihr Paket zu verfolgen?|Pronto para acompanhar sua encomenda?|هل أنت مستعد لتتبع طردك؟|准备好追踪包裹了吗？",
cta_d:"Enter your tracking number and see where it is right now.|Saisissez votre numéro de suivi et voyez où il se trouve en ce moment.|Introduce tu número de seguimiento y mira dónde está ahora mismo.|Geben Sie Ihre Sendungsnummer ein und sehen Sie, wo sich das Paket gerade befindet.|Digite seu código e veja onde ela está agora.|أدخل رقم التتبع لترى أين طردك الآن.|输入运单号，立即查看包裹位置。",
ctry_h:"Countries we ship to|Pays où nous livrons|Países a los que enviamos|Länder, in die wir liefern|Países para onde enviamos|الدول التي نشحن إليها|我们送达的国家",
ctry_d:"Parcels from our network have reached these destinations.|Les colis de notre réseau sont arrivés dans ces destinations.|Los paquetes de nuestra red han llegado a estos destinos.|Pakete aus unserem Netzwerk haben diese Ziele erreicht.|Encomendas da nossa rede já chegaram a estes destinos.|وصلت طرود شبكتنا إلى هذه الوجهات.|我们的网络已将包裹送达以下地区。",
recent:"Recent searches|Recherches récentes|Búsquedas recientes|Letzte Suchen|Buscas recentes|عمليات البحث الأخيرة|最近查询",
clear:"Clear|Effacer|Borrar|Löschen|Limpar|مسح|清除",
copy:"Copy tracking link|Copier le lien de suivi|Copiar enlace de seguimiento|Tracking-Link kopieren|Copiar link de rastreio|نسخ رابط التتبع|复制追踪链接",
copied:"Copied|Copié|Copiado|Kopiert|Copiado|تم النسخ|已复制",
notify_h:"Get delivery updates in your language|Recevez les mises à jour dans votre langue|Recibe avisos de entrega en tu idioma|Zustell-Updates in Ihrer Sprache|Receba atualizações de entrega no seu idioma|احصل على تحديثات التسليم بلغتك|用您的语言接收配送通知",
notify_b:"Notify me|Me prévenir|Avisarme|Benachrichtigen|Avisar-me|أبلغني|通知我",
notify_ok:"Done. We'll email you at every status change.|C'est fait. Nous vous écrirons à chaque changement de statut.|Listo. Te escribiremos en cada cambio de estado.|Erledigt. Wir mailen Ihnen bei jeder Statusänderung.|Pronto. Enviaremos e-mail a cada mudança de status.|تم. سنراسلك عند كل تغيير في الحالة.|已设置，每次状态变化都会发邮件给您。",
q_h:"Estimate cost and delivery time|Estimez le coût et le délai|Estima costo y plazo de entrega|Kosten und Lieferzeit schätzen|Estime custo e prazo de entrega|قدّر التكلفة ومدة التوصيل|估算费用与时效",
weight:"Weight (kg)|Poids (kg)|Peso (kg)|Gewicht (kg)|Peso (kg)|الوزن (كغ)|重量（公斤）",
est_b:"Get estimate|Obtenir l'estimation|Ver estimación|Schätzung anzeigen|Ver estimativa|احسب التقدير|获取估算",
est_cost:"Estimated cost|Coût estimé|Costo estimado|Geschätzte Kosten|Custo estimado|التكلفة التقديرية|预计费用",
est_time:"Delivery time|Délai de livraison|Plazo de entrega|Lieferzeit|Prazo de entrega|مدة التوصيل|送达时效",
est_note:"Estimate only. The final price is confirmed when you book.|Estimation indicative. Le prix final est confirmé à la réservation.|Solo una estimación. El precio final se confirma al reservar.|Nur eine Schätzung. Der Endpreis wird bei der Buchung bestätigt.|Apenas uma estimativa. O preço final é confirmado na reserva.|تقدير فقط. يتم تأكيد السعر النهائي عند الحجز.|仅为估算，最终价格以下单时确认为准。",
faq_h:"Frequently asked questions|Questions fréquentes|Preguntas frecuentes|Häufige Fragen|Perguntas frequentes|الأسئلة الشائعة|常见问题",
f1:"Why hasn't my status changed?|Pourquoi mon statut n'a-t-il pas changé ?|¿Por qué no cambia mi estado?|Warum hat sich mein Status nicht geändert?|Por que meu status não mudou?|لماذا لم تتغير حالة شحنتي؟|为什么状态没有更新？",
a1:"Status updates when a parcel is scanned at a hub or vehicle. Long stretches on the road can look quiet.|Le statut change quand le colis est scanné dans un centre ou un véhicule. Les longs trajets peuvent sembler calmes.|El estado cambia cuando se escanea el paquete en un centro o vehículo. Los tramos largos pueden parecer tranquilos.|Der Status ändert sich beim Scan in einem Zentrum oder Fahrzeug. Lange Strecken wirken oft ruhig.|O status muda quando a encomenda é escaneada em uma unidade ou veículo. Trechos longos podem parecer parados.|تتغير الحالة عند مسح الطرد في مركز أو مركبة. قد تبدو الرحلات الطويلة هادئة.|包裹在站点或车辆上被扫描时状态才会更新，长途运输期间可能暂时没有变化。",
f2:"What if I'm not home?|Et si je ne suis pas chez moi ?|¿Y si no estoy en casa?|Was, wenn ich nicht zu Hause bin?|E se eu não estiver em casa?|ماذا لو لم أكن في المنزل؟|如果我不在家怎么办？",
a2:"The courier tries again the next day and the status shows an exception. Contact support to choose a new time.|Le livreur repasse le lendemain et le statut affiche un incident. Contactez l'assistance pour choisir un nouveau créneau.|El repartidor lo intenta al día siguiente y el estado muestra una incidencia. Contacta con soporte para elegir otra hora.|Der Zusteller versucht es am nächsten Tag erneut, der Status zeigt ein Problem. Kontaktieren Sie den Support für einen neuen Termin.|O entregador tenta novamente no dia seguinte e o status mostra uma ocorrência. Fale com o suporte para escolher outro horário.|يحاول المندوب مجددًا في اليوم التالي وتظهر الحالة كاستثناء. تواصل مع الدعم لاختيار موعد جديد.|快递员次日会再次派送，状态将显示异常。请联系客服约定新的时间。",
f3:"Which languages do you support?|Quelles langues prenez-vous en charge ?|¿Qué idiomas admiten?|Welche Sprachen unterstützen Sie?|Quais idiomas vocês oferecem?|ما اللغات التي تدعمونها؟|支持哪些语言？",
a3:"The whole site, tracking results and updates are available in English, French, Spanish, German, Portuguese, Arabic and Chinese.|Tout le site, les résultats de suivi et les mises à jour sont disponibles en anglais, français, espagnol, allemand, portugais, arabe et chinois.|Todo el sitio, los resultados y las notificaciones están en inglés, francés, español, alemán, portugués, árabe y chino.|Die gesamte Seite, Sendungsergebnisse und Updates gibt es auf Englisch, Französisch, Spanisch, Deutsch, Portugiesisch, Arabisch und Chinesisch.|Todo o site, os resultados e as atualizações estão em inglês, francês, espanhol, alemão, português, árabe e chinês.|الموقع بالكامل ونتائج التتبع والتحديثات متاحة بالإنجليزية والفرنسية والإسبانية والألمانية والبرتغالية والعربية والصينية.|整个网站、追踪结果与通知均提供英语、法语、西班牙语、德语、葡萄牙语、阿拉伯语和中文。",
gal_h:"Our team and fleet|Notre équipe et notre flotte|Nuestro equipo y flota|Unser Team und unsere Flotte|Nossa equipe e frota|فريقنا وأسطولنا|我们的团队与车队",
fade_h:"Every parcel. Every border. One tracking number.|Chaque colis. Chaque frontière. Un seul numéro de suivi.|Cada paquete. Cada frontera. Un solo número de seguimiento.|Jedes Paket. Jede Grenze. Eine Sendungsnummer.|Cada encomenda. Cada fronteira. Um único código de rastreio.|كل طرد. كل حدود. رقم تتبع واحد.|每个包裹，每道国界，一个运单号。",
fade_d:"See exactly where your shipment is, in the language you read best.|Voyez précisément où se trouve votre envoi, dans la langue que vous lisez le mieux.|Mira exactamente dónde está tu envío, en el idioma que mejor lees.|Sehen Sie genau, wo Ihre Sendung ist, in der Sprache, die Sie am besten lesen.|Veja exatamente onde está sua encomenda, no idioma que você lê melhor.|اعرف بالضبط أين شحنتك، باللغة التي تقرأ بها بسهولة.|用您最熟悉的语言，随时看到包裹的确切位置。",
dl:"Download receipt|Télécharger le reçu|Descargar recibo|Quittung herunterladen|Baixar recibo|تنزيل الإيصال|下载收据",
rc_t:"Order receipt|Reçu de commande|Recibo de pedido|Bestellquittung|Recibo do pedido|إيصال الطلب|订单收据",
rc_issued:"Issued|Émis le|Emitido|Ausgestellt|Emitido em|تاريخ الإصدار|开具日期",
rc_hand:"Handling & fuel|Manutention et carburant|Manejo y combustible|Handling & Kraftstoff|Manuseio e combustível|المناولة والوقود|操作与燃油费",
rc_total:"Total (USD)|Total (USD)|Total (USD)|Gesamt (USD)|Total (USD)|الإجمالي (دولار أمريكي)|合计（美元）",
rc_thanks:"Thank you for shipping with Nux Express. Keep this receipt for your records.|Merci d'avoir choisi Nux Express. Conservez ce reçu pour vos dossiers.|Gracias por enviar con Nux Express. Guarda este recibo para tus registros.|Danke, dass Sie Nux Express nutzen. Bewahren Sie diese Quittung auf.|Obrigado por enviar com a Nux Express. Guarde este recibo.|شكرًا لاختيارك Nux Express. احتفظ بهذا الإيصال لسجلاتك.|感谢选择 Nux Express，请保留此收据。",
rc_busy:"Preparing PDF…|Préparation du PDF…|Preparando PDF…|PDF wird erstellt…|Preparando PDF…|جارٍ تجهيز الملف…|正在生成 PDF…",
lock:"Too many attempts. Please wait a minute and try again.|Trop de tentatives. Patientez une minute puis réessayez.|Demasiados intentos. Espera un minuto e inténtalo de nuevo.|Zu viele Versuche. Bitte warten Sie eine Minute.|Muitas tentativas. Aguarde um minuto e tente novamente.|محاولات كثيرة. انتظر دقيقة ثم حاول مرة أخرى.|尝试次数过多，请稍候一分钟再试。",
eg:"Example|Exemple|Ejemplo|Beispiel|Exemplo|مثال|示例",
care:"Customer care|Service client|Atención al cliente|Kundenservice|Atendimento ao cliente|خدمة العملاء|客户服务",
care_h:"How can we help?|Comment pouvons-nous vous aider ?|¿Cómo podemos ayudarte?|Wie können wir helfen?|Como podemos ajudar?|كيف يمكننا مساعدتك؟|需要什么帮助？",
care_d:"Choose how you'd like to reach us.|Choisissez comment nous joindre.|Elige cómo contactarnos.|Wählen Sie, wie Sie uns erreichen möchten.|Escolha como falar conosco.|اختر الطريقة التي تفضّل التواصل بها.|请选择联系方式。",
call:"Call us|Appelez-nous|Llámanos|Rufen Sie uns an|Ligue para nós|اتصل بنا|致电我们",
chat:"Chat with us|Discuter avec nous|Chatea con nosotros|Mit uns chatten|Converse conosco|تحدث معنا|在线咨询",
ch_bot:"Automated assistant|Assistant automatique|Asistente automático|Automatischer Assistent|Assistente automático|مساعد آلي|自动助手",
ch_hi:"Hi! Ask me about tracking, delivery times or pricing. For anything else, our team is a call or email away.|Bonjour ! Posez-moi vos questions sur le suivi, les délais ou les tarifs. Pour le reste, notre équipe est à un appel ou un e-mail.|¡Hola! Pregúntame sobre seguimiento, plazos de entrega o precios. Para cualquier otra cosa, nuestro equipo está a una llamada o un correo.|Hallo! Fragen Sie mich zu Sendungsverfolgung, Lieferzeiten oder Preisen. Für alles andere ist unser Team per Anruf oder E-Mail erreichbar.|Olá! Pergunte sobre rastreio, prazos de entrega ou preços. Para qualquer outra coisa, nossa equipe está a uma ligação ou e-mail.|مرحبًا! اسألني عن التتبع أو مواعيد التسليم أو الأسعار. ولأي أمر آخر، فريقنا على بعد مكالمة أو رسالة بريد.|您好！可以向我咨询追踪、送达时效或价格。其他问题请致电或发邮件联系我们的团队。",
ch_ph:"Type your question…|Écrivez votre question…|Escribe tu pregunta…|Frage eingeben…|Digite sua pergunta…|اكتب سؤالك…|输入您的问题…",
ch_q1:"How do I track a parcel?|Comment suivre un colis ?|¿Cómo rastreo un paquete?|Wie verfolge ich ein Paket?|Como rastrear uma encomenda?|كيف أتتبع طردًا؟|如何追踪包裹？",
ch_a1:"Open Track Shipment and enter your tracking number. It is private and was given to you by us, so only you can see your parcel.|Ouvrez « Suivre un colis » et saisissez votre numéro de suivi. Il est confidentiel et vous a été remis par nos soins : vous seul voyez votre colis.|Abre «Rastrear envío» e introduce tu número de seguimiento. Es privado y te lo dimos nosotros, así que solo tú ves tu paquete.|Öffnen Sie „Sendung verfolgen“ und geben Sie Ihre Sendungsnummer ein. Sie ist privat und stammt von uns, daher sehen nur Sie Ihr Paket.|Abra «Rastrear encomenda» e digite seu código de rastreio. Ele é privado e foi fornecido por nós, então só você vê sua encomenda.|افتح «تتبع الشحنة» وأدخل رقم التتبع. هو رقم خاص قدمناه لك، لذا أنت وحدك من يرى طردك.|打开“查询包裹”并输入运单号。运单号为私密信息，由我们提供，只有您能查看包裹。",
ch_q2:"How much does it cost and how long does it take?|Quel est le prix et quel est le délai ?|¿Cuánto cuesta y cuánto tarda?|Was kostet es und wie lange dauert es?|Quanto custa e quanto tempo leva?|كم التكلفة وكم تستغرق المدة؟|费用是多少，需要多久？",
ch_a2:"Use the estimator in our Services section to get a price range and delivery time for your route.|Utilisez l'estimateur de la section Services pour obtenir une fourchette de prix et un délai pour votre trajet.|Usa el estimador de la sección Servicios para ver un rango de precio y el plazo de tu ruta.|Nutzen Sie den Rechner im Bereich Leistungen für Preisspanne und Lieferzeit Ihrer Strecke.|Use o estimador na seção Serviços para ver a faixa de preço e o prazo da sua rota.|استخدم أداة التقدير في قسم الخدمات لمعرفة نطاق السعر ومدة التوصيل لمسارك.|请使用“服务”部分的估算工具，查看您路线的价格区间与时效。",
ch_q3:"Talk to a person|Parler à un conseiller|Hablar con una persona|Mit einer Person sprechen|Falar com uma pessoa|التحدث إلى شخص|联系人工客服",
ch_unk:"I'm not sure about that one. Our team can help by email or phone.|Je ne suis pas sûr de pouvoir répondre. Notre équipe peut vous aider par e-mail ou par téléphone.|No estoy seguro de eso. Nuestro equipo puede ayudarte por correo o teléfono.|Da bin ich nicht sicher. Unser Team hilft Ihnen per E-Mail oder Telefon.|Não tenho certeza sobre isso. Nossa equipe pode ajudar por e-mail ou telefone.|لست متأكدًا من ذلك. يمكن لفريقنا مساعدتك عبر البريد الإلكتروني أو الهاتف.|这个问题我不太确定，我们的团队可通过邮件或电话为您解答。"
};
for(const k in T)T[k]=T[k].split('|');

// Mock data: cur = index of current step (0-5)
const S=['s_created','s_picked','s_dep','s_transit','s_out','s_del'];
const D={};
// status key -> [strong colour, tint]
const C={s_pend:['#b45309','#fef3c7'],s_picked:['#1d4ed8','#dbeafe'],s_fac:['#1d4ed8','#dbeafe'],s_transit:['#0b1f4d','#dde4f5'],s_out:['#c2410c','#ffedd5'],s_del:['#15803d','#dcfce7'],s_ex:['#b91c1c','#fee2e2'],s_hold:['#b45309','#fef3c7']};

let lang='en',view='home',menu=0,q='',state='idle',res=null;
try{lang=localStorage.getItem('nux-lang')||'en'}catch(e){}
if(!L.includes(lang))lang='en';
const t=k=>T[k][L.indexOf(lang)]||T[k][0];
const esc=s=>s.replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const I=d=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const P={search:'M21 21l-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14',bolt:'M13 2L4 14h7l-1 8 9-12h-7z',shield:'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',pin:'M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4',globe:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',box:'M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8',truck:'M1 6h13v10H1zM14 10h4l3 3v3h-7M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4',biz:'M3 8h18v12H3zM9 8V5h6v3',check:'M5 12l5 5 9-10',x:'M6 6l12 12M18 6L6 18'};
const dtm=s=>new Intl.DateTimeFormat(lang,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}).format(new Date(s));
const dte=s=>new Intl.DateTimeFormat(lang,{dateStyle:'long'}).format(new Date(s+'T12:00'));

const logo=`<button class="logo" onclick="nav('home')" aria-label="Nux Express"><img class="lgi" src="images/logo.png" alt="" width="30" height="30" onload="this.nextElementSibling.remove()" onerror="this.remove()"><svg width="30" height="30" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="#0b1f4d"/><circle cx="26" cy="6" r="4" fill="#e0233b"/><path d="M8 22V10l16 12V10" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/></svg>Nux Express</button>`;

function form(){const b=state==='load';return `<form class="tf" onsubmit="go(event)"><label class="in">${I(P.search)}<input name="q" value="${esc(q)}" placeholder="${t('ph')}" aria-label="${t('ph')}" autocomplete="off" autocapitalize="characters" enterkeyhint="search" maxlength="12" spellcheck="false"></label><button class="btn" ${b?'disabled':''}>${b?'<i class="sp"></i>'+t('busy'):t('track')}</button></form><p class="eg">${t('eg')}: <span dir="ltr">NUX-12345678</span></p>`}

function langSel(){return `<details class="lg"><summary aria-label="Language">${SH[L.indexOf(lang)]} ▾</summary><ul>${L.map((l,i)=>`<li><button onclick="setLang('${l}')" ${l===lang?'aria-current="true"':''}>${NM[i]}</button></li>`).join('')}</ul></details>`}

function header(){const n=[['home','home'],['track','track'],['svc','home','services'],['about','home','about'],['contact','home','contact']];
const lk=n.map(x=>`<button onclick="nav('${x[0]==='track'?'track':'home'}'${x[2]?`,'${x[2]}'`:''})">${t(x[0])}</button>`).join('');
return `<header><div class="w nb">${logo}<nav class="links">${lk}</nav><span class="sp1"></span>${langSel()}<button class="btn sm" onclick="nav('track')">${t('track')}</button><button class="burger" aria-label="Menu" onclick="menu=!menu;render()">${I(menu?P.x:'M4 7h16M4 12h16M4 17h16')}</button></div>${menu?`<nav class="menu w">${lk}</nav>`:''}</header>`}

const art=`<svg class="art" viewBox="0 0 420 320" role="img" aria-label="Delivery route"><defs><pattern id="g" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#2a4a94" stroke-width="1"/></pattern></defs><rect x="6" y="6" width="408" height="308" rx="28" fill="#153172"/><rect x="6" y="6" width="408" height="308" rx="28" fill="url(#g)"/><ellipse class="cl" cx="90" cy="50" rx="34" ry="11" fill="#fff" opacity=".12"/><ellipse class="cl" cx="300" cy="140" rx="44" ry="12" fill="#fff" opacity=".1"/><path d="M60 250C130 250 120 140 210 150S300 70 360 80" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="2 12" stroke-linecap="round"/><circle cx="60" cy="250" r="10" fill="#e0233b" opacity=".4"><animate attributeName="r" values="10;26" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;0" dur="2s" repeatCount="indefinite"/></circle><circle cx="60" cy="250" r="9" fill="#e0233b" stroke="#fff" stroke-width="3"/><path d="M360 26a22 22 0 0 0-22 22c0 18 22 36 22 36s22-18 22-36a22 22 0 0 0-22-22z" fill="#fff"/><circle cx="360" cy="48" r="9" fill="#e0233b"/><g class="fl"><g transform="translate(76 96)"><rect width="56" height="46" rx="6" fill="#e0233b"/><path d="M28 0v46M0 18h56" stroke="#fff" stroke-width="5" opacity=".9"/></g></g><g transform="translate(60 250)"><g><animateMotion dur="9s" repeatCount="indefinite" path="M0 0C70 0 60 -110 150 -100S240 -180 300 -170"/><g transform="translate(-24 -36)"><rect width="34" height="24" rx="4" fill="#fff"/><path d="M34 6h12l8 9v9H34z" fill="#e0233b"/><circle cx="10" cy="26" r="6" fill="#0b1f4d" stroke="#fff" stroke-width="2"/><circle cx="44" cy="26" r="6" fill="#0b1f4d" stroke="#fff" stroke-width="2"/></g></g></g></svg>`;
const sky=`<svg class="sky" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 70V45h40V25h30v20h25V35h35v10h30V15h28v30h30V30h40v15h30V20h26v25h40V35h30v10h34V25h30v20h40V30h35v15h40V40h30v30z" fill="#f4f6fb"/></svg>`;
const VAN=`<svg viewBox="0 0 38 24" aria-hidden="true"><rect x="0" y="3" width="24" height="15" rx="3" fill="#fff"/><path d="M24 7h8l5 5v6H24z" fill="#ffb3bd"/><circle cx="8" cy="19" r="4" fill="#0b1f4d" stroke="#fff" stroke-width="2"/><circle cx="30" cy="19" r="4" fill="#0b1f4d" stroke="#fff" stroke-width="2"/></svg>`;
const fleet=`<div class="fleet" aria-hidden="true"><svg viewBox="0 0 1200 90" preserveAspectRatio="xMinYMid slice"><rect y="62" width="1200" height="28" fill="#0b1f4d"/><path d="M0 76h1200" stroke="#fff" stroke-width="3" stroke-dasharray="26 22" opacity=".6"/><g class="drv v1"><rect y="22" width="52" height="34" rx="5" fill="#0b1f4d"/><path d="M52 30h18l12 14v12H52z" fill="#e0233b"/><circle cx="14" cy="58" r="8" fill="#fff" stroke="#0b1f4d" stroke-width="3"/><circle cx="68" cy="58" r="8" fill="#fff" stroke="#0b1f4d" stroke-width="3"/></g><g class="drv v2"><rect y="10" width="96" height="46" rx="5" fill="#e0233b"/><path d="M96 22h20l14 18v16H96z" fill="#0b1f4d"/><path d="M12 28h60" stroke="#fff" stroke-width="5" opacity=".8"/><circle cx="20" cy="58" r="8" fill="#fff" stroke="#0b1f4d" stroke-width="3"/><circle cx="76" cy="58" r="8" fill="#fff" stroke="#0b1f4d" stroke-width="3"/><circle cx="116" cy="58" r="8" fill="#fff" stroke="#0b1f4d" stroke-width="3"/></g><g class="drv v3"><rect y="22" width="22" height="20" rx="3" fill="#e0233b"/><path d="M28 24h8l8 20" stroke="#0b1f4d" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="38" cy="10" r="8" fill="#0b1f4d"/><path d="M8 50h44" stroke="#0b1f4d" stroke-width="6" stroke-linecap="round"/><circle cx="8" cy="58" r="8" fill="#fff" stroke="#0b1f4d" stroke-width="3"/><circle cx="52" cy="58" r="8" fill="#fff" stroke="#0b1f4d" stroke-width="3"/></g></svg></div>`;
const courier=`<svg class="ca" viewBox="0 0 320 260" aria-hidden="true"><rect x="190" y="40" width="100" height="190" rx="8" fill="#fff" opacity=".95"/><rect x="200" y="52" width="80" height="56" rx="4" fill="#dde6f7"/><circle cx="272" cy="150" r="5" fill="#e0233b"/><rect y="228" width="320" height="8" rx="4" fill="#fff" opacity=".3"/><g class="fl"><path d="M240 4a16 16 0 0 0-16 16c0 13 16 26 16 26s16-13 16-26a16 16 0 0 0-16-16z" fill="#e0233b"/><circle cx="240" cy="20" r="6" fill="#fff"/></g><rect x="74" y="150" width="20" height="78" rx="8" fill="#071535"/><rect x="104" y="150" width="20" height="78" rx="8" fill="#071535"/><rect x="62" y="80" width="74" height="80" rx="18" fill="#e0233b"/><circle cx="99" cy="56" r="22" fill="#ffd9c7"/><path d="M76 50a23 23 0 0 1 46 0z" fill="#071535"/><rect x="72" y="48" width="56" height="6" rx="3" fill="#071535"/><g class="fl"><rect x="118" y="112" width="74" height="58" rx="6" fill="#fff"/><path d="M155 112v58M118 136h74" stroke="#e0233b" stroke-width="6"/></g></svg>`;
const aboutArt=`<svg viewBox="0 0 420 300" role="img" aria-label="Warehouse and delivery plane"><rect width="420" height="300" fill="#dde6f7"/><circle cx="340" cy="60" r="28" fill="#e0233b"/><ellipse cx="90" cy="110" rx="40" ry="11" fill="#fff"/><ellipse cx="250" cy="70" rx="34" ry="9" fill="#fff"/><g transform="translate(40 30)"><g class="cl"><path d="M0 10h48l12 6-12 6H0zM14 10L4 0h8l16 10zM14 22L4 32h8l16-10z" fill="#0b1f4d"/></g></g><rect y="240" width="420" height="60" fill="#0b1f4d"/><rect x="60" y="130" width="190" height="110" fill="#fff" stroke="#0b1f4d" stroke-width="4"/><path d="M50 132L155 90l105 42z" fill="#0b1f4d"/><g fill="#e0233b"><rect x="80" y="170" width="44" height="70"/><rect x="136" y="170" width="44" height="70"/><rect x="192" y="170" width="44" height="70"/></g><path d="M80 195h44M136 195h44M192 195h44" stroke="#fff" stroke-width="3"/><g transform="translate(270 196)"><rect width="80" height="44" rx="4" fill="#fff" stroke="#0b1f4d" stroke-width="3"/><path d="M80 10h26l14 16v18H80z" fill="#e0233b"/><circle cx="24" cy="46" r="10" fill="#0b1f4d" stroke="#fff" stroke-width="3"/><circle cx="100" cy="46" r="10" fill="#0b1f4d" stroke="#fff" stroke-width="3"/></g></svg>`;

const NOW=new Date('2026-09-30T12:00');
const rel=r=>{if(r.cur===5)return'';try{return new Intl.RelativeTimeFormat(lang,{numeric:'auto'}).format(Math.round((new Date(r.eta+'T12:00')-NOW)/864e5),'day')}catch(e){return''}};
function cp(b){const u=location.href.split('#')[0]+'#'+q;try{navigator.clipboard.writeText(u).then(()=>{b.textContent=t('copied')})}catch(e){}}
const ntf=()=>`<div class="card nt"><h3>${t('notify_h')}</h3><form onsubmit="subm(event)"><input type="email" required placeholder="${t('em')}" aria-label="${t('em')}"><button class="btn">${t('notify_b')}</button></form><p id="nk" role="status"></p></div>`;
function subm(e){e.preventDefault();$('#nk').textContent=t('notify_ok');e.target.reset()}
const CITIES=['New York','Chicago','Los Angeles','Dallas','Atlanta','Miami','Seattle'];
const CO={'New York':[40.71,-74],Chicago:[41.88,-87.63],'Los Angeles':[34.05,-118.24],Dallas:[32.78,-96.8],Atlanta:[33.75,-84.39],Miami:[25.76,-80.19],Seattle:[47.61,-122.33]};
const km=(a,b)=>{const r=x=>x*Math.PI/180,p=CO[a],q=CO[b],h=Math.sin(r(q[0]-p[0])/2)**2+Math.cos(r(p[0]))*Math.cos(r(q[0]))*Math.sin(r(q[1]-p[1])/2)**2;return 12742*Math.asin(Math.sqrt(h))};
const qa={f:'New York',t:'Los Angeles',w:2,s:'sv1'};let estR=null;
const opt=v=>CITIES.map(c=>`<option ${c===v?'selected':''}>${c}</option>`).join('');
function estHtml(){if(!estR)return'';let c,d;try{c=new Intl.NumberFormat(lang,{style:'currency',currency:'USD',maximumFractionDigits:0});d=new Intl.NumberFormat(lang,{style:'unit',unit:'day',unitDisplay:'long'})}catch(e){return''}
const fr=(n,x,y)=>n.formatRange?n.formatRange(x,y):n.format(x)+' – '+n.format(y);
return `<div class="est"><div><small>${t('est_cost')}</small><b>${fr(c,estR.lo,estR.hi)}</b></div><div><small>${t('est_time')}</small><b>${fr(d,estR.a,estR.b)}</b></div></div><p class="note">${t('est_note')}</p>`}
function estGo(){const d=qa.f===qa.t?15:km(qa.f,qa.t),ex=qa.s==='sv2',w=Math.max(.1,qa.w),p=(8+d*.01+w*1.5)*(ex?1.8:1),r=x=>Math.round(x);
estR={lo:r(p*.9),hi:r(p*1.15),a:ex?1:Math.ceil(d/1000)+1,b:ex?Math.max(2,Math.ceil(d/2000)+1):Math.ceil(d/1000)+2};$('#estres').innerHTML=estHtml()}
const quote=()=>`<section id="quote" class="w"><h2>${t('q_h')}</h2><div class="card qf"><label>${t('from')}<select onchange="qa.f=this.value">${opt(qa.f)}</select></label><label>${t('to')}<select onchange="qa.t=this.value">${opt(qa.t)}</select></label><label>${t('weight')}<input type="number" min="0.1" max="70" step="0.1" value="${qa.w}" onchange="qa.w=+this.value||1"></label><label>${t('svc')}<select onchange="qa.s=this.value"><option value="sv1" ${qa.s==='sv1'?'selected':''}>${t('sv1')}</option><option value="sv2" ${qa.s==='sv2'?'selected':''}>${t('sv2')}</option></select></label><button class="btn" onclick="estGo()">${t('est_b')}</button><div id="estres">${estHtml()}</div></div></section>`;
const faq=()=>`<section id="faq" class="w"><h2>${t('faq_h')}</h2>${[1,2,3].map(i=>`<details class="fq"><summary>${t('f'+i)}</summary><p>${t('a'+i)}</p></details>`).join('')}</section>`;
const img=(n,alt,cls)=>`<img class="${cls||'pic'}" src="images/${n}" alt="${alt||''}" loading="lazy" onerror="this.remove()">`;
const ph=n=>`<figure class="phs"><span><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M9 9h.01"/></svg><small>images/${n}</small></span>${img(n)}</figure>`;
const gal=()=>`<section class="w"><h2>${t('gal_h')}</h2><div class="gg">${[1,2,3].map(i=>ph('gallery-'+i+'.jpg')).join('')}</div></section>`;
const fade=()=>`<section class="fade"><div class="fmask"><div class="fph">images/banner.jpg</div>${img('banner.jpg')}</div><div class="fov"></div><div class="w"><h2>${t('fade_h')}</h2><p>${t('fade_d')}</p><button class="btn" onclick="nav('track')">${t('track')}</button></div></section>`;
const RC={};
const stk=r=>r.pz?'s_hold':r.ex?'s_ex':['s_pend','s_picked','s_fac','s_transit','s_out','s_del'][r.cur];
function rcHtml(r){const key=stk(r),[fg,bg]=C[key],k=r.chg||{s:'sv1',w:1,fee:30},hd=Math.round(k.fee*8)/100,tot=k.fee+hd,
cu=new Intl.NumberFormat(lang,{style:'currency',currency:'USD'}),dd=x=>new Intl.DateTimeFormat(lang,{dateStyle:'medium'}).format(new Date(x)),
bars=[...q].map(c=>c.charCodeAt(0)).flatMap(n=>[n%3+1,n%2+1]).map((w,i)=>`<i style="width:${w*2}px;${i%2?'':'background:#0b1f4d'}"></i>`).join('');
return `<div class="rcp" dir="${lang==='ar'?'rtl':'ltr'}"><div class="rh"><div><div class="rl"><svg width="34" height="34" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="#fff"/><circle cx="26" cy="6" r="4" fill="#e0233b"/><path d="M8 22V10l16 12V10" fill="none" stroke="#0b1f4d" stroke-width="3" stroke-linejoin="round"/></svg>Nux Express</div><div class="rt">${t('rc_t')}</div></div><div class="rn"><small>${t('rc_issued')}</small><b>${dd(r.ts[0])}</b><small>No.</small><b style="direction:ltr">RC-${q.slice(4)}</b></div></div>
<div class="rb"><span class="rst" style="background:${bg};color:${fg}">● ${t(key)}</span><div class="rid"><small>${t('id')}</small><b>${esc(q)}</b></div>
<div class="rroute"><div><small>${t('from')}</small><b>${r.from}</b></div><div class="rline"></div><div><small>${t('to')}</small><b>${r.to}</b></div></div>
<div class="rgrid"><div><small>${t('loc')}</small><b>${r.loc}</b></div><div><small>${t('eta')}</small><b>${dte(r.eta)}</b></div><div><small>${t('svc')}</small><b>${t(k.s)}</b></div><div><small>${t('weight')}</small><b>${k.w}</b></div></div>
<table class="rtab"><tr><td>${t(k.s)} · ${k.w} kg</td><td>${cu.format(k.fee)}</td></tr><tr><td>${t('rc_hand')}</td><td>${cu.format(hd)}</td></tr></table>
<div class="rtot"><span>${t('rc_total')}</span><span>${cu.format(tot)}</span></div>
<div class="rbar">${bars}</div><div class="rcode">${esc(q)}</div></div>
<div class="rf">${t('rc_thanks')}<br><span dir="ltr">support@example.com · +1 XXX XXX XXXX</span></div></div>`}
async function saveFile(name,blob){let d=null;try{d=window.claude&&await claude.use('downloads')}catch(e){}
if(d){try{await d.save({filename:name,data:blob})}catch(e){if(e&&e.code&&e.code!=='declined')console.error(e)}return}
const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
async function dlr(b){const r=res;if(!r||b.disabled)return;const old=b.innerHTML;b.disabled=true;b.textContent=t('rc_busy');
try{const h=document.createElement('div');h.innerHTML=rcHtml(r);const el=h.firstElementChild;document.body.appendChild(el);
if(document.fonts)await document.fonts.ready;
const cv=await html2canvas(el,{scale:2,backgroundColor:'#ffffff',logging:false});el.remove();
const pdf=new jspdf.jsPDF({unit:'pt',format:'a4',compress:true});pdf.addImage(cv.toDataURL('image/jpeg',.95),'JPEG',0,0,595.28,841.89);
await saveFile('Nux-Receipt-'+q+'.pdf',pdf.output('blob'))}catch(e){console.error(e)}
b.disabled=false;b.innerHTML=old}
let care=0;
let chat=0,msgs=[];
const QR=[['ch_q1','ch_a1'],['ch_q2','ch_a2'],['f1','a1'],['f2','a2'],['ch_q3','ch_unk']];
const ACT={ch_a1:['t'],ch_a2:['e'],ch_unk:['m']};
const INT=[[/track|suiv|rastre|verfolg|تتبع|追踪|运单|查询/i,'ch_a1'],[/pric|cost|how much|prix|co[uû]t|precio|costo|preis|kosten|pre[cç]o|custo|سعر|تكلفة|كم|价|费|多少|how long|when|d[eé]lai|plazo|lieferzeit|prazo|مدة|متى|时效|多久/i,'ch_a2'],[/language|langue|idioma|sprache|لغة|语言/i,'a3'],[/not home|absent|ausente|zuhause|casa|منزل|不在|miss/i,'a2'],[/status|statut|estado|stuck|update|状态|更新/i,'a1'],[/human|person|agent|humain|persona|mensch|pessoa|شخص|人工|客服/i,'ch_unk']];
const cmsg=m=>{if(m.typing)return '<div class="m b"><p class="dots"><i></i><i></i><i></i></p></div>';
const x=m.raw!==undefined?esc(m.raw):m.r==='u'?esc(m.k):t(m.k);
const A={t:`<button onclick="nav('track');cc(0)">${t('track')}</button>`,e:`<button onclick="nav('home','quote');cc(0)">${t('q_h')}</button>`,m:`<a href="mailto:support@example.com">${t('em')}</a><a href="tel:+10000000000">${t('call')}</a>`};
const a=(m.act||[]).map(c=>A[c]).join('');return `<div class="m ${m.r}"><p>${x}</p>${a?`<div class="ma">${a}</div>`:''}</div>`};
function paint(){const e=$('#msgs');if(e){e.innerHTML=msgs.map(cmsg).join('');e.scrollTop=e.scrollHeight}}
function openChat(){chat=1;if(!msgs.length)msgs=[{r:'b',k:'ch_hi'}];$('.cc').classList.add('chatv');paint();setTimeout(()=>{const i=$('#ci');i&&i.focus()},60)}
function closeChat(){chat=0;$('.cc').classList.remove('chatv')}
function send(e){e.preventDefault();const i=$('#ci'),v=i.value.trim();if(!v)return;i.value='';reply(v)}
async function reply(v,key){msgs.push({r:'u',k:v},{r:'b',typing:1});paint();let a=null;
if(CONFIG.chat){try{const r=await fetch(CONFIG.chat,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:v,lang})});if(r.ok){const j=await r.json();if(j.reply)a={raw:String(j.reply)}}}catch(e){}}
if(!a){const f=INT.find(x=>x[0].test(v)),k=key||(f?f[1]:'ch_unk');a={k,act:ACT[k]||[]}}
await new Promise(z=>setTimeout(z,600));msgs=msgs.filter(m=>!m.typing);msgs.push({r:'b',...a});paint()}
const careW=()=>`<div class="cc${care?' open':''}${chat?' chatv':''}"><div class="cp" role="dialog" aria-label="${t('care')}"><div class="mn"><b>${t('care_h')}</b><p>${t('care_d')}</p><button onclick="openChat()"><i>${I('M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z')}</i><span>${t('chat')}<small>${t('ch_bot')}</small></span></button><a href="mailto:support@example.com"><i>${I('M4 6h16v12H4zM4 7l8 6 8-6')}</i><span>${t('em')}<small>support@example.com</small></span></a><a href="tel:+10000000000"><i>${I('M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z')}</i><span>${t('call')}<small dir="ltr">+1 XXX XXX XXXX</small></span></a><button onclick="nav('home','faq');cc(0)"><i>${I('M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01')}</i><span>${t('help')}</span></button></div>
<div class="ch"><div class="chh"><button onclick="closeChat()" aria-label="${t('care')}">${I('M15 5l-7 7 7 7')}</button><span><b>${t('chat')}</b><small>${t('ch_bot')}</small></span></div><div id="msgs" class="ms2" aria-live="polite">${msgs.map(cmsg).join('')}</div><div class="qr">${QR.map(x=>`<button onclick="reply(t('${x[0]}'),'${x[1]}')">${t(x[0])}</button>`).join('')}</div><form onsubmit="send(event)"><input id="ci" placeholder="${t('ch_ph')}" aria-label="${t('ch_ph')}" maxlength="200" autocomplete="off"><button aria-label="${t('chat')}">${I('M5 12l14-7-5 14-2-6z')}</button></form></div></div><button class="cfab" aria-expanded="${!!care}" aria-label="${t('care')}" onclick="cc()">${I('M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3zM20 19c0 1.5-2 2-5 2')}<span>${t('care')}</span></button></div>`;
function cc(v){care=v===undefined?!care:v;const e=$('.cc');if(!e)return;e.classList.toggle('open',!!care);$('.cfab').setAttribute('aria-expanded',!!care)}
const CC=['US','CA','MX','BR','GB','FR','DE','ES','IT','AE','IN','CN','JP','AU','ZA'];
const flag=c=>String.fromCodePoint(...[...c].map(x=>127397+x.charCodeAt(0)));
function flags(){let dn;try{dn=new Intl.DisplayNames([lang],{type:'region'})}catch(e){}
return CC.map((c,i)=>`<li style="--h:${i*24}"><span class="fg">${flag(c)}</span>${dn?dn.of(c):c}</li>`).join('')}
function home(){
const sv=[['sv1',P.box,'standard'],['sv2',P.bolt,'express'],['sv3',P.globe,'international'],['sv4',P.biz,'business']].map(x=>`<div class="card">${img('service-'+x[2]+'.jpg','','sv-img')}<div class="ic">${I(x[1])}</div><h3>${t(x[0])}</h3><p>${t(x[0]+'d')}</p></div>`).join('');
const hw=[['b1','b1d'],['b2','b2d'],['b3','b3d']].map((x,i)=>`<div class="card"><div class="step">0${i+1}</div><h3>${t(x[0])}</h3><p>${t(x[1])}</p></div>`).join('');
const tr=[['tr1',P.bolt],['tr2',P.shield],['tr3',P.pin],['sv3',P.globe]].map(x=>`<div class="tr"><span class="ic">${I(x[1])}</span><div><b>${t(x[0])}</b><small>${t(x[0]==='sv3'?'tr4d':x[0]+'d')}</small></div></div>`).join('');
return `<div class="hb"><div class="w"><div class="hero"><div><span class="tag">${t('tag')}</span><h1>${t('h1')}</h1><p class="lead">${t('sub')}</p>${form()}</div></div></div>${sky}</div><div class="w"><div class="trust">${tr}</div></div>
<section id="services" class="w"><h2>${t('svc_h')}</h2><p class="lead">${t('svc_d')}</p><div class="grid g4">${sv}</div></section>${quote()}
<div class="dk"><section class="w"><h2>${t('how_h')}</h2><div class="grid g3">${hw}</div></section></div>${fade()}
<div class="about"><section id="about" class="w ab"><div><h2>${t('about_h')}</h2><p>${t('about_d')}</p><p>${t('about_d2')}</p></div><div class="slot">${aboutArt}${img('about.png')}</div></section><div class="w ctr"><h3>${t('ctry_h')}</h3><p>${t('ctry_d')}</p><ul class="flags">${flags()}</ul></div></div>
${fleet}<div class="w"><div class="cta"><div><h2>${t('cta_h')}</h2><p>${t('cta_d')}</p><button class="btn" onclick="nav('track')">${t('track')}</button></div><div class="slot cs">${courier}${img('courier.png')}</div></div></div>${gal()}${faq()}<section id="contact" class="w"><h2>${t('contact')}</h2><p class="lead">${t('ct_d')}</p><dl class="ct card"><div><dt>${t('em')}</dt><dd>support@example.com</dd></div><div><dt>${t('tel')}</dt><dd dir="ltr" style="text-align:start">+1 XXX XXX XXXX</dd></div><div><dt>${t('ad')}</dt><dd>New York, USA</dd></div></dl></section>`}

const holdBox=r=>{const k='h_'+r.pr;return `<div class="hn" role="status"><b>${t(T[k]?k:'h_other')}</b><small>${t('hold_h')}</small><p>${esc(r.pm||'')}</p>${r.pa?`<small>${t('hold_since')} ${dtm(r.pa)}</small>`:''}</div>`};
function result(){
if(state==='idle')return `<div class="card ms"><div class="ic">${I(P.box)}</div><h3>${t('th')}</h3><p>${t('empty')}</p></div>`;
if(state==='load')return `<div class="card"><div class="sk" style="width:40%"></div><div class="sk" style="height:34px;width:60%"></div><div class="sk" style="width:80%"></div></div><div class="two"><div class="card"><div class="sk"></div><div class="sk" style="width:70%"></div><div class="sk"></div><div class="sk" style="width:50%"></div></div><div class="card"><div class="sk"></div><div class="sk" style="width:80%"></div><div class="sk"></div></div></div>`;
if(state==='err'||state==='lock')return `<div class="card ms e"><div class="ic">${I(P.x)}</div><h3>${t('nf')}</h3><p>${t(state==='lock'?'lock':'nfd')}</p><button class="btn" onclick="q='';state='idle';render();document.querySelector('.in input').focus()">${t('retry')}</button></div>`;
const r=res,key=r.pz?'s_hold':r.ex?'s_ex':['s_pend','s_picked','s_fac','s_transit','s_out','s_del'][r.cur];
const ds=r.pz?'d_hold':r.ex?'d_ex':r.cur<3?'d_proc':['','','','d_transit','d_out','d_del'][r.cur];
const [fg,bg]=C[key],done=r.cur===5;
const tl=S.map((s,i)=>{const d=done||i<r.cur,c=!done&&i===r.cur,cls=d?'d':c?'c':'p',ic=d||(c&&r.ex);
return `<li class="${cls}"><span class="dt">${c&&r.pz?I('M8 5v14M16 5v14'):c&&r.ex?I(P.x):d?I(P.check):''}</span><b>${t(c&&r.ex?'s_ex':s)}</b><span>${i<=r.cur?esc(r.c[i])+' · '+dtm(r.ts[i]):t('s_pend')}</span></li>`}).join('');
return `<div class="card sc" style="--c:${fg};--cb:${bg}"><small>${t('ship')}</small><div class="id">${esc(q)}</div><small>${t('cur')}</small><div class="st"><i></i>${t(key)}</div><div>${t(ds)}</div>${r.pz?holdBox(r):''}<div class="rtk"><span>${r.from.split(',')[0]}</span><div class="ln" style="--w:${r.ex&&!r.pz?40:r.cur/5*100}%"><i></i><b>${VAN}</b></div><span>${r.to.split(',')[0]}</span></div><div class="facts"><div><small>${t('loc')}</small><b>${r.loc}</b></div><div><small>${t('eta')}</small><b>${dte(r.eta)}</b><em>${rel(r)}</em></div><div><small>${t('from')}</small><b>${r.from}</b></div><div><small>${t('to')}</small><b>${r.to}</b></div></div></div>
<div class="two"><div class="card" style="--c:${fg};--cb:${bg}"><h3 style="margin-top:0">${t('hist')}</h3><ol class="tl">${tl}</ol></div>
<div class="card"><h3 style="margin-top:0">${t('det')}</h3><dl class="dl"><div><dt>${t('id')}</dt><dd dir="ltr" style="text-align:start">${esc(q)}</dd></div><div><dt>${t('from')}</dt><dd>${r.from}</dd></div><div><dt>${t('to')}</dt><dd>${r.to}</dd></div><div><dt>${t('loc')}</dt><dd>${r.loc}</dd></div><div><dt>${t('eta')}</dt><dd>${dte(r.eta)}</dd></div><div><dt>${t('pkg')}</dt><dd>${t('pkgv')}</dd></div></dl><div class="acts"><button class="gb dl" onclick="dlr(this)">${I('M12 3v12m0 0l-4-4m4 4l4-4M4 19h16')}${t('dl')}</button><button class="gb" onclick="cp(this)">${t('copy')}</button></div></div></div>${r.cur<5?ntf():''}`}

function footer(){const lk=[['home','home'],['track','track'],['svc','home','services'],['about','home','about'],['contact','home','contact']].map(x=>`<button onclick="nav('${x[0]==='track'?'track':'home'}'${x[2]?`,'${x[2]}'`:''})">${t(x[0])}</button>`).join('');
return `<footer><div class="w"><div class="grid"><div>${logo.replace('color','c')}<p style="max-width:260px">${t('about_h')}</p></div><div><h4>${t('quick')}</h4>${lk}</div><div><h4>${t('langs')}</h4>${L.map((l,i)=>`<button onclick="setLang('${l}')">${NM[i]}</button>`).join('')}</div><div><h4>${t('sup')}</h4><button onclick="nav('home','faq')">${t('help')}</button><button onclick="nav('home','contact')">${t('contact')}</button></div></div><div class="cp">© 2026 Nux Express. ${t('rights')}</div></div></footer>`}

function render(){
document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
$('#app').innerHTML=header()+(view==='home'?home():`<div class="hb ph"><div class="w"><h1>${t('th')}</h1><p class="lead">${t('sub')}</p>${form()}</div></div><div class="tb"><main class="w pg"><div aria-live="polite">${result()}</div></main></div>`)+footer()+careW();
$('#app').className=first?'anim':'';first=0;reveal();
}
const $=s=>document.querySelector(s);let first=1;
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}}),{threshold:.1}):null;
function reveal(){if(!io)return;document.querySelectorAll('.card:not(.sc),.tr,section h2,.ab svg,.flags li,.fq').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)})}
function nav(v,id){view=v;menu=0;if(v==='home'||state!=='ok')state=v==='track'&&state==='ok'?'ok':state;render();id?document.getElementById(id).scrollIntoView():scrollTo(0,0)}
function setLang(l){lang=l;try{localStorage.setItem('nux-lang',l)}catch(e){}render()}
const CONFIG={api:'/api/track',chat:''}; /* set to your tracking endpoint, e.g. https://api.yourdomain.com/track  (GET /{id} -> shipment JSON, 404 if unknown) */
const sha=async x=>{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(x));return[...new Uint8Array(b)].map(v=>v.toString(16).padStart(2,'0')).join('')};
async function lookup(id){if(CONFIG.api){const r=await fetch(CONFIG.api+'/'+encodeURIComponent(id),{headers:{Accept:'application/json'}});return r.ok?r.json():null}
const h=await sha(id);return D[h]?{...D[h],chg:RC[h]}:null}
let fails=0,lock=0;
async function go(e){if(e){e.preventDefault();q=e.target.q.value}
q=q.trim().toUpperCase();if(!q)return;view='track';menu=0;
if(Date.now()<lock){state='lock';res=null;render();scrollTo(0,0);return}
state='load';res=null;render();scrollTo(0,0);
let r=null;try{if(/^NUX-\d{8}$/.test(q))r=await lookup(q)}catch(x){}
await new Promise(z=>setTimeout(z,700));
if(r)fails=0;else if(++fails>=5){lock=Date.now()+60000;fails=0}
res=r;state=r?'ok':'err';render()}
const MAP=["...........######..######........##........#######..........", "..#####.##########.#######.....#############################", "..################.######..#..##############################", "..###.########...####.###....##.############################", ".....##########..######......##.############################", ".......################.....###############################.", ".........##############.....##########...###########.##.....", ".........##########.........##...###..##############.##.....", "..........########..........########.################.......", "............######..........########.##############.........", "..............###..........##########.###.###.######........", "...............#######.....############...##..###.##........", "..................#######...##..#######.......##.##.........", "................#########....###########......#..##.####....", "................#########......#######.........###..###.....", ".................########......######.#.............###.....", "..................######.......######.#..........#######....", "..................#####........######.#..........#######....", "..................#####.........####.............#######....", "...................####...........................#####....#", "...................###................................#...##", "...................##.......................................", "....................#.......................................", "............................................................"];
function mapUri(dot,dop,arc,aop){let c='';MAP.forEach((r,y)=>[...r].forEach((v,x)=>{if(v==='#')c+=`<circle cx="${x*10+5}" cy="${y*10+5}" r="3.3"/>`}));
const a=['M182 70Q245 30 305 52','M182 70Q290 20 397 97','M182 70Q340 0 507 87','M182 70Q190 130 227 177'].map(d=>`<path d="${d}"/>`).join('');
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240"><g fill="${dot}" fill-opacity="${dop}">${c}</g><g fill="none" stroke="${arc}" stroke-opacity="${aop}" stroke-width="1.6" stroke-dasharray="3 5">${a}</g><g fill="${arc}" fill-opacity="${aop+.25}"><circle cx="182" cy="70" r="5"/><circle cx="305" cy="52" r="3.5"/><circle cx="397" cy="97" r="3.5"/><circle cx="507" cy="87" r="3.5"/><circle cx="227" cy="177" r="3.5"/></g></svg>`;
return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`}
document.documentElement.style.setProperty('--map',mapUri('#0b1f4d',.12,'#e0233b',.35));
document.documentElement.style.setProperty('--mapw',mapUri('#ffffff',.24,'#e0233b',.7));
render();
addEventListener('keydown',e=>{if(e.key==='Escape'&&care)cc(0)});addEventListener('click',e=>{if(care&&!e.composedPath().some(n=>n.classList&&n.classList.contains('cc')))cc(0)});
try{const h=decodeURIComponent(location.hash.slice(1)).toUpperCase();if(/^NUX-\d{8}$/.test(h)){q=h;try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}go()}}catch(e){}
addEventListener('scroll',()=>{const h=document.documentElement,m=h.scrollHeight-innerHeight;$('#sp').style.transform='scaleX('+(m>0?scrollY/m:0)+')'},{passive:true});