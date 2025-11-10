const About = () => {
  return (
    <div
      id="about"
      className="bg-[#F7F7F7]/[0.16] py-16 px-6 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-8 relative">Über mich</h2>

            <div className="space-y-4 text-gray-200">
              <p>
                Ich bin Marie Schwabe, 21 Jahre alt, und leidenschaftliche
                Softwareentwicklerin.
              </p>

              <p>
                Aktuell studiere ich Medieninformatik im Master an der HTWK
                Leipzig und arbeite nebenbei an eigenen Softwareprojekten. In
                den letzten Jahren durfte ich vielfältige Erfahrungen sammeln,
                von modernen Webanwendungen mit React und TypeScript über
                serverseitige Entwicklung mit Node.js bis hin zum
                Datenbankdesign mit MySQL. Besonders begeistert mich die
                Verbindung von technischem Denken, Kreativität und der
                Möglichkeit, ständig Neues zu lernen.
              </p>

              <p>
                Abseits des Bildschirms lebe ich meine kreative Seite beim Malen
                aus, lese gerne und lasse mich auf Reisen von neuen Orten
                inspirieren.
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
              <div className="absolute -top-1 -right-3 md:top-2 md:-right-4 z-10 w-12 h-12">
                {/* Erster Stern */}
                <div className="absolute z-20 p-1 rounded">
                  <img
                    src="/MiniStern.png"
                    alt="Mini Stern"
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>

                {/* Zweiter Stern - leicht versetzt und größer */}
                <div className="absolute top-4 left-3 z-20 p-1 rounded">
                  <img
                    src="/MiniStern.png"
                    alt="Mini Stern"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
