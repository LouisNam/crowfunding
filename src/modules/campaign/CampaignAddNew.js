import useOnChange from "hooks/useOnChange";
import ReactQuill, { Quill } from "react-quill";
import React, { useEffect, useMemo, useState } from "react";
import Input from "components/input/Input";
import ImageUploader from "quill-image-uploader";
import FormRow from "components/common/FormRow";
import FormGroup from "components/common/FormGroup";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Textarea } from "components/input";
import { Label } from "components/label";
import { ImageUpload } from "components/image";
import { Dropdown } from "components/dropdown";
import { Button } from "components/button";
import { apiUrl, imgbbAPI } from "config/config";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education"];

const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const [content, setContent] = useState();
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnChange(500);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const resetValues = () => {
    setStartDate("");
    setEndDate("");
    setContent("");
  };

  const getDropdownLabel = (name, defaultValue = "") => {
    return watch(name) || defaultValue;
  };

  useEffect(() => {
    if (!filterCountry) return;
    async function fetchCountries() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchCountries();
  }, [filterCountry]);

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
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "POST",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  const handleAddNewCampaign = async (values) => {
    try {
      await axios.post(`${apiUrl}/categories`, {
        ...values,
        content,
        startDate,
        endDate,
      });
      resetValues();
      reset({});
      toast.success("Add new campaign success");
    } catch (err) {
      toast.error(err.message);
    }
  };

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
              <Dropdown.Select
                placeholder={getDropdownLabel(
                  "category",
                  "Select the category..."
                )}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((item) => (
                  <Dropdown.Option
                    key={item}
                    onClick={() => handleSelectDropdownOption("category", item)}
                  >
                    <span className="capitalize">{item}</span>
                  </Dropdown.Option>
                ))}
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
        <FormRow>
          <FormGroup>
            <Label htmlFor="image">Feature Image</Label>
            <ImageUpload onChange={setValue} name="image"></ImageUpload>
          </FormGroup>
          {/* <FormGroup></FormGroup> */}
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="goal">Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">Raised amount *</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="prefill">Amount Prefilled</Label>
            <Input
              control={control}
              name="prefill"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm text-left text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-sm text-left text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("country", "Select a country...")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country..."
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((item, index) => (
                    <Dropdown.Option
                      key={index}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          item?.name?.common
                        )
                      }
                    >
                      {item?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="startDate">Start Date</Label>
            <DatePicker
              dateFormat="dd-MM-yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="endDate">End Date</Label>
            <DatePicker
              dateFormat="dd-MM-yyyy"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </FormGroup>
        </FormRow>
        <div className="mt-10 text-center">
          <Button type="submit" className="px-10 mx-auto">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
