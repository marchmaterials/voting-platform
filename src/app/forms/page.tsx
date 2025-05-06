"use client";

import { useActionState, startTransition, useRef, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { persistProject } from "../actions";
import { useRouter } from "next/navigation";
import { ProjectSubmissionForm, materialActionState } from "../../types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSubmissionSchema } from "@/lib/validation/projectSchema";

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const emptyMaterial: materialActionState = {
    materialName: "",
    description: "",
    usedWhere: "",
    supplierName: "",
    url: "",
  };
  const initialState: ProjectSubmissionForm = {
    email: "",
    title: "",
    description: "",
    location: "",
    yearCompleted: new Date().getFullYear(),
    typology: "RESIDENTIAL",
    materials: [{ ...emptyMaterial }],
  };

  const [, formAction, isPending] = useActionState<
    ProjectSubmissionForm,
    FormData
  >(persistProject, initialState);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors: rhfErrors, isSubmitSuccessful },
  } = useForm<ProjectSubmissionForm>({
    resolver: zodResolver(projectSubmissionSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "materials",
    rules: { minLength: 3 },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      router.push("/forms/success");
    }
  }, [isSubmitSuccessful]);
  const materialInputs = fields.map(({ id }, index) => {
    return (
      <fieldset key={id}>
        <div key={id} className="[&>*]:mb-2 mb-10">
          <Input
            key={`name-${id}`}
            type="text"
            name="materialName"
            id="materialName"
            label="Name of Material"
            inputProps={{
              ...register(`materials.${index}.materialName`),
            }}
          />
          {rhfErrors.materials?.[index]?.materialName && (
            <p className="text-red-600">
              {rhfErrors.materials[index]?.materialName?.message}
            </p>
          )}
          <Input
            key={`where-${id}`}
            type="text"
            name="usedWhere"
            id="usedWhere"
            label="Where this material is used in the project"
            inputProps={{
              placeholder: "ex. Interior flooring",
              ...register(`materials.${index}.usedWhere`),
            }}
          />{" "}
          {rhfErrors.materials?.[index]?.usedWhere && (
            <p className="text-red-600">
              {rhfErrors.materials[index]?.usedWhere?.message}
            </p>
          )}
          <div
            className="flex justify-between items-center"
            key={`description-${id}`}
          >
            <label htmlFor="materialDescription">Describe the material</label>
            <textarea
              id="materialDescription"
              {...register(`materials.${index}.description`)}
            />
            {rhfErrors.materials?.[index]?.description && (
              <p className="text-red-600">
                {rhfErrors.materials[index]?.description?.message}
              </p>
            )}
          </div>
          <Input
            key={`supplier-${id}`}
            type="text"
            name="supplierName"
            id="supplierName"
            label="Supplier name"
            inputProps={{
              ...register(`materials.${index}.supplierName`),
            }}
          />
          {rhfErrors.materials?.[index]?.supplierName && (
            <p className="text-red-600">
              {rhfErrors.materials[index]?.supplierName?.message}
            </p>
          )}
          <Input
            key={`website-${id}`}
            type="text"
            name="materialUrl"
            id="materialUrl"
            label="Link to the material on the supplier website"
            inputProps={{
              ...register(`materials.${index}.url`),
            }}
          />
          {rhfErrors.materials?.[index]?.url && (
            <p className="text-red-600">
              {rhfErrors.materials[index]?.url?.message}
            </p>
          )}
          <button type="button" onClick={() => remove(index)}>
            Delete this material
          </button>
        </div>
      </fieldset>
    );
  });
  return (
    <form
      action={formAction}
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit((d) => {
          console.log("data", d);
          const newForm = new FormData(formRef.current!);
          console.log("newForm materials?:", newForm.get("materials"));
          console.log("form desc", newForm.get("description"));
          newForm.append("materials", JSON.stringify(d.materials));
          console.log("with materials ?", newForm.get("materials"));
          startTransition(() => formAction(newForm));
        })(e);
      }}
    >
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
              ...register("email"),
            }}
          />
          {rhfErrors.email && (
            <p className="text-red-600">{rhfErrors.email?.message}</p>
          )}
        </section>

        <h1 className="font-bold mb-4">Tell us about the Project</h1>

        <Input
          type="text"
          id="title"
          name="title"
          label="Title"
          inputProps={{ ...register("title") }}
        />
        {rhfErrors.title?.message && (
          <p className="text-red-600">{rhfErrors.title?.message}</p>
        )}
        <label htmlFor="description">Description</label>
        <textarea id="description" {...register("description")} />
        {rhfErrors.description?.message && (
          <p className="text-red-600">{rhfErrors.description?.message}</p>
        )}
        <Input
          type="text"
          id="location"
          name="location"
          label="Location of the completed project. (City, Country)"
          inputProps={{
            ...register("location"),
          }}
        />
        {rhfErrors.location?.message && (
          <p className="text-red-600">{rhfErrors.location?.message}</p>
        )}
        <Input
          type="number"
          id="yearCompleted"
          name="yearCompleted"
          label="Year in which the project was completed"
          inputProps={{ ...register("yearCompleted", { valueAsNumber: true }) }}
        />
        {rhfErrors.yearCompleted?.message && (
          <p className="text-red-600">{rhfErrors.yearCompleted?.message}</p>
        )}
        <div>
          <fieldset className="text-sm [&>*:not(:nth-child(1))]:justify-end">
            <legend className="text-lg">Typology:</legend>
            <Input
              type="radio"
              id="residential"
              name="typology"
              label="Residential"
              inputProps={{ value: "RESIDENTIAL", ...register("typology") }}
            />
            <Input
              type="radio"
              id="commercial"
              name="typology"
              label="Commercial"
              inputProps={{ value: "COMMERCIAL", ...register("typology") }}
            />
            <Input
              type="radio"
              id="industrial"
              name="typology"
              label="Industrial"
              inputProps={{ value: "INDUSTRIAL", ...register("typology") }}
            />
            <Input
              type="radio"
              id="institutional"
              name="typology"
              label="Institutional / Infrastructure"
              inputProps={{ value: "INSTITUTIONAL", ...register("typology") }}
            />
          </fieldset>
        </div>

        <div>
          <fieldset>
            <h2 className="mb-2 font-bold">Materials Used</h2>
            <p className="text-xs mb-4">Please add at least 3 materials</p>
            {materialInputs}
            {rhfErrors.materials && (
              <p className="text-red-600">
                {rhfErrors.materials?.root?.message}
              </p>
            )}
          </fieldset>
          <button
            type="button"
            onClick={() => append(emptyMaterial)}
            className="border-2 border-black text-s font-thin p-2"
          >
            Add another material
          </button>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-black text-white rounded-full p-3 text-xl m-6 w-80 text-lg self-center"
        >
          Submit Project
        </button>
      </div>
    </form>
  );
}
