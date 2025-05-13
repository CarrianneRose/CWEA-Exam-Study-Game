<script>
    const funFacts = [
      "Cold storage prevents microbial growth in samples.",
      "Chain of custody ensures legal traceability of samples.",
      "Sample ID numbers must be unique to avoid mix-ups.",
      "Holding time for BOD samples is exactly 48 hours.",
      "Label legibility is a key part of sample acceptance.",
      "Glassware must be acid-washed to prevent contamination.",
      "Sample bottles must match the preservative requirements.",
      "Some analytes degrade in light—amber bottles are used for protection.",
      "Late sample arrival can affect data usability for compliance.",
      "Proper PPE helps prevent accidental chemical exposure.",
      "Neutralizing acid waste before disposal is an EPA requirement.",
      "BOD stands for Biochemical Oxygen Demand, a key water quality metric.",
      "A properly calibrated balance reads to 4 decimal places for trace accuracy.",
      "The eye wash station should be flushed weekly—even if never used.",
      "DO meters must be air-calibrated before each test session.",
      "Sample labels must include the date, time, and sampler initials.",
      "Expired reagents can lead to inaccurate calibration results.",
      "Using the wrong bottle type can invalidate microbiological testing.",
      "Temperature logs ensure samples stay within holding requirements.",
      "MSDS sheets (now SDS) must be available for all lab chemicals.",
      "A fume hood airflow should be checked daily before use.",
      "Samples can ferment if not kept cold—producing false positives.",
      "Turbidity tubes are often used in fieldwork for low-tech clarity tests.",
      "Some nutrients degrade even when refrigerated—test promptly!",
      "Barcoding helps reduce human error in sample tracking."

    ];

    const fullSampleReceivingQuestions = [
  {
    text: "Why are samples logged in a LIMS?",
    answers: [
      { text: "To track from receipt to result", correct: true, explanation: "The LIMS manages the entire sample lifecycle." },
      { text: "To send to the accountant", correct: false, explanation: "Not relevant to billing." },
      { text: "To count how many bottles arrive", correct: false, explanation: "Not the main reason." }
    ]
  },
  {

    text: "What is the proper preservation temperature for most water samples?",
    answers: [
      { text: "At or below 6°C", correct: true, explanation: "Samples must be preserved at or below 6°C." },
      { text: "Room temperature", correct: false, explanation: "Room temperature is too warm for proper preservation." },
      { text: "Frozen", correct: false, explanation: "Freezing is not recommended for most tests." }
    ]
  },
  {
    text: "What must be checked upon sample receipt?",
    answers: [
      { text: "Temperature, labels, containers, and holding time", correct: true, explanation: "These are key criteria for accepting a sample." },
      { text: "Color and odor only", correct: false, explanation: "Those are not standard acceptance criteria." },
      { text: "Technician name and sample weight", correct: false, explanation: "Not required on receipt." }
    ]
  },
  {
    text: "Which document must accompany each sample?",
    answers: [
      { text: "Chain of custody form", correct: true, explanation: "This form documents the handling of the sample." },
      { text: "Packing slip", correct: false, explanation: "This is not legally sufficient." },
      { text: "Lab brochure", correct: false, explanation: "Unnecessary document." }
    ]
  },
  {
    text: "What happens if the sample temperature is too high?",
    answers: [
      { text: "It may be rejected", correct: true, explanation: "High temperature may invalidate results." },
      { text: "It is immediately tested", correct: false, explanation: "Invalid samples should not be tested." },
      { text: "Add ice to lower the temperature", correct: false, explanation: "Cooling after the fact is not accepted." }
    ]
  },
  {
    text: "How are samples uniquely identified?",
    answers: [
      { text: "By assigning a lab ID number", correct: true, explanation: "Each sample gets a unique tracking ID." },
      { text: "By technician initials", correct: false, explanation: "Not unique or traceable enough." },
      { text: "By container color", correct: false, explanation: "Too general to be useful." }
    ]
  },
  {
    text: "What type of sample requires immediate testing?",
    answers: [
      { text: "Chlorine residual", correct: true, explanation: "Chlorine dissipates quickly and must be tested immediately." },
      { text: "Turbidity", correct: false, explanation: "This can wait briefly if cooled." },
      { text: "Nutrient samples", correct: false, explanation: "Preservation is possible for those." }
    ]
  },
  {
    text: "Why are custody seals used?",
    answers: [
      { text: "To show if tampering occurred", correct: true, explanation: "Broken seals raise chain-of-custody concerns." },
      { text: "For decoration", correct: false, explanation: "Not their purpose." },
      { text: "To show expiration dates", correct: false, explanation: "They don’t indicate shelf life." }
    ]
  },
  {
    text: "Who is responsible for checking sample condition?",
    answers: [
      { text: "Receiving technician", correct: true, explanation: "They inspect and log the sample." },
      { text: "Courier", correct: false, explanation: "They only transport the sample." },
      { text: "Supervisor only", correct: false, explanation: "Supervisors may review, but not routinely check." }
    ]
  },
  {
    text: "What is the effect of incomplete sample labeling?",
    answers: [
      { text: "Possible rejection", correct: true, explanation: "Missing labels prevent traceability." },
      { text: "Lab assigns a random name", correct: false, explanation: "This violates procedures." },
      { text: "Hold until someone remembers", correct: false, explanation: "Unacceptable protocol." }
    ]
    },
  {
    text: "When is the chain of custody broken?",
    answers: [
      { text: "If documentation is missing", correct: true, explanation: "This disrupts legal traceability." },
      { text: "If the bottle is heavy", correct: false, explanation: "Not relevant." },
      { text: "If it contains sediment", correct: false, explanation: "Sediment is a sample attribute, not a COC concern." }
    ]
  },
  {
    text: "What is the correct procedure for leaking samples?",
    answers: [
      { text: "Reject or flag per SOP", correct: true, explanation: "Leakage may compromise integrity." },
      { text: "Clean bottle and accept", correct: false, explanation: "Improper handling." },
      { text: "Mix with non-leaking sample", correct: false, explanation: "Violates testing rules." }
    ]
  },
  {
    text: "Why are samples preserved chemically?",
    answers: [
      { text: "To stabilize analytes", correct: true, explanation: "Preservation prevents degradation." },
      { text: "To make it smell better", correct: false, explanation: "Not a scientific reason." },
      { text: "To color the sample", correct: false, explanation: "Color is not relevant." }
    ]
  },
  {
  text: "What is the first thing to do when a sample is received?",
  answers: [
    { text: "Inspect the condition and labeling", correct: true, explanation: "Initial inspection ensures sample integrity and documentation." },
    { text: "Place it in storage immediately", correct: false, explanation: "Storage comes after inspection and logging." },
    { text: "Assign it to an analyst", correct: false, explanation: "Assignment comes after proper logging and inspection." }
  ]
},
{
  text: "How should a broken sample container be handled?",
  answers: [
    { text: "Document and reject per SOP", correct: true, explanation: "Broken containers may compromise sample validity." },
    { text: "Transfer contents to a new container", correct: false, explanation: "This risks contamination and is not allowed." },
    { text: "Ignore it if most is intact", correct: false, explanation: "Even small damage can invalidate results." }
  ]
},
{
  text: "Why must sample temperature be recorded on receipt?",
  answers: [
    { text: "To verify it meets holding requirements", correct: true, explanation: "Temperature affects sample validity for certain tests." },
    { text: "Because it's interesting", correct: false, explanation: "It's not about curiosity—it's a compliance check." },
    { text: "To see if it's been frozen", correct: false, explanation: "Freezing may be relevant but is not the sole reason." }
  ]
},
{
  text: "Which of the following is a valid reason to reject a sample?",
  answers: [
    { text: "Missing label or broken seal", correct: true, explanation: "These compromise identification and custody." },
    { text: "Unusual color", correct: false, explanation: "Color alone does not justify rejection." },
    { text: "It's late in the day", correct: false, explanation: "Time of day is not a valid reason." }
  ]
},
{
  text: "How are rush samples handled?",
  answers: [
    { text: "Flagged and prioritized in LIMS", correct: true, explanation: "Rush samples require special handling and tracking." },
    { text: "Left for the next shift", correct: false, explanation: "Rush means it must be prioritized now." },
    { text: "Put in a separate fridge", correct: false, explanation: "Storage depends on test type, not rush status." }
  ]
},
{
  text: "What does a custody seal do?",
  answers: [
    { text: "Indicates potential tampering", correct: true, explanation: "A broken seal suggests unauthorized access." },
    { text: "Shows expiration date", correct: false, explanation: "That’s not the seal’s purpose." },
    { text: "Keeps the sample from leaking", correct: false, explanation: "Seal is about security, not physical closure." }
  ]
},
{
  text: "Why is complete labeling critical?",
  answers: [
    { text: "It links the sample to its source and request", correct: true, explanation: "Without labels, traceability and validity are lost." },
    { text: "It's required for billing", correct: false, explanation: "Accuracy and compliance, not billing, is the goal." },
    { text: "Because labels look official", correct: false, explanation: "Function, not appearance, is the reason." }
  ]
},
{
  text: "What is the best way to record sample temperature?",
  answers: [
    { text: "Using a calibrated thermometer", correct: true, explanation: "Only calibrated instruments ensure reliable data." },
    { text: "By feeling the container", correct: false, explanation: "Subjective impressions are not acceptable." },
    { text: "Using a nearby thermostat", correct: false, explanation: "Ambient readings don’t reflect actual sample condition." }
  ]
},
{
  text: "What should be done if the chain of custody form is missing?",
  answers: [
    { text: "Hold or reject the sample per SOP", correct: true, explanation: "Missing documentation breaks legal traceability." },
    { text: "Recreate the form yourself", correct: false, explanation: "Only authorized parties can issue COC forms." },
    { text: "Ignore if the label looks okay", correct: false, explanation: "Visual inspection doesn’t replace documentation." }
  ]
},
{
  text: "Which action maintains sample traceability?",
  answers: [
    { text: "Assigning and documenting a unique ID", correct: true, explanation: "This ensures you can track the sample from start to finish." },
    { text: "Storing it in the correct fridge", correct: false, explanation: "Storage is important but not sufficient alone." },
    { text: "Giving it to a technician quickly", correct: false, explanation: "Not enough without proper tracking." }
  ]
}

];

    const fullSafetyQuestions = [
  {
    text: "What is the first item of PPE you should put on?",
    answers: [
      { text: "Lab coat", correct: true, explanation: "Lab coats protect your clothes and skin from spills." },
      { text: "Gloves", correct: false, explanation: "Gloves usually come after protective clothing." },
      { text: "Goggles", correct: false, explanation: "Goggles typically go on after your lab coat and gloves." }
    ]
  },
  {
    text: "When should gloves be changed?",
    answers: [
      { text: "When contaminated or torn", correct: true, explanation: "Contaminated gloves must be replaced immediately." },
      { text: "At the end of the day", correct: false, explanation: "Gloves must be replaced more frequently." },
      { text: "Only if asked by supervisor", correct: false, explanation: "Glove changes are based on condition, not permission." }
    ]
  },
  {
    text: "What is the proper footwear in labs?",
    answers: [
      { text: "Closed-toe shoes", correct: true, explanation: "Open footwear exposes feet to hazards." },
      { text: "Sandals", correct: false, explanation: "These offer no protection." },
      { text: "Barefoot", correct: false, explanation: "Unsafe and prohibited." }
    ]
  },
  {
    text: "How often should the eyewash station be checked?",
    answers: [
      { text: "Weekly", correct: true, explanation: "Regular checks ensure functionality during emergencies." },
      { text: "Annually", correct: false, explanation: "Too infrequent to catch issues." },
      { text: "After a spill only", correct: false, explanation: "Inspections must be proactive." }
    ]
  },
  {
    text: "What should you do if a spill occurs?",
    answers: [
      { text: "Report it and follow spill procedures", correct: true, explanation: "Proper protocols prevent injury and contamination." },
      { text: "Ignore it", correct: false, explanation: "Spills can pose serious hazards." },
      { text: "Cover it with paper", correct: false, explanation: "This is not sufficient containment." }
    ]
  },
  {
    text: "What is the correct way to smell a chemical?",
    answers: [
      { text: "Waft the vapor toward your nose", correct: true, explanation: "Direct sniffing is dangerous." },
      { text: "Stick your nose directly over the container", correct: false, explanation: "Highly unsafe." },
      { text: "Ask someone else to smell it", correct: false, explanation: "Still a hazard and poor practice." }
    ]
  },
  {
    text: "Why are lab coats worn?",
    answers: [
      { text: "To protect personal clothing from contaminants", correct: true, explanation: "They prevent exposure to spills and splashes." },
      { text: "To look professional", correct: false, explanation: "Safety, not appearance, is the purpose." },
      { text: "To identify lab staff", correct: false, explanation: "Badges serve that role." }
    ]
  },
  {
    text: "How should long hair be managed in the lab?",
    answers: [
      { text: "Tie it back securely", correct: true, explanation: "Prevents it from contacting chemicals or flames." },
      { text: "Style it fashionably", correct: false, explanation: "Safety over fashion." },
      { text: "Wear a hat", correct: false, explanation: "Not effective for safety." }
    ]
  },
  {
    text: "What should you do before using lab equipment?",
    answers: [
      { text: "Review the operating procedure", correct: true, explanation: "Understanding equipment prevents misuse." },
      { text: "Turn knobs randomly", correct: false, explanation: "Dangerous and unprofessional." },
      { text: "Ask a janitor", correct: false, explanation: "Only trained personnel should operate equipment." }
    ]
  },
  {
    text: "Why is jewelry discouraged in labs?",
    answers: [
      { text: "It can trap chemicals against the skin", correct: true, explanation: "Also poses entanglement risks." },
      { text: "It might be unfashionable", correct: false, explanation: "Safety, not fashion, matters." },
      { text: "It makes you look rich", correct: false, explanation: "Irrelevant to lab safety." }
    ]
  },
  {
  text: "What should you do before leaving the lab?",
  answers: [
    { text: "Remove PPE and wash hands", correct: true, explanation: "This reduces contamination and chemical exposure outside the lab." },
    { text: "Take chemicals with you", correct: false, explanation: "Transporting lab chemicals is prohibited." },
    { text: "Leave PPE on for later", correct: false, explanation: "PPE should be removed after lab work." }
  ]
},
{
  text: "Which item is NOT considered PPE?",
  answers: [
    { text: "Lab manual", correct: true, explanation: "A lab manual is not protective equipment." },
    { text: "Gloves", correct: false, explanation: "Gloves are essential PPE." },
    { text: "Safety goggles", correct: false, explanation: "Goggles protect your eyes from hazards." }
  ]
},
{
  text: "Where should food and drinks be kept?",
  answers: [
    { text: "Outside of the lab", correct: true, explanation: "Eating and drinking in labs is strictly prohibited." },
    { text: "On your bench", correct: false, explanation: "This violates safety protocols." },
    { text: "Next to clean samples", correct: false, explanation: "Still unacceptable." }
  ]
},
{
  text: "What’s the safest way to dispose of broken glass?",
  answers: [
    { text: "Use a designated sharps or glass bin", correct: true, explanation: "Broken glass must go into a proper container." },
    { text: "Sweep into the trash", correct: false, explanation: "Can injure sanitation staff." },
    { text: "Flush down the drain", correct: false, explanation: "Not safe or allowed." }
  ]
},
{
  text: "How should you label a chemical bottle?",
  answers: [
    { text: "With the full name and hazard info", correct: true, explanation: "Proper labeling prevents misuse and accidents." },
    { text: "With your initials only", correct: false, explanation: "Incomplete and not traceable." },
    { text: "With a smiley face", correct: false, explanation: "Not helpful or compliant." }
  ]
},
{
  text: "What should you do if your glove is contaminated?",
  answers: [
    { text: "Change it immediately", correct: true, explanation: "Contamination can spread to equipment and yourself." },
    { text: "Wipe it on your coat", correct: false, explanation: "That spreads contamination." },
    { text: "Ignore it unless someone complains", correct: false, explanation: "Safety is your responsibility." }
  ]
},
{
  text: "Why is it important to know the location of the fire extinguisher?",
  answers: [
    { text: "To respond quickly in emergencies", correct: true, explanation: "Every second counts in a fire." },
    { text: "To look cool in front of others", correct: false, explanation: "Safety is not about appearances." },
    { text: "To use as a doorstop", correct: false, explanation: "Never block or misuse safety equipment." }
  ]
},
{
  text: "What color indicates a biohazard symbol?",
  answers: [
    { text: "Red or orange", correct: true, explanation: "These colors signify biological hazards." },
    { text: "Blue", correct: false, explanation: "Not typically used for biohazards." },
    { text: "Green", correct: false, explanation: "Green often indicates safety equipment." }
  ]
},
{
  text: "What is the best way to avoid cross-contamination?",
  answers: [
    { text: "Clean equipment and change gloves between tasks", correct: true, explanation: "Hygiene and caution are key to preventing contamination." },
    { text: "Use the same pipette for all tests", correct: false, explanation: "That's a common contamination source." },
    { text: "Store all samples together", correct: false, explanation: "Different samples should be isolated." }
  ]
},
{
  text: "What is the purpose of a fume hood?",
  answers: [
    { text: "To safely ventilate hazardous fumes", correct: true, explanation: "It protects you from inhaling toxic vapors." },
    { text: "To dry glassware", correct: false, explanation: "Not its function." },
    { text: "To store lab coats", correct: false, explanation: "Never use a fume hood for storage." }
  ]
}

];

  const fullEquipmentQuestions = [
  {
    text: "What is used to calibrate a pH meter?",
    answers: [
      { text: "Buffer solutions", correct: true, explanation: "Buffers provide known reference points for calibration." },
      { text: "Tap water", correct: false, explanation: "Tap water contains unknown ions and is not suitable for calibration." },
      { text: "Bleach", correct: false, explanation: "Bleach is corrosive and not used for calibration." }
    ]
  },
  {
    text: "How often should balances be calibrated?",
    answers: [
      { text: "Daily or before use", correct: true, explanation: "Frequent calibration ensures accurate measurements." },
      { text: "Once a year", correct: false, explanation: "Too infrequent for laboratory use." },
      { text: "Never", correct: false, explanation: "All measurement devices must be calibrated." }
    ]
  },
  {
    text: "Why is thermometer calibration important?",
    answers: [
      { text: "To ensure accurate temperature readings", correct: true, explanation: "Temperature affects many reactions and holding times." },
      { text: "To keep it shiny", correct: false, explanation: "Appearance doesn’t matter for accuracy." },
      { text: "To detect color changes", correct: false, explanation: "Calibration relates to measurement, not color." }
    ]
  },
  {
    text: "What kind of weight should be used for calibrating balances?",
    answers: [
      { text: "Certified calibration weights", correct: true, explanation: "Only certified weights ensure traceable accuracy." },
      { text: "Coins", correct: false, explanation: "Coins are not standard weights." },
      { text: "Paperclips", correct: false, explanation: "Improvised weights are not reliable." }
    ]
  },
  {
    text: "What should you check before calibrating a spectrophotometer?",
    answers: [
      { text: "Wavelength accuracy", correct: true, explanation: "Instrument settings must be verified before calibration." },
      { text: "Fan speed", correct: false, explanation: "Not a relevant factor for calibration." },
      { text: "Ambient noise", correct: false, explanation: "Noise does not impact spectrophotometer calibration." }
    ]
  },
  {
    text: "Which standard is used when calibrating a DO meter?",
    answers: [
      { text: "Air-saturated water", correct: true, explanation: "It provides a known oxygen concentration." },
      { text: "Tap water", correct: false, explanation: "DO in tap water is not standardized." },
      { text: "Boiled water", correct: false, explanation: "Boiled water has low DO and is not appropriate." }
    ]
  },
  {
    text: "What should be documented after calibration?",
    answers: [
      { text: "Date, time, results, and initials", correct: true, explanation: "Proper documentation ensures traceability." },
      { text: "Only the result", correct: false, explanation: "That’s incomplete documentation." },
      { text: "Only if something goes wrong", correct: false, explanation: "All calibrations must be recorded." }
    ]
  },
  {
    text: "When calibrating a pH meter, why is rinsing important?",
    answers: [
      { text: "To avoid cross-contamination between buffers", correct: true, explanation: "Residual buffer would alter calibration readings." },
      { text: "To make it look clean", correct: false, explanation: "The purpose is not aesthetic." },
      { text: "To cool the probe", correct: false, explanation: "Cooling is not required." }
    ]
  },
  {
    text: "How should calibration solutions be stored?",
    answers: [
      { text: "Tightly sealed and at room temperature", correct: true, explanation: "This preserves accuracy and stability." },
      { text: "Open to air", correct: false, explanation: "Evaporation affects concentration." },
      { text: "In a freezer", correct: false, explanation: "Freezing can damage some standards." }
    ]
  },
  {
    text: "What does a failed calibration indicate?",
    answers: [
      { text: "Instrument may be out of spec", correct: true, explanation: "Maintenance or re-calibration may be needed." },
      { text: "The test passed", correct: false, explanation: "A failed calibration means it's not valid." },
      { text: "You should ignore it", correct: false, explanation: "Never ignore failed calibrations." }
    ]
  },
  {
    text: "Why is calibration curve linearity important?",
    answers: [
      { text: "It ensures accurate measurement across range", correct: true, explanation: "Linearity allows valid interpolation of unknowns." },
      { text: "It looks nice on paper", correct: false, explanation: "Function, not appearance, matters." },
      { text: "It saves ink", correct: false, explanation: "Not related at all." }
    ]
  },
  {
    text: "What should you do before calibrating equipment?",
    answers: [
      { text: "Warm up the instrument", correct: true, explanation: "Some devices require thermal stabilization." },
      { text: "Shake it vigorously", correct: false, explanation: "This may damage the instrument." },
      { text: "Turn off the lights", correct: false, explanation: "Lighting doesn’t affect most instruments." }
    ]
  },
  {
    text: "How should you handle calibration logs?",
    answers: [
      { text: "Keep them accurate, complete, and accessible", correct: true, explanation: "Logs are essential for audit trails." },
      { text: "Discard them monthly", correct: false, explanation: "This destroys traceability." },
      { text: "Only log pH meters", correct: false, explanation: "All instruments must be logged." }
    ]
  },
  {
    text: "How can temperature affect calibration?",
    answers: [
      { text: "It can alter instrument response", correct: true, explanation: "Calibration may need compensation or standardization." },
      { text: "It never affects it", correct: false, explanation: "Temperature is often a critical factor." },
      { text: "Only affects light meters", correct: false, explanation: "It affects many types of instruments." }
    ]
  },
  {
    text: "When calibrating, what should you do if results are inconsistent?",
    answers: [
      { text: "Repeat with fresh standards", correct: true, explanation: "Old or contaminated standards can cause errors." },
      { text: "Guess the average", correct: false, explanation: "Estimates are not valid calibration." },
      { text: "Ignore and move on", correct: false, explanation: "Never skip inconsistent results." }
    ]
  },
  {
    text: "Which tool is used to check pipette accuracy?",
    answers: [
      { text: "Analytical balance", correct: true, explanation: "Weight of dispensed water confirms pipette performance." },
      { text: "Ruler", correct: false, explanation: "Volume isn’t measured by length." },
      { text: "Thermometer", correct: false, explanation: "Used for temperature, not volume." }
    ]
  },
  {
    text: "Why is zeroing important before calibration?",
    answers: [
      { text: "It removes background signal", correct: true, explanation: "Baseline must be stable before applying standards." },
      { text: "It saves battery", correct: false, explanation: "Zeroing has nothing to do with power." },
      { text: "It makes the display brighter", correct: false, explanation: "Zeroing is unrelated to visuals." }
    ]
  },
  {
    text: "How do you confirm a pH probe is working correctly?",
    answers: [
      { text: "It reads buffers accurately", correct: true, explanation: "Response in standard buffers confirms accuracy." },
      { text: "It smells clean", correct: false, explanation: "Odor is not an indicator of performance." },
      { text: "It’s labeled 'new'", correct: false, explanation: "Age alone doesn’t prove functionality." }
    ]
  },
  {
    text: "What is the acceptable tolerance for most calibrations?",
    answers: [
      { text: "Within manufacturer specs", correct: true, explanation: "Always follow the equipment’s documented limits." },
      { text: "Whatever seems close", correct: false, explanation: "Precision is not subjective." },
      { text: "Zero deviation", correct: false, explanation: "A tiny margin is acceptable." }
    ]
  },
  {
    text: "What should you avoid during calibration?",
    answers: [
      { text: "Contaminating standards", correct: true, explanation: "Contamination will invalidate calibration results." },
      { text: "Wearing gloves", correct: false, explanation: "Gloves are required during calibration." },
      { text: "Using labels", correct: false, explanation: "Labels help track solutions." }
    ]
  }
];

