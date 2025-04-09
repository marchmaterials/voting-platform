"use client";

import { useState } from "react";
import Input from "../ui/Input";

export default function Page() {
  const [materialCount, setMaterialCount] = useState(3);

  const incrementMaterials = () => {
    setMaterialCount(materialCount + 1);
  };
  const materialInputs = [...Array(materialCount).keys()].map((i) => {
    return (
      <div key={i} className="[&>*]:mb-2 mb-10">
        <Input
          type="text"
          id="material_name"
          name="material_name"
          label="Material Used"
          required={i < 3}
        />
        <Input
          type="text"
          id="supplier_name"
          name="supplier_name"
          label="Supplier name"
          required={i < 3}
        />
        <Input
          type="text"
          id="supplier_website"
          name="supplier_website"
          label="Supplier website"
          required={i < 3}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-2 m-8 text-lg">
      <h1 className="font-bold mb-4">Submit a Project</h1>

      <section className="mb-4">
        <Input
          type="email"
          id="email"
          name="email"
          label="Email"
          inputProps={{
            placeholder: "please enter your email",
          }}
        />
      </section>

      <h1 className="font-bold mb-4">Tell us about the Project</h1>

      <Input type="text" id="title" name="title" label="Title" />

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" />

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
        <fieldset className="text-sm [&>*:not(:nth-child(1))]:justify-end">
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

      <div>
        <fieldset>
          <h2 className="mb-2 font-bold">Materials Used</h2>
          <p className="text-xs mb-4">Please add at least 3 materials</p>
          {materialInputs}
        </fieldset>
        <button
          onClick={incrementMaterials}
          className="border-2 border-black text-s font-thin p-2"
        >
          Add another material
        </button>
      </div>
      <button
        type="submit"
        className="bg-black text-white rounded-full p-3 text-xl m-6 w-80 text-lg self-center"
      >
        Submit Project
      </button>
    </div>
  );
}
