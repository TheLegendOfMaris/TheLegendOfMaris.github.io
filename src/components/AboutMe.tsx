const About = () => {
  return (
    <div id="about" className="bg-[#F7F7F7]/[0.16] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-8 relative">Über mich</h2>

            <div className="space-y-4 text-gray-200">
              <p>
                Ich bin Marie, 21 Jahre alt, und leidenschaftliche
                Softwareentwicklerin.
              </p>

              <p>
                Derzeit studiere ich Medieninformatik im Master an der HTWK
                Leipzig und arbeite nebenbei an eigenen Softwareprojekten. In
                den letzten Jahren habe ich an vielseitigen Projekten gearbeitet
                – von modernen Webanwendungen mit React und TypeScript über
                serverseitige Logik mit Node.js bis hin zu Datenbankdesign mit
                MySQL. Besonders fasziniert mich dabei die Verbindung aus
                technischem Denken, Kreativität und dem ständigen Lernen neuer
                Technologien.
              </p>

              <p>
                Abseits des Bildschirms lebe ich meine kreative Seite beim Malen
                oder Häkeln aus, lese gerne und lasse mich auf Reisen von neuen
                Orten inspirieren..
              </p>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#FCCCCC] rounded-full overflow-hidden shadow-lg">
                <img
                  src="/BildVonMir.png"
                  alt="Profilbild von Marie Schwabe"
                  className="w-full h-full object-cover object-[20%_40%]"
                />
              </div>

              {/* Ministerne oben rechts */}
              {/* <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 z-10">
                // Erster Stern 
                <div className="absolute z-20">
                  <img
                    src="/MiniStern.png"
                    alt="Mini Stern"
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                </div>

                // Zweiter Stern - leicht versetzt und größer
                <div className="absolute top-3 left-2 z-20">
                  <img
                    src="/MiniStern.png"
                    alt="Mini Stern"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
