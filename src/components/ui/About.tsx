// src/components/About.jsx


const About = () => {
  return (
    <section id="about" className="flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
               AG
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Ahmed G3far Kamal</h2>
            <h3 className="text-xl text-muted-foreground mb-6">Frontend Developer & UI Designer</h3>
            <p className="text-lg mb-6">
              I'm a passionate frontend developer with over 5 years of experience creating beautiful,
              functional, and user-centered digital experiences. I am dedicated to crafting interfaces
              that are both visually appealing and highly usable.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading UX books, or experimenting with
              new design tools and frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;