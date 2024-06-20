import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ChecklistWhitelabelType } from "@/models/whitelabel/whitelabelBasicDetails";
import { Button } from "@mui/material";
import ChecklistAccordian from "./ChecklistAccordian";
import {
  AccordianExpand,
  initialWhitelabel,
} from "@/static/whitelabel/whitelabelChecklist";
import WhitelabelCommunicationForm from "@/components/client/forms/whitelabel/WhitelabelCommunicationForm";
import { WhitelabelFormTypes } from "@/models/whitelabel/whitelabelChecklist";
import WhitelabelMeetingAvailabilityForm from "@/components/client/forms/whitelabel/WhitelabelMeetingAvailabilityForm";
import WhitelabelEscalationmatrixForm from "@/components/client/forms/whitelabel/WhitelabelEscalationmatrixForm";
import WhitelabelChallengesForm from "@/components/client/forms/whitelabel/WhitelabelChallengesForm";
import WhitelabelWorkAssignmentForm from "@/components/client/forms/whitelabel/WhitelabelWorkAssignmentForm";
import WhitelabelServiceTypeForm from "@/components/client/forms/whitelabel/WhitelabelServiceTypeForm";
import WhitelabelSystemSoftwareSetupForm from "@/components/client/forms/whitelabel/WhitelabelSystemSoftwareSetupForm";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { callAPIwithHeaders } from "@/api/commonFunction";

