import { useContext } from 'react';

// @home-book
import { Theme } from 'home-book-types';

// core
import { Context } from '../ContextProvider';

const Sample = () => {
  const { theme, setTheme } = useContext(Context);

  return (
    <div>
      {theme}
      <button onClick={() => setTheme(Theme.dark)}>Click</button>
    </div>
  );
};

export default Sample;
