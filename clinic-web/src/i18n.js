import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    pl: {
        translation: {
            "yes": "Tak",
            "Welcome to React": "Welcome to React and react-i18next",
            "adhd-icd-10": {
                "title": "Kwestionariusz ustrukturyzowanego wywiadu diagnostycznego w kierunku zespołu nadpobudliwości psychoruchowej (ADHD) według ICD-10 i DSM-IV TR",
                "asterisk": "PRZY PIERWSZORAZOWYM BADANIU OCENIAMY WYMAGANY DO ROZPOZNANIA OKRES 6 M-CY, PRZY KOLEJNYCH W ZALEŻNOŚCI OD POTRZEBY – „2 M-CE OD OSTATNIEJ WIZYTY”, „1 M-C OD WPROWADZENIA LEKU”. MINIMUM CZASU OCENIANEGO TO 2 TYGODNIE.",
                "attentionDisorderInSchool": "Dziecko nie jest w stan utrzymać ciągłej i bliżej uwagi na szczegółach lub popełnia błędy z nieuwagi w szkole, pracy lub innej działalności.",
                "attentionDisorderDuringPlay": "Dziecku często nie udaje się utrzymać trwałej uwagi na zadaniach lub grach/zabawach.",
                "hearingDisorder": "Często wydaje się, że dziecko nie słyszy tego, co się do niego mówi.",
                "losingThings": "Dziecko często gubi rzeczy niezbędne do pracy lub innych zajęć, np. zabawki, przybory szkolne, ołówk, książki, narzędzia.",
                "externalStimuli": "Dziecko łatwo rozprasza się pod wpływem zewnętrznych bodźców.",
                "forgetful": "Dziecko często jest zaominalskie podczas codziennych zajęć.",
                "question-10": "Dziecko ma często nerwowe ruchy rąk lub stóp bądź nie jest w stanie usiedzieć w miejscu, często macha rękami lub nogami albo wierci się na krześle.",
                "question-11": "Dziecko wstaje z miejsca w czasie lekcji lub w innych sytuacjach wymagających spokojnego siedzenia.",
                "question-12": "Dziecko często biega wkoło lub wchodzi na meble w sytuacjach, w których jest to nieaprobowane (u nastolatków lub dorosłych może być obecne tylko uczucie niepokoju).",
                "question-13": "Dziecko często jest nadmiernie hałaśliwe w zabawie i ma trudności ze spokojnym bawieniem się.",
                "question-14": "Dziecko często jest w ruchu; „biega jak nakręcone”. Zachowanie dziecka cechuje nadmierna aktywność ruchowa, na którą nie wpływa ani sytuacja, ani potrzeba.",
                "question-15": "Dziecko często wyrywa się z odpowiedzią, zanim pytanie zostanie zadane do końca.",
                "question-16": "Dziecko często wyrywa się z odpowiedzią, zanim pytanie zostanie zadane do końca.",
                "question-17": "Dziecku często nie udaje się stać w szeregu lub poczekać na swoją kolej w grze lub sytuacji grupowej.",
                "question-18": "Dziecko często przerywa lub przeszkadza innym (np. wtrąca się do rozmowy lub zabawy innych osób).",
                "question-19": "Dziecko często jest nadmiernie gadatliwe.",
                "question-20": "Niektóre upośledzające funkcjonowanie dziecka objawy zaburzeń koncentracji uwagi lub nadpobudliwości psychoruchowej (nadruchliwości, impulsywności) ujawniły się przed 7. rokiem życia dziecka.",
                "question-21": "Upośledzenie funkcjonowania dziecka spowodowane tymi objawami występuje w dwóch lub więcej sytuacjach (np. w szkole i w domu).",
                "question-22": "Stwierdza się klinicznie istotne upośledzenie funkcjonowania społecznego, zawodowego lub szkolnego (w zakresie edukacji).",
                "question-23": "Objawy u dziecka nie występują w przebiegu przetrwałych zaburzeń rozwojowych, schizofrenii lub innych psychoz i nie można ich trafniej uznać za objawy innego zaburzenia psychicznego (np. zaburzeń nastroju, lękowych, dysocjacyjnych lub nieprawidłowej osobowości).",
                "answers": {
                    "yes": "tak",
                    "rather yes": "raczej tak",
                    "rather no": "raczej nie",
                    "no": "nie"
                }
            }
        }
    },
    fr: {
        translation: {
            "yes": "Tak",
            "Welcome to React": "Bienvenue à React et react-i18next"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "pl", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;