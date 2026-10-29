// Contenido de la app. Se usa un .js (y no .json) para que funcione al abrir index.html directamente.
// IMPORTANTE: verifica cada texto contra la versión bíblica que vayas a usar y confirma su licencia
// antes de publicar. Aquí los textos están como referencia para el prototipo.
window.LUCHAS = [
  {
    id: "lujuria",
    nombre: "Lujuria",
    icono: "🔥",
    resumen: "Pureza de mirada y de corazón",
    oracion: "Señor, tú conoces esta lucha. Limpia mi corazón, guarda mis ojos y dame fuerzas para huir hoy. No me dejes solo. Amén.",
    accion: "Aléjate físicamente de la situación: cambia de lugar, sal a caminar o llama a alguien de confianza.",
    versiculos: [
      { ref: "Job 31:1", texto: "Hice pacto con mis ojos; ¿cómo, pues, había yo de fijar la mirada en una virgen?", contexto: "Job decide de antemano qué hará con su mirada. La victoria empieza antes de la tentación.", aplicacion: "Define hoy tus límites: qué no verás y dónde no estarás." },
      { ref: "1 Corintios 6:18", texto: "Huid de la fornicación. Cualquier otro pecado que el hombre cometa, está fuera del cuerpo; mas el que fornica, contra su propio cuerpo peca.", contexto: "Pablo no dice 'resiste' sino 'huid': a veces la sabiduría es salir corriendo.", aplicacion: "Si sientes que cedes, no discutas con la tentación: sal de ahí." },
      { ref: "2 Timoteo 2:22", texto: "Huye también de las pasiones juveniles, y sigue la justicia, la fe, el amor y la paz, con los que de corazón limpio invocan al Señor.", contexto: "No solo huir de algo, también correr hacia algo mejor, y hacerlo acompañado.", aplicacion: "Llena el tiempo vacío con algo bueno y busca compañía sana." },
      { ref: "Salmo 51:10", texto: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.", contexto: "Oración de David tras su caída. Dios restaura a quien se acerca arrepentido.", aplicacion: "Si caíste, vuelve a Dios de inmediato; no te escondas." },
      { ref: "1 Corintios 10:13", texto: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar.", contexto: "Dios promete una salida en cada tentación.", aplicacion: "Pregúntate: ¿cuál es la salida que Dios me está mostrando ahora?" }
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
      { ref: "Proverbios 6:6", texto: "Ve a la hormiga, oh perezoso, mira sus caminos, y sé sabio.", contexto: "La hormiga trabaja sin que nadie la obligue.", aplicacion: "Elige hoy una tarea pequeña y termínala sin que nadie te lo pida." },
      { ref: "Colosenses 3:23", texto: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.", contexto: "El trabajo cotidiano es una forma de adoración.", aplicacion: "Haz tu próxima tarea como si Dios fuera tu jefe directo." },
      { ref: "Proverbios 13:4", texto: "El alma del perezoso desea, y nada alcanza; mas el alma de los diligentes será prosperada.", contexto: "Desear sin actuar no produce nada.", aplicacion: "Convierte un deseo en un paso concreto con hora de inicio." },
      { ref: "Romanos 12:11", texto: "En lo que requiere diligencia, no perezosos; fervientes en espíritu, sirviendo al Señor.", contexto: "El ánimo espiritual se refleja en la diligencia práctica.", aplicacion: "Empieza por lo más difícil del día." },
      { ref: "Gálatas 6:9", texto: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.", contexto: "La cosecha llega con constancia, no de inmediato.", aplicacion: "No abandones hoy lo que empezaste esta semana." }
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
      { ref: "Proverbios 14:30", texto: "El corazón apacible es vida de la carne; mas la envidia es carcoma de los huesos.", contexto: "La envidia daña primero a quien la siente.", aplicacion: "Reconoce que comparar te está robando la paz." },
      { ref: "Gálatas 5:26", texto: "No seamos vanagloriosos, irritándonos unos a otros, envidiándonos unos a otros.", contexto: "Pablo une la envidia con la vanagloria: ambas nacen de mirarse a uno mismo.", aplicacion: "Deja de medirte con otros; mídete con tu llamado." },
      { ref: "Santiago 3:16", texto: "Porque donde hay celos y contención, allí hay perturbación y toda obra perversa.", contexto: "Los celos dañan comunidades y relaciones.", aplicacion: "Piensa qué relación se está enfriando por tus celos." },
      { ref: "Romanos 12:15", texto: "Gozaos con los que se gozan; llorad con los que lloran.", contexto: "El antídoto es la empatía activa.", aplicacion: "Celebra hoy un logro ajeno de forma concreta." },
      { ref: "Salmo 37:1", texto: "No te impacientes a causa de los malignos, ni tengas envidia de los que hacen iniquidad.", contexto: "David invita a confiar en Dios y no en las apariencias del éxito ajeno.", aplicacion: "Agradece tres cosas que sí tienes." }
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
      { ref: "Santiago 1:19-20", texto: "Por esto, mis amados hermanos, todo hombre sea pronto para oír, tardo para hablar, tardo para airarse; porque la ira del hombre no obra la justicia de Dios.", contexto: "Santiago propone un orden: primero oír, luego hablar, y la ira al final.", aplicacion: "En la próxima discusión, escucha completo antes de responder." },
      { ref: "Efesios 4:26", texto: "Airaos, pero no pequéis; no se ponga el sol sobre vuestro enojo.", contexto: "Sentir enojo no es pecado; lo que hacemos con él sí importa.", aplicacion: "Resuelve el conflicto hoy, no lo cargues." },
      { ref: "Proverbios 15:1", texto: "La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor.", contexto: "El tono de tu respuesta puede apagar o encender la pelea.", aplicacion: "Baja el tono de voz en tu próxima respuesta." },
      { ref: "Proverbios 16:32", texto: "Mejor es el que tarda en airarse que el fuerte; y el que domina su espíritu, que el que toma una ciudad.", contexto: "Dominarse vale más que conquistar.", aplicacion: "Considera una victoria cada vez que te contienes." }
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
      { ref: "Proverbios 16:18", texto: "Antes del quebrantamiento es la soberbia, y antes de la caída la altivez de espíritu.", contexto: "El orgullo suele preceder a la caída.", aplicacion: "Pide a alguien de confianza que te señale tus puntos ciegos." },
      { ref: "Santiago 4:6", texto: "Dios resiste a los soberbios, y da gracia a los humildes.", contexto: "El orgullo nos pone en contra de Dios; la humildad abre la puerta a su gracia.", aplicacion: "Pide perdón hoy donde has sido terco." },
      { ref: "Filipenses 2:3", texto: "Nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a sí mismo.", contexto: "Pablo presenta a Cristo como modelo de humildad.", aplicacion: "Prioriza hoy una necesidad ajena sobre la tuya." },
      { ref: "1 Pedro 5:6", texto: "Humillaos, pues, bajo la poderosa mano de Dios, para que él os exalte cuando fuere tiempo.", contexto: "Dios levanta a su tiempo; no hace falta autopromoverse.", aplicacion: "Suelta hoy la necesidad de que te reconozcan." }
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
      { ref: "1 Timoteo 6:10", texto: "Porque raíz de todos los males es el amor al dinero, el cual codiciando algunos, se extraviaron de la fe, y fueron traspasados de muchos dolores.", contexto: "El problema no es el dinero, sino amarlo.", aplicacion: "Pregúntate qué decisión reciente tomaste por dinero y no por principios." },
      { ref: "Hebreos 13:5", texto: "Sean vuestras costumbres sin avaricia, contentos con lo que tenéis ahora; porque él dijo: No te desampararé, ni te dejaré.", contexto: "El contentamiento se apoya en la presencia de Dios, no en las posesiones.", aplicacion: "Haz una lista de lo que ya tienes y agradécelo." },
      { ref: "Lucas 12:15", texto: "Mirad, y guardaos de toda avaricia; porque la vida del hombre no consiste en la abundancia de los bienes que posee.", contexto: "Jesús advierte antes de contar la parábola del rico insensato.", aplicacion: "Revisa una compra reciente: ¿necesidad o deseo?" },
      { ref: "Mateo 6:24", texto: "Ninguno puede servir a dos señores; porque o aborrecerá al uno y amará al otro, o estimará al uno y menospreciará al otro. No podéis servir a Dios y a las riquezas.", contexto: "Jesús plantea que hay que elegir a quién servir.", aplicacion: "Decide hoy cuánto darás y a quién, antes de gastar." }
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
      { ref: "1 Corintios 10:31", texto: "Si, pues, coméis o bebéis, o hacéis otra cosa, hacedlo todo para la gloria de Dios.", contexto: "Hasta lo cotidiano puede hacerse para Dios.", aplicacion: "Agradece antes de comer y come con atención." },
      { ref: "1 Corintios 6:12", texto: "Todas las cosas me son lícitas, mas no todas convienen; todas las cosas me son lícitas, mas yo no me dejaré dominar de ninguna.", contexto: "La pregunta no es solo si algo es permitido, sino si me domina.", aplicacion: "Identifica qué cosa te está dominando y da un paso para recuperar el control." },
      { ref: "Proverbios 23:20-21", texto: "No estés con los bebedores de vino, ni con los comilones de carne; porque el bebedor y el comilón empobrecerán, y el sueño hará vestir vestidos rotos.", contexto: "El exceso tiene consecuencias, y también influyen las compañías.", aplicacion: "Revisa qué entornos te llevan a excederte." }
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
      { ref: "Efesios 4:32", texto: "Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo.", contexto: "Pablo pone como modelo el perdón que Dios nos dio, no lo que el otro merezca.", aplicacion: "Recuerda cuánto te ha perdonado Dios antes de pensar en lo que te deben." },
      { ref: "Colosenses 3:13", texto: "Soportándoos unos a otros, y perdonándoos unos a otros si alguno tuviere queja contra otro. De la manera que Cristo os perdonó, así también hacedlo vosotros.", contexto: "El perdón es una decisión que se toma incluso cuando hay una queja real.", aplicacion: "Decide perdonar hoy, aunque los sentimientos tarden en acompañarte." },
      { ref: "Mateo 6:14-15", texto: "Porque si perdonáis a los hombres sus ofensas, os perdonará también a vosotros vuestro Padre celestial; mas si no perdonáis a los hombres sus ofensas, tampoco vuestro Padre os perdonará vuestras ofensas.", contexto: "Jesús lo dice justo después del Padrenuestro: el perdón recibido y el perdón dado van unidos.", aplicacion: "Pide a Dios fuerzas para perdonar lo que tú solo no puedes." },
      { ref: "Mateo 18:21-22", texto: "Entonces se le acercó Pedro y le dijo: Señor, ¿cuántas veces perdonaré a mi hermano que peque contra mí? ¿Hasta siete? Jesús le dijo: No te digo hasta siete, sino aun hasta setenta veces siete.", contexto: "Jesús responde que el perdón no se lleva en cuentas.", aplicacion: "Si la herida vuelve a doler, perdona de nuevo; es un proceso, no un solo acto." },
      { ref: "Hebreos 12:15", texto: "Mirad bien, no sea que alguno deje de alcanzar la gracia de Dios; que brotando alguna raíz de amargura, os impida, y por ella muchos sean contaminados.", contexto: "La amargura es una raíz que crece en silencio y termina dañando a otros.", aplicacion: "Arranca la amargura temprano: habla con Dios de lo que sientes." }
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
      { ref: "Salmo 139:14", texto: "Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien.", contexto: "David reconoce que fue creado con cuidado y propósito.", aplicacion: "Agradece a Dios por algo de ti que sueles criticar." },
      { ref: "Efesios 2:10", texto: "Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas.", contexto: "Dios te hizo con un propósito antes de que tú hicieras algo.", aplicacion: "Tu valor no se gana, ya te fue dado; actúa desde ahí." },
      { ref: "1 Pedro 2:9", texto: "Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable.", contexto: "Pedro describe la identidad del creyente: escogido y pertenecer a Dios.", aplicacion: "Cuando te compares, recuerda a quién perteneces." },
      { ref: "2 Corintios 12:9", texto: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad.", contexto: "Pablo aprende que sus debilidades no limitan a Dios.", aplicacion: "Entrega a Dios eso que te avergüenza de ti." },
      { ref: "Filipenses 4:13", texto: "Todo lo puedo en Cristo que me fortalece.", contexto: "Pablo escribe desde la prisión: su fuerza no venía de sus circunstancias.", aplicacion: "Da hoy un paso que te da miedo, confiando en esa fuerza." }
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
      { ref: "Isaías 41:10", texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.", contexto: "Dios promete su presencia y su ayuda, no la ausencia de problemas.", aplicacion: "Nombra tu miedo a Dios y pídele que te sostenga en eso." },
      { ref: "2 Timoteo 1:7", texto: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.", contexto: "Pablo anima a Timoteo, que era tímido, a no avergonzarse.", aplicacion: "Recuerda que el miedo no viene de Dios; el poder sí." },
      { ref: "Josué 1:9", texto: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.", contexto: "Dios habla a Josué ante una tarea enorme.", aplicacion: "Valentía no es no sentir miedo, es avanzar sabiendo que Dios va contigo." },
      { ref: "Salmo 23:4", texto: "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento.", contexto: "El pastor acompaña a la oveja precisamente en los valles oscuros.", aplicacion: "En tu momento más oscuro, recuerda que no caminas solo." },
      { ref: "Salmo 56:3", texto: "En el día que temo, yo en ti confío.", contexto: "David lo escribe cuando lo perseguían: admite su miedo y confía igual.", aplicacion: "Repite esta frase corta cada vez que sientas miedo." }
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
      { ref: "Filipenses 4:6-7", texto: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús.", contexto: "Pablo da una receta: convertir la preocupación en oración con gratitud.", aplicacion: "Cambia hoy una preocupación por una oración concreta." },
      { ref: "1 Pedro 5:7", texto: "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.", contexto: "Dios invita a soltar la carga, no a llevarla solo.", aplicacion: "Imagina que entregas tu preocupación en sus manos y no la recoges de nuevo." },
      { ref: "Mateo 6:34", texto: "Así que, no os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal.", contexto: "Jesús enseña a vivir un día a la vez.", aplicacion: "Haz hoy solo lo que te corresponde hoy." },
      { ref: "Salmo 94:19", texto: "En la multitud de mis pensamientos dentro de mí, tus consolaciones alegraban mi alma.", contexto: "El salmista también tuvo la mente llena de pensamientos y halló consuelo en Dios.", aplicacion: "Cuando la mente no pare, léelo despacio y ora." }
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
      { ref: "Salmo 42:11", texto: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, él es la salvación mía y el Dios mío.", contexto: "El salmista se habla a sí mismo y dirige su esperanza hacia Dios.", aplicacion: "Háblale a tu alma: recuérdale en quién esperas." },
      { ref: "Isaías 40:31", texto: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", contexto: "Dios renueva a quienes esperan en él, incluso cuando están agotados.", aplicacion: "Descansa hoy sin culpa y vuelve a empezar mañana." },
      { ref: "Lamentaciones 3:22-23", texto: "Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad.", contexto: "Escrito en medio de una tragedia, el autor recuerda que Dios no cambia.", aplicacion: "Mañana trae misericordias nuevas, aunque hoy haya sido difícil." },
      { ref: "Mateo 11:28", texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", contexto: "Jesús invita a los agotados a acercarse, no a esforzarse más.", aplicacion: "Llévale tu cansancio en oración antes de seguir." }
    ]
  }
];
