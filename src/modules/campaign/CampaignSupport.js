import { Button } from "components/button";
import Input from "components/input/Input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="mb-5 text-lg font-semibold ">Support</h2>
      <div className="flex flex-col w-full px-6 bg-white rounded-xl shadow-1 py-7">
        <p className="mb-8 text-xl text-center text-text3">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="pledge"
          className="w-full px-5 py-2 mb-5 text-lg font-medium border rounded border-stroke"
        ></Input>
        <div className="p-5 mb-5 rounded-lg bg-grayF3">
          <p className="mb-5 text-sm font-semibold text-text2">
            Back it because you believe in it.
          </p>
          <p className="text-sm text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary" className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
