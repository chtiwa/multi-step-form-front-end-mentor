import { useFormStore } from "../context/formStore"

const PrevNext = () => {
  const { index, inc, dec } = useFormStore()
  return (
    <div className="w-full flex items-center justify-between">
      <button
        className="px-5 py-3 rounded-md text-cool-gray"
        onClick={() => dec()}
      >
        {index === 1 ? "" : "Go Back"}
      </button>
      <button
        className="px-5 py-3 rounded-md bg-marine-blue text-alabaster"
        onClick={() => inc()}
      >
        Next Step
      </button>
    </div>
  )
}

export default PrevNext