const fullBODQuestions = [
  {
    text: "What does BOD stand for in water testing?",
    answers: [
      { text: "Biochemical Oxygen Demand", correct: true, explanation: "BOD measures the oxygen consumed by microorganisms." },
      { text: "Biological Oxide Determinant", correct: false, explanation: "This is not a real term." },
      { text: "Buffer Oxidation Data", correct: false, explanation: "Incorrect acronym interpretation." }
    ]
  },
  {
    text: "What is the standard incubation time for a BOD test?",
    answers: [
      { text: "5 days", correct: true, explanation: "The BOD5 test measures oxygen demand over 5 days." },
      { text: "24 hours", correct: false, explanation: "Too short to meet standard BOD testing requirements." },
      { text: "7 days", correct: false, explanation: "BOD5 is specifically a 5-day test." }
    ]
  },
  {
    text: "What is the purpose of a BOD blank sample?",
    answers: [
      { text: "To measure background oxygen demand", correct: true, explanation: "It ensures no oxygen demand from dilution water or reagents." },
      { text: "To test chlorine levels", correct: false, explanation: "Chlorine testing is not part of the BOD blank." },
      { text: "To check for sediment", correct: false, explanation: "BOD blanks are about oxygen demand, not solids." }
    ]
  },{
  text: "What is the typical temperature for BOD incubation?",
  answers: [
    { text: "20°C", correct: true, explanation: "Standard BOD tests are incubated at 20°C ±1°C." },
    { text: "4°C", correct: false, explanation: "That’s for sample storage, not incubation." },
    { text: "37°C", correct: false, explanation: "Too warm—used for microbiological growth, not BOD." }
  ]
},
{
  text: "Why is nitrification inhibition used in some BOD tests?",
  answers: [
    { text: "To prevent ammonia oxidation", correct: true, explanation: "Nitrifying bacteria can inflate BOD results." },
    { text: "To increase microbial growth", correct: false, explanation: "It actually suppresses a specific microbial pathway." },
    { text: "To color the water", correct: false, explanation: "It’s a chemical control, not an indicator." }
  ]
},
{
  text: "What type of bottle is used for BOD testing?",
  answers: [
    { text: "300 mL glass BOD bottle", correct: true, explanation: "It allows proper oxygen volume and tight sealing." },
    { text: "Plastic soda bottle", correct: false, explanation: "Not chemically inert or standardized." },
    { text: "Beaker", correct: false, explanation: "Open containers are not used in BOD testing." }
  ]
},
{
  text: "How is dissolved oxygen (DO) measured in BOD tests?",
  answers: [
    { text: "With a DO meter or Winkler titration", correct: true, explanation: "Both are standard methods for measuring DO." },
    { text: "With a pH probe", correct: false, explanation: "That measures acidity, not oxygen." },
    { text: "With a thermometer", correct: false, explanation: "Temperature is unrelated to DO measurement itself." }
  ]
},
{
  text: "Why is dilution water used in BOD tests?",
  answers: [
    { text: "To provide a consistent medium for microbes", correct: true, explanation: "It ensures oxygen and nutrient availability." },
    { text: "To make the sample lighter in color", correct: false, explanation: "It has nothing to do with color." },
    { text: "To increase DO artificially", correct: false, explanation: "It’s to provide natural conditions, not to cheat results." }
  ]
},
{
  text: "What is seeded dilution water?",
  answers: [
    { text: "Dilution water with microbial inoculum", correct: true, explanation: "Seeding is required when samples are sterilized or low in microbes." },
    { text: "Water with algae", correct: false, explanation: "Algae are not the intended seed source." },
    { text: "Pure oxygenated water", correct: false, explanation: "It must support microbial activity, not just oxygen." }
  ]
},
{
  text: "What is the purpose of a glucose-glutamic acid (GGA) check?",
  answers: [
    { text: "To verify dilution water and technique", correct: true, explanation: "GGA is a control substance with a known BOD value." },
    { text: "To test color change", correct: false, explanation: "It’s not a colorimetric control." },
    { text: "To preserve samples", correct: false, explanation: "GGA is a standard, not a preservative." }
  ]
},
{
  text: "How is BOD calculated?",
  answers: [
    { text: "Initial DO - Final DO", correct: true, explanation: "The oxygen consumed over 5 days equals BOD." },
    { text: "Final DO ÷ Initial DO", correct: false, explanation: "That’s not the correct formula." },
    { text: "DO × Temperature", correct: false, explanation: "Temperature is controlled, not part of the equation." }
  ]
},
{
  text: "What happens if a BOD bottle leaks during incubation?",
  answers: [
    { text: "The test is invalidated", correct: true, explanation: "Leaks alter oxygen levels and invalidate the test." },
    { text: "It becomes a blank", correct: false, explanation: "Blanks are prepared intentionally, not from accidents." },
    { text: "Just tighten the cap and keep going", correct: false, explanation: "You cannot continue a compromised sample." }
  ]
},
{
  text: "Why is sample homogenization important in BOD testing?",
  answers: [
    { text: "To ensure even distribution of organic matter", correct: true, explanation: "Uniformity is key for reproducible results." },
    { text: "To reduce turbidity", correct: false, explanation: "That’s not the purpose." },
    { text: "To kill bacteria", correct: false, explanation: "That would defeat the purpose of a biological test." }
  ]
},
{
  text: "Why is acid-washed glassware used in BOD testing?",
  answers: [
    { text: "To remove any organic residues", correct: true, explanation: "Contaminants can skew oxygen demand results." },
    { text: "To make it shiny", correct: false, explanation: "This is irrelevant to testing." },
    { text: "To remove color", correct: false, explanation: "Color doesn’t affect BOD readings." }
  ]
},
{
  text: "What’s the impact of air bubbles in a BOD bottle?",
  answers: [
    { text: "They add extra oxygen", correct: true, explanation: "This would alter the DO readings and invalidate the test." },
    { text: "They help microbes breathe", correct: false, explanation: "Microbes use dissolved, not free, oxygen." },
    { text: "They keep the sample fresh", correct: false, explanation: "Incorrect; freshness is about temperature." }
  ]
},
{
  text: "What is the purpose of incubation in darkness?",
  answers: [
    { text: "To prevent photosynthesis", correct: true, explanation: "Light could allow algae to produce oxygen, skewing results." },
    { text: "To save energy", correct: false, explanation: "This isn’t an energy-saving decision." },
    { text: "To cool the water", correct: false, explanation: "Temperature is maintained, not lowered." }
  ]
},
{
  text: "Why are BOD results expressed in mg/L?",
  answers: [
    { text: "To represent oxygen consumed per liter", correct: true, explanation: "This standard unit reflects oxygen depletion." },
    { text: "To show weight of solids", correct: false, explanation: "That would be TSS or similar tests." },
    { text: "To calculate pH", correct: false, explanation: "pH is measured with a different scale entirely." }
  ]
},
{
  text: "How soon must BOD analysis begin after sample collection?",
  answers: [
    { text: "Within 48 hours", correct: true, explanation: "Holding time for BOD samples is strictly 48 hours." },
    { text: "After a week", correct: false, explanation: "That’s well past holding time." },
    { text: "Whenever convenient", correct: false, explanation: "Timing is regulated to ensure accuracy." }
  ]
}
];

