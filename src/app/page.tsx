export default function Home() {
  return (
    <main className="w-full flex flex-col py-24 px-16">
      <section className="flex flex-col mb-16">
        <div className="flex flex-col text-5xl gap-4">
          <h1 className="text-8xl font-bold">Rudy Hartwig</h1>
          <span>Software Engineering Student</span>
        </div>
      </section>
      
      <section className="flex flex-col gap-2">
        <h1 className="flex flex-col text-4xl font-bold gap-1">About</h1>
        <div className="flex flex-col gap-4 text-2xl">
          <p>
            I was born and raised in Akron, Ohio and I currently attend <strong>
            The Ohio State University</strong> for a degree in
            Computer Information Science. So far, I've spent most of my time
            using languages such as C++ and Python. It has been a fun challenge 
            to develop my skills and overcome some of the difficult problems 
            presented to me.
          </p>
          <p>
            Outside of Computer Science, I enjoy making and listening to music. 
            I have played the trombone for 8 years, and I have recently begun
            to learn the piano so that I can use tools such as MuseScore and 
            Cubase for production more efficiently. I also enjoy playing 
            video games, card games, board games, and of course, hanging out 
            with friends and family.
          </p>
        </div>
      </section>
    </main>
 );
}
