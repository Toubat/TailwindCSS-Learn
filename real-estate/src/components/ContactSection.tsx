import { Input } from "./Input";

export function ContactSection() {
  return (
    <div className="bg-green-300 mt-5 flex p-10 justify-center items-center">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap md:flex-nowrap">
          <Input label="First Name" placeholder="Jane" helper="Please fill out this field" />
          <Input label="Last Name" placeholder="Doe" />
        </div>
        <div className="flex mt-6">
          <Input
            label="Email"
            placeholder="example@abc.com"
            helper="Some tips - as long as needed"
          />
        </div>
        <div className="flex mt-6">
          <Input
            as="textarea"
            label="Message"
            placeholder="Hi there!"
            helper="Some tips - as long as needed"
          />
        </div>
        <div className="md:flex md:items-center mt-5">
          <div className="md:w-1/3">
            <button className="shadow bg-green-400 text-white px-4 py-2 rounded-md mx-2">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
