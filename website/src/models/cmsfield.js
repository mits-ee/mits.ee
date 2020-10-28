const mongoose = require('mongoose');

const { Schema } = mongoose;

// not sure if this is how mongo works
const defaultValues = {
  index_cta_text: `
    <h1>Hei!</h1>
    <h2>Liitumine MITSi on avatud!</h2>
    <a class="btn gradient"
       href="/liitumine"
       target="_blank" rel="noopener">Liitu</a>
  `,
  index_people_container: `
    <p><strong>MAT-INF tudengiselts</strong> ehk <strong>MITS</strong> on Tartu Ülikooli matemaatika, matemaatilise statistika ja informaatika tudengeid ühendav erialaselts, mis tegutseb aktiivselt oma teaduskondade tudengite argipäeva elavdamise ja heaolu tagamisega.</p>
            <p>Seisame selle eest, et ülikool ja reaalteaduste õppimine oleks enamat, kui pelgalt uute teadmiste omandamine.</p>
            <div class="peoplegrid">
                <div class="person">
                    <img alt="Marten Türk" src="/media/liikmed/MartenTurk.jpg">
                    <h3 class="name">Marten Türk</h3>
                    <div class="role">President</div>
                </div>
                <div class="person">
                    <img alt="Alo Aasmäe" src="/media/liikmed/AloAasmae.jpg">
                    <h3 class="name">Alo Aasmäe</h3>
                    <div class="role">Asepresident</div>
                </div>
                <div class="person">
                    <img alt="Danver Hans Värv" src="/media/liikmed/DanverHansVarv.jpg">
                    <h3 class="name">Danver Hans Värv</h3>
                    <div class="role">Finantsjuht</div>
                </div>
                <div class="person">
                    <img alt="Kristiina Krause" src="/media/liikmed/KristiinaKrause.jpg">
                    <h3 class="name">Kristiina Krause</h3>
                    <div class="role">Sponsorlusjuht</div>
                </div>
            </div>
            <p class="more"><a class="btn ghost" href="/meist">Loe veel MITSi kohta</a></p>
  `,

  index_sponsors: `
    <h1>Meie toetajad</h1>
            <div class="sponsorgrid">
                <a title="ATI" id="ati" class="sponsor svg" href="https://cs.ut.ee/"></a>
                <a title="OLE ROHKEM" id="olerohkem" class="sponsor svg" href="https://olerohkem.ee/"></a>
                <a title="IT Akadeemia" id="itakadeemia" class="sponsor svg" href="https://www.hitsa.ee/ikt-haridus/ita"></a>
            </div>
  `,
  index_partners: `
  <h1>Meie partnerid</h1>
            <div class="sponsorgrid">
                <a title="Nortal" id="nortal" class="sponsor svg" href="https://nortal.com/"></a>
                <a title="Veriff" id="veriff" class="sponsor svg" href="https://www.veriff.com/"></a>
                <a title="Pipedrive" id="pipedrive" class="sponsor svg" href="https://www.pipedrive.com/"></a>
            </div>
  `,
  aboutus_intro: `
  <h1>MAT-INF TUDENGISELTS</h1>
            <p><strong>MAT-INF tudengiselts</strong> ehk <strong>MITS</strong> on Tartu Ülikooli matemaatika, matemaatilise statistika ja informaatika tudengeid ühendav erialaselts, mis tegutseb aktiivselt oma teaduskondade tudengite argipäeva elavdamise ja heaolu tagamisega.</p>
            <p>Seisame selle eest, et ülikool ja reaalteaduste õppimine oleks enamat, kui pelgalt uute teadmiste omandamine.</p>
            <p>Meie värvikast sündmustepagasist leiab iga tudeng endale midagi meelepärast. Korraldame erinevad akadeemilisi üritusi (paneeldiskussioone, lektorite õhtuid, seminare ja töötubasid), uusi sõpru võib leida aga seltskonna- ning sotsiaalüritustel (lauamängu- ja filmiõhtutel, teemapidudel, LANidel, mälumängudel). Seejuures aitavad koolipingest vabaneda iganädalased trennid (jooksu-, jalgpalli-, korvpalli- ja võrkpallitrennid). Oleme ka esmakursuslastele mõelnud, kellele tutvustame õiget ülikoolielu mentorprogrammi abil. Iga päev sünnib aga värskeid ideid ning sündmuste nimekiri aina pikeneb.</p>
    `,
  aboutus_mission_vision: `
  <p><strong>Missioon:</strong> MAT-INF tudengiseltsi missioon on korraldada mitmekesiseid sündmusi ning teha järjepidevat koostööd arvutiteaduste ja matemaatika-statistika instituudiga tagamaks tudengite hariduslikku heaolu.</p>
            <p><strong>Visioon:</strong> MAT-INF tudengiseltsi visioon on parendada iga MAT-INF tudengi heaolu ülikooliaja vältel ning anda kaasa vajalikud oskused, teadmised ja tutvused panustamaks Eesti ühiskonna jätkusuutlikkusse arengusse.
            </p>`,
  aboutus_leadership: `
              <h1>Juhatus</h1>
            <p>Juhatuse eesmärk on luua seltsis keskkond, kus tiimijuhtidel oleks meeldiv ja mugav koos oma töögrupiga korraldada just neile meelepäraseid üritusi. Hoolitseme välise suhtluse eest seltsi ja instituutide vahel ning otsime alati uusi väljundeid ning võimalusi, et ükski lennukas idee ei jääks teostuse taha pidama.</p>
            <div class="peoplegrid">
                <div class="person">
                    <img alt="Marten Türk" src="/media/liikmed/MartenTurk.jpg">
                    <h3 class="name">Marten Türk</h3>
                    <div class="role">President</div>
                </div>
                <div class="person">
                    <img alt="Alo Aasmäe" src="/media/liikmed/AloAasmae.jpg">
                    <h3 class="name">Alo Aasmäe</h3>
                    <div class="role">Asepresident</div>
                </div>
                <div class="person">
                    <img alt="Danver Hans Värv" src="/media/liikmed/DanverHansVarv.jpg">
                    <h3 class="name">Danver Hans Värv</h3>
                    <div class="role">Finantsjuht</div>
                </div>
                <div class="person">
                    <img alt="Kristiina Krause" src="/media/liikmed/KristiinaKrause.jpg">
                    <h3 class="name">Kristiina Krause</h3>
                    <div class="role">Sponsorlusjuht</div>
                </div>
            </div>`,
  aboutus_history: `
  <h1>Ajalugu</h1>
            <p>
                Esmakordselt sai MAT-INF tudengiselts alguse Taivo Pungase eestvedamisel 23. aprillil 2014.
                Kuni 2016. aasta lõpuni korraldas MITS erinevaid sündmusi ning seisis tudengite heaolu eest.
                Järelkasvu puudumise tõttu aga pandi pillid mõneks ajaks kotti.
            </p>
            <p>
                MITS taasasustati 20. aprillil 2018, kui 10 aktiivset noort võtsid südameasjaks oma teaduskondade
                tudengite elu värvikamaks muuta.
                Huvilisi leidus veelgi ning esimesed vägiteod saadeti korda 30-pealise tiimiga,
                millest esimene suursündmus oli networking-seminar
                <a href="https://www.facebook.com/events/863700093813482/">Make MITS Great Again</a>.
                Taasalustava organisatsiooni kohta oli sündmus väga edukas - kohal käis ligikaudu 150 tudengit
                ning huvi seltsi vastu kasvas hüppeliselt.
                Tänaseks tegutseb MITSis juba üle viiekümne aktiivse liikme.
            </p>
  `,
  aboutus_workgroups: `
  <h1>Töögrupid</h1>
            <p>Meie lähenemine on, et erisugused sündmused nõuavad ka mitmeid vahvaid töögruppe. Seetõttu oleme jaotanud oma organisatsiooni liikmed just neile meeldivasse töögruppi. Iga töögrupi täpsematest suundadest saad lugeda juba altpoolt!</p>

            <div class="teamgrid">
                <div class="teamdescription">
                    <h2>Akadeemiliste tiim</h2>
                    <p>Töögrupp korraldab põnevaid harivaid üritusi nagu erinevaid töötubasid ja seminare. Meie tiim annab Tartu matemaatika- ja informaatikatudengitele võimaluse harida ning arendada ennast oma valdkondades läbi mitmetahuliste sündmuste.</p>
                    <p>Lisaks korraldame ka mentorprogrammi, mille eesmärgiks on tagada, et iga esmakursuslane elaks ülikooliellu sisse võimalikult sujuvalt, saades tuge ja nõu vanemkursuslaste käest.</p>
                    <p>Loe lähemalt <a href="/mentor">mentorprogrammi lehelt</a>.</p>
                </div>
                <div class="person">
                    <img alt="Tarmo\tPungas" src="/media/liikmed/Placeholder.png">
                    <h3 class="name">Tarmo Pungas</h3>
                    <div class="role">Akadeemiliste ürituste tiimi juht</div>
                </div>
                <div class="teamdescription">
                    <h2>Seltskonnaürituste tiim</h2>
                    <p>Kas oled käinud kunagi sõpradega mõnel lauamänguõhtul või võtnud osa LANist? Kuidas oleks filmiõhtuga sõprade seltsis? Need üritused on vaid osake sellest, millega tegeleb seltskonnaürituste grupp. Oled oodatud meie sõbralikku seltskonda, kui sind huvitab ägedate ürituste korraldamine oma sõpradele ning teistele.</p>
                </div>
                <div class="person">
                    <img alt="Marten Vainult" src="/media/liikmed/Placeholder.png">
                    <h3 class="name">Marten Vainult</h3>
                    <div class="role">Seltskonnaürituste tiimi juht</div>
                </div>
                <div class="teamdescription">
                    <h2>Sisetiim</h2>
                    <p>Sisetiimi ülesanne on motiveerida kõiki MITSi tegevliikmeid edasisteks tegudeks. Oma tiimiga korraldame MITSi liikmeid ühendavaid sündmusi, kus nad saavad mõnusalt omakeskis aega veeta. Olgu nendeks kuumad saunaõhtud, popcornirikkad kinokülastused või särisevad grillpeod. Seeläbi loome ühtsema meeskonna, kellega koos informaatikute ja matemaatikute ülikooliaega elavdada.</p>
                </div>
                <div class="person">
                    <img alt="Kati Ilus" src="/media/liikmed/Placeholder.png">
                    <h3 class="name">Kati Ilus</h3>
                    <div class="role">Siseürituste tiimi juht</div>
                </div>
                <div class="teamdescription">
                    <h2>Sotsiaalürituste tiim</h2>
                    <p>
                        Kas oled kuulnud MITSi
                        <a href="https://www.facebook.com/events/1996893600610148/">Retropeost</a> või
                        <a href="https://www.facebook.com/events/548713482565201/">Halloweeni peost</a>?
                        Või mõnest muust võimsast peost, mis on informaatikutest ja matemaatikutest pungil olnud?
                        Just selliste ürituste korraldamisega tegelevadki sotsiaalürituste tiimi liikmed.
                        Selle tiimi peamiseks ülesandeks on sisustada üliõpilaste reedesed õhtupoolikud
                        nii ägedalt kui võimalik.
                    </p>
                    <p>
                        Kui oled kärtsu ja mürtsu täis noor, siis on see töögrupp just sulle.
                        Siin leidub lõbus aeg sõprade seltsis, suured panused ja suured peod.
                    </p>
                </div>
                <div class="person">
                    <img alt="Geitrud Pank" src="/media/liikmed/Placeholder.png">
                    <h3 class="name">Geitrud Pank</h3>
                    <div class="role">Sotsiaalürituste tiimi juht</div>
                </div>
                <div class="teamdescription">
                    <h2>Sotsiaalmeedia tiim</h2>
                    <p>
                        Meie oleme MITS-i <em>influencer</em>-id, sisuloojad ja turundajad.
                        Kui oled sotsiaalmeedias märganud mõne legendaarse MITS-i peo promovideot,
                        lauamänguõhtute ja mälumängude postreid või muid ägedaid pilte meie tegevustest,
                        siis tea, et just meie oleme kõige selle taga! Sotsiaalmeedia tiimi eesmärk on,
                        et meie looming meelitaks tudengid ühikatubadest välja üritustele,
                        mida teised tiimid korraldavad, ning et meie harivad ja kasulikud postitused jõuaksid
                        võimalikult paljude tudengiteni.
                    </p>
                    <p>
                        Oled oodatud meie megavingesse tiimi
                        (eriti siis, kui tunned huvi <strong>disaini</strong> ja <strong>videotöötluse</strong> vastu!).
                    </p>
                </div>
                <div class="person">
                    <img alt="Carolin Lüübek" src="/media/liikmed/CarolinLuubek.jpg">
                    <h3 class="name">Carolin Lüübek</h3>
                    <div class="role">Sotsiaalmeedia tiimi juht</div>
                </div>
            </div>
  `,
  mentor_intro: `
  <h1>Mentor<wbr>programm</h1>
            <p>Hei, vahva tudeng! <strong>7. - 11. september</strong> saab registreerida menteeks!
            </p>
            <div class="buttons">
                <a class="btn blue" href="#mentor3">Tutvu mentorprogrammiga</a>
                <a class="btn big gradient"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfr0ExK9SDtP2OwEGYehR51WeK_c8ZdJudKLIw2nyRTbGEaTw/viewform"
                    target="_blank" rel="noopener" >Registreeri menteeks</a>
                <a class="btn blue" href="/Mentorid2020.pdf" download="mentorid2020" >Tutvu mentoritega</a>
            </div>`,
  mentor_description: `
  <h2>Mentorprogrammi olemus ja töögrupp</h2>
            <p>Mentorprogrammi eesmärgiks on tagada, et iga matemaatika, matemaatilise statistika ja informaatika
                esmakursuslane elaks ülikooliellu sisse võimalikult sujuvalt, saades tuge ja nõu vanemkursuslaste käest.
                Mentorprogrammi töögrupp tegeleb mentorprogrammi arendamisega, viies kokku mentorid ja esmakursuslased,
                suurendamaks kursustevahelist põimumist. Lisaks tegeleb töögrupp motiveeritud mentorite otsimise ja
                toetamisega läbi koolituste ja koosolekute.</p>`,
  mentor_benefits: `
  <h2>Mida saab mentorprogramm Sulle pakkuda?</h2>
            <details>
                <summary class="green">Olen esmakursuslane</summary>
                <article>
                    <h3>Mentorprogrammis osalenud leidsid, et mentorprogramm andis neile:</h3>
                    <ul>
                        <li>“Tutuvusi nii esimesest kui ka teiselt kursuselt ja häid nõuandeid, mis on kooliga
                            aidanud.”
                        </li>
                        <li>“Uusi tutvusi, kogemusi ning motivatsiooni õppida IT-d”</li>
                        <li>“League of Legendsi oskused”</li>
                        <li>“Head sõbrad ja tutvused. Mentorid on koolitööga ka aidanud.”</li>
                        <li>“Arusaamist, kuidas on parem õppida.”</li>
                    </ul>
                    <h3>Mida mentorgrupiga liitudes teha saab?</h3>
                    <p>Võimalusi on palju! Tuues paar näidet on varasemad mentorgrupid teinud koos järgnevat:</p>
                    <ul>
                        <li>progeõhtu;</li>
                        <li>kino;</li>
                        <li>LANid;</li>
                        <li>trenni tegemine – jõusaal, tantsimine, discgolf, bowling, uisutamine jms;</li>
                        <li>koosõppimine;</li>
                        <li>muusika tegemine;</li>
                        <li>lauamänguõhtu;</li>
                        <li>ööelu nautimine;</li>
                        <li>filmi- või pokkeriõhtu;</li>
                        <li>tudengipäevad;</li>
                        <li>raamatuõhtu;</li>
                        <li>põgenemistoad.</li>
                    </ul>
                    <h3>Miks liituda?</h3>
                    <ul>
                        <li>Saad abi ülikooliellu sujuvaks sisse sulandumiseks.</li>
                        <li>Leiad tuttavaid ja sõpru üle ülikooli.</li>
                        <li>Saad kamba inimesi, kellega koos teile ühiselt meeldivaid asju teha!</li>
                        <li>Mentorid aitavad ja toetavad Sind, kui kool üle jõu käib.</li>
                    </ul>
                    <h3>Kuidas protsess välja näeb?</h3>
                    <ol>
                        <li>Esita taotlus liitumaks mentorgrupiga. Taotluste esitamine algab sügisel.</li>
                        <li>Saadame Sulle emailile lingi, mille abil saad valida endale meelepäraseima(d)
                            mentorpaari(d).
                        </li>
                        <li>Kuulutame välja mentorgrupid ning ühine aeg grupiga saab alguse.</li>
                        <li>Veedad sügissemestril aega koos oma mentori(te) ja kaastudengitega.</li>
                        <li>Lõpetad semestri suure kogemuse võrra rikkamana.</li>
                    </ol>
                    <h3>Kuidas liituda?</h3>
                    <p>Registreerimine on võimalik alates 7. septembrist käesoleval lehel.</p>
                </article>
            </details>
            <details>
                <summary class="blue">Olen vanemkursuslane või võimalik mentor</summary>
                <article>
                    <h3>Mentorprogrammis kaasalöönud mentorite muljeid:</h3>
                    <ul>
                        <li>"Mulle andis mentorprogramm unustamatu sõpruskonna. Samuti õpetas mentorprogramm mu aega
                            paremini planeerima. Tihtilugu oli olukord, kus tegin kodutööd kõvasti enne ära, et saaksin
                            mentorgrupiga tegeleda või nendega jälle kokku saada."
                        </li>
                        <li>"Tänu mentorprogrammile leidsin uusi sõpru menteede ja kaasmentori näol."</li>
                    </ul>
                    <h3>Mida mentorgrupiga liitudes teha saab?</h3>
                    <p>Võimalusi on palju! Varasemad mentorgrupid on näiteks teinud koos järgnevat:</p>
                    <ul>
                        <li>lauamänguõhtu;</li>
                        <li>Tartu ööelu nautimine;</li>
                        <li>filmi- või pokkeriõhtu;</li>
                        <li>tudengipäevad;</li>
                        <li>raamatuõhtu;</li>
                        <li>põgenemistoad;</li>
                        <li>progeõhtu;</li>
                        <li>kino;</li>
                        <li>LANid;</li>
                        <li>koos trenni tegemine – jõusaal, tantsimine, discgolf, bowling, uisutamine jms;</li>
                        <li>koosõppimine;</li>
                        <li>muusika tegemine.</li>
                    </ul>
                    <h3>Miks liituda?</h3>
                    <ul>
                        <li>Leiad ägedaid tutvusi!</li>
                        <li>Saad kellegi ja ka iseenda ülikooli kogemust vägevamaks teha.</li>
                        <li>Võimalus saada 3 EAP-d valikainete alla: <a
                                href="https://ois2.ut.ee/#/courses/LTAT.00.011/version/cf761df5ffe0e4a539b17711cd537fcd/details"
                                target="_blank" rel="noopener">LTAT.00.011</a> (ainele ise registreerima ei pea , selle
                            saab automaatselt arvestatud, kui olete täitnud kõik aine läbimise tingimused)
                        </li>
                    </ul>
                    <h2>Kuidas protsess välja näeb?</h2>
                    <ul>
                        <li>Registreeri end mentoriks. Mentorid pannakse programmi raames paaridesse. Kogemus näitab, et
                            sõbraga tulles on lõbu kahekordne.
                        </li>
                        <li>Leiame Sulle ägedad menteed.</li>
                        <li>Veedate koos menteedega semestrijagu aega koos.</li>
                    </ul>
                    <h3>Kuidas liituda?</h3>
                    <p>Liitumine 2020 sügissemestriks kestab kuni 19.06. Kahjuks selleks aastaks on mentoriks registreerimine lõppenud </p>
                </article>
            </details>`,
  mentor_administration: `<h2>Programmi tervise eest hoolitsevad:</h2>
            <div class="peoplegrid">
                <div class="person">
                    <img alt="Martin Toode" src="/media/liikmed/MartinToode.jpg">
                    <h3 class="name">Martin Toode</h3>
                    <div class="email"><a href="mailto:toodemartin@gmail.com">toodemartin<wbr>@gmail.com</a></div>
                </div>
                <div class="person">
                    <img alt="Alo Aasmäe" src="/media/liikmed/AloAasmae.jpg">
                    <h3 class="name">Alo Aasmäe</h3>
                    <div class="email"><a href="mailto:aloaas@gmail.com">aloaas<wbr>@gmail.com</a></div>
                </div>
            </div>
            <p class="topmargin center">Kas Sul on häid mõtteid või tagasisidet meile? <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSevsm6LJNu2_WwXUoJP7B4KPSga9ZZ_BW6Cpf0QrU9bD1gFYA/viewform?usp=sf_link"
                    target="_blank" rel="noopener">Jäta see siia.</a></p>`,
};

const defaultCssValues = {
  index_cta_text: "header#landing \{ \}",
  index_people_container: "section#description \{ \}",
  index_sponsors: "section#sponsors \{ \}",
  index_partners: "section#sponsors \{ \}",
  aboutus_intro: "section#aboutlanding \{ \}",
  aboutus_mission_vision: "section#description \{ \}",
  aboutus_leadership: "section#juhatus \{ \}",
  aboutus_history: "section#history \{ \}",
  aboutus_workgroups: "section#teams \{ \}",
  mentor_intro: "section#mentorlanding \{ \}",
  mentor_description: "section#mentor2 \{ \}",
  mentor_benefits: "section#mentor3 \{ \}",
  mentor_administration: "section#mentor4 \{ \}",
};

const CMSFieldSchema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  value: { type: String, required: true },
  css: { type: String, required: true }
});

const CMSField = mongoose.model('CMSField', CMSFieldSchema);

Object.keys(defaultValues).forEach((key) => {
  const field = new CMSField({
    key,
    value: defaultValues[key],
    css: defaultCssValues[key]
  });

  field.save();
});

module.exports = CMSField;
