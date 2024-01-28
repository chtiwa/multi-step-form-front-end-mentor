import { useFormStore } from "./context/formStore"
import LeftSide from "./form/LeftSide"
import PrevNext from "./form/PrevNext"
import StepFour from "./form/StepFour"
import StepOne from "./form/StepOne"
import StepThree from "./form/StepThree"
import StepTwo from "./form/StepTwo"

const App = () => {
  const { index } = useFormStore()
  const CurrentStep = () => {
    if (index === 1) {
      return <StepOne />
    } else if (index === 2) {
      return <StepTwo />
    } else if (index === 3) {
      return <StepThree />
    } else if (index === 4) {
      return <StepFour />
    }
  }
  return (
    <div className="h-screen w-screen bg-magnolia flex justify-center">
      <div className="bg-alabaster rounded-lg drop-shadow-md h-[700px] w-11/12 max-w-6xl p-4 mt-32 flex gap-4">
        <div className="w-4/12">
          <LeftSide index={index} />
        </div>
        <div className="w-8/12 p-16 flex flex-col justify-between h-full">
          <CurrentStep />
          <PrevNext />
        </div>
      </div>
    </div>
  )
}

export default App
