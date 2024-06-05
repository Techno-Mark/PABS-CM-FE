import React from "react";
import { Button } from "@mui/material";
// Cookie import
import Cookies from "js-cookie";
// Types import
import { ChecklistAutoCareType } from "@/models/carCareBasicDetails";
import ChecklistAccordian from "@/components/client/common/ChecklistAccordian";
import GroupEmailEstablished from "../forms/autocar/checklist/GroupEmailEstablished";

function ChecklistAutoCare({
  setChecklistCount,
  setChecklistFormSubmit,
}: ChecklistAutoCareType) {
  const roleId = Cookies.get("roleId");

  return (
    <>
      <div
        className={`flex flex-col ${
          roleId !== "4" ? "h-[95vh]" : "h-full"
        } pt-12`}
      >
        <div className={`flex-1 overflow-y-scroll`}>
          <div className="m-6 flex flex-col gap-6">
            <ChecklistAccordian title="Phase 1">
              <>
                <GroupEmailEstablished />
              </>
            </ChecklistAccordian>
          </div>
        </div>

        <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-end border-t gap-5 px-6 w-full">
          <Button
            onClick={() => {}}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {}}
            className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
            variant="outlined"
          >
            Save as Draft
          </Button>
          <Button
            onClick={() => {}}
            className={`!bg-[#022946] text-white !rounded-lg`}
            variant="contained"
          >
            <span className="uppercase font-semibold text-[16px] whitespace-nowrap">
              Next: Check List
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ChecklistAutoCare;