const fullTSSQuestions = [
  {
    text: "What is the purpose of the TSS test in wastewater analysis?",
    answers: [
      { text: "To measure total suspended solids", correct: true, explanation: "TSS measures all particulate matter suspended in water." },
      { text: "To detect microbial activity", correct: false, explanation: "That is not the primary function of the TSS test." },
      { text: "To measure organic nitrogen", correct: false, explanation: "Organic nitrogen is not measured by TSS." }
    ]
  },
  {
    text: "What type of filter is typically used for TSS testing?",
    answers: [
      { text: "Glass fiber filter", correct: true, explanation: "Standard Methods recommends a glass fiber filter with 1.5 µm pore size." },
      { text: "Carbon block filter", correct: false, explanation: "Carbon filters are used for chemical removal, not solids." },
      { text: "Paper coffee filter", correct: false, explanation: "Not precise enough for lab analysis." }
    ]
  },
  {
    text: "What is the correct temperature for drying filters in TSS analysis?",
    answers: [
      { text: "103–105°C", correct: true, explanation: "This is the standard drying range in TSS protocols." },
      { text: "80°C", correct: false, explanation: "Too low for full drying of solids." },
      { text: "150°C", correct: false, explanation: "Too high and can burn organic matter." }
    ]
  },
  {
    text: "What does TVSS measure?",
    answers: [
      { text: "The organic fraction of suspended solids", correct: true, explanation: "TVSS is the portion that burns off at 550°C." },
      { text: "Total volatile salts", correct: false, explanation: "TVSS relates to solids, not salts." },
      { text: "Total viable spores", correct: false, explanation: "Unrelated to solids testing." }
    ]
  },
  {
    text: "How is TVSS determined from TSS?",
    answers: [
      { text: "By igniting the dried filter at 550°C", correct: true, explanation: "This burns off volatile (organic) solids." },
      { text: "By adding acid", correct: false, explanation: "Acid doesn’t differentiate organic/inorganic solids." },
      { text: "By weighing the dried solids before and after freezing", correct: false, explanation: "Freezing has no effect here." }
    ]
  },
{
  text: "What is the typical pore size of a glass fiber filter used for TSS?",
  answers: [
    { text: "1.5 microns", correct: true, explanation: "This is the standard pore size per Standard Methods." },
    { text: "0.2 microns", correct: false, explanation: "Too small and more appropriate for bacterial filtration." },
    { text: "5 microns", correct: false, explanation: "Too large to retain most suspended solids." }
  ]
},
{
  text: "What is the correct procedure if the TSS sample clogs the filter?",
  answers: [
    { text: "Use a smaller volume of sample", correct: true, explanation: "Volume should be reduced to prevent clogging." },
    { text: "Use a paper towel to blot it", correct: false, explanation: "That would invalidate the results." },
    { text: "Add bleach to dissolve the solids", correct: false, explanation: "This would destroy the integrity of the sample." }
  ]
},
{
  text: "What does it mean if the TSS result is much higher than expected?",
  answers: [
    { text: "Sample may have been shaken or disturbed before settling", correct: true, explanation: "Disturbing the sample can resuspend solids." },
    { text: "The sample was too clear", correct: false, explanation: "That would typically lower TSS." },
    { text: "You used a dissolved oxygen probe", correct: false, explanation: "That’s unrelated to TSS measurement." }
  ]
},
{
  text: "Why must the filter be cooled in a desiccator before weighing?",
  answers: [
    { text: "To prevent moisture uptake from the air", correct: true, explanation: "Cooling in a desiccator keeps the weight consistent." },
    { text: "To make it easier to peel off solids", correct: false, explanation: "Solids are not peeled; they remain on the filter." },
    { text: "To make the scale respond faster", correct: false, explanation: "Weighing stability depends on dryness, not speed." }
  ]
},
{
  text: "How should you report a TSS result?",
  answers: [
    { text: "As mg/L", correct: true, explanation: "TSS is reported in milligrams per liter of sample." },
    { text: "As ppmv", correct: false, explanation: "Parts per million by volume is for gases." },
    { text: "As % solids", correct: false, explanation: "That format is used for sludge and soil solids, not water." }
  ]
},
{
  text: "What could cause unexpectedly low TSS results?",
  answers: [
    { text: "Incomplete sample mixing", correct: true, explanation: "Heavier solids settle and may not be measured." },
    { text: "Too high sample temperature", correct: false, explanation: "That wouldn’t significantly affect TSS." },
    { text: "Using a UV spectrometer", correct: false, explanation: "Spectrometers are not used for TSS gravimetric testing." }
  ]
},
{
  text: "Why is duplicate testing important in solids analysis?",
  answers: [
    { text: "To ensure accuracy and reproducibility", correct: true, explanation: "Duplicates confirm lab consistency." },
    { text: "To use up more filters", correct: false, explanation: "Lab efficiency is not a goal of redundancy." },
    { text: "To create backup results in case of fire", correct: false, explanation: "That’s not a lab standard purpose." }
  ]
},
{
  text: "When calculating TSS, what is subtracted from the final weight?",
  answers: [
    { text: "The tare weight of the filter", correct: true, explanation: "Only the solid weight is needed." },
    { text: "The volume of sample filtered", correct: false, explanation: "Volume is used to calculate concentration, not weight." },
    { text: "The weight of the balance", correct: false, explanation: "The balance weight has no role in the formula." }
  ]
},
{
  text: "Which step is required before reusing glassware for TSS?",
  answers: [
    { text: "Thorough rinsing with DI water", correct: true, explanation: "This prevents cross-contamination of solids." },
    { text: "Heating to 1000°C", correct: false, explanation: "Excessive and unnecessary." },
    { text: "Coating with glycerin", correct: false, explanation: "That would interfere with results." }
  ]
},
{
  text: "What could lead to high variability in replicate TSS results?",
  answers: [
    { text: "Inconsistent sample mixing", correct: true, explanation: "Solids distribution affects measurements." },
    { text: "Too much UV exposure", correct: false, explanation: "UV light is unrelated to gravimetric TSS." },
    { text: "Incorrect colorimeter setting", correct: false, explanation: "Colorimeters are not used in TSS analysis." }
  ]
}
];
function startLabDay() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('sample-login').classList.remove('hidden');
  renderQuestions();
}

