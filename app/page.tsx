import SimpleForm from './_components/simple';
import Rhf from './_components/rhf';
import RhfWithZod from './_components/rhf-with-zod';
import RhfWithAction from './_components/with-action';

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-16 text-2xl font-medium">React Hook Forms</h1>
        {/* <SimpleForm /> */}
        {/* <Rhf /> */}
        {/* <RhfWithZod /> */}
        <RhfWithAction />
      </div>
    </section>
  );
}
