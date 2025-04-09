import Input from "../ui/Input";

export default function Page() {
  return (
    <div className="flex flex-col gap-5 m-8 text-lg">
      <h1 className="font-bold">Submit a Project</h1>

      <Input type="text" id="title" name="title" label="Title" />

      <Input
        type="text"
        id="description"
        name="description"
        label="Description"
      />

      <Input
        type="text"
        id="location"
        name="location"
        label="Location of the completed project. (City, Country)"
      />

      <Input
        type="number"
        id="year_completed"
        name="year_completed"
        label="Year in which the project was completed"
      />

      <div>
        <fieldset className="text-sm">
          <legend className="text-lg">Typology:</legend>
          <Input
            type="radio"
            id="residential"
            name="typology"
            label="Residential"
          />
          <Input
            type="radio"
            id="commercial"
            name="typology"
            label="Commercial"
          />
          <Input
            type="radio"
            id="industrial"
            name="typology"
            label="Industrial"
          />
          <Input
            type="radio"
            id="institutional"
            name="typology"
            label="Institutional / Infrastructure"
          />
        </fieldset>
      </div>

      <fieldset>
        <h2>Materials Used</h2>
        <Input
          type="text"
          id="material_name"
          name="material_name"
          label="Material Used"
        />
        <Input
          type="text"
          id="supplier_name"
          name="supplier_name"
          label="Supplier name"
        />
        <Input
          type="text"
          id="supplier_website"
          name="supplier_website"
          label="Supplier website"
        />
      </fieldset>
    </div>
  );
}
