// defects.js — Defect Category reference data (Main Defect / Defect Detail / Code Defect)
// Expected to be generated from "DB Master.xlsx" — the SAME workbook
// parts.js already reads (see parts.js's own header comment) — from two
// additional tables in that file:
//
//   MainDefectMaster
//     column A = main_defect_id   -> MAIN_DEFECT_DATABASE[].id
//     column B = main_defect_en   -> MAIN_DEFECT_DATABASE[].mainDefectEn
//
//   SubDefectMaster
//     column A = code                    -> SUB_DEFECT_DATABASE[].code
//     column B = main_defect_id (FK)      -> SUB_DEFECT_DATABASE[].mainDefectId
//     column D = sub_defect_detail_clean  -> SUB_DEFECT_DATABASE[].subDefectDetailClean
//
// main.html's Step 1 form (Dates & Problem Description card) reads these
// via loadDefectDatabase() to drive three cascading fields:
//   Main Defect   (select, from MAIN_DEFECT_DATABASE)
//   Defect Detail (select, from SUB_DEFECT_DATABASE filtered to
//                  mainDefectId === the chosen Main Defect's id)
//   Code Defect   (read-only, auto-filled from the chosen Defect Detail
//                  row's own `code`)
//
// THIS FILE IS CURRENTLY EMPTY (no MainDefectMaster/SubDefectMaster rows
// were available when it was generated) — Step 1's Defect Category
// selects will show "No defect data available" until this file is
// regenerated with real rows in the shape below, matching how
// parts.js/users.js/claims.js/Evaluates.js/distributors.js already work
// in this app (a PAD flow reads the source workbook/list and rewrites the
// matching .js file — set one up for this file the same way, reading
// MainDefectMaster + SubDefectMaster from DB Master.xlsx).
var MAIN_DEFECT_DATABASE = [
  // { id: "1", mainDefectEn: "Example Main Defect" },
];
var SUB_DEFECT_DATABASE = [
  // { code: "SD001", mainDefectId: "1", subDefectDetailClean: "Example Defect Detail" },
];
