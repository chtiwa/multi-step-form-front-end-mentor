import { useEffect } from "react"
import { useFormStore } from "../context/formStore"

const StepThree = () => {
  const { isMonthly, setAddOns, addOns } = useFormStore()
  useEffect(() => {
    console.log(addOns)
  }, [addOns])
  const data = [
    {
      checked: false,
      title: "Online service",
      body: "Access to mutliplayer games",
      monthly: "+$1/mo",
      yearly: "+$10/yr"
    },
    {
      checked: false,
      title: "Larger storage",
      body: "Extra 1TB of cloud save",
      monthly: "+$2/mo",
      yearly: "+$20/yr"
    },
    {
      checked: false,
      title: "Customizable profile",
      body: "Custom theme on your profile",
      monthly: "+$2/mo",
      yearly: "+$20/yr"
    }
  ]

  const handleChange = (e: any) => {
    console.log(e.target.value)
  }
  // const handleAddOns = (title: string) => {
  //   if (!addOns.includes(title)) {
  //     setAddOns((addOns) => [...addOns, title])
  //   } else {
  //     setAddOns((addOns) => addOns.filter((addon) => addon !== title))
  //   }
  //   console.log(addOns)
  // }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-marine-blue font-bold text-3xl">Pick add-ons</h2>
        <p className="text-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {data.map((item, i) => (
          <div
            className={`flex items-center justify-between border border-light-blue rounded-md px-6 py-4  hover:cursor-pointer ${
              addOns.includes(item.title)
                ? " bg-magnolia border-pastel-blue"
                : ""
            }`}
            key={i}
            onClick={() => setAddOns(item.title)}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  className="h-6 w-6 rounded-sm"
                  checked={addOns.includes(item.title)}
                />
              </div>
              <div className="flex flex-col gap-0.5 ">
                <h3 className="text-marine-blue font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-cool-gray">{item.body} </p>
              </div>
            </div>
            <div className="flex items-center text-purplish-blue">
              {isMonthly ? item.monthly : item.yearly}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StepThree