function goToNextStage() {
  document.getElementById('congrats-screen').classList.add('hidden');
  document.getElementById('safety-setup').classList.remove('hidden');
  renderSafetyQuestions();
}

function goToEquipmentCalibration() {
  document.getElementById('safety-congrats').classList.add('hidden');
  document.getElementById('equipment-calibration').classList.remove('hidden');
  renderEquipmentQuestions();
}

function goToBODtest() {
  document.getElementById('equipment-congrats').classList.add('hidden');
  document.getElementById('bod-test').classList.remove('hidden');
  renderBODQuestions();
}

function goToTSSTVSStest() {
  document.getElementById('bod-congrats').classList.add('hidden');
  document.getElementById('tsstvss-test').classList.remove('hidden');
  renderTSSQuestions();
}

function renderQuestions() {
  const questions = [...fullSampleReceivingQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
  const container = document.getElementById('question-container');
  container.innerHTML = '';
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    const qText = document.createElement('strong');
    qText.textContent = `Q${index + 1}: ${q.text}`;
    div.appendChild(qText);
    const shuffled = [...q.answers].sort(() => Math.random() - 0.5);
    shuffled.forEach(answer => {
      const aDiv = document.createElement('div');
      aDiv.className = 'answer';
      aDiv.textContent = answer.text;
      aDiv.onclick = () => selectAnswer(aDiv, answer.correct, answer.explanation);
      div.appendChild(aDiv);
    });
    const fb = document.createElement('div');
    fb.className = 'feedback';
    div.appendChild(fb);
    container.appendChild(div);
  });
}

