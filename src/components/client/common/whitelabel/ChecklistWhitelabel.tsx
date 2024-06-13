import React, { useState } from "react";
import Cookies from "js-cookie";
import { ChecklistWhitelabelType } from "@/models/whitelabel/whitelabelBasicDetails";
import { Button } from "@mui/material";
import ChecklistAccordian from "../ChecklistAccordian";
import {
  AccordianExpand,
  initialWhitelabelAccounting,
  initialWhitelabelAccountingSoftware,
  initialWhitelabelBDM,
  initialWhitelabelCatchup,
  initialWhitelabelCleanup,
  initialWhitelabelClient,
  initialWhitelabelCloudDocument,
  initialWhitelabelCombination,
  initialWhitelabelConvenientDay,
  initialWhitelabelCurrentChallenges,
  initialWhitelabelExpectation,
  initialWhitelabelFTE,
  initialWhitelabelGroupEmailEstablished,
  initialWhitelabelITHelp,
  initialWhitelabelITStructure,
  initialWhitelabelIndustry,
  initialWhitelabelKickOff,
  initialWhitelabelMessenger,
  initialWhitelabelMonthly,
  initialWhitelabelOtherInfo,
  initialWhitelabelPABS,
  initialWhitelabelPreKickOff,
  initialWhitelabelRemoteSetup,
  initialWhitelabelSystemAccess,
  initialWhitelabelTax,
  initialWhitelabelTimeSlot,
  initialWhitelabelTimeZone,
  initialWhitelabelWeekly,
} from "@/static/whitelabel/whitelabelChecklist";
import WhitelabelCommunicationForm from "../../forms/whitelabel/WhitelabelCommunicationForm";
import {
  AccountingFormTypes,
  AccountingSoftwareFormTypes,
  BdmFormTypes,
  CatchupFormTypes,
  CleanupFormTypes,
  ClientFormTypes,
  CloudDocumentFormTypes,
  CombinationFormTypes,
  ConvenientDayFormTypes,
  CurrentChallengesFormTypes,
  ExpectationFormTypes,
  FTEFormTypes,
  GroupEmailEstablishedFormTypes,
  ITHelpFormTypes,
  ITStructureFormTypes,
  IndustryFormTypes,
  KickOffFormTypes,
  MessengerFormTypes,
  MonthlyFormTypes,
  OtherInfoFormTypes,
  PabsFormTypes,
  PreKickOffFormTypes,
  RemoteSetupFormTypes,
  SystemAccessFormTypes,
  TaxFormTypes,
  TimeSlotFormTypes,
  TimeZoneFormTypes,
  WeeklyFormTypes,
} from "@/models/whitelabel/whitelabelChecklist";
import WhitelabelMeetingAvailabilityForm from "../../forms/whitelabel/WhitelabelMeetingAvailabilityForm";
import WhitelabelEscalationmatrixForm from "../../forms/whitelabel/WhitelabelEscalationmatrixForm";
import WhitelabelChallengesForm from "../../forms/whitelabel/WhitelabelChallengesForm";
import WhitelabelWorkAssignmentForm from "../../forms/whitelabel/WhitelabelWorkAssignmentForm";
import WhitelabelServiceTypeForm from "../../forms/whitelabel/WhitelabelServiceTypeForm";
import WhitelabelSystemSoftwareSetupForm from "../../forms/whitelabel/WhitelabelSystemSoftwareSetupForm";

