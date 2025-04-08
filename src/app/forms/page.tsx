import Input from "../ui/Input";

export default function Page() {
  return (
    <div className="">
      <h1>Submit a Project</h1>
      <label id="title">Title</label>
      <input type="text" id="title" />

      <Input type="text" id="description" label="description" />
    </div>
  );
}
