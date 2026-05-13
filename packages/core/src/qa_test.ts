import { DeadManSwitch, DeadManConfig } from './deadman';

const runQA = () => {
  console.log("🚀 STARTING SENIOR QA AUDIT: CORE LOGIC\n");

  const now = new Date();
  
  const scenarios = [
    {
      name: "Scenario A: User Healthy (Last check-in 2 days ago, Interval 7 days)",
      config: { lastCheckIn: new Date(new Date().setDate(now.getDate() - 2)), checkInIntervalDays: 7, gracePeriodDays: 3 },
      expectedStatus: "ACTIVE"
    },
    {
      name: "Scenario B: Warning Zone (Last check-in 8 days ago, Interval 7 days)",
      config: { lastCheckIn: new Date(new Date().setDate(now.getDate() - 8)), checkInIntervalDays: 7, gracePeriodDays: 3 },
      expectedStatus: "WARNING"
    },
    {
      name: "Scenario C: Triggered (Last check-in 12 days ago, Interval 7 days, Grace 3 days)",
      config: { lastCheckIn: new Date(new Date().setDate(now.getDate() - 12)), checkInIntervalDays: 7, gracePeriodDays: 3 },
      expectedStatus: "TRIGGERED"
    },
    {
      name: "Scenario D: Boundary Test (Exactly at Grace Period Limit)",
      config: { lastCheckIn: new Date(new Date().setDate(now.getDate() - 10)), checkInIntervalDays: 7, gracePeriodDays: 3 },
      expectedStatus: "TRIGGERED"
    }
  ];

  scenarios.forEach(s => {
    const status = DeadManSwitch.getStatus(s.config as DeadManConfig);
    const remaining = DeadManSwitch.getDaysRemaining(s.config as DeadManConfig);
    const passed = status === s.expectedStatus;
    
    console.log(`[${passed ? 'PASS' : 'FAIL'}] ${s.name}`);
    console.log(`      -> Status: ${status}, Days Remaining: ${remaining}`);
  });

  console.log("\n✅ CORE LOGIC AUDIT COMPLETE.");
};

runQA();
