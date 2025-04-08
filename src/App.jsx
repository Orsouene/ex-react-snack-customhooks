import UseDataLauncher from "./Components/DataHook/useDataLauncher"
import UseSwitchLauncher from "./Components/SwitchHook/UseSwitchLauncher"
import UseMousePositionLancher from "./Components/MousePosition/useMousePositionLancher"
import UseKeyPressLauncher from "./Components/keyPress/UseKeyPressLauncher"
function App() {


  return (
    <>
    {/* useSwitch */}
      <UseSwitchLauncher/>
    {/* useData */}
      <UseDataLauncher/>
    {/* MousePosition */}
      {/* <UseMousePositionLancher/> */}
      {/* UseKeyPress */}
      <UseKeyPressLauncher/>
    </>
  )
}

export default App
