import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Textarea } from "components/input";
import Input from "components/input/Input";
import { Label } from "components/label";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  const [content, setContent] = useState();
  const handleAddNewCampaign = (values) => {
    console.log(
      "🚀 ~ file: CampaignAddNew.js:12 ~ handleAddNewCampaign ~ values:",
      values
    );
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // TODO: Upload Image feature
        // imgbbAPI
        // upload: async (file) => {
        //   console.log("upload: ~ file", file);
        //   const bodyFormData = new FormData();
        //   console.log("upload: ~ bodyFormData", bodyFormData);
        //   bodyFormData.append("image", file);
        //   const response = await axios({
        //     method: "post",
        //     url: imgbbAPI,
        //     data: bodyFormData,
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   });
        //   return response.data.data.url;
        // },
      },
    }),
    []
  );

  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 text-text2 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)} autoComplete="off">
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Test</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description</Label>
          <Textarea
            name="shortDescription"
            placeholder="Write a short description..."
            control={control}
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your story..."
          />
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNew;