const ChecklistWhitelabel = ({
  setChecklistCount,
  setChecklistFormSubmit,
}: ChecklistWhitelabelType) => {
  const roleId = Cookies.get("roleId");

  const [expandedAccordian, setExpandedAccordian] = useState<number>(-1);

  // 1
  const [whitelabelGroupEmailEstablished, setWhitelabelGroupEmailEstablished] =
    useState<GroupEmailEstablishedFormTypes>(
      initialWhitelabelGroupEmailEstablished
    );
  const [whitelabelPreKickOff, setWhitelabelPreKickOff] =
    useState<PreKickOffFormTypes>(initialWhitelabelPreKickOff);
  const [whitelabelKickOff, setWhitelabelKickOff] = useState<KickOffFormTypes>(
    initialWhitelabelKickOff
  );

  // 2
  const [whitelabelITStructure, setWhitelabelITStructure] =
    useState<ITStructureFormTypes>(initialWhitelabelITStructure);
  const [whitelabelRemoteSetup, setWhitelabelRemoteSetup] =
    useState<RemoteSetupFormTypes>(initialWhitelabelRemoteSetup);
  const [whitelabelITHelp, setWhitelabelITHelp] = useState<ITHelpFormTypes>(
    initialWhitelabelITHelp
  );
  const [whitelabelAccountingSoftware, setWhitelabelAccountingSoftware] =
    useState<AccountingSoftwareFormTypes>(initialWhitelabelAccountingSoftware);
  const [whitelabelCloudDocument, setWhitelabelCloudDocument] =
    useState<CloudDocumentFormTypes>(initialWhitelabelCloudDocument);
  const [whitelabelMessenger, setWhitelabelMessenger] =
    useState<MessengerFormTypes>(initialWhitelabelMessenger);
  const [whitelabelSystemAccess, setWhitelabelSystemAccess] =
    useState<SystemAccessFormTypes>(initialWhitelabelSystemAccess);
  const [whitelabelOtherInfo, setWhitelabelOtherInfo] =
    useState<OtherInfoFormTypes>(initialWhitelabelOtherInfo);

  // 3
  const [whitelabelFTE, setWhitelabelFTE] =
    useState<FTEFormTypes>(initialWhitelabelFTE);
  const [whitelabelAccounting, setWhitelabelAccounting] =
    useState<AccountingFormTypes>(initialWhitelabelAccounting);
  const [whitelabelTax, setWhitelabelTax] =
    useState<TaxFormTypes>(initialWhitelabelTax);
  const [whitelabelWeekly, setWhitelabelWeekly] = useState<WeeklyFormTypes>(
    initialWhitelabelWeekly
  );
  const [whitelabelIndustry, setWhitelabelIndustry] =
    useState<IndustryFormTypes>(initialWhitelabelIndustry);

  // 4
  const [whitelabelCurrentChallenges, setWhitelabelCurrentChallenges] =
    useState<CurrentChallengesFormTypes>(initialWhitelabelCurrentChallenges);
  const [whitelabelExpectation, setWhitelabelExpectation] =
    useState<ExpectationFormTypes>(initialWhitelabelExpectation);

  // 5
  const [whitelabelMonthly, setWhitelabelMonthly] = useState<MonthlyFormTypes>(
    initialWhitelabelMonthly
  );
  const [whitelabelCleanup, setWhitelabelCleanup] = useState<CleanupFormTypes>(
    initialWhitelabelCleanup
  );
  const [whitelabelCatchup, setWhitelabelCatchup] = useState<CatchupFormTypes>(
    initialWhitelabelCatchup
  );
  const [whitelabelCombination, setWhitelabelCombination] =
    useState<CombinationFormTypes>(initialWhitelabelCombination);

  // 6
  const [whitelabelClient, setWhitelabelClient] = useState<ClientFormTypes>(
    initialWhitelabelClient
  );
  const [whitelabelPABS, setWhitelabelPABS] = useState<PabsFormTypes>(
    initialWhitelabelPABS
  );
  const [whitelabelBDM, setWhitelabelBDM] =
    useState<BdmFormTypes>(initialWhitelabelBDM);

  // 7
  const [whitelabelTimeZone, setWhitelabelTimeZone] =
    useState<TimeZoneFormTypes>(initialWhitelabelTimeZone);
  const [whitelabelConvenientDay, setWhitelabelConvenientDay] =
    useState<ConvenientDayFormTypes>(initialWhitelabelConvenientDay);
  const [whitelabelTimeSlot, setWhitelabelTimeSlot] =
    useState<TimeSlotFormTypes>(initialWhitelabelTimeSlot);

  const handleAccordianChange =
    (arg1: number) => (e: any, isExpanded: boolean) => {
      setExpandedAccordian(isExpanded ? arg1 : -1);
    };

  const handleSubmit = (type: number) => {
    if (type === 1) {
      setChecklistFormSubmit(3);
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
