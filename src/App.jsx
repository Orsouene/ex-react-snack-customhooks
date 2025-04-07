import UseDataLauncher from "./Components/DataHook/useDataLauncher"
import UseSwitchLauncher from "./Components/SwitchHook/UseSwitchLauncher"
import UseMousePositionLancher from "./Components/MousePosition/useMousePositionLancher"
function App() {


  return (
    <>
    {/* useSwitch */}
      <UseSwitchLauncher/>
    {/* useData */}
      <UseDataLauncher/>
    {/* MousePosition */}
      <UseMousePositionLancher/>
    </>
  )
}

export default App
