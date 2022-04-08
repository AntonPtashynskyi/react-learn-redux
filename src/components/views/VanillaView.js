import Counter from 'components/component/Counter';
import ToDo from 'components/component/ToDo';
import Stats from 'components/component/Stats';

const VanillaView = () => {
  return (
    <>
      <div className="container"> Vanilla Redux Page </div>
      <Counter />
      <Stats />
      <ToDo />
    </>
  );
};

export { VanillaView };
