import { Routes, Route } from 'react-router';

import { NavigationView } from './views/NavigationView';
import { HomeView } from './views/HomeView';
import { VanillaView } from './views/VanillaView';
import { ToolkitView } from './views/ToolkitView';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationView />}>
          <Route index element={<HomeView />} />
          <Route path="redux" element={<VanillaView />} />
          <Route path="toolkit" element={<ToolkitView />} />
        </Route>
      </Routes>
    </>
  );
};
