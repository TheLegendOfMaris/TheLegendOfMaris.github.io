const About = () => {
    return (
      <div id="about" className="bg-[#F7F7F7]/[0.16] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-8 relative">
                Über mich
              </h2>
              
              <div className="space-y-4 text-gray-200">
                <p>
                  Ich bin Marie, 21 und leidenschaftliche Softwareentwicklerin.
                </p>
                
                <p>
                  Aktuell studiere ich Medieninformatik im Bachelor an der HTWK Leipzig und arbeite 
                  nebenbei an eigenen Softwareprojekten. In den letzten Jahren habe ich an 
                  vielseitigen Projekten gearbeitet – von Webanwendungen mit React und TypeScript 
                  bis hin zu serverseitiger Logik mit Node.js und Datenbankdesign mit MySQL. Was 
                  mich dabei besonders fasziniert: die Verbindung aus technischem Denken, 
                  Kreativität und dem ständigen Lernen.
                </p>
                
                <p>
                  Abseits des Bildschirms beschäftige ich mich gerne kreativ, egal ob beim Malen 
                  oder Häkeln, ich lese auch gerne oder ich gehe meiner Leidenschaft fürs Reisen 
                  nach.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#FCCCCC] rounded-full overflow-hidden">
                {/* Profile image would go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;