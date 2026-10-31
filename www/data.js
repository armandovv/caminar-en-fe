// Contenido de la app. Se usa un .js (y no .json) para que funcione al abrir index.html directamente.
// Texto bíblico: Reina-Valera 1909 (dominio público). Fuente: open-bibles (seven1m), archivo spa-rv1909,
// basado en eBible.org. Se conserva la ortografía original de la edición (fué, á, ó...).
// Solo se pasó a mayúscula inicial la primera palabra de cada versículo y se cerró con punto el final.
// Si agregas versículos, cópialos de una fuente de dominio público (no de la RVR1960, que tiene derechos).
window.VERSION_BIBLICA = "Reina-Valera 1909 (dominio público)";
window.LUCHAS = [
  {
    id: "lujuria",
    nombre: "Lujuria",
    icono: "🔥",
    resumen: "Pureza de mirada y de corazón",
    oracion: "Señor, tú conoces esta lucha. Limpia mi corazón, guarda mis ojos y dame fuerzas para huir hoy. No me dejes solo. Amén.",
    accion: "Aléjate físicamente de la situación: cambia de lugar, sal a caminar o llama a alguien de confianza.",
    versiculos: [
      { ref: "Job 31:1", texto: "Hice pacto con mis ojos: ¿cómo pues había yo de pensar en virgen?", contexto: "Job decide de antemano qué hará con su mirada. La victoria empieza antes de la tentación.", aplicacion: "Define hoy tus límites: qué no verás y dónde no estarás. Escríbelos y, si puedes, cuéntaselos a alguien de confianza para que te acompañe en ese compromiso." },
      { ref: "1 Corintios 6:18", texto: "Huid la fornicación. Cualquier otro pecado que el hombre hiciere, fuera del cuerpo es; mas el que fornica, contra su propio cuerpo peca.", contexto: "Pablo no dice 'resiste' sino 'huid': a veces la sabiduría es salir corriendo.", aplicacion: "Si sientes que cedes, no discutas con la tentación: sal de ahí. Cambia de lugar, apaga la pantalla o llama a alguien; huir a tiempo es sabiduría, no debilidad." },
      { ref: "2 Timoteo 2:22", texto: "Huye también los deseos juveniles; y sigue la justicia, la fe, la caridad, la paz, con los que invocan al Señor de puro corazón.", contexto: "No solo huir de algo, también correr hacia algo mejor, y hacerlo acompañado.", aplicacion: "Llena el tiempo vacío con algo bueno: ejercicio, servicio o lectura. Busca también compañía sana, de personas que invocan al Señor de corazón limpio y te ayudan a perseverar." },
      { ref: "Salmo 51:10", texto: "Crea en mí, oh Dios, un corazón limpio; y renueva un espíritu recto dentro de mí.", contexto: "Oración de David tras su caída. Dios restaura a quien se acerca arrepentido.", aplicacion: "Si caíste, vuelve a Dios de inmediato; no te escondas ni esperes sentirte mejor. Pídele con las palabras de David un corazón limpio y levántate, confiando en que él restaura." },
      { ref: "1 Corintios 10:13", texto: "No os ha tomado tentación, sino humana: mas fiel es Dios, que no os dejará ser tentados más de lo que podéis llevar; antes dará también juntamente con la tentación la salida, para que podáis aguantar.", contexto: "Dios promete una salida en cada tentación.", aplicacion: "Pregúntate: ¿cuál es la salida que Dios me está mostrando ahora? Puede ser una llamada, un cambio de lugar o simplemente irte a dormir; tómala antes de que la tentación crezca." },
      { ref: "Mateo 5:28", texto: "Mas yo os digo, que cualquiera que mira á una mujer para codiciarla, ya adulteró con ella en su corazón.", contexto: "Jesús enseña que el pecado no empieza en el acto sino en la mirada que se queda para codiciar. Lo que importa es la intención del corazón.", aplicacion: "Cuida lo primero que entra por tus ojos y tu mente. Cuando llegue un pensamiento, no lo alimentes: apártalo enseguida y vuelve tu atención a algo bueno, antes de que se convierta en deseo." },
      { ref: "Mateo 5:29", texto: "Por tanto, si tu ojo derecho te fuere ocasión de caer, sácalo, y échalo de ti: que mejor te es que se pierda uno de tus miembros, que no que todo tu cuerpo sea echado al infierno.", contexto: "Jesús usa una imagen fuerte: vale la pena quitar de tu vida lo que te hace caer, cueste lo que cueste. No pide dañar el cuerpo, sino ser radical con el pecado.", aplicacion: "Identifica lo que te hace caer (una aplicación, una cuenta, un lugar o una compañía) y quítalo de tu vida esta semana. Bloquea o elimina lo que haga falta, aunque cueste: tu integridad vale más." }
    ]
  },
  {
    id: "pereza",
    nombre: "Pereza",
    icono: "🛌",
    resumen: "Diligencia y constancia",
    oracion: "Señor, sacúdeme la desgana. Dame ánimo para dar el primer paso y constancia para seguir. Amén.",
    accion: "Haz solo los primeros 5 minutos de la tarea que estás evitando.",
    versiculos: [
      { ref: "Proverbios 6:6", texto: "Ve á la hormiga, oh perezoso, mira sus caminos, y sé sabio.", contexto: "La hormiga trabaja sin que nadie la obligue.", aplicacion: "Elige hoy una tarea pequeña y termínala sin que nadie te lo pida. La hormiga no espera órdenes: empieza por lo que te toca y deja que la constancia haga el resto." },
      { ref: "Colosenses 3:23", texto: "Y todo lo que hagáis, hacedlo de ánimo, como al Señor, y no á los hombres.", contexto: "El trabajo cotidiano es una forma de adoración.", aplicacion: "Haz tu próxima tarea como si Dios fuera tu jefe directo. Aunque nadie te vea ni te lo agradezca, trabajar de ánimo y con ganas es una forma de honrar al Señor." },
      { ref: "Proverbios 13:4", texto: "Desea, y nada alcanza el alma del perezoso: mas el alma de los diligentes será engordada.", contexto: "Desear sin actuar no produce nada.", aplicacion: "Convierte un deseo en un paso concreto con hora de inicio. Escribe qué harás, cuándo y por cuánto tiempo, porque desear sin actuar deja el alma con las manos vacías." },
      { ref: "Romanos 12:11", texto: "En el cuidado no perezosos; ardientes en espíritu; sirviendo al Señor.", contexto: "El ánimo espiritual se refleja en la diligencia práctica.", aplicacion: "Empieza por lo más difícil del día, cuando tienes más fuerzas. Pide también a Dios que encienda el ánimo de tu corazón, porque la diligencia se sostiene con fervor y no solo con disciplina." },
      { ref: "Gálatas 6:9", texto: "No nos cansemos, pues, de hacer bien; que á su tiempo segaremos, si no hubiéremos desmayado.", contexto: "La cosecha llega con constancia, no de inmediato.", aplicacion: "No abandones hoy lo que empezaste esta semana. Si te cansas, descansa un poco, pero no te rindas: el fruto llega a su tiempo para quien no desmaya." },
      { ref: "Eclesiastés 10:18", texto: "Por la pereza se cae la techumbre, y por flojedad de manos se llueve la casa.", contexto: "El predicador muestra que el descuido pequeño y repetido termina en daños grandes, como una casa que se deteriora por falta de cuidado.", aplicacion: "Piensa en esa tarea pequeña que llevas aplazando y que ya se está volviendo problema, como una gotera. Arréglala hoy: un poco de esfuerzo ahora te ahorra un daño mayor después." }
    ]
  },
  {
    id: "envidia",
    nombre: "Envidia",
    icono: "👀",
    resumen: "Contentamiento y gratitud",
    oracion: "Señor, sana mi corazón de la comparación. Enséñame a alegrarme con los demás y a confiar en lo que me has dado. Amén.",
    accion: "Bendice a esa persona: ora por ella o felicítala sinceramente hoy.",
    versiculos: [
      { ref: "Proverbios 14:30", texto: "El corazón apacible es vida de las carnes: mas la envidia, pudrimiento de huesos.", contexto: "La envidia daña primero a quien la siente.", aplicacion: "Reconoce que comparar te está robando la paz. Cuando sientas envidia, detente y pregúntate qué hay inquieto en tu corazón; llévaselo a Dios en oración en lugar de alimentarlo." },
      { ref: "Gálatas 5:26", texto: "No seamos codiciosos de vana gloria, irritando los unos á los otros, envidiándose los unos á los otros.", contexto: "Pablo une la envidia con la vanagloria: ambas nacen de mirarse a uno mismo.", aplicacion: "Deja de medirte con otros; mídete con tu llamado. Cada vez que veas el logro de alguien, recuerda que Dios tiene un camino distinto y bueno preparado para ti." },
      { ref: "Santiago 3:16", texto: "Porque donde hay envidia y contención, allí hay perturbación y toda obra perversa.", contexto: "Los celos dañan comunidades y relaciones.", aplicacion: "Piensa qué relación se está enfriando por tus celos y da hoy un paso para repararla: un mensaje sincero, una felicitación o esa conversación que has dejado pendiente." },
      { ref: "Romanos 12:15", texto: "Gozaos con los que se gozan: llorad con los que lloran.", contexto: "El antídoto es la empatía activa.", aplicacion: "Celebra hoy un logro ajeno de forma concreta: escribe un mensaje, felicita en persona u ora por esa persona. Alegrarte con otros le va quitando poder a la envidia." },
      { ref: "Salmo 37:1", texto: "No te impacientes á causa de los malignos, ni tengas envidia de los que hacen iniquidad.", contexto: "David invita a confiar en Dios y no en las apariencias del éxito ajeno.", aplicacion: "Agradece tres cosas que sí tienes y dilas en voz alta. Cuando miras lo que Dios ya te dio, el corazón se aquieta y deja de mirar con ojos de comparación." },
      { ref: "Colosenses 3:14", texto: "Y sobre todas estas cosas vestíos de caridad, la cual es el vínculo de la perfección.", contexto: "Pablo cierra una lista de virtudes con el amor, que une a todas las demás. Donde hay amor, no queda lugar para la envidia ni la rivalidad.", aplicacion: "Cuando sientas envidia, respóndele con amor práctico: desea el bien de esa persona y haz algo por ella. El amor es el camino contrario a la envidia y la sana desde la raíz." }
    ]
  },
  {
    id: "ira",
    nombre: "Ira",
    icono: "💢",
    resumen: "Dominio propio y mansedumbre",
    oracion: "Señor, calma mi corazón antes de que hable. Dame un espíritu manso y palabras que edifiquen. Amén.",
    accion: "Respira profundo, cuenta hasta diez y espera antes de responder.",
    versiculos: [
      { ref: "Santiago 1:19-20", texto: "Por esto, mis amados hermanos, todo hombre sea pronto para oir, tardío para hablar, tardío para airarse: Porque la ira del hombre no obra la justicia de Dios.", contexto: "Santiago propone un orden: primero oír, luego hablar, y la ira al final.", aplicacion: "En la próxima discusión, escucha completo antes de responder. Si sientes que subes de tono, pide un momento y respira: es mejor tardar en hablar que arrepentirte después." },
      { ref: "Efesios 4:26", texto: "Airaos, y no pequéis; no se ponga el sol sobre vuestro enojo.", contexto: "Sentir enojo no es pecado; lo que hacemos con él sí importa.", aplicacion: "Resuelve el conflicto hoy y no lo cargues hasta mañana. Si no puedes hablar con la persona, ora por ella antes de dormir y decide qué conversación tendrás cuando ambos estén tranquilos." },
      { ref: "Proverbios 15:1", texto: "La blanda respuesta quita la ira: mas la palabra áspera hace subir el furor.", contexto: "El tono de tu respuesta puede apagar o encender la pelea.", aplicacion: "Baja el tono de voz en tu próxima respuesta. Una palabra suave no es ceder: es elegir apagar el fuego en lugar de echarle más leña." },
      { ref: "Proverbios 16:32", texto: "Mejor es el que tarde se aira que el fuerte; y el que se enseñorea de su espíritu, que el que toma una ciudad.", contexto: "Dominarse vale más que conquistar.", aplicacion: "Considera una victoria cada vez que te contienes. Al terminar el día, recuerda en qué momento te dominaste y agradécelo a Dios: dominar tu espíritu cuesta más que ganar una discusión." },
      { ref: "Mateo 5:23-24", texto: "Por tanto, si trajeres tu presente al altar, y allí te acordares de que tu hermano tiene algo contra ti, deja allí tu presente delante del altar, y vete, vuelve primero en amistad con tu hermano, y entonces ven y ofrece tu presente.", contexto: "Jesús dice que reconciliarte con tu hermano es tan importante que debes ir primero a arreglarlo antes de presentar tu ofrenda a Dios.", aplicacion: "Piensa si hay alguien con quien tengas una ofensa pendiente. Antes de orar o servir, da el primer paso: llámalo, pide perdón o ve a hablar con él. La paz con otros abre la puerta a la paz con Dios." }
    ]
  },
  {
    id: "orgullo",
    nombre: "Orgullo",
    icono: "👑",
    resumen: "Humildad y dependencia de Dios",
    oracion: "Señor, quiebra mi orgullo y enséñame a depender de ti. Dame un corazón humilde y dispuesto a servir. Amén.",
    accion: "Reconoce un error ante alguien o sirve en algo que nadie vea.",
    versiculos: [
      { ref: "Proverbios 16:18", texto: "Antes del quebrantamiento es la soberbia; y antes de la caída la altivez de espíritu.", contexto: "El orgullo suele preceder a la caída.", aplicacion: "Pide a alguien de confianza que te señale tus puntos ciegos y escúchalo sin defenderte. Dejar que otros te corrijan es una forma de evitar la caída antes de que llegue." },
      { ref: "Santiago 4:6", texto: "Mas él da mayor gracia. Por esto dice: Dios resiste á los soberbios, y da gracia á los humildes.", contexto: "El orgullo nos pone en contra de Dios; la humildad abre la puerta a su gracia.", aplicacion: "Pide perdón hoy donde has sido terco. Reconocer un error no te empequeñece: te pone justo en el lugar donde Dios derrama su gracia." },
      { ref: "Filipenses 2:3", texto: "Nada hagáis por contienda ó por vanagloria; antes bien en humildad, estimándoos inferiores los unos á los otros.", contexto: "Pablo presenta a Cristo como modelo de humildad.", aplicacion: "Prioriza hoy una necesidad ajena sobre la tuya. Pregúntale a alguien cómo está y escucha de verdad, sin esperar tu turno para hablar de ti." },
      { ref: "1 Pedro 5:6", texto: "Humillaos pues bajo la poderosa mano de Dios, para que él os ensalce cuando fuere tiempo.", contexto: "Dios levanta a su tiempo; no hace falta autopromoverse.", aplicacion: "Suelta hoy la necesidad de que te reconozcan. Haz un servicio discreto que nadie vea y deja en manos de Dios cuándo y cómo te levantará, a su tiempo." },
      { ref: "Mateo 11:29", texto: "Llevad mi yugo sobre vosotros, y aprended de mí, que soy manso y humilde de corazón; y hallaréis descanso para vuestras almas.", contexto: "Jesús se presenta como manso y humilde de corazón e invita a aprender de él. Su humildad es el modelo, no una muestra de debilidad.", aplicacion: "Aprende de Jesús esta semana: ante una situación en la que querrías imponerte, elige la mansedumbre. Pídele un corazón como el suyo; en la humildad hay descanso para el alma." }
    ]
  },
  {
    id: "avaricia",
    nombre: "Avaricia",
    icono: "💰",
    resumen: "Contentamiento y generosidad",
    oracion: "Señor, enséñame a estar contento con lo que tengo y a ser generoso. Que mi corazón esté en ti y no en las riquezas. Amén.",
    accion: "Da algo hoy, aunque sea pequeño: dinero, tiempo o un favor.",
    versiculos: [
      { ref: "1 Timoteo 6:10", texto: "Porque el amor del dinero es la raíz de todos los males: el cual codiciando algunos, se descaminaron de la fe, y fueron traspasados de muchos dolores.", contexto: "El problema no es el dinero, sino amarlo.", aplicacion: "Pregúntate qué decisión reciente tomaste por dinero y no por principios. Si hay algo que corregir, hazlo hoy: el amor al dinero se vence cortando sus pequeñas concesiones." },
      { ref: "Hebreos 13:5", texto: "Sean las costumbres vuestras sin avaricia; contentos de lo presente; porque él dijo: No te desampararé, ni te dejaré.", contexto: "El contentamiento se apoya en la presencia de Dios, no en las posesiones.", aplicacion: "Haz una lista de lo que ya tienes y agradécelo en oración. El contentamiento crece cuando recuerdas que Dios mismo prometió no dejarte ni desampararte." },
      { ref: "Lucas 12:15", texto: "Y díjoles: Mirad, y guardaos de toda avaricia; porque la vida del hombre no consiste en la abundancia de los bienes que posee.", contexto: "Jesús advierte antes de contar la parábola del rico insensato.", aplicacion: "Revisa una compra reciente: ¿era una necesidad o un deseo? Antes de tu próxima compra, espera 24 horas y pregúntate si de verdad la necesitas o si solo quieres llenar un vacío." },
      { ref: "Mateo 6:24", texto: "Ninguno puede servir á dos señores; porque ó aborrecerá al uno y amará al otro, ó se llegará al uno y menospreciará al otro: no podéis servir á Dios y á Mammón.", contexto: "Jesús plantea que hay que elegir a quién servir.", aplicacion: "Decide hoy cuánto darás y a quién, antes de gastar. Poner a Dios primero en tus finanzas es una forma práctica de decirle quién es tu verdadero Señor." }
    ]
  },
  {
    id: "gula",
    nombre: "Gula",
    icono: "🍽️",
    resumen: "Templanza y dominio propio",
    oracion: "Señor, dame dominio propio para comer, beber y disfrutar con medida y gratitud. Que nada me domine sino tú. Amén.",
    accion: "Espera 10 minutos antes de repetir o de ceder al antojo, y bebe un vaso de agua.",
    versiculos: [
      { ref: "1 Corintios 10:31", texto: "Si pues coméis, ó bebéis, ó hacéis otra cosa, hacedlo todo á gloria de Dios.", contexto: "Hasta lo cotidiano puede hacerse para Dios.", aplicacion: "Agradece antes de comer y come con atención, sin prisa ni pantallas. Disfrutar la comida con gratitud te ayuda a notar cuándo ya es suficiente." },
      { ref: "1 Corintios 6:12", texto: "Todas las cosas me son lícitas, mas no todas convienen: todas las cosas me son lícitas, mas yo no me meteré debajo de potestad de nada.", contexto: "La pregunta no es solo si algo es permitido, sino si me domina.", aplicacion: "Identifica qué cosa te está dominando y da un paso hoy para recuperar el control: reducir una porción, no tener la tentación en casa o pedir ayuda a alguien." },
      { ref: "Proverbios 23:20-21", texto: "No estés con los bebedores de vino, ni con los comedores de carne: Porque el bebedor y el comilón empobrecerán: y el sueño hará vestir vestidos rotos.", contexto: "El exceso tiene consecuencias, y también influyen las compañías.", aplicacion: "Revisa qué entornos te llevan a excederte. Si hay lugares o compañías que te empujan a comer o beber de más, planea cómo evitarlos o llega con un límite ya decidido." }
    ]
  },
  {
    id: "perdon",
    nombre: "Falta de perdón",
    icono: "🤝",
    resumen: "Perdonar como Dios te perdonó",
    oracion: "Señor, tú me has perdonado mucho. Dame un corazón dispuesto a soltar esta ofensa y sana la amargura que hay en mí. Amén.",
    accion: "Escribe el nombre de quien te hirió y ora por esa persona, aunque sea una frase corta.",
    versiculos: [
      { ref: "Efesios 4:32", texto: "Antes sed los unos con los otros benignos, misericordiosos, perdonándoos los unos á los otros, como también Dios os perdonó en Cristo.", contexto: "Pablo pone como modelo el perdón que Dios nos dio, no lo que el otro merezca.", aplicacion: "Recuerda cuánto te ha perdonado Dios antes de pensar en lo que te deben. Ora por quien te ofendió y pide verlo como Dios lo ve: alguien que también necesita misericordia." },
      { ref: "Colosenses 3:13", texto: "Sufriéndoos los unos á los otros, y perdonándoos los unos á los otros si alguno tuviere queja del otro: de la manera que Cristo os perdonó, así también hacedlo vosotros.", contexto: "El perdón es una decisión que se toma incluso cuando hay una queja real.", aplicacion: "Decide perdonar hoy, aunque los sentimientos tarden en acompañarte. Perdonar es una decisión de la voluntad; las emociones suelen sanar después, con tiempo y oración." },
      { ref: "Mateo 6:14-15", texto: "Porque si perdonareis á los hombres sus ofensas, os perdonará también á vosotros vuestro Padre celestial. Mas si no perdonareis á los hombres sus ofensas, tampoco vuestro Padre os perdonará vuestras ofensas.", contexto: "Jesús lo dice justo después del Padrenuestro: el perdón recibido y el perdón dado van unidos.", aplicacion: "Pide a Dios fuerzas para perdonar lo que tú solo no puedes. Nómbrale la ofensa en oración, entrégasela y pídele que te ayude a soltar la deuda que guardas." },
      { ref: "Mateo 18:21-22", texto: "Entonces Pedro, llegándose á él, dijo: Señor, ¿cuántas veces perdonaré á mi hermano que pecare contra mí? ¿hasta siete? Jesús le dice: No te digo hasta siete, mas aun hasta setenta veces siete.", contexto: "Jesús responde que el perdón no se lleva en cuentas.", aplicacion: "Si la herida vuelve a doler, perdona de nuevo: es un proceso, no un solo acto. Cada vez que el recuerdo regrese, repite tu decisión de soltar, sin culparte por volver a sentirlo." },
      { ref: "Hebreos 12:15", texto: "Mirando bien que ninguno se aparte de la gracia de Dios, que ninguna raíz de amargura brotando os impida, y por ella muchos sean contaminados.", contexto: "La amargura es una raíz que crece en silencio y termina dañando a otros.", aplicacion: "Arranca la amargura temprano: habla con Dios de lo que sientes. Ponle nombre a esa raíz, confiésala y, si es posible, busca a alguien de confianza que te ayude a sanar." }
    ]
  },
  {
    id: "inseguridad",
    nombre: "Inseguridad",
    icono: "🪞",
    resumen: "Tu identidad en Cristo",
    oracion: "Señor, ayúdame a verme como tú me ves. Que mi valor no dependa de la opinión de los demás sino de lo que tú dices de mí. Amén.",
    accion: "Escribe tres cosas que Dios dice de ti en su Palabra y léelas en voz alta.",
    versiculos: [
      { ref: "Salmo 139:14", texto: "Te alabaré; porque formidables, maravillosas son tus obras: estoy maravillado, y mi alma lo conoce mucho.", contexto: "David reconoce que fue creado con cuidado y propósito.", aplicacion: "Agradece a Dios por algo de ti que sueles criticar. Dilo en voz alta: fuiste hecho con cuidado y propósito, y tus rasgos no son un error." },
      { ref: "Efesios 2:10", texto: "Porque somos hechura suya, criados en Cristo Jesús para buenas obras, las cuales Dios preparó para que anduviésemos en ellas.", contexto: "Dios te hizo con un propósito antes de que tú hicieras algo.", aplicacion: "Tu valor no se gana, ya te fue dado; actúa desde ahí. Pregúntate qué buena obra preparó Dios para ti hoy y empieza con algo pequeño, sin esperar a sentirte listo." },
      { ref: "1 Pedro 2:9", texto: "Mas vosotros sois linaje escogido, real sacerdocio, gente santa, pueblo adquirido, para que anunciéis las virtudes de aquel que os ha llamado de las tinieblas á su luz admirable.", contexto: "Pedro describe la identidad del creyente: escogido y pertenecer a Dios.", aplicacion: "Cuando te compares, recuerda a quién perteneces. Escribe tres cosas que Dios dice de ti en su Palabra y léelas cuando vuelvan los pensamientos de duda." },
      { ref: "2 Corintios 12:9", texto: "Y me ha dicho: Bástate mi gracia; porque mi potencia en la flaqueza se perfecciona. Por tanto, de buena gana me gloriaré más bien en mis flaquezas, porque habite en mí la potencia de Cristo.", contexto: "Pablo aprende que sus debilidades no limitan a Dios.", aplicacion: "Entrega a Dios eso que te avergüenza de ti. Su poder se muestra justo ahí, así que en lugar de esconderlo, pídele que lo use para su gloria." },
      { ref: "Filipenses 4:13", texto: "Todo lo puedo en Cristo que me fortalece.", contexto: "Pablo escribe desde la prisión: su fuerza no venía de sus circunstancias.", aplicacion: "Da hoy un paso que te da miedo, confiando en esa fuerza. No necesitas sentirte seguro para avanzar: basta con que Cristo te sostenga mientras caminas." }
    ]
  },
  {
    id: "temor",
    nombre: "Temor",
    icono: "🌑",
    resumen: "Valentía porque Dios está contigo",
    oracion: "Señor, tú dices que no tema porque estás conmigo. Calma mi corazón y dame valor para dar el siguiente paso. Amén.",
    accion: "Respira hondo, di en voz alta \"Dios está conmigo\" y da un solo paso pequeño hacia lo que temes.",
    versiculos: [
      { ref: "Isaías 41:10", texto: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te esfuerzo: siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.", contexto: "Dios promete su presencia y su ayuda, no la ausencia de problemas.", aplicacion: "Nombra tu miedo a Dios y pídele que te sostenga en eso. Repite la promesa: él está contigo, te ayuda y te sustenta, aunque el problema siga ahí." },
      { ref: "2 Timoteo 1:7", texto: "Porque no nos ha dado Dios el espíritu de temor, sino el de fortaleza, y de amor, y de templanza.", contexto: "Pablo anima a Timoteo, que era tímido, a no avergonzarse.", aplicacion: "Recuerda que el miedo no viene de Dios; la fortaleza sí. Cuando sientas temor, pídele fortaleza, amor y templanza, y da un paso pequeño en la dirección correcta." },
      { ref: "Josué 1:9", texto: "Mira que te mando que te esfuerces y seas valiente: no temas ni desmayes, porque Jehová tu Dios será contigo en donde quiera que fueres.", contexto: "Dios habla a Josué ante una tarea enorme.", aplicacion: "Valentía no es no sentir miedo, es avanzar sabiendo que Dios va contigo. Elige una acción pendiente que has estado evitando y hazla hoy, repitiendo esta promesa." },
      { ref: "Salmo 23:4", texto: "Aunque ande en valle de sombra de muerte, no temeré mal alguno; porque tú estarás conmigo: tu vara y tu cayado me infundirán aliento.", contexto: "El pastor acompaña a la oveja precisamente en los valles oscuros.", aplicacion: "En tu momento más oscuro, recuerda que no caminas solo. Lee este salmo en voz alta y deja que la imagen del pastor te devuelva la calma." },
      { ref: "Salmo 56:3", texto: "En el día que temo, yo en ti confío.", contexto: "David lo escribe cuando lo perseguían: admite su miedo y confía igual.", aplicacion: "Repite esta frase corta cada vez que sientas miedo: «En el día que temo, yo en ti confío». Dila despacio y respira hasta que el corazón se aquiete." }
    ]
  },
  {
    id: "ansiedad",
    nombre: "Ansiedad",
    icono: "🌀",
    resumen: "Paz que guarda el corazón",
    oracion: "Señor, entrego en tus manos esto que me preocupa. Dame tu paz y ayúdame a vivir el día de hoy sin cargar el de mañana. Amén.",
    accion: "Escribe lo que te preocupa, ora por cada cosa y luego respira lento cuatro veces.",
    versiculos: [
      { ref: "Filipenses 4:6-7", texto: "Por nada estéis afanosos; sino sean notorias vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias. Y la paz de Dios, que sobrepuja todo entendimiento, guardará vuestros corazones y vuestros entendimientos en Cristo Jesús.", contexto: "Pablo da una receta: convertir la preocupación en oración con gratitud.", aplicacion: "Cambia hoy una preocupación por una oración concreta. Escríbela, preséntasela a Dios con gratitud y deja que su paz guarde tu corazón y tus pensamientos." },
      { ref: "1 Pedro 5:7", texto: "Echando toda vuestra solicitud en él, porque él tiene cuidado de vosotros.", contexto: "Dios invita a soltar la carga, no a llevarla solo.", aplicacion: "Imagina que entregas tu preocupación en sus manos y no la recoges de nuevo. Cada vez que regrese, repite: él tiene cuidado de mí, y no tengo que cargarlo todo." },
      { ref: "Mateo 6:34", texto: "Así que, no os congojéis por el día de mañana; que el día de mañana traerá su fatiga: basta al día su afán.", contexto: "Jesús enseña a vivir un día a la vez.", aplicacion: "Haz hoy solo lo que te corresponde hoy. Si te sorprendes pensando en el mañana, anota lo pendiente en un papel y vuelve tu atención a la tarea presente." },
      { ref: "Salmo 94:19", texto: "En la multitud de mis pensamientos dentro de mí, tus consolaciones alegraban mi alma.", contexto: "El salmista también tuvo la mente llena de pensamientos y halló consuelo en Dios.", aplicacion: "Cuando la mente no pare, léelo despacio y ora. Pídele a Dios que sus consolaciones calmen tus pensamientos y que te muestre una cosa que puedas soltar ahora." }
    ]
  },
  {
    id: "desanimo",
    nombre: "Desánimo",
    icono: "🌧️",
    resumen: "Fuerzas nuevas en Dios",
    oracion: "Señor, estoy cansado. Renueva mis fuerzas y mi esperanza. Ayúdame a recordar que tú sigues siendo fiel. Amén.",
    accion: "Haz una pausa, agradece por tres cosas del día y da un solo paso pequeño en lo pendiente.",
    versiculos: [
      { ref: "Salmo 42:11", texto: "¿Por qué te abates, oh alma mía, y por qué te conturbas en mí? Espera á Dios; porque aun le tengo de alabar; es él salvamento delante de mí, y el Dios mío.", contexto: "El salmista se habla a sí mismo y dirige su esperanza hacia Dios.", aplicacion: "Háblale a tu alma y recuérdale en quién esperas: di en voz alta «Espera en Dios». Luego da un paso pequeño, aunque no tengas ganas." },
      { ref: "Isaías 40:31", texto: "Mas los que esperan á Jehová tendrán nuevas fuerzas; levantarán las alas como águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", contexto: "Dios renueva a quienes esperan en él, incluso cuando están agotados.", aplicacion: "Descansa hoy sin culpa y vuelve a empezar mañana. Pide a Dios nuevas fuerzas y date permiso de avanzar despacio: él renueva a quienes esperan en él." },
      { ref: "Lamentaciones 3:22-23", texto: "Es por la misericordia de Jehová que no somos consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad.", contexto: "Escrito en medio de una tragedia, el autor recuerda que Dios no cambia.", aplicacion: "Mañana trae misericordias nuevas, aunque hoy haya sido difícil. Al despertar, recuerda que cada día es un comienzo nuevo y que su fidelidad no depende de tu ánimo." },
      { ref: "Mateo 11:28", texto: "Venid á mí todos los que estáis trabajados y cargados, que yo os haré descansar.", contexto: "Jesús invita a los agotados a acercarse, no a esforzarse más.", aplicacion: "Llévale tu cansancio en oración antes de seguir. Dile con tus palabras lo que te pesa y descansa un momento antes de volver a la tarea." },
      { ref: "Salmo 40:17", texto: "Aunque afligido yo y necesitado, Jehová pensará de mí: mi ayuda y mi libertador eres tú; Dios mío, no te tardes.", contexto: "David reconoce que está afligido y necesitado, pero confía en que Dios piensa en él y viene en su ayuda.", aplicacion: "Reconoce delante de Dios tu necesidad sin disfrazarla: dile con sinceridad que estás cansado o sin fuerzas. Recuerda que él piensa en ti y es tu ayuda, y cuéntale también a alguien de confianza cómo estás." }
    ]
  }
];
