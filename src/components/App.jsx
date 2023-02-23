import Counter from './Counter';
// import Counter from './Counter/Counter';
import { Layout } from './Constants/Layout';
import { GlobalStyle } from './Constants/GlobalStyle';
import { Dropdown } from './DropDown/Dropdown';

import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />

      <Feedback />
    </Layout>
  );
};
