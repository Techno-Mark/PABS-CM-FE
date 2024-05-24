'use client'
import React, { useState } from 'react'
// Component import
import FormBox from "@/components/client/common/FormBox";
import ClientWrapper from '@/components/ClientWapper';
// MUI import
import { Button, CircularProgress } from "@mui/material";

function Page() {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {};
  return (
    <ClientWrapper>
    <div className="flex flex-col !h-[81%] max-w-screen justify-start w-full mt-16 pb-4 px-8 gap-5 bg-[#F9FBFF] overflow-y-auto">
      <FormBox title="Account Details" checked={true}>
        Add form fields here
      </FormBox>
      <FormBox title="Other Information" checked={false}>
        Add Other fields here
      </FormBox>
    </div>
    <div className="h-[76px] py-2 !bg-[#FFFFFF] flex items-center justify-end border-t pr-6 gap-5 w-full">
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
        onClick={handleSubmit}
        className={`!bg-[#022946] text-white !rounded-lg`}
        variant="contained"
      >
        {isLoading ? (
          <CircularProgress size={20} />
        ) : (
          <span className="uppercase font-semibold text-[16px] whitespace-nowrap">
            Next: Check List
          </span>
        )}
      </Button>
    </div>
  </ClientWrapper>
  )
}

export default Page