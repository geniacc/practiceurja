import React from "react";
import "./Policies.css";

export default function StaffLoanAdvance() {
  return (
    <div className="policy-detail">
      <h1>Staff Loan and Salary Advance Policy</h1>
      <h2>MTOW Private Limited</h2>

      <h3>1. Loan Facility</h3>

      <h4>Eligibility</h4>
      <ul>
        <li>Available only to confirmed employees of MTOW.</li>
        <li>Minimum of one (1) year of continuous service with the company.</li>
        <li>No new loan will be granted if a previous loan (including asset or vehicle loan) is outstanding.</li>
      </ul>

      <h4>Purpose of Loan</h4>
      <p>No restriction on the purpose of the loan; employees may use the funds as needed.</p>

      <h4>Loan Amount</h4>
      <ul>
        <li>Maximum loan amount is up to three (3) times the employee’s monthly gross salary (rounded to the nearest ₹1,000).</li>
      </ul>

      <h4>Cost of Loan</h4>
      <ul>
        <li>No processing fees.</li>
        <li>Interest charged at 15% per annum on the reducing balance.</li>
      </ul>

      <h4>Repayment</h4>
      <ul>
        <li>Maximum loan tenure: 12 months.</li>
        <li>Repayment through equal monthly installments (EMI) deducted directly from salary.</li>
        <li>The company may, at its discretion, accelerate repayment or adjust outstanding loan amounts against other receivables (e.g., travel bills, incentives).</li>
        <li>Voluntary pre-closure or pre-payment is allowed, but no concession on service charges.</li>
        <li>On separation (resignation, termination, etc.), the employee must immediately and fully repay the outstanding loan. No adjustment against final settlement or other payables by the company is permitted.</li>
      </ul>

      <h4>Application & Approval Process</h4>
      <ul>
        <li>Employees must apply using the specified loan application form, submitting:
          <ul>
            <li>A passport-size photograph.</li>
            <li>Three (3) post-dated cheques in favor of MTOW.</li>
            <li>A signed promissory note with an affixed revenue stamp.</li>
          </ul>
        </li>
        <li>The Reporting Officer (e.g., Department Manager) recommends the loan to their superior, who forwards it to the Line Manager.</li>
        <li>Final loan sanction is made by the Line Manager and another designated Manager.</li>
        <li>For Managers, the Managing Director is the sanctioning authority.</li>
      </ul>

      <h3>2. Salary Advance Facility</h3>

      <h4>Eligibility</h4>
      <ul>
        <li>Available only to confirmed staff members.</li>
        <li>Advances are granted solely for medical emergencies or other critical needs.</li>
        <li>No new advance will be granted if a previous advance is outstanding.</li>
      </ul>

      <h4>Advance Amount</h4>
      <ul>
        <li>Maximum advance is up to one (1) month’s gross salary (rounded to the nearest ₹1,000).</li>
      </ul>

      <h4>Repayment</h4>
      <ul>
        <li>Advance is recovered in four (4) equal monthly installments deducted from salary.</li>
        <li>The company may, at its discretion, accelerate repayment or adjust against other receivables (e.g., travel bills, incentives).</li>
      </ul>

      <h4>Application & Approval Process</h4>
      <ul>
        <li>Employees must apply using the specified advance application form, submitting:
          <ul>
            <li>A passport-size photograph.</li>
            <li>Three (3) post-dated cheques in favor of MTOW.</li>
          </ul>
        </li>
        <li>The Reporting Officer recommends the advance, which must be approved by the Line Manager.</li>
      </ul>

      <h3>3. General Conditions</h3>
      <ul>
        <li>All applications and supporting documents must be complete and accurate.</li>
        <li>The company reserves the right to amend, suspend, or withdraw this policy at any time.</li>
        <li>Any exceptions to this policy require approval from the Managing Director.</li>
        <li>For questions or clarifications, please contact the HR Department of MTOW.</li>
      </ul>
    </div>
  );
}
