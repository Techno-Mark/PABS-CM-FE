import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ChecklistWhitelabelType } from "@/models/whitelabelBasicDetails";
import { Button } from "@mui/material";
import ChecklistAccordian from "./ChecklistAccordian";
import {
  AccordianExpand,
  initialWhiteLabelIndustry,
  initialWhiteLabelWeekly,
  initialWhitelabeGroupEmailEstablished,
  initialWhitelabelAccounting,
  initialWhitelabelAccountingSoftware,
  initialWhitelabelCloudDocument,
  initialWhitelabelCurrentChallenges,
  initialWhitelabelException,
  initialWhitelabelFTE,
  initialWhitelabelItHelp,
  initialWhitelabelItStructure,
  initialWhitelabelKickOff,
  initialWhitelabelMessenger,
  initialWhitelabelOtherInfo,
  initialWhitelabelRemoteSetup,
  initialWhitelabelSystemAcess,
  initialWhitelabelTax,
  initialWhitelabelTeamOverCall,
  validateWhiteLabelChecklist,
} from "@/static/whitelabel/whitelabelChecklist";
import WhitelabelCommunicationForm from "@/components/client/forms/whitelabel/WhitelabelCommunicationForm";
import { AccountingFormTypes, AccountingSoftwareWhiteLabelFormTypes, CloudDocumentWhiteLabelFormTypes, CurrentChallengesFormTypes, ExceptionFormTypes, FTEFormTypes, GroupEmailWhiteLabelFormTypes, IndustryFormTypes, ItHelpWhiteLabelFormTypes, ItStructureWhiteLabelFormTypes, KickOffWhiteLabelFormTypes, MessengerWhiteLabelFormTypes, OtherInfoWhiteLabelFormTypes, RemoteSetupWhiteLabelFormTypes, SystemAccessWhiteLabelFormTypes, TaxFormTypes, TeamOverCallWhiteLabelFormTypes, WeeklyFormTypes, WhitelabelFormTypes, whitelabelTeamOverCallTypes } from "@/models/whitelabelChecklist";
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
  formSubmitId,
  setChecklistFormSubmit,
  clientInfo,
}: ChecklistWhitelabelType) => {
  const roleId = Cookies.get("roleId");
  const userId = Cookies.get("userId");
  const businessTypeId = Cookies.get("businessTypeId");

  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

  // 1
  const [whitelabelGroupEmailEstablished, setWhitelabelGroupEmailEstablished] = useState<GroupEmailWhiteLabelFormTypes>(initialWhitelabeGroupEmailEstablished);
  const [whitelabelTeamOverCall, setWhitelabelTeamOverCall] = useState<TeamOverCallWhiteLabelFormTypes>(initialWhitelabelTeamOverCall);
  const [whitelabelKickOff, setWhitelabelKickOff] = useState<KickOffWhiteLabelFormTypes>(initialWhitelabelKickOff);

  // 2
  const [whitelabelITStructure, setWhitelabelITStructure] = useState<ItStructureWhiteLabelFormTypes>(initialWhitelabelItStructure);
  const [whitelabelRemoteSetup, setWhitelabelRemoteSetup] = useState<RemoteSetupWhiteLabelFormTypes>(initialWhitelabelRemoteSetup);
  const [whitelabelITHelp, setWhitelabelITHelp] = useState<ItHelpWhiteLabelFormTypes>(initialWhitelabelItHelp);
  const [whitelabelAccountingSoftware, setWhitelabelAccountingSoftware] = useState<AccountingSoftwareWhiteLabelFormTypes>(initialWhitelabelAccountingSoftware);
  const [whitelabelCloudDocument, setWhitelabelCloudDocument] = useState<CloudDocumentWhiteLabelFormTypes>(initialWhitelabelCloudDocument);
  const [whitelabelMessenger, setWhitelabelMessenger] = useState<MessengerWhiteLabelFormTypes>(initialWhitelabelMessenger);
  const [whitelabelSystemAccess, setWhitelabelSystemAccess] = useState<SystemAccessWhiteLabelFormTypes>(initialWhitelabelSystemAcess);
  const [whitelabelOtherInfo, setWhitelabelOtherInfo] = useState<OtherInfoWhiteLabelFormTypes>(initialWhitelabelOtherInfo);

  // 3
  const [whitelabelFTE, setWhitelabelFTE] = useState<FTEFormTypes>(initialWhitelabelFTE);
  const [whitelabelAccounting, setWhitelabelAccounting] = useState<AccountingFormTypes>(initialWhitelabelAccounting);
  const [whitelabelTax, setWhitelabelTax] = useState<TaxFormTypes>(initialWhitelabelTax);
  const [whitelabelWeekly, setWhitelabelWeekly] = useState<WeeklyFormTypes>(initialWhiteLabelWeekly);
  const [whitelabelIndustry, setWhitelabelIndustry] = useState<IndustryFormTypes>(initialWhiteLabelIndustry);

  // 4
  const [whitelabelCurrentChallenges, setWhitelabelCurrentChallenges] = useState<CurrentChallengesFormTypes>(initialWhitelabelCurrentChallenges);
  const [whitelabelExpectation, setWhitelabelExpectation] = useState<ExceptionFormTypes>(initialWhitelabelException);

  // 5
  // const [whitelabelMonthly, setWhitelabelMonthly] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);
  // const [whitelabelCleanup, setWhitelabelCleanup] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);
  // const [whitelabelCatchup, setWhitelabelCatchup] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);
  // const [whitelabelCombination, setWhitelabelCombination] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);

  // 6
  // const [whitelabelClient, setWhitelabelClient] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);
  // const [whitelabelPABS, setWhitelabelPABS] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);
  // const [whitelabelBDM, setWhitelabelBDM] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);

  // 7
  // const [whitelabelTimeZone, setWhitelabelTimeZone] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);
  // const [whitelabelConvenientDay, setWhitelabelConvenientDay] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);
  // const [whitelabelTimeSlot, setWhitelabelTimeSlot] =
  //   useState<WhitelabelFormTypes>(initialWhitelabel);

  const [isSubmitedWhiteLabelChecklist, setIsSubmitedWhiteLabelChecklist] =
    useState<boolean>(false);

  const handleAccordianChange =
    (arg1: number) => (e: any, isExpanded: boolean) => {
      setExpandedAccordian(isExpanded ? arg1 : -1);
    };


  const handleSubmit = (type: number) => {
    if (type === 1 || type === 2) {

      const callBack = (ResponseStatus: string, Message: string) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            showToast(Message, ToastType.Success);
            type === 1 && setChecklistFormSubmit(13);
            return;
        }
      };

      const saveClientIndo = "/api/clients/save-client-info";
      callAPIwithHeaders(saveClientIndo, "post", callBack, {
        userId: !!clientInfo?.UserId
          ? parseInt(clientInfo?.UserId)
          : parseInt(userId!),
        businessTypeId: !!clientInfo?.DepartmentId
          ? parseInt(clientInfo?.DepartmentId)
          : parseInt(businessTypeId!),
        // checkList: checkList,
      });


    }
  };

  return (
    <div
      className={`flex flex-col ${roleId !== "4" ? "h-[95vh]" : "h-full"
        } pt-12`}
    >
      <div className={`flex-1 overflow-y-scroll`}>
        <div className="m-6 flex flex-col gap-6">
          <ChecklistAccordian
            switchDisabled={isSubmitedWhiteLabelChecklist}
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
              whitelabelTeamOverCall={whitelabelTeamOverCall}
              setWhitelabelTeamOverCall={setWhitelabelTeamOverCall}
              whitelabelKickOff={whitelabelKickOff}
              setWhitelabelKickOff={setWhitelabelKickOff}
            />
          </ChecklistAccordian>

          <ChecklistAccordian
            switchDisabled={isSubmitedWhiteLabelChecklist}
            expandedAccordian={
              expandedAccordian === AccordianExpand.SYSTEMS_SOFTWARE_SET_UP
            }
            handleChange={handleAccordianChange(
              AccordianExpand.SYSTEMS_SOFTWARE_SET_UP
            )}
            title="Phase 2: Systems & Software Set up"
          >
            <WhitelabelSystemSoftwareSetupForm
              whitelabelSystemSoftwareErrors={{}}
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
            switchDisabled={isSubmitedWhiteLabelChecklist}
            expandedAccordian={
              expandedAccordian === AccordianExpand.SERVICE_TYPE
            }
            handleChange={handleAccordianChange(AccordianExpand.SERVICE_TYPE)}
            title="Phase 3: Services Type"
          >
            <WhitelabelServiceTypeForm
              whitelabelServiceErrors={{}}
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
            switchDisabled={isSubmitedWhiteLabelChecklist}
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
            switchDisabled={isSubmitedWhiteLabelChecklist}
            expandedAccordian={
              expandedAccordian === AccordianExpand.TYPE_OF_WORK_ASSIGNMENT
            }
            handleChange={handleAccordianChange(
              AccordianExpand.TYPE_OF_WORK_ASSIGNMENT
            )}
            title="Phase 5: Type of work assignment"
          >
            <></>
            {/* <WhitelabelWorkAssignmentForm
              whitelabelMonthly={whitelabelMonthly}
              setWhitelabelMonthly={setWhitelabelMonthly}
              whitelabelCleanup={whitelabelCleanup}
              setWhitelabelCleanup={setWhitelabelCleanup}
              whitelabelCatchup={whitelabelCatchup}
              setWhitelabelCatchup={setWhitelabelCatchup}
              whitelabelCombination={whitelabelCombination}
              setWhitelabelCombination={setWhitelabelCombination}
            /> */}
          </ChecklistAccordian>

          <ChecklistAccordian
            switchDisabled={isSubmitedWhiteLabelChecklist}
            expandedAccordian={
              expandedAccordian === AccordianExpand.ESCALATION_MATRIX
            }
            handleChange={handleAccordianChange(
              AccordianExpand.ESCALATION_MATRIX
            )}
            title="Phase 6: Escalation Matrix"
          >
            <></>
            {/* <WhitelabelEscalationmatrixForm
              whitelabelClient={whitelabelClient}
              setWhitelabelClient={setWhitelabelClient}
              whitelabelPABS={whitelabelPABS}
              setWhitelabelPABS={setWhitelabelPABS}
              whitelabelBDM={whitelabelBDM}
              setWhitelabelBDM={setWhitelabelBDM}
            /> */}
          </ChecklistAccordian>

          <ChecklistAccordian
            switchDisabled={isSubmitedWhiteLabelChecklist}
            expandedAccordian={
              expandedAccordian === AccordianExpand.MEETING_AVAILABILITY
            }
            handleChange={handleAccordianChange(
              AccordianExpand.MEETING_AVAILABILITY
            )}
            title="Phase 7: Meeting Availability"
          >
            <></>
            {/* <WhitelabelMeetingAvailabilityForm
              whitelabelTimeZone={whitelabelTimeZone}
              setWhitelabelTimeZone={setWhitelabelTimeZone}
              whitelabelConvenientDay={whitelabelConvenientDay}
              setWhitelabelConvenientDay={setWhitelabelConvenientDay}
              whitelabelTimeSlot={whitelabelTimeSlot}
              setWhitelabelTimeSlot={setWhitelabelTimeSlot}
            /> */}
          </ChecklistAccordian>
        </div>
      </div>

      <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6 w-full">
        <Button
          onClick={() => setChecklistFormSubmit(11)}
          className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
          variant="outlined"
        >
          Back
        </Button>
        <div className="flex gap-5">
          {roleId !== "4" && (
            <Button
              onClick={() => { }}
              className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Cancel
            </Button>
          )}
          {(roleId === "4" ? !isSubmitedWhiteLabelChecklist : true) && (
            <Button
              onClick={() => handleSubmit(2)}
              className={`!border-[#023963] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
              variant="outlined"
            >
              Save
            </Button>
          )}
          <Button
            onClick={() => handleSubmit(1)}
            className={`!bg-[#022946] text-white !rounded-full`}
            variant="contained"
          >
            <span className="uppercase font-semibold text-[14px] whitespace-nowrap">
              Next: Account Details
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChecklistWhitelabel;
