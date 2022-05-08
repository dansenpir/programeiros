import { sections } from "../../assets/ts/mocks";

const LearningGuide = () => (
  <>
    <div className="flex flex-col justify-center items-center text-left">
      <h2 className="mt-8 mr-6 text-orange font-bold text-2xl">Aprenda com um guia</h2>
      <p className="mt-8 text-sm ml-6">
        Guias educacionais criados para você saber o que deve estudar para
        qualquer tecnologia.
      </p>
      <div>
        {sections.map((item, i) => (
          <section
            key={i}
            className="bg-black_two mt-12 p-6 border border-gray rounded-lg w-80"
          >
            <h3 className="text-red font-bold text-lg">{item.title}</h3>
          <p className="mt-6 w-56 text-sm">{item.description}</p>
          </section>
        ))}
      </div>
    </div>
    <button className="mt-8 ml-6 text-orange border border-orange p-3 rounded-lg">
      Vá para o guia
    </button>
  </>
);

export { LearningGuide };