function renderSafetyQuestions() {
  const questions = [...fullSafetyQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
  const container = document.getElementById('safety-question-container');
  container.innerHTML = '';
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    const qText = document.createElement('strong');
    qText.textContent = `Q${index + 1}: ${q.text}`;
    div.appendChild(qText);
    const shuffled = [...q.answers].sort(() => Math.random() - 0.5);
    shuffled.forEach(answer => {
      const aDiv = document.createElement('div');
      aDiv.className = 'answer';
      aDiv.textContent = answer.text;
      aDiv.onclick = () => selectAnswer(aDiv, answer.correct, answer.explanation);
      div.appendChild(aDiv);
    });
    const fb = document.createElement('div');
    fb.className = 'feedback';
    div.appendChild(fb);
    container.appendChild(div);
  });
}

function renderEquipmentQuestions() {
  const questions = [...fullEquipmentQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
  const container = document.getElementById('equipment-question-container');
  container.innerHTML = '';
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    const qText = document.createElement('strong');
    qText.textContent = `Q${index + 1}: ${q.text}`;
    div.appendChild(qText);
    const shuffled = [...q.answers].sort(() => Math.random() - 0.5);
    shuffled.forEach(answer => {
      const aDiv = document.createElement('div');
      aDiv.className = 'answer';
      aDiv.textContent = answer.text;
      aDiv.onclick = () => selectAnswer(aDiv, answer.correct, answer.explanation);
      div.appendChild(aDiv);
    });
    const fb = document.createElement('div');
    fb.className = 'feedback';
    div.appendChild(fb);
    container.appendChild(div);
  });
}