const ChecklistWhitelabel = ({
  setChecklistCount,
  setChecklistFormSubmit,
}: ChecklistWhitelabelType) => {
  const roleId = Cookies.get("roleId");
  const userID = Cookies.get("userId");

  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

  // 1
  const [whitelabelGroupEmailEstablished, setWhitelabelGroupEmailEstablished] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelPreKickOff, setWhitelabelPreKickOff] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelKickOff, setWhitelabelKickOff] =
    useState<WhitelabelFormTypes>(initialWhitelabel);

  // 2
  const [whitelabelITStructure, setWhitelabelITStructure] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelRemoteSetup, setWhitelabelRemoteSetup] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelITHelp, setWhitelabelITHelp] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelAccountingSoftware, setWhitelabelAccountingSoftware] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelCloudDocument, setWhitelabelCloudDocument] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelMessenger, setWhitelabelMessenger] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelSystemAccess, setWhitelabelSystemAccess] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelOtherInfo, setWhitelabelOtherInfo] =
    useState<WhitelabelFormTypes>(initialWhitelabel);

  // 3
  const [whitelabelFTE, setWhitelabelFTE] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelAccounting, setWhitelabelAccounting] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelTax, setWhitelabelTax] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelWeekly, setWhitelabelWeekly] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelIndustry, setWhitelabelIndustry] =
    useState<WhitelabelFormTypes>(initialWhitelabel);

  // 4
  const [whitelabelCurrentChallenges, setWhitelabelCurrentChallenges] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelExpectation, setWhitelabelExpectation] =
    useState<WhitelabelFormTypes>(initialWhitelabel);

  // 5
  const [whitelabelMonthly, setWhitelabelMonthly] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelCleanup, setWhitelabelCleanup] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelCatchup, setWhitelabelCatchup] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelCombination, setWhitelabelCombination] =
    useState<WhitelabelFormTypes>(initialWhitelabel);

  // 6
  const [whitelabelClient, setWhitelabelClient] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelPABS, setWhitelabelPABS] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelBDM, setWhitelabelBDM] =
    useState<WhitelabelFormTypes>(initialWhitelabel);

  // 7
  const [whitelabelTimeZone, setWhitelabelTimeZone] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelConvenientDay, setWhitelabelConvenientDay] =
    useState<WhitelabelFormTypes>(initialWhitelabel);
  const [whitelabelTimeSlot, setWhitelabelTimeSlot] =
    useState<WhitelabelFormTypes>(initialWhitelabel);

  const handleAccordianChange =
    (arg1: number) => (e: any, isExpanded: boolean) => {
      setExpandedAccordian(isExpanded ? arg1 : -1);
    };

  // useEffect(() => {
  //   const fieldSetters: any = {
  //     "Group Email Established": setWhitelabelGroupEmailEstablished,
  //     "Pre Kick Off": setWhitelabelPreKickOff,
  //     "Kick Off": setWhitelabelKickOff,
  //     "IT Structure Knowledge": setWhitelabelITStructure,
  //     "If Remote Set up - Access Computer method (dedicated)":
  //       setWhitelabelRemoteSetup,
  //     "Need your IT teams help?": setWhitelabelITHelp,
  //     "Accounting Software": setWhitelabelAccountingSoftware,
  //     "Cloud Document Management Software": setWhitelabelCloudDocument,
  //     "Team/Clickup/Slack/ Other Messenger tool set up": setWhitelabelMessenger,
  //     "Any Other System access": setWhitelabelSystemAccess,
  //     "Other information": setWhitelabelOtherInfo,
  //     FTE: setWhitelabelFTE,
  //     Accounting: setWhitelabelAccounting,
  //     Tax: setWhitelabelTax,
  //     "Biweekly Hours Reporting update": setWhitelabelWeekly,
  //     "Industry Type": setWhitelabelIndustry,
  //     "Current Challenges": setWhitelabelCurrentChallenges,
  //     Expectation: setWhitelabelExpectation,
  //     "Monthly ": setWhitelabelMonthly,
  //     "Clean up": setWhitelabelCleanup,
  //     "Catch up": setWhitelabelCatchup,
  //     "Combination of Monthly/ Clean up/ Catch up": setWhitelabelCombination,
  //     Client: setWhitelabelClient,
  //     PABS: setWhitelabelPABS,
  //     BDM: setWhitelabelBDM,
  //     "Time Zone": setWhitelabelTimeZone,
  //     "Convenient day": setWhitelabelConvenientDay,
  //     "Time slot availability": setWhitelabelTimeSlot,
  //   };

  //   if (formDetails) {
  //     formDetails.forEach(
  //       (f: {
  //         id: number;
  //         fieldName: string;
  //         status: string;
  //         comments: string;
  //         details: string | null;
  //         actionsOfPabs: string;
  //         actionsOfClient: string;
  //       }) => {
  //         const setFieldState = fieldSetters[f.fieldName];
  //         if (setFieldState) {
  //           setFieldState({
  //             Status: f.status,
  //             Comments: f.comments,
  //             ActionPABS: f.actionsOfPabs,
  //             ActionClient: f.actionsOfClient,
  //           });
  //         }
  //       }
  //     );
  //   }
  // }, [formDetails]);

  const handleSubmit = (type: number) => {
    if (type === 1 || type === 2) {
      const fields = [
        {
          fieldName: "Group Email Established",
          data: whitelabelGroupEmailEstablished,
        },
        { fieldName: "Pre Kick Off", data: whitelabelPreKickOff },
        { fieldName: "Kick Off", data: whitelabelKickOff },
        {
          fieldName: "IT Structure Knowledge",
          data: whitelabelITStructure,
        },
        {
          fieldName: "If Remote Set up - Access Computer method (dedicated)",
          data: whitelabelRemoteSetup,
        },
        { fieldName: "Need your IT teams help?", data: whitelabelITHelp },
        {
          fieldName: "Accounting Software",
          data: whitelabelAccountingSoftware,
        },
        {
          fieldName: "Cloud Document Management Software",
          data: whitelabelCloudDocument,
        },
        {
          fieldName: "Team/Clickup/Slack/ Other Messenger tool set up",
          data: whitelabelMessenger,
        },
        {
          fieldName: "Any Other System access",
          data: whitelabelSystemAccess,
        },
        { fieldName: "Other information", data: whitelabelOtherInfo },
        {
          fieldName: "FTE",
          data: whitelabelFTE,
        },
        {
          fieldName: "Accounting",
          data: whitelabelAccounting,
        },
        {
          fieldName: "Tax",
          data: whitelabelTax,
        },
        {
          fieldName: "Biweekly Hours Reporting update",
          data: whitelabelWeekly,
        },
        { fieldName: "Industry Type", data: whitelabelIndustry },
        {
          fieldName: "Current Challenges",
          data: whitelabelCurrentChallenges,
        },
        { fieldName: "Expectation", data: whitelabelExpectation },
        { fieldName: "Monthly", data: whitelabelMonthly },
        { fieldName: "Clean up", data: whitelabelCleanup },
        { fieldName: "Catch up", data: whitelabelCatchup },
        {
          fieldName: "Combination of Monthly/ Clean up/ Catch up",
          data: whitelabelCombination,
        },
        { fieldName: "Client", data: whitelabelClient },
        { fieldName: "PABS", data: whitelabelPABS },
        { fieldName: "BDM", data: whitelabelBDM },
        { fieldName: "Time Zone", data: whitelabelTimeZone },
        { fieldName: "Convenient day", data: whitelabelConvenientDay },
        { fieldName: "Time slot availability", data: whitelabelTimeSlot },
      ];

      const checkList = fields.map((field) => ({
        fieldName: field.fieldName,
        status: field.data.Status,
        comments: field.data.Comments,
        actionsOfPabs: field.data.ActionPABS,
        actionsOfClient: field.data.ActionClient,
      }));

      const callBack = (ResponseStatus: string, Message: string) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            showToast(Message, ToastType.Success);
            type === 1 && setChecklistFormSubmit(3);
            // type === 2 && getFormDetials();
            return;
        }
      };

      const saveClientIndo = "/api/clients/save-client-info";
      callAPIwithHeaders(saveClientIndo, "post", callBack, {
        userId: Number(userID),
        businessTypeId: 3,
        checkList: checkList,
      });

      //   validateAutoCarePayableCashPayAccess();
      //   validateAutoCareCompliances();
      //   validateAutoCareFrequency();
      //   validateAutoCareSystemSoftwareLocation();
      //   validateAutoCareCashBankLoans();
      //   const isValid =
      //     !validateAutoCareSystemSoftwareLocation() &&
      //     !validateAutoCareSystemSoftwareLocation() &&
      //     !validateAutoCareCompliances() &&
      //     !validateAutoCarePayableCashPayAccess() &&
      //     !validateAutoCareCashBankLoans();
      //   if (isValid) {
      //     console.log("completed..");
      //   }
    }
  };
  return (
    <div
      className={`flex flex-col ${
        roleId !== "4" ? "h-[95vh]" : "h-full"
      } pt-12`}
    >
      <div className={`flex-1 overflow-y-scroll`}>
        <div className="m-6 flex flex-col gap-6">
          <ChecklistAccordian
            expandedAccordian={
              expandedAccordian === AccordianExpand.COMMUNICATION
            }
            handleChange={handleAccordianChange(AccordianExpand.COMMUNICATION)}
            title="Phase 1: Communication"
          >
            <WhitelabelCommunicationForm
              whitelabelGroupEmailEstablished={whitelabelGroupEmailEstablished}
              setWhitelabelGroupEmailEstablished={
                setWhitelabelGroupEmailEstablished
              }
              whitelabelPreKickOff={whitelabelPreKickOff}
              setWhitelabelPreKickOff={setWhitelabelPreKickOff}
              whitelabelKickOff={whitelabelKickOff}
              setWhitelabelKickOff={setWhitelabelKickOff}
            />
          </ChecklistAccordian>

          <ChecklistAccordian
            expandedAccordian={
              expandedAccordian === AccordianExpand.SYSTEMS_SOFTWARE_SET_UP
            }
            handleChange={handleAccordianChange(
              AccordianExpand.SYSTEMS_SOFTWARE_SET_UP
            )}
            title="Phase 2: Systems & Software Set up"
          >
            <WhitelabelSystemSoftwareSetupForm
              whitelabelITStructure={whitelabelITStructure}
              setWhitelabelITStructure={setWhitelabelITStructure}
              whitelabelRemoteSetup={whitelabelRemoteSetup}
              setWhitelabelRemoteSetup={setWhitelabelRemoteSetup}
              whitelabelITHelp={whitelabelITHelp}
              setWhitelabelITHelp={setWhitelabelITHelp}
              whitelabelAccountingSoftware={whitelabelAccountingSoftware}
              setWhitelabelAccountingSoftware={setWhitelabelAccountingSoftware}
              whitelabelCloudDocument={whitelabelCloudDocument}
              setWhitelabelCloudDocument={setWhitelabelCloudDocument}
              whitelabelMessenger={whitelabelMessenger}
              setWhitelabelMessenger={setWhitelabelMessenger}
              whitelabelSystemAccess={whitelabelSystemAccess}
              setWhitelabelSystemAccess={setWhitelabelSystemAccess}
              whitelabelOtherInfo={whitelabelOtherInfo}
              setWhitelabelOtherInfo={setWhitelabelOtherInfo}
            />
          </ChecklistAccordian>

          <ChecklistAccordian
            expandedAccordian={
              expandedAccordian === AccordianExpand.SERVICE_TYPE
            }
            handleChange={handleAccordianChange(AccordianExpand.SERVICE_TYPE)}
            title="Phase 3: Services Type"
          >
            <WhitelabelServiceTypeForm
              whitelabelFTE={whitelabelFTE}
              setWhitelabelFTE={setWhitelabelFTE}
              whitelabelAccounting={whitelabelAccounting}
              setWhitelabelAccounting={setWhitelabelAccounting}
              whitelabelTax={whitelabelTax}
              setWhitelabelTax={setWhitelabelTax}
              whitelabelWeekly={whitelabelWeekly}
              setWhitelabelWeekly={setWhitelabelWeekly}
              whitelabelIndustry={whitelabelIndustry}
              setWhitelabelIndustry={setWhitelabelIndustry}
            />
          </ChecklistAccordian>

          <ChecklistAccordian
            expandedAccordian={
              expandedAccordian === AccordianExpand.CHALLENGES_EXPECTATION
            }
            handleChange={handleAccordianChange(
              AccordianExpand.CHALLENGES_EXPECTATION
            )}
            title="Phase 4: Challenges & Expectation"
          >
            <WhitelabelChallengesForm
              whitelabelCurrentChallenges={whitelabelCurrentChallenges}
              setWhitelabelCurrentChallenges={setWhitelabelCurrentChallenges}
              whitelabelExpectation={whitelabelExpectation}
              setWhitelabelExpectation={setWhitelabelExpectation}
            />
          </ChecklistAccordian>

          <ChecklistAccordian
            expandedAccordian={
              expandedAccordian === AccordianExpand.TYPE_OF_WORK_ASSIGNMENT
            }
            handleChange={handleAccordianChange(
              AccordianExpand.TYPE_OF_WORK_ASSIGNMENT
            )}
            title="Phase 5: Type of work assignment"
          >
            <WhitelabelWorkAssignmentForm
              whitelabelMonthly={whitelabelMonthly}
              setWhitelabelMonthly={setWhitelabelMonthly}
              whitelabelCleanup={whitelabelCleanup}
              setWhitelabelCleanup={setWhitelabelCleanup}
              whitelabelCatchup={whitelabelCatchup}
              setWhitelabelCatchup={setWhitelabelCatchup}
              whitelabelCombination={whitelabelCombination}
              setWhitelabelCombination={setWhitelabelCombination}
            />
          </ChecklistAccordian>

          <ChecklistAccordian
            expandedAccordian={
              expandedAccordian === AccordianExpand.ESCALATION_MATRIX
            }
            handleChange={handleAccordianChange(
              AccordianExpand.ESCALATION_MATRIX
            )}
            title="Phase 6: Escalation Matrix"
          >
            <WhitelabelEscalationmatrixForm
              whitelabelClient={whitelabelClient}
              setWhitelabelClient={setWhitelabelClient}
              whitelabelPABS={whitelabelPABS}
              setWhitelabelPABS={setWhitelabelPABS}
              whitelabelBDM={whitelabelBDM}
              setWhitelabelBDM={setWhitelabelBDM}
            />
          </ChecklistAccordian>

          <ChecklistAccordian
            expandedAccordian={
              expandedAccordian === AccordianExpand.MEETING_AVAILABILITY
            }
            handleChange={handleAccordianChange(
              AccordianExpand.MEETING_AVAILABILITY
            )}
            title="Phase 7: Meeting Availability"
          >
            <WhitelabelMeetingAvailabilityForm
              whitelabelTimeZone={whitelabelTimeZone}
              setWhitelabelTimeZone={setWhitelabelTimeZone}
              whitelabelConvenientDay={whitelabelConvenientDay}
              setWhitelabelConvenientDay={setWhitelabelConvenientDay}
              whitelabelTimeSlot={whitelabelTimeSlot}
              setWhitelabelTimeSlot={setWhitelabelTimeSlot}
            />
          </ChecklistAccordian>
        </div>
      </div>

      <div className="py-5 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
        <Button
          onClick={() => setChecklistFormSubmit(1)}
          className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
          variant="outlined"
        >
          Back
        </Button>
        <div className="flex gap-5">
          <Button
            onClick={() => handleSubmit(3)}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit(2)}
            className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-lg font-semibold text-[16px]`}
            variant="outlined"
          >
            Save as Draft
          </Button>
          <Button
            onClick={() => handleSubmit(1)}
            className={`!bg-[#022946] text-white !rounded-lg`}
            variant="contained"
          >
            <span className="uppercase font-semibold text-[16px] whitespace-nowrap">
              Next: Login Info
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChecklistWhitelabel;
