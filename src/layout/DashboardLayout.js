import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import { IconClose } from "components/icons";
import Input from "components/input/Input";
import CampaignPerk from "modules/campaign/CampaignPerk";
import SideBar from "modules/dashboard/SideBar";
import TopBar from "modules/dashboard/TopBar";
import React from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { control } = useForm();

  return (
    <div className="min-h-screen p-10 bg-lite">
      <Overlay></Overlay>
      <TopBar></TopBar>
      <div className="flex items-start gap-x-10">
        <SideBar></SideBar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
      <ReactModal
        isOpen={false}
        overlayClassName="model-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-auto scroll-hidden"
      >
        <button
          type="button"
          className="absolute z-10 flex cursor-pointer w-11 h-11 right-[10px] top-[10px] text-text1"
        >
          <IconClose></IconClose>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">
          Back this project
        </h2>
        <p className="mb-3 text-sm">Enter the contribute amount</p>
        <Input
          placeholder="$10"
          control={control}
          name="amount"
          className="w-full px-5 py-3 text-lg font-medium border rounded border-stroke"
        ></Input>
        <p className="my-5 text-sm text-text3">
          Contribution are not associatied with perks
        </p>
        <Button kind="primary">Continue</Button>
        <div className="mt-[60px]"></div>
        <CampaignPerk showBtn></CampaignPerk>
        <CampaignPerk showBtn></CampaignPerk>
        <CampaignPerk showBtn></CampaignPerk>
        <CampaignPerk showBtn></CampaignPerk>
      </ReactModal>
    </div>
  );
};

export default DashboardLayout;