function renderBODQuestions() {
  const questions = [...fullBODQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
  const container = document.getElementById('bod-question-container');
  container.innerHTML = '';
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    const qText = document.createElement('strong');
    qText.textContent = `Q${index + 1}: ${q.text}`;
    div.appendChild(qText);
    const shuffled = [...q.answers].sort(() => Math.random() - 0.5);
    shuffled.forEach(answer => {
      const aDiv = document.createElement('div');
      aDiv.className = 'answer';
      aDiv.textContent = answer.text;
      aDiv.onclick = () => selectAnswer(aDiv, answer.correct, answer.explanation);
      div.appendChild(aDiv);
    });
    const fb = document.createElement('div');
    fb.className = 'feedback';
    div.appendChild(fb);
    container.appendChild(div);
  });
}

function renderTSSQuestions() {
  const questions = [...fullTSSQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
  const container = document.getElementById('tsstvss-question-container');
  container.innerHTML = '';
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    const qText = document.createElement('strong');
    qText.textContent = `Q${index + 1}: ${q.text}`;
    div.appendChild(qText);
    const shuffled = [...q.answers].sort(() => Math.random() - 0.5);
    shuffled.forEach(answer => {
      const aDiv = document.createElement('div');
      aDiv.className = 'answer';
      aDiv.textContent = answer.text;
      aDiv.onclick = () => selectAnswer(aDiv, answer.correct, answer.explanation);
      div.appendChild(aDiv);
    });
    const fb = document.createElement('div');
    fb.className = 'feedback';
    div.appendChild(fb);
    container.appendChild(div);
  });
}

