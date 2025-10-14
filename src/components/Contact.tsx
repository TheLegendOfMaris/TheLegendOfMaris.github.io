const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:marieschwabe33@gmail.com?`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Kontakt</h2>

        <div className="mt-12 text-gray-300 text-sm max-w-3xl mb-8">
          <p>
            Ich freue mich über Ihr Interesse an meinen Projekten! Wenn Sie
            Fragen haben, mehr über meine Arbeit erfahren möchten oder eine
            mögliche Zusammenarbeit in Betracht ziehen, können Sie mich gerne
            kontaktieren. Ich antworte in der Regel zeitnah und freue mich auf
            Ihre Nachricht. Nutzen Sie einfach den folgenden Button, um mit mir
            in Kontakt zu treten.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="submit"
            className="cursor-pointer w-full py-3 bg-pink-200 text-[#1a1a24] font-medium rounded-md hover:bg-pink-300 transition-colors"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
