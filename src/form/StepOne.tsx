import { useState } from "react"

interface Info {
  name: string
  email: string
  phone: string
}

const StepOne = () => {
  const [info, setInfo] = useState<Info>({ name: "", email: "", phone: "" })
  const data = [
    {
      name: "name",
      title: "Name",
      type: "text",
      placeHolder: "e.g Stephen King"
    },
    {
      name: "email",
      title: "Email Adress",
      type: "email",
      placeHolder: "e.g stephenking@lorem.com"
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "tel",
      placeHolder: "e.g +1 234 567 890"
    }
  ]

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-marine-blue font-bold">Personal info</h1>
        <p className=" text-cool-gray">
          Please provide your name, email adress and phone number.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {data.map((item, i) => (
          <div className="flex flex-col gap-2 w-full" key={i}>
            <label htmlFor={item.name} className="text-marine-blue">
              {item.title}
            </label>
            <input
              name={item.name}
              type={item.type}
              placeholder={item.placeHolder}
              onChange={handleChange}
              className="w-full border border-cool-gray px-4 py-2 rounded-lg text-marine-blue font-medium"
              required
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default StepOne
