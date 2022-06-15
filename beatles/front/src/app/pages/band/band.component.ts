import { bandaInterface } from 'src/app/interface/banda.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  public banda1: bandaInterface;
  public banda2: bandaInterface;
  public banda3: bandaInterface;
  public banda4: bandaInterface

  constructor() { 

    this.banda1 = {

      nombre: "John Lennon",
      vida: "Liverpool, 9 de octubre de 1940 - Nueva York, 8 de diciembre de 1980",
      resumen: "La biografía de John Lennon cuenta que con apenas quince años se unió a unos amigos llamados Ivan Vaughan, Eric Griffiths, Pete Shotton, Len Garry, Colin Hanton y Rod Davis. Juntos montaron un grupo llamado <<The Quarrymen>>, con el que tocaban en fiestas de su barrio. En este pequeño grupo Lennon cantaba y tocaba la guitarra. Interpretaban temas de grupos británicos de la época y versiones que hacían de otros artistas. Cursó estudios de Bellas Artes a instancias de su tía Mimi, a pesar de que a él lo que más le gustaba era recorrer los barrios de la ciudad buscando locales donde tocar temas de rock and roll. Pero como su tía no estaba muy segura de que tuviera un futuro muy con el rock, le instó a seguir estudios de diseño publicitario. Tocando en una actuación de los Quarrymen conoció a un joven llamado Paul McCartney, quien se acercó con su guitarra al grupo para acompañarles. Enseguida congenió con Lennon y se hicieron buenos amigos. Dada la destreza de Paul con la guitarra y sus conocimientos musicales, John le ofreció participar en la banda. Este aceptó y se trajo otro amigo que también tocaba la guitarra, un tal George Harrison. Con diecisiete años recibió la noticia de que su madre había muerto atropellada en un accidente. A pesar de que ella lo había abandonado de niño, siguieron viéndose ocasionalmente y su fallecimiento supuso un trauma para John que costó cicatrizar. Se agarró al rock y a su grupo musical como una tabla de salvación para mantener una estabilidad emocional que podía quebrarse en cualquier momento. En aquella época conoció a una joven llamada Cynthia, con la que mantuvo una relación tormentosa llena de celos y alcohol. La inseguridad de John y el miedo a perderla hacía que protagonizara escenas bastante desagradables, como abofetearla en público. Tras una actuación en un bar de Liverpool a John se le ocurrió que había que cambiar el nombre del grupo. Estuvieron barajando varios nombres, sobre todo de insectos, y al final se les ocurrió rebautizar el grupo como The Silver Beatles, con el que realizaron una gira por Escocia. De vuelta a Liverpool decidieron acortar el nombre y llamarse simplemente <<The Beatles>>. En agosto de 1979 los Beatles consiguieron un contrato para tocar seis semanas en la ciudad alemana de Hamburgo. Como no tenían un batería en el grupo eligieron a Pete Best, quien les acompañó en esta aventura. A su regreso a Liverpool siguieron tocando ocasionalmente en locales como el Casbah, el local regentado por la madre de Pete Best. Pero fue tras una actuación en The Cavern, un local reservado para músicos profesionales, principalmente de jazz y skiffe, cuando su fama aumentó considerablemente. Tras esa primera actuación volvieron varios días más, principalmente por la seguridad y la energía que demostraban sobre el escenario y por su estética rocker que avanzaba lo que vendría después. Poco a poco The Beatles fueron ampliando sus actuaciones en The Cavern y finalmente el local se especializó en los sonidos rock que traían esa y otras bandas. Un año después repitieron la experiencia alemana con una nueva tanda de actuaciones en Hamburgo, concretamente en el Top Ten Club. Fue en esta época en la que los miembros de los Beatles comenzaron a experimentar con drogas, principalmente anfetaminas y otros estimulantes que les ayudaban a mantenerse en pie durante las largas sesiones musicales. De nuevo en Liverpool, siguieron sus actuaciones en The cavern, hasta que un tipo llamado Brian Epstein, propietario de una tienda de discos, les ofreció un contrato de representación. Epstein les fue guiando en cuanto al aspecto que debían adoptar en sus actuaciones y el repertorio que debían interpretar. Incluso les consiguió una grabación para la discográfica Decca, de Londres, aunque finalmente esta prueba no llegó a plasmarse en un disco. Tras esta pequeña decepción, en abril de 1962 volvieron a viajar a Hamburgo para actuar en el Star Club. Esta vez su remuneración iba a ser mayor que en las anteriores ocasiones y en Alemania dejaron ya su impronta de grupo que llegaría lejos.",
      foto: "https://www.todomusica.org/imagenes/680x380/john_lennon.jpg",

    }
    this.banda2 = {

      nombre: "Paul McCartney",
      vida: "Liverpool, 19 de junio de 1942",
      resumen: "Desde pequeño, su padre le inculcó el gusto por la música. Inicialmente Paul McCartney comenzó tocando la trompeta, pero posteriormente cambió a la guitarra acústica. A McCartney, al principio le costaba tocar con la mano izquierda (pues es zurdo), pero motivado al ver que el músico Slim Whitman también era zurdo, persistió en su intento. Una vez que ya había dominado la técnica de la guitarra, escribe su primera canción: <<I Lost My Little Gir>>.A la edad de 11 años conoció a George Harrison en el Instituto Liverpool y a los 15 a John Lennon. Junto a Lennon empiezan a componer temas y forman un grupo. Al poco tiempo convence a Lennon para integrar a Harrison en la banda, e ingresa como primera guitarra. Paralelamente se incorpora un bajista amigo de John llamado Stuart Sutcliffe, y así forman la banda <<Quarrymen>>, la que posteriormente se llamaría <<The Silver Beetles>>. No es hasta Mayo de 1960 cuando adoptan el famoso nombre de The Beatles. Al poco tiempo se asocian con el productor Allan Williams, quien los lleva a tocar al bar <<Indra>> en Hamburgo, Alemania. Poco tiempo después tocan en el <<Top Ten Club>>, y en el Club <<Cavern>>. Hasta entonces sólo tocaban versiones de canciones conocidas de otros artistas. Por ello, Paul McCartney le propone a Lennon presentar sus canciones originales. Es así como graban el tema <<My Bonnie>> con Tony Sheridan. Para ese entonces, Sutcliffe abandona la agrupación y The Beatles constituye una nueva alineación: Lennon, Harrison, Starr y McCartney. En 1962 firman con la compañía discográfica <<Parlophone Records>>, después de haber sido negados por otras varias. A fines de ese mismo año nace el sencillo <<Love Me Do>>, en donde se escucha a McCartney cantando un solo en los coros. En 1963 aparece el álbum “Please Please Me”, escrito en su totalidad por el duo McCartney - Lennon. Este hecho de componer se repetiría durante toda la discografía de los Beatles. Poco tiempo más tarde conoce a Linda McCartney (en el bar <<The Bag O'Nails>>), con quien se casaría poco después. En 1966, The Beatles dejan de hacer presentaciones en vivo. En un principio Paul no estaba muy de acuerdo, pero terminó cediendo a la opinión grupal. Por su cuenta, McCartney sigue dedicándose a la música, y es el primero de los integrantes en lanzar un proyecto solitario. Es así como compone la banda sonora para la película <<The Family Way>> en 1966. Este material fue lanzado después en un disco titulado de la misma manera, y logró ganar el premio <<Ivor Novello Award>> como <<Mejor Tema Instrumental>>. Ese mismo año, McCartney escribió canciones y produjo discos para otros artistas como Mary Hopkin, Badfinger, y the Bonzo Dog Band. En Abril de 1970, Paul McCartney anuncia públicamente la separación definitiva de los Beatles y una semana después del suceso lanza su primer álbum como solista, titulado <<McCartney>>. Su segunda producción aparece en 1971 y se tituló <<Ram>>. En Agosto de ese mismo año, crea una nueva agrupación llamada <<Wings>>, junto al guitarrista Denny Laine al batería Denny Seiwell. En 1972, Paul graba el tema <<Live and Let Die>> para la película James Bond. Junto a la banda Wings editan una serie de discos tales como <<Wild Life>> (1972), <<Red Rose Speedway>> (1973) y <<Band on the Run>> (1974), con el cual ganan dos premios Grammy. Durante 1975 y 1976, McCartney junto a su banda realizan una gira mundial, que más tarde se recogió en un disco titulado <<Wings Over America>>. En 1979, Paul McCartney organiza el festival de ayuda para la gente de Camboya titulado <<Concerts for the People of Kampuchea>>. También ese mismo año, el tema compuesto por McCartney, <<Rockestra>> gana un premio Grammy y en el mes de Diciembre lanza el sencillo navideño <<Wonderful Christmas time>>. Paul McCartney inicia la década de los 80 con un disco titulado <<McCartney II>>. En 1981, a raíz del asesinato de John Lennon, Paul, junto a George Harrison y Ringo Starr lanzan un disco tributo titulado <<All Those Years Ago>>. En 1982 presenta el álbum <<Tug of War>>, en donde canta un dúo con Stevie Wonder para la canción <<Ebony and Ivory>>. También en este disco aparece el tema tributo a Lennon, <<Here Today>>. Poco tiempo después aparecen dos temas grabados con Michael Jackson: por un lado <<The Girl Is Mine>>, que aparece en el álbum Thriller de Jackson, y por otro <<Say Say Say>>, que aparece en el disco <<Pipes of Peace>> (1983) de Paul McCartney. En 1984, McCartney escribe y protagoniza la película <<Give My Regards to Broad Street>>. Dos años más tarde edita el álbum <<Press to Play>> y en 1987, aparece el disco recopilatorio <<All the Best!>>, que se convirtió en un éxito de ventas mundial. En 1988, se reúne con Ringo Starr y George Harrison para cantar el tema <<When We Was Fab>>, el cual aparece en el álbum <<Снова в СССР>>. Un año más tarde sale a la luz el disco <<Flowers in the Dirt>>. Por ese entonces, McCartney empiezan una relación de colaboración musical con Elvis Costello. Temas como <<Veronica>> o <<My Brave Face>> son algunas de sus composiciones en conjunto. En 1995, el Príncipe de Gales lo honró con el reconocimiento de <<Real Colega de Música>>. Durante la década de los noventa, Paul presentó una serie de discos tales como el álbum en vivo <<Tripping the Live Fantastic>> (1990); el disco acústico en vivo <<Unplugged (The Official Bootleg)>> (1991); el disco clásico de McCartney & Carl Davis titulado <<Paul McCartney's Liverpool Oratorio>> (1991); <<Off the Ground>> (1993); el álbum en vivo <<Paul is Live>> (1993); <<Flaming Pie>> (1997); <<Paul McCartney's Standing Stone>> (1997); <<Run Devil Run>> (1999); y el disco clásico <<Paul McCartney's Working Classical>> (1999). En 1998, la Reina Isabel II de Inglaterra, le da el título nobiliario de <<Caballero>> (Sir). Paul McCartney inicia el nuevo milenio con producciones como el LP de remixes <<Liverpool Sound Collage>> (2000); <<Driving Rain>> (2001); el disco en vivo <<Back in the U.S.>> (2002), otro disco en vivo <<Back in the World>> (2003); el disco grabado en estudio <<Chaos and Creation in the Backyard>> (2005) y el disco clásico Ecce Cor Meum (2006)",
      foto: "https://www.todomusica.org/imagenes/680x380/paul_mccartney.jpg"
    }

    this.banda3 = {

      nombre: "George Harrison",
      vida: "Liverpool, 9 de octubre de 1940-Nueva York, 8 de diciembre de 1980",
      resumen: "A la edad de 14 años, Paul McCartney (a quien había conocido en la escuela) le presenta a John Lennon. Tanto Paul como John le proponen ser el guitarrista de una nueva agrupación bajo el nombre de <<The Quarrymen>>, cuyo nombre cambió más tarde a <<The Silver Beatles>> y finalmente terminaron por ser simplemente <<The Beatles>>. Con este grupo generaron una serie de discos y fanáticos alrededor del mundo convirtiéndose en una de las bandas más conocidas de la historia de la música. En 1963 escribe su primera canción <<Don't Bother Me>>, la cual fue incluida en segundo álbum de los Beatles (<<With the Beatles”). En 1964, durante el rodaje de la película <<A Hard Day's Night>>, conoce a Pattie Boyd, con quien contrae matrimonio dos años más tarde. En 1965 George Harrison vuelve a contribuir como compositor para la banda creando así los temas <<I Need You>> y <<You Like Me Too Much>> para el disco <<Help!>>. Ese mismo año, mientras se encontraba de viaje en los Estados Unidos acude a un espectáculo de música hindú y queda fascinado con el sonido particular del instrumento sitar. Mientras rodaban la película <<Help>>, los Beatles reciben la visita de un devoto hindú, quien les muestra un libro sobre la religión. Nuevamente George Harrison queda fascinado con la temática hindú, esta vez ya no sólo con su música, sino también con su religión. Es así como viaja a la India y conoce al gurú Maharishi Mahesh Yogi. Poco tiempo después introduce a sus compañeros en la técnica de <<Meditación Trascendental>>. Tras la ruptura de la banda, George Harrison lanza su álbum debut como solista en 1968 bajo el título de <<Wonderwall Music>>. Un año más tarde presenta el disco <<Electronic Sound>> (1969). Ya en la década de los 70 aparece el LP <<All Things Must Pass>>. Este disco logró ingresar rápidamente a los primeros puestos de las listas de éxitos. En él se incluyen temas tales como <<My Sweet Lord>>, <<Isn't It a Pity>> y <<What Is Life>>. En 1971 organizó un concierto de caridad bajo el título de <<Concert for Bangladesh>>, que fue grabado como un disco en vivo bajo el mismo título. A su vez, trabajó escribiendo y produciendo para otros artistas tales como Ringo Starr (<<It Don't Come Easy>> y <<Photograph>>), John Lennon (<<How Do You Sleep?>>), Harry Nilsson (<<You're Breakin' My Heart>>), Badfinger (<<Day After Day>>), Billy Preston (<<That's The Way God Planned It>>) y Cheech & Chong (<<Basketball Jones>>). En 1973 aparece el LP <<Living in the Material World>>. De este álbum se extrae el sencillo <<Give Me Love (Give Me Peace on Earth)>>, que se convirtió en un éxito en los Estados Unidos alcanzando la primera posición de las listas. Un año más tarde publica el álbum <<Dark Horse>> (1974). Con esta producción logró ingresar al Top 20 de ventas en los Estados Unidos, sin embargo el disco pasó desapercibido en Inglaterra. También ese año, inaugura su propia compañía discográfica en Los Ángeles (<<Dark Horse Records>>). Poco tiempo después se embarca en una gira por USA. En 1975 presenta el disco titulado <<Extra Texture (Read All About It)>>, del cual se extraen las canciones <<You>> y <<This Guitar (Can't Keep From Crying)>>. Pasado un año salen a la venta el álbum en estudio <<Thirty Three & 1/3>> (1976), y el recopilatorio <<The Best of George Harrison>> (1976). En 1978 se volvió a casar, esta vez con Olivia Arias, con quien tuvo un hijo llamado Dhani. En 1979 retorna a la música con el LP homónimo <<George Harrison>>. En 1980 escribe su autobiografía bajo el título de <<I Me Mine>>. Por ese entonces, tras el asesinato de John Lennon, co-escribe junto a Ringo Starr el tema tributo <<All Those Years Ago>>, el cual logró alcanzar la segunda posición en las listas. Poco tiempo después sale al mercado el disco <<Somewhere in England>> (1981). En 1982 aparece el álbum titulado <<Gone Troppo>>. Una nueva ausencia, esta vez de 5 años, terminó en 1987 con la presentación del álbum <<Cloud Nine>>. Este disco resultó ser un gran éxito, y pudo alcanzar la primera posición en las listas de éxitos de los Estados Unidos y la segunda en el Reino Unido. Por esa época George Harrison funda su propia productora cinematográfica (<<Handmade Films>>), y con ella produce películas como <<Mona Lisa>>, <<Time Bandits>>, <<Shanghai Surprise>> y <<Withnail and I>>. Ya en la década de los 90, retorna a la música y sale a la venta un disco en vivo titulado <<Live In Japan>> (1992), grabado durante una presentación en conjunto con Eric Clapton. Durante 1994 y 1996, se reúne son los demás miembros de los Beatles y producen el proyecto <<The Beatles Anthology>>. Por ese tiempo, George Harrison ya luchaba contra la enfermedad de cáncer de pulmón, ya que había sido un fumador compulsivo. En 1999 mientras se encontraba en su casa, es atacado por un esquizofrénico, pero Harrison pudo manejar la situación y salvarse de aquel incidente. Finalmente el 29 de noviembre del 2001 a la edad de 58 años, George Harrison fallece en Los Angeles a causa de la enfermedad que nunca pudo vencer. En el 2002 sale al mercado un álbum póstumo titulado “Brainwashed”",
      foto: "https://www.todomusica.org/imagenes/680x380/george_harrison.jpg",

    }
    
    this.banda4 = {

      nombre: "Ringo Star",
      vida: "7 de julio de 1940 (81 años) Liverpool, Inglaterra, Reino Unido",
      resumen: "El cantante y compositor Richard Starkey, nació en la ciudad de Liverpool, en el Reino Unido, el día de julio del año 1940. Es conocido internacionalmente por el nombre de <<Ringo Starr>>.Ringo estuvo ingresado en el hospital cuando era pequeño, debido a una peritonitis, y allí comenzaría a aprender a tocar el tambor. Poco tiempo después, le regalaron una batería, con la que aumentó su vocaciòn por la música y formó parte de diversos grupos tocándola. Uno de ellos fue el grupo <<Rory Storm & The Hurricanes>>, el cual tuvo mucho éxito en los años 50 y durante los 60. Fue en este grupo en el que el joven Richard decidió cambiar su nombre artístico por el de <<Ringo Starr>>. Con este grupo, Ringo llevó a cabo un gran número de conciertos, en uno de los cuales coincidió con el grupo <<The Beatles>>, más concretamente en Alemanía, empezando a partir de entonces a sustituir de manera eventual al batería de dicho grupo, que se llamaba <<Pete Best>>. En el año 1962, John Lennon le preguntó a Ringo si deseaba unirse de manera definitiva a <<The Beatles>>, a lo que el batería conestó afirmativamente. Ese mismo año, Starr realizó su primera sesión de grabación con el legendario grupo, la cual era para el sencillo <<Love Me Do>>, en que tocaría tan sólo las maracas y la pandereta, aunque realmente era una prueba para saber hasta dónde podían llegar las aptitudes de Ringo. En el año 1963, una vez contratado como el nuevo batería del grupo <<The Beatles>>, Ringo no sólo contribuyó tocando dicho instrumento y actuando con la banda, sino que además escribió conjuntamente las canciones de algunos álbumes de la época. Cabe comentar que el éxito de Starr fue tan enorme que algunos cantantes escribirierón y cantaron canciones referidas a su persona, como es el caso de la canción de Penny Valentine <<I Want to Kiss Ringo Goodbye>> y la de Rolf Harris , que llevaba el título de <<Ringo for President>>. Durante esa década, Starr también protagonizó diversas películas para la gran pantalla, junto a su grupo, creándose al mismo tiempo un club de fans de la banda con su mismo nombre. En el año 1965 Starr se casa con Maureen Tigrett, a la que estuvo unido hasta el año 1975. Un par de años más tarde, la banda <<The Beatles>> rodó la película para la BBC <<Magical Mystery Tour>>, en la que Starr ejerce además de director de fotografia de la misma. Corria el año 1968, cuando en la banda <<The Beatles>> empiezaan a surgir diversas disputas entre sus mismos integrantes, ya que unos a otros se recriminaban su forma de cantar y tocar los intrumentos. Incluso Paul McCartney comentó a Ringo que no tocaba tan bien como se decía la batería, lo cual provocó que éste, dolido, se separara de la banda, marchandose junto con su familia de vacaciones a bordo del barco del actor Peter Sellers, aunque regresó a las dos semanas del incidente. Poco tiempo después, el grupo, que parecía ya haberse librado de las rencillas y conflictos, siguió componiendo y grabando discos, pero fue un mero espejismo, ya que las relaciones entre los componentes del mismo seguían siendo en realidad muy tensas, y en el año 1969 John Lennon comunicó a los otros integrantes de la banda que abandonaba el grupo, siendo el desencadenante que llevó finalmente a la disolución definitiva de la banda. En el año 1970, y después de la disolución definitiva de <<The Beatles>>, Ringo no tardaría en sacar sus primeros discos en solitario, como fue el caso de <<Sentimental Journey>> o <<Ringo>>, unos años más tarde. En el año 1974 lanza el álbum <<Goodnight Vienna>>, el cual obtiene una muy buena critica a nivel internacional, consiguiendo entrar en los primeros puestos de la lista de Billboard 200, de los Estados Unidos. En la década de los 80, Ringo no tendría tanto éxito con sus Lps, por lo que decidió dedicarse también a una actividad paralela como actor, protagonizando algunas películas para la gran pantalla, como es el caso de <<El cavernícola>>. En el año 1981, Ringo se vuelve a casar, en esta ocasión con Barbara Bach, con la que tuvo tres hijos, Zak, Lee y Jason. Ese mismo año Ringo editó un álbum al que puso el título <<Stop and Smell the Roses>>, el cual obtuvo una buena acogida por parte del público, consiguiendo buenos puestos en las principales listas musicales. Por está época, algunos fracasos musicales sufridos por el cantante, generaron en él un problema con el alcohol, que tuvo como consecuencia el ingreso en una clínica de rehabilitación, en concreto en el año 1988, clínica en la cual ingresó también su esposa, que al igual que él también arrastraba los mismos problemas de dependencia. En el año 1988, el grupo <<The Beatles>> fue incluido en el Salón de la Fama del Rock and Roll. En el año 1992, se editó un nuevo álbum, el cual llevaría el título de <<Time Takes Time>>, en el que Ringo tocabab con una nueva banda formada en esa misma década, llamada <<Ringo & His All-Starr Band,>>. Con este grupo llevó a cabo diversas giras, obteniendo diversas criticas, algunas de buenas y otras no tanto. Durante esa época, sus antiguos compañeros Harrison y McCartney, colaboraron con él en el álbum <<Anthology>>, con el que Ringo obtuvo un éxito comercial considerable. A comienzos del siglo XXI, Ringo y su banda realizaron diversas giras por los Estados Unidos, tocando los temas de sus nuevos álbumes, entre los que estaban <<King Biscuit Flower Hour>> o <<Tour 2003>>. En el año 2002, Ringo tocó en el <<el Royal Albert Hall>>, en memoria de George Harrison, que había muerto un año antes de cáncer de pulmón. En este mismo año 2002 se incluyó a Ringo en el <<Salón de la Fama de la Percussive Arts Society>>. En el año 2003 se edita el álbum <<Ringo Rama>>, en el que colaboraron otros músicos entre los que se encontraba Eric Clapton. En el año 2006, y después de recoger diversas firmas para que a Ringo se le concediera el título de Sir, éste rehusó dicho nombramiento. En el año 2007 Ringo sería nominado para ser incluido en el Salón de la Fama del Rock and Roll, como lo habian sido sus ex-compañeros del grupo <<The Beatles>>, pero finalmente no se otorgó la propuesta.En el año 2008, Ringo anunció en su página web que a partir de ese momento no firmaría más autógrafos, debido al hecho de que éstos estaban siendo vendidos en diversos portales y webs. En el año 2009, se lanza un videojuego de <<The Beatles>>, el cual presentan Ringo, Paul y Yoko Ono, la que fue mujer del fallecido John Lennon, así como Olivia Harrison, viuda del desaparecido George Harrison. En el año 2011, y con 70 años a sus espaldas, Ringo decidió visitar por primera vez Latinoamerica, donde realizó diversos conciertos. Este mismo año 2011 la revista especialista de música <<Rolling Stone>>, clasificó a Ringo Starr entre los 5 baterías mejores de todos los tiempos. Un año más tarde se publicó el álbum <<Ringo 2012>>, con el que el cantante y su banda, realizaron una gran gira mundial, durante la cual visitaron todos los continentes del globo, finalizando en el año 2013.",
      foto: "https://www.todomusica.org/imagenes/680x380/ringo_starr.jpg"

    }

  
  }

  ngOnInit(): void {
  }

}
