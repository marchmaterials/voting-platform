"use client";

import { useState } from "react";
import { Modal, Input, message, Select, Form, Checkbox } from "antd";
// import { useDataContext } from "@/app/context/dataContext";
import { SquareArrowOutUpRight } from "lucide-react";
import { USER_TYPE } from "@prisma/client";
import { sendVerificationEmail } from "@/app/actions/sendVerificationEmail";

type Props = {
  projectId: string;
  setVotes: (votes: number) => void;
  antdAdjustment: boolean;
};

interface Option {
  value: string;
  label: string;
}

type FieldType = {
  email: string;
  privacyPolicy?: string,
  userType: USER_TYPE
}


const options: Option[] = [
  {
    value: USER_TYPE.ARCHITECT,
    label: "Architect"
  },
  {
    value: USER_TYPE.SUPPLIER,
    label: "Supplier/Manufacturer"
  },
  {
    value: USER_TYPE.CONSTRUCTION_PROFESSIONAL,
    label: "Construction Professional"
  },
  {
    value: USER_TYPE.HOMEOWNER,
    label: "Homeowner"
  },
  {
    value: USER_TYPE.OTHER,
    label: "Other"
  }

]



export default function VoteButton({ projectId, antdAdjustment }: Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  // const { setAllProjects } = useDataContext();
  const [form] = Form.useForm();


  const onFinish = async (values: FieldType) => {
    try {
      setLoading(true);
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      const res = await sendVerificationEmail(projectId, values.email, values.userType, tz)
      if (res.ok) {
        message.success("Verification email sent — please click the link in the email to count your vote!")
      } else {
        message.error(res.message)
      }
      setModalOpen(false)
    } catch (err) {
      if (err instanceof Error) {
        message.error(err.message);
      }

    } finally {
      form.resetFields();
      setLoading(false);
      setModalOpen(false);
    }

  };

  const onCancel = () => {
    form.resetFields()
    setModalOpen(false)
  }

  const verticalSpacing = antdAdjustment ? "py-1 pt-2 mb-1" : "py-2"

  return (
    <>
      <button className={`px-4 border-2 border-black bg-black text-white ${verticalSpacing} hover:opacity-75 hover:border-opacity-75 rounded-md flex items-baseline justify-center`} onClick={() => setModalOpen(true)}>
        <span className="text-xl font-extrabold leading-none">Vote</span>
      </button >
      <Modal
        title="Vote for this project"
        open={modalOpen}
        onOk={() => form.submit()}
        onCancel={onCancel}
        okText="Send Verification Email"
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item<FieldType> name="email" label="Enter your email" className="!mb-1" rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Please enter a valid email address" }]}>
            <Input
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="your@email.com"
              required
              className="w-full p-2 border rounded"
            />
          </Form.Item>
          <Form.Item<FieldType> name="privacyPolicy" valuePropName="checked" rules={[{
            validator: (_, v) =>
              v ? Promise.resolve() : Promise.reject(new Error("Please accept the privacy policy before submitting")),
          },
          ]} className="!mb-0" label={null}>
            <Checkbox data-testid="privacy-policy-input"
            >by submitting you agree to the terms of our <a className="text-link inline-flex items-center gap-1" href="https://marchmaterialspolicy.framer.website">privacy policy<span><SquareArrowOutUpRight size={14} strokeWidth={1.5} /></span></a></Checkbox>
          </Form.Item>
          <Form.Item<FieldType> name="userType" label="What best describes your profession?" rules={[{ required: true, message: "Please select an option that best describes your profession" }]}>
            <Select data-testid="profession-input"
              options={options} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal >
    </>
  );
}