function selectAnswer(element, isCorrect, explanation) {
  const parent = element.parentElement;
  const feedback = parent.querySelector('.feedback');
  const answers = parent.querySelectorAll('.answer');
  answers.forEach(a => a.classList.remove('correct', 'incorrect'));
  if (isCorrect) {
    element.classList.add('correct');
    feedback.textContent = '✅That’s Right!✨✨✨ ' + explanation;
  } else {
    element.classList.add('incorrect');
    feedback.textContent = '❌No Buddy. Super Wrong.💔 ' + explanation;
  }
  const containerId = parent.closest('.stage').querySelector('.question').parentElement.id;
  checkAllCorrect(containerId);
}

function checkAllCorrect(containerId) {
  const allQuestions = document.querySelectorAll(`#${containerId} .question`);
  let allCorrect = true;
  allQuestions.forEach(q => {
    const answers = q.querySelectorAll('.answer');
    let found = false;
    answers.forEach(a => {
      if (a.classList.contains('correct')) found = true;
    });
    if (!found) allCorrect = false;
  });

  if (allCorrect && containerId === 'question-container') {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('fun-fact').textContent = randomFact;
    setTimeout(() => {
      document.getElementById('sample-login').classList.add('hidden');
      document.getElementById('congrats-screen').classList.remove('hidden');
    }, 600);
  } else if (allCorrect && containerId === 'safety-question-container') {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('safety-fun-fact').textContent = randomFact;
    setTimeout(() => {
      document.getElementById('safety-setup').classList.add('hidden');
      document.getElementById('safety-congrats').classList.remove('hidden');
    }, 600);
  } else if (allCorrect && containerId === 'equipment-question-container') {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('equipment-fun-fact').textContent = randomFact;
    setTimeout(() => {
      document.getElementById('equipment-calibration').classList.add('hidden');
      document.getElementById('equipment-congrats').classList.remove('hidden');
    }, 600);
  } else if (allCorrect && containerId === 'bod-question-container') {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('bod-fun-fact').textContent = randomFact;
    setTimeout(() => {
      document.getElementById('bod-test').classList.add('hidden');
      document.getElementById('bod-congrats').classList.remove('hidden');
    }, 600);
  } else if (allCorrect && containerId === 'tsstvss-question-container') {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('tsstvss-fun-fact').textContent = randomFact;
    setTimeout(() => {
      document.getElementById('tsstvss-test').classList.add('hidden');
      document.getElementById('tsstvss-congrats').classList.remove('hidden');
    }, 600);
      }
        }

// Define additional functions for game logic here...
